# Classes

The [`classes`](/docs/classes) attribute allows you to change the default continuous gradient of the scalebar into multiple stretches of uniform color. Typically, you can either provide an integer value to set the number of evenly spaced classes or specify exact positions where the class breaks should occur.

If the [`colors`](/docs/colors), [`labels`](/docs/labels) or  [`ticks`](/docs/ticks) attributes already specify the number and positions of classes, you can simply add an empty classes attribute.

## No value

An empty [`classes`](/docs/classes) attribute uses existing information (e.g., the number of colors) to define the class breaks.

**Code**
```html{4}
<dv-scalebar colors="orange,snow,teal" classes></dv-scalebar>
```

**Result**
<dv-scalebar colors="orange,snow,teal" classes></dv-scalebar>

## Single value

A single integer value for the [`classes`](/docs/classes) attribute defines that many classes on the scalebar.

**Code**
```html{4}
<dv-scalebar colors="orange,snow,teal" classes="2"></dv-scalebar>
<dv-scalebar colors="orange,snow,teal" classes="3"></dv-scalebar>
<dv-scalebar colors="orange,snow,teal" classes="4"></dv-scalebar>
<dv-scalebar colors="orange,snow,teal" classes="15"></dv-scalebar>
```

**Result**
<dv-scalebar colors="orange,snow,teal" classes="2"></dv-scalebar>
<dv-scalebar colors="orange,snow,teal" classes="3"></dv-scalebar>
<dv-scalebar colors="orange,snow,teal" classes="4"></dv-scalebar>
<dv-scalebar colors="orange,snow,teal" classes="15"></dv-scalebar>

## Multiple values

Multiple values between 0 and 1 for the [`classes`](/docs/classes) attribute allow you to position the class breaks along the scalebar.

**Code**
```html{4}
<dv-scalebar colors="orange,snow,teal" classes="0,.4,.6,1"></dv-scalebar>
<dv-scalebar colors="orange,snow,teal" classes="0,.1,.3,.6,1"></dv-scalebar>
```

**Result**
<dv-scalebar colors="orange,snow,teal" classes="0,.4,.6,1"></dv-scalebar>
<dv-scalebar colors="orange,snow,teal" classes="0,.1,.3,.6,1"></dv-scalebar>
