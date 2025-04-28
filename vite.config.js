import { defineConfig } from "vite";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
export default defineConfig({
  base: './',
  css: {
    devSourcemap: true,
  },
  build: {
    outDir: "docs",
    rollupOptions: {
      input:{
        index: resolve(__dirname, 'index.html'),
        onboarding: resolve(__dirname, 'onboarding/index.html')
      }
    }

  },
});
