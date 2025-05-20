import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig(({mode}) => {
  const env = loadEnv(mode, process.cwd(), "/config");
  const buildName = env.VITE_BUILD_NAME || "myApp";
  return {
    root: "src",
    base: "./",
    build: {
      outDir: `./../dist/${buildName}/`,
      emptyOutDir: true,
    },
    plugins: [react()],
  };
});
