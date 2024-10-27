import vue from "@vitejs/plugin-vue";
import * as path from "path";
import { defineConfig } from "vite";

import { config, ruLicence } from "./vite.config";

const fileName = "dv-scalebar.vue.nochroma";

config.plugins = [vue()];

config.build = {
  emptyOutDir: false,
  lib: {
    entry: path.resolve(__dirname, "src/scalebar.vue"),
    name: "Scalebar",
    fileName,
  },
  rollupOptions: {
    external: ["vue", "chroma-js"],
    output: {
      globals: { vue: "Vue", "chroma-js": "chroma" },
    },
    plugins: [ruLicence(fileName)],
  },
};

export default defineConfig(config);
