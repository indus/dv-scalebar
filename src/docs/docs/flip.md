# Flip

The boolean attribute `flip` is used to make the colorbar and the labels switch sides. In the default layout, the labels are positioned at the top, while they appear on the left for a vertical scalebar.

**Code**
```html{4}
<dv-scalebar flip colors="gray" labels ticks="5"></dv-scalebar>
<dv-scalebar flip colors="YlGn" labels="1,2,3,4" classes="0,.1,.3,.6,1" ticks></dv-scalebar>

<dv-scalebar flip vertical colors="gray" labels ticks="5"></dv-scalebar>
<dv-scalebar flip vertical colors="YlGn" labels="1,2,3,4" classes="0,.1,.3,.6,1" ticks></dv-scalebar>
```

**Result**
<div class="row">
<div class="col">
<dv-scalebar flip colors="gray" labels ticks="5"></dv-scalebar>
<dv-scalebar flip colors="YlGn" labels="1,2,3,4" classes="0,.1,.3,.6,1" ticks></dv-scalebar>
</div>
<div class="row">
<dv-scalebar flip vertical colors="gray" labels ticks="5"></dv-scalebar>
<dv-scalebar flip vertical colors="YlGn" labels="1,2,3,4" classes="0,.1,.3,.6,1" ticks></dv-scalebar>
</div>
</div>