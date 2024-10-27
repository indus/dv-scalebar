
import DefaultTheme from 'vitepress/theme';
import './custom.scss'

import  '../../../scalebar.lit.ts';

export default DefaultTheme;

/* render SVGs */

//import type { Theme } from 'vitepress'
//import Scalebar from '../../../scalebar.vue';
//export default {
//    extends: DefaultTheme,
//    enhanceApp({ app }) {
//        app.component('dv-scalebar', Scalebar);
//    }
//} satisfies Theme;