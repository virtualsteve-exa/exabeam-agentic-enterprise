import { cp, mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const clientDir = path.join(projectRoot, "dist", "client");
const outputDir = path.join(projectRoot, "pages-dist");
const repositoryName = "exabeam-agentic-enterprise";
const basePath = `/${repositoryName}/`;
const publicOrigin = `https://virtualsteve-exa.github.io/${repositoryName}`;

await rm(outputDir, { recursive: true, force: true });
await mkdir(outputDir, { recursive: true });
await cp(clientDir, outputDir, { recursive: true });

const workerUrl = new URL("../dist/server/index.js", import.meta.url);
workerUrl.searchParams.set("static-pages", `${Date.now()}`);
const { default: worker } = await import(workerUrl.href);
const response = await worker.fetch(
  new Request("http://localhost:3002/", { headers: { accept: "text/html" } }),
  { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
  { waitUntil() {}, passThroughOnException() {} },
);

if (!response.ok) throw new Error(`Static render failed with ${response.status}`);

let html = await response.text();
html = html
  .replaceAll("http://localhost:3002", publicOrigin)
  .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
  .replace(/<link\b[^>]*rel=["']modulepreload["'][^>]*>/gi, "")
  .replace(/\b(href|src|data-rsc-css-href)="\/(?!\/)/g, `$1="${basePath}`)
  .replace(/url\(\/(?!\/)/g, `url(${basePath}`)
  .replace(/url\('\/(?!\/)/g, `url('${basePath}`)
  .replace(/url\("\/(?!\/)/g, `url("${basePath}`);

async function rewriteCssAssets(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  await Promise.all(entries.map(async (entry) => {
    const filename = path.join(directory, entry.name);
    if (entry.isDirectory()) return rewriteCssAssets(filename);
    if (!entry.name.endsWith(".css")) return;
    const css = await readFile(filename, "utf8");
    const rewritten = css
      .replace(/url\(\/(?!\/)/g, `url(${basePath}`)
      .replace(/url\('\/(?!\/)/g, `url('${basePath}`)
      .replace(/url\("\/(?!\/)/g, `url("${basePath}`);
    await writeFile(filename, rewritten);
  }));
}

await rewriteCssAssets(outputDir);
await writeFile(path.join(outputDir, "index.html"), html);
await writeFile(path.join(outputDir, "404.html"), html);
await writeFile(path.join(outputDir, ".nojekyll"), "");

console.log(`GitHub Pages bundle ready at ${outputDir}`);
