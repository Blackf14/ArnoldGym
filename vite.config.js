import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: path.join(__dirname, "index.html"),
      },
    },
  },
});
