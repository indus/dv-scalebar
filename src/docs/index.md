---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "dv-scalebar"
  text: "comes in two flavours"
  tagline: As a framework-agnostic web component, <wbr>and as a Vue component with minimal overhead.
  actions:
    - theme: brand
      text: Getting Started
      link: /docs
    - theme: alt
      text: Usage
      link: /docs/usage
    - theme: alt
      text: ''
      link: /docs#lit
    - theme: alt
      text: ''
      link: /docs#vue

features:
  - title: Versatile
    details: The scalebar allows for <strong>vertical</strong> and <strong>horizontal</strong> usage. It scales <strong>responsive</strong> and allows <a href="/styling.html"><strong>styling</strong></a> via CSS variables.
  - title: Easy to use
    details: Reasonable defaults and internal matching of <a href="/docs/labels.html"><strong>colors</strong></a>, <a href="/docs/labels.html"><strong>labels</strong></a>, <a href="/docs/ticks.html"><strong>ticks</strong></a> and <a href="/docs/classes.html"><strong>classes</strong></a> keeps the configuration to a minimum.
  - title: Small(-ish)
    details: "The size of <strong>69kB (26kB gzip)</strong> can be lowered to <strong>26kB (9kB gzip)</strong> when chroma-js is externally available already."
---

<div class="feature">
<div class="row">
<div class="col">
<dv-scalebar colors="Viridis" labels="0,2,4,6,8,10" ticks="11"></dv-scalebar>
<dv-scalebar colors="Viridis" labels="low,medium,high" classes ticks></dv-scalebar>
<dv-scalebar colors="piYG" after="lightgray" labels ticks="5"></dv-scalebar>
<dv-scalebar colors="piYG" labels="min,-1σ,0,1σ,max" classes="0,.16,.5,.84,1" ticks></dv-scalebar>
</div>
<div class="row">
<dv-scalebar vertical colors="PuBuGn" labels ticks="0,.1,.3,.6,1"></dv-scalebar>
<dv-scalebar vertical colors="YlGnBu" labels="low,medium,high" classes="0,.16,.84,1" ticks></dv-scalebar>
<dv-scalebar vertical colors="BrBG" reverse labels="-80,-40,0,70,140" ticks="9"></dv-scalebar>
<dv-scalebar vertical colors="dodgerblue,orangered" reverse labels="6°,10°,20°,27°" ticks="0,.19,0.66,1" before after></dv-scalebar>
</div>
</div>
</div>
