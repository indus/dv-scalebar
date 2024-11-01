# Ticks

The [`ticks`](/docs/ticks) attribute adds ticks to the scalebar. You can either provide an integer value to set the number of evenly spaced ticks or specify specific positions for placing the ticks.

If the [`labels`](/docs/labels) or [`classes`](/docs/classes) attributes are already present, and the number and positions of ticks match those, you can simply add an empty [`ticks`](/docs/ticks) attribute.

## No value

The [`ticks`](/docs/ticks) attribute without a value adds a tick at the minimum and maximum values.

**Code**
```html{4}
<dv-scalebar colors="pink,teal" ticks></dv-scalebar>
```
**Result**
<dv-scalebar colors="pink,teal" ticks></dv-scalebar>

## Single value

A single integer value for the [`ticks`](/docs/ticks) attribute adds that number of ticks to the scalebar.

**Code**
```html{4}
<dv-scalebar colors="pink,teal" ticks="1"></dv-scalebar>
<dv-scalebar colors="pink,teal" ticks="3"></dv-scalebar>
<dv-scalebar colors="pink,teal" ticks="4"></dv-scalebar>
<dv-scalebar colors="pink,teal" ticks="15"></dv-scalebar>
```
**Result**
<dv-scalebar colors="pink,teal" ticks="1"></dv-scalebar>
<dv-scalebar colors="pink,teal" ticks="3"></dv-scalebar>
<dv-scalebar colors="pink,teal" ticks="4"></dv-scalebar>
<dv-scalebar colors="pink,teal" ticks="15"></dv-scalebar>

## Multiple values

Multiple values between 0 and 1 for the [`ticks`](/docs/ticks) attribute allow you to position them along the scalebar.

**Code**
```html{4}
<dv-scalebar colors="pink,teal" ticks="0,.4,.6,1"></dv-scalebar>
<dv-scalebar colors="pink,teal" ticks="0,.1,.3,.6,1"></dv-scalebar>
```
**Result**
<dv-scalebar colors="pink,teal" ticks="0,.4,.6,1"></dv-scalebar>
<dv-scalebar colors="pink,teal" ticks="0,.1,.3,.6,1"></dv-scalebar>