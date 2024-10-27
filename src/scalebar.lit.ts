import { html, LitElement, svg, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import type { PropertyDeclaration } from "lit";

import getProps from "./scalebar.core";

//@ts-ignore
import style from "./scalebar.css?inline";

const pd_common = { attribute: true, reflect: true };
const pd_boolen: PropertyDeclaration = { type: Boolean, ...pd_common };
const pd_string: PropertyDeclaration = { type: String, ...pd_common };
const pd_number: PropertyDeclaration = { type: Number, ...pd_common };


//@ts-ignore
@customElement("dv-scalebar")
export class DVscalebar extends LitElement {
  @property(pd_string) //pd_array_string
  colors?: string[] | string;
  @property(pd_string) //pd_array_string
  labels?: string[] | string;
  @property(pd_string) //pd_array_number
  ticks?: number[] | number;
  @property(pd_string) //pd_array_number
  classes?: number[] | number;
  @property(pd_boolen)
  vertical?: boolean;
  @property(pd_boolen)
  reverse?: boolean;
  @property(pd_boolen)
  flip?: boolean;
  @property(pd_string)
  //@ts-ignore
  before?: string;
  @property(pd_string)
  //@ts-ignore
  after?: string;
  @property(pd_boolen)
  colorReverse?: boolean;
  @property(pd_string)
  colorMode?: string;
  @property(pd_number)
  colorGamma?: number;
  @property(pd_boolen)
  colorCorrectLightness?: boolean;
  @property(pd_string) //pd_array_number
  colorPadding?: number[] | number;
  @property(pd_string)
  colorClass?: string;
  @property(pd_boolen)
  centeredEdgeLabels?: boolean;

  render() {
    let {
      stops$,
      ticks$,
      labels$,
      before,
      after,
      vertical: v,
      klass,
    } = getProps(this);

    let x2 = v ? 1 : 0;
    let y2 = v ? 0 : 1;
    let gT = v ? "translate(-1,1) rotate(-90)" : "";
    let w = v ? "100%" : 0;
    let h = v ? 0 : "100%";

    let stops = stops$?.map((s$) =>
      svg`<stop offset="${s$[0]}" stop-color="${s$[1]}"/>`
    );
    let ticks = ticks$?.map((t$) =>
      svg`<use href="#tk" x="${v ? 0 : t$}" y="${v ? t$ : 0}"/>`
    );
    let labels = labels$?.map((l$) =>
      svg`<text x="${v ? null : l$[0]}" y="${v ? l$[0] : null}">${l$[1]}</text>`
    );

    return html`<svg class="${klass}">
<defs>
  <line id="tk" x1="0" y1="0" x2="${x2}" y2="${y2}"/>
  <linearGradient id="lg" gradientTransform="${gT}">
  ${stops}
  </linearGradient>
</defs>
${before ? svg`<rect class="b" fill="${before}"/>` : null}
<rect fill="url('#lg')" width="${w}" height="${h}" />
${after ? svg`<rect class="a" fill="${after}"/>` : null}
${ticks}
${labels}
</svg>
    `;
  }

  static styles = unsafeCSS(`
  :host {
    display: block;
  }
  :host([hidden]) {
    display: none;
  }

  ${style}`);
}

declare global {
  interface HTMLElementTagNameMap {
    "dv-scalebar": DVscalebar;
  }
}
