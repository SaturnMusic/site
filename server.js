const http = require('http');
const fs = require('fs');
const path = require('path');
const checker = require('./checker.js')

const port = 3000;

const server = http.createServer((req, res) => {
    let filePath;
    let contentType;

    let url = req.url.replace(/^\/+/, '/');

    if (url === '/' || url === '/index.html') {
        filePath = path.join(__dirname, 'index.html');
        contentType = 'text/html';
    } else if (url === '/css/global.css') {
        filePath = path.join(__dirname, 'global.css');
        contentType = 'text/css';
    } else if (url === '/css/bundle.css') {
        filePath = path.join(__dirname, 'bundle.css');
        contentType = 'text/css';
    } else if (url === '/css/css2.css') {
        filePath = path.join(__dirname, 'css2.css');
        contentType = 'text/css';
    } else if (url === '/images/favicon.png') {
        filePath = path.join(__dirname, 'saturnlogo.png');
        contentType = 'image/png';
    } else if (url === '/freezer.gltf') {
        filePath = path.join(__dirname, 'final.gltf');
        contentType = 'model/gltf+json';
    } else if (url === '/texturev2.png') {
        filePath = path.join(__dirname, 'texturev2.png');
        contentType = 'image/png';
    } else if (url === '/final.bin') {
        filePath = path.join(__dirname, 'final.bin');
        contentType = 'application/octet-stream';
    } else if (url === '/api/versions') {
        checker.main()
        filePath = path.join(__dirname, 'versions.json');
        contentType = 'text/json';
    } else if (url === '/fonts/VdGBAYIAV6gnpUpoWwNkYvrugw9RuM0q5psPrfqk33YqOjLBxkUhdkeuqyIMwGYkDA.118.woff2') {
        filePath = path.join(__dirname, 'VdGBAYIAV6gnpUpoWwNkYvrugw9RuM0q5psPrfqk33YqOjLBxkUhdkeuqyIMwGYkDA.118.woff2');
        contentType = 'font/woff2';
    } else if (url === '/fonts/VdGBAYIAV6gnpUpoWwNkYvrugw9RuM0q5psPrfqk33YqOjLBxkUhdkeuqyIMwGYkDA.119.woff2') {
        filePath = path.join(__dirname, 'VdGBAYIAV6gnpUpoWwNkYvrugw9RuM0q5psPrfqk33YqOjLBxkUhdkeuqyIMwGYkDA.119.woff2');
        contentType = 'font/woff2';
    } else if (url === '/fonts/VdGEAYIAV6gnpUpoWwNkYvrugw9RuPWDpq8A_4TPv30lLyDK_FIhT0K-oTdprA.118.woff2') {
        filePath = path.join(__dirname, 'VdGEAYIAV6gnpUpoWwNkYvrugw9RuPWDpq8A_4TPv30lLyDK_FIhT0K-oTdprA.118.woff2');
        contentType = 'font/woff2';
    } else if (url === '/fonts/VdGEAYIAV6gnpUpoWwNkYvrugw9RuPWDpq8A_4TPv30lLyDK_FIhT0K-oTdprA.119.woff2') {
        filePath = path.join(__dirname, 'VdGEAYIAV6gnpUpoWwNkYvrugw9RuPWDpq8A_4TPv30lLyDK_FIhT0K-oTdprA.119.woff2');
        contentType = 'font/woff2';
    } else if (url === '/js/bundle.js') {
        filePath = path.join(__dirname, 'bundle.js');
        contentType = 'text/js';
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.end('<html><head><title>Not Found</title></head><body><h1>404 Not Found</h1></body></html>');
        return;
    }

    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'text/html');
            res.end('<html><head><title>Internal Server Error</title></head><body><h1>Internal Server Error</h1><p>Contact your local police department.</p></body></html>');
        } else {
            res.statusCode = 200;
            res.setHeader('Content-Type', contentType);
            res.end(data);
        }
    });
});

server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});