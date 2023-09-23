import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  server: {
    port: 5143,
    headers: {
      "Cross-Origin-Opener-Policy": "same-origin",
      "Cross-Origin-Embedder-Policy": "credentialless",
    },
    watch: {
      ignored: ["./src/tests/**", "./dist/**"],
    },
    //set public dir to src/renderers/audio/
  },
});
