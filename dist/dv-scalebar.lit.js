/**
 * @license
 * https://github.com/indus/dist/blob/main/dv-scalebar.lit.licence.txt
 */
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Yt = globalThis, pe = Yt.ShadowRoot && (Yt.ShadyCSS === void 0 || Yt.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, tr = Symbol(), Ce = /* @__PURE__ */ new WeakMap();
let Hr = class {
  constructor(t, r, n) {
    if (this._$cssResult$ = !0, n !== tr) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = r;
  }
  get styleSheet() {
    let t = this.o;
    const r = this.t;
    if (pe && t === void 0) {
      const n = r !== void 0 && r.length === 1;
      n && (t = Ce.get(r)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), n && Ce.set(r, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const er = (e) => new Hr(typeof e == "string" ? e : e + "", void 0, tr), Br = (e, t) => {
  if (pe) e.adoptedStyleSheets = t.map((r) => r instanceof CSSStyleSheet ? r : r.styleSheet);
  else for (const r of t) {
    const n = document.createElement("style"), s = Yt.litNonce;
    s !== void 0 && n.setAttribute("nonce", s), n.textContent = r.cssText, e.appendChild(n);
  }
}, Pe = pe ? (e) => e : (e) => e instanceof CSSStyleSheet ? ((t) => {
  let r = "";
  for (const n of t.cssRules) r += n.cssText;
  return er(r);
})(e) : e;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Gr, defineProperty: Xr, getOwnPropertyDescriptor: Ir, getOwnPropertyNames: qr, getOwnPropertySymbols: Dr, getPrototypeOf: Zr } = Object, rt = globalThis, Ne = rt.trustedTypes, Wr = Ne ? Ne.emptyScript : "", Kt = rt.reactiveElementPolyfillSupport, xt = (e, t) => e, Ht = { toAttribute(e, t) {
  switch (t) {
    case Boolean:
      e = e ? Wr : null;
      break;
    case Object:
    case Array:
      e = e == null ? e : JSON.stringify(e);
  }
  return e;
}, fromAttribute(e, t) {
  let r = e;
  switch (t) {
    case Boolean:
      r = e !== null;
      break;
    case Number:
      r = e === null ? null : Number(e);
      break;
    case Object:
    case Array:
      try {
        r = JSON.parse(e);
      } catch {
        r = null;
      }
  }
  return r;
} }, me = (e, t) => !Gr(e, t), Re = { attribute: !0, type: String, converter: Ht, reflect: !1, hasChanged: me };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), rt.litPropertyMetadata ?? (rt.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let ut = class extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, r = Re) {
    if (r.state && (r.attribute = !1), this._$Ei(), this.elementProperties.set(t, r), !r.noAccessor) {
      const n = Symbol(), s = this.getPropertyDescriptor(t, n, r);
      s !== void 0 && Xr(this.prototype, t, s);
    }
  }
  static getPropertyDescriptor(t, r, n) {
    const { get: s, set: o } = Ir(this.prototype, t) ?? { get() {
      return this[r];
    }, set(a) {
      this[r] = a;
    } };
    return { get() {
      return s == null ? void 0 : s.call(this);
    }, set(a) {
      const i = s == null ? void 0 : s.call(this);
      o.call(this, a), this.requestUpdate(t, i, n);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? Re;
  }
  static _$Ei() {
    if (this.hasOwnProperty(xt("elementProperties"))) return;
    const t = Zr(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(xt("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(xt("properties"))) {
      const r = this.properties, n = [...qr(r), ...Dr(r)];
      for (const s of n) this.createProperty(s, r[s]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const r = litPropertyMetadata.get(t);
      if (r !== void 0) for (const [n, s] of r) this.elementProperties.set(n, s);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [r, n] of this.elementProperties) {
      const s = this._$Eu(r, n);
      s !== void 0 && this._$Eh.set(s, r);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const r = [];
    if (Array.isArray(t)) {
      const n = new Set(t.flat(1 / 0).reverse());
      for (const s of n) r.unshift(Pe(s));
    } else t !== void 0 && r.push(Pe(t));
    return r;
  }
  static _$Eu(t, r) {
    const n = r.attribute;
    return n === !1 ? void 0 : typeof n == "string" ? n : typeof t == "string" ? t.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    var t;
    this._$ES = new Promise((r) => this.enableUpdating = r), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), (t = this.constructor.l) == null || t.forEach((r) => r(this));
  }
  addController(t) {
    var r;
    (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(t), this.renderRoot !== void 0 && this.isConnected && ((r = t.hostConnected) == null || r.call(t));
  }
  removeController(t) {
    var r;
    (r = this._$EO) == null || r.delete(t);
  }
  _$E_() {
    const t = /* @__PURE__ */ new Map(), r = this.constructor.elementProperties;
    for (const n of r.keys()) this.hasOwnProperty(n) && (t.set(n, this[n]), delete this[n]);
    t.size > 0 && (this._$Ep = t);
  }
  createRenderRoot() {
    const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return Br(t, this.constructor.elementStyles), t;
  }
  connectedCallback() {
    var t;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (t = this._$EO) == null || t.forEach((r) => {
      var n;
      return (n = r.hostConnected) == null ? void 0 : n.call(r);
    });
  }
  enableUpdating(t) {
  }
  disconnectedCallback() {
    var t;
    (t = this._$EO) == null || t.forEach((r) => {
      var n;
      return (n = r.hostDisconnected) == null ? void 0 : n.call(r);
    });
  }
  attributeChangedCallback(t, r, n) {
    this._$AK(t, n);
  }
  _$EC(t, r) {
    var o;
    const n = this.constructor.elementProperties.get(t), s = this.constructor._$Eu(t, n);
    if (s !== void 0 && n.reflect === !0) {
      const a = (((o = n.converter) == null ? void 0 : o.toAttribute) !== void 0 ? n.converter : Ht).toAttribute(r, n.type);
      this._$Em = t, a == null ? this.removeAttribute(s) : this.setAttribute(s, a), this._$Em = null;
    }
  }
  _$AK(t, r) {
    var o;
    const n = this.constructor, s = n._$Eh.get(t);
    if (s !== void 0 && this._$Em !== s) {
      const a = n.getPropertyOptions(s), i = typeof a.converter == "function" ? { fromAttribute: a.converter } : ((o = a.converter) == null ? void 0 : o.fromAttribute) !== void 0 ? a.converter : Ht;
      this._$Em = s, this[s] = i.fromAttribute(r, a.type), this._$Em = null;
    }
  }
  requestUpdate(t, r, n) {
    if (t !== void 0) {
      if (n ?? (n = this.constructor.getPropertyOptions(t)), !(n.hasChanged ?? me)(this[t], r)) return;
      this.P(t, r, n);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$ET());
  }
  P(t, r, n) {
    this._$AL.has(t) || this._$AL.set(t, r), n.reflect === !0 && this._$Em !== t && (this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Set())).add(t);
  }
  async _$ET() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (r) {
      Promise.reject(r);
    }
    const t = this.scheduleUpdate();
    return t != null && await t, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var n;
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [o, a] of this._$Ep) this[o] = a;
        this._$Ep = void 0;
      }
      const s = this.constructor.elementProperties;
      if (s.size > 0) for (const [o, a] of s) a.wrapped !== !0 || this._$AL.has(o) || this[o] === void 0 || this.P(o, this[o], a);
    }
    let t = !1;
    const r = this._$AL;
    try {
      t = this.shouldUpdate(r), t ? (this.willUpdate(r), (n = this._$EO) == null || n.forEach((s) => {
        var o;
        return (o = s.hostUpdate) == null ? void 0 : o.call(s);
      }), this.update(r)) : this._$EU();
    } catch (s) {
      throw t = !1, this._$EU(), s;
    }
    t && this._$AE(r);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    var r;
    (r = this._$EO) == null || r.forEach((n) => {
      var s;
      return (s = n.hostUpdated) == null ? void 0 : s.call(n);
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
    this._$Ej && (this._$Ej = this._$Ej.forEach((r) => this._$EC(r, this[r]))), this._$EU();
  }
  updated(t) {
  }
  firstUpdated(t) {
  }
};
ut.elementStyles = [], ut.shadowRootOptions = { mode: "open" }, ut[xt("elementProperties")] = /* @__PURE__ */ new Map(), ut[xt("finalized")] = /* @__PURE__ */ new Map(), Kt == null || Kt({ ReactiveElement: ut }), (rt.reactiveElementVersions ?? (rt.reactiveElementVersions = [])).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Et = globalThis, Bt = Et.trustedTypes, Le = Bt ? Bt.createPolicy("lit-html", { createHTML: (e) => e }) : void 0, rr = "$lit$", et = `lit$${Math.random().toFixed(9).slice(2)}$`, nr = "?" + et, Kr = `<${nr}>`, ct = document, St = () => ct.createComment(""), Ct = (e) => e === null || typeof e != "object" && typeof e != "function", ge = Array.isArray, Vr = (e) => ge(e) || typeof (e == null ? void 0 : e[Symbol.iterator]) == "function", Vt = `[ 	
\f\r]`, At = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Oe = /-->/g, ze = />/g, ot = RegExp(`>|${Vt}(?:([^\\s"'>=/]+)(${Vt}*=${Vt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Te = /'/g, je = /"/g, sr = /^(?:script|style|textarea|title)$/i, or = (e) => (t, ...r) => ({ _$litType$: e, strings: t, values: r }), Fr = or(1), kt = or(2), dt = Symbol.for("lit-noChange"), U = Symbol.for("lit-nothing"), Ue = /* @__PURE__ */ new WeakMap(), at = ct.createTreeWalker(ct, 129);
function ar(e, t) {
  if (!ge(e) || !e.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Le !== void 0 ? Le.createHTML(t) : t;
}
const Jr = (e, t) => {
  const r = e.length - 1, n = [];
  let s, o = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", a = At;
  for (let i = 0; i < r; i++) {
    const c = e[i];
    let l, h, u = -1, b = 0;
    for (; b < c.length && (a.lastIndex = b, h = a.exec(c), h !== null); ) b = a.lastIndex, a === At ? h[1] === "!--" ? a = Oe : h[1] !== void 0 ? a = ze : h[2] !== void 0 ? (sr.test(h[2]) && (s = RegExp("</" + h[2], "g")), a = ot) : h[3] !== void 0 && (a = ot) : a === ot ? h[0] === ">" ? (a = s ?? At, u = -1) : h[1] === void 0 ? u = -2 : (u = a.lastIndex - h[2].length, l = h[1], a = h[3] === void 0 ? ot : h[3] === '"' ? je : Te) : a === je || a === Te ? a = ot : a === Oe || a === ze ? a = At : (a = ot, s = void 0);
    const m = a === ot && e[i + 1].startsWith("/>") ? " " : "";
    o += a === At ? c + Kr : u >= 0 ? (n.push(l), c.slice(0, u) + rr + c.slice(u) + et + m) : c + et + (u === -2 ? i : m);
  }
  return [ar(e, o + (e[r] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), n];
};
class Pt {
  constructor({ strings: t, _$litType$: r }, n) {
    let s;
    this.parts = [];
    let o = 0, a = 0;
    const i = t.length - 1, c = this.parts, [l, h] = Jr(t, r);
    if (this.el = Pt.createElement(l, n), at.currentNode = this.el.content, r === 2 || r === 3) {
      const u = this.el.content.firstChild;
      u.replaceWith(...u.childNodes);
    }
    for (; (s = at.nextNode()) !== null && c.length < i; ) {
      if (s.nodeType === 1) {
        if (s.hasAttributes()) for (const u of s.getAttributeNames()) if (u.endsWith(rr)) {
          const b = h[a++], m = s.getAttribute(u).split(et), y = /([.?@])?(.*)/.exec(b);
          c.push({ type: 1, index: o, name: y[2], strings: m, ctor: y[1] === "." ? tn : y[1] === "?" ? en : y[1] === "@" ? rn : qt }), s.removeAttribute(u);
        } else u.startsWith(et) && (c.push({ type: 6, index: o }), s.removeAttribute(u));
        if (sr.test(s.tagName)) {
          const u = s.textContent.split(et), b = u.length - 1;
          if (b > 0) {
            s.textContent = Bt ? Bt.emptyScript : "";
            for (let m = 0; m < b; m++) s.append(u[m], St()), at.nextNode(), c.push({ type: 2, index: ++o });
            s.append(u[b], St());
          }
        }
      } else if (s.nodeType === 8) if (s.data === nr) c.push({ type: 2, index: o });
      else {
        let u = -1;
        for (; (u = s.data.indexOf(et, u + 1)) !== -1; ) c.push({ type: 7, index: o }), u += et.length - 1;
      }
      o++;
    }
  }
  static createElement(t, r) {
    const n = ct.createElement("template");
    return n.innerHTML = t, n;
  }
}
function bt(e, t, r = e, n) {
  var a, i;
  if (t === dt) return t;
  let s = n !== void 0 ? (a = r._$Co) == null ? void 0 : a[n] : r._$Cl;
  const o = Ct(t) ? void 0 : t._$litDirective$;
  return (s == null ? void 0 : s.constructor) !== o && ((i = s == null ? void 0 : s._$AO) == null || i.call(s, !1), o === void 0 ? s = void 0 : (s = new o(e), s._$AT(e, r, n)), n !== void 0 ? (r._$Co ?? (r._$Co = []))[n] = s : r._$Cl = s), s !== void 0 && (t = bt(e, s._$AS(e, t.values), s, n)), t;
}
class Qr {
  constructor(t, r) {
    this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = r;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t) {
    const { el: { content: r }, parts: n } = this._$AD, s = ((t == null ? void 0 : t.creationScope) ?? ct).importNode(r, !0);
    at.currentNode = s;
    let o = at.nextNode(), a = 0, i = 0, c = n[0];
    for (; c !== void 0; ) {
      if (a === c.index) {
        let l;
        c.type === 2 ? l = new Rt(o, o.nextSibling, this, t) : c.type === 1 ? l = new c.ctor(o, c.name, c.strings, this, t) : c.type === 6 && (l = new nn(o, this, t)), this._$AV.push(l), c = n[++i];
      }
      a !== (c == null ? void 0 : c.index) && (o = at.nextNode(), a++);
    }
    return at.currentNode = ct, s;
  }
  p(t) {
    let r = 0;
    for (const n of this._$AV) n !== void 0 && (n.strings !== void 0 ? (n._$AI(t, n, r), r += n.strings.length - 2) : n._$AI(t[r])), r++;
  }
}
class Rt {
  get _$AU() {
    var t;
    return ((t = this._$AM) == null ? void 0 : t._$AU) ?? this._$Cv;
  }
  constructor(t, r, n, s) {
    this.type = 2, this._$AH = U, this._$AN = void 0, this._$AA = t, this._$AB = r, this._$AM = n, this.options = s, this._$Cv = (s == null ? void 0 : s.isConnected) ?? !0;
  }
  get parentNode() {
    let t = this._$AA.parentNode;
    const r = this._$AM;
    return r !== void 0 && (t == null ? void 0 : t.nodeType) === 11 && (t = r.parentNode), t;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t, r = this) {
    t = bt(this, t, r), Ct(t) ? t === U || t == null || t === "" ? (this._$AH !== U && this._$AR(), this._$AH = U) : t !== this._$AH && t !== dt && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : Vr(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== U && Ct(this._$AH) ? this._$AA.nextSibling.data = t : this.T(ct.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    var o;
    const { values: r, _$litType$: n } = t, s = typeof n == "number" ? this._$AC(t) : (n.el === void 0 && (n.el = Pt.createElement(ar(n.h, n.h[0]), this.options)), n);
    if (((o = this._$AH) == null ? void 0 : o._$AD) === s) this._$AH.p(r);
    else {
      const a = new Qr(s, this), i = a.u(this.options);
      a.p(r), this.T(i), this._$AH = a;
    }
  }
  _$AC(t) {
    let r = Ue.get(t.strings);
    return r === void 0 && Ue.set(t.strings, r = new Pt(t)), r;
  }
  k(t) {
    ge(this._$AH) || (this._$AH = [], this._$AR());
    const r = this._$AH;
    let n, s = 0;
    for (const o of t) s === r.length ? r.push(n = new Rt(this.O(St()), this.O(St()), this, this.options)) : n = r[s], n._$AI(o), s++;
    s < r.length && (this._$AR(n && n._$AB.nextSibling, s), r.length = s);
  }
  _$AR(t = this._$AA.nextSibling, r) {
    var n;
    for ((n = this._$AP) == null ? void 0 : n.call(this, !1, !0, r); t && t !== this._$AB; ) {
      const s = t.nextSibling;
      t.remove(), t = s;
    }
  }
  setConnected(t) {
    var r;
    this._$AM === void 0 && (this._$Cv = t, (r = this._$AP) == null || r.call(this, t));
  }
}
class qt {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, r, n, s, o) {
    this.type = 1, this._$AH = U, this._$AN = void 0, this.element = t, this.name = r, this._$AM = s, this.options = o, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(new String()), this.strings = n) : this._$AH = U;
  }
  _$AI(t, r = this, n, s) {
    const o = this.strings;
    let a = !1;
    if (o === void 0) t = bt(this, t, r, 0), a = !Ct(t) || t !== this._$AH && t !== dt, a && (this._$AH = t);
    else {
      const i = t;
      let c, l;
      for (t = o[0], c = 0; c < o.length - 1; c++) l = bt(this, i[n + c], r, c), l === dt && (l = this._$AH[c]), a || (a = !Ct(l) || l !== this._$AH[c]), l === U ? t = U : t !== U && (t += (l ?? "") + o[c + 1]), this._$AH[c] = l;
    }
    a && !s && this.j(t);
  }
  j(t) {
    t === U ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class tn extends qt {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === U ? void 0 : t;
  }
}
class en extends qt {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== U);
  }
}
class rn extends qt {
  constructor(t, r, n, s, o) {
    super(t, r, n, s, o), this.type = 5;
  }
  _$AI(t, r = this) {
    if ((t = bt(this, t, r, 0) ?? U) === dt) return;
    const n = this._$AH, s = t === U && n !== U || t.capture !== n.capture || t.once !== n.once || t.passive !== n.passive, o = t !== U && (n === U || s);
    s && this.element.removeEventListener(this.name, this, n), o && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    var r;
    typeof this._$AH == "function" ? this._$AH.call(((r = this.options) == null ? void 0 : r.host) ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class nn {
  constructor(t, r, n) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = r, this.options = n;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    bt(this, t);
  }
}
const Ft = Et.litHtmlPolyfillSupport;
Ft == null || Ft(Pt, Rt), (Et.litHtmlVersions ?? (Et.litHtmlVersions = [])).push("3.2.1");
const sn = (e, t, r) => {
  const n = (r == null ? void 0 : r.renderBefore) ?? t;
  let s = n._$litPart$;
  if (s === void 0) {
    const o = (r == null ? void 0 : r.renderBefore) ?? null;
    n._$litPart$ = s = new Rt(t.insertBefore(St(), o), o, void 0, r ?? {});
  }
  return s._$AI(e), s;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
let Mt = class extends ut {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var r;
    const t = super.createRenderRoot();
    return (r = this.renderOptions).renderBefore ?? (r.renderBefore = t.firstChild), t;
  }
  update(t) {
    const r = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = sn(r, this.renderRoot, this.renderOptions);
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
    return dt;
  }
};
var Qe;
Mt._$litElement$ = !0, Mt.finalized = !0, (Qe = globalThis.litElementHydrateSupport) == null || Qe.call(globalThis, { LitElement: Mt });
const Jt = globalThis.litElementPolyfillSupport;
Jt == null || Jt({ LitElement: Mt });
(globalThis.litElementVersions ?? (globalThis.litElementVersions = [])).push("4.1.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const on = (e) => (t, r) => {
  r !== void 0 ? r.addInitializer(() => {
    customElements.define(e, t);
  }) : customElements.define(e, t);
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const an = { attribute: !0, type: String, converter: Ht, reflect: !1, hasChanged: me }, cn = (e = an, t, r) => {
  const { kind: n, metadata: s } = r;
  let o = globalThis.litPropertyMetadata.get(s);
  if (o === void 0 && globalThis.litPropertyMetadata.set(s, o = /* @__PURE__ */ new Map()), o.set(r.name, e), n === "accessor") {
    const { name: a } = r;
    return { set(i) {
      const c = t.get.call(this);
      t.set.call(this, i), this.requestUpdate(a, c, e);
    }, init(i) {
      return i !== void 0 && this.P(a, void 0, e), i;
    } };
  }
  if (n === "setter") {
    const { name: a } = r;
    return function(i) {
      const c = this[a];
      t.call(this, i), this.requestUpdate(a, c, e);
    };
  }
  throw Error("Unsupported decorator location: " + n);
};
function B(e) {
  return (t, r) => typeof r == "object" ? cn(e, t, r) : ((n, s, o) => {
    const a = s.hasOwnProperty(o);
    return s.constructor.createProperty(o, a ? { ...n, wrapped: !0 } : n), a ? Object.getOwnPropertyDescriptor(s, o) : void 0;
  })(e, t, r);
}
const { min: ln, max: fn } = Math, it = (e, t = 0, r = 1) => ln(fn(t, e), r), ye = (e) => {
  e._clipped = !1, e._unclipped = e.slice(0);
  for (let t = 0; t <= 3; t++)
    t < 3 ? ((e[t] < 0 || e[t] > 255) && (e._clipped = !0), e[t] = it(e[t], 0, 255)) : t === 3 && (e[t] = it(e[t], 0, 1));
  return e;
}, ir = {};
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
  ir[`[object ${e}]`] = e.toLowerCase();
function P(e) {
  return ir[Object.prototype.toString.call(e)] || "object";
}
const k = (e, t = null) => e.length >= 3 ? Array.prototype.slice.call(e) : P(e[0]) == "object" && t ? t.split("").filter((r) => e[0][r] !== void 0).map((r) => e[0][r]) : e[0].slice(0), gt = (e) => {
  if (e.length < 2) return null;
  const t = e.length - 1;
  return P(e[t]) == "string" ? e[t].toLowerCase() : null;
}, { PI: Dt, min: cr, max: lr } = Math, X = (e) => Math.round(e * 100) / 100, he = (e) => Math.round(e * 100) / 100, F = Dt * 2, Qt = Dt / 3, hn = Dt / 180, un = 180 / Dt;
function fr(e) {
  return [...e.slice(0, 3).reverse(), ...e.slice(3)];
}
const w = {
  format: {},
  autodetect: []
};
class d {
  constructor(...t) {
    const r = this;
    if (P(t[0]) === "object" && t[0].constructor && t[0].constructor === this.constructor)
      return t[0];
    let n = gt(t), s = !1;
    if (!n) {
      s = !0, w.sorted || (w.autodetect = w.autodetect.sort((o, a) => a.p - o.p), w.sorted = !0);
      for (let o of w.autodetect)
        if (n = o.test(...t), n) break;
    }
    if (w.format[n]) {
      const o = w.format[n].apply(
        null,
        s ? t : t.slice(0, -1)
      );
      r._rgb = ye(o);
    } else
      throw new Error("unknown format: " + t);
    r._rgb.length === 3 && r._rgb.push(1);
  }
  toString() {
    return P(this.hex) == "function" ? this.hex() : `[${this._rgb.join(",")}]`;
  }
}
const dn = "3.1.2", C = (...e) => new d(...e);
C.version = dn;
const pt = {
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
}, bn = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/, pn = /^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/, hr = (e) => {
  if (e.match(bn)) {
    (e.length === 4 || e.length === 7) && (e = e.substr(1)), e.length === 3 && (e = e.split(""), e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]);
    const t = parseInt(e, 16), r = t >> 16, n = t >> 8 & 255, s = t & 255;
    return [r, n, s, 1];
  }
  if (e.match(pn)) {
    (e.length === 5 || e.length === 9) && (e = e.substr(1)), e.length === 4 && (e = e.split(""), e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2] + e[3] + e[3]);
    const t = parseInt(e, 16), r = t >> 24 & 255, n = t >> 16 & 255, s = t >> 8 & 255, o = Math.round((t & 255) / 255 * 100) / 100;
    return [r, n, s, o];
  }
  throw new Error(`unknown hex color: ${e}`);
}, { round: zt } = Math, ur = (...e) => {
  let [t, r, n, s] = k(e, "rgba"), o = gt(e) || "auto";
  s === void 0 && (s = 1), o === "auto" && (o = s < 1 ? "rgba" : "rgb"), t = zt(t), r = zt(r), n = zt(n);
  let i = "000000" + (t << 16 | r << 8 | n).toString(16);
  i = i.substr(i.length - 6);
  let c = "0" + zt(s * 255).toString(16);
  switch (c = c.substr(c.length - 2), o.toLowerCase()) {
    case "rgba":
      return `#${i}${c}`;
    case "argb":
      return `#${c}${i}`;
    default:
      return `#${i}`;
  }
};
d.prototype.name = function() {
  const e = ur(this._rgb, "rgb");
  for (let t of Object.keys(pt))
    if (pt[t] === e) return t.toLowerCase();
  return e;
};
w.format.named = (e) => {
  if (e = e.toLowerCase(), pt[e]) return hr(pt[e]);
  throw new Error("unknown color name: " + e);
};
w.autodetect.push({
  p: 5,
  test: (e, ...t) => {
    if (!t.length && P(e) === "string" && pt[e.toLowerCase()])
      return "named";
  }
});
d.prototype.alpha = function(e, t = !1) {
  return e !== void 0 && P(e) === "number" ? t ? (this._rgb[3] = e, this) : new d([this._rgb[0], this._rgb[1], this._rgb[2], e], "rgb") : this._rgb[3];
};
d.prototype.clipped = function() {
  return this._rgb._clipped || !1;
};
const K = {
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
}, mn = /* @__PURE__ */ new Map([
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
function J(e) {
  const t = mn.get(String(e).toLowerCase());
  if (!t)
    throw new Error("unknown Lab illuminant " + e);
  K.labWhitePoint = e, K.Xn = t[0], K.Zn = t[1];
}
function Nt() {
  return K.labWhitePoint;
}
const ve = (...e) => {
  e = k(e, "lab");
  const [t, r, n] = e, [s, o, a] = gn(t, r, n), [i, c, l] = dr(s, o, a);
  return [i, c, l, e.length > 3 ? e[3] : 1];
}, gn = (e, t, r) => {
  const { kE: n, kK: s, kKE: o, Xn: a, Yn: i, Zn: c } = K, l = (e + 16) / 116, h = 2e-3 * t + l, u = l - 5e-3 * r, b = h * h * h, m = u * u * u, y = b > n ? b : (116 * h - 16) / s, A = e > o ? Math.pow((e + 16) / 116, 3) : e / s, v = m > n ? m : (116 * u - 16) / s, g = y * a, O = A * i, L = v * c;
  return [g, O, L];
}, te = (e) => {
  const t = Math.sign(e);
  return e = Math.abs(e), (e <= 31308e-7 ? e * 12.92 : 1.055 * Math.pow(e, 1 / 2.4) - 0.055) * t;
}, dr = (e, t, r) => {
  const { MtxAdaptMa: n, MtxAdaptMaI: s, MtxXYZ2RGB: o, RefWhiteRGB: a, Xn: i, Yn: c, Zn: l } = K, h = i * n.m00 + c * n.m10 + l * n.m20, u = i * n.m01 + c * n.m11 + l * n.m21, b = i * n.m02 + c * n.m12 + l * n.m22, m = a.X * n.m00 + a.Y * n.m10 + a.Z * n.m20, y = a.X * n.m01 + a.Y * n.m11 + a.Z * n.m21, A = a.X * n.m02 + a.Y * n.m12 + a.Z * n.m22, v = (e * n.m00 + t * n.m10 + r * n.m20) * (m / h), g = (e * n.m01 + t * n.m11 + r * n.m21) * (y / u), O = (e * n.m02 + t * n.m12 + r * n.m22) * (A / b), L = v * s.m00 + g * s.m10 + O * s.m20, R = v * s.m01 + g * s.m11 + O * s.m21, x = v * s.m02 + g * s.m12 + O * s.m22, E = te(
    L * o.m00 + R * o.m10 + x * o.m20
  ), f = te(
    L * o.m01 + R * o.m11 + x * o.m21
  ), p = te(
    L * o.m02 + R * o.m12 + x * o.m22
  );
  return [E * 255, f * 255, p * 255];
}, _e = (...e) => {
  const [t, r, n, ...s] = k(e, "rgb"), [o, a, i] = br(t, r, n), [c, l, h] = yn(o, a, i);
  return [c, l, h, ...s.length > 0 && s[0] < 1 ? [s[0]] : []];
};
function yn(e, t, r) {
  const { Xn: n, Yn: s, Zn: o, kE: a, kK: i } = K, c = e / n, l = t / s, h = r / o, u = c > a ? Math.pow(c, 1 / 3) : (i * c + 16) / 116, b = l > a ? Math.pow(l, 1 / 3) : (i * l + 16) / 116, m = h > a ? Math.pow(h, 1 / 3) : (i * h + 16) / 116;
  return [116 * b - 16, 500 * (u - b), 200 * (b - m)];
}
function ee(e) {
  const t = Math.sign(e);
  return e = Math.abs(e), (e <= 0.04045 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4)) * t;
}
const br = (e, t, r) => {
  e = ee(e / 255), t = ee(t / 255), r = ee(r / 255);
  const { MtxRGB2XYZ: n, MtxAdaptMa: s, MtxAdaptMaI: o, Xn: a, Yn: i, Zn: c, As: l, Bs: h, Cs: u } = K;
  let b = e * n.m00 + t * n.m10 + r * n.m20, m = e * n.m01 + t * n.m11 + r * n.m21, y = e * n.m02 + t * n.m12 + r * n.m22;
  const A = a * s.m00 + i * s.m10 + c * s.m20, v = a * s.m01 + i * s.m11 + c * s.m21, g = a * s.m02 + i * s.m12 + c * s.m22;
  let O = b * s.m00 + m * s.m10 + y * s.m20, L = b * s.m01 + m * s.m11 + y * s.m21, R = b * s.m02 + m * s.m12 + y * s.m22;
  return O *= A / l, L *= v / h, R *= g / u, b = O * o.m00 + L * o.m10 + R * o.m20, m = O * o.m01 + L * o.m11 + R * o.m21, y = O * o.m02 + L * o.m12 + R * o.m22, [b, m, y];
};
d.prototype.lab = function() {
  return _e(this._rgb);
};
const vn = (...e) => new d(...e, "lab");
Object.assign(C, { lab: vn, getLabWhitePoint: Nt, setLabWhitePoint: J });
w.format.lab = ve;
w.autodetect.push({
  p: 2,
  test: (...e) => {
    if (e = k(e, "lab"), P(e) === "array" && e.length === 3)
      return "lab";
  }
});
d.prototype.darken = function(e = 1) {
  const t = this, r = t.lab();
  return r[0] -= K.Kn * e, new d(r, "lab").alpha(t.alpha(), !0);
};
d.prototype.brighten = function(e = 1) {
  return this.darken(-e);
};
d.prototype.darker = d.prototype.darken;
d.prototype.brighter = d.prototype.brighten;
d.prototype.get = function(e) {
  const [t, r] = e.split("."), n = this[t]();
  if (r) {
    const s = t.indexOf(r) - (t.substr(0, 2) === "ok" ? 2 : 0);
    if (s > -1) return n[s];
    throw new Error(`unknown channel ${r} in mode ${t}`);
  } else
    return n;
};
const { pow: _n } = Math, $n = 1e-7, wn = 20;
d.prototype.luminance = function(e, t = "rgb") {
  if (e !== void 0 && P(e) === "number") {
    if (e === 0)
      return new d([0, 0, 0, this._rgb[3]], "rgb");
    if (e === 1)
      return new d([255, 255, 255, this._rgb[3]], "rgb");
    let r = this.luminance(), n = wn;
    const s = (a, i) => {
      const c = a.interpolate(i, 0.5, t), l = c.luminance();
      return Math.abs(e - l) < $n || !n-- ? c : l > e ? s(a, c) : s(c, i);
    }, o = (r > e ? s(new d([0, 0, 0]), this) : s(this, new d([255, 255, 255]))).rgb();
    return new d([...o, this._rgb[3]]);
  }
  return An(...this._rgb.slice(0, 3));
};
const An = (e, t, r) => (e = re(e), t = re(t), r = re(r), 0.2126 * e + 0.7152 * t + 0.0722 * r), re = (e) => (e /= 255, e <= 0.03928 ? e / 12.92 : _n((e + 0.055) / 1.055, 2.4)), H = {}, mt = (e, t, r = 0.5, ...n) => {
  let s = n[0] || "lrgb";
  if (!H[s] && !n.length && (s = Object.keys(H)[0]), !H[s])
    throw new Error(`interpolation mode ${s} is not defined`);
  return P(e) !== "object" && (e = new d(e)), P(t) !== "object" && (t = new d(t)), H[s](e, t, r).alpha(
    e.alpha() + r * (t.alpha() - e.alpha())
  );
};
d.prototype.mix = d.prototype.interpolate = function(e, t = 0.5, ...r) {
  return mt(this, e, t, ...r);
};
d.prototype.premultiply = function(e = !1) {
  const t = this._rgb, r = t[3];
  return e ? (this._rgb = [t[0] * r, t[1] * r, t[2] * r, r], this) : new d([t[0] * r, t[1] * r, t[2] * r, r], "rgb");
};
const { sin: kn, cos: xn } = Math, pr = (...e) => {
  let [t, r, n] = k(e, "lch");
  return isNaN(n) && (n = 0), n = n * hn, [t, xn(n) * r, kn(n) * r];
}, $e = (...e) => {
  e = k(e, "lch");
  const [t, r, n] = e, [s, o, a] = pr(t, r, n), [i, c, l] = ve(s, o, a);
  return [i, c, l, e.length > 3 ? e[3] : 1];
}, En = (...e) => {
  const t = fr(k(e, "hcl"));
  return $e(...t);
}, { sqrt: Mn, atan2: Sn, round: Cn } = Math, mr = (...e) => {
  const [t, r, n] = k(e, "lab"), s = Mn(r * r + n * n);
  let o = (Sn(n, r) * un + 360) % 360;
  return Cn(s * 1e4) === 0 && (o = Number.NaN), [t, s, o];
}, we = (...e) => {
  const [t, r, n, ...s] = k(e, "rgb"), [o, a, i] = _e(t, r, n), [c, l, h] = mr(o, a, i);
  return [c, l, h, ...s.length > 0 && s[0] < 1 ? [s[0]] : []];
};
d.prototype.lch = function() {
  return we(this._rgb);
};
d.prototype.hcl = function() {
  return fr(we(this._rgb));
};
const Pn = (...e) => new d(...e, "lch"), Nn = (...e) => new d(...e, "hcl");
Object.assign(C, { lch: Pn, hcl: Nn });
w.format.lch = $e;
w.format.hcl = En;
["lch", "hcl"].forEach(
  (e) => w.autodetect.push({
    p: 2,
    test: (...t) => {
      if (t = k(t, e), P(t) === "array" && t.length === 3)
        return e;
    }
  })
);
d.prototype.saturate = function(e = 1) {
  const t = this, r = t.lch();
  return r[1] += K.Kn * e, r[1] < 0 && (r[1] = 0), new d(r, "lch").alpha(t.alpha(), !0);
};
d.prototype.desaturate = function(e = 1) {
  return this.saturate(-e);
};
d.prototype.set = function(e, t, r = !1) {
  const [n, s] = e.split("."), o = this[n]();
  if (s) {
    const a = n.indexOf(s) - (n.substr(0, 2) === "ok" ? 2 : 0);
    if (a > -1) {
      if (P(t) == "string")
        switch (t.charAt(0)) {
          case "+":
            o[a] += +t;
            break;
          case "-":
            o[a] += +t;
            break;
          case "*":
            o[a] *= +t.substr(1);
            break;
          case "/":
            o[a] /= +t.substr(1);
            break;
          default:
            o[a] = +t;
        }
      else if (P(t) === "number")
        o[a] = t;
      else
        throw new Error("unsupported value for Color.set");
      const i = new d(o, n);
      return r ? (this._rgb = i._rgb, this) : i;
    }
    throw new Error(`unknown channel ${s} in mode ${n}`);
  } else
    return o;
};
d.prototype.tint = function(e = 0.5, ...t) {
  return mt(this, "white", e, ...t);
};
d.prototype.shade = function(e = 0.5, ...t) {
  return mt(this, "black", e, ...t);
};
const Rn = (e, t, r) => {
  const n = e._rgb, s = t._rgb;
  return new d(
    n[0] + r * (s[0] - n[0]),
    n[1] + r * (s[1] - n[1]),
    n[2] + r * (s[2] - n[2]),
    "rgb"
  );
};
H.rgb = Rn;
const { sqrt: ne, pow: lt } = Math, Ln = (e, t, r) => {
  const [n, s, o] = e._rgb, [a, i, c] = t._rgb;
  return new d(
    ne(lt(n, 2) * (1 - r) + lt(a, 2) * r),
    ne(lt(s, 2) * (1 - r) + lt(i, 2) * r),
    ne(lt(o, 2) * (1 - r) + lt(c, 2) * r),
    "rgb"
  );
};
H.lrgb = Ln;
const On = (e, t, r) => {
  const n = e.lab(), s = t.lab();
  return new d(
    n[0] + r * (s[0] - n[0]),
    n[1] + r * (s[1] - n[1]),
    n[2] + r * (s[2] - n[2]),
    "lab"
  );
};
H.lab = On;
const yt = (e, t, r, n) => {
  let s, o;
  n === "hsl" ? (s = e.hsl(), o = t.hsl()) : n === "hsv" ? (s = e.hsv(), o = t.hsv()) : n === "hcg" ? (s = e.hcg(), o = t.hcg()) : n === "hsi" ? (s = e.hsi(), o = t.hsi()) : n === "lch" || n === "hcl" ? (n = "hcl", s = e.hcl(), o = t.hcl()) : n === "oklch" && (s = e.oklch().reverse(), o = t.oklch().reverse());
  let a, i, c, l, h, u;
  (n.substr(0, 1) === "h" || n === "oklch") && ([a, c, h] = s, [i, l, u] = o);
  let b, m, y, A;
  return !isNaN(a) && !isNaN(i) ? (i > a && i - a > 180 ? A = i - (a + 360) : i < a && a - i > 180 ? A = i + 360 - a : A = i - a, m = a + r * A) : isNaN(a) ? isNaN(i) ? m = Number.NaN : (m = i, (h == 1 || h == 0) && n != "hsv" && (b = l)) : (m = a, (u == 1 || u == 0) && n != "hsv" && (b = c)), b === void 0 && (b = c + r * (l - c)), y = h + r * (u - h), n === "oklch" ? new d([y, b, m], n) : new d([m, b, y], n);
}, gr = (e, t, r) => yt(e, t, r, "lch");
H.lch = gr;
H.hcl = gr;
const zn = (e) => {
  if (P(e) == "number" && e >= 0 && e <= 16777215) {
    const t = e >> 16, r = e >> 8 & 255, n = e & 255;
    return [t, r, n, 1];
  }
  throw new Error("unknown num color: " + e);
}, Tn = (...e) => {
  const [t, r, n] = k(e, "rgb");
  return (t << 16) + (r << 8) + n;
};
d.prototype.num = function() {
  return Tn(this._rgb);
};
const jn = (...e) => new d(...e, "num");
Object.assign(C, { num: jn });
w.format.num = zn;
w.autodetect.push({
  p: 5,
  test: (...e) => {
    if (e.length === 1 && P(e[0]) === "number" && e[0] >= 0 && e[0] <= 16777215)
      return "num";
  }
});
const Un = (e, t, r) => {
  const n = e.num(), s = t.num();
  return new d(n + r * (s - n), "num");
};
H.num = Un;
const { floor: Yn } = Math, Hn = (...e) => {
  e = k(e, "hcg");
  let [t, r, n] = e, s, o, a;
  n = n * 255;
  const i = r * 255;
  if (r === 0)
    s = o = a = n;
  else {
    t === 360 && (t = 0), t > 360 && (t -= 360), t < 0 && (t += 360), t /= 60;
    const c = Yn(t), l = t - c, h = n * (1 - r), u = h + i * (1 - l), b = h + i * l, m = h + i;
    switch (c) {
      case 0:
        [s, o, a] = [m, b, h];
        break;
      case 1:
        [s, o, a] = [u, m, h];
        break;
      case 2:
        [s, o, a] = [h, m, b];
        break;
      case 3:
        [s, o, a] = [h, u, m];
        break;
      case 4:
        [s, o, a] = [b, h, m];
        break;
      case 5:
        [s, o, a] = [m, h, u];
        break;
    }
  }
  return [s, o, a, e.length > 3 ? e[3] : 1];
}, Bn = (...e) => {
  const [t, r, n] = k(e, "rgb"), s = cr(t, r, n), o = lr(t, r, n), a = o - s, i = a * 100 / 255, c = s / (255 - a) * 100;
  let l;
  return a === 0 ? l = Number.NaN : (t === o && (l = (r - n) / a), r === o && (l = 2 + (n - t) / a), n === o && (l = 4 + (t - r) / a), l *= 60, l < 0 && (l += 360)), [l, i, c];
};
d.prototype.hcg = function() {
  return Bn(this._rgb);
};
const Gn = (...e) => new d(...e, "hcg");
C.hcg = Gn;
w.format.hcg = Hn;
w.autodetect.push({
  p: 1,
  test: (...e) => {
    if (e = k(e, "hcg"), P(e) === "array" && e.length === 3)
      return "hcg";
  }
});
const Xn = (e, t, r) => yt(e, t, r, "hcg");
H.hcg = Xn;
const { cos: ft } = Math, In = (...e) => {
  e = k(e, "hsi");
  let [t, r, n] = e, s, o, a;
  return isNaN(t) && (t = 0), isNaN(r) && (r = 0), t > 360 && (t -= 360), t < 0 && (t += 360), t /= 360, t < 1 / 3 ? (a = (1 - r) / 3, s = (1 + r * ft(F * t) / ft(Qt - F * t)) / 3, o = 1 - (a + s)) : t < 2 / 3 ? (t -= 1 / 3, s = (1 - r) / 3, o = (1 + r * ft(F * t) / ft(Qt - F * t)) / 3, a = 1 - (s + o)) : (t -= 2 / 3, o = (1 - r) / 3, a = (1 + r * ft(F * t) / ft(Qt - F * t)) / 3, s = 1 - (o + a)), s = it(n * s * 3), o = it(n * o * 3), a = it(n * a * 3), [s * 255, o * 255, a * 255, e.length > 3 ? e[3] : 1];
}, { min: qn, sqrt: Dn, acos: Zn } = Math, Wn = (...e) => {
  let [t, r, n] = k(e, "rgb");
  t /= 255, r /= 255, n /= 255;
  let s;
  const o = qn(t, r, n), a = (t + r + n) / 3, i = a > 0 ? 1 - o / a : 0;
  return i === 0 ? s = NaN : (s = (t - r + (t - n)) / 2, s /= Dn((t - r) * (t - r) + (t - n) * (r - n)), s = Zn(s), n > r && (s = F - s), s /= F), [s * 360, i, a];
};
d.prototype.hsi = function() {
  return Wn(this._rgb);
};
const Kn = (...e) => new d(...e, "hsi");
C.hsi = Kn;
w.format.hsi = In;
w.autodetect.push({
  p: 2,
  test: (...e) => {
    if (e = k(e, "hsi"), P(e) === "array" && e.length === 3)
      return "hsi";
  }
});
const Vn = (e, t, r) => yt(e, t, r, "hsi");
H.hsi = Vn;
const ue = (...e) => {
  e = k(e, "hsl");
  const [t, r, n] = e;
  let s, o, a;
  if (r === 0)
    s = o = a = n * 255;
  else {
    const i = [0, 0, 0], c = [0, 0, 0], l = n < 0.5 ? n * (1 + r) : n + r - n * r, h = 2 * n - l, u = t / 360;
    i[0] = u + 1 / 3, i[1] = u, i[2] = u - 1 / 3;
    for (let b = 0; b < 3; b++)
      i[b] < 0 && (i[b] += 1), i[b] > 1 && (i[b] -= 1), 6 * i[b] < 1 ? c[b] = h + (l - h) * 6 * i[b] : 2 * i[b] < 1 ? c[b] = l : 3 * i[b] < 2 ? c[b] = h + (l - h) * (2 / 3 - i[b]) * 6 : c[b] = h;
    [s, o, a] = [c[0] * 255, c[1] * 255, c[2] * 255];
  }
  return e.length > 3 ? [s, o, a, e[3]] : [s, o, a, 1];
}, yr = (...e) => {
  e = k(e, "rgba");
  let [t, r, n] = e;
  t /= 255, r /= 255, n /= 255;
  const s = cr(t, r, n), o = lr(t, r, n), a = (o + s) / 2;
  let i, c;
  return o === s ? (i = 0, c = Number.NaN) : i = a < 0.5 ? (o - s) / (o + s) : (o - s) / (2 - o - s), t == o ? c = (r - n) / (o - s) : r == o ? c = 2 + (n - t) / (o - s) : n == o && (c = 4 + (t - r) / (o - s)), c *= 60, c < 0 && (c += 360), e.length > 3 && e[3] !== void 0 ? [c, i, a, e[3]] : [c, i, a];
};
d.prototype.hsl = function() {
  return yr(this._rgb);
};
const Fn = (...e) => new d(...e, "hsl");
C.hsl = Fn;
w.format.hsl = ue;
w.autodetect.push({
  p: 2,
  test: (...e) => {
    if (e = k(e, "hsl"), P(e) === "array" && e.length === 3)
      return "hsl";
  }
});
const Jn = (e, t, r) => yt(e, t, r, "hsl");
H.hsl = Jn;
const { floor: Qn } = Math, ts = (...e) => {
  e = k(e, "hsv");
  let [t, r, n] = e, s, o, a;
  if (n *= 255, r === 0)
    s = o = a = n;
  else {
    t === 360 && (t = 0), t > 360 && (t -= 360), t < 0 && (t += 360), t /= 60;
    const i = Qn(t), c = t - i, l = n * (1 - r), h = n * (1 - r * c), u = n * (1 - r * (1 - c));
    switch (i) {
      case 0:
        [s, o, a] = [n, u, l];
        break;
      case 1:
        [s, o, a] = [h, n, l];
        break;
      case 2:
        [s, o, a] = [l, n, u];
        break;
      case 3:
        [s, o, a] = [l, h, n];
        break;
      case 4:
        [s, o, a] = [u, l, n];
        break;
      case 5:
        [s, o, a] = [n, l, h];
        break;
    }
  }
  return [s, o, a, e.length > 3 ? e[3] : 1];
}, { min: es, max: rs } = Math, ns = (...e) => {
  e = k(e, "rgb");
  let [t, r, n] = e;
  const s = es(t, r, n), o = rs(t, r, n), a = o - s;
  let i, c, l;
  return l = o / 255, o === 0 ? (i = Number.NaN, c = 0) : (c = a / o, t === o && (i = (r - n) / a), r === o && (i = 2 + (n - t) / a), n === o && (i = 4 + (t - r) / a), i *= 60, i < 0 && (i += 360)), [i, c, l];
};
d.prototype.hsv = function() {
  return ns(this._rgb);
};
const ss = (...e) => new d(...e, "hsv");
C.hsv = ss;
w.format.hsv = ts;
w.autodetect.push({
  p: 2,
  test: (...e) => {
    if (e = k(e, "hsv"), P(e) === "array" && e.length === 3)
      return "hsv";
  }
});
const os = (e, t, r) => yt(e, t, r, "hsv");
H.hsv = os;
function Gt(e, t) {
  let r = e.length;
  Array.isArray(e[0]) || (e = [e]), Array.isArray(t[0]) || (t = t.map((a) => [a]));
  let n = t[0].length, s = t[0].map((a, i) => t.map((c) => c[i])), o = e.map(
    (a) => s.map((i) => Array.isArray(a) ? a.reduce((c, l, h) => c + l * (i[h] || 0), 0) : i.reduce((c, l) => c + l * a, 0))
  );
  return r === 1 && (o = o[0]), n === 1 ? o.map((a) => a[0]) : o;
}
const Ae = (...e) => {
  e = k(e, "lab");
  const [t, r, n, ...s] = e, [o, a, i] = as([t, r, n]), [c, l, h] = dr(o, a, i);
  return [c, l, h, ...s.length > 0 && s[0] < 1 ? [s[0]] : []];
};
function as(e) {
  var t = [
    [1.2268798758459243, -0.5578149944602171, 0.2813910456659647],
    [-0.0405757452148008, 1.112286803280317, -0.0717110580655164],
    [-0.0763729366746601, -0.4214933324022432, 1.5869240198367816]
  ], r = [
    [1, 0.3963377773761749, 0.2158037573099136],
    [1, -0.1055613458156586, -0.0638541728258133],
    [1, -0.0894841775298119, -1.2914855480194092]
  ], n = Gt(r, e);
  return Gt(
    t,
    n.map((s) => s ** 3)
  );
}
const ke = (...e) => {
  const [t, r, n, ...s] = k(e, "rgb"), o = br(t, r, n);
  return [...is(o), ...s.length > 0 && s[0] < 1 ? [s[0]] : []];
};
function is(e) {
  const t = [
    [0.819022437996703, 0.3619062600528904, -0.1288737815209879],
    [0.0329836539323885, 0.9292868615863434, 0.0361446663506424],
    [0.0481771893596242, 0.2642395317527308, 0.6335478284694309]
  ], r = [
    [0.210454268309314, 0.7936177747023054, -0.0040720430116193],
    [1.9779985324311684, -2.42859224204858, 0.450593709617411],
    [0.0259040424655478, 0.7827717124575296, -0.8086757549230774]
  ], n = Gt(t, e);
  return Gt(
    r,
    n.map((s) => Math.cbrt(s))
  );
}
d.prototype.oklab = function() {
  return ke(this._rgb);
};
const cs = (...e) => new d(...e, "oklab");
Object.assign(C, { oklab: cs });
w.format.oklab = Ae;
w.autodetect.push({
  p: 2,
  test: (...e) => {
    if (e = k(e, "oklab"), P(e) === "array" && e.length === 3)
      return "oklab";
  }
});
const ls = (e, t, r) => {
  const n = e.oklab(), s = t.oklab();
  return new d(
    n[0] + r * (s[0] - n[0]),
    n[1] + r * (s[1] - n[1]),
    n[2] + r * (s[2] - n[2]),
    "oklab"
  );
};
H.oklab = ls;
const fs = (e, t, r) => yt(e, t, r, "oklch");
H.oklch = fs;
const { pow: se, sqrt: oe, PI: ae, cos: Ye, sin: He, atan2: hs } = Math, us = (e, t = "lrgb", r = null) => {
  const n = e.length;
  r || (r = Array.from(new Array(n)).map(() => 1));
  const s = n / r.reduce(function(u, b) {
    return u + b;
  });
  if (r.forEach((u, b) => {
    r[b] *= s;
  }), e = e.map((u) => new d(u)), t === "lrgb")
    return ds(e, r);
  const o = e.shift(), a = o.get(t), i = [];
  let c = 0, l = 0;
  for (let u = 0; u < a.length; u++)
    if (a[u] = (a[u] || 0) * r[0], i.push(isNaN(a[u]) ? 0 : r[0]), t.charAt(u) === "h" && !isNaN(a[u])) {
      const b = a[u] / 180 * ae;
      c += Ye(b) * r[0], l += He(b) * r[0];
    }
  let h = o.alpha() * r[0];
  e.forEach((u, b) => {
    const m = u.get(t);
    h += u.alpha() * r[b + 1];
    for (let y = 0; y < a.length; y++)
      if (!isNaN(m[y]))
        if (i[y] += r[b + 1], t.charAt(y) === "h") {
          const A = m[y] / 180 * ae;
          c += Ye(A) * r[b + 1], l += He(A) * r[b + 1];
        } else
          a[y] += m[y] * r[b + 1];
  });
  for (let u = 0; u < a.length; u++)
    if (t.charAt(u) === "h") {
      let b = hs(l / i[u], c / i[u]) / ae * 180;
      for (; b < 0; ) b += 360;
      for (; b >= 360; ) b -= 360;
      a[u] = b;
    } else
      a[u] = a[u] / i[u];
  return h /= n, new d(a, t).alpha(h > 0.99999 ? 1 : h, !0);
}, ds = (e, t) => {
  const r = e.length, n = [0, 0, 0, 0];
  for (let s = 0; s < e.length; s++) {
    const o = e[s], a = t[s] / r, i = o._rgb;
    n[0] += se(i[0], 2) * a, n[1] += se(i[1], 2) * a, n[2] += se(i[2], 2) * a, n[3] += i[3] * a;
  }
  return n[0] = oe(n[0]), n[1] = oe(n[1]), n[2] = oe(n[2]), n[3] > 0.9999999 && (n[3] = 1), new d(ye(n));
}, { pow: bs } = Math;
function Xt(e) {
  let t = "rgb", r = C("#ccc"), n = 0, s = [0, 1], o = [], a = [0, 0], i = !1, c = [], l = !1, h = 0, u = 1, b = !1, m = {}, y = !0, A = 1;
  const v = function(f) {
    if (f = f || ["#fff", "#000"], f && P(f) === "string" && C.brewer && C.brewer[f.toLowerCase()] && (f = C.brewer[f.toLowerCase()]), P(f) === "array") {
      f.length === 1 && (f = [f[0], f[0]]), f = f.slice(0);
      for (let p = 0; p < f.length; p++)
        f[p] = C(f[p]);
      o.length = 0;
      for (let p = 0; p < f.length; p++)
        o.push(p / (f.length - 1));
    }
    return x(), c = f;
  }, g = function(f) {
    if (i != null) {
      const p = i.length - 1;
      let $ = 0;
      for (; $ < p && f >= i[$]; )
        $++;
      return $ - 1;
    }
    return 0;
  };
  let O = (f) => f, L = (f) => f;
  const R = function(f, p) {
    let $, _;
    if (p == null && (p = !1), isNaN(f) || f === null)
      return r;
    p ? _ = f : i && i.length > 2 ? _ = g(f) / (i.length - 2) : u !== h ? _ = (f - h) / (u - h) : _ = 1, _ = L(_), p || (_ = O(_)), A !== 1 && (_ = bs(_, A)), _ = a[0] + _ * (1 - a[0] - a[1]), _ = it(_, 0, 1);
    const M = Math.floor(_ * 1e4);
    if (y && m[M])
      $ = m[M];
    else {
      if (P(c) === "array")
        for (let S = 0; S < o.length; S++) {
          const N = o[S];
          if (_ <= N) {
            $ = c[S];
            break;
          }
          if (_ >= N && S === o.length - 1) {
            $ = c[S];
            break;
          }
          if (_ > N && _ < o[S + 1]) {
            _ = (_ - N) / (o[S + 1] - N), $ = C.interpolate(
              c[S],
              c[S + 1],
              _,
              t
            );
            break;
          }
        }
      else P(c) === "function" && ($ = c(_));
      y && (m[M] = $);
    }
    return $;
  };
  var x = () => m = {};
  v(e);
  const E = function(f) {
    const p = C(R(f));
    return l && p[l] ? p[l]() : p;
  };
  return E.classes = function(f) {
    if (f != null) {
      if (P(f) === "array")
        i = f, s = [f[0], f[f.length - 1]];
      else {
        const p = C.analyze(s);
        f === 0 ? i = [p.min, p.max] : i = C.limits(p, "e", f);
      }
      return E;
    }
    return i;
  }, E.domain = function(f) {
    if (!arguments.length)
      return s;
    h = f[0], u = f[f.length - 1], o = [];
    const p = c.length;
    if (f.length === p && h !== u)
      for (let $ of Array.from(f))
        o.push(($ - h) / (u - h));
    else {
      for (let $ = 0; $ < p; $++)
        o.push($ / (p - 1));
      if (f.length > 2) {
        const $ = f.map((M, S) => S / (f.length - 1)), _ = f.map((M) => (M - h) / (u - h));
        _.every((M, S) => $[S] === M) || (L = (M) => {
          if (M <= 0 || M >= 1) return M;
          let S = 0;
          for (; M >= _[S + 1]; ) S++;
          const N = (M - _[S]) / (_[S + 1] - _[S]);
          return $[S] + N * ($[S + 1] - $[S]);
        });
      }
    }
    return s = [h, u], E;
  }, E.mode = function(f) {
    return arguments.length ? (t = f, x(), E) : t;
  }, E.range = function(f, p) {
    return v(f), E;
  }, E.out = function(f) {
    return l = f, E;
  }, E.spread = function(f) {
    return arguments.length ? (n = f, E) : n;
  }, E.correctLightness = function(f) {
    return f == null && (f = !0), b = f, x(), b ? O = function(p) {
      const $ = R(0, !0).lab()[0], _ = R(1, !0).lab()[0], M = $ > _;
      let S = R(p, !0).lab()[0];
      const N = $ + (_ - $) * p;
      let Z = S - N, wt = 0, Lt = 1, Ot = 20;
      for (; Math.abs(Z) > 0.01 && Ot-- > 0; )
        (function() {
          return M && (Z *= -1), Z < 0 ? (wt = p, p += (Lt - p) * 0.5) : (Lt = p, p += (wt - p) * 0.5), S = R(p, !0).lab()[0], Z = S - N;
        })();
      return p;
    } : O = (p) => p, E;
  }, E.padding = function(f) {
    return f != null ? (P(f) === "number" && (f = [f, f]), a = f, E) : a;
  }, E.colors = function(f, p) {
    arguments.length < 2 && (p = "hex");
    let $ = [];
    if (arguments.length === 0)
      $ = c.slice(0);
    else if (f === 1)
      $ = [E(0.5)];
    else if (f > 1) {
      const _ = s[0], M = s[1] - _;
      $ = ps(0, f).map(
        (S) => E(_ + S / (f - 1) * M)
      );
    } else {
      e = [];
      let _ = [];
      if (i && i.length > 2)
        for (let M = 1, S = i.length, N = 1 <= S; N ? M < S : M > S; N ? M++ : M--)
          _.push((i[M - 1] + i[M]) * 0.5);
      else
        _ = s;
      $ = _.map((M) => E(M));
    }
    return C[p] && ($ = $.map((_) => _[p]())), $;
  }, E.cache = function(f) {
    return f != null ? (y = f, E) : y;
  }, E.gamma = function(f) {
    return f != null ? (A = f, E) : A;
  }, E.nodata = function(f) {
    return f != null ? (r = C(f), E) : r;
  }, E;
}
function ps(e, t, r) {
  let n = [], s = e < t, o = t;
  for (let a = e; s ? a < o : a > o; s ? a++ : a--)
    n.push(a);
  return n;
}
const ms = function(e) {
  let t = [1, 1];
  for (let r = 1; r < e; r++) {
    let n = [1];
    for (let s = 1; s <= t.length; s++)
      n[s] = (t[s] || 0) + t[s - 1];
    t = n;
  }
  return t;
}, gs = function(e) {
  let t, r, n, s;
  if (e = e.map((o) => new d(o)), e.length === 2)
    [r, n] = e.map((o) => o.lab()), t = function(o) {
      const a = [0, 1, 2].map((i) => r[i] + o * (n[i] - r[i]));
      return new d(a, "lab");
    };
  else if (e.length === 3)
    [r, n, s] = e.map((o) => o.lab()), t = function(o) {
      const a = [0, 1, 2].map(
        (i) => (1 - o) * (1 - o) * r[i] + 2 * (1 - o) * o * n[i] + o * o * s[i]
      );
      return new d(a, "lab");
    };
  else if (e.length === 4) {
    let o;
    [r, n, s, o] = e.map((a) => a.lab()), t = function(a) {
      const i = [0, 1, 2].map(
        (c) => (1 - a) * (1 - a) * (1 - a) * r[c] + 3 * (1 - a) * (1 - a) * a * n[c] + 3 * (1 - a) * a * a * s[c] + a * a * a * o[c]
      );
      return new d(i, "lab");
    };
  } else if (e.length >= 5) {
    let o, a, i;
    o = e.map((c) => c.lab()), i = e.length - 1, a = ms(i), t = function(c) {
      const l = 1 - c, h = [0, 1, 2].map(
        (u) => o.reduce(
          (b, m, y) => b + a[y] * l ** (i - y) * c ** y * m[u],
          0
        )
      );
      return new d(h, "lab");
    };
  } else
    throw new RangeError("No point in running bezier with only one color.");
  return t;
}, ys = (e) => {
  const t = gs(e);
  return t.scale = () => Xt(t), t;
}, { round: vr } = Math;
d.prototype.rgb = function(e = !0) {
  return e === !1 ? this._rgb.slice(0, 3) : this._rgb.slice(0, 3).map(vr);
};
d.prototype.rgba = function(e = !0) {
  return this._rgb.slice(0, 4).map((t, r) => r < 3 ? e === !1 ? t : vr(t) : t);
};
const vs = (...e) => new d(...e, "rgb");
Object.assign(C, { rgb: vs });
w.format.rgb = (...e) => {
  const t = k(e, "rgba");
  return t[3] === void 0 && (t[3] = 1), t;
};
w.autodetect.push({
  p: 3,
  test: (...e) => {
    if (e = k(e, "rgba"), P(e) === "array" && (e.length === 3 || e.length === 4 && P(e[3]) == "number" && e[3] >= 0 && e[3] <= 1))
      return "rgb";
  }
});
const D = (e, t, r) => {
  if (!D[r])
    throw new Error("unknown blend mode " + r);
  return D[r](e, t);
}, nt = (e) => (t, r) => {
  const n = C(r).rgb(), s = C(t).rgb();
  return C.rgb(e(n, s));
}, st = (e) => (t, r) => {
  const n = [];
  return n[0] = e(t[0], r[0]), n[1] = e(t[1], r[1]), n[2] = e(t[2], r[2]), n;
}, _s = (e) => e, $s = (e, t) => e * t / 255, ws = (e, t) => e > t ? t : e, As = (e, t) => e > t ? e : t, ks = (e, t) => 255 * (1 - (1 - e / 255) * (1 - t / 255)), xs = (e, t) => t < 128 ? 2 * e * t / 255 : 255 * (1 - 2 * (1 - e / 255) * (1 - t / 255)), Es = (e, t) => 255 * (1 - (1 - t / 255) / (e / 255)), Ms = (e, t) => e === 255 ? 255 : (e = 255 * (t / 255) / (1 - e / 255), e > 255 ? 255 : e);
D.normal = nt(st(_s));
D.multiply = nt(st($s));
D.screen = nt(st(ks));
D.overlay = nt(st(xs));
D.darken = nt(st(ws));
D.lighten = nt(st(As));
D.dodge = nt(st(Ms));
D.burn = nt(st(Es));
const { pow: Ss, sin: Cs, cos: Ps } = Math;
function Ns(e = 300, t = -1.5, r = 1, n = 1, s = [0, 1]) {
  let o = 0, a;
  P(s) === "array" ? a = s[1] - s[0] : (a = 0, s = [s, s]);
  const i = function(c) {
    const l = F * ((e + 120) / 360 + t * c), h = Ss(s[0] + a * c, n), b = (o !== 0 ? r[0] + c * o : r) * h * (1 - h) / 2, m = Ps(l), y = Cs(l), A = h + b * (-0.14861 * m + 1.78277 * y), v = h + b * (-0.29227 * m - 0.90649 * y), g = h + b * (1.97294 * m);
    return C(ye([A * 255, v * 255, g * 255, 1]));
  };
  return i.start = function(c) {
    return c == null ? e : (e = c, i);
  }, i.rotations = function(c) {
    return c == null ? t : (t = c, i);
  }, i.gamma = function(c) {
    return c == null ? n : (n = c, i);
  }, i.hue = function(c) {
    return c == null ? r : (r = c, P(r) === "array" ? (o = r[1] - r[0], o === 0 && (r = r[1])) : o = 0, i);
  }, i.lightness = function(c) {
    return c == null ? s : (P(c) === "array" ? (s = c, a = c[1] - c[0]) : (s = [c, c], a = 0), i);
  }, i.scale = () => C.scale(i), i.hue(r), i;
}
const Rs = "0123456789abcdef", { floor: Ls, random: Os } = Math, zs = () => {
  let e = "#";
  for (let t = 0; t < 6; t++)
    e += Rs.charAt(Ls(Os() * 16));
  return new d(e, "hex");
}, { log: Be, pow: Ts, floor: js, abs: Us } = Math;
function _r(e, t = null) {
  const r = {
    min: Number.MAX_VALUE,
    max: Number.MAX_VALUE * -1,
    sum: 0,
    values: [],
    count: 0
  };
  return P(e) === "object" && (e = Object.values(e)), e.forEach((n) => {
    t && P(n) === "object" && (n = n[t]), n != null && !isNaN(n) && (r.values.push(n), r.sum += n, n < r.min && (r.min = n), n > r.max && (r.max = n), r.count += 1);
  }), r.domain = [r.min, r.max], r.limits = (n, s) => $r(r, n, s), r;
}
function $r(e, t = "equal", r = 7) {
  P(e) == "array" && (e = _r(e));
  const { min: n, max: s } = e, o = e.values.sort((i, c) => i - c);
  if (r === 1)
    return [n, s];
  const a = [];
  if (t.substr(0, 1) === "c" && (a.push(n), a.push(s)), t.substr(0, 1) === "e") {
    a.push(n);
    for (let i = 1; i < r; i++)
      a.push(n + i / r * (s - n));
    a.push(s);
  } else if (t.substr(0, 1) === "l") {
    if (n <= 0)
      throw new Error(
        "Logarithmic scales are only possible for values > 0"
      );
    const i = Math.LOG10E * Be(n), c = Math.LOG10E * Be(s);
    a.push(n);
    for (let l = 1; l < r; l++)
      a.push(Ts(10, i + l / r * (c - i)));
    a.push(s);
  } else if (t.substr(0, 1) === "q") {
    a.push(n);
    for (let i = 1; i < r; i++) {
      const c = (o.length - 1) * i / r, l = js(c);
      if (l === c)
        a.push(o[l]);
      else {
        const h = c - l;
        a.push(o[l] * (1 - h) + o[l + 1] * h);
      }
    }
    a.push(s);
  } else if (t.substr(0, 1) === "k") {
    let i;
    const c = o.length, l = new Array(c), h = new Array(r);
    let u = !0, b = 0, m = null;
    m = [], m.push(n);
    for (let v = 1; v < r; v++)
      m.push(n + v / r * (s - n));
    for (m.push(s); u; ) {
      for (let g = 0; g < r; g++)
        h[g] = 0;
      for (let g = 0; g < c; g++) {
        const O = o[g];
        let L = Number.MAX_VALUE, R;
        for (let x = 0; x < r; x++) {
          const E = Us(m[x] - O);
          E < L && (L = E, R = x), h[R]++, l[g] = R;
        }
      }
      const v = new Array(r);
      for (let g = 0; g < r; g++)
        v[g] = null;
      for (let g = 0; g < c; g++)
        i = l[g], v[i] === null ? v[i] = o[g] : v[i] += o[g];
      for (let g = 0; g < r; g++)
        v[g] *= 1 / h[g];
      u = !1;
      for (let g = 0; g < r; g++)
        if (v[g] !== m[g]) {
          u = !0;
          break;
        }
      m = v, b++, b > 200 && (u = !1);
    }
    const y = {};
    for (let v = 0; v < r; v++)
      y[v] = [];
    for (let v = 0; v < c; v++)
      i = l[v], y[i].push(o[v]);
    let A = [];
    for (let v = 0; v < r; v++)
      A.push(y[v][0]), A.push(y[v][y[v].length - 1]);
    A = A.sort((v, g) => v - g), a.push(A[0]);
    for (let v = 1; v < A.length; v += 2) {
      const g = A[v];
      !isNaN(g) && a.indexOf(g) === -1 && a.push(g);
    }
  }
  return a;
}
const Ys = (e, t) => {
  e = new d(e), t = new d(t);
  const r = e.luminance(), n = t.luminance();
  return r > n ? (r + 0.05) / (n + 0.05) : (n + 0.05) / (r + 0.05);
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
const Ge = 0.027, Hs = 5e-4, Bs = 0.1, Xe = 1.14, Tt = 0.022, Ie = 1.414, Gs = (e, t) => {
  e = new d(e), t = new d(t), e.alpha() < 1 && (e = mt(t, e, e.alpha(), "rgb"));
  const r = qe(...e.rgb()), n = qe(...t.rgb()), s = r >= Tt ? r : r + Math.pow(Tt - r, Ie), o = n >= Tt ? n : n + Math.pow(Tt - n, Ie), a = Math.pow(o, 0.56) - Math.pow(s, 0.57), i = Math.pow(o, 0.65) - Math.pow(s, 0.62), c = Math.abs(o - s) < Hs ? 0 : s < o ? a * Xe : i * Xe;
  return (Math.abs(c) < Bs ? 0 : c > 0 ? c - Ge : c + Ge) * 100;
};
function qe(e, t, r) {
  return 0.2126729 * Math.pow(e / 255, 2.4) + 0.7151522 * Math.pow(t / 255, 2.4) + 0.072175 * Math.pow(r / 255, 2.4);
}
const { sqrt: V, pow: z, min: Xs, max: Is, atan2: De, abs: Ze, cos: jt, sin: We, exp: qs, PI: Ke } = Math;
function Ds(e, t, r = 1, n = 1, s = 1) {
  var o = function(Wt) {
    return 360 * Wt / (2 * Ke);
  }, a = function(Wt) {
    return 2 * Ke * Wt / 360;
  };
  e = new d(e), t = new d(t);
  const [i, c, l] = Array.from(e.lab()), [h, u, b] = Array.from(t.lab()), m = (i + h) / 2, y = V(z(c, 2) + z(l, 2)), A = V(z(u, 2) + z(b, 2)), v = (y + A) / 2, g = 0.5 * (1 - V(z(v, 7) / (z(v, 7) + z(25, 7)))), O = c * (1 + g), L = u * (1 + g), R = V(z(O, 2) + z(l, 2)), x = V(z(L, 2) + z(b, 2)), E = (R + x) / 2, f = o(De(l, O)), p = o(De(b, L)), $ = f >= 0 ? f : f + 360, _ = p >= 0 ? p : p + 360, M = Ze($ - _) > 180 ? ($ + _ + 360) / 2 : ($ + _) / 2, S = 1 - 0.17 * jt(a(M - 30)) + 0.24 * jt(a(2 * M)) + 0.32 * jt(a(3 * M + 6)) - 0.2 * jt(a(4 * M - 63));
  let N = _ - $;
  N = Ze(N) <= 180 ? N : _ <= $ ? N + 360 : N - 360, N = 2 * V(R * x) * We(a(N) / 2);
  const Z = h - i, wt = x - R, Lt = 1 + 0.015 * z(m - 50, 2) / V(20 + z(m - 50, 2)), Ot = 1 + 0.045 * E, Se = 1 + 0.015 * E * S, jr = 30 * qs(-z((M - 275) / 25, 2)), Ur = -(2 * V(z(E, 7) / (z(E, 7) + z(25, 7)))) * We(2 * a(jr)), Yr = V(
    z(Z / (r * Lt), 2) + z(wt / (n * Ot), 2) + z(N / (s * Se), 2) + Ur * (wt / (n * Ot)) * (N / (s * Se))
  );
  return Is(0, Xs(100, Yr));
}
function Zs(e, t, r = "lab") {
  e = new d(e), t = new d(t);
  const n = e.get(r), s = t.get(r);
  let o = 0;
  for (let a in n) {
    const i = (n[a] || 0) - (s[a] || 0);
    o += i * i;
  }
  return Math.sqrt(o);
}
const Ws = (...e) => {
  try {
    return new d(...e), !0;
  } catch {
    return !1;
  }
}, Ks = {
  cool() {
    return Xt([C.hsl(180, 1, 0.9), C.hsl(250, 0.7, 0.4)]);
  },
  hot() {
    return Xt(["#000", "#f00", "#ff0", "#fff"]).mode(
      "rgb"
    );
  }
}, de = {
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
}, wr = Object.keys(de), Ve = new Map(wr.map((e) => [e.toLowerCase(), e])), Vs = typeof Proxy == "function" ? new Proxy(de, {
  get(e, t) {
    const r = t.toLowerCase();
    if (Ve.has(r))
      return e[Ve.get(r)];
  },
  getOwnPropertyNames() {
    return Object.getOwnPropertyNames(wr);
  }
}) : de, Fs = (...e) => {
  e = k(e, "cmyk");
  const [t, r, n, s] = e, o = e.length > 4 ? e[4] : 1;
  return s === 1 ? [0, 0, 0, o] : [
    t >= 1 ? 0 : 255 * (1 - t) * (1 - s),
    // r
    r >= 1 ? 0 : 255 * (1 - r) * (1 - s),
    // g
    n >= 1 ? 0 : 255 * (1 - n) * (1 - s),
    // b
    o
  ];
}, { max: Fe } = Math, Js = (...e) => {
  let [t, r, n] = k(e, "rgb");
  t = t / 255, r = r / 255, n = n / 255;
  const s = 1 - Fe(t, Fe(r, n)), o = s < 1 ? 1 / (1 - s) : 0, a = (1 - t - s) * o, i = (1 - r - s) * o, c = (1 - n - s) * o;
  return [a, i, c, s];
};
d.prototype.cmyk = function() {
  return Js(this._rgb);
};
const Qs = (...e) => new d(...e, "cmyk");
Object.assign(C, { cmyk: Qs });
w.format.cmyk = Fs;
w.autodetect.push({
  p: 2,
  test: (...e) => {
    if (e = k(e, "cmyk"), P(e) === "array" && e.length === 4)
      return "cmyk";
  }
});
const to = (...e) => {
  const t = k(e, "hsla");
  let r = gt(e) || "lsa";
  return t[0] = X(t[0] || 0) + "deg", t[1] = X(t[1] * 100) + "%", t[2] = X(t[2] * 100) + "%", r === "hsla" || t.length > 3 && t[3] < 1 ? (t[3] = "/ " + (t.length > 3 ? t[3] : 1), r = "hsla") : t.length = 3, `${r.substr(0, 3)}(${t.join(" ")})`;
}, eo = (...e) => {
  const t = k(e, "lab");
  let r = gt(e) || "lab";
  return t[0] = X(t[0]) + "%", t[1] = X(t[1]), t[2] = X(t[2]), r === "laba" || t.length > 3 && t[3] < 1 ? t[3] = "/ " + (t.length > 3 ? t[3] : 1) : t.length = 3, `lab(${t.join(" ")})`;
}, ro = (...e) => {
  const t = k(e, "lch");
  let r = gt(e) || "lab";
  return t[0] = X(t[0]) + "%", t[1] = X(t[1]), t[2] = isNaN(t[2]) ? "none" : X(t[2]) + "deg", r === "lcha" || t.length > 3 && t[3] < 1 ? t[3] = "/ " + (t.length > 3 ? t[3] : 1) : t.length = 3, `lch(${t.join(" ")})`;
}, no = (...e) => {
  const t = k(e, "lab");
  return t[0] = X(t[0] * 100) + "%", t[1] = he(t[1]), t[2] = he(t[2]), t.length > 3 && t[3] < 1 ? t[3] = "/ " + (t.length > 3 ? t[3] : 1) : t.length = 3, `oklab(${t.join(" ")})`;
}, Ar = (...e) => {
  const [t, r, n, ...s] = k(e, "rgb"), [o, a, i] = ke(t, r, n), [c, l, h] = mr(o, a, i);
  return [c, l, h, ...s.length > 0 && s[0] < 1 ? [s[0]] : []];
}, so = (...e) => {
  const t = k(e, "lch");
  return t[0] = X(t[0] * 100) + "%", t[1] = he(t[1]), t[2] = isNaN(t[2]) ? "none" : X(t[2]) + "deg", t.length > 3 && t[3] < 1 ? t[3] = "/ " + (t.length > 3 ? t[3] : 1) : t.length = 3, `oklch(${t.join(" ")})`;
}, { round: ie } = Math, oo = (...e) => {
  const t = k(e, "rgba");
  let r = gt(e) || "rgb";
  if (r.substr(0, 3) === "hsl")
    return to(yr(t), r);
  if (r.substr(0, 3) === "lab") {
    const n = Nt();
    J("d50");
    const s = eo(_e(t), r);
    return J(n), s;
  }
  if (r.substr(0, 3) === "lch") {
    const n = Nt();
    J("d50");
    const s = ro(we(t), r);
    return J(n), s;
  }
  return r.substr(0, 5) === "oklab" ? no(ke(t)) : r.substr(0, 5) === "oklch" ? so(Ar(t)) : (t[0] = ie(t[0]), t[1] = ie(t[1]), t[2] = ie(t[2]), (r === "rgba" || t.length > 3 && t[3] < 1) && (t[3] = "/ " + (t.length > 3 ? t[3] : 1), r = "rgba"), `${r.substr(0, 3)}(${t.slice(0, r === "rgb" ? 3 : 4).join(" ")})`);
}, kr = (...e) => {
  e = k(e, "lch");
  const [t, r, n, ...s] = e, [o, a, i] = pr(t, r, n), [c, l, h] = Ae(o, a, i);
  return [c, l, h, ...s.length > 0 && s[0] < 1 ? [s[0]] : []];
}, Q = /((?:-?\d+)|(?:-?\d+(?:\.\d+)?)%|none)/.source, q = /((?:-?(?:\d+(?:\.\d*)?|\.\d+)%?)|none)/.source, It = /((?:-?(?:\d+(?:\.\d*)?|\.\d+)%)|none)/.source, I = /\s*/.source, vt = /\s+/.source, xe = /\s*,\s*/.source, Zt = /((?:-?(?:\d+(?:\.\d*)?|\.\d+)(?:deg)?)|none)/.source, _t = /\s*(?:\/\s*((?:[01]|[01]?\.\d+)|\d+(?:\.\d+)?%))?/.source, xr = new RegExp(
  "^rgba?\\(" + I + [Q, Q, Q].join(vt) + _t + "\\)$"
), Er = new RegExp(
  "^rgb\\(" + I + [Q, Q, Q].join(xe) + I + "\\)$"
), Mr = new RegExp(
  "^rgba\\(" + I + [Q, Q, Q, q].join(xe) + I + "\\)$"
), Sr = new RegExp(
  "^hsla?\\(" + I + [Zt, It, It].join(vt) + _t + "\\)$"
), Cr = new RegExp(
  "^hsl?\\(" + I + [Zt, It, It].join(xe) + I + "\\)$"
), Pr = /^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/, Nr = new RegExp(
  "^lab\\(" + I + [q, q, q].join(vt) + _t + "\\)$"
), Rr = new RegExp(
  "^lch\\(" + I + [q, q, Zt].join(vt) + _t + "\\)$"
), Lr = new RegExp(
  "^oklab\\(" + I + [q, q, q].join(vt) + _t + "\\)$"
), Or = new RegExp(
  "^oklch\\(" + I + [q, q, Zt].join(vt) + _t + "\\)$"
), { round: zr } = Math, ht = (e) => e.map((t, r) => r <= 2 ? it(zr(t), 0, 255) : t), T = (e, t = 0, r = 100, n = !1) => (typeof e == "string" && e.endsWith("%") && (e = parseFloat(e.substring(0, e.length - 1)) / 100, n ? e = t + (e + 1) * 0.5 * (r - t) : e = t + e * (r - t)), +e), G = (e, t) => e === "none" ? t : e, Ee = (e) => {
  if (e = e.toLowerCase().trim(), e === "transparent")
    return [0, 0, 0, 0];
  let t;
  if (w.format.named)
    try {
      return w.format.named(e);
    } catch {
    }
  if ((t = e.match(xr)) || (t = e.match(Er))) {
    let r = t.slice(1, 4);
    for (let s = 0; s < 3; s++)
      r[s] = +T(G(r[s], 0), 0, 255);
    r = ht(r);
    const n = t[4] !== void 0 ? +T(t[4], 0, 1) : 1;
    return r[3] = n, r;
  }
  if (t = e.match(Mr)) {
    const r = t.slice(1, 5);
    for (let n = 0; n < 4; n++)
      r[n] = +T(r[n], 0, 255);
    return r;
  }
  if ((t = e.match(Sr)) || (t = e.match(Cr))) {
    const r = t.slice(1, 4);
    r[0] = +G(r[0].replace("deg", ""), 0), r[1] = +T(G(r[1], 0), 0, 100) * 0.01, r[2] = +T(G(r[2], 0), 0, 100) * 0.01;
    const n = ht(ue(r)), s = t[4] !== void 0 ? +T(t[4], 0, 1) : 1;
    return n[3] = s, n;
  }
  if (t = e.match(Pr)) {
    const r = t.slice(1, 4);
    r[1] *= 0.01, r[2] *= 0.01;
    const n = ue(r);
    for (let s = 0; s < 3; s++)
      n[s] = zr(n[s]);
    return n[3] = +t[4], n;
  }
  if (t = e.match(Nr)) {
    const r = t.slice(1, 4);
    r[0] = T(G(r[0], 0), 0, 100), r[1] = T(G(r[1], 0), -125, 125, !0), r[2] = T(G(r[2], 0), -125, 125, !0);
    const n = Nt();
    J("d50");
    const s = ht(ve(r));
    J(n);
    const o = t[4] !== void 0 ? +T(t[4], 0, 1) : 1;
    return s[3] = o, s;
  }
  if (t = e.match(Rr)) {
    const r = t.slice(1, 4);
    r[0] = T(r[0], 0, 100), r[1] = T(G(r[1], 0), 0, 150, !1), r[2] = +G(r[2].replace("deg", ""), 0);
    const n = Nt();
    J("d50");
    const s = ht($e(r));
    J(n);
    const o = t[4] !== void 0 ? +T(t[4], 0, 1) : 1;
    return s[3] = o, s;
  }
  if (t = e.match(Lr)) {
    const r = t.slice(1, 4);
    r[0] = T(G(r[0], 0), 0, 1), r[1] = T(G(r[1], 0), -0.4, 0.4, !0), r[2] = T(G(r[2], 0), -0.4, 0.4, !0);
    const n = ht(Ae(r)), s = t[4] !== void 0 ? +T(t[4], 0, 1) : 1;
    return n[3] = s, n;
  }
  if (t = e.match(Or)) {
    const r = t.slice(1, 4);
    r[0] = T(G(r[0], 0), 0, 1), r[1] = T(G(r[1], 0), 0, 0.4, !1), r[2] = +G(r[2].replace("deg", ""), 0);
    const n = ht(kr(r)), s = t[4] !== void 0 ? +T(t[4], 0, 1) : 1;
    return n[3] = s, n;
  }
};
Ee.test = (e) => (
  // modern
  xr.test(e) || Sr.test(e) || Nr.test(e) || Rr.test(e) || Lr.test(e) || Or.test(e) || // legacy
  Er.test(e) || Mr.test(e) || Cr.test(e) || Pr.test(e) || e === "transparent"
);
d.prototype.css = function(e) {
  return oo(this._rgb, e);
};
const ao = (...e) => new d(...e, "css");
C.css = ao;
w.format.css = Ee;
w.autodetect.push({
  p: 5,
  test: (e, ...t) => {
    if (!t.length && P(e) === "string" && Ee.test(e))
      return "css";
  }
});
w.format.gl = (...e) => {
  const t = k(e, "rgba");
  return t[0] *= 255, t[1] *= 255, t[2] *= 255, t;
};
const io = (...e) => new d(...e, "gl");
C.gl = io;
d.prototype.gl = function() {
  const e = this._rgb;
  return [e[0] / 255, e[1] / 255, e[2] / 255, e[3]];
};
d.prototype.hex = function(e) {
  return ur(this._rgb, e);
};
const co = (...e) => new d(...e, "hex");
C.hex = co;
w.format.hex = hr;
w.autodetect.push({
  p: 4,
  test: (e, ...t) => {
    if (!t.length && P(e) === "string" && [3, 4, 5, 6, 7, 8, 9].indexOf(e.length) >= 0)
      return "hex";
  }
});
const { log: Ut } = Math, Tr = (e) => {
  const t = e / 100;
  let r, n, s;
  return t < 66 ? (r = 255, n = t < 6 ? 0 : -155.25485562709179 - 0.44596950469579133 * (n = t - 2) + 104.49216199393888 * Ut(n), s = t < 20 ? 0 : -254.76935184120902 + 0.8274096064007395 * (s = t - 10) + 115.67994401066147 * Ut(s)) : (r = 351.97690566805693 + 0.114206453784165 * (r = t - 55) - 40.25366309332127 * Ut(r), n = 325.4494125711974 + 0.07943456536662342 * (n = t - 50) - 28.0852963507957 * Ut(n), s = 255), [r, n, s, 1];
}, { round: lo } = Math, fo = (...e) => {
  const t = k(e, "rgb"), r = t[0], n = t[2];
  let s = 1e3, o = 4e4;
  const a = 0.4;
  let i;
  for (; o - s > a; ) {
    i = (o + s) * 0.5;
    const c = Tr(i);
    c[2] / c[0] >= n / r ? o = i : s = i;
  }
  return lo(i);
};
d.prototype.temp = d.prototype.kelvin = d.prototype.temperature = function() {
  return fo(this._rgb);
};
const ce = (...e) => new d(...e, "temp");
Object.assign(C, { temp: ce, kelvin: ce, temperature: ce });
w.format.temp = w.format.kelvin = w.format.temperature = Tr;
d.prototype.oklch = function() {
  return Ar(this._rgb);
};
const ho = (...e) => new d(...e, "oklch");
Object.assign(C, { oklch: ho });
w.format.oklch = kr;
w.autodetect.push({
  p: 2,
  test: (...e) => {
    if (e = k(e, "oklch"), P(e) === "array" && e.length === 3)
      return "oklch";
  }
});
Object.assign(C, {
  analyze: _r,
  average: us,
  bezier: ys,
  blend: D,
  brewer: Vs,
  Color: d,
  colors: pt,
  contrast: Ys,
  contrastAPCA: Gs,
  cubehelix: Ns,
  deltaE: Ds,
  distance: Zs,
  input: w,
  interpolate: mt,
  limits: $r,
  mix: mt,
  random: zs,
  scale: Xt,
  scales: Ks,
  valid: Ws
});
const Je = 42, uo = [
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
], bo = [
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
], le = (e, t = 0) => Array.isArray(e) ? e : Number.isInteger(e) ? Array(e + t).fill(e + t - 1).map(
  (r, n) => n / Math.max(r, 1)
) : (console.warn("expected prop to be 'number[]' or 'int'", e), []), be = (e, t) => ((t ? 1 - e : e) * 100).toFixed(2) + "%", fe = (e, t, r = t, n = !1) => [be(t), e(n ? 1 - r : r).hex()], W = (e, t = !1) => {
  if (e === "" || e === !0) return !0;
  if (!e) return;
  let r = typeof e == "string" || e instanceof String ? e.startsWith("[") ? JSON.parse(e) : e.split(",") : Array.isArray(e) ? [...e] : [e];
  return t && (r = r == null ? void 0 : r.map((n) => n == "" || isNaN(n) ? n : +n)), r.length > 1 ? r : r[0];
}, po = (e) => {
  let {
    colors: t,
    labels: r,
    ticks: n,
    classes: s,
    vertical: o,
    reverse: a,
    flip: i,
    before: c,
    after: l,
    colorReverse: h,
    colorMode: u,
    colorGamma: b,
    colorCorrectLightness: m,
    colorPadding: y,
    colorClass: A,
    centeredEdgeLabels: v
  } = e;
  t = W(t), r = W(r), n = W(n, !0), s = W(s, !0), y = W(y, !0), o = W(o), a = W(a), i = W(i), h = W(h), m = W(m), r === !0 && (Array.isArray(n) ? r = [...n] : Array.isArray(s) && (r = [...s])), a ^ o && (Array.isArray(n) && (n = n.reverse().map((f) => 1 - f)), Array.isArray(s) && (s = s.reverse().map((f) => 1 - f)));
  let g = null, O = null, L = null, R = null;
  s === !0 && (n ? s = Array.isArray(n) ? n : n - 1 : Array.isArray(r) ? s = r == null ? void 0 : r.length : Array.isArray(t) && (s = t == null ? void 0 : t.length));
  let x;
  if (t === !0 ? x = C.scale(uo).domain(bo) : t === void 0 ? t = ["#fff", "#000"] : Array.isArray(t) || (t = C.brewer[t] || ["#fff", t]), t !== !0 && a ^ o && (t = [...t].reverse()), x = x || C.scale(t), u && (x = x.mode(u)), b && (x = x.gamma(b)), m && (x = x.correctLightness()), y && (x = x.padding(y)), s)
    switch (A) {
      case "average":
        x = x.domain([0, 1]);
        break;
      case "equal":
        Array.isArray(s) || (s = le(s, 1)), x = x.classes([0, ...s, 1]);
        break;
      default:
        x = x.classes(s);
        break;
    }
  if (c === "" && (c = x(o ? 1 : 0).hex()), l === "" && (l = x(o ? 0 : 1).hex()), !s || Number(s) <= 1)
    O = Array(Je).fill(Je - 1).map((f, p) => fe(x, p / f, p / f, h));
  else {
    let f = le(s, 1);
    if (Array.isArray(f)) {
      let p = f.length - 1;
      O = f.reduce(($, _, M, S) => {
        let N = S[M + 1], Z = (_ + N) / 2;
        return M < p && M && $.push(fe(x, _, Z, h)), M < p - 1 && $.push(fe(x, N, Z, h)), $;
      }, []), g = f;
    }
  }
  if (n !== void 0) {
    n === !0 && (Array.isArray(g) ? n = g : Array.isArray(r) ? n = r.length : n = 2);
    let f = le(n);
    Array.isArray(f) && (L = f.map((p) => be(p, o)), g = g || f, a ^ o && (L = L.reverse()));
  }
  if (r !== void 0) {
    if (r === !0)
      if (g) {
        let p = g.length - (s ? 1 : 0);
        r = Array(p).fill(Math.max(p - 1, 1)).map(
          ($, _) => `${parseFloat((_ / $).toFixed(2))}`
        );
      } else r = ["0", "1"];
    Array.isArray(r) || (r = ["0", r]), a ^ o && Array.isArray(r) && (r = r.reverse());
    let f;
    switch (g && r.length - g.length) {
      case 0:
        f = (p) => g[p], v = !1;
        break;
      case -1:
        f = (p) => (g[p] + g[p + 1]) / 2, v = !0;
        break;
      default:
        r.length > 1 ? (f = (p) => p / (r.length - 1), v = !1) : (f = () => 0.5, v = !0);
        break;
    }
    R = r.map((p, $) => [be(o ? 1 - f($) : f($)), p]);
  }
  return {
    stops$: O,
    ticks$: L,
    labels$: R,
    before: c,
    after: l,
    vertical: o,
    klass: `dv-sb${c ? " b" : ""}${l ? " a" : ""}${i ? " f" : ""}${o ? " v" : " h"}${v ? " c" : ""}`
  };
}, mo = ".dv-sb{--s: var(--scalebar-size, 14);--f: var(--label-font, calc(var(--bz) * .9) monospace);--f0: var(--label-font0, var(--f));--f1: var(--label-font1, var(--f0));--sz: var(--container-size, calc(var(--s) * 2px));--bz: var(--bar-size, calc(var(--sz) / 2));--bo: var(--bar-offset);--tc: var(--tick-color, currentColor);--tc0: var(--tick-color0, var(--tc));--tc1: var(--tick-color1, var(--tc0));--tw: var(--tick-width, 2px);--tw0: var(--tick-width0, var(--tw));--tw1: var(--tick-width1, var(--tw0));--ts: var(--tick-size, var(--s));--ts0: var(--tick-size0, calc(var(--ts) * 1.7));--ts1: var(--tick-size1, var(--ts0));--to: var(--tick-offset, 0px);--to0: var(--tick-offset0, var(--to));--to1: var(--tick-offset1, var(--to0));--lc: var(--label-color, currentColor);--lc0: var(--label-color0, var(--lc));--lc1: var(--label-color1, var(--lc0));--lo: var(--label-offset, var(--bz));--lo0: var(--label-offset0, var(--lo));--lo1: var(--label-offset1, var(--lo0));--li: var(--label-indent, 0px);--li0: var(--label-indent0, var(--li));--li1: var(--label-indent1, calc(var(--li0) * -1));--_: calc(var(--sz) - var(--bz));--_to: calc((var(--to)*-1) + (var(--sz) - var(--ts)*1px));--_to0: calc((var(--to0)*-1) + (var(--sz) - var(--ts0)*1px));--_to1: calc((var(--to1)*-1) + (var(--_to0)))}svg{overflow:visible;width:100%;height:var(--sz)}svg rect{width:100%;height:var(--bz);transform:translateY(var(--bo))}svg rect.b{transform:translate(calc(var(--bz)*-1))}svg rect.a{transform:translate(100%)}svg.f rect{transform:translateY(var(--bo, var(--_)))}svg.v{width:var(--sz);height:100%}svg.v rect{width:var(--bz);height:100%;transform:translate(var(--bo))}svg.v rect.b{transform:translateY(calc(var(--bz)*-1))}svg.v rect.a{transform:translateY(100%)}svg.f.v rect{transform:translate(var(--bo, var(--_)))}svg rect.b,svg rect.a{height:var(--bz);width:var(--bz)}svg use{stroke:var(--tc);stroke-width:var(--tw);transform:translateY(var(--to)) scaleY(var(--ts))}svg use:first-of-type{stroke:var(--tc0);stroke-width:var(--tw0)}svg use:last-of-type{stroke:var(--tc1);stroke-width:var(--tw1)}svg use:last-of-type{transform:translateY(var(--to1)) scaleY(var(--ts1))}svg use:first-of-type{transform:translateY(var(--to0)) scaleY(var(--ts0))}svg.f use{transform:translateY(var(--_to)) scaleY(var(--ts))}svg.f use:last-of-type{transform:translateY(var(--_to1)) scaleY(var(--ts1))}svg.f use:first-of-type{transform:translateY(var(--_to0)) scaleY(var(--ts0))}svg.v use{transform:translate(var(--to)) scaleX(var(--ts))}svg.v use:last-of-type{transform:translate(var(--to1)) scaleX(var(--ts1))}svg.v use:first-of-type{transform:translate(var(--to0)) scaleX(var(--ts0))}svg.v.f use{transform:translate(var(--_to)) scaleX(var(--ts))}svg.v.f use:last-of-type{transform:translate(var(--_to1)) scaleX(var(--ts1))}svg.v.f use:first-of-type{transform:translate(var(--_to0)) scaleX(var(--ts0))}svg text{fill:var(--lc);font:var(--f)}svg text:last-of-type{font:var(--f1);fill:var(--lc1)}svg text:first-of-type{font:var(--f0);fill:var(--lc0)}svg.h text{text-anchor:middle;dominant-baseline:text-before-edge;transform:translate(var(--li),var(--lo))}svg.h text:last-of-type{transform:translate(calc(var(--li1) - .3em),var(--lo1))}svg.h text:first-of-type{transform:translate(calc(var(--li0) + .3em),var(--lo0))}svg.h:not(.c) text:last-of-type{text-anchor:end}svg.h:not(.c) text:first-of-type{text-anchor:start}svg.h.f text{dominant-baseline:text-after-edge}svg.v text{text-anchor:start;dominant-baseline:central;transform:translate(calc(var(--lo) + .3em),var(--li))}svg.v text:last-of-type{transform:translate(calc(var(--lo) + .3em),calc(-1*var(--li1)))}svg.v text:first-of-type{transform:translate(calc(var(--lo) + .3em),calc(-1*var(--li0)))}svg.v:not(.c) text:last-of-type{dominant-baseline:text-before-edge}svg.v:not(.c) text:first-of-type{dominant-baseline:text-after-edge}svg.v:not(.c).f text:last-of-type{transform:translate(calc(var(--lo) - .3em),calc(-1*var(--li1)))}svg.v:not(.c).f text:first-of-type{transform:translate(calc(var(--lo) - .3em),calc(-1*var(--li0)))}svg.v.f text{text-anchor:end;transform:translate(calc(var(--lo) - .3em),var(--li))}";
var go = Object.defineProperty, yo = Object.getOwnPropertyDescriptor, Y = (e, t, r, n) => {
  for (var s = n > 1 ? void 0 : n ? yo(t, r) : t, o = e.length - 1, a; o >= 0; o--)
    (a = e[o]) && (s = (n ? a(t, r, s) : a(s)) || s);
  return n && s && go(t, r, s), s;
};
const Me = { attribute: !0, reflect: !0 }, $t = { type: Boolean, ...Me }, tt = { type: String, ...Me }, vo = { type: Number, ...Me };
let j = class extends Mt {
  render() {
    let {
      stops$: e,
      ticks$: t,
      labels$: r,
      before: n,
      after: s,
      vertical: o,
      klass: a
    } = po(this), i = o ? 1 : 0, c = o ? 0 : 1, l = o ? "translate(-1,1) rotate(-90)" : "", h = o ? "100%" : 0, u = o ? 0 : "100%", b = e == null ? void 0 : e.map(
      (A) => kt`<stop offset="${A[0]}" stop-color="${A[1]}"/>`
    ), m = t == null ? void 0 : t.map(
      (A) => kt`<use href="#tk" x="${o ? 0 : A}" y="${o ? A : 0}"/>`
    ), y = r == null ? void 0 : r.map(
      (A) => kt`<text x="${o ? null : A[0]}" y="${o ? A[0] : null}">${A[1]}</text>`
    );
    return Fr`<svg class="${a}">
<defs>
  <line id="tk" x1="0" y1="0" x2="${i}" y2="${c}"/>
  <linearGradient id="lg" gradientTransform="${l}">
  ${b}
  </linearGradient>
</defs>
${n ? kt`<rect class="b" fill="${n}"/>` : null}
<rect fill="url('#lg')" width="${h}" height="${u}" />
${s ? kt`<rect class="a" fill="${s}"/>` : null}
${m}
${y}
</svg>
    `;
  }
};
j.styles = er(`
  :host {
    display: block;
  }
  :host([hidden]) {
    display: none;
  }

  ${mo}`);
Y([
  B(tt)
], j.prototype, "colors", 2);
Y([
  B(tt)
], j.prototype, "labels", 2);
Y([
  B(tt)
], j.prototype, "ticks", 2);
Y([
  B(tt)
], j.prototype, "classes", 2);
Y([
  B($t)
], j.prototype, "vertical", 2);
Y([
  B($t)
], j.prototype, "reverse", 2);
Y([
  B($t)
], j.prototype, "flip", 2);
Y([
  B(tt)
], j.prototype, "before", 2);
Y([
  B(tt)
], j.prototype, "after", 2);
Y([
  B($t)
], j.prototype, "colorReverse", 2);
Y([
  B(tt)
], j.prototype, "colorMode", 2);
Y([
  B(vo)
], j.prototype, "colorGamma", 2);
Y([
  B($t)
], j.prototype, "colorCorrectLightness", 2);
Y([
  B(tt)
], j.prototype, "colorPadding", 2);
Y([
  B(tt)
], j.prototype, "colorClass", 2);
Y([
  B($t)
], j.prototype, "centeredEdgeLabels", 2);
j = Y([
  on("dv-scalebar")
], j);
export {
  j as DVscalebar
};
