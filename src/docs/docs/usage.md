# Usage

This page demonstrates some basic attributes that can be used to modify the scalebar component. For more detailed examples, refer to the sections in the side navigation.

## "Hello World" Example

Without any attributes, the scalebar renders as a simple grayscale gradient.

**Code**
```html{4}
<dv-scalebar></dv-scalebar>
```

**Result**
<dv-scalebar></dv-scalebar>


## "Real World" Examples

The scalebar can be enhanced with basic attributes such as [`colors`](/docs/colors), [`labels`](/docs/labels), [`ticks`](/docs/ticks), and [`classes`](/docs/classes), as well as layout properties like [`vertical`](/docs/vertical), [`reverse`](/docs/reverse), and [`before`](/docs/before)/[`after`](/docs/after).

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

**Result**

<div class="row">
<div class="col">
<dv-scalebar colors="Viridis" labels="0,2,4,6,8,10" ticks="11"></dv-scalebar>
<dv-scalebar colors="Viridis" labels="low,medium,high" classes ticks></dv-scalebar>
<dv-scalebar colors="piYG" before="slategray" labels ticks="5"></dv-scalebar>
<dv-scalebar colors="piYG" labels="min,-1σ,0,1σ,max" classes="0,.16,.5,.84,1" ticks></dv-scalebar>
</div>
<div class="row">
<dv-scalebar vertical colors="PuBuGn" labels ticks="0,.1,.3,.6,1"></dv-scalebar>
<dv-scalebar vertical colors="YlGnBu" labels="low,medium,high" classes="0,.16,.84,1" ticks></dv-scalebar>
<dv-scalebar vertical colors="BrBG" reverse labels="-80,-40,0,70,140" ticks="9"></dv-scalebar>
<dv-scalebar vertical colors="dodgerblue,orangered" reverse labels="6°,10°,20°,27°" ticks="0,.19,0.66,1" before after></dv-scalebar>
</div>
</div>

## Colors

**Code**
```html{4}
<dv-scalebar colors></dv-scalebar>
<dv-scalebar colors="teal"></dv-scalebar>
<dv-scalebar colors="rgb(70 100 250 / .5)"></dv-scalebar>
<dv-scalebar colors="yellow,red,black"></dv-scalebar>
<dv-scalebar colors="Viridis"></dv-scalebar>
```

**Result**
<dv-scalebar colors></dv-scalebar>
<dv-scalebar colors="teal"></dv-scalebar>
<dv-scalebar colors="rgb(70 100 250 / .5)"></dv-scalebar>
<dv-scalebar colors="yellow,red,black"></dv-scalebar>
<dv-scalebar colors="Viridis"></dv-scalebar>

[more Examples](/docs/colors)

## Labels

**Code**
```html{4}
<dv-scalebar colors="OrRd" labels></dv-scalebar>
<dv-scalebar colors="OrRd" labels="9"></dv-scalebar>
<dv-scalebar colors="OrRd" labels="zero,50,1e2"></dv-scalebar>
```

**Result**
<dv-scalebar colors="OrRd" labels></dv-scalebar>
<dv-scalebar colors="OrRd" labels="9"></dv-scalebar>
<dv-scalebar colors="OrRd" labels="zero,50,1e2"></dv-scalebar>

[more Examples](/docs/labels)

## Ticks

**Code**
```html{4}
<dv-scalebar colors="PuOr" ticks></dv-scalebar>
<dv-scalebar colors="PuOr" ticks="11"></dv-scalebar>
<dv-scalebar colors="PuOr" ticks="0,.1,.3,.6,1"></dv-scalebar>
```

**Result**
<dv-scalebar colors="PuOr" ticks></dv-scalebar>
<dv-scalebar colors="PuOr" ticks="11"></dv-scalebar>
<dv-scalebar colors="PuOr" ticks="0,.1,.3,.6,1"></dv-scalebar>

[more Examples](/docs/ticks)

## Classes

**Code**
```html{4}
<dv-scalebar colors="orange,snow,teal" classes></dv-scalebar>
<dv-scalebar colors="orange,snow,teal" classes="9"></dv-scalebar>
<dv-scalebar colors="orange,snow,teal" classes="0,.1,.3,.6,1"></dv-scalebar>
```

**Result**
<dv-scalebar colors="orange,snow,teal" classes></dv-scalebar>
<dv-scalebar colors="orange,snow,teal" classes="9"></dv-scalebar>
<dv-scalebar colors="orange,snow,teal" classes="0,.1,.3,.6,1"></dv-scalebar>

[more Examples](/docs/classes)

## More

This was a brief overview of the four most common attributes. They will be explained in more detail on the following pages, along with additional layout and color attributes. Use the navigation on the left (the "menu" on mobile) to jump to a specific section.


