# Reverse

The boolean attribute [`reverse`](/docs/reverse) is used to reverse the [`colors`](/docs/colors), [`labels`](/docs/labels), [`ticks`](/docs/ticks), and [`classes`](/docs/classes) of the scalebar. In a [`vertical`](/docs/vertical) layout, the values will run from top to bottom.

**Note:**
To only flip the colors the `colorReverse` attribute can be used.

**Code**
```html{4}
<dv-scalebar reverse colors="gray" labels ticks="5"></dv-scalebar>
<dv-scalebar reverse colors="RdPu" labels="1,2,3,4" classes="0,.1,.3,.6,1" ticks></dv-scalebar>

<dv-scalebar reverse vertical colors="gray" labels ticks="5"></dv-scalebar>
<dv-scalebar reverse vertical colors="RdPu" labels="1,2,3,4" classes="0,.1,.3,.6,1" ticks></dv-scalebar>
```

**Result**
<div class="row">
<div class="col">
<dv-scalebar reverse colors="gray" labels ticks="5"></dv-scalebar>
<dv-scalebar reverse colors="RdPu" labels="1,2,3,4" classes="0,.1,.3,.6,1" ticks></dv-scalebar>
</div>
<div class="row">
<dv-scalebar reverse vertical colors="gray" labels ticks="5"></dv-scalebar>
<dv-scalebar reverse vertical colors="RdPu" labels="1,2,3,4" classes="0,.1,.3,.6,1" ticks></dv-scalebar>
</div>
</div>