# After

The attribute [`after`](/docs/after) accepts a single color string that adds a solid color square after the scalebar. In the default layout, the colored square is positioned next to the minimum, but it appears next to the maximum if the [`reverse`](/docs/reverse) attribute is set.

**Note:** The colored square overflows the scalebar container to ensure that the size of the main section remains the same. Additional clearance may be necessary.

**Code**
```html{4}
<dv-scalebar ticks></dv-scalebar>
<dv-scalebar after="hotpink" labels ticks="2"></dv-scalebar>

<dv-scalebar vertical ticks></dv-scalebar>
<dv-scalebar after="hotpink" vertical labels ticks="2"></dv-scalebar>
```

**Result**
<div class="row">
<div class="col">
<dv-scalebar ticks></dv-scalebar>
<dv-scalebar after="hotpink" labels ticks="2"></dv-scalebar>
<dv-scalebar after="hotpink" reverse labels ticks="2"></dv-scalebar>
</div>
<div class="row">
<dv-scalebar vertical ticks></dv-scalebar>
<dv-scalebar after="hotpink" vertical labels ticks="2"></dv-scalebar>
<dv-scalebar after="hotpink" reverse vertical labels ticks="2"></dv-scalebar>
</div>
</div>