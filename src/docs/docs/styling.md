# Styling

Styling of the scalebar component is possible through CSS variables. Because the component
renders as an SVG with visible overflow, ensure that all elements
remain within the component’s container or apply suitable margins.

## CSS Variables

| <div style="width:140px">Variable</div> | Description                                                                                | <div style="width:170px">Default</div>                    |
| :---: | :--- | :---: |
| `--scalebar-size`                       | A unitless scaling factor for the colorbar and labels (equal to pixel) | **14**                                                    |
| `--container-size`                          | Height of the scalebar container in horizontal layout; width in vertical layout           | **28px**<br> <small>[_`--scalebar-size`&nbsp;*&nbsp;2px_]</small>        |
| `--bar-size`                            | Height of the colorbar in horizontal layout; width in vertical layout                     | **14px**<br> <small>[_`--container-size`&nbsp;/&nbsp;2_]</small>             |
| `--bar-offset`                          | Offset applied to the labels                                                              | **0px**                                                   |
| `*` `--tick-color`                      | Color of the ticks                                                                        | **currentColor**                                          |
| `*` `--tick-width`                      | Width of the ticks                                                                        | **2px**                                                   |
| `*` `--tick-size`                       | Size of the ticks                                                                         | **14**<br> <small>[_`--container-size`_]</small>                             |
| `*` `--tick-offset`                     | Offset applied to the ticks                                                               | **0px**                                                   |
| `*` `--label-color`                     | Color of the labels                                                                       | **currentColor**                                          |
| `*` `--label-offset`                    | Offset applied to the labels                                                              | **14px**<br> <small>[_`--barsize-size`_]</small>                                        |
| `*` `--label-indent`                    | Indent applied to the labels                                                              | **0px**                                                   |
| `*` `--label-font`                          | Font for labels in shorthand notation                                                     | **12.6px monospace**<br><small>[_`--bar-size`&nbsp;*&nbsp;0.9_]</small> |

| All variables marked with an `*` allow you to style the first and/or last element by adding `0` or `1` as a suffix to the CSS variable name. For example, `--tick-color0` changes the color of the first tick, while `--tick-color1` changes only the color of the last tick. By using both, you can style them independently. |
| --- |

## Examples

<style>
    :root {
        --bg:var(--vp-c-bg);
    }

</style>

### *between*
  
<dv-scalebar class="cs_between" colorClass="average" labels=",🡄 50%,🡄 75%,🡄 92%," colors ticks classes="0,.5,.75,.93,1"/>
<style>
    .cs_between {
        --container-size:14px;
        --bar-size:14px;
        --tick-width:54px;
        --tick-color:var(--bg);
        --tick-size:20;
        --tick-size0:0;
        --label-offset:-2px;
        --label-font: 800 .8em Helvetica, Arial, sans-serif;
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
        --label-font: 800 .8em Helvetica, Arial, sans-serif;
    }
```

### *gap*

<dv-scalebar class="cs_gap" colors="green,lightgray,red" colorClass="average" labels="low,mid,high" ticks classes="0,.2,.8,1"/>
<style>
    .cs_gap {
        --scalebar-size: 30;
        --tick-width:30px;
        --tick-color:var(--bg);
        --tick-color0:transparent;
        --label-offset:0px;
        --label-color:#333;
        --label-color0:#eee;
        --label-indent0:-15px;
        --label-font: 800 25px monospace;
    }
</style>
``` CSS
    .cs_gap {
        --scalebar-size: 30;
        --tick-width:30px;
        --tick-color:var(--bg);
        --tick-color0:transparent;
        --label-offset:0px;
        --label-color:#333;
        --label-color0:#eee;
        --label-indent0:-15px;
        --label-font: 800 25px monospace;
    }
```
### *dot*
<dv-scalebar class="cs_dot" colors="RdPu" colorCorrectLightness   labels="100" ticks="21"/>
<style>
    .cs_dot {
        --container-size:14px;
        --bar-size:14px;
        --tick-width:6px;
        --tick-size:6;
        --tick-offset:4px;
        --tick-size0:0;
        --tick-color:#5fadf9cc;
        --label-offset:-1px;
        --label-color:#1e90ff;
        --label-color1:#5fadf9;
        --label-font: 800 .7em sans-serif;
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
        --label-offset:-1px;
        --label-color:#1e90ff;
        --label-color1:#5fadf9;
        --label-font: 800 .7em sans-serif;
    }
```

### *comb*

<dv-scalebar class="cs_comb" labels="🠴UV,380 to 700 nm,IR🠶" colors ticks="71"/>
<style>
    .cs_comb {
        --container-size:62px;
        --bar-size:62px;
        --tick-size:38;
        --tick-width:4;
        --tick-color:var(--bg);
        --tick-size0:62;
        --label-font: condensed 800 1em sans-serif;
        --label-font0: 1.2em sans-serif;
        --label-color:#333;
        --label-color0:#3c96f8;
        --label-color1:#f87a1f;
        --label-offset:40px;
        --label-offset0:36px;
        --label-indent0:-.5em;
    }
</style>
``` CSS
    .cs_comb {
        --container-size:62px;
        --bar-size:62px;
        --tick-size:38;
        --tick-width:4;
        --tick-color:var(--bg);
        --tick-size0:62;
        --label-font: condensed 800 1em sans-serif;
        --label-font0: 1.2em sans-serif;
        --label-color:#333;
        --label-color0:#3c96f8;
        --label-color1:#f87a1f;
        --label-offset:40px;
        --label-offset0:36px;
        --label-indent0:-.5em;
    }
```

### *topper*

<dv-scalebar class="cs_topper" labels="0,1,2,3,4,5,6" colors="Viridis" colorReverse ticks classes="6"/>
<style>
    .cs_topper {
        --label-font: 800 2em sans-serif;
        --container-size:40px;
        --bar-size:40px;
        --tick-size:34;
        --tick-width:40;
        --tick-color:var(--bg);
        --tick-size0:0;
        --label-offset:-.25em;
        --label-offset0:-.1em;
        --label-indent0:.5em;
        --label-color:#888;
        --label-color0:#333;
        --label-color1:#ccc;
    }

</style>
``` CSS
    .cs_topper {
        --label-font: 800 2em sans-serif;
        --container-size:40px;
        --bar-size:40px;
        --tick-size:34;
        --tick-width:40;
        --tick-color:var(--bg);
        --tick-size0:0;
        --label-offset:-.25em;
        --label-color:#888;
        --label-offset0:-.1em;
        --label-color0:#fff;
    }
```

### *ticky*

<dv-scalebar class="cs_ticky" labels=",100" colors ticks="101"/>
<style>
    .cs_ticky {
        --label-font: 12px monospace;
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
        --label-font: 12px monospace;
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
