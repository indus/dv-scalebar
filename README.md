# dv-scalebar
comes in two flavours -  
As a framework-agnostic web component, and as a Vue component with minimal overhead.

### [Documentation with live examples](https://dv-scalebar.js.org/)

## Getting Started

The scalebar component is cross-built as a framework-agnostic web component
created with [Lit](https://lit.dev/) and as a framework-specific
[Vue](https://vuejs.org/) component. The Lit version is compatible with any
framework, vanilla JS, or plain HTML, with a size of approximately
`69kB (26kB gzip)`. The Vue version, on the other hand, can only be used in
Vue projects but is lighter at around `51kB (20kB gzip)` and is more
versatile.

These sizes include dv-scalebar's only dependency,
[chroma.js](https://gka.github.io/chroma.js/)

##### Smaller builds without dependencies

For projects where chroma.js is already in use, builds of the scalebar component
that exclude this dependency are available. This reduces its size significantly,
to about `26kB (9kB gzip)` for the Lit version and `9kB (3kB gzip)` for the
Vue version.

### Intallation

```sh
$ npm install dv-scalebar
```

### Lit

The Lit version of the component is highly versatile and can be used in various environments; with or without a framework, and with or without a bundler. Typically, you only need to import the component in JavaScript...

``` JS
import "dv-scalebar/lit"
```
...and then use it in the HTML. 
``` HTML
<dv-scalebar colors labels ticks></dv-scalebar>
```

### Vue


In Vue, the use of Single File Components (SFCs, or .vue files) is quite common. To use `dv-scalebar` in an SFC, import it in the `<script>` section before referencing it in the `<template>` or render function.

The `dv-scalebar/sfc` path targets an SFC version that uses TypeScript and includes scoped styles. Alternatively, you can import the pre-built Vue component from `dv-scalebar/vue` and separately import the style file.


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
#### Reactivity
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

... or even with a single reactive configuration object:

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

## Usage

This page demonstrates some basic attributes that can be used to modify the scalebar component. For more detailed examples, refer to the sections in the side navigation.

### "Hello World" Example

Without any attributes, the scalebar renders as a simple grayscale gradient.

**Code**
```html{4}
<dv-scalebar></dv-scalebar>
```
[Results](https://dv-scalebar.js.org/docs/usage#hello-world-example)

### "Real World" Examples

The scalebar can be enhanced with basic attributes such as [`colors`](https://dv-scalebar.js.org/docs/colors), [`labels`](https://dv-scalebar.js.org/docs/labels), [`ticks`](https://dv-scalebar.js.org/docs/ticks), and [`classes`](https://dv-scalebar.js.org/docs/classes), as well as layout properties like [`vertical`](https://dv-scalebar.js.org/docs/vertical), [`reverse`](https://dv-scalebar.js.org/docs/reverse), and [`before`](https://dv-scalebar.js.org/docs/before)/[`after`](https://dv-scalebar.js.org/docs/after).

**Code**
```html{4}
<dv-scalebar colors="Viridis" labels="0,2,4,6,8,10" ticks="11"></dv-scalebar>
<dv-scalebar colors="Viridis" labels="low,medium,high" classes ticks></dv-scalebar>
<dv-scalebar colors="piYG" before="slategray" labels ticks="5"></dv-scalebar>
<dv-scalebar colors="piYG" labels="min,-1σ,0,1σ,max" classes="0,.16,.5,.84,1" ticks></dv-scalebar>

<dv-scalebar vertical colors="PuBuGn" labels ticks="0,.1,.3,.6,1"></dv-scalebar>
<dv-scalebar vertical colors="YlGnBu" labels="low,medium,high" classes="0,.16,.84,1" ticks></dv-scalebar>
<dv-scalebar vertical colors="BrBG" reverse labels="-80,-40,0,70,140" ticks="9"></dv-scalebar>
<dv-scalebar vertical colors="dodgerblue,orangered" reverse labels="6°,10°,20°,27°" ticks="0,.19,0.66,1" before after></dv-scalebar>
```
[Results](https://dv-scalebar.js.org/docs/usage#real-world-examples)

### Colors

**Code**
```html{4}
<dv-scalebar colors></dv-scalebar>
<dv-scalebar colors="teal"></dv-scalebar>
<dv-scalebar colors="rgb(70 100 250 / .5)"></dv-scalebar>
<dv-scalebar colors="yellow,red,black"></dv-scalebar>
<dv-scalebar colors="Viridis"></dv-scalebar>
```
[Results](https://dv-scalebar.js.org/docs/usage#colors)

### Labels

**Code**
```html{4}
<dv-scalebar colors="OrRd" labels></dv-scalebar>
<dv-scalebar colors="OrRd" labels="9"></dv-scalebar>
<dv-scalebar colors="OrRd" labels="zero,50,1e2"></dv-scalebar>
```
[Results](https://dv-scalebar.js.org/docs/usage#labels)

### Ticks

**Code**
```html{4}
<dv-scalebar colors="PuOr" ticks></dv-scalebar>
<dv-scalebar colors="PuOr" ticks="11"></dv-scalebar>
<dv-scalebar colors="PuOr" ticks="0,.1,.3,.6,1"></dv-scalebar>
```
[Results](https://dv-scalebar.js.org/docs/usage#ticks)

### Classes

**Code**
```html{4}
<dv-scalebar colors="orange,snow,teal" classes></dv-scalebar>
<dv-scalebar colors="orange,snow,teal" classes="9"></dv-scalebar>
<dv-scalebar colors="orange,snow,teal" classes="0,.1,.3,.6,1"></dv-scalebar>
```
[Results](https://dv-scalebar.js.org/docs/usage#classes)

### More

This was a brief overview of the four most common attributes. They are explained in more detail in the [Documentation](https://dv-scalebar.js.org/docs/), along with additional layout and color attributes. 