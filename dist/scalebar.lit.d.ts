import { LitElement } from 'lit';
export declare class DVscalebar extends LitElement {
    colors?: string[] | string;
    labels?: string[] | string;
    ticks?: number[] | number;
    classes?: number[] | number;
    vertical?: boolean;
    reverse?: boolean;
    flip?: boolean;
    before?: string;
    after?: string;
    colorReverse?: boolean;
    colorMode?: string;
    colorGamma?: number;
    colorCorrectLightness?: boolean;
    colorPadding?: number[] | number;
    colorClass?: string;
    centeredEdgeLabels?: boolean;
    render(): import('lit').TemplateResult<1>;
    static styles: import('lit').CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "dv-scalebar": DVscalebar;
    }
}
