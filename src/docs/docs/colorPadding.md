# ColorPadding

The value(s) in the `colorPadding` attribute are forwarded to [chroma.js](https://gka.github.io/chroma.js/#scale-padding) to trim a fraction of the colors. A single value applies padding to both sides, while two values allow for independent padding on each side.

**Code**
```html{4}
<dv-scalebar colors="RdYlBu"></dv-scalebar>
<dv-scalebar colors="RdYlBu" colorPadding="0.15"></dv-scalebar>
<dv-scalebar colors="RdYlBu" colorPadding="0.3"></dv-scalebar>
<dv-scalebar colors="RdYlBu" colorPadding="-0.15"></dv-scalebar>
<dv-scalebar colors="OrRd"></dv-scalebar>
<dv-scalebar colors="OrRd" colorPadding="0.2,0"></dv-scalebar>
```

**Result**
<dv-scalebar colors="RdYlBu"></dv-scalebar>
<dv-scalebar colors="RdYlBu" colorPadding="0.15"></dv-scalebar>
<dv-scalebar colors="RdYlBu" colorPadding="0.3"></dv-scalebar>
<dv-scalebar colors="RdYlBu" colorPadding="-0.15"></dv-scalebar>
<dv-scalebar colors="OrRd"></dv-scalebar>
<dv-scalebar colors="OrRd" colorPadding="0.2,0"></dv-scalebar>
