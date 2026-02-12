import fs from "node:fs";
import path from "node:path";

const envPath = path.join(process.cwd(), ".env.local");
const now = new Date().toISOString();
const key = "NEXT_PUBLIC_DEPLOY_TS";

let lines = [];
if (fs.existsSync(envPath)) {
  lines = fs.readFileSync(envPath, "utf8").split(/\r?\n/);
}

const withoutKey = lines.filter((l) => l && !l.startsWith(`${key}=`));
withoutKey.push(`${key}=${now}`);
withoutKey.push(""); // newline
fs.writeFileSync(envPath, withoutKey.join("\n"), "utf8");

console.log(`[deploy-ts] ${key}=${now}`);
