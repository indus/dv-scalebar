import vue from "@vitejs/plugin-vue";
import * as path from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import licence from "rollup-plugin-license";

export const config = {
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern",
      },
    },
  },
} as any;

export const ruLicence = (id: String) => {
  let fileName = `${id}.licence.txt`;

  return licence({
    sourcemap: true,
    banner: {
      content: `@license
https://github.com/indus/dist/blob/main/${fileName}`,
    },
    thirdParty: {
      output: `./dist/${fileName}`,
      includeSelf: true,
    },
  });
};

const fileName = "dv-scalebar.vue";

export default defineConfig(Object.assign({}, config, {
  plugins: [
    vue(),
    dts({
      beforeWriteFile: (filePath) => <any> filePath.endsWith("dts.d.ts"),
    }),
  ],
  build: {
    emptyOutDir: false,
    lib: {
      entry: path.resolve(__dirname, "src/scalebar.vue"),
      name: "Scalebar",
      fileName,
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: { vue: "Vue" },
      },
      plugins: [ruLicence(fileName)],
    },
  },
}));
