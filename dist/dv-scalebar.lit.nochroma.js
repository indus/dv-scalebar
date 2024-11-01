import tt from "chroma-js";
/**
 * @license
 * https://raw.githubusercontent.com/indus/dv-scalebar/refs/heads/main/dist/dv-scalebar.lit.nochroma.licence.txt
 */
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const G = globalThis, lt = G.ShadowRoot && (G.ShadyCSS === void 0 || G.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Pt = Symbol(), ut = /* @__PURE__ */ new WeakMap();
let Ht = class {
  constructor(t, e, s) {
    if (this._$cssResult$ = !0, s !== Pt) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (lt && t === void 0) {
      const s = e !== void 0 && e.length === 1;
      s && (t = ut.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), s && ut.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const Ct = (i) => new Ht(typeof i == "string" ? i : i + "", void 0, Pt), Mt = (i, t) => {
  if (lt) i.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else for (const e of t) {
    const s = document.createElement("style"), r = G.litNonce;
    r !== void 0 && s.setAttribute("nonce", r), s.textContent = e.cssText, i.appendChild(s);
  }
}, $t = lt ? (i) => i : (i) => i instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const s of t.cssRules) e += s.cssText;
  return Ct(e);
})(i) : i;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Rt, defineProperty: Lt, getOwnPropertyDescriptor: Dt, getOwnPropertyNames: jt, getOwnPropertySymbols: It, getPrototypeOf: Yt } = Object, C = globalThis, mt = C.trustedTypes, Bt = mt ? mt.emptyScript : "", et = C.reactiveElementPolyfillSupport, D = (i, t) => i, J = { toAttribute(i, t) {
  switch (t) {
    case Boolean:
      i = i ? Bt : null;
      break;
    case Object:
    case Array:
      i = i == null ? i : JSON.stringify(i);
  }
  return i;
}, fromAttribute(i, t) {
  let e = i;
  switch (t) {
    case Boolean:
      e = i !== null;
      break;
    case Number:
      e = i === null ? null : Number(i);
      break;
    case Object:
    case Array:
      try {
        e = JSON.parse(i);
      } catch {
        e = null;
      }
  }
  return e;
} }, ct = (i, t) => !Rt(i, t), yt = { attribute: !0, type: String, converter: J, reflect: !1, hasChanged: ct };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), C.litPropertyMetadata ?? (C.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let O = class extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = yt) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.elementProperties.set(t, e), !e.noAccessor) {
      const s = Symbol(), r = this.getPropertyDescriptor(t, s, e);
      r !== void 0 && Lt(this.prototype, t, r);
    }
  }
  static getPropertyDescriptor(t, e, s) {
    const { get: r, set: o } = Dt(this.prototype, t) ?? { get() {
      return this[e];
    }, set(a) {
      this[e] = a;
    } };
    return { get() {
      return r == null ? void 0 : r.call(this);
    }, set(a) {
      const l = r == null ? void 0 : r.call(this);
      o.call(this, a), this.requestUpdate(t, l, s);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? yt;
  }
  static _$Ei() {
    if (this.hasOwnProperty(D("elementProperties"))) return;
    const t = Yt(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(D("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(D("properties"))) {
      const e = this.properties, s = [...jt(e), ...It(e)];
      for (const r of s) this.createProperty(r, e[r]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const e = litPropertyMetadata.get(t);
      if (e !== void 0) for (const [s, r] of e) this.elementProperties.set(s, r);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [e, s] of this.elementProperties) {
      const r = this._$Eu(e, s);
      r !== void 0 && this._$Eh.set(r, e);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const s = new Set(t.flat(1 / 0).reverse());
      for (const r of s) e.unshift($t(r));
    } else t !== void 0 && e.push($t(t));
    return e;
  }
  static _$Eu(t, e) {
    const s = e.attribute;
    return s === !1 ? void 0 : typeof s == "string" ? s : typeof t == "string" ? t.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    var t;
    this._$ES = new Promise((e) => this.enableUpdating = e), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), (t = this.constructor.l) == null || t.forEach((e) => e(this));
  }
  addController(t) {
    var e;
    (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(t), this.renderRoot !== void 0 && this.isConnected && ((e = t.hostConnected) == null || e.call(t));
  }
  removeController(t) {
    var e;
    (e = this._$EO) == null || e.delete(t);
  }
  _$E_() {
    const t = /* @__PURE__ */ new Map(), e = this.constructor.elementProperties;
    for (const s of e.keys()) this.hasOwnProperty(s) && (t.set(s, this[s]), delete this[s]);
    t.size > 0 && (this._$Ep = t);
  }
  createRenderRoot() {
    const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return Mt(t, this.constructor.elementStyles), t;
  }
  connectedCallback() {
    var t;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (t = this._$EO) == null || t.forEach((e) => {
      var s;
      return (s = e.hostConnected) == null ? void 0 : s.call(e);
    });
  }
  enableUpdating(t) {
  }
  disconnectedCallback() {
    var t;
    (t = this._$EO) == null || t.forEach((e) => {
      var s;
      return (s = e.hostDisconnected) == null ? void 0 : s.call(e);
    });
  }
  attributeChangedCallback(t, e, s) {
    this._$AK(t, s);
  }
  _$EC(t, e) {
    var o;
    const s = this.constructor.elementProperties.get(t), r = this.constructor._$Eu(t, s);
    if (r !== void 0 && s.reflect === !0) {
      const a = (((o = s.converter) == null ? void 0 : o.toAttribute) !== void 0 ? s.converter : J).toAttribute(e, s.type);
      this._$Em = t, a == null ? this.removeAttribute(r) : this.setAttribute(r, a), this._$Em = null;
    }
  }
  _$AK(t, e) {
    var o;
    const s = this.constructor, r = s._$Eh.get(t);
    if (r !== void 0 && this._$Em !== r) {
      const a = s.getPropertyOptions(r), l = typeof a.converter == "function" ? { fromAttribute: a.converter } : ((o = a.converter) == null ? void 0 : o.fromAttribute) !== void 0 ? a.converter : J;
      this._$Em = r, this[r] = l.fromAttribute(e, a.type), this._$Em = null;
    }
  }
  requestUpdate(t, e, s) {
    if (t !== void 0) {
      if (s ?? (s = this.constructor.getPropertyOptions(t)), !(s.hasChanged ?? ct)(this[t], e)) return;
      this.P(t, e, s);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$ET());
  }
  P(t, e, s) {
    this._$AL.has(t) || this._$AL.set(t, e), s.reflect === !0 && this._$Em !== t && (this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Set())).add(t);
  }
  async _$ET() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (e) {
      Promise.reject(e);
    }
    const t = this.scheduleUpdate();
    return t != null && await t, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var s;
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [o, a] of this._$Ep) this[o] = a;
        this._$Ep = void 0;
      }
      const r = this.constructor.elementProperties;
      if (r.size > 0) for (const [o, a] of r) a.wrapped !== !0 || this._$AL.has(o) || this[o] === void 0 || this.P(o, this[o], a);
    }
    let t = !1;
    const e = this._$AL;
    try {
      t = this.shouldUpdate(e), t ? (this.willUpdate(e), (s = this._$EO) == null || s.forEach((r) => {
        var o;
        return (o = r.hostUpdate) == null ? void 0 : o.call(r);
      }), this.update(e)) : this._$EU();
    } catch (r) {
      throw t = !1, this._$EU(), r;
    }
    t && this._$AE(e);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    var e;
    (e = this._$EO) == null || e.forEach((s) => {
      var r;
      return (r = s.hostUpdated) == null ? void 0 : r.call(s);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
  }
  _$EU() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(t) {
    return !0;
  }
  update(t) {
    this._$Ej && (this._$Ej = this._$Ej.forEach((e) => this._$EC(e, this[e]))), this._$EU();
  }
  updated(t) {
  }
  firstUpdated(t) {
  }
};
O.elementStyles = [], O.shadowRootOptions = { mode: "open" }, O[D("elementProperties")] = /* @__PURE__ */ new Map(), O[D("finalized")] = /* @__PURE__ */ new Map(), et == null || et({ ReactiveElement: O }), (C.reactiveElementVersions ?? (C.reactiveElementVersions = [])).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const j = globalThis, K = j.trustedTypes, gt = K ? K.createPolicy("lit-html", { createHTML: (i) => i }) : void 0, kt = "$lit$", P = `lit$${Math.random().toFixed(9).slice(2)}$`, Ut = "?" + P, Wt = `<${Ut}>`, T = document, Y = () => T.createComment(""), B = (i) => i === null || typeof i != "object" && typeof i != "function", ht = Array.isArray, Vt = (i) => ht(i) || typeof (i == null ? void 0 : i[Symbol.iterator]) == "function", st = `[ 	
\f\r]`, R = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, _t = /-->/g, bt = />/g, k = RegExp(`>|${st}(?:([^\\s"'>=/]+)(${st}*=${st}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), At = /'/g, xt = /"/g, Tt = /^(?:script|style|textarea|title)$/i, Ot = (i) => (t, ...e) => ({ _$litType$: i, strings: t, values: e }), qt = Ot(1), L = Ot(2), z = Symbol.for("lit-noChange"), $ = Symbol.for("lit-nothing"), Et = /* @__PURE__ */ new WeakMap(), U = T.createTreeWalker(T, 129);
function zt(i, t) {
  if (!ht(i) || !i.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return gt !== void 0 ? gt.createHTML(t) : t;
}
const Xt = (i, t) => {
  const e = i.length - 1, s = [];
  let r, o = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", a = R;
  for (let l = 0; l < e; l++) {
    const n = i[l];
    let h, d, c = -1, g = 0;
    for (; g < n.length && (a.lastIndex = g, d = a.exec(n), d !== null); ) g = a.lastIndex, a === R ? d[1] === "!--" ? a = _t : d[1] !== void 0 ? a = bt : d[2] !== void 0 ? (Tt.test(d[2]) && (r = RegExp("</" + d[2], "g")), a = k) : d[3] !== void 0 && (a = k) : a === k ? d[0] === ">" ? (a = r ?? R, c = -1) : d[1] === void 0 ? c = -2 : (c = a.lastIndex - d[2].length, h = d[1], a = d[3] === void 0 ? k : d[3] === '"' ? xt : At) : a === xt || a === At ? a = k : a === _t || a === bt ? a = R : (a = k, r = void 0);
    const _ = a === k && i[l + 1].startsWith("/>") ? " " : "";
    o += a === R ? n + Wt : c >= 0 ? (s.push(h), n.slice(0, c) + kt + n.slice(c) + P + _) : n + P + (c === -2 ? l : _);
  }
  return [zt(i, o + (i[e] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), s];
};
class W {
  constructor({ strings: t, _$litType$: e }, s) {
    let r;
    this.parts = [];
    let o = 0, a = 0;
    const l = t.length - 1, n = this.parts, [h, d] = Xt(t, e);
    if (this.el = W.createElement(h, s), U.currentNode = this.el.content, e === 2 || e === 3) {
      const c = this.el.content.firstChild;
      c.replaceWith(...c.childNodes);
    }
    for (; (r = U.nextNode()) !== null && n.length < l; ) {
      if (r.nodeType === 1) {
        if (r.hasAttributes()) for (const c of r.getAttributeNames()) if (c.endsWith(kt)) {
          const g = d[a++], _ = r.getAttribute(c).split(P), A = /([.?@])?(.*)/.exec(g);
          n.push({ type: 1, index: o, name: A[2], strings: _, ctor: A[1] === "." ? Gt : A[1] === "?" ? Jt : A[1] === "@" ? Kt : Z }), r.removeAttribute(c);
        } else c.startsWith(P) && (n.push({ type: 6, index: o }), r.removeAttribute(c));
        if (Tt.test(r.tagName)) {
          const c = r.textContent.split(P), g = c.length - 1;
          if (g > 0) {
            r.textContent = K ? K.emptyScript : "";
            for (let _ = 0; _ < g; _++) r.append(c[_], Y()), U.nextNode(), n.push({ type: 2, index: ++o });
            r.append(c[g], Y());
          }
        }
      } else if (r.nodeType === 8) if (r.data === Ut) n.push({ type: 2, index: o });
      else {
        let c = -1;
        for (; (c = r.data.indexOf(P, c + 1)) !== -1; ) n.push({ type: 7, index: o }), c += P.length - 1;
      }
      o++;
    }
  }
  static createElement(t, e) {
    const s = T.createElement("template");
    return s.innerHTML = t, s;
  }
}
function N(i, t, e = i, s) {
  var a, l;
  if (t === z) return t;
  let r = s !== void 0 ? (a = e._$Co) == null ? void 0 : a[s] : e._$Cl;
  const o = B(t) ? void 0 : t._$litDirective$;
  return (r == null ? void 0 : r.constructor) !== o && ((l = r == null ? void 0 : r._$AO) == null || l.call(r, !1), o === void 0 ? r = void 0 : (r = new o(i), r._$AT(i, e, s)), s !== void 0 ? (e._$Co ?? (e._$Co = []))[s] = r : e._$Cl = r), r !== void 0 && (t = N(i, r._$AS(i, t.values), r, s)), t;
}
class Ft {
  constructor(t, e) {
    this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = e;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t) {
    const { el: { content: e }, parts: s } = this._$AD, r = ((t == null ? void 0 : t.creationScope) ?? T).importNode(e, !0);
    U.currentNode = r;
    let o = U.nextNode(), a = 0, l = 0, n = s[0];
    for (; n !== void 0; ) {
      if (a === n.index) {
        let h;
        n.type === 2 ? h = new V(o, o.nextSibling, this, t) : n.type === 1 ? h = new n.ctor(o, n.name, n.strings, this, t) : n.type === 6 && (h = new Zt(o, this, t)), this._$AV.push(h), n = s[++l];
      }
      a !== (n == null ? void 0 : n.index) && (o = U.nextNode(), a++);
    }
    return U.currentNode = T, r;
  }
  p(t) {
    let e = 0;
    for (const s of this._$AV) s !== void 0 && (s.strings !== void 0 ? (s._$AI(t, s, e), e += s.strings.length - 2) : s._$AI(t[e])), e++;
  }
}
class V {
  get _$AU() {
    var t;
    return ((t = this._$AM) == null ? void 0 : t._$AU) ?? this._$Cv;
  }
  constructor(t, e, s, r) {
    this.type = 2, this._$AH = $, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = s, this.options = r, this._$Cv = (r == null ? void 0 : r.isConnected) ?? !0;
  }
  get parentNode() {
    let t = this._$AA.parentNode;
    const e = this._$AM;
    return e !== void 0 && (t == null ? void 0 : t.nodeType) === 11 && (t = e.parentNode), t;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t, e = this) {
    t = N(this, t, e), B(t) ? t === $ || t == null || t === "" ? (this._$AH !== $ && this._$AR(), this._$AH = $) : t !== this._$AH && t !== z && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : Vt(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== $ && B(this._$AH) ? this._$AA.nextSibling.data = t : this.T(T.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    var o;
    const { values: e, _$litType$: s } = t, r = typeof s == "number" ? this._$AC(t) : (s.el === void 0 && (s.el = W.createElement(zt(s.h, s.h[0]), this.options)), s);
    if (((o = this._$AH) == null ? void 0 : o._$AD) === r) this._$AH.p(e);
    else {
      const a = new Ft(r, this), l = a.u(this.options);
      a.p(e), this.T(l), this._$AH = a;
    }
  }
  _$AC(t) {
    let e = Et.get(t.strings);
    return e === void 0 && Et.set(t.strings, e = new W(t)), e;
  }
  k(t) {
    ht(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let s, r = 0;
    for (const o of t) r === e.length ? e.push(s = new V(this.O(Y()), this.O(Y()), this, this.options)) : s = e[r], s._$AI(o), r++;
    r < e.length && (this._$AR(s && s._$AB.nextSibling, r), e.length = r);
  }
  _$AR(t = this._$AA.nextSibling, e) {
    var s;
    for ((s = this._$AP) == null ? void 0 : s.call(this, !1, !0, e); t && t !== this._$AB; ) {
      const r = t.nextSibling;
      t.remove(), t = r;
    }
  }
  setConnected(t) {
    var e;
    this._$AM === void 0 && (this._$Cv = t, (e = this._$AP) == null || e.call(this, t));
  }
}
class Z {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, e, s, r, o) {
    this.type = 1, this._$AH = $, this._$AN = void 0, this.element = t, this.name = e, this._$AM = r, this.options = o, s.length > 2 || s[0] !== "" || s[1] !== "" ? (this._$AH = Array(s.length - 1).fill(new String()), this.strings = s) : this._$AH = $;
  }
  _$AI(t, e = this, s, r) {
    const o = this.strings;
    let a = !1;
    if (o === void 0) t = N(this, t, e, 0), a = !B(t) || t !== this._$AH && t !== z, a && (this._$AH = t);
    else {
      const l = t;
      let n, h;
      for (t = o[0], n = 0; n < o.length - 1; n++) h = N(this, l[s + n], e, n), h === z && (h = this._$AH[n]), a || (a = !B(h) || h !== this._$AH[n]), h === $ ? t = $ : t !== $ && (t += (h ?? "") + o[n + 1]), this._$AH[n] = h;
    }
    a && !r && this.j(t);
  }
  j(t) {
    t === $ ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class Gt extends Z {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === $ ? void 0 : t;
  }
}
class Jt extends Z {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== $);
  }
}
class Kt extends Z {
  constructor(t, e, s, r, o) {
    super(t, e, s, r, o), this.type = 5;
  }
  _$AI(t, e = this) {
    if ((t = N(this, t, e, 0) ?? $) === z) return;
    const s = this._$AH, r = t === $ && s !== $ || t.capture !== s.capture || t.once !== s.once || t.passive !== s.passive, o = t !== $ && (s === $ || r);
    r && this.element.removeEventListener(this.name, this, s), o && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    var e;
    typeof this._$AH == "function" ? this._$AH.call(((e = this.options) == null ? void 0 : e.host) ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class Zt {
  constructor(t, e, s) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = s;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    N(this, t);
  }
}
const rt = j.litHtmlPolyfillSupport;
rt == null || rt(W, V), (j.litHtmlVersions ?? (j.litHtmlVersions = [])).push("3.2.1");
const Qt = (i, t, e) => {
  const s = (e == null ? void 0 : e.renderBefore) ?? t;
  let r = s._$litPart$;
  if (r === void 0) {
    const o = (e == null ? void 0 : e.renderBefore) ?? null;
    s._$litPart$ = r = new V(t.insertBefore(Y(), o), o, void 0, e ?? {});
  }
  return r._$AI(i), r;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
let I = class extends O {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var e;
    const t = super.createRenderRoot();
    return (e = this.renderOptions).renderBefore ?? (e.renderBefore = t.firstChild), t;
  }
  update(t) {
    const e = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = Qt(e, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var t;
    super.connectedCallback(), (t = this._$Do) == null || t.setConnected(!0);
  }
  disconnectedCallback() {
    var t;
    super.disconnectedCallback(), (t = this._$Do) == null || t.setConnected(!1);
  }
  render() {
    return z;
  }
};
var St;
I._$litElement$ = !0, I.finalized = !0, (St = globalThis.litElementHydrateSupport) == null || St.call(globalThis, { LitElement: I });
const it = globalThis.litElementPolyfillSupport;
it == null || it({ LitElement: I });
(globalThis.litElementVersions ?? (globalThis.litElementVersions = [])).push("4.1.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const te = (i) => (t, e) => {
  e !== void 0 ? e.addInitializer(() => {
    customElements.define(i, t);
  }) : customElements.define(i, t);
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ee = { attribute: !0, type: String, converter: J, reflect: !1, hasChanged: ct }, se = (i = ee, t, e) => {
  const { kind: s, metadata: r } = e;
  let o = globalThis.litPropertyMetadata.get(r);
  if (o === void 0 && globalThis.litPropertyMetadata.set(r, o = /* @__PURE__ */ new Map()), o.set(e.name, i), s === "accessor") {
    const { name: a } = e;
    return { set(l) {
      const n = t.get.call(this);
      t.set.call(this, l), this.requestUpdate(a, n, i);
    }, init(l) {
      return l !== void 0 && this.P(a, void 0, i), l;
    } };
  }
  if (s === "setter") {
    const { name: a } = e;
    return function(l) {
      const n = this[a];
      t.call(this, l), this.requestUpdate(a, n, i);
    };
  }
  throw Error("Unsupported decorator location: " + s);
};
function y(i) {
  return (t, e) => typeof e == "object" ? se(i, t, e) : ((s, r, o) => {
    const a = r.hasOwnProperty(o);
    return r.constructor.createProperty(o, a ? { ...s, wrapped: !0 } : s), a ? Object.getOwnPropertyDescriptor(r, o) : void 0;
  })(i, t, e);
}
const wt = 42, re = [
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
], ie = [
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
], ot = (i, t = 0) => Array.isArray(i) ? i : Number.isInteger(i) ? Array(i + t).fill(i + t - 1).map(
  (e, s) => s / Math.max(e, 1)
) : (console.warn("expected prop to be 'number[]' or 'int'", i), []), nt = (i, t) => ((t ? 1 - i : i) * 100).toFixed(2) + "%", at = (i, t, e = t, s = !1) => [nt(t), i(s ? 1 - e : e).hex()], E = (i, t = !1) => {
  if (i === "" || i === !0) return !0;
  if (!i) return;
  let e = typeof i == "string" || i instanceof String ? i.startsWith("[") ? JSON.parse(i) : i.split(",") : Array.isArray(i) ? [...i] : [i];
  return t && (e = e == null ? void 0 : e.map((s) => s == "" || isNaN(s) ? s : +s)), e.length > 1 ? e : e[0];
}, oe = (i) => {
  let {
    colors: t,
    labels: e,
    ticks: s,
    classes: r,
    vertical: o,
    reverse: a,
    flip: l,
    before: n,
    after: h,
    colorReverse: d,
    colorMode: c,
    colorGamma: g,
    colorCorrectLightness: _,
    colorPadding: A,
    colorClass: x,
    centeredEdgeLabels: M
  } = i;
  t = E(t), e = E(e), s = E(s, !0), r = E(r, !0), A = E(A, !0), o = E(o), a = E(a), l = E(l), d = E(d), _ = E(_), e === !0 && (Array.isArray(s) ? e = [...s] : Array.isArray(r) && (e = [...r])), a ^ o && (Array.isArray(s) && (s = s.reverse().map((f) => 1 - f)), Array.isArray(r) && (r = r.reverse().map((f) => 1 - f)));
  let b = null, Q = null, q = null, pt = null;
  r === !0 && (s ? r = Array.isArray(s) ? s : s - 1 : Array.isArray(e) ? r = e == null ? void 0 : e.length : Array.isArray(t) && (r = t == null ? void 0 : t.length));
  let p;
  if (t === !0 ? p = tt.scale(re).domain(ie) : t === void 0 ? t = ["#fff", "#000"] : Array.isArray(t) || (t = tt.brewer[t] || ["#fff", t]), t !== !0 && a ^ o && (t = [...t].reverse()), p = p || tt.scale(t), c && (p = p.mode(c)), g && (p = p.gamma(g)), _ && (p = p.correctLightness()), A && (p = p.padding(A)), r)
    switch (x) {
      case "average":
        p = p.domain([0, 1]);
        break;
      case "equal":
        Array.isArray(r) || (r = ot(r, 1)), p = p.classes([0, ...r, 1]);
        break;
      default:
        p = p.classes(r);
        break;
    }
  if (n === "" && (n = p(o ? 1 : 0).hex()), h === "" && (h = p(o ? 0 : 1).hex()), !r || Number(r) <= 1)
    Q = Array(wt).fill(wt - 1).map((f, v) => at(p, v / f, v / f, d));
  else {
    let f = ot(r, 1);
    if (Array.isArray(f)) {
      let v = f.length - 1;
      Q = f.reduce((S, X, F, Nt) => {
        let ft = Nt[F + 1], vt = (X + ft) / 2;
        return F < v && F && S.push(at(p, X, vt, d)), F < v - 1 && S.push(at(p, ft, vt, d)), S;
      }, []), b = f;
    }
  }
  if (s !== void 0) {
    s === !0 && (Array.isArray(b) ? s = b : Array.isArray(e) ? s = e.length : s = 2);
    let f = ot(s);
    Array.isArray(f) && (q = f.map((v) => nt(v, o)), b = b || f, a ^ o && (q = q.reverse()));
  }
  if (e !== void 0) {
    if (e === !0)
      if (b) {
        let v = b.length - (r ? 1 : 0);
        e = Array(v).fill(Math.max(v - 1, 1)).map(
          (S, X) => `${parseFloat((X / S).toFixed(2))}`
        );
      } else e = ["0", "1"];
    Array.isArray(e) || (e = ["0", e]), a ^ o && Array.isArray(e) && (e = e.reverse());
    let f;
    switch (b && e.length - b.length) {
      case 0:
        f = (v) => b[v], M = !1;
        break;
      case -1:
        f = (v) => (b[v] + b[v + 1]) / 2, M = !0;
        break;
      default:
        e.length > 1 ? (f = (v) => v / (e.length - 1), M = !1) : (f = () => 0.5, M = !0);
        break;
    }
    pt = e.map((v, S) => [nt(o ? 1 - f(S) : f(S)), v]);
  }
  return {
    stops$: Q,
    ticks$: q,
    labels$: pt,
    before: n,
    after: h,
    vertical: o,
    klass: `dv-sb${n ? " b" : ""}${h ? " a" : ""}${l ? " f" : ""}${o ? " v" : " h"}${M ? " c" : ""}`
  };
}, ae = ".dv-sb{--s: var(--scalebar-size, 14);--f: var(--label-font, calc(var(--bz) * .9) monospace);--f0: var(--label-font0, var(--f));--f1: var(--label-font1, var(--f0));--sz: var(--container-size, calc(var(--s) * 2px));--bz: var(--bar-size, calc(var(--sz) / 2));--bo: var(--bar-offset);--tc: var(--tick-color, currentColor);--tc0: var(--tick-color0, var(--tc));--tc1: var(--tick-color1, var(--tc0));--tw: var(--tick-width, 2px);--tw0: var(--tick-width0, var(--tw));--tw1: var(--tick-width1, var(--tw0));--ts: var(--tick-size, var(--s));--ts0: var(--tick-size0, calc(var(--ts) * 1.7));--ts1: var(--tick-size1, var(--ts0));--to: var(--tick-offset, 0px);--to0: var(--tick-offset0, var(--to));--to1: var(--tick-offset1, var(--to0));--tb: var(--tick-blend, normal);--tb0: var(--tick-blend0, var(--tb));--tb1: var(--tick-blend1, var(--tb0));--lc: var(--label-color, currentColor);--lc0: var(--label-color0, var(--lc));--lc1: var(--label-color1, var(--lc0));--lo: var(--label-offset, var(--bz));--lo0: var(--label-offset0, var(--lo));--lo1: var(--label-offset1, var(--lo0));--li: var(--label-indent, 0px);--li0: var(--label-indent0, var(--li));--li1: var(--label-indent1, calc(var(--li0) * -1));--lb: var(--label-blend, normal);--lb0: var(--label-blend0, var(--lb));--lb1: var(--label-blend1, var(--lb0));--_: calc(var(--sz) - var(--bz));--_to: calc((var(--to)*-1) + (var(--sz) - var(--ts)*1px));--_to0: calc((var(--to0)*-1) + (var(--sz) - var(--ts0)*1px));--_to1: calc((var(--to1)*-1) + (var(--_to0)))}svg{display:block;overflow:visible;width:100%;height:var(--sz)}svg rect{width:100%;height:var(--bz);transform:translateY(var(--bo))}svg rect.b{transform:translate(calc(var(--bz)*-1))}svg.f rect{transform:translateY(var(--bo, var(--_)))}svg.v{width:var(--sz);height:100%}svg.v rect{width:var(--bz);height:100%;transform:translate(var(--bo))}svg.v rect.b{transform:translateY(calc(var(--bz)*-1))}svg.f.v rect{transform:translate(var(--bo, var(--_)))}svg rect.b,svg rect.a{height:var(--bz);width:var(--bz)}svg use{stroke:var(--tc);stroke-width:var(--tw);mix-blend-mode:var(--tb);transform:translateY(var(--to)) scaleY(var(--ts))}svg use:first-of-type{stroke:var(--tc0);stroke-width:var(--tw0);mix-blend-mode:var(--tb0)}svg use:last-of-type{stroke:var(--tc1);stroke-width:var(--tw1);mix-blend-mode:var(--tb1)}svg use:last-of-type{transform:translateY(var(--to1)) scaleY(var(--ts1))}svg use:first-of-type{transform:translateY(var(--to0)) scaleY(var(--ts0))}svg.f use{transform:translateY(var(--_to)) scaleY(var(--ts))}svg.f use:last-of-type{transform:translateY(var(--_to1)) scaleY(var(--ts1))}svg.f use:first-of-type{transform:translateY(var(--_to0)) scaleY(var(--ts0))}svg.v use{transform:translate(var(--to)) scaleX(var(--ts))}svg.v use:last-of-type{transform:translate(var(--to1)) scaleX(var(--ts1))}svg.v use:first-of-type{transform:translate(var(--to0)) scaleX(var(--ts0))}svg.v.f use{transform:translate(var(--_to)) scaleX(var(--ts))}svg.v.f use:last-of-type{transform:translate(var(--_to1)) scaleX(var(--ts1))}svg.v.f use:first-of-type{transform:translate(var(--_to0)) scaleX(var(--ts0))}svg text{font:var(--f);fill:var(--lc);mix-blend-mode:var(--lb)}svg text:last-of-type{font:var(--f1);fill:var(--lc1);mix-blend-mode:var(--lb1)}svg text:first-of-type{font:var(--f0);fill:var(--lc0);mix-blend-mode:var(--lb0)}svg.h text{text-anchor:middle;dominant-baseline:text-before-edge;transform:translate(var(--li),var(--lo))}svg.h text:last-of-type{transform:translate(calc(var(--li1) - .3em),var(--lo1))}svg.h text:first-of-type{transform:translate(calc(var(--li0) + .3em),var(--lo0))}svg.h:not(.c) text:last-of-type{text-anchor:end}svg.h:not(.c) text:first-of-type{text-anchor:start}svg.h.f text{dominant-baseline:text-after-edge}svg.v text{text-anchor:start;dominant-baseline:central;transform:translate(calc(var(--lo) + .3em),var(--li))}svg.v text:last-of-type{transform:translate(calc(var(--lo) + .3em),calc(-1*var(--li1)))}svg.v text:first-of-type{transform:translate(calc(var(--lo) + .3em),calc(-1*var(--li0)))}svg.v:not(.c) text:last-of-type{dominant-baseline:text-before-edge}svg.v:not(.c) text:first-of-type{dominant-baseline:text-after-edge}svg.v:not(.c).f text:last-of-type{transform:translate(calc(var(--lo) - .3em),calc(-1*var(--li1)))}svg.v:not(.c).f text:first-of-type{transform:translate(calc(var(--lo) - .3em),calc(-1*var(--li0)))}svg.v.f text{text-anchor:end;transform:translate(calc(var(--lo) - .3em),var(--li))}";
var ne = Object.defineProperty, le = Object.getOwnPropertyDescriptor, m = (i, t, e, s) => {
  for (var r = s > 1 ? void 0 : s ? le(t, e) : t, o = i.length - 1, a; o >= 0; o--)
    (a = i[o]) && (r = (s ? a(t, e, r) : a(r)) || r);
  return s && r && ne(t, e, r), r;
};
const dt = { attribute: !0, reflect: !0 }, H = { type: Boolean, ...dt }, w = { type: String, ...dt }, ce = { type: Number, ...dt };
let u = class extends I {
  render() {
    let {
      stops$: i,
      ticks$: t,
      labels$: e,
      before: s,
      after: r,
      vertical: o,
      klass: a
    } = oe(this), l = o ? 1 : 0, n = o ? 0 : 1, h = o ? "translate(-1,1) rotate(-90)" : "", d = o ? "100%" : 0, c = o ? 0 : "100%", g = i == null ? void 0 : i.map(
      (x) => L`<stop offset="${x[0]}" stop-color="${x[1]}"/>`
    ), _ = t == null ? void 0 : t.map(
      (x) => L`<use href="#tk" x="${o ? 0 : x}" y="${o ? x : 0}"/>`
    ), A = e == null ? void 0 : e.map(
      (x) => L`<text x="${o ? null : x[0]}" y="${o ? x[0] : null}">${x[1]}</text>`
    );
    return qt`<svg class="${a}">
<defs>
  <line id="tk" x1="0" y1="0" x2="${l}" y2="${n}"/>
  <linearGradient id="lg" gradientTransform="${h}">
  ${g}
  </linearGradient>
</defs>
${s ? L`<rect class="b" fill="${s}" />` : null}
<rect fill="url('#lg')" width="${d}" height="${c}" />
${r ? L`<rect class="a" fill="${r}" y="${d}" x="${c}"/>` : null}
${_}
${A}
</svg>
    `;
  }
};
u.styles = Ct(`
  :host {
    display: block;
  }
  :host([hidden]) {
    display: none;
  }

  ${ae}`);
m([
  y(w)
], u.prototype, "colors", 2);
m([
  y(w)
], u.prototype, "labels", 2);
m([
  y(w)
], u.prototype, "ticks", 2);
m([
  y(w)
], u.prototype, "classes", 2);
m([
  y(H)
], u.prototype, "vertical", 2);
m([
  y(H)
], u.prototype, "reverse", 2);
m([
  y(H)
], u.prototype, "flip", 2);
m([
  y(w)
], u.prototype, "before", 2);
m([
  y(w)
], u.prototype, "after", 2);
m([
  y(H)
], u.prototype, "colorReverse", 2);
m([
  y(w)
], u.prototype, "colorMode", 2);
m([
  y(ce)
], u.prototype, "colorGamma", 2);
m([
  y(H)
], u.prototype, "colorCorrectLightness", 2);
m([
  y(w)
], u.prototype, "colorPadding", 2);
m([
  y(w)
], u.prototype, "colorClass", 2);
m([
  y(H)
], u.prototype, "centeredEdgeLabels", 2);
u = m([
  te("dv-scalebar")
], u);
export {
  u as DVscalebar
};
