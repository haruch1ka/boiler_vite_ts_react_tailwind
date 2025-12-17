import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import { viteStaticCopy } from "vite-plugin-static-copy";
import path from "path";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd() + "/config", "");
  const buildName = env.VITE_BUILD_NAME || "myApp";
  const htlmlPlugin = (env: Record<string, string>) => ({
    name: "html-transform",
    transformIndexHtml: (html: string): string =>
      html.replace(/%=(.*?)%/g, (match, p1) => env[p1] ?? match),
  });
  return {
    root: "src",
    base: "./",
    envDir: "../config",
    define: {
      "import.meta.env.VITE_UNITY_PATH": JSON.stringify(env.VITE_UNITY_PATH),
    },
    build: {
      outDir: `./../dist/${buildName}/`,
      emptyOutDir: true,
    },
    plugins: [
      htlmlPlugin(env),
      react(),
      viteStaticCopy({
        targets: [{ src: "./assets/*", dest: `./assets` }],
      }),
    ],
    publicDir: "../public",
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
  };
});
