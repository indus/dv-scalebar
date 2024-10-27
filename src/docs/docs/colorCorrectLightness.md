# ColorCorrectLightness

The boolean `colorCorrectLightness` attribute is forwarded to [chroma.js](https://gka.github.io/chroma.js/#scale-correctlightness) to ensure that the lightness range is distributed evenly across the colors.


**Code**
```html{4}
<dv-scalebar colors="black,red,yellow,white"></dv-scalebar>
<dv-scalebar colors="black,red,yellow,white" colorCorrectLightness></dv-scalebar>
```

**Result**
<dv-scalebar colors="black,red,yellow,white"></dv-scalebar>
<dv-scalebar colors="black,red,yellow,white" colorCorrectLightness></dv-scalebar>
