import * as path from "path";
import { defineConfig } from "vite";

import { config, ruLicence } from "./vite.config";

const fileName = "dv-scalebar.lit";

config.build = {
  emptyOutDir: false,
  lib: {
    entry: path.resolve(__dirname, "src/scalebar.lit.ts"),
    name: "Scalebar",
    fileName,
  },
  rollupOptions: {
    plugins:[ruLicence(fileName)]
  },
};

export default defineConfig(config);
