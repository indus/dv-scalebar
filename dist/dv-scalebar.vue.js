import { defineComponent as qt, h as I } from "vue";
/**
 * @license
 * https://github.com/indus/dist/blob/main/dv-scalebar.vue.licence.txt
 */
const { min: Zt, max: It } = Math, Q = (e, t = 0, n = 1) => Zt(It(t, e), n), Ye = (e) => {
  e._clipped = !1, e._unclipped = e.slice(0);
  for (let t = 0; t <= 3; t++)
    t < 3 ? ((e[t] < 0 || e[t] > 255) && (e._clipped = !0), e[t] = Q(e[t], 0, 255)) : t === 3 && (e[t] = Q(e[t], 0, 1));
  return e;
}, lt = {};
for (let e of [
  "Boolean",
  "Number",
  "String",
  "Function",
  "Array",
  "Date",
  "RegExp",
  "Undefined",
  "Null"
])
  lt[`[object ${e}]`] = e.toLowerCase();
function R(e) {
  return lt[Object.prototype.toString.call(e)] || "object";
}
const M = (e, t = null) => e.length >= 3 ? Array.prototype.slice.call(e) : R(e[0]) == "object" && t ? t.split("").filter((n) => e[0][n] !== void 0).map((n) => e[0][n]) : e[0].slice(0), se = (e) => {
  if (e.length < 2) return null;
  const t = e.length - 1;
  return R(e[t]) == "string" ? e[t].toLowerCase() : null;
}, { PI: ke, min: it, max: ut } = Math, Y = (e) => Math.round(e * 100) / 100, Oe = (e) => Math.round(e * 100) / 100, H = ke * 2, Me = ke / 3, Kt = ke / 180, Wt = 180 / ke;
function bt(e) {
  return [...e.slice(0, 3).reverse(), ...e.slice(3)];
}
const A = {
  format: {},
  autodetect: []
};
class u {
  constructor(...t) {
    const n = this;
    if (R(t[0]) === "object" && t[0].constructor && t[0].constructor === this.constructor)
      return t[0];
    let r = se(t), o = !1;
    if (!r) {
      o = !0, A.sorted || (A.autodetect = A.autodetect.sort((s, c) => c.p - s.p), A.sorted = !0);
      for (let s of A.autodetect)
        if (r = s.test(...t), r) break;
    }
    if (A.format[r]) {
      const s = A.format[r].apply(
        null,
        o ? t : t.slice(0, -1)
      );
      n._rgb = Ye(s);
    } else
      throw new Error("unknown format: " + t);
    n._rgb.length === 3 && n._rgb.push(1);
  }
  toString() {
    return R(this.hex) == "function" ? this.hex() : `[${this._rgb.join(",")}]`;
  }
}
const Ft = "3.1.2", E = (...e) => new u(...e);
E.version = Ft;
const re = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  gold: "#ffd700",
  goldenrod: "#daa520",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  laserlemon: "#ffff54",
  lavender: "#e6e6fa",
  lavenderblush: "#fff0f5",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrod: "#fafad2",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  maroon2: "#7f0000",
  maroon3: "#b03060",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  purple2: "#7f007f",
  purple3: "#a020f0",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32"
}, Ht = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/, Dt = /^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/, ht = (e) => {
  if (e.match(Ht)) {
    (e.length === 4 || e.length === 7) && (e = e.substr(1)), e.length === 3 && (e = e.split(""), e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]);
    const t = parseInt(e, 16), n = t >> 16, r = t >> 8 & 255, o = t & 255;
    return [n, r, o, 1];
  }
  if (e.match(Dt)) {
    (e.length === 5 || e.length === 9) && (e = e.substr(1)), e.length === 4 && (e = e.split(""), e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2] + e[3] + e[3]);
    const t = parseInt(e, 16), n = t >> 24 & 255, r = t >> 16 & 255, o = t >> 8 & 255, s = Math.round((t & 255) / 255 * 100) / 100;
    return [n, r, o, s];
  }
  throw new Error(`unknown hex color: ${e}`);
}, { round: he } = Math, dt = (...e) => {
  let [t, n, r, o] = M(e, "rgba"), s = se(e) || "auto";
  o === void 0 && (o = 1), s === "auto" && (s = o < 1 ? "rgba" : "rgb"), t = he(t), n = he(n), r = he(r);
  let f = "000000" + (t << 16 | n << 8 | r).toString(16);
  f = f.substr(f.length - 6);
  let a = "0" + he(o * 255).toString(16);
  switch (a = a.substr(a.length - 2), s.toLowerCase()) {
    case "rgba":
      return `#${f}${a}`;
    case "argb":
      return `#${a}${f}`;
    default:
      return `#${f}`;
  }
};
u.prototype.name = function() {
  const e = dt(this._rgb, "rgb");
  for (let t of Object.keys(re))
    if (re[t] === e) return t.toLowerCase();
  return e;
};
A.format.named = (e) => {
  if (e = e.toLowerCase(), re[e]) return ht(re[e]);
  throw new Error("unknown color name: " + e);
};
A.autodetect.push({
  p: 5,
  test: (e, ...t) => {
    if (!t.length && R(e) === "string" && re[e.toLowerCase()])
      return "named";
  }
});
u.prototype.alpha = function(e, t = !1) {
  return e !== void 0 && R(e) === "number" ? t ? (this._rgb[3] = e, this) : new u([this._rgb[0], this._rgb[1], this._rgb[2], e], "rgb") : this._rgb[3];
};
u.prototype.clipped = function() {
  return this._rgb._clipped || !1;
};
const W = {
  // Corresponds roughly to RGB brighter/darker
  Kn: 18,
  // D65 standard referent
  labWhitePoint: "d65",
  Xn: 0.95047,
  Yn: 1,
  Zn: 1.08883,
  t0: 0.137931034,
  // 4 / 29
  t1: 0.206896552,
  // 6 / 29
  t2: 0.12841855,
  // 3 * t1 * t1
  t3: 8856452e-9,
  // t1 * t1 * t1,
  kE: 216 / 24389,
  kKE: 8,
  kK: 24389 / 27,
  RefWhiteRGB: {
    // sRGB
    X: 0.95047,
    Y: 1,
    Z: 1.08883
  },
  MtxRGB2XYZ: {
    m00: 0.4124564390896922,
    m01: 0.21267285140562253,
    m02: 0.0193338955823293,
    m10: 0.357576077643909,
    m11: 0.715152155287818,
    m12: 0.11919202588130297,
    m20: 0.18043748326639894,
    m21: 0.07217499330655958,
    m22: 0.9503040785363679
  },
  MtxXYZ2RGB: {
    m00: 3.2404541621141045,
    m01: -0.9692660305051868,
    m02: 0.055643430959114726,
    m10: -1.5371385127977166,
    m11: 1.8760108454466942,
    m12: -0.2040259135167538,
    m20: -0.498531409556016,
    m21: 0.041556017530349834,
    m22: 1.0572251882231791
  },
  // used in rgb2xyz
  As: 0.9414285350000001,
  Bs: 1.040417467,
  Cs: 1.089532651,
  MtxAdaptMa: {
    m00: 0.8951,
    m01: -0.7502,
    m02: 0.0389,
    m10: 0.2664,
    m11: 1.7135,
    m12: -0.0685,
    m20: -0.1614,
    m21: 0.0367,
    m22: 1.0296
  },
  MtxAdaptMaI: {
    m00: 0.9869929054667123,
    m01: 0.43230526972339456,
    m02: -0.008528664575177328,
    m10: -0.14705425642099013,
    m11: 0.5183602715367776,
    m12: 0.04004282165408487,
    m20: 0.15996265166373125,
    m21: 0.0492912282128556,
    m22: 0.9684866957875502
  }
}, Ut = /* @__PURE__ */ new Map([
  // ASTM E308-01
  ["a", [1.0985, 0.35585]],
  // Wyszecki & Stiles, p. 769
  ["b", [1.0985, 0.35585]],
  // C ASTM E308-01
  ["c", [0.98074, 1.18232]],
  // D50 (ASTM E308-01)
  ["d50", [0.96422, 0.82521]],
  // D55 (ASTM E308-01)
  ["d55", [0.95682, 0.92149]],
  // D65 (ASTM E308-01)
  ["d65", [0.95047, 1.08883]],
  // E (ASTM E308-01)
  ["e", [1, 1, 1]],
  // F2 (ASTM E308-01)
  ["f2", [0.99186, 0.67393]],
  // F7 (ASTM E308-01)
  ["f7", [0.95041, 1.08747]],
  // F11 (ASTM E308-01)
  ["f11", [1.00962, 0.6435]],
  ["icc", [0.96422, 0.82521]]
]);
function D(e) {
  const t = Ut.get(String(e).toLowerCase());
  if (!t)
    throw new Error("unknown Lab illuminant " + e);
  W.labWhitePoint = e, W.Xn = t[0], W.Zn = t[1];
}
function ie() {
  return W.labWhitePoint;
}
const Xe = (...e) => {
  e = M(e, "lab");
  const [t, n, r] = e, [o, s, c] = Vt(t, n, r), [f, a, i] = pt(o, s, c);
  return [f, a, i, e.length > 3 ? e[3] : 1];
}, Vt = (e, t, n) => {
  const { kE: r, kK: o, kKE: s, Xn: c, Yn: f, Zn: a } = W, i = (e + 16) / 116, b = 2e-3 * t + i, d = i - 5e-3 * n, h = b * b * b, g = d * d * d, y = h > r ? h : (116 * b - 16) / o, C = e > s ? Math.pow((e + 16) / 116, 3) : e / o, w = g > r ? g : (116 * d - 16) / o, m = y * c, S = C * f, P = w * a;
  return [m, S, P];
}, $e = (e) => {
  const t = Math.sign(e);
  return e = Math.abs(e), (e <= 31308e-7 ? e * 12.92 : 1.055 * Math.pow(e, 1 / 2.4) - 0.055) * t;
}, pt = (e, t, n) => {
  const { MtxAdaptMa: r, MtxAdaptMaI: o, MtxXYZ2RGB: s, RefWhiteRGB: c, Xn: f, Yn: a, Zn: i } = W, b = f * r.m00 + a * r.m10 + i * r.m20, d = f * r.m01 + a * r.m11 + i * r.m21, h = f * r.m02 + a * r.m12 + i * r.m22, g = c.X * r.m00 + c.Y * r.m10 + c.Z * r.m20, y = c.X * r.m01 + c.Y * r.m11 + c.Z * r.m21, C = c.X * r.m02 + c.Y * r.m12 + c.Z * r.m22, w = (e * r.m00 + t * r.m10 + n * r.m20) * (g / b), m = (e * r.m01 + t * r.m11 + n * r.m21) * (y / d), S = (e * r.m02 + t * r.m12 + n * r.m22) * (C / h), P = w * o.m00 + m * o.m10 + S * o.m20, j = w * o.m01 + m * o.m11 + S * o.m21, $ = w * o.m02 + m * o.m12 + S * o.m22, x = $e(
    P * s.m00 + j * s.m10 + $ * s.m20
  ), l = $e(
    P * s.m01 + j * s.m11 + $ * s.m21
  ), p = $e(
    P * s.m02 + j * s.m12 + $ * s.m22
  );
  return [x * 255, l * 255, p * 255];
}, Te = (...e) => {
  const [t, n, r, ...o] = M(e, "rgb"), [s, c, f] = mt(t, n, r), [a, i, b] = Jt(s, c, f);
  return [a, i, b, ...o.length > 0 && o[0] < 1 ? [o[0]] : []];
};
function Jt(e, t, n) {
  const { Xn: r, Yn: o, Zn: s, kE: c, kK: f } = W, a = e / r, i = t / o, b = n / s, d = a > c ? Math.pow(a, 1 / 3) : (f * a + 16) / 116, h = i > c ? Math.pow(i, 1 / 3) : (f * i + 16) / 116, g = b > c ? Math.pow(b, 1 / 3) : (f * b + 16) / 116;
  return [116 * h - 16, 500 * (d - h), 200 * (h - g)];
}
function xe(e) {
  const t = Math.sign(e);
  return e = Math.abs(e), (e <= 0.04045 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4)) * t;
}
const mt = (e, t, n) => {
  e = xe(e / 255), t = xe(t / 255), n = xe(n / 255);
  const { MtxRGB2XYZ: r, MtxAdaptMa: o, MtxAdaptMaI: s, Xn: c, Yn: f, Zn: a, As: i, Bs: b, Cs: d } = W;
  let h = e * r.m00 + t * r.m10 + n * r.m20, g = e * r.m01 + t * r.m11 + n * r.m21, y = e * r.m02 + t * r.m12 + n * r.m22;
  const C = c * o.m00 + f * o.m10 + a * o.m20, w = c * o.m01 + f * o.m11 + a * o.m21, m = c * o.m02 + f * o.m12 + a * o.m22;
  let S = h * o.m00 + g * o.m10 + y * o.m20, P = h * o.m01 + g * o.m11 + y * o.m21, j = h * o.m02 + g * o.m12 + y * o.m22;
  return S *= C / i, P *= w / b, j *= m / d, h = S * s.m00 + P * s.m10 + j * s.m20, g = S * s.m01 + P * s.m11 + j * s.m21, y = S * s.m02 + P * s.m12 + j * s.m22, [h, g, y];
};
u.prototype.lab = function() {
  return Te(this._rgb);
};
const Qt = (...e) => new u(...e, "lab");
Object.assign(E, { lab: Qt, getLabWhitePoint: ie, setLabWhitePoint: D });
A.format.lab = Xe;
A.autodetect.push({
  p: 2,
  test: (...e) => {
    if (e = M(e, "lab"), R(e) === "array" && e.length === 3)
      return "lab";
  }
});
u.prototype.darken = function(e = 1) {
  const t = this, n = t.lab();
  return n[0] -= W.Kn * e, new u(n, "lab").alpha(t.alpha(), !0);
};
u.prototype.brighten = function(e = 1) {
  return this.darken(-e);
};
u.prototype.darker = u.prototype.darken;
u.prototype.brighter = u.prototype.brighten;
u.prototype.get = function(e) {
  const [t, n] = e.split("."), r = this[t]();
  if (n) {
    const o = t.indexOf(n) - (t.substr(0, 2) === "ok" ? 2 : 0);
    if (o > -1) return r[o];
    throw new Error(`unknown channel ${n} in mode ${t}`);
  } else
    return r;
};
const { pow: en } = Math, tn = 1e-7, nn = 20;
u.prototype.luminance = function(e, t = "rgb") {
  if (e !== void 0 && R(e) === "number") {
    if (e === 0)
      return new u([0, 0, 0, this._rgb[3]], "rgb");
    if (e === 1)
      return new u([255, 255, 255, this._rgb[3]], "rgb");
    let n = this.luminance(), r = nn;
    const o = (c, f) => {
      const a = c.interpolate(f, 0.5, t), i = a.luminance();
      return Math.abs(e - i) < tn || !r-- ? a : i > e ? o(c, a) : o(a, f);
    }, s = (n > e ? o(new u([0, 0, 0]), this) : o(this, new u([255, 255, 255]))).rgb();
    return new u([...s, this._rgb[3]]);
  }
  return rn(...this._rgb.slice(0, 3));
};
const rn = (e, t, n) => (e = Le(e), t = Le(t), n = Le(n), 0.2126 * e + 0.7152 * t + 0.0722 * n), Le = (e) => (e /= 255, e <= 0.03928 ? e / 12.92 : en((e + 0.055) / 1.055, 2.4)), G = {}, oe = (e, t, n = 0.5, ...r) => {
  let o = r[0] || "lrgb";
  if (!G[o] && !r.length && (o = Object.keys(G)[0]), !G[o])
    throw new Error(`interpolation mode ${o} is not defined`);
  return R(e) !== "object" && (e = new u(e)), R(t) !== "object" && (t = new u(t)), G[o](e, t, n).alpha(
    e.alpha() + n * (t.alpha() - e.alpha())
  );
};
u.prototype.mix = u.prototype.interpolate = function(e, t = 0.5, ...n) {
  return oe(this, e, t, ...n);
};
u.prototype.premultiply = function(e = !1) {
  const t = this._rgb, n = t[3];
  return e ? (this._rgb = [t[0] * n, t[1] * n, t[2] * n, n], this) : new u([t[0] * n, t[1] * n, t[2] * n, n], "rgb");
};
const { sin: on, cos: sn } = Math, gt = (...e) => {
  let [t, n, r] = M(e, "lch");
  return isNaN(r) && (r = 0), r = r * Kt, [t, sn(r) * n, on(r) * n];
}, qe = (...e) => {
  e = M(e, "lch");
  const [t, n, r] = e, [o, s, c] = gt(t, n, r), [f, a, i] = Xe(o, s, c);
  return [f, a, i, e.length > 3 ? e[3] : 1];
}, cn = (...e) => {
  const t = bt(M(e, "hcl"));
  return qe(...t);
}, { sqrt: fn, atan2: an, round: ln } = Math, yt = (...e) => {
  const [t, n, r] = M(e, "lab"), o = fn(n * n + r * r);
  let s = (an(r, n) * Wt + 360) % 360;
  return ln(o * 1e4) === 0 && (s = Number.NaN), [t, o, s];
}, Ze = (...e) => {
  const [t, n, r, ...o] = M(e, "rgb"), [s, c, f] = Te(t, n, r), [a, i, b] = yt(s, c, f);
  return [a, i, b, ...o.length > 0 && o[0] < 1 ? [o[0]] : []];
};
u.prototype.lch = function() {
  return Ze(this._rgb);
};
u.prototype.hcl = function() {
  return bt(Ze(this._rgb));
};
const un = (...e) => new u(...e, "lch"), bn = (...e) => new u(...e, "hcl");
Object.assign(E, { lch: un, hcl: bn });
A.format.lch = qe;
A.format.hcl = cn;
["lch", "hcl"].forEach(
  (e) => A.autodetect.push({
    p: 2,
    test: (...t) => {
      if (t = M(t, e), R(t) === "array" && t.length === 3)
        return e;
    }
  })
);
u.prototype.saturate = function(e = 1) {
  const t = this, n = t.lch();
  return n[1] += W.Kn * e, n[1] < 0 && (n[1] = 0), new u(n, "lch").alpha(t.alpha(), !0);
};
u.prototype.desaturate = function(e = 1) {
  return this.saturate(-e);
};
u.prototype.set = function(e, t, n = !1) {
  const [r, o] = e.split("."), s = this[r]();
  if (o) {
    const c = r.indexOf(o) - (r.substr(0, 2) === "ok" ? 2 : 0);
    if (c > -1) {
      if (R(t) == "string")
        switch (t.charAt(0)) {
          case "+":
            s[c] += +t;
            break;
          case "-":
            s[c] += +t;
            break;
          case "*":
            s[c] *= +t.substr(1);
            break;
          case "/":
            s[c] /= +t.substr(1);
            break;
          default:
            s[c] = +t;
        }
      else if (R(t) === "number")
        s[c] = t;
      else
        throw new Error("unsupported value for Color.set");
      const f = new u(s, r);
      return n ? (this._rgb = f._rgb, this) : f;
    }
    throw new Error(`unknown channel ${o} in mode ${r}`);
  } else
    return s;
};
u.prototype.tint = function(e = 0.5, ...t) {
  return oe(this, "white", e, ...t);
};
u.prototype.shade = function(e = 0.5, ...t) {
  return oe(this, "black", e, ...t);
};
const hn = (e, t, n) => {
  const r = e._rgb, o = t._rgb;
  return new u(
    r[0] + n * (o[0] - r[0]),
    r[1] + n * (o[1] - r[1]),
    r[2] + n * (o[2] - r[2]),
    "rgb"
  );
};
G.rgb = hn;
const { sqrt: Ne, pow: ee } = Math, dn = (e, t, n) => {
  const [r, o, s] = e._rgb, [c, f, a] = t._rgb;
  return new u(
    Ne(ee(r, 2) * (1 - n) + ee(c, 2) * n),
    Ne(ee(o, 2) * (1 - n) + ee(f, 2) * n),
    Ne(ee(s, 2) * (1 - n) + ee(a, 2) * n),
    "rgb"
  );
};
G.lrgb = dn;
const pn = (e, t, n) => {
  const r = e.lab(), o = t.lab();
  return new u(
    r[0] + n * (o[0] - r[0]),
    r[1] + n * (o[1] - r[1]),
    r[2] + n * (o[2] - r[2]),
    "lab"
  );
};
G.lab = pn;
const ce = (e, t, n, r) => {
  let o, s;
  r === "hsl" ? (o = e.hsl(), s = t.hsl()) : r === "hsv" ? (o = e.hsv(), s = t.hsv()) : r === "hcg" ? (o = e.hcg(), s = t.hcg()) : r === "hsi" ? (o = e.hsi(), s = t.hsi()) : r === "lch" || r === "hcl" ? (r = "hcl", o = e.hcl(), s = t.hcl()) : r === "oklch" && (o = e.oklch().reverse(), s = t.oklch().reverse());
  let c, f, a, i, b, d;
  (r.substr(0, 1) === "h" || r === "oklch") && ([c, a, b] = o, [f, i, d] = s);
  let h, g, y, C;
  return !isNaN(c) && !isNaN(f) ? (f > c && f - c > 180 ? C = f - (c + 360) : f < c && c - f > 180 ? C = f + 360 - c : C = f - c, g = c + n * C) : isNaN(c) ? isNaN(f) ? g = Number.NaN : (g = f, (b == 1 || b == 0) && r != "hsv" && (h = i)) : (g = c, (d == 1 || d == 0) && r != "hsv" && (h = a)), h === void 0 && (h = a + n * (i - a)), y = b + n * (d - b), r === "oklch" ? new u([y, h, g], r) : new u([g, h, y], r);
}, wt = (e, t, n) => ce(e, t, n, "lch");
G.lch = wt;
G.hcl = wt;
const mn = (e) => {
  if (R(e) == "number" && e >= 0 && e <= 16777215) {
    const t = e >> 16, n = e >> 8 & 255, r = e & 255;
    return [t, n, r, 1];
  }
  throw new Error("unknown num color: " + e);
}, gn = (...e) => {
  const [t, n, r] = M(e, "rgb");
  return (t << 16) + (n << 8) + r;
};
u.prototype.num = function() {
  return gn(this._rgb);
};
const yn = (...e) => new u(...e, "num");
Object.assign(E, { num: yn });
A.format.num = mn;
A.autodetect.push({
  p: 5,
  test: (...e) => {
    if (e.length === 1 && R(e[0]) === "number" && e[0] >= 0 && e[0] <= 16777215)
      return "num";
  }
});
const wn = (e, t, n) => {
  const r = e.num(), o = t.num();
  return new u(r + n * (o - r), "num");
};
G.num = wn;
const { floor: kn } = Math, _n = (...e) => {
  e = M(e, "hcg");
  let [t, n, r] = e, o, s, c;
  r = r * 255;
  const f = n * 255;
  if (n === 0)
    o = s = c = r;
  else {
    t === 360 && (t = 0), t > 360 && (t -= 360), t < 0 && (t += 360), t /= 60;
    const a = kn(t), i = t - a, b = r * (1 - n), d = b + f * (1 - i), h = b + f * i, g = b + f;
    switch (a) {
      case 0:
        [o, s, c] = [g, h, b];
        break;
      case 1:
        [o, s, c] = [d, g, b];
        break;
      case 2:
        [o, s, c] = [b, g, h];
        break;
      case 3:
        [o, s, c] = [b, d, g];
        break;
      case 4:
        [o, s, c] = [h, b, g];
        break;
      case 5:
        [o, s, c] = [g, b, d];
        break;
    }
  }
  return [o, s, c, e.length > 3 ? e[3] : 1];
}, An = (...e) => {
  const [t, n, r] = M(e, "rgb"), o = it(t, n, r), s = ut(t, n, r), c = s - o, f = c * 100 / 255, a = o / (255 - c) * 100;
  let i;
  return c === 0 ? i = Number.NaN : (t === s && (i = (n - r) / c), n === s && (i = 2 + (r - t) / c), r === s && (i = 4 + (t - n) / c), i *= 60, i < 0 && (i += 360)), [i, f, a];
};
u.prototype.hcg = function() {
  return An(this._rgb);
};
const Mn = (...e) => new u(...e, "hcg");
E.hcg = Mn;
A.format.hcg = _n;
A.autodetect.push({
  p: 1,
  test: (...e) => {
    if (e = M(e, "hcg"), R(e) === "array" && e.length === 3)
      return "hcg";
  }
});
const $n = (e, t, n) => ce(e, t, n, "hcg");
G.hcg = $n;
const { cos: te } = Math, xn = (...e) => {
  e = M(e, "hsi");
  let [t, n, r] = e, o, s, c;
  return isNaN(t) && (t = 0), isNaN(n) && (n = 0), t > 360 && (t -= 360), t < 0 && (t += 360), t /= 360, t < 1 / 3 ? (c = (1 - n) / 3, o = (1 + n * te(H * t) / te(Me - H * t)) / 3, s = 1 - (c + o)) : t < 2 / 3 ? (t -= 1 / 3, o = (1 - n) / 3, s = (1 + n * te(H * t) / te(Me - H * t)) / 3, c = 1 - (o + s)) : (t -= 2 / 3, s = (1 - n) / 3, c = (1 + n * te(H * t) / te(Me - H * t)) / 3, o = 1 - (s + c)), o = Q(r * o * 3), s = Q(r * s * 3), c = Q(r * c * 3), [o * 255, s * 255, c * 255, e.length > 3 ? e[3] : 1];
}, { min: Ln, sqrt: Nn, acos: En } = Math, Rn = (...e) => {
  let [t, n, r] = M(e, "rgb");
  t /= 255, n /= 255, r /= 255;
  let o;
  const s = Ln(t, n, r), c = (t + n + r) / 3, f = c > 0 ? 1 - s / c : 0;
  return f === 0 ? o = NaN : (o = (t - n + (t - r)) / 2, o /= Nn((t - n) * (t - n) + (t - r) * (n - r)), o = En(o), r > n && (o = H - o), o /= H), [o * 360, f, c];
};
u.prototype.hsi = function() {
  return Rn(this._rgb);
};
const Cn = (...e) => new u(...e, "hsi");
E.hsi = Cn;
A.format.hsi = xn;
A.autodetect.push({
  p: 2,
  test: (...e) => {
    if (e = M(e, "hsi"), R(e) === "array" && e.length === 3)
      return "hsi";
  }
});
const vn = (e, t, n) => ce(e, t, n, "hsi");
G.hsi = vn;
const Be = (...e) => {
  e = M(e, "hsl");
  const [t, n, r] = e;
  let o, s, c;
  if (n === 0)
    o = s = c = r * 255;
  else {
    const f = [0, 0, 0], a = [0, 0, 0], i = r < 0.5 ? r * (1 + n) : r + n - r * n, b = 2 * r - i, d = t / 360;
    f[0] = d + 1 / 3, f[1] = d, f[2] = d - 1 / 3;
    for (let h = 0; h < 3; h++)
      f[h] < 0 && (f[h] += 1), f[h] > 1 && (f[h] -= 1), 6 * f[h] < 1 ? a[h] = b + (i - b) * 6 * f[h] : 2 * f[h] < 1 ? a[h] = i : 3 * f[h] < 2 ? a[h] = b + (i - b) * (2 / 3 - f[h]) * 6 : a[h] = b;
    [o, s, c] = [a[0] * 255, a[1] * 255, a[2] * 255];
  }
  return e.length > 3 ? [o, s, c, e[3]] : [o, s, c, 1];
}, kt = (...e) => {
  e = M(e, "rgba");
  let [t, n, r] = e;
  t /= 255, n /= 255, r /= 255;
  const o = it(t, n, r), s = ut(t, n, r), c = (s + o) / 2;
  let f, a;
  return s === o ? (f = 0, a = Number.NaN) : f = c < 0.5 ? (s - o) / (s + o) : (s - o) / (2 - s - o), t == s ? a = (n - r) / (s - o) : n == s ? a = 2 + (r - t) / (s - o) : r == s && (a = 4 + (t - n) / (s - o)), a *= 60, a < 0 && (a += 360), e.length > 3 && e[3] !== void 0 ? [a, f, c, e[3]] : [a, f, c];
};
u.prototype.hsl = function() {
  return kt(this._rgb);
};
const jn = (...e) => new u(...e, "hsl");
E.hsl = jn;
A.format.hsl = Be;
A.autodetect.push({
  p: 2,
  test: (...e) => {
    if (e = M(e, "hsl"), R(e) === "array" && e.length === 3)
      return "hsl";
  }
});
const Pn = (e, t, n) => ce(e, t, n, "hsl");
G.hsl = Pn;
const { floor: Sn } = Math, On = (...e) => {
  e = M(e, "hsv");
  let [t, n, r] = e, o, s, c;
  if (r *= 255, n === 0)
    o = s = c = r;
  else {
    t === 360 && (t = 0), t > 360 && (t -= 360), t < 0 && (t += 360), t /= 60;
    const f = Sn(t), a = t - f, i = r * (1 - n), b = r * (1 - n * a), d = r * (1 - n * (1 - a));
    switch (f) {
      case 0:
        [o, s, c] = [r, d, i];
        break;
      case 1:
        [o, s, c] = [b, r, i];
        break;
      case 2:
        [o, s, c] = [i, r, d];
        break;
      case 3:
        [o, s, c] = [i, b, r];
        break;
      case 4:
        [o, s, c] = [d, i, r];
        break;
      case 5:
        [o, s, c] = [r, i, b];
        break;
    }
  }
  return [o, s, c, e.length > 3 ? e[3] : 1];
}, { min: Bn, max: Gn } = Math, zn = (...e) => {
  e = M(e, "rgb");
  let [t, n, r] = e;
  const o = Bn(t, n, r), s = Gn(t, n, r), c = s - o;
  let f, a, i;
  return i = s / 255, s === 0 ? (f = Number.NaN, a = 0) : (a = c / s, t === s && (f = (n - r) / c), n === s && (f = 2 + (r - t) / c), r === s && (f = 4 + (t - n) / c), f *= 60, f < 0 && (f += 360)), [f, a, i];
};
u.prototype.hsv = function() {
  return zn(this._rgb);
};
const Yn = (...e) => new u(...e, "hsv");
E.hsv = Yn;
A.format.hsv = On;
A.autodetect.push({
  p: 2,
  test: (...e) => {
    if (e = M(e, "hsv"), R(e) === "array" && e.length === 3)
      return "hsv";
  }
});
const Xn = (e, t, n) => ce(e, t, n, "hsv");
G.hsv = Xn;
function ge(e, t) {
  let n = e.length;
  Array.isArray(e[0]) || (e = [e]), Array.isArray(t[0]) || (t = t.map((c) => [c]));
  let r = t[0].length, o = t[0].map((c, f) => t.map((a) => a[f])), s = e.map(
    (c) => o.map((f) => Array.isArray(c) ? c.reduce((a, i, b) => a + i * (f[b] || 0), 0) : f.reduce((a, i) => a + i * c, 0))
  );
  return n === 1 && (s = s[0]), r === 1 ? s.map((c) => c[0]) : s;
}
const Ie = (...e) => {
  e = M(e, "lab");
  const [t, n, r, ...o] = e, [s, c, f] = Tn([t, n, r]), [a, i, b] = pt(s, c, f);
  return [a, i, b, ...o.length > 0 && o[0] < 1 ? [o[0]] : []];
};
function Tn(e) {
  var t = [
    [1.2268798758459243, -0.5578149944602171, 0.2813910456659647],
    [-0.0405757452148008, 1.112286803280317, -0.0717110580655164],
    [-0.0763729366746601, -0.4214933324022432, 1.5869240198367816]
  ], n = [
    [1, 0.3963377773761749, 0.2158037573099136],
    [1, -0.1055613458156586, -0.0638541728258133],
    [1, -0.0894841775298119, -1.2914855480194092]
  ], r = ge(n, e);
  return ge(
    t,
    r.map((o) => o ** 3)
  );
}
const Ke = (...e) => {
  const [t, n, r, ...o] = M(e, "rgb"), s = mt(t, n, r);
  return [...qn(s), ...o.length > 0 && o[0] < 1 ? [o[0]] : []];
};
function qn(e) {
  const t = [
    [0.819022437996703, 0.3619062600528904, -0.1288737815209879],
    [0.0329836539323885, 0.9292868615863434, 0.0361446663506424],
    [0.0481771893596242, 0.2642395317527308, 0.6335478284694309]
  ], n = [
    [0.210454268309314, 0.7936177747023054, -0.0040720430116193],
    [1.9779985324311684, -2.42859224204858, 0.450593709617411],
    [0.0259040424655478, 0.7827717124575296, -0.8086757549230774]
  ], r = ge(t, e);
  return ge(
    n,
    r.map((o) => Math.cbrt(o))
  );
}
u.prototype.oklab = function() {
  return Ke(this._rgb);
};
const Zn = (...e) => new u(...e, "oklab");
Object.assign(E, { oklab: Zn });
A.format.oklab = Ie;
A.autodetect.push({
  p: 2,
  test: (...e) => {
    if (e = M(e, "oklab"), R(e) === "array" && e.length === 3)
      return "oklab";
  }
});
const In = (e, t, n) => {
  const r = e.oklab(), o = t.oklab();
  return new u(
    r[0] + n * (o[0] - r[0]),
    r[1] + n * (o[1] - r[1]),
    r[2] + n * (o[2] - r[2]),
    "oklab"
  );
};
G.oklab = In;
const Kn = (e, t, n) => ce(e, t, n, "oklch");
G.oklch = Kn;
const { pow: Ee, sqrt: Re, PI: Ce, cos: De, sin: Ue, atan2: Wn } = Math, Fn = (e, t = "lrgb", n = null) => {
  const r = e.length;
  n || (n = Array.from(new Array(r)).map(() => 1));
  const o = r / n.reduce(function(d, h) {
    return d + h;
  });
  if (n.forEach((d, h) => {
    n[h] *= o;
  }), e = e.map((d) => new u(d)), t === "lrgb")
    return Hn(e, n);
  const s = e.shift(), c = s.get(t), f = [];
  let a = 0, i = 0;
  for (let d = 0; d < c.length; d++)
    if (c[d] = (c[d] || 0) * n[0], f.push(isNaN(c[d]) ? 0 : n[0]), t.charAt(d) === "h" && !isNaN(c[d])) {
      const h = c[d] / 180 * Ce;
      a += De(h) * n[0], i += Ue(h) * n[0];
    }
  let b = s.alpha() * n[0];
  e.forEach((d, h) => {
    const g = d.get(t);
    b += d.alpha() * n[h + 1];
    for (let y = 0; y < c.length; y++)
      if (!isNaN(g[y]))
        if (f[y] += n[h + 1], t.charAt(y) === "h") {
          const C = g[y] / 180 * Ce;
          a += De(C) * n[h + 1], i += Ue(C) * n[h + 1];
        } else
          c[y] += g[y] * n[h + 1];
  });
  for (let d = 0; d < c.length; d++)
    if (t.charAt(d) === "h") {
      let h = Wn(i / f[d], a / f[d]) / Ce * 180;
      for (; h < 0; ) h += 360;
      for (; h >= 360; ) h -= 360;
      c[d] = h;
    } else
      c[d] = c[d] / f[d];
  return b /= r, new u(c, t).alpha(b > 0.99999 ? 1 : b, !0);
}, Hn = (e, t) => {
  const n = e.length, r = [0, 0, 0, 0];
  for (let o = 0; o < e.length; o++) {
    const s = e[o], c = t[o] / n, f = s._rgb;
    r[0] += Ee(f[0], 2) * c, r[1] += Ee(f[1], 2) * c, r[2] += Ee(f[2], 2) * c, r[3] += f[3] * c;
  }
  return r[0] = Re(r[0]), r[1] = Re(r[1]), r[2] = Re(r[2]), r[3] > 0.9999999 && (r[3] = 1), new u(Ye(r));
}, { pow: Dn } = Math;
function ye(e) {
  let t = "rgb", n = E("#ccc"), r = 0, o = [0, 1], s = [], c = [0, 0], f = !1, a = [], i = !1, b = 0, d = 1, h = !1, g = {}, y = !0, C = 1;
  const w = function(l) {
    if (l = l || ["#fff", "#000"], l && R(l) === "string" && E.brewer && E.brewer[l.toLowerCase()] && (l = E.brewer[l.toLowerCase()]), R(l) === "array") {
      l.length === 1 && (l = [l[0], l[0]]), l = l.slice(0);
      for (let p = 0; p < l.length; p++)
        l[p] = E(l[p]);
      s.length = 0;
      for (let p = 0; p < l.length; p++)
        s.push(p / (l.length - 1));
    }
    return $(), a = l;
  }, m = function(l) {
    if (f != null) {
      const p = f.length - 1;
      let _ = 0;
      for (; _ < p && l >= f[_]; )
        _++;
      return _ - 1;
    }
    return 0;
  };
  let S = (l) => l, P = (l) => l;
  const j = function(l, p) {
    let _, k;
    if (p == null && (p = !1), isNaN(l) || l === null)
      return n;
    p ? k = l : f && f.length > 2 ? k = m(l) / (f.length - 2) : d !== b ? k = (l - b) / (d - b) : k = 1, k = P(k), p || (k = S(k)), C !== 1 && (k = Dn(k, C)), k = c[0] + k * (1 - c[0] - c[1]), k = Q(k, 0, 1);
    const L = Math.floor(k * 1e4);
    if (y && g[L])
      _ = g[L];
    else {
      if (R(a) === "array")
        for (let N = 0; N < s.length; N++) {
          const v = s[N];
          if (k <= v) {
            _ = a[N];
            break;
          }
          if (k >= v && N === s.length - 1) {
            _ = a[N];
            break;
          }
          if (k > v && k < s[N + 1]) {
            k = (k - v) / (s[N + 1] - v), _ = E.interpolate(
              a[N],
              a[N + 1],
              k,
              t
            );
            break;
          }
        }
      else R(a) === "function" && (_ = a(k));
      y && (g[L] = _);
    }
    return _;
  };
  var $ = () => g = {};
  w(e);
  const x = function(l) {
    const p = E(j(l));
    return i && p[i] ? p[i]() : p;
  };
  return x.classes = function(l) {
    if (l != null) {
      if (R(l) === "array")
        f = l, o = [l[0], l[l.length - 1]];
      else {
        const p = E.analyze(o);
        l === 0 ? f = [p.min, p.max] : f = E.limits(p, "e", l);
      }
      return x;
    }
    return f;
  }, x.domain = function(l) {
    if (!arguments.length)
      return o;
    b = l[0], d = l[l.length - 1], s = [];
    const p = a.length;
    if (l.length === p && b !== d)
      for (let _ of Array.from(l))
        s.push((_ - b) / (d - b));
    else {
      for (let _ = 0; _ < p; _++)
        s.push(_ / (p - 1));
      if (l.length > 2) {
        const _ = l.map((L, N) => N / (l.length - 1)), k = l.map((L) => (L - b) / (d - b));
        k.every((L, N) => _[N] === L) || (P = (L) => {
          if (L <= 0 || L >= 1) return L;
          let N = 0;
          for (; L >= k[N + 1]; ) N++;
          const v = (L - k[N]) / (k[N + 1] - k[N]);
          return _[N] + v * (_[N + 1] - _[N]);
        });
      }
    }
    return o = [b, d], x;
  }, x.mode = function(l) {
    return arguments.length ? (t = l, $(), x) : t;
  }, x.range = function(l, p) {
    return w(l), x;
  }, x.out = function(l) {
    return i = l, x;
  }, x.spread = function(l) {
    return arguments.length ? (r = l, x) : r;
  }, x.correctLightness = function(l) {
    return l == null && (l = !0), h = l, $(), h ? S = function(p) {
      const _ = j(0, !0).lab()[0], k = j(1, !0).lab()[0], L = _ > k;
      let N = j(p, !0).lab()[0];
      const v = _ + (k - _) * p;
      let Z = N - v, le = 0, ue = 1, be = 20;
      for (; Math.abs(Z) > 0.01 && be-- > 0; )
        (function() {
          return L && (Z *= -1), Z < 0 ? (le = p, p += (ue - p) * 0.5) : (ue = p, p += (le - p) * 0.5), N = j(p, !0).lab()[0], Z = N - v;
        })();
      return p;
    } : S = (p) => p, x;
  }, x.padding = function(l) {
    return l != null ? (R(l) === "number" && (l = [l, l]), c = l, x) : c;
  }, x.colors = function(l, p) {
    arguments.length < 2 && (p = "hex");
    let _ = [];
    if (arguments.length === 0)
      _ = a.slice(0);
    else if (l === 1)
      _ = [x(0.5)];
    else if (l > 1) {
      const k = o[0], L = o[1] - k;
      _ = Un(0, l).map(
        (N) => x(k + N / (l - 1) * L)
      );
    } else {
      e = [];
      let k = [];
      if (f && f.length > 2)
        for (let L = 1, N = f.length, v = 1 <= N; v ? L < N : L > N; v ? L++ : L--)
          k.push((f[L - 1] + f[L]) * 0.5);
      else
        k = o;
      _ = k.map((L) => x(L));
    }
    return E[p] && (_ = _.map((k) => k[p]())), _;
  }, x.cache = function(l) {
    return l != null ? (y = l, x) : y;
  }, x.gamma = function(l) {
    return l != null ? (C = l, x) : C;
  }, x.nodata = function(l) {
    return l != null ? (n = E(l), x) : n;
  }, x;
}
function Un(e, t, n) {
  let r = [], o = e < t, s = t;
  for (let c = e; o ? c < s : c > s; o ? c++ : c--)
    r.push(c);
  return r;
}
const Vn = function(e) {
  let t = [1, 1];
  for (let n = 1; n < e; n++) {
    let r = [1];
    for (let o = 1; o <= t.length; o++)
      r[o] = (t[o] || 0) + t[o - 1];
    t = r;
  }
  return t;
}, Jn = function(e) {
  let t, n, r, o;
  if (e = e.map((s) => new u(s)), e.length === 2)
    [n, r] = e.map((s) => s.lab()), t = function(s) {
      const c = [0, 1, 2].map((f) => n[f] + s * (r[f] - n[f]));
      return new u(c, "lab");
    };
  else if (e.length === 3)
    [n, r, o] = e.map((s) => s.lab()), t = function(s) {
      const c = [0, 1, 2].map(
        (f) => (1 - s) * (1 - s) * n[f] + 2 * (1 - s) * s * r[f] + s * s * o[f]
      );
      return new u(c, "lab");
    };
  else if (e.length === 4) {
    let s;
    [n, r, o, s] = e.map((c) => c.lab()), t = function(c) {
      const f = [0, 1, 2].map(
        (a) => (1 - c) * (1 - c) * (1 - c) * n[a] + 3 * (1 - c) * (1 - c) * c * r[a] + 3 * (1 - c) * c * c * o[a] + c * c * c * s[a]
      );
      return new u(f, "lab");
    };
  } else if (e.length >= 5) {
    let s, c, f;
    s = e.map((a) => a.lab()), f = e.length - 1, c = Vn(f), t = function(a) {
      const i = 1 - a, b = [0, 1, 2].map(
        (d) => s.reduce(
          (h, g, y) => h + c[y] * i ** (f - y) * a ** y * g[d],
          0
        )
      );
      return new u(b, "lab");
    };
  } else
    throw new RangeError("No point in running bezier with only one color.");
  return t;
}, Qn = (e) => {
  const t = Jn(e);
  return t.scale = () => ye(t), t;
}, { round: _t } = Math;
u.prototype.rgb = function(e = !0) {
  return e === !1 ? this._rgb.slice(0, 3) : this._rgb.slice(0, 3).map(_t);
};
u.prototype.rgba = function(e = !0) {
  return this._rgb.slice(0, 4).map((t, n) => n < 3 ? e === !1 ? t : _t(t) : t);
};
const er = (...e) => new u(...e, "rgb");
Object.assign(E, { rgb: er });
A.format.rgb = (...e) => {
  const t = M(e, "rgba");
  return t[3] === void 0 && (t[3] = 1), t;
};
A.autodetect.push({
  p: 3,
  test: (...e) => {
    if (e = M(e, "rgba"), R(e) === "array" && (e.length === 3 || e.length === 4 && R(e[3]) == "number" && e[3] >= 0 && e[3] <= 1))
      return "rgb";
  }
});
const q = (e, t, n) => {
  if (!q[n])
    throw new Error("unknown blend mode " + n);
  return q[n](e, t);
}, V = (e) => (t, n) => {
  const r = E(n).rgb(), o = E(t).rgb();
  return E.rgb(e(r, o));
}, J = (e) => (t, n) => {
  const r = [];
  return r[0] = e(t[0], n[0]), r[1] = e(t[1], n[1]), r[2] = e(t[2], n[2]), r;
}, tr = (e) => e, nr = (e, t) => e * t / 255, rr = (e, t) => e > t ? t : e, or = (e, t) => e > t ? e : t, sr = (e, t) => 255 * (1 - (1 - e / 255) * (1 - t / 255)), cr = (e, t) => t < 128 ? 2 * e * t / 255 : 255 * (1 - 2 * (1 - e / 255) * (1 - t / 255)), fr = (e, t) => 255 * (1 - (1 - t / 255) / (e / 255)), ar = (e, t) => e === 255 ? 255 : (e = 255 * (t / 255) / (1 - e / 255), e > 255 ? 255 : e);
q.normal = V(J(tr));
q.multiply = V(J(nr));
q.screen = V(J(sr));
q.overlay = V(J(cr));
q.darken = V(J(rr));
q.lighten = V(J(or));
q.dodge = V(J(ar));
q.burn = V(J(fr));
const { pow: lr, sin: ir, cos: ur } = Math;
function br(e = 300, t = -1.5, n = 1, r = 1, o = [0, 1]) {
  let s = 0, c;
  R(o) === "array" ? c = o[1] - o[0] : (c = 0, o = [o, o]);
  const f = function(a) {
    const i = H * ((e + 120) / 360 + t * a), b = lr(o[0] + c * a, r), h = (s !== 0 ? n[0] + a * s : n) * b * (1 - b) / 2, g = ur(i), y = ir(i), C = b + h * (-0.14861 * g + 1.78277 * y), w = b + h * (-0.29227 * g - 0.90649 * y), m = b + h * (1.97294 * g);
    return E(Ye([C * 255, w * 255, m * 255, 1]));
  };
  return f.start = function(a) {
    return a == null ? e : (e = a, f);
  }, f.rotations = function(a) {
    return a == null ? t : (t = a, f);
  }, f.gamma = function(a) {
    return a == null ? r : (r = a, f);
  }, f.hue = function(a) {
    return a == null ? n : (n = a, R(n) === "array" ? (s = n[1] - n[0], s === 0 && (n = n[1])) : s = 0, f);
  }, f.lightness = function(a) {
    return a == null ? o : (R(a) === "array" ? (o = a, c = a[1] - a[0]) : (o = [a, a], c = 0), f);
  }, f.scale = () => E.scale(f), f.hue(n), f;
}
const hr = "0123456789abcdef", { floor: dr, random: pr } = Math, mr = () => {
  let e = "#";
  for (let t = 0; t < 6; t++)
    e += hr.charAt(dr(pr() * 16));
  return new u(e, "hex");
}, { log: Ve, pow: gr, floor: yr, abs: wr } = Math;
function At(e, t = null) {
  const n = {
    min: Number.MAX_VALUE,
    max: Number.MAX_VALUE * -1,
    sum: 0,
    values: [],
    count: 0
  };
  return R(e) === "object" && (e = Object.values(e)), e.forEach((r) => {
    t && R(r) === "object" && (r = r[t]), r != null && !isNaN(r) && (n.values.push(r), n.sum += r, r < n.min && (n.min = r), r > n.max && (n.max = r), n.count += 1);
  }), n.domain = [n.min, n.max], n.limits = (r, o) => Mt(n, r, o), n;
}
function Mt(e, t = "equal", n = 7) {
  R(e) == "array" && (e = At(e));
  const { min: r, max: o } = e, s = e.values.sort((f, a) => f - a);
  if (n === 1)
    return [r, o];
  const c = [];
  if (t.substr(0, 1) === "c" && (c.push(r), c.push(o)), t.substr(0, 1) === "e") {
    c.push(r);
    for (let f = 1; f < n; f++)
      c.push(r + f / n * (o - r));
    c.push(o);
  } else if (t.substr(0, 1) === "l") {
    if (r <= 0)
      throw new Error(
        "Logarithmic scales are only possible for values > 0"
      );
    const f = Math.LOG10E * Ve(r), a = Math.LOG10E * Ve(o);
    c.push(r);
    for (let i = 1; i < n; i++)
      c.push(gr(10, f + i / n * (a - f)));
    c.push(o);
  } else if (t.substr(0, 1) === "q") {
    c.push(r);
    for (let f = 1; f < n; f++) {
      const a = (s.length - 1) * f / n, i = yr(a);
      if (i === a)
        c.push(s[i]);
      else {
        const b = a - i;
        c.push(s[i] * (1 - b) + s[i + 1] * b);
      }
    }
    c.push(o);
  } else if (t.substr(0, 1) === "k") {
    let f;
    const a = s.length, i = new Array(a), b = new Array(n);
    let d = !0, h = 0, g = null;
    g = [], g.push(r);
    for (let w = 1; w < n; w++)
      g.push(r + w / n * (o - r));
    for (g.push(o); d; ) {
      for (let m = 0; m < n; m++)
        b[m] = 0;
      for (let m = 0; m < a; m++) {
        const S = s[m];
        let P = Number.MAX_VALUE, j;
        for (let $ = 0; $ < n; $++) {
          const x = wr(g[$] - S);
          x < P && (P = x, j = $), b[j]++, i[m] = j;
        }
      }
      const w = new Array(n);
      for (let m = 0; m < n; m++)
        w[m] = null;
      for (let m = 0; m < a; m++)
        f = i[m], w[f] === null ? w[f] = s[m] : w[f] += s[m];
      for (let m = 0; m < n; m++)
        w[m] *= 1 / b[m];
      d = !1;
      for (let m = 0; m < n; m++)
        if (w[m] !== g[m]) {
          d = !0;
          break;
        }
      g = w, h++, h > 200 && (d = !1);
    }
    const y = {};
    for (let w = 0; w < n; w++)
      y[w] = [];
    for (let w = 0; w < a; w++)
      f = i[w], y[f].push(s[w]);
    let C = [];
    for (let w = 0; w < n; w++)
      C.push(y[w][0]), C.push(y[w][y[w].length - 1]);
    C = C.sort((w, m) => w - m), c.push(C[0]);
    for (let w = 1; w < C.length; w += 2) {
      const m = C[w];
      !isNaN(m) && c.indexOf(m) === -1 && c.push(m);
    }
  }
  return c;
}
const kr = (e, t) => {
  e = new u(e), t = new u(t);
  const n = e.luminance(), r = t.luminance();
  return n > r ? (n + 0.05) / (r + 0.05) : (r + 0.05) / (n + 0.05);
};
/**
 * @license
 *
 * The APCA contrast prediction algorithm is based of the formulas published
 * in the APCA-1.0.98G specification by Myndex. The specification is available at:
 * https://raw.githubusercontent.com/Myndex/apca-w3/master/images/APCAw3_0.1.17_APCA0.0.98G.svg
 *
 * Note that the APCA implementation is still beta, so please update to
 * future versions of chroma.js when they become available.
 *
 * You can read more about the APCA Readability Criterion at
 * https://readtech.org/ARC/
 */
const Je = 0.027, _r = 5e-4, Ar = 0.1, Qe = 1.14, de = 0.022, et = 1.414, Mr = (e, t) => {
  e = new u(e), t = new u(t), e.alpha() < 1 && (e = oe(t, e, e.alpha(), "rgb"));
  const n = tt(...e.rgb()), r = tt(...t.rgb()), o = n >= de ? n : n + Math.pow(de - n, et), s = r >= de ? r : r + Math.pow(de - r, et), c = Math.pow(s, 0.56) - Math.pow(o, 0.57), f = Math.pow(s, 0.65) - Math.pow(o, 0.62), a = Math.abs(s - o) < _r ? 0 : o < s ? c * Qe : f * Qe;
  return (Math.abs(a) < Ar ? 0 : a > 0 ? a - Je : a + Je) * 100;
};
function tt(e, t, n) {
  return 0.2126729 * Math.pow(e / 255, 2.4) + 0.7151522 * Math.pow(t / 255, 2.4) + 0.072175 * Math.pow(n / 255, 2.4);
}
const { sqrt: F, pow: O, min: $r, max: xr, atan2: nt, abs: rt, cos: pe, sin: ot, exp: Lr, PI: st } = Math;
function Nr(e, t, n = 1, r = 1, o = 1) {
  var s = function(Ae) {
    return 360 * Ae / (2 * st);
  }, c = function(Ae) {
    return 2 * st * Ae / 360;
  };
  e = new u(e), t = new u(t);
  const [f, a, i] = Array.from(e.lab()), [b, d, h] = Array.from(t.lab()), g = (f + b) / 2, y = F(O(a, 2) + O(i, 2)), C = F(O(d, 2) + O(h, 2)), w = (y + C) / 2, m = 0.5 * (1 - F(O(w, 7) / (O(w, 7) + O(25, 7)))), S = a * (1 + m), P = d * (1 + m), j = F(O(S, 2) + O(i, 2)), $ = F(O(P, 2) + O(h, 2)), x = (j + $) / 2, l = s(nt(i, S)), p = s(nt(h, P)), _ = l >= 0 ? l : l + 360, k = p >= 0 ? p : p + 360, L = rt(_ - k) > 180 ? (_ + k + 360) / 2 : (_ + k) / 2, N = 1 - 0.17 * pe(c(L - 30)) + 0.24 * pe(c(2 * L)) + 0.32 * pe(c(3 * L + 6)) - 0.2 * pe(c(4 * L - 63));
  let v = k - _;
  v = rt(v) <= 180 ? v : k <= _ ? v + 360 : v - 360, v = 2 * F(j * $) * ot(c(v) / 2);
  const Z = b - f, le = $ - j, ue = 1 + 0.015 * O(g - 50, 2) / F(20 + O(g - 50, 2)), be = 1 + 0.045 * x, He = 1 + 0.015 * x * N, Yt = 30 * Lr(-O((L - 275) / 25, 2)), Xt = -(2 * F(O(x, 7) / (O(x, 7) + O(25, 7)))) * ot(2 * c(Yt)), Tt = F(
    O(Z / (n * ue), 2) + O(le / (r * be), 2) + O(v / (o * He), 2) + Xt * (le / (r * be)) * (v / (o * He))
  );
  return xr(0, $r(100, Tt));
}
function Er(e, t, n = "lab") {
  e = new u(e), t = new u(t);
  const r = e.get(n), o = t.get(n);
  let s = 0;
  for (let c in r) {
    const f = (r[c] || 0) - (o[c] || 0);
    s += f * f;
  }
  return Math.sqrt(s);
}
const Rr = (...e) => {
  try {
    return new u(...e), !0;
  } catch {
    return !1;
  }
}, Cr = {
  cool() {
    return ye([E.hsl(180, 1, 0.9), E.hsl(250, 0.7, 0.4)]);
  },
  hot() {
    return ye(["#000", "#f00", "#ff0", "#fff"]).mode(
      "rgb"
    );
  }
}, Ge = {
  // sequential
  OrRd: ["#fff7ec", "#fee8c8", "#fdd49e", "#fdbb84", "#fc8d59", "#ef6548", "#d7301f", "#b30000", "#7f0000"],
  PuBu: ["#fff7fb", "#ece7f2", "#d0d1e6", "#a6bddb", "#74a9cf", "#3690c0", "#0570b0", "#045a8d", "#023858"],
  BuPu: ["#f7fcfd", "#e0ecf4", "#bfd3e6", "#9ebcda", "#8c96c6", "#8c6bb1", "#88419d", "#810f7c", "#4d004b"],
  Oranges: ["#fff5eb", "#fee6ce", "#fdd0a2", "#fdae6b", "#fd8d3c", "#f16913", "#d94801", "#a63603", "#7f2704"],
  BuGn: ["#f7fcfd", "#e5f5f9", "#ccece6", "#99d8c9", "#66c2a4", "#41ae76", "#238b45", "#006d2c", "#00441b"],
  YlOrBr: ["#ffffe5", "#fff7bc", "#fee391", "#fec44f", "#fe9929", "#ec7014", "#cc4c02", "#993404", "#662506"],
  YlGn: ["#ffffe5", "#f7fcb9", "#d9f0a3", "#addd8e", "#78c679", "#41ab5d", "#238443", "#006837", "#004529"],
  Reds: ["#fff5f0", "#fee0d2", "#fcbba1", "#fc9272", "#fb6a4a", "#ef3b2c", "#cb181d", "#a50f15", "#67000d"],
  RdPu: ["#fff7f3", "#fde0dd", "#fcc5c0", "#fa9fb5", "#f768a1", "#dd3497", "#ae017e", "#7a0177", "#49006a"],
  Greens: ["#f7fcf5", "#e5f5e0", "#c7e9c0", "#a1d99b", "#74c476", "#41ab5d", "#238b45", "#006d2c", "#00441b"],
  YlGnBu: ["#ffffd9", "#edf8b1", "#c7e9b4", "#7fcdbb", "#41b6c4", "#1d91c0", "#225ea8", "#253494", "#081d58"],
  Purples: ["#fcfbfd", "#efedf5", "#dadaeb", "#bcbddc", "#9e9ac8", "#807dba", "#6a51a3", "#54278f", "#3f007d"],
  GnBu: ["#f7fcf0", "#e0f3db", "#ccebc5", "#a8ddb5", "#7bccc4", "#4eb3d3", "#2b8cbe", "#0868ac", "#084081"],
  Greys: ["#ffffff", "#f0f0f0", "#d9d9d9", "#bdbdbd", "#969696", "#737373", "#525252", "#252525", "#000000"],
  YlOrRd: ["#ffffcc", "#ffeda0", "#fed976", "#feb24c", "#fd8d3c", "#fc4e2a", "#e31a1c", "#bd0026", "#800026"],
  PuRd: ["#f7f4f9", "#e7e1ef", "#d4b9da", "#c994c7", "#df65b0", "#e7298a", "#ce1256", "#980043", "#67001f"],
  Blues: ["#f7fbff", "#deebf7", "#c6dbef", "#9ecae1", "#6baed6", "#4292c6", "#2171b5", "#08519c", "#08306b"],
  PuBuGn: ["#fff7fb", "#ece2f0", "#d0d1e6", "#a6bddb", "#67a9cf", "#3690c0", "#02818a", "#016c59", "#014636"],
  Viridis: ["#440154", "#482777", "#3f4a8a", "#31678e", "#26838f", "#1f9d8a", "#6cce5a", "#b6de2b", "#fee825"],
  // diverging
  Spectral: ["#9e0142", "#d53e4f", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#e6f598", "#abdda4", "#66c2a5", "#3288bd", "#5e4fa2"],
  RdYlGn: ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#d9ef8b", "#a6d96a", "#66bd63", "#1a9850", "#006837"],
  RdBu: ["#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#f7f7f7", "#d1e5f0", "#92c5de", "#4393c3", "#2166ac", "#053061"],
  PiYG: ["#8e0152", "#c51b7d", "#de77ae", "#f1b6da", "#fde0ef", "#f7f7f7", "#e6f5d0", "#b8e186", "#7fbc41", "#4d9221", "#276419"],
  PRGn: ["#40004b", "#762a83", "#9970ab", "#c2a5cf", "#e7d4e8", "#f7f7f7", "#d9f0d3", "#a6dba0", "#5aae61", "#1b7837", "#00441b"],
  RdYlBu: ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee090", "#ffffbf", "#e0f3f8", "#abd9e9", "#74add1", "#4575b4", "#313695"],
  BrBG: ["#543005", "#8c510a", "#bf812d", "#dfc27d", "#f6e8c3", "#f5f5f5", "#c7eae5", "#80cdc1", "#35978f", "#01665e", "#003c30"],
  RdGy: ["#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#ffffff", "#e0e0e0", "#bababa", "#878787", "#4d4d4d", "#1a1a1a"],
  PuOr: ["#7f3b08", "#b35806", "#e08214", "#fdb863", "#fee0b6", "#f7f7f7", "#d8daeb", "#b2abd2", "#8073ac", "#542788", "#2d004b"],
  // qualitative
  Set2: ["#66c2a5", "#fc8d62", "#8da0cb", "#e78ac3", "#a6d854", "#ffd92f", "#e5c494", "#b3b3b3"],
  Accent: ["#7fc97f", "#beaed4", "#fdc086", "#ffff99", "#386cb0", "#f0027f", "#bf5b17", "#666666"],
  Set1: ["#e41a1c", "#377eb8", "#4daf4a", "#984ea3", "#ff7f00", "#ffff33", "#a65628", "#f781bf", "#999999"],
  Set3: ["#8dd3c7", "#ffffb3", "#bebada", "#fb8072", "#80b1d3", "#fdb462", "#b3de69", "#fccde5", "#d9d9d9", "#bc80bd", "#ccebc5", "#ffed6f"],
  Dark2: ["#1b9e77", "#d95f02", "#7570b3", "#e7298a", "#66a61e", "#e6ab02", "#a6761d", "#666666"],
  Paired: ["#a6cee3", "#1f78b4", "#b2df8a", "#33a02c", "#fb9a99", "#e31a1c", "#fdbf6f", "#ff7f00", "#cab2d6", "#6a3d9a", "#ffff99", "#b15928"],
  Pastel2: ["#b3e2cd", "#fdcdac", "#cbd5e8", "#f4cae4", "#e6f5c9", "#fff2ae", "#f1e2cc", "#cccccc"],
  Pastel1: ["#fbb4ae", "#b3cde3", "#ccebc5", "#decbe4", "#fed9a6", "#ffffcc", "#e5d8bd", "#fddaec", "#f2f2f2"]
}, $t = Object.keys(Ge), ct = new Map($t.map((e) => [e.toLowerCase(), e])), vr = typeof Proxy == "function" ? new Proxy(Ge, {
  get(e, t) {
    const n = t.toLowerCase();
    if (ct.has(n))
      return e[ct.get(n)];
  },
  getOwnPropertyNames() {
    return Object.getOwnPropertyNames($t);
  }
}) : Ge, jr = (...e) => {
  e = M(e, "cmyk");
  const [t, n, r, o] = e, s = e.length > 4 ? e[4] : 1;
  return o === 1 ? [0, 0, 0, s] : [
    t >= 1 ? 0 : 255 * (1 - t) * (1 - o),
    // r
    n >= 1 ? 0 : 255 * (1 - n) * (1 - o),
    // g
    r >= 1 ? 0 : 255 * (1 - r) * (1 - o),
    // b
    s
  ];
}, { max: ft } = Math, Pr = (...e) => {
  let [t, n, r] = M(e, "rgb");
  t = t / 255, n = n / 255, r = r / 255;
  const o = 1 - ft(t, ft(n, r)), s = o < 1 ? 1 / (1 - o) : 0, c = (1 - t - o) * s, f = (1 - n - o) * s, a = (1 - r - o) * s;
  return [c, f, a, o];
};
u.prototype.cmyk = function() {
  return Pr(this._rgb);
};
const Sr = (...e) => new u(...e, "cmyk");
Object.assign(E, { cmyk: Sr });
A.format.cmyk = jr;
A.autodetect.push({
  p: 2,
  test: (...e) => {
    if (e = M(e, "cmyk"), R(e) === "array" && e.length === 4)
      return "cmyk";
  }
});
const Or = (...e) => {
  const t = M(e, "hsla");
  let n = se(e) || "lsa";
  return t[0] = Y(t[0] || 0) + "deg", t[1] = Y(t[1] * 100) + "%", t[2] = Y(t[2] * 100) + "%", n === "hsla" || t.length > 3 && t[3] < 1 ? (t[3] = "/ " + (t.length > 3 ? t[3] : 1), n = "hsla") : t.length = 3, `${n.substr(0, 3)}(${t.join(" ")})`;
}, Br = (...e) => {
  const t = M(e, "lab");
  let n = se(e) || "lab";
  return t[0] = Y(t[0]) + "%", t[1] = Y(t[1]), t[2] = Y(t[2]), n === "laba" || t.length > 3 && t[3] < 1 ? t[3] = "/ " + (t.length > 3 ? t[3] : 1) : t.length = 3, `lab(${t.join(" ")})`;
}, Gr = (...e) => {
  const t = M(e, "lch");
  let n = se(e) || "lab";
  return t[0] = Y(t[0]) + "%", t[1] = Y(t[1]), t[2] = isNaN(t[2]) ? "none" : Y(t[2]) + "deg", n === "lcha" || t.length > 3 && t[3] < 1 ? t[3] = "/ " + (t.length > 3 ? t[3] : 1) : t.length = 3, `lch(${t.join(" ")})`;
}, zr = (...e) => {
  const t = M(e, "lab");
  return t[0] = Y(t[0] * 100) + "%", t[1] = Oe(t[1]), t[2] = Oe(t[2]), t.length > 3 && t[3] < 1 ? t[3] = "/ " + (t.length > 3 ? t[3] : 1) : t.length = 3, `oklab(${t.join(" ")})`;
}, xt = (...e) => {
  const [t, n, r, ...o] = M(e, "rgb"), [s, c, f] = Ke(t, n, r), [a, i, b] = yt(s, c, f);
  return [a, i, b, ...o.length > 0 && o[0] < 1 ? [o[0]] : []];
}, Yr = (...e) => {
  const t = M(e, "lch");
  return t[0] = Y(t[0] * 100) + "%", t[1] = Oe(t[1]), t[2] = isNaN(t[2]) ? "none" : Y(t[2]) + "deg", t.length > 3 && t[3] < 1 ? t[3] = "/ " + (t.length > 3 ? t[3] : 1) : t.length = 3, `oklch(${t.join(" ")})`;
}, { round: ve } = Math, Xr = (...e) => {
  const t = M(e, "rgba");
  let n = se(e) || "rgb";
  if (n.substr(0, 3) === "hsl")
    return Or(kt(t), n);
  if (n.substr(0, 3) === "lab") {
    const r = ie();
    D("d50");
    const o = Br(Te(t), n);
    return D(r), o;
  }
  if (n.substr(0, 3) === "lch") {
    const r = ie();
    D("d50");
    const o = Gr(Ze(t), n);
    return D(r), o;
  }
  return n.substr(0, 5) === "oklab" ? zr(Ke(t)) : n.substr(0, 5) === "oklch" ? Yr(xt(t)) : (t[0] = ve(t[0]), t[1] = ve(t[1]), t[2] = ve(t[2]), (n === "rgba" || t.length > 3 && t[3] < 1) && (t[3] = "/ " + (t.length > 3 ? t[3] : 1), n = "rgba"), `${n.substr(0, 3)}(${t.slice(0, n === "rgb" ? 3 : 4).join(" ")})`);
}, Lt = (...e) => {
  e = M(e, "lch");
  const [t, n, r, ...o] = e, [s, c, f] = gt(t, n, r), [a, i, b] = Ie(s, c, f);
  return [a, i, b, ...o.length > 0 && o[0] < 1 ? [o[0]] : []];
}, U = /((?:-?\d+)|(?:-?\d+(?:\.\d+)?)%|none)/.source, T = /((?:-?(?:\d+(?:\.\d*)?|\.\d+)%?)|none)/.source, we = /((?:-?(?:\d+(?:\.\d*)?|\.\d+)%)|none)/.source, X = /\s*/.source, fe = /\s+/.source, We = /\s*,\s*/.source, _e = /((?:-?(?:\d+(?:\.\d*)?|\.\d+)(?:deg)?)|none)/.source, ae = /\s*(?:\/\s*((?:[01]|[01]?\.\d+)|\d+(?:\.\d+)?%))?/.source, Nt = new RegExp(
  "^rgba?\\(" + X + [U, U, U].join(fe) + ae + "\\)$"
), Et = new RegExp(
  "^rgb\\(" + X + [U, U, U].join(We) + X + "\\)$"
), Rt = new RegExp(
  "^rgba\\(" + X + [U, U, U, T].join(We) + X + "\\)$"
), Ct = new RegExp(
  "^hsla?\\(" + X + [_e, we, we].join(fe) + ae + "\\)$"
), vt = new RegExp(
  "^hsl?\\(" + X + [_e, we, we].join(We) + X + "\\)$"
), jt = /^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/, Pt = new RegExp(
  "^lab\\(" + X + [T, T, T].join(fe) + ae + "\\)$"
), St = new RegExp(
  "^lch\\(" + X + [T, T, _e].join(fe) + ae + "\\)$"
), Ot = new RegExp(
  "^oklab\\(" + X + [T, T, T].join(fe) + ae + "\\)$"
), Bt = new RegExp(
  "^oklch\\(" + X + [T, T, _e].join(fe) + ae + "\\)$"
), { round: Gt } = Math, ne = (e) => e.map((t, n) => n <= 2 ? Q(Gt(t), 0, 255) : t), B = (e, t = 0, n = 100, r = !1) => (typeof e == "string" && e.endsWith("%") && (e = parseFloat(e.substring(0, e.length - 1)) / 100, r ? e = t + (e + 1) * 0.5 * (n - t) : e = t + e * (n - t)), +e), z = (e, t) => e === "none" ? t : e, Fe = (e) => {
  if (e = e.toLowerCase().trim(), e === "transparent")
    return [0, 0, 0, 0];
  let t;
  if (A.format.named)
    try {
      return A.format.named(e);
    } catch {
    }
  if ((t = e.match(Nt)) || (t = e.match(Et))) {
    let n = t.slice(1, 4);
    for (let o = 0; o < 3; o++)
      n[o] = +B(z(n[o], 0), 0, 255);
    n = ne(n);
    const r = t[4] !== void 0 ? +B(t[4], 0, 1) : 1;
    return n[3] = r, n;
  }
  if (t = e.match(Rt)) {
    const n = t.slice(1, 5);
    for (let r = 0; r < 4; r++)
      n[r] = +B(n[r], 0, 255);
    return n;
  }
  if ((t = e.match(Ct)) || (t = e.match(vt))) {
    const n = t.slice(1, 4);
    n[0] = +z(n[0].replace("deg", ""), 0), n[1] = +B(z(n[1], 0), 0, 100) * 0.01, n[2] = +B(z(n[2], 0), 0, 100) * 0.01;
    const r = ne(Be(n)), o = t[4] !== void 0 ? +B(t[4], 0, 1) : 1;
    return r[3] = o, r;
  }
  if (t = e.match(jt)) {
    const n = t.slice(1, 4);
    n[1] *= 0.01, n[2] *= 0.01;
    const r = Be(n);
    for (let o = 0; o < 3; o++)
      r[o] = Gt(r[o]);
    return r[3] = +t[4], r;
  }
  if (t = e.match(Pt)) {
    const n = t.slice(1, 4);
    n[0] = B(z(n[0], 0), 0, 100), n[1] = B(z(n[1], 0), -125, 125, !0), n[2] = B(z(n[2], 0), -125, 125, !0);
    const r = ie();
    D("d50");
    const o = ne(Xe(n));
    D(r);
    const s = t[4] !== void 0 ? +B(t[4], 0, 1) : 1;
    return o[3] = s, o;
  }
  if (t = e.match(St)) {
    const n = t.slice(1, 4);
    n[0] = B(n[0], 0, 100), n[1] = B(z(n[1], 0), 0, 150, !1), n[2] = +z(n[2].replace("deg", ""), 0);
    const r = ie();
    D("d50");
    const o = ne(qe(n));
    D(r);
    const s = t[4] !== void 0 ? +B(t[4], 0, 1) : 1;
    return o[3] = s, o;
  }
  if (t = e.match(Ot)) {
    const n = t.slice(1, 4);
    n[0] = B(z(n[0], 0), 0, 1), n[1] = B(z(n[1], 0), -0.4, 0.4, !0), n[2] = B(z(n[2], 0), -0.4, 0.4, !0);
    const r = ne(Ie(n)), o = t[4] !== void 0 ? +B(t[4], 0, 1) : 1;
    return r[3] = o, r;
  }
  if (t = e.match(Bt)) {
    const n = t.slice(1, 4);
    n[0] = B(z(n[0], 0), 0, 1), n[1] = B(z(n[1], 0), 0, 0.4, !1), n[2] = +z(n[2].replace("deg", ""), 0);
    const r = ne(Lt(n)), o = t[4] !== void 0 ? +B(t[4], 0, 1) : 1;
    return r[3] = o, r;
  }
};
Fe.test = (e) => (
  // modern
  Nt.test(e) || Ct.test(e) || Pt.test(e) || St.test(e) || Ot.test(e) || Bt.test(e) || // legacy
  Et.test(e) || Rt.test(e) || vt.test(e) || jt.test(e) || e === "transparent"
);
u.prototype.css = function(e) {
  return Xr(this._rgb, e);
};
const Tr = (...e) => new u(...e, "css");
E.css = Tr;
A.format.css = Fe;
A.autodetect.push({
  p: 5,
  test: (e, ...t) => {
    if (!t.length && R(e) === "string" && Fe.test(e))
      return "css";
  }
});
A.format.gl = (...e) => {
  const t = M(e, "rgba");
  return t[0] *= 255, t[1] *= 255, t[2] *= 255, t;
};
const qr = (...e) => new u(...e, "gl");
E.gl = qr;
u.prototype.gl = function() {
  const e = this._rgb;
  return [e[0] / 255, e[1] / 255, e[2] / 255, e[3]];
};
u.prototype.hex = function(e) {
  return dt(this._rgb, e);
};
const Zr = (...e) => new u(...e, "hex");
E.hex = Zr;
A.format.hex = ht;
A.autodetect.push({
  p: 4,
  test: (e, ...t) => {
    if (!t.length && R(e) === "string" && [3, 4, 5, 6, 7, 8, 9].indexOf(e.length) >= 0)
      return "hex";
  }
});
const { log: me } = Math, zt = (e) => {
  const t = e / 100;
  let n, r, o;
  return t < 66 ? (n = 255, r = t < 6 ? 0 : -155.25485562709179 - 0.44596950469579133 * (r = t - 2) + 104.49216199393888 * me(r), o = t < 20 ? 0 : -254.76935184120902 + 0.8274096064007395 * (o = t - 10) + 115.67994401066147 * me(o)) : (n = 351.97690566805693 + 0.114206453784165 * (n = t - 55) - 40.25366309332127 * me(n), r = 325.4494125711974 + 0.07943456536662342 * (r = t - 50) - 28.0852963507957 * me(r), o = 255), [n, r, o, 1];
}, { round: Ir } = Math, Kr = (...e) => {
  const t = M(e, "rgb"), n = t[0], r = t[2];
  let o = 1e3, s = 4e4;
  const c = 0.4;
  let f;
  for (; s - o > c; ) {
    f = (s + o) * 0.5;
    const a = zt(f);
    a[2] / a[0] >= r / n ? s = f : o = f;
  }
  return Ir(f);
};
u.prototype.temp = u.prototype.kelvin = u.prototype.temperature = function() {
  return Kr(this._rgb);
};
const je = (...e) => new u(...e, "temp");
Object.assign(E, { temp: je, kelvin: je, temperature: je });
A.format.temp = A.format.kelvin = A.format.temperature = zt;
u.prototype.oklch = function() {
  return xt(this._rgb);
};
const Wr = (...e) => new u(...e, "oklch");
Object.assign(E, { oklch: Wr });
A.format.oklch = Lt;
A.autodetect.push({
  p: 2,
  test: (...e) => {
    if (e = M(e, "oklch"), R(e) === "array" && e.length === 3)
      return "oklch";
  }
});
Object.assign(E, {
  analyze: At,
  average: Fn,
  bezier: Qn,
  blend: q,
  brewer: vr,
  Color: u,
  colors: re,
  contrast: kr,
  contrastAPCA: Mr,
  cubehelix: br,
  deltaE: Nr,
  distance: Er,
  input: A,
  interpolate: oe,
  limits: Mt,
  mix: oe,
  random: mr,
  scale: ye,
  scales: Cr,
  valid: Rr
});
const at = 42, Fr = [
  "#30123b",
  "#4145ab",
  "#4675ed",
  "#39a2fc",
  "#1bcfd4",
  "#24eca6",
  "#61fc6c",
  "#a4fc3b",
  "#d1e834",
  "#f3c63a",
  "#fe9b2d",
  "#f36315",
  "#d93806",
  "#b11901",
  "#7a0402"
], Hr = [
  0,
  0.071,
  0.143,
  0.214,
  0.286,
  0.357,
  0.429,
  0.5,
  0.571,
  0.643,
  0.714,
  0.786,
  0.857,
  0.929,
  1
], Pe = (e, t = 0) => Array.isArray(e) ? e : Number.isInteger(e) ? Array(e + t).fill(e + t - 1).map(
  (n, r) => r / Math.max(n, 1)
) : (console.warn("expected prop to be 'number[]' or 'int'", e), []), ze = (e, t) => ((t ? 1 - e : e) * 100).toFixed(2) + "%", Se = (e, t, n = t, r = !1) => [ze(t), e(r ? 1 - n : n).hex()], K = (e, t = !1) => {
  if (e === "" || e === !0) return !0;
  if (!e) return;
  let n = typeof e == "string" || e instanceof String ? e.startsWith("[") ? JSON.parse(e) : e.split(",") : Array.isArray(e) ? [...e] : [e];
  return t && (n = n == null ? void 0 : n.map((r) => r == "" || isNaN(r) ? r : +r)), n.length > 1 ? n : n[0];
}, Dr = (e) => {
  let {
    colors: t,
    labels: n,
    ticks: r,
    classes: o,
    vertical: s,
    reverse: c,
    flip: f,
    before: a,
    after: i,
    colorReverse: b,
    colorMode: d,
    colorGamma: h,
    colorCorrectLightness: g,
    colorPadding: y,
    colorClass: C,
    centeredEdgeLabels: w
  } = e;
  t = K(t), n = K(n), r = K(r, !0), o = K(o, !0), y = K(y, !0), s = K(s), c = K(c), f = K(f), b = K(b), g = K(g), n === !0 && (Array.isArray(r) ? n = [...r] : Array.isArray(o) && (n = [...o])), c ^ s && (Array.isArray(r) && (r = r.reverse().map((l) => 1 - l)), Array.isArray(o) && (o = o.reverse().map((l) => 1 - l)));
  let m = null, S = null, P = null, j = null;
  o === !0 && (r ? o = Array.isArray(r) ? r : r - 1 : Array.isArray(n) ? o = n == null ? void 0 : n.length : Array.isArray(t) && (o = t == null ? void 0 : t.length));
  let $;
  if (t === !0 ? $ = E.scale(Fr).domain(Hr) : t === void 0 ? t = ["#fff", "#000"] : Array.isArray(t) || (t = E.brewer[t] || ["#fff", t]), t !== !0 && c ^ s && (t = [...t].reverse()), $ = $ || E.scale(t), d && ($ = $.mode(d)), h && ($ = $.gamma(h)), g && ($ = $.correctLightness()), y && ($ = $.padding(y)), o)
    switch (C) {
      case "average":
        $ = $.domain([0, 1]);
        break;
      case "equal":
        Array.isArray(o) || (o = Pe(o, 1)), $ = $.classes([0, ...o, 1]);
        break;
      default:
        $ = $.classes(o);
        break;
    }
  if (a === "" && (a = $(s ? 1 : 0).hex()), i === "" && (i = $(s ? 0 : 1).hex()), !o || Number(o) <= 1)
    S = Array(at).fill(at - 1).map((l, p) => Se($, p / l, p / l, b));
  else {
    let l = Pe(o, 1);
    if (Array.isArray(l)) {
      let p = l.length - 1;
      S = l.reduce((_, k, L, N) => {
        let v = N[L + 1], Z = (k + v) / 2;
        return L < p && L && _.push(Se($, k, Z, b)), L < p - 1 && _.push(Se($, v, Z, b)), _;
      }, []), m = l;
    }
  }
  if (r !== void 0) {
    r === !0 && (Array.isArray(m) ? r = m : Array.isArray(n) ? r = n.length : r = 2);
    let l = Pe(r);
    Array.isArray(l) && (P = l.map((p) => ze(p, s)), m = m || l, c ^ s && (P = P.reverse()));
  }
  if (n !== void 0) {
    if (n === !0)
      if (m) {
        let p = m.length - (o ? 1 : 0);
        n = Array(p).fill(Math.max(p - 1, 1)).map(
          (_, k) => `${parseFloat((k / _).toFixed(2))}`
        );
      } else n = ["0", "1"];
    Array.isArray(n) || (n = ["0", n]), c ^ s && Array.isArray(n) && (n = n.reverse());
    let l;
    switch (m && n.length - m.length) {
      case 0:
        l = (p) => m[p], w = !1;
        break;
      case -1:
        l = (p) => (m[p] + m[p + 1]) / 2, w = !0;
        break;
      default:
        n.length > 1 ? (l = (p) => p / (n.length - 1), w = !1) : (l = () => 0.5, w = !0);
        break;
    }
    j = n.map((p, _) => [ze(s ? 1 - l(_) : l(_)), p]);
  }
  return {
    stops$: S,
    ticks$: P,
    labels$: j,
    before: a,
    after: i,
    vertical: s,
    klass: `dv-sb${a ? " b" : ""}${i ? " a" : ""}${f ? " f" : ""}${s ? " v" : " h"}${w ? " c" : ""}`
  };
};
let Ur = 0;
const Vr = qt({
  props: {
    colors: { type: [Boolean, String, Array] },
    labels: { type: [Boolean, String, Array] },
    ticks: { type: [Boolean, String, Number, Array] },
    classes: { type: [Boolean, String, Number, Array] },
    vertical: { type: Boolean },
    reverse: { type: Boolean },
    flip: { type: Boolean },
    before: { type: String },
    after: { type: String },
    colorReverse: { type: Boolean },
    colorMode: { type: String },
    colorGamma: { type: Number },
    colorCorrectLightness: { type: Boolean },
    colorPadding: { type: [String, Number, Array] },
    colorClass: { type: String },
    centeredEdgeLabels: { type: Boolean }
  },
  setup(e) {
    const t = Ur++;
    return () => {
      const {
        stops$: n,
        ticks$: r,
        labels$: o,
        before: s,
        after: c,
        vertical: f,
        klass: a
      } = Dr(e);
      let i = f ? 1 : 0, b = f ? 0 : 1, d = f ? "translate(-1,1) rotate(-90)" : "", h = f ? "100%" : 0, g = f ? 0 : "100%";
      return I("svg", {
        class: a
      }, [
        I("defs", [
          I("line", {
            id: `tk${t}`,
            x1: 0,
            xy: 0,
            x2: i,
            y2: b
          }),
          I(
            "linearGradient",
            {
              id: `lg${t}`,
              gradientTransform: d
            },
            n == null ? void 0 : n.map(
              (y) => I("stop", { offset: y[0], "stop-color": y[1] })
            )
          )
        ]),
        s ? I("rect", { class: "b", fill: s }) : null,
        I("rect", {
          fill: `url('#lg${t}')`,
          width: h,
          height: g
        }),
        c ? I("rect", { class: "a", fill: c, y: h, x: g }) : null,
        r == null ? void 0 : r.map(
          (y) => I("use", {
            href: `#tk${t}`,
            x: f ? 0 : y,
            y: f ? y : 0
          })
        ),
        o == null ? void 0 : o.map(
          (y) => I("text", {
            x: f ? null : y[0],
            y: f ? y[0] : null
          }, y[1])
        )
      ]);
    };
  }
}), Jr = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, t0 = /* @__PURE__ */ Jr(Vr, [["__scopeId", "data-v-f4af1ba2"]]);
export {
  t0 as default
};
