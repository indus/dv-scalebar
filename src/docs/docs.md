# Getting Started

The scalebar component is cross-built as a framework-agnostic web component
created with [Lit](https://lit.dev/) and as a framework-specific
[Vue](https://vuejs.org/) component. The Lit version is compatible with any
framework, vanilla JS, or plain HTML, with a size of approximately
`69kB (26kB gzip)`. The Vue version, on the other hand, can only be used in
Vue projects but is lighter at around `51kB (20kB gzip)` and is more
versatile.

These sizes include dv-scalebar's only dependency,
[chroma.js](https://gka.github.io/chroma.js/)

#### Smaller builds without dependencies

For projects where chroma.js is already in use, builds of the scalebar component
that exclude this dependency are available. This reduces its size significantly,
to about `26kB (9kB gzip)` for the Lit version and `9kB (3kB gzip)` for the
Vue version.

## Installation

```sh
$ npm install dv-scalebar
```

## Lit <img class="fr" src="/logo_lit.svg" width="50px" />

The Lit version of the component is highly versatile and can be used in various environments; with or without a framework, and with or without a bundler. Typically, you only need to import the component in JavaScript...

``` JS
import "dv-scalebar/lit"
```
...and then use it in the HTML. 
``` HTML
<dv-scalebar colors labels ticks></dv-scalebar>
```

## Vue <img class="fr" src="/logo_vue.svg" width="50px" />


In Vue, the use of Single File Components (SFCs, or .vue files) is quite common. To use `dv-scalebar` in an SFC, import it in the `<script>` section before referencing it in the `<template>` or render function.

``` Vue
<script setup lang="ts">
import dvScalebar from "dv-scalebar/sfc"
//import dvScalebar from "dv-scalebar/vue"
//import "dv-scalebar/style.css"
</script>

<template>
  <dv-scalebar colors labels ticks/>
</template>
```
The `dv-scalebar/sfc` path targets an SFC version that uses TypeScript and includes scoped styles. Alternatively, you can import the pre-built Vue component from `dv-scalebar/vue` and separately import the style file.

### Reactivity
The following example demonstrates the binding of reactive variables to attributes of the scalebar component in Vue:

``` Vue
<script setup lang="ts">
import { ref } from 'vue';
import dvScalebar from 'dv-scalebar/sfc'

// calls a function periodiclly with a random integer
const intervalRandom = (fn: (r: number) => void, r: number, ms: number) =>
  setInterval(() => fn(Math.floor(Math.random() * r)), ms)

const COLORS = ["OrRd","PuBu","BuPu","BuGn","YlOr","YlGn","RdPu","YlGn"];

// reactive variables
const num = ref(0); 
const col = ref(COLORS[0]);

// run intervals
intervalRandom(r => num.value = r, 10, 500);
intervalRandom(r => col.value = COLORS[r], COLORS.length, 700);
</script>

<template>
  <dv-scalebar :colors="col" :ticks="num" labels />
</template>
```

The use of multiple attributes in the above example can be simplified with `v-bind` like so...

``` Vue
<template>
  <dv-scalebar v-bind={colors:col, ticks:num, labels:true} />
</template>
```

... or even with a single reactive object that contains properties for multiple attributes:

``` Vue
<script setup lang="ts">
/* .... */

// reactive variable
const sb = ref({colors:COLORS[0],ticks:0,labels:true}); 

// run intervals
intervalRandom(r => sb.value.ticks = r, 10, 500);
intervalRandom(r => sb.value.colors = COLORS[r], COLORS.length, 700);
</script>

<template>
  <dv-scalebar v-bind="sb"></dv-scalebar>
</template>
``` 


## JSFiddle
<iframe width="100%" height="300" src="//jsfiddle.net/ntewqy7a/embedded/html,result/dark/" frameborder="0" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe>