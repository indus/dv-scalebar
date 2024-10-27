import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "dv-scalebar",
  description: "a scalebar web component",
  outDir: "../../docs",
  themeConfig: {
    //carbonAds: {
    //  code: "CESD4K3E",
    //  placement: "jsorg",
    //},
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Docs", link: "/docs" },
      { text: "Usage", link: "/docs/usage" },
      { text: "Styling", link: "/docs/styling" },
    ],

    sidebar: {
      "/docs": [{
        text: "Getting Started",
        link: "/docs",
      }, {
        text: "Usage",
        link: "/docs/usage",
      }, {
        text: "Basics Attributes",
        items: [
          { text: "colors", link: "/docs/colors" },
          { text: "labels", link: "/docs/labels" },
          { text: "ticks", link: "/docs/ticks" },
          { text: "classes", link: "/docs/classes" },
        ],
      }, {
        text: "Layout Attributes",
        items: [
          { text: "vertical", link: "/docs/vertical" },
          { text: "reverse", link: "/docs/reverse" },
          { text: "flip", link: "/docs/flip" },
          { text: "before", link: "/docs/before" },
          { text: "after", link: "/docs/after" },
        ],
      }, {
        text: "Color Attributes",
        items: [
          { text: "colorReverse", link: "/docs/colorReverse" },
          { text: "colorMode", link: "/docs/colorMode" },
          { text: "colorGamma", link: "/docs/colorGamma" },
          {
            text: "colorCorrectLightness",
            link: "/docs/colorCorrectLightness",
          },
          { text: "colorPadding", link: "/docs/colorPadding" },
          { text: "colorClass", link: "/docs/colorClass" },
        ],
      }, {
        text: "Styling",
        link: "/docs/styling",
        items: [
          { text: "CSS Variables", link: "/docs/styling#css-variables" },
          { text: "Examples", link: "/docs/styling#examples" },
        ],
      }],
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/indus/dv-scalebar" },
      //{ icon: "npm", link: "https://www.npmjs.com/package/dv-scalebar" },
    ],
    footer: {
      message: "Released under the BSD 3-Clause License.",
      copyright:
        'Copyright © 2024-present <a href="https://github.com/indus">Stefan Keim</a>',
    },
  },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => tag.startsWith("dv-"),
      },
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern",
        },
      },
    },
  },
});
