# ColorClass

The `colorClass` attribute allows you to modify the colors used in a scalebar that also has the [`classes`](/docs/classes) attribute.

## Default

Without the `colorClass` attribute, the colors for the classes are taken from evenly spaced points along the color gradient, starting with the minimum color and ending with the maximum color. The positions of the classes do not affect their colors, only their number.

While this behavior ensures that the defined colors are displayed in the scalebar, it also means that classified and continuous scalebars placed next to each other may look quite different.


**Code**
```html{4}
<dv-scalebar colors="RdYlBu"></dv-scalebar>
<dv-scalebar colors="RdYlBu" classes="3"></dv-scalebar>
<dv-scalebar colors="RdYlBu" classes="0,.45,.55,1"></dv-scalebar>
<dv-scalebar colors="RdYlBu" classes="4"></dv-scalebar>
<dv-scalebar colors="RdYlBu" classes="0,.1,.3,.6,1"></dv-scalebar>
```

**Result**
<dv-scalebar colors="RdYlBu"></dv-scalebar>
<dv-scalebar colors="RdYlBu" classes="3"></dv-scalebar>
<dv-scalebar colors="RdYlBu" classes="0,.45,.55,1"></dv-scalebar>
<dv-scalebar colors="RdYlBu" classes="4"></dv-scalebar>
<dv-scalebar colors="RdYlBu" classes="0,.1,.3,.6,1"></dv-scalebar>

## Average

Setting the `colorClass` attribute to `average` assigns each class the average color of its stretch. This results in a much more similar appearance between classified and continuous scalebars.


**Code**
```html{4}
<dv-scalebar colors="RdYlBu"></dv-scalebar>
<dv-scalebar colors="RdYlBu" classes="3" colorClass="average"></dv-scalebar>
<dv-scalebar colors="RdYlBu" classes="0,.45,.55,1" colorClass="average"></dv-scalebar>
<dv-scalebar colors="RdYlBu" classes="4" colorClass="average"></dv-scalebar>
<dv-scalebar colors="RdYlBu" classes="0,.1,.3,.6,1" colorClass="average"></dv-scalebar>
```

**Result**
<dv-scalebar colors="RdYlBu"></dv-scalebar>
<dv-scalebar colors="RdYlBu" classes="3" colorClass="average"></dv-scalebar>
<dv-scalebar colors="RdYlBu" classes="0,.45,.55,1" colorClass="average"></dv-scalebar>
<dv-scalebar colors="RdYlBu" classes="4" colorClass="average"></dv-scalebar>
<dv-scalebar colors="RdYlBu" classes="0,.1,.3,.6,1" colorClass="average"></dv-scalebar>

## Equal

Setting the `colorClass` attribute to `equal` assigns each class the color of equidistant points on the gradient, excluding the colors at the extrema. The colors of the classes depend only on the number of classes, not their positions.

**Code**
```html{4}
<dv-scalebar colors="RdYlBu"></dv-scalebar>
<dv-scalebar colors="RdYlBu" classes="3" colorClass="equal"></dv-scalebar>
<dv-scalebar colors="RdYlBu" classes="0,.45,.55,1" colorClass="equal"></dv-scalebar>
<dv-scalebar colors="RdYlBu" classes="4" colorClass="equal"></dv-scalebar>
<dv-scalebar colors="RdYlBu" classes="0,.1,.3,.6,1" colorClass="equal"></dv-scalebar>
```

**Result**
<dv-scalebar colors="RdYlBu"></dv-scalebar>
<dv-scalebar colors="RdYlBu" classes="3" colorClass="equal"></dv-scalebar>
<dv-scalebar colors="RdYlBu" classes="0,.45,.55,1" colorClass="equal"></dv-scalebar>
<dv-scalebar colors="RdYlBu" classes="4" colorClass="equal"></dv-scalebar>
<dv-scalebar colors="RdYlBu" classes="0,.1,.3,.6,1" colorClass="equal"></dv-scalebar>


