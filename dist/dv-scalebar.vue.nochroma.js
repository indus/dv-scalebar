import { defineComponent as O, h as p } from "vue";
import L from "chroma-js";
/**
 * @license
 * https://github.com/indus/dist/blob/main/dv-scalebar.vue.nochroma.licence.txt
 */
const G = 42, E = [
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
], R = [
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
], $ = (a, r = 0) => Array.isArray(a) ? a : Number.isInteger(a) ? Array(a + r).fill(a + r - 1).map(
  (e, t) => t / Math.max(e, 1)
) : (console.warn("expected prop to be 'number[]' or 'int'", a), []), C = (a, r) => ((r ? 1 - a : a) * 100).toFixed(2) + "%", w = (a, r, e = r, t = !1) => [C(r), a(t ? 1 - e : e).hex()], A = (a, r = !1) => {
  if (a === "" || a === !0) return !0;
  if (!a) return;
  let e = typeof a == "string" || a instanceof String ? a.startsWith("[") ? JSON.parse(a) : a.split(",") : Array.isArray(a) ? [...a] : [a];
  return r && (e = e == null ? void 0 : e.map((t) => t == "" || isNaN(t) ? t : +t)), e.length > 1 ? e : e[0];
}, U = (a) => {
  let {
    colors: r,
    labels: e,
    ticks: t,
    classes: s,
    vertical: n,
    reverse: u,
    flip: c,
    before: m,
    after: b,
    colorReverse: g,
    colorMode: S,
    colorGamma: x,
    colorCorrectLightness: h,
    colorPadding: f,
    colorClass: M,
    centeredEdgeLabels: k
  } = a;
  r = A(r), e = A(e), t = A(t, !0), s = A(s, !0), f = A(f, !0), n = A(n), u = A(u), c = A(c), g = A(g), h = A(h), e === !0 && (Array.isArray(t) ? e = [...t] : Array.isArray(s) && (e = [...s])), u ^ n && (Array.isArray(t) && (t = t.reverse().map((i) => 1 - i)), Array.isArray(s) && (s = s.reverse().map((i) => 1 - i)));
  let y = null, T = null, _ = null, P = null;
  s === !0 && (t ? s = Array.isArray(t) ? t : t - 1 : Array.isArray(e) ? s = e == null ? void 0 : e.length : Array.isArray(r) && (s = r == null ? void 0 : r.length));
  let l;
  if (r === !0 ? l = L.scale(E).domain(R) : r === void 0 ? r = ["#fff", "#000"] : Array.isArray(r) || (r = L.brewer[r] || ["#fff", r]), r !== !0 && u ^ n && (r = [...r].reverse()), l = l || L.scale(r), S && (l = l.mode(S)), x && (l = l.gamma(x)), h && (l = l.correctLightness()), f && (l = l.padding(f)), s)
    switch (M) {
      case "average":
        l = l.domain([0, 1]);
        break;
      case "equal":
        Array.isArray(s) || (s = $(s, 1)), l = l.classes([0, ...s, 1]);
        break;
      default:
        l = l.classes(s);
        break;
    }
  if (m === "" && (m = l(n ? 1 : 0).hex()), b === "" && (b = l(n ? 0 : 1).hex()), !s || Number(s) <= 1)
    T = Array(G).fill(G - 1).map((i, o) => w(l, o / i, o / i, g));
  else {
    let i = $(s, 1);
    if (Array.isArray(i)) {
      let o = i.length - 1;
      T = i.reduce((d, B, N, I) => {
        let v = I[N + 1], F = (B + v) / 2;
        return N < o && N && d.push(w(l, B, F, g)), N < o - 1 && d.push(w(l, v, F, g)), d;
      }, []), y = i;
    }
  }
  if (t !== void 0) {
    t === !0 && (Array.isArray(y) ? t = y : Array.isArray(e) ? t = e.length : t = 2);
    let i = $(t);
    Array.isArray(i) && (_ = i.map((o) => C(o, n)), y = y || i, u ^ n && (_ = _.reverse()));
  }
  if (e !== void 0) {
    if (e === !0)
      if (y) {
        let o = y.length - (s ? 1 : 0);
        e = Array(o).fill(Math.max(o - 1, 1)).map(
          (d, B) => `${parseFloat((B / d).toFixed(2))}`
        );
      } else e = ["0", "1"];
    Array.isArray(e) || (e = ["0", e]), u ^ n && Array.isArray(e) && (e = e.reverse());
    let i;
    switch (y && e.length - y.length) {
      case 0:
        i = (o) => y[o], k = !1;
        break;
      case -1:
        i = (o) => (y[o] + y[o + 1]) / 2, k = !0;
        break;
      default:
        e.length > 1 ? (i = (o) => o / (e.length - 1), k = !1) : (i = () => 0.5, k = !0);
        break;
    }
    P = e.map((o, d) => [C(n ? 1 - i(d) : i(d)), o]);
  }
  return {
    stops$: T,
    ticks$: _,
    labels$: P,
    before: m,
    after: b,
    vertical: n,
    klass: `dv-sb${m ? " b" : ""}${b ? " a" : ""}${c ? " f" : ""}${n ? " v" : " h"}${k ? " c" : ""}`
  };
};
let q = 0;
const z = O({
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
  setup(a) {
    const r = q++;
    return () => {
      const {
        stops$: e,
        ticks$: t,
        labels$: s,
        before: n,
        after: u,
        vertical: c,
        klass: m
      } = U(a);
      let b = c ? 1 : 0, g = c ? 0 : 1, S = c ? "translate(-1,1) rotate(-90)" : "", x = c ? "100%" : 0, h = c ? 0 : "100%";
      return p("svg", {
        class: m
      }, [
        p("defs", [
          p("line", {
            id: `tk${r}`,
            x1: 0,
            xy: 0,
            x2: b,
            y2: g
          }),
          p(
            "linearGradient",
            {
              id: `lg${r}`,
              gradientTransform: S
            },
            e == null ? void 0 : e.map(
              (f) => p("stop", { offset: f[0], "stop-color": f[1] })
            )
          )
        ]),
        n ? p("rect", { class: "b", fill: n }) : null,
        p("rect", {
          fill: `url('#lg${r}')`,
          width: x,
          height: h
        }),
        u ? p("rect", { class: "a", fill: u, y: x, x: h }) : null,
        t == null ? void 0 : t.map(
          (f) => p("use", {
            href: `#tk${r}`,
            x: c ? 0 : f,
            y: c ? f : 0
          })
        ),
        s == null ? void 0 : s.map(
          (f) => p("text", {
            x: c ? null : f[0],
            y: c ? f[0] : null
          }, f[1])
        )
      ]);
    };
  }
}), D = (a, r) => {
  const e = a.__vccOpts || a;
  for (const [t, s] of r)
    e[t] = s;
  return e;
}, H = /* @__PURE__ */ D(z, [["__scopeId", "data-v-f4af1ba2"]]);
export {
  H as default
};
