import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const envPath = path.join(__dirname, "../config/.env");
const now = new Date();
const dateString = now.toLocaleString("ja-JP", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
});

let env = fs.readFileSync(envPath, "utf-8");
if (/^VITE_BUILD_DATE=.*$/m.test(env)) {
  env = env.replace(/^VITE_BUILD_DATE=.*$/m, `VITE_BUILD_DATE=${dateString}`);
} else {
  env += `\nVITE_BUILD_DATE=${dateString}\n`;
}
fs.writeFileSync(envPath, env);
