// submit-test.js
import { submitTest } from "../backend/src/controllers/submitTest.js";
export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  return submitTest(req, res);
}