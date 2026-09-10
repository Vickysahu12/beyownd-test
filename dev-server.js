import "dotenv/config";
import http from "node:http";
import { parse } from "node:url";
import getQuestionsHandler from "./api/get-questions.js";
import submitTestHandler from "./api/submit-test.js";
import adminLoginHandler from "./api/admin-login.js";
import getResultsHandler from "./api/get-results.js";

const routes = {
  "/api/get-questions": getQuestionsHandler,
  "/api/submit-test": submitTestHandler,
  "/api/admin-login": adminLoginHandler,
  "/api/get-results": getResultsHandler,
};

function attachHelpers(res) {
  res.status = (code) => { res.statusCode = code; return res; };
  res.json = (data) => {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(data));
  };
  return res;
}

const server = http.createServer(async (req, res) => {
  const { pathname, query } = parse(req.url, true);
  attachHelpers(res);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization");
  if (req.method === "OPTIONS") return res.end();

  const handler = routes[pathname];
  if (!handler) return res.status(404).json({ error: "Not found" });

  req.query = query;
  if (req.method === "POST") {
    let body = "";
    req.on("data", (chunk) => (body += chunk));
    req.on("end", async () => {
      try { req.body = body ? JSON.parse(body) : {}; } catch { req.body = {}; }
      await handler(req, res);
    });
  } else {
    await handler(req, res);
  }
});

server.listen(5000, () => console.log("✅ Local API server: http://localhost:5000"));