# Vertical

The boolean attribute [`vertical`](/docs/vertical) changes the layout of the scalebar. By default, the labels are positioned to the right, running from the top to the bottom of the scalebar.

**Code**
```html{4}
<dv-scalebar vertical colors="Viridis" labels="0,2,4,6,8,10" ticks="11"></dv-scalebar>
<dv-scalebar vertical colors="Viridis" labels="low,medium,high" classes ticks></dv-scalebar>
<dv-scalebar vertical colors="piYG" labels ticks="5"></dv-scalebar>
<dv-scalebar vertical colors="piYG" labels="min,-1σ,0,1σ,max" classes="0,.16,.5,.84,1" ticks></dv-scalebar>
```

**Result**
<div class="row">
<dv-scalebar vertical colors="Viridis" labels="0,2,4,6,8,10" ticks="11"></dv-scalebar>
<dv-scalebar vertical colors="Viridis" labels="low,medium,high" classes ticks></dv-scalebar>
<dv-scalebar vertical colors="piYG" labels ticks="5"></dv-scalebar>
<dv-scalebar vertical colors="piYG" labels="min,-1σ,0,1σ,max" classes="0,.16,.5,.84,1" ticks></dv-scalebar>
</div>
