# Colors

The [`colors`](/docs/colors) attribute manages the coloring of the main bar. Its functionality is primarily based on [chroma.js](https://www.npmjs.com/package/chroma-js), so you may want to check their [documentation](https://gka.github.io/chroma.js/) as well.

## No value

The [`colors`](/docs/colors) attribute without a value returns the [turbo](https://research.google/blog/turbo-an-improved-rainbow-colormap-for-visualization/) colormap, which is not included in chroma.js.

**Code**
```html{4}
<dv-scalebar colors></dv-scalebar>
```
**Result**
<dv-scalebar colors></dv-scalebar>

## Single value

When a single value is provided in the [`colors`](/docs/colors) attribute, the scale interpolates between white and that color.

**Note:** The `rgb` and `hsl` color formats use [space-separated notation](https://developer.mozilla.org/en-US/blog/css-color-module-level-4/#syntax_changes_for_color_functions). Commas are used to separate multiple values. Therefore, the legacy color notation with commas is not supported.

**Code**
```html{4}
<dv-scalebar colors="teal"></dv-scalebar>
<dv-scalebar colors="#4ea"></dv-scalebar>
<dv-scalebar colors="rgb(70 70 250 / .5)"></dv-scalebar>
<dv-scalebar colors="hsl(190 60% 50%)"></dv-scalebar>
```
**Result**
<dv-scalebar colors="teal"></dv-scalebar>
<dv-scalebar colors="#4ea"></dv-scalebar>
<dv-scalebar colors="rgb(70 70 250 / .5)"></dv-scalebar>
<dv-scalebar colors="hsl(190 60% 50%)"></dv-scalebar>

## Multiple values

To provide multiple colors, use a comma-separated list.

**Code**
```html{4}
<dv-scalebar colors="yellow,#008ae5"></dv-scalebar>
<dv-scalebar colors="yellow,red,black"></dv-scalebar>
```
**Result**
<dv-scalebar colors="yellow,#008ae5"></dv-scalebar>
<dv-scalebar colors="yellow,red,black"></dv-scalebar>

## Named Colormaps

You can also use the [ColorBrewer palettes](http://colorbrewer2.org/) as they are included in [chroma.js](https://github.com/gka/chroma.js/blob/main/src/colors/colorbrewer.js#L19-L59).

**Code**
```html{4}
<dv-scalebar colors="YlGnBu"></dv-scalebar>
<dv-scalebar colors="Spectral"></dv-scalebar>
<dv-scalebar colors="Viridis"></dv-scalebar>
```
**Result**
<dv-scalebar colors="YlGnBu"></dv-scalebar>
<dv-scalebar colors="Spectral"></dv-scalebar>
<dv-scalebar colors="Viridis"></dv-scalebar>
