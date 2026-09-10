
// get-results.js
import { getResults } from "../backend/src/controllers/getResults.js";
export default async function handler(req, res) {
  if (req.method !== "GET") return res.status(405).json({ error: "Method not allowed" });
  return getResults(req, res);
}