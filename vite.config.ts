import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  root: "src",
  // build後のfileのpathを解決する為に必要
  base: "./",
  build: {
    outDir: "../dist",
  },
  plugins: [react()],
});
