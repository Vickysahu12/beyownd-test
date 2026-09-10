// admin-login.js
import { adminLogin } from "../backend/src/controllers/adminLogin.js";
export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  return adminLogin(req, res);
}