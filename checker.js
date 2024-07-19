const axios = require('axios');
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

const localFilePath = 'versions.json';
const webFileUrl = 'https://raw.githubusercontent.com/Ascensionist/revisions/main/versions.json';
const downloadPath = 'versions.json';

function getFileHash(filePath) {
  return new Promise((resolve, reject) => {
    const hash = crypto.createHash('sha256');
    const stream = fs.createReadStream(filePath);

    stream.on('data', (data) => {
      hash.update(data);
    });

    stream.on('end', () => {
      resolve(hash.digest('hex'));
    });

    stream.on('error', (err) => {
      reject(err);
    });
  });
}

async function downloadFile(url, outputPath) {
  const writer = fs.createWriteStream(outputPath);
  const response = await axios({
    url,
    method: 'GET',
    responseType: 'stream'
  });

  response.data.pipe(writer);

  return new Promise((resolve, reject) => {
    writer.on('finish', resolve);
    writer.on('error', reject);
  });
}

async function main() {
  try {
    const localHash = await getFileHash(localFilePath);
    console.log(`Local file hash: ${localHash}`);

    const webResponse = await axios.get(webFileUrl, { responseType: 'arraybuffer' });
    const webFileBuffer = Buffer.from(webResponse.data);
    const webHash = crypto.createHash('sha256').update(webFileBuffer).digest('hex');
    console.log(`Web file hash: ${webHash}`);

    if (localHash !== webHash) {
      console.log('Hashes do not match. Downloading web file...');
      await downloadFile(webFileUrl, downloadPath);
      console.log('File downloaded successfully.');
    } else {
      console.log('Hashes match. No need to download the file.');
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

main();

module.exports = { main }
