const http = require("http");
const fs = require("fs");
const path = require("path");
const { URL } = require("url");

const PORT = Number(process.env.PORT || 8000);
const HOST = process.env.HOST || "0.0.0.0";
const ROOT = __dirname;

const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".mp4": "video/mp4",
  ".ico": "image/x-icon",
};

const projectMeta = {
  name: "Deepfake Dilemma Showcase",
  description:
    "A presentation app for the Deepfake Dilemma final project, including methodology, results, source materials, and recommendations.",
  team: ["Yuval Shilon", "Kate Leblanc", "Noah Penfold", "Liat Benchluch"],
  publicTabs: [
    "Overview",
    "Why This Matters",
    "Materials",
    "Methodology",
    "Results",
    "Recommendations",
  ],
};

function sendJson(response, statusCode, payload) {
  const body = JSON.stringify(payload, null, 2);
  response.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8",
    "Content-Length": Buffer.byteLength(body),
    "Cache-Control": "no-store",
  });
  response.end(body);
}

function getAssetVersion(fileName) {
  const filePath = path.join(ROOT, fileName);
  const stats = fs.statSync(filePath);
  return String(stats.mtimeMs).replace(".", "");
}

function sendIndexHtml(response) {
  const indexPath = path.join(ROOT, "index.html");

  fs.readFile(indexPath, "utf8", (error, html) => {
    if (error) {
      sendNotFound(response);
      return;
    }

    const cssVersion = getAssetVersion("styles.css");
    const jsVersion = getAssetVersion("app.js");

    const renderedHtml = html
      .replace('href="styles.css"', `href="styles.css?v=${cssVersion}"`)
      .replace('src="app.js"', `src="app.js?v=${jsVersion}"`);

    response.writeHead(200, {
      "Content-Type": "text/html; charset=utf-8",
      "Content-Length": Buffer.byteLength(renderedHtml),
      "Cache-Control": "no-cache, no-store, must-revalidate",
    });

    response.end(renderedHtml);
  });
}

function sendFile(response, filePath) {
  fs.stat(filePath, (statError, stats) => {
    if (statError || !stats.isFile()) {
      sendNotFound(response);
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || "application/octet-stream";
    const shouldDisableCache = [".html", ".js", ".css"].includes(ext);

    response.writeHead(200, {
      "Content-Type": contentType,
      "Content-Length": stats.size,
      "Cache-Control": shouldDisableCache ? "no-cache, no-store, must-revalidate" : "public, max-age=3600",
    });

    fs.createReadStream(filePath).pipe(response);
  });
}

function sendNotFound(response) {
  sendJson(response, 404, {
    error: "Not found",
  });
}

function safeResolvePath(urlPathname) {
  const decodedPath = decodeURIComponent(urlPathname);
  const normalized = path.normalize(decodedPath).replace(/^(\.\.[/\\])+/, "");
  const resolved = path.join(ROOT, normalized);
  if (!resolved.startsWith(ROOT)) {
    return null;
  }
  return resolved;
}

const server = http.createServer((request, response) => {
  const requestUrl = new URL(request.url, `http://${request.headers.host || "localhost"}`);
  const { pathname } = requestUrl;

  if (pathname === "/api/health") {
    sendJson(response, 200, {
      ok: true,
      service: "deepfake-dilemma-showcase",
      timestamp: new Date().toISOString(),
    });
    return;
  }

  if (pathname === "/api/meta") {
    sendJson(response, 200, projectMeta);
    return;
  }

  const targetPath = pathname === "/" ? path.join(ROOT, "index.html") : safeResolvePath(pathname);
  if (!targetPath) {
    sendNotFound(response);
    return;
  }

  if (pathname === "/") {
    sendIndexHtml(response);
    return;
  }

  fs.stat(targetPath, (error, stats) => {
    if (!error && stats.isFile()) {
      sendFile(response, targetPath);
      return;
    }

    if (pathname.startsWith("/api/")) {
      sendNotFound(response);
      return;
    }

    sendIndexHtml(response);
  });
});

server.listen(PORT, HOST, () => {
  console.log(`Deepfake Dilemma Showcase running at http://${HOST}:${PORT}`);
});
