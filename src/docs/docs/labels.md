# Labels

The [`labels`](/docs/labels) attribute adds labels to the scalebar. The default values for [`labels`](/docs/labels) range from 0 to 1, but you will probably want to use specific numbers or string values.

By default, labels are spaced evenly over the entire range of the scalebar. If the [`classes`](/docs/classes) or [`ticks`](/docs/ticks) attributes provide custom positions and their numbers match, those will be used.

## No Value

The [`labels`](/docs/labels) attribute without a value adds 0 and 1 as labels for the minimum and maximum values.

**Code**
```html{4}
<dv-scalebar colors="OrRd" labels></dv-scalebar>
```
**Result**
<dv-scalebar colors="OrRd" labels></dv-scalebar>

## Single value

A single value for the [`labels`](/docs/labels) attribute sets the label at the maximum of the scalebar.

**Code**
```html{4}
<dv-scalebar colors="OrRd" labels="100"></dv-scalebar>
<dv-scalebar colors="OrRd" labels="max"></dv-scalebar>
```
**Result**
<dv-scalebar colors="OrRd" labels="100"></dv-scalebar>
<dv-scalebar colors="OrRd" labels="max"></dv-scalebar>

## Multiple Values

Multiple values for the [`labels`](/docs/labels) attribute are spaced evenly, as long as no position information is provided by the [`classes`](/docs/classes) or [`ticks`](/docs/ticks) attributes.

**Code**
```html{4}
<dv-scalebar colors="OrRd" labels="min,max"></dv-scalebar>
<dv-scalebar colors="OrRd" labels="0,1,2"></dv-scalebar>
<dv-scalebar colors="OrRd" labels="zero,1,2,3"></dv-scalebar>
```
**Result**
<dv-scalebar colors="OrRd" labels="min,max"></dv-scalebar>
<dv-scalebar colors="OrRd" labels="0,1,2"></dv-scalebar>
<dv-scalebar colors="OrRd" labels="zero,1,2,3"></dv-scalebar>