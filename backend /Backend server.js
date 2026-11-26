"use strict";

const http = require("node:http");

const PORT = Number(process.env.PORT) || 3000;

const server = http.createServer((req, res) => {
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("X-Frame-Options", "DENY");
  res.setHeader("Referrer-Policy", "no-referrer");
  res.setHeader("Cache-Control", "no-store");
  res.setHeader("Content-Type", "application/json; charset=utf-8");

  if (req.method !== "GET" && req.method !== "HEAD") {
    res.writeHead(405, { Allow: "GET, HEAD" });
    return res.end(JSON.stringify({ error: "Method not allowed" }));
  }

  if (req.url === "/health") {
    res.writeHead(200);
    return res.end(JSON.stringify({ status: "ok" }));
  }

  if (req.url === "/api/status") {
    res.writeHead(200);
    return res.end(JSON.stringify({
      name: "LifeGuard AI",
      status: "prototype",
      privacy: "No personal data is collected or stored by this server"
    }));
  }

  res.writeHead(404);
  return res.end(JSON.stringify({ error: "Not found" }));
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`LifeGuard AI backend listening on port ${PORT}`);
});
