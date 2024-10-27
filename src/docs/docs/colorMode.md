# ColorMode

The value provided in the `colorMode` attribute is forwarded to [chroma.js](https://gka.github.io/chroma.js/#scale-mode) to change the interpolation between the provided colors.

**Code**
```html{4}
<dv-scalebar colors="yellow,navy"></dv-scalebar>
<dv-scalebar colors="yellow,navy" colorMode="lrgb"></dv-scalebar>
<dv-scalebar colors="yellow,navy" colorMode="lab"></dv-scalebar>
<dv-scalebar colors="yellow,navy" colorMode="hsl"></dv-scalebar>
<dv-scalebar colors="yellow,navy" colorMode="lch"></dv-scalebar>
```

**Result**
<dv-scalebar colors="yellow,navy"></dv-scalebar>
<dv-scalebar colors="yellow,navy" colorMode="lrgb"></dv-scalebar>
<dv-scalebar colors="yellow,navy" colorMode="lab"></dv-scalebar>
<dv-scalebar colors="yellow,navy" colorMode="hsl"></dv-scalebar>
<dv-scalebar colors="yellow,navy" colorMode="lch"></dv-scalebar>
