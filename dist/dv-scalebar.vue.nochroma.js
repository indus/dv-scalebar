import { defineComponent as O, h as p } from "vue";
import N from "chroma-js";
/**
 * @license
 * https://github.com/indus/dist/blob/main/dv-scalebar.vue.nochroma.licence.txt
 */
const M = 42, E = [
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
], T = (a, r = 0) => Array.isArray(a) ? a : Number.isInteger(a) ? Array(a + r).fill(a + r - 1).map(
  (e, t) => t / Math.max(e, 1)
) : (console.warn("expected prop to be 'number[]' or 'int'", a), []), $ = (a, r) => ((r ? 1 - a : a) * 100).toFixed(2) + "%", L = (a, r, e = r, t = !1) => [$(r), a(t ? 1 - e : e).hex()], u = (a, r = !1) => {
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
    reverse: d,
    flip: c,
    before: g,
    after: f,
    colorReverse: m,
    colorMode: w,
    colorGamma: C,
    colorCorrectLightness: _,
    colorPadding: h,
    colorClass: v,
    centeredEdgeLabels: b
  } = a;
  r = u(r), e = u(e), t = u(t, !0), s = u(s, !0), h = u(h, !0), n = u(n), c = u(c), m = u(m), _ = u(_), e === !0 && (Array.isArray(t) ? e = [...t] : Array.isArray(s) && (e = [...s])), d ^ n && (Array.isArray(t) && (t = t.reverse().map((i) => 1 - i)), Array.isArray(s) && (s = s.reverse().map((i) => 1 - i)));
  let y = null, B = null, x = null, P = null;
  s === !0 && (t ? s = Array.isArray(t) ? t : t - 1 : Array.isArray(e) ? s = e == null ? void 0 : e.length : Array.isArray(r) && (s = r == null ? void 0 : r.length));
  let l;
  if (r === !0 ? l = N.scale(E).domain(R) : r === void 0 ? r = ["#fff", "#000"] : Array.isArray(r) || (r = N.brewer[r] || ["#fff", r]), r !== !0 && d ^ n && (r = [...r].reverse()), l = l || N.scale(r), w && (l = l.mode(w)), C && (l = l.gamma(C)), _ && (l = l.correctLightness()), h && (l = l.padding(h)), s)
    switch (v) {
      case "average":
        l = l.domain([0, 1]);
        break;
      case "equal":
        Array.isArray(s) || (s = T(s, 1)), l = l.classes([0, ...s, 1]);
        break;
      default:
        l = l.classes(s);
        break;
    }
  if (g === "" && (g = l(n ? 1 : 0).hex()), f === "" && (f = l(n ? 0 : 1).hex()), !s || Number(s) <= 1)
    B = Array(M).fill(M - 1).map((i, o) => L(l, o / i, o / i, m));
  else {
    let i = T(s, 1);
    if (Array.isArray(i)) {
      let o = i.length - 1;
      B = i.reduce((A, k, S, I) => {
        let F = I[S + 1], G = (k + F) / 2;
        return S < o && S && A.push(L(l, k, G, m)), S < o - 1 && A.push(L(l, F, G, m)), A;
      }, []), y = i;
    }
  }
  if (t !== void 0) {
    t === !0 && (Array.isArray(y) ? t = y : Array.isArray(e) ? t = e.length : t = 2);
    let i = T(t);
    Array.isArray(i) && (x = i.map((o) => $(o, n)), y = y || i, d ^ n && (x = x.reverse()));
  }
  if (e !== void 0) {
    if (e === !0)
      if (y) {
        let o = y.length - (s ? 1 : 0);
        e = Array(o).fill(Math.max(o - 1, 1)).map(
          (A, k) => `${parseFloat((k / A).toFixed(2))}`
        );
      } else e = ["0", "1"];
    Array.isArray(e) || (e = ["0", e]), d ^ n && Array.isArray(e) && (e = e.reverse());
    let i;
    switch (y && e.length - y.length) {
      case 0:
        i = (o) => y[o], b = !1;
        break;
      case -1:
        i = (o) => (y[o] + y[o + 1]) / 2, b = !0;
        break;
      default:
        e.length > 1 ? (i = (o) => o / (e.length - 1), b = !1) : (i = () => 0.5, b = !0);
        break;
    }
    P = e.map((o, A) => [$(n ? 1 - i(A) : i(A)), o]);
  }
  return {
    stops$: B,
    ticks$: x,
    labels$: P,
    before: g,
    after: f,
    vertical: n,
    klass: `dv-sb${g ? " b" : ""}${f ? " a" : ""}${c ? " f" : ""}${n ? " v" : " h"}${b ? " c" : ""}`
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
        after: d,
        vertical: c,
        klass: g
      } = U(a);
      return p("svg", {
        class: g
      }, [
        p("defs", [
          p("line", {
            id: `tk${r}`,
            x1: 0,
            xy: 0,
            x2: c ? 1 : 0,
            y2: c ? 0 : 1
          }),
          p(
            "linearGradient",
            {
              id: `lg${r}`,
              gradientTransform: c ? "translate(-1,1) rotate(-90)" : null
            },
            e == null ? void 0 : e.map(
              (f) => p("stop", { offset: f[0], "stop-color": f[1] })
            )
          )
        ]),
        n ? p("rect", { class: "b", fill: n }) : null,
        p("rect", {
          fill: `url('#lg${r}')`,
          width: c ? null : "100%",
          height: c ? "100%" : null
        }),
        d ? p("rect", { class: "a", fill: d }) : null,
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
}, H = /* @__PURE__ */ D(z, [["__scopeId", "data-v-fada05ef"]]);
export {
  H as default
};
