import * as path from "path";
import { defineConfig } from "vite";

import { config, ruLicence } from "./vite.config";

const fileName = "dv-scalebar.lit.nochroma";

config.build = {
    emptyOutDir: false,
    lib: {
        entry: path.resolve(__dirname, "src/scalebar.lit.ts"),
        name: "Scalebar",
        fileName
    },
    rollupOptions: {
        external: ["chroma-js"],
        output: {
            globals: { "chroma-js": "chroma" }
        },
        plugins:[ruLicence(fileName)]
    }
}

export default defineConfig(config);
