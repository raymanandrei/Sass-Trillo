import { defineConfig } from "vite";
import autoprefixer from "autoprefixer";

export default defineConfig({
  css: {
    postcss: {
      plugins: [
        autoprefixer({
          overrideBrowserslist: [
            "> 0.5%",
            "last 2 versions",
            "Firefox >= 30",
            "not dead",
          ],
        }),
      ],
    },
  },
});
