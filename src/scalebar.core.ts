import chroma from "chroma-js";

const LG_STOP_COUNT = 42;
const cTurbo = [
  "#30123b",
  "#4145ab",
  "#4675ed",
  "#39a2fc",
  "#1bcfd4",
  "#24eca6",
  "#61fc6c",
  "#a4fc3b",
  "#d1e834",
  "#f3c63a",
  "#fe9b2d",
  "#f36315",
  "#d93806",
  "#b11901",
  "#7a0402",
];
const dTurbo = [
  0.0,
  0.071,
  0.143,
  0.214,
  0.286,
  0.357,
  0.429,
  0.5,
  0.571,
  0.643,
  0.714,
  0.786,
  0.857,
  0.929,
  1.0,
];

const valToArray = (val: number[] | number, add = 0): number[] => {
  if (Array.isArray(val)) {
    return val as number[];
  } else if (Number.isInteger(val)) {
    return Array(val + add).fill(val + add - 1).map((n, i) =>
      i / Math.max(n, 1)
    );
  } else console.warn(`expected prop to be 'number[]' or 'int'`, val);
  return [];
};

const toPerc = (v: number, flip?: boolean): string =>
  ((flip ? 1 - v : v) * 100).toFixed(2) + "%";
const pToStop = (
  cs: any,
  pO: any,
  pC = pO,
  reverse = false,
): [string, string] => [toPerc(pO), cs(reverse ? 1 - pC : pC).hex()];

const normalize = (value: any, numeric: boolean = false) => {
  if (value === "" || value === true) return true;
  else if (!value) return;

  let vals = (typeof value === "string" || value instanceof String)
    ? value.startsWith("[") ? JSON.parse(value as string) : value.split(",")
    : (Array.isArray(value))
    ? [...value]
    : [value];

  if (numeric) {
    vals = vals?.map((v: any) => v == "" || isNaN(v) ? v : +v);
  }
  if (vals!.length > 1) return vals;
  return vals![0];
};

export default (props: any) => {
  let {
    colors,
    labels,
    ticks,
    classes,
    vertical,
    reverse,
    flip,
    before,
    after,
    colorReverse,
    colorMode,
    colorGamma,
    colorCorrectLightness,
    colorPadding,
    colorClass,
    centeredEdgeLabels,
  } = props;

  colors = normalize(colors);
  labels = normalize(labels);
  ticks = normalize(ticks, true);
  classes = normalize(classes, true);
  colorPadding = normalize(colorPadding, true);
  vertical = normalize(vertical);
  reverse = normalize(reverse);
  flip = normalize(flip);
  colorReverse = normalize(colorReverse);
  colorCorrectLightness = normalize(colorCorrectLightness);

  if (labels === true) {
    if (Array.isArray(ticks)) {
      labels = [...ticks];
    } else if (Array.isArray(classes)) {
      labels = [...classes];
    }
  }

  if (reverse ^ vertical) {
    if (Array.isArray(ticks)) {
      ticks = ticks.reverse().map((v) => 1 - v);
    }
    if (Array.isArray(classes)) {
      classes = classes.reverse().map((v) => 1 - v);
    }
  }

  let steps: number[] | null = null;
  let stops$: [string, string][] | null = null;
  let ticks$: string[] | null = null;
  let labels$: [string, string][] | null = null;

  if (classes === true) {
    if (ticks) {
      classes = Array.isArray(ticks) ? ticks : ticks! - 1;
    } else if (Array.isArray(labels)) {
      classes = labels?.length;
    } else if (Array.isArray(colors)) {
      classes = colors?.length;
    }
  }

  let cS: any;

  if (colors === true) {
    cS = chroma.scale(cTurbo).domain(dTurbo);
  } else if (colors === undefined) {
    colors = ["#fff", "#000"];
  } else if (!Array.isArray(colors)) {
    colors = chroma.brewer[colors as keyof typeof chroma.brewer] ||
      ["#fff", colors];
  }

  if (colors !== true && (reverse ^ vertical)) colors = [...colors].reverse();

  cS = cS || chroma.scale(colors);

  if (colorMode) {
    cS = cS.mode(colorMode);
  }
  if (colorGamma) {
    cS = cS.gamma(colorGamma);
  }
  if (colorCorrectLightness) {
    cS = cS.correctLightness();
  }
  if (colorPadding) {
    cS = cS.padding(colorPadding);
  }

  if (classes) {
    switch (colorClass) {
      case "average":
        cS = cS.domain([0, 1]);
        break;
      case "equal":
        if (!Array.isArray(classes)) {
          classes = valToArray(classes, 1);
        }
        cS = cS.classes([0, ...classes, 1]);
        break;
      default:
        cS = cS.classes(classes);
        break;
    }
  }

  if (before === "") {
    before = cS(vertical ? 1 : 0).hex();
  }
  if (after === "") {
    after = cS(vertical ? 0 : 1).hex();
  }

  if (!classes || Number(classes) <= 1) {
    stops$ = Array(LG_STOP_COUNT).fill(LG_STOP_COUNT - 1).map((
      n,
      i,
    ) => pToStop(cS, i / n, i / n, colorReverse));
  } else { // classes
    let stopsA = valToArray(classes, 1);

    if (Array.isArray(stopsA)) {
      let n = stopsA.length - 1;

      stops$ = stopsA.reduce((re: any[], p, i, a) => {
        let p_ = a[i + 1];
        let pc = (p + p_) / 2;

        if (i < n && i) re.push(pToStop(cS, p, pc, colorReverse));
        if (i < n - 1) re.push(pToStop(cS, p_, pc, colorReverse));

        return re;
      }, []);

      steps = stopsA;
    }
  }

  if (ticks !== undefined) {
    if (ticks === true) {
      if (Array.isArray(steps)) {
        ticks = steps;
      } else if (Array.isArray(labels)) {
        ticks = labels.length;
      } else {
        ticks = 2;
      }
    }
    let ticksA = valToArray(ticks!);

    if (Array.isArray(ticksA)) {
      ticks$ = ticksA.map((t) => toPerc(t, vertical));
      steps = steps || ticksA;
      if (reverse ^ vertical) {
        ticks$ = ticks$.reverse();
      }
    }
  }

  if (labels !== undefined) {
    if (labels === true) {
      if (steps) {
        let l = steps.length - (classes ? 1 : 0);
        labels = Array(l).fill(Math.max(l - 1, 1)).map((l, i) =>
          `${parseFloat((i / l).toFixed(2))}`
        );
      } else labels = ["0", "1"];
    }

    if (!Array.isArray(labels)) {
      labels = ["0", labels];
    }

    if ((reverse ^ vertical) && Array.isArray(labels)) {
      labels = labels.reverse();
    }

    let pFn: any;
    switch (steps && labels.length - steps.length) {
      case 0: // position labels at steps
        pFn = (i: number) => steps![i];
        centeredEdgeLabels = false;
        break;
      case -1: // center labels between steps
        pFn = (i: number) => (steps![i] + steps![i + 1]) / 2;
        centeredEdgeLabels = true;
        break;
      default: // place labels equaly spaced
        if (labels.length > 1) {
          pFn = (i: number) => i / (labels!.length - 1);
          centeredEdgeLabels = false;
        } else {
          pFn = () => .5;
          centeredEdgeLabels = true;
        }
        break;
    }
    labels$ = labels.map((
      l: string,
      i: number,
    ) => [toPerc(vertical ? 1 - pFn(i) : pFn(i)), l]);
  }

  let klass = `dv-sb${before ? " b" : ""}${after ? " a" : ""}${
    flip ? " f" : ""
  }${vertical ? " v" : " h"}${centeredEdgeLabels ? " c" : ""}`;

  return {
    stops$,
    ticks$,
    labels$,
    before,
    after,
    vertical,
    klass,
  };
};
