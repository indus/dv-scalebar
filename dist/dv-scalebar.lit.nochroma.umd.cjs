(function(h,k){typeof exports=="object"&&typeof module<"u"?k(exports,require("chroma-js")):typeof define=="function"&&define.amd?define(["exports","chroma-js"],k):(h=typeof globalThis<"u"?globalThis:h||self,k(h.Scalebar={},h.chroma))})(this,function(h,k){"use strict";/**
 * @license
 * https://github.com/indus/dist/blob/main/dv-scalebar.lit.nochroma.licence.txt
 *//**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Tt;const q=globalThis,Q=q.ShadowRoot&&(q.ShadyCSS===void 0||q.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ft=Symbol(),pt=new WeakMap;let Nt=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==ft)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Q&&t===void 0){const s=e!==void 0&&e.length===1;s&&(t=pt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&pt.set(e,t))}return t}toString(){return this.cssText}};const vt=i=>new Nt(typeof i=="string"?i:i+"",void 0,ft),Dt=(i,t)=>{if(Q)i.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const s=document.createElement("style"),r=q.litNonce;r!==void 0&&s.setAttribute("nonce",r),s.textContent=e.cssText,i.appendChild(s)}},ut=Q?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return vt(e)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Mt,defineProperty:Ht,getOwnPropertyDescriptor:Rt,getOwnPropertyNames:Vt,getOwnPropertySymbols:Lt,getPrototypeOf:jt}=Object,x=globalThis,$t=x.trustedTypes,Yt=$t?$t.emptyScript:"",tt=x.reactiveElementPolyfillSupport,H=(i,t)=>i,X={toAttribute(i,t){switch(t){case Boolean:i=i?Yt:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},et=(i,t)=>!Mt(i,t),yt={attribute:!0,type:String,converter:X,reflect:!1,hasChanged:et};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),x.litPropertyMetadata??(x.litPropertyMetadata=new WeakMap);let z=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=yt){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),r=this.getPropertyDescriptor(t,s,e);r!==void 0&&Ht(this.prototype,t,r)}}static getPropertyDescriptor(t,e,s){const{get:r,set:o}=Rt(this.prototype,t)??{get(){return this[e]},set(a){this[e]=a}};return{get(){return r==null?void 0:r.call(this)},set(a){const l=r==null?void 0:r.call(this);o.call(this,a),this.requestUpdate(t,l,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??yt}static _$Ei(){if(this.hasOwnProperty(H("elementProperties")))return;const t=jt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(H("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(H("properties"))){const e=this.properties,s=[...Vt(e),...Lt(e)];for(const r of s)this.createProperty(r,e[r])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[s,r]of e)this.elementProperties.set(s,r)}this._$Eh=new Map;for(const[e,s]of this.elementProperties){const r=this._$Eu(e,s);r!==void 0&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const r of s)e.unshift(ut(r))}else t!==void 0&&e.push(ut(t));return e}static _$Eu(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Dt(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostConnected)==null?void 0:s.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostDisconnected)==null?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EC(t,e){var o;const s=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,s);if(r!==void 0&&s.reflect===!0){const a=(((o=s.converter)==null?void 0:o.toAttribute)!==void 0?s.converter:X).toAttribute(e,s.type);this._$Em=t,a==null?this.removeAttribute(r):this.setAttribute(r,a),this._$Em=null}}_$AK(t,e){var o;const s=this.constructor,r=s._$Eh.get(t);if(r!==void 0&&this._$Em!==r){const a=s.getPropertyOptions(r),l=typeof a.converter=="function"?{fromAttribute:a.converter}:((o=a.converter)==null?void 0:o.fromAttribute)!==void 0?a.converter:X;this._$Em=r,this[r]=l.fromAttribute(e,a.type),this._$Em=null}}requestUpdate(t,e,s){if(t!==void 0){if(s??(s=this.constructor.getPropertyOptions(t)),!(s.hasChanged??et)(this[t],e))return;this.P(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,s){this._$AL.has(t)||this._$AL.set(t,e),s.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,a]of this._$Ep)this[o]=a;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[o,a]of r)a.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.P(o,this[o],a)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(s=this._$EO)==null||s.forEach(r=>{var o;return(o=r.hostUpdate)==null?void 0:o.call(r)}),this.update(e)):this._$EU()}catch(r){throw t=!1,this._$EU(),r}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(s=>{var r;return(r=s.hostUpdated)==null?void 0:r.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}};z.elementStyles=[],z.shadowRootOptions={mode:"open"},z[H("elementProperties")]=new Map,z[H("finalized")]=new Map,tt==null||tt({ReactiveElement:z}),(x.reactiveElementVersions??(x.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const R=globalThis,F=R.trustedTypes,gt=F?F.createPolicy("lit-html",{createHTML:i=>i}):void 0,mt="$lit$",P=`lit$${Math.random().toFixed(9).slice(2)}$`,_t="?"+P,It=`<${_t}>`,T=document,V=()=>T.createComment(""),L=i=>i===null||typeof i!="object"&&typeof i!="function",st=Array.isArray,Bt=i=>st(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",rt=`[ 	
\f\r]`,j=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,bt=/-->/g,At=/>/g,U=RegExp(`>|${rt}(?:([^\\s"'>=/]+)(${rt}*=${rt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),St=/'/g,Et=/"/g,wt=/^(?:script|style|textarea|title)$/i,xt=i=>(t,...e)=>({_$litType$:i,strings:t,values:e}),Wt=xt(1),Y=xt(2),N=Symbol.for("lit-noChange"),$=Symbol.for("lit-nothing"),Pt=new WeakMap,O=T.createTreeWalker(T,129);function Ct(i,t){if(!st(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return gt!==void 0?gt.createHTML(t):t}const qt=(i,t)=>{const e=i.length-1,s=[];let r,o=t===2?"<svg>":t===3?"<math>":"",a=j;for(let l=0;l<e;l++){const n=i[l];let d,f,c=-1,_=0;for(;_<n.length&&(a.lastIndex=_,f=a.exec(n),f!==null);)_=a.lastIndex,a===j?f[1]==="!--"?a=bt:f[1]!==void 0?a=At:f[2]!==void 0?(wt.test(f[2])&&(r=RegExp("</"+f[2],"g")),a=U):f[3]!==void 0&&(a=U):a===U?f[0]===">"?(a=r??j,c=-1):f[1]===void 0?c=-2:(c=a.lastIndex-f[2].length,d=f[1],a=f[3]===void 0?U:f[3]==='"'?Et:St):a===Et||a===St?a=U:a===bt||a===At?a=j:(a=U,r=void 0);const b=a===U&&i[l+1].startsWith("/>")?" ":"";o+=a===j?n+It:c>=0?(s.push(d),n.slice(0,c)+mt+n.slice(c)+P+b):n+P+(c===-2?l:b)}return[Ct(i,o+(i[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]};class I{constructor({strings:t,_$litType$:e},s){let r;this.parts=[];let o=0,a=0;const l=t.length-1,n=this.parts,[d,f]=qt(t,e);if(this.el=I.createElement(d,s),O.currentNode=this.el.content,e===2||e===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(r=O.nextNode())!==null&&n.length<l;){if(r.nodeType===1){if(r.hasAttributes())for(const c of r.getAttributeNames())if(c.endsWith(mt)){const _=f[a++],b=r.getAttribute(c).split(P),S=/([.?@])?(.*)/.exec(_);n.push({type:1,index:o,name:S[2],strings:b,ctor:S[1]==="."?Ft:S[1]==="?"?Gt:S[1]==="@"?Jt:G}),r.removeAttribute(c)}else c.startsWith(P)&&(n.push({type:6,index:o}),r.removeAttribute(c));if(wt.test(r.tagName)){const c=r.textContent.split(P),_=c.length-1;if(_>0){r.textContent=F?F.emptyScript:"";for(let b=0;b<_;b++)r.append(c[b],V()),O.nextNode(),n.push({type:2,index:++o});r.append(c[_],V())}}}else if(r.nodeType===8)if(r.data===_t)n.push({type:2,index:o});else{let c=-1;for(;(c=r.data.indexOf(P,c+1))!==-1;)n.push({type:7,index:o}),c+=P.length-1}o++}}static createElement(t,e){const s=T.createElement("template");return s.innerHTML=t,s}}function D(i,t,e=i,s){var a,l;if(t===N)return t;let r=s!==void 0?(a=e._$Co)==null?void 0:a[s]:e._$Cl;const o=L(t)?void 0:t._$litDirective$;return(r==null?void 0:r.constructor)!==o&&((l=r==null?void 0:r._$AO)==null||l.call(r,!1),o===void 0?r=void 0:(r=new o(i),r._$AT(i,e,s)),s!==void 0?(e._$Co??(e._$Co=[]))[s]=r:e._$Cl=r),r!==void 0&&(t=D(i,r._$AS(i,t.values),r,s)),t}class Xt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,r=((t==null?void 0:t.creationScope)??T).importNode(e,!0);O.currentNode=r;let o=O.nextNode(),a=0,l=0,n=s[0];for(;n!==void 0;){if(a===n.index){let d;n.type===2?d=new B(o,o.nextSibling,this,t):n.type===1?d=new n.ctor(o,n.name,n.strings,this,t):n.type===6&&(d=new Kt(o,this,t)),this._$AV.push(d),n=s[++l]}a!==(n==null?void 0:n.index)&&(o=O.nextNode(),a++)}return O.currentNode=T,r}p(t){let e=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class B{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,s,r){this.type=2,this._$AH=$,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=r,this._$Cv=(r==null?void 0:r.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=D(this,t,e),L(t)?t===$||t==null||t===""?(this._$AH!==$&&this._$AR(),this._$AH=$):t!==this._$AH&&t!==N&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Bt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==$&&L(this._$AH)?this._$AA.nextSibling.data=t:this.T(T.createTextNode(t)),this._$AH=t}$(t){var o;const{values:e,_$litType$:s}=t,r=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=I.createElement(Ct(s.h,s.h[0]),this.options)),s);if(((o=this._$AH)==null?void 0:o._$AD)===r)this._$AH.p(e);else{const a=new Xt(r,this),l=a.u(this.options);a.p(e),this.T(l),this._$AH=a}}_$AC(t){let e=Pt.get(t.strings);return e===void 0&&Pt.set(t.strings,e=new I(t)),e}k(t){st(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,r=0;for(const o of t)r===e.length?e.push(s=new B(this.O(V()),this.O(V()),this,this.options)):s=e[r],s._$AI(o),r++;r<e.length&&(this._$AR(s&&s._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,e);t&&t!==this._$AB;){const r=t.nextSibling;t.remove(),t=r}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class G{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,r,o){this.type=1,this._$AH=$,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=$}_$AI(t,e=this,s,r){const o=this.strings;let a=!1;if(o===void 0)t=D(this,t,e,0),a=!L(t)||t!==this._$AH&&t!==N,a&&(this._$AH=t);else{const l=t;let n,d;for(t=o[0],n=0;n<o.length-1;n++)d=D(this,l[s+n],e,n),d===N&&(d=this._$AH[n]),a||(a=!L(d)||d!==this._$AH[n]),d===$?t=$:t!==$&&(t+=(d??"")+o[n+1]),this._$AH[n]=d}a&&!r&&this.j(t)}j(t){t===$?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Ft extends G{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===$?void 0:t}}class Gt extends G{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==$)}}class Jt extends G{constructor(t,e,s,r,o){super(t,e,s,r,o),this.type=5}_$AI(t,e=this){if((t=D(this,t,e,0)??$)===N)return;const s=this._$AH,r=t===$&&s!==$||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==$&&(s===$||r);r&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class Kt{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){D(this,t)}}const it=R.litHtmlPolyfillSupport;it==null||it(I,B),(R.litHtmlVersions??(R.litHtmlVersions=[])).push("3.2.1");const Zt=(i,t,e)=>{const s=(e==null?void 0:e.renderBefore)??t;let r=s._$litPart$;if(r===void 0){const o=(e==null?void 0:e.renderBefore)??null;s._$litPart$=r=new B(t.insertBefore(V(),o),o,void 0,e??{})}return r._$AI(i),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let W=class extends z{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Zt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return N}};W._$litElement$=!0,W.finalized=!0,(Tt=globalThis.litElementHydrateSupport)==null||Tt.call(globalThis,{LitElement:W});const at=globalThis.litElementPolyfillSupport;at==null||at({LitElement:W}),(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Qt=i=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(i,t)}):customElements.define(i,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const te={attribute:!0,type:String,converter:X,reflect:!1,hasChanged:et},ee=(i=te,t,e)=>{const{kind:s,metadata:r}=e;let o=globalThis.litPropertyMetadata.get(r);if(o===void 0&&globalThis.litPropertyMetadata.set(r,o=new Map),o.set(e.name,i),s==="accessor"){const{name:a}=e;return{set(l){const n=t.get.call(this);t.set.call(this,l),this.requestUpdate(a,n,i)},init(l){return l!==void 0&&this.P(a,void 0,i),l}}}if(s==="setter"){const{name:a}=e;return function(l){const n=this[a];t.call(this,l),this.requestUpdate(a,n,i)}}throw Error("Unsupported decorator location: "+s)};function g(i){return(t,e)=>typeof e=="object"?ee(i,t,e):((s,r,o)=>{const a=r.hasOwnProperty(o);return r.constructor.createProperty(o,a?{...s,wrapped:!0}:s),a?Object.getOwnPropertyDescriptor(r,o):void 0})(i,t,e)}const kt=42,se=["#30123b","#4145ab","#4675ed","#39a2fc","#1bcfd4","#24eca6","#61fc6c","#a4fc3b","#d1e834","#f3c63a","#fe9b2d","#f36315","#d93806","#b11901","#7a0402"],re=[0,.071,.143,.214,.286,.357,.429,.5,.571,.643,.714,.786,.857,.929,1],ot=(i,t=0)=>Array.isArray(i)?i:Number.isInteger(i)?Array(i+t).fill(i+t-1).map((e,s)=>s/Math.max(e,1)):(console.warn("expected prop to be 'number[]' or 'int'",i),[]),nt=(i,t)=>((t?1-i:i)*100).toFixed(2)+"%",lt=(i,t,e=t,s=!1)=>[nt(t),i(s?1-e:e).hex()],E=(i,t=!1)=>{if(i===""||i===!0)return!0;if(!i)return;let e=typeof i=="string"||i instanceof String?i.startsWith("[")?JSON.parse(i):i.split(","):Array.isArray(i)?[...i]:[i];return t&&(e=e==null?void 0:e.map(s=>s==""||isNaN(s)?s:+s)),e.length>1?e:e[0]},ie=i=>{let{colors:t,labels:e,ticks:s,classes:r,vertical:o,reverse:a,flip:l,before:n,after:d,colorReverse:f,colorMode:c,colorGamma:_,colorCorrectLightness:b,colorPadding:S,colorClass:ht,centeredEdgeLabels:m}=i;t=E(t),e=E(e),s=E(s,!0),r=E(r,!0),S=E(S,!0),o=E(o),l=E(l),f=E(f),b=E(b),e===!0&&(Array.isArray(s)?e=[...s]:Array.isArray(r)&&(e=[...r])),a^o&&(Array.isArray(s)&&(s=s.reverse().map(v=>1-v)),Array.isArray(r)&&(r=r.reverse().map(v=>1-v)));let A=null,dt=null,J=null,Ut=null;r===!0&&(s?r=Array.isArray(s)?s:s-1:Array.isArray(e)?r=e==null?void 0:e.length:Array.isArray(t)&&(r=t==null?void 0:t.length));let p;if(t===!0?p=k.scale(se).domain(re):t===void 0?t=["#fff","#000"]:Array.isArray(t)||(t=k.brewer[t]||["#fff",t]),t!==!0&&a^o&&(t=[...t].reverse()),p=p||k.scale(t),c&&(p=p.mode(c)),_&&(p=p.gamma(_)),b&&(p=p.correctLightness()),S&&(p=p.padding(S)),r)switch(ht){case"average":p=p.domain([0,1]);break;case"equal":Array.isArray(r)||(r=ot(r,1)),p=p.classes([0,...r,1]);break;default:p=p.classes(r);break}if(n===""&&(n=p(o?1:0).hex()),d===""&&(d=p(o?0:1).hex()),!r||Number(r)<=1)dt=Array(kt).fill(kt-1).map((v,u)=>lt(p,u/v,u/v,f));else{let v=ot(r,1);if(Array.isArray(v)){let u=v.length-1;dt=v.reduce((C,K,Z,ce)=>{let Ot=ce[Z+1],zt=(K+Ot)/2;return Z<u&&Z&&C.push(lt(p,K,zt,f)),Z<u-1&&C.push(lt(p,Ot,zt,f)),C},[]),A=v}}if(s!==void 0){s===!0&&(Array.isArray(A)?s=A:Array.isArray(e)?s=e.length:s=2);let v=ot(s);Array.isArray(v)&&(J=v.map(u=>nt(u,o)),A=A||v,a^o&&(J=J.reverse()))}if(e!==void 0){if(e===!0)if(A){let u=A.length-(r?1:0);e=Array(u).fill(Math.max(u-1,1)).map((C,K)=>`${parseFloat((K/C).toFixed(2))}`)}else e=["0","1"];Array.isArray(e)||(e=["0",e]),a^o&&Array.isArray(e)&&(e=e.reverse());let v;switch(A&&e.length-A.length){case 0:v=u=>A[u],m=!1;break;case-1:v=u=>(A[u]+A[u+1])/2,m=!0;break;default:e.length>1?(v=u=>u/(e.length-1),m=!1):(v=()=>.5,m=!0);break}Ut=e.map((u,C)=>[nt(o?1-v(C):v(C)),u])}return{stops$:dt,ticks$:J,labels$:Ut,before:n,after:d,vertical:o,klass:`dv-sb${n?" b":""}${d?" a":""}${l?" f":""}${o?" v":" h"}${m?" c":""}`}},ae=".dv-sb{--s: var(--scalebar-size, 14);--f: var(--label-font, calc(var(--bz) * .9) monospace);--f0: var(--label-font0, var(--f));--f1: var(--label-font1, var(--f0));--sz: var(--container-size, calc(var(--s) * 2px));--bz: var(--bar-size, calc(var(--sz) / 2));--bo: var(--bar-offset);--tc: var(--tick-color, currentColor);--tc0: var(--tick-color0, var(--tc));--tc1: var(--tick-color1, var(--tc0));--tw: var(--tick-width, 2px);--tw0: var(--tick-width0, var(--tw));--tw1: var(--tick-width1, var(--tw0));--ts: var(--tick-size, var(--s));--ts0: var(--tick-size0, calc(var(--ts) * 1.7));--ts1: var(--tick-size1, var(--ts0));--to: var(--tick-offset, 0px);--to0: var(--tick-offset0, var(--to));--to1: var(--tick-offset1, var(--to0));--lc: var(--label-color, currentColor);--lc0: var(--label-color0, var(--lc));--lc1: var(--label-color1, var(--lc0));--lo: var(--label-offset, var(--bz));--lo0: var(--label-offset0, var(--lo));--lo1: var(--label-offset1, var(--lo0));--li: var(--label-indent, 0px);--li0: var(--label-indent0, var(--li));--li1: var(--label-indent1, calc(var(--li0) * -1));--_: calc(var(--sz) - var(--bz));--_to: calc((var(--to)*-1) + (var(--sz) - var(--ts)*1px));--_to0: calc((var(--to0)*-1) + (var(--sz) - var(--ts0)*1px));--_to1: calc((var(--to1)*-1) + (var(--_to0)))}svg{overflow:visible;width:100%;height:var(--sz)}svg rect{width:100%;height:var(--bz);transform:translateY(var(--bo))}svg rect.b{transform:translate(calc(var(--bz)*-1))}svg rect.a{transform:translate(100%)}svg.f rect{transform:translateY(var(--bo, var(--_)))}svg.v{width:var(--sz);height:100%}svg.v rect{width:var(--bz);height:100%;transform:translate(var(--bo))}svg.v rect.b{transform:translateY(calc(var(--bz)*-1))}svg.v rect.a{transform:translateY(100%)}svg.f.v rect{transform:translate(var(--bo, var(--_)))}svg rect.b,svg rect.a{height:var(--bz);width:var(--bz)}svg use{stroke:var(--tc);stroke-width:var(--tw);transform:translateY(var(--to)) scaleY(var(--ts))}svg use:first-of-type{stroke:var(--tc0);stroke-width:var(--tw0)}svg use:last-of-type{stroke:var(--tc1);stroke-width:var(--tw1)}svg use:last-of-type{transform:translateY(var(--to1)) scaleY(var(--ts1))}svg use:first-of-type{transform:translateY(var(--to0)) scaleY(var(--ts0))}svg.f use{transform:translateY(var(--_to)) scaleY(var(--ts))}svg.f use:last-of-type{transform:translateY(var(--_to1)) scaleY(var(--ts1))}svg.f use:first-of-type{transform:translateY(var(--_to0)) scaleY(var(--ts0))}svg.v use{transform:translate(var(--to)) scaleX(var(--ts))}svg.v use:last-of-type{transform:translate(var(--to1)) scaleX(var(--ts1))}svg.v use:first-of-type{transform:translate(var(--to0)) scaleX(var(--ts0))}svg.v.f use{transform:translate(var(--_to)) scaleX(var(--ts))}svg.v.f use:last-of-type{transform:translate(var(--_to1)) scaleX(var(--ts1))}svg.v.f use:first-of-type{transform:translate(var(--_to0)) scaleX(var(--ts0))}svg text{fill:var(--lc);font:var(--f)}svg text:last-of-type{font:var(--f1);fill:var(--lc1)}svg text:first-of-type{font:var(--f0);fill:var(--lc0)}svg.h text{text-anchor:middle;dominant-baseline:text-before-edge;transform:translate(var(--li),var(--lo))}svg.h text:last-of-type{transform:translate(calc(var(--li1) - .3em),var(--lo1))}svg.h text:first-of-type{transform:translate(calc(var(--li0) + .3em),var(--lo0))}svg.h:not(.c) text:last-of-type{text-anchor:end}svg.h:not(.c) text:first-of-type{text-anchor:start}svg.h.f text{dominant-baseline:text-after-edge}svg.v text{text-anchor:start;dominant-baseline:central;transform:translate(calc(var(--lo) + .3em),var(--li))}svg.v text:last-of-type{transform:translate(calc(var(--lo) + .3em),calc(-1*var(--li1)))}svg.v text:first-of-type{transform:translate(calc(var(--lo) + .3em),calc(-1*var(--li0)))}svg.v:not(.c) text:last-of-type{dominant-baseline:text-before-edge}svg.v:not(.c) text:first-of-type{dominant-baseline:text-after-edge}svg.v:not(.c).f text:last-of-type{transform:translate(calc(var(--lo) - .3em),calc(-1*var(--li1)))}svg.v:not(.c).f text:first-of-type{transform:translate(calc(var(--lo) - .3em),calc(-1*var(--li0)))}svg.v.f text{text-anchor:end;transform:translate(calc(var(--lo) - .3em),var(--li))}";var oe=Object.defineProperty,ne=Object.getOwnPropertyDescriptor,y=(i,t,e,s)=>{for(var r=s>1?void 0:s?ne(t,e):t,o=i.length-1,a;o>=0;o--)(a=i[o])&&(r=(s?a(t,e,r):a(r))||r);return s&&r&&oe(t,e,r),r};const ct={attribute:!0,reflect:!0},M={type:Boolean,...ct},w={type:String,...ct},le={type:Number,...ct};h.DVscalebar=class extends W{render(){let{stops$:t,ticks$:e,labels$:s,before:r,after:o,vertical:a,klass:l}=ie(this),n=a?1:0,d=a?0:1,f=a?"translate(-1,1) rotate(-90)":"",c=a?"100%":0,_=a?0:"100%",b=t==null?void 0:t.map(m=>Y`<stop offset="${m[0]}" stop-color="${m[1]}"/>`),S=e==null?void 0:e.map(m=>Y`<use href="#tk" x="${a?0:m}" y="${a?m:0}"/>`),ht=s==null?void 0:s.map(m=>Y`<text x="${a?null:m[0]}" y="${a?m[0]:null}">${m[1]}</text>`);return Wt`<svg class="${l}">
<defs>
  <line id="tk" x1="0" y1="0" x2="${n}" y2="${d}"/>
  <linearGradient id="lg" gradientTransform="${f}">
  ${b}
  </linearGradient>
</defs>
${r?Y`<rect class="b" fill="${r}"/>`:null}
<rect fill="url('#lg')" width="${c}" height="${_}" />
${o?Y`<rect class="a" fill="${o}"/>`:null}
${S}
${ht}
</svg>
    `}},h.DVscalebar.styles=vt(`
  :host {
    display: block;
  }
  :host([hidden]) {
    display: none;
  }

  ${ae}`),y([g(w)],h.DVscalebar.prototype,"colors",2),y([g(w)],h.DVscalebar.prototype,"labels",2),y([g(w)],h.DVscalebar.prototype,"ticks",2),y([g(w)],h.DVscalebar.prototype,"classes",2),y([g(M)],h.DVscalebar.prototype,"vertical",2),y([g(M)],h.DVscalebar.prototype,"reverse",2),y([g(M)],h.DVscalebar.prototype,"flip",2),y([g(w)],h.DVscalebar.prototype,"before",2),y([g(w)],h.DVscalebar.prototype,"after",2),y([g(M)],h.DVscalebar.prototype,"colorReverse",2),y([g(w)],h.DVscalebar.prototype,"colorMode",2),y([g(le)],h.DVscalebar.prototype,"colorGamma",2),y([g(M)],h.DVscalebar.prototype,"colorCorrectLightness",2),y([g(w)],h.DVscalebar.prototype,"colorPadding",2),y([g(w)],h.DVscalebar.prototype,"colorClass",2),y([g(M)],h.DVscalebar.prototype,"centeredEdgeLabels",2),h.DVscalebar=y([Qt("dv-scalebar")],h.DVscalebar),Object.defineProperty(h,Symbol.toStringTag,{value:"Module"})});
