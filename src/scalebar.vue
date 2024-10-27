<script lang='ts'>
import { defineComponent } from 'vue';
import { h } from "vue";
import getProps from "./scalebar.core";

let UID = 0;

export default defineComponent({
  props: {
    colors: { type: [Boolean, String, Array] },
    labels: { type: [Boolean, String, Array] },
    ticks: { type: [Boolean, String, Number, Array] },
    classes: { type: [Boolean, String, Number, Array] },
    vertical: { type: Boolean },
    reverse: { type: Boolean },
    flip: { type: Boolean },
    before: { type: String },
    after: { type: String },
    colorReverse: { type: Boolean },
    colorMode: { type: String },
    colorGamma: { type: Number },
    colorCorrectLightness: { type: Boolean },
    colorPadding: { type: [String, Number, Array] },
    colorClass: { type: String },
    centeredEdgeLabels: { type: Boolean },
  },
  setup(props: any) {
    const uid = UID++;

    return () => {

    const {
      stops$,
      ticks$,
      labels$,
      before,
      after,
      vertical,
      klass
    } = getProps(props)
      
      return h("svg", {
        class: klass,
      }, [
        h("defs", [
          h("line", {
            id: `tk${uid}`,
            x1: 0,
            xy: 0,
            x2: vertical ? 1 : 0,
            y2: vertical ? 0 : 1,
          }),
          h(
            "linearGradient",
            {
              id: `lg${uid}`,
              gradientTransform: vertical
                ? "translate(-1,1) rotate(-90)"
                : null,
            },
            stops$?.map((s$) =>
              h("stop", { offset: s$[0], "stop-color": s$[1] })
            ),
          ),
        ]),
        before ? h("rect", { class: "b", fill: before }) : null,
        h("rect", {
          fill: `url('#lg${uid}')`,
          width: vertical ? null : "100%",
          height: vertical ? "100%" : null,
        }),
        after ? h("rect", { class: "a", fill: after }) : null,
        ticks$?.map((t$) =>
          h("use", {
            href: `#tk${uid}`,
            x: vertical ? 0 : t$,
            y: vertical ? t$ : 0,
          })
        ),
        labels$?.map((l$) =>
          h("text", {
            x: vertical ? null : l$[0],
            y: vertical ? l$[0] : null,
          }, l$[1])
        ),
      ]);
    };
  },
})

</script>

<style lang="css" scoped>
@import './scalebar.css';
</style>