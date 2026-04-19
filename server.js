const http = require("http");
const fs = require("fs");
const path = require("path");
const { URL } = require("url");

const PORT = process.env.PORT || 3000;
const ROOT = __dirname;
const DATA_DIR = path.join(ROOT, "data");
const DATA_FILE = path.join(DATA_DIR, "applications.json");

const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".ico": "image/x-icon"
};

function ensureDataFile() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }

  if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, "[]\n", "utf8");
  }
}

function readApplications() {
  ensureDataFile();
  return JSON.parse(fs.readFileSync(DATA_FILE, "utf8"));
}

function writeApplications(applications) {
  ensureDataFile();
  fs.writeFileSync(DATA_FILE, `${JSON.stringify(applications, null, 2)}\n`, "utf8");
}

function sendJson(response, statusCode, payload) {
  response.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8"
  });
  response.end(JSON.stringify(payload));
}

function sendText(response, statusCode, message) {
  response.writeHead(statusCode, {
    "Content-Type": "text/plain; charset=utf-8"
  });
  response.end(message);
}

function collectJson(request) {
  return new Promise((resolve, reject) => {
    let raw = "";

    request.on("data", (chunk) => {
      raw += chunk;
      if (raw.length > 1_000_000) {
        reject(new Error("Payload too large"));
      }
    });

    request.on("end", () => {
      if (!raw) {
        resolve({});
        return;
      }

      try {
        resolve(JSON.parse(raw));
      } catch (error) {
        reject(new Error("Invalid JSON"));
      }
    });

    request.on("error", reject);
  });
}

function sanitizePath(pathname) {
  const safePath = pathname === "/" ? "/index.html" : pathname;
  const filePath = path.normalize(path.join(ROOT, safePath));

  if (!filePath.startsWith(ROOT)) {
    return null;
  }

  return filePath;
}

function serveStatic(pathname, response) {
  const filePath = sanitizePath(pathname);
  if (!filePath) {
    sendText(response, 403, "Forbidden");
    return;
  }

  fs.readFile(filePath, (error, fileBuffer) => {
    if (error) {
      if (error.code === "ENOENT") {
        sendText(response, 404, "Not Found");
        return;
      }

      sendText(response, 500, "Internal Server Error");
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    response.writeHead(200, {
      "Content-Type": MIME_TYPES[ext] || "application/octet-stream"
    });
    response.end(fileBuffer);
  });
}

async function handleApi(request, response, url) {
  if (request.method === "GET" && url.pathname === "/api/applications") {
    sendJson(response, 200, readApplications());
    return true;
  }

  if (request.method === "POST" && url.pathname === "/api/applications") {
    try {
      const payload = await collectJson(request);
      const applications = readApplications();
      applications.unshift(payload);
      writeApplications(applications);
      sendJson(response, 201, payload);
    } catch (error) {
      sendJson(response, 400, { message: error.message });
    }
    return true;
  }

  if (request.method === "PATCH" && url.pathname.startsWith("/api/applications/")) {
    try {
      const id = Number(url.pathname.split("/").pop());
      const payload = await collectJson(request);
      const applications = readApplications();
      const index = applications.findIndex((item) => Number(item.id) === id);

      if (index === -1) {
        sendJson(response, 404, { message: "Application not found" });
        return true;
      }

      applications[index] = {
        ...applications[index],
        ...payload
      };

      writeApplications(applications);
      sendJson(response, 200, applications[index]);
    } catch (error) {
      sendJson(response, 400, { message: error.message });
    }
    return true;
  }

  return false;
}

const server = http.createServer(async (request, response) => {
  const url = new URL(request.url, `http://${request.headers.host}`);

  if (url.pathname.startsWith("/api/")) {
    const handled = await handleApi(request, response, url);
    if (!handled) {
      sendJson(response, 404, { message: "API route not found" });
    }
    return;
  }

  serveStatic(url.pathname, response);
});

server.listen(PORT, () => {
  ensureDataFile();
  console.log(`Job tracker server is running at http://localhost:${PORT}`);
});
