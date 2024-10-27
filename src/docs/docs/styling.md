# Styling

Styling of the scalebar component is possible through CSS variables. Because the
component renders as an SVG with visible overflow, ensure that all elements
remain within the component’s container or apply suitable margins.

## CSS Variables

| <div style="width:140px">Variable</div> | Description                                                                     |                 <div style="width:170px">Default</div>                  |
| :-------------------------------------: | :------------------------------------------------------------------------------ | :---------------------------------------------------------------------: |
|            `--scalebar-size`            | A unitless scaling factor for the colorbar and labels (equal to pixel)          |                                 **14**                                  |
|           `--container-size`            | Height of the scalebar container in horizontal layout; width in vertical layout |    **28px**<br> <small>[_`--scalebar-size`&nbsp;*&nbsp;2px_]</small>    |
|              `--bar-size`               | Height of the colorbar in horizontal layout; width in vertical layout           |    **14px**<br> <small>[_`--container-size`&nbsp;/&nbsp;2_]</small>     |
|             `--bar-offset`              | Offset applied to the labels                                                    |                                 **0px**                                 |
|           `*` `--tick-color`            | Color of the ticks                                                              |                            **currentColor**                             |  
|           `*` `--tick-blend`            | Blend-mode of the ticks                                                              |                            **normal**                             |
|           `*` `--tick-width`            | Width of the ticks                                                              |                                 **2px**                                 |
|            `*` `--tick-size`            | Size of the ticks                                                               |            **14**<br> <small>[_`--container-size`_]</small>             |
|           `*` `--tick-offset`           | Offset applied to the ticks                                                     |                                 **0px**                                 |
|           `*` `--label-color`           | Color of the labels                                                             |                             **currentColor**                             | 
|           `*` `--label-blend`           | Blend-mode of the labels                                                             |                            **normal**                             |
|          `*` `--label-offset`           | Offset applied to the labels                                                    |            **14px**<br> <small>[_`--barsize-size`_]</small>             |
|          `*` `--label-indent`           | Indent applied to the labels                                                    |                                 **0px**                                 |
|           `*` `--label-font`            | Font for labels in shorthand notation                                           | **12.6px monospace**<br><small>[_`--bar-size`&nbsp;*&nbsp;0.9_]</small> |

| All variables marked with an `*` allow you to style the first and/or last element by adding `0` or `1` as a suffix to the CSS variable name. For example, `--tick-color0` changes the color of the first tick, while `--tick-color1` changes only the color of the last tick. By using both, you can style them independently. |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |

## Examples

<style>
    :root {
        --bg:var(--vp-c-bg);
    }

</style>

### _between_

<dv-scalebar class="cs_between" colorClass="average" labels=",&#9664; 50%,&#9664; 75%,&#9664; 92%," colors ticks classes="0,.5,.75,.93,1"/>
<style>
    .cs_between {
        --container-size:14px;
        --bar-size:14px;
        --tick-width:54px;
        --tick-color:var(--bg);
        --tick-size:20;
        --tick-size0:0;
        --label-offset:-2px;
        --label-font: 800 .8em "Inter", sans-serif;
    }
</style>
``` CSS
    .cs_between {
        --container-size:14px;
        --bar-size:14px;
        --tick-width:54px;
        --tick-color:var(--bg);
        --tick-size:20;
        --tick-size0:0;
        --label-offset:-2px;
        --label-font: 800 .8em "Inter", sans-serif;
    }
```

### _gap_

<dv-scalebar class="cs_gap" colors="green,lightgray,red" colorClass="average" labels="low,mid,high" ticks classes="0,.25,.75,1"/>
<style>
    .cs_gap {
        --scalebar-size: 30;
        --tick-width:20px;
        --tick-size:34;
        --tick-offset:-2px;
        --tick-color:var(--bg);
        --tick-color0:transparent;
        --label-offset:0px;
        --label-color:#333;
        --label-color0:#eee;
        --label-indent0:-14px;
        --label-font: 800 25px monospace;
    }
</style>
``` CSS
    .cs_gap {
        --scalebar-size: 30;
        --tick-width:20px;
        --tick-size:34;
        --tick-offset:-2px;
        --tick-color:var(--bg);
        --tick-color0:transparent;
        --label-offset:0px;
        --label-color:#333;
        --label-color0:#eee;
        --label-indent0:-14px;
        --label-font: 800 25px monospace;
    }
```
### *dot*
<dv-scalebar class="cs_dot" colors="RdPu" colorCorrectLightness labels="100" ticks="11"/>
<style>
    .cs_dot {
        --container-size:14px;
        --bar-size:14px;
        --tick-width:6px;
        --tick-size:6;
        --tick-offset:4px;
        --tick-size0:0;
        --tick-color:#5fadf9cc;
        --label-offset:0px;
        --label-color:#1e90ff;
        --label-color1:#5fadf9;
        --label-font: 800 .7em "Inter", sans-serif;
    }
</style>
``` CSS
    .cs_dot {
        --container-size:14px;
        --bar-size:14px;
        --tick-width:6px;
        --tick-size:6;
        --tick-offset:4px;
        --tick-size0:0;
        --tick-color:#5fadf9cc;
        --label-offset:0px;
        --label-color:#1e90ff;
        --label-color1:#5fadf9;
        --label-font: 800 .7em "Inter", sans-serif;
    }
```

### _comb_

<dv-scalebar class="cs_comb" labels="&#9664; UV,380 to 700 nm,IR &#9654;" colors ticks="71"/>
<style>
    .cs_comb {
        --container-size:62px;
        --bar-size:62px;
        --tick-size:32;
        --tick-width:4;
        --tick-color:var(--bg);
        --tick-size0:62;
        --label-color:#333;
        --label-color0:#3c96f8;
        --label-color1:#f87a1f;
        --label-offset:34px;
        --label-indent0:-.7em;
        --label-font:800 20px "Inter", sans-serif;
    }
</style>
``` CSS
    .cs_comb {
        --container-size:62px;
        --bar-size:62px;
        --tick-size:32;
        --tick-width:4;
        --tick-color:var(--bg);
        --tick-size0:62;
        --label-color:#333;
        --label-color0:#3c96f8;
        --label-color1:#f87a1f;
        --label-offset:34px;
        --label-indent0:-.7em;
        --label-font:800 20px "Inter", sans-serif;
    }
```

### _topper_

<dv-scalebar class="cs_topper" labels="0,1,2,3,4,5,6" colors="Viridis" colorReverse ticks classes="6"/>
<style>
    .cs_topper {
        --label-font:800 2em "Inter", sans-serif;
        --container-size:40px;
        --bar-size:40px;
        --tick-size:34;
        --tick-width:40;
        --tick-color:var(--bg);
        --tick-size0:0;
        --label-offset:-.1em;
        --label-offset0:0em;
        --label-color:#888;
        --label-color0:#333;
        --label-color1:#ccc;
    }

</style>
``` CSS
    .cs_topper {
        --label-font:800 2em "Inter", sans-serif;
        --container-size:40px;
        --bar-size:40px;
        --tick-size:34;
        --tick-width:40;
        --tick-color:var(--bg);
        --tick-size0:0;
        --label-offset:-.1em;
        --label-offset0:0em;
        --label-color:#888;
        --label-color0:#333;
        --label-color1:#ccc;
    }
```

### _ticky_

<dv-scalebar class="cs_ticky" labels=",100" colors ticks="101"/>
<style>
    .cs_ticky {
        --label-font:12px monospace;
        --scalebar-size:8;
        --bar-size:5px;
        --tick-width:2;
        --tick-size:3;
        --tick-offset:4px;
        --tick-size0:8;
        --tick-offset0:0px;
        --label-offset:-14px;
    }

</style>
``` CSS
    .cs_ticky {
        --label-font:12px monospace;
        --scalebar-size:8;
        --bar-size:5px;
        --tick-width:2;
        --tick-size:3;
        --tick-offset:4px;
        --tick-size0:8;
        --tick-offset0:0px;
        --label-offset:-14px;
    }
```

### _blend modes_

<dv-scalebar class="tb tb_normal" colors="Viridis" ticks="5" labels="1,2,3,normal"/>
<dv-scalebar class="tb tb_multiply" colors="Viridis" ticks="5" labels="1,2,3,multiply"/>
<dv-scalebar class="tb tb_screen" colors="Viridis" ticks="5" labels="1,2,3,screen"/>
<dv-scalebar class="tb tb_overlay" colors="Viridis" ticks="5" labels="1,2,3,overlay"/>
<dv-scalebar class="tb tb_darken" colors="Viridis" ticks="5" labels="1,2,3,darken"/>
<dv-scalebar class="tb tb_lighten" colors="Viridis" ticks="5" labels="1,2,3,lighten"/>
<dv-scalebar class="tb tb_color-dodge" colors="Viridis" ticks="5" labels="1,2,3,color-dodge"/>
<dv-scalebar class="tb tb_color-burn" colors="Viridis" ticks="5" labels="1,2,3,color-burn"/>
<dv-scalebar class="tb tb_hard-light" colors="Viridis" ticks="5" labels="1,2,3,hard-light"/>
<dv-scalebar class="tb tb_soft-light" colors="Viridis" ticks="5" labels="1,2,3,soft-light"/>
<dv-scalebar class="tb tb_difference" colors="Viridis" ticks="5" labels="1,2,3,difference"/>
<dv-scalebar class="tb tb_exclusion" colors="Viridis" ticks="5" labels="1,2,3,exclusion"/>
<dv-scalebar class="tb tb_hue" colors="Viridis" ticks="5" labels="1,2,3,hue"/>
<dv-scalebar class="tb tb_saturation" colors="Viridis" ticks="5" labels="1,2,3,saturation"/>
<dv-scalebar class="tb tb_color" colors="Viridis" ticks="5" labels="1,2,3,color"/>
<dv-scalebar class="tb tb_luminosity" colors="Viridis" ticks="5" labels="1,2,3,luminosity"/>
<dv-scalebar class="tb tb_plus-darker" colors="Viridis" ticks="5" labels="1,2,3,plus-darker"/>
<dv-scalebar class="tb tb_plus-lighter" colors="Viridis" ticks="5" labels="1,2,3,plus-lighter"/>

<style>
.bm {
    --tick-color:DodgerBlue;
    --tick-width:3px;
    --tick-size0: 14;
    --label-blend1:normal;
    --label-offset:0px;
    --label-color:DodgerBlue;
    --label-color1:#000;
    --label-font:800 12px "Inter", sans-serif;
    --label-font1:500 12px "Inter", sans-serif
}

.bm_normal{
    --tick-blend:normal;
    --label-blend:normal;
}
.bm_multiply{
    --tick-blend:multiply;
    --label-blend:multiply;
}
.bm_screen{
    --tick-blend:screen;
    --label-blend:screen;
}
.bm_overlay{
    --tick-blend:overlay;
    --label-blend:overlay;
}
.bm_darken{
    --tick-blend:darken;
    --label-blend:darken;
}
.bm_lighten{
    --tick-blend:lighten;
    --label-blend:lighten;
}
.bm_color-dodge{
    --tick-blend:color-dodge;
    --label-blend:color-dodge;
}
.bm_color-burn{
    --tick-blend:color-burn;
    --label-blend:color-burn;
}
.bm_hard-light{
    --tick-blend:hard-light;
    --label-blend:hard-light;
}
.bm_soft-light{
    --tick-blend:soft-light;
    --label-blend:soft-light;
}
.bm_difference{
    --tick-blend:difference;
    --label-blend:difference;
}
.bm_exclusion{
    --tick-blend:exclusion;
    --label-blend:exclusion;
}
.bm_hue{
    --tick-blend:hue;
    --label-blend:hue;
}
.bm_saturation{
    --tick-blend:saturation;
    --label-blend:saturation;
}
.bm_color{
    --tick-blend:color;
    --label-blend:color;
}
.bm_luminosity{
    --tick-blend:luminosity;
    --label-blend:luminosity;
}
.bm_plus-darker{
    --tick-blend:plus-darker;
    --label-blend:plus-darker;
}
.bm_plus-lighter{
    --tick-blend:plus-lighter;
    --label-blend:plus-lighter;
}
</style>

```CSS
.bm {
    --tick-color:DodgerBlue;
    --tick-width:3px;
    --tick-size0: 14;
    --label-blend1:normal;
    --label-offset:0px;
    --label-color:DodgerBlue;
    --label-color1:#000;
    --label-font:800 12px "Inter", sans-serif;
    --label-font1:500 12px "Inter", sans-serif
}

.bm_normal{
    --tick-blend:normal;
    --label-blend:normal;
}
.bm_multiply{
    --tick-blend:multiply;
    --label-blend:multiply;
}
.bm_screen{
    --tick-blend:screen;
    --label-blend:screen;
}
.bm_overlay{
    --tick-blend:overlay;
    --label-blend:overlay;
}
.bm_darken{
    --tick-blend:darken;
    --label-blend:darken;
}
.bm_lighten{
    --tick-blend:lighten;
    --label-blend:lighten;
}
.bm_color-dodge{
    --tick-blend:color-dodge;
    --label-blend:color-dodge;
}
.bm_color-burn{
    --tick-blend:color-burn;
    --label-blend:color-burn;
}
.bm_hard-light{
    --tick-blend:hard-light;
    --label-blend:hard-light;
}
.bm_soft-light{
    --tick-blend:soft-light;
    --label-blend:soft-light;
}
.bm_difference{
    --tick-blend:difference;
    --label-blend:difference;
}
.bm_exclusion{
    --tick-blend:exclusion;
    --label-blend:exclusion;
}
.bm_hue{
    --tick-blend:hue;
    --label-blend:hue;
}
.bm_saturation{
    --tick-blend:saturation;
    --label-blend:saturation;
}
.bm_color{
    --tick-blend:color;
    --label-blend:color;
}
.bm_luminosity{
    --tick-blend:luminosity;
    --label-blend:luminosity;
}
.bm_plus-darker{
    --tick-blend:plus-darker;
    --label-blend:plus-darker;
}
.bm_plus-lighter{
    --tick-blend:plus-lighter;
    --label-blend:plus-lighter;
}
```
