import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Relative base so the production build works from a GitHub Pages
// project subpath (https://<user>.github.io/<repo>/) without extra config.
export default defineConfig({
  base: "./",
  plugins: [react()],
  build: {
    outDir: "dist",
    sourcemap: false,
  },
});
