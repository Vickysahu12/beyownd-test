import { connectDB } from "../db/connectDB.js";
import TestResult from "../models/TestResult.js";
import { verifyAdmin } from "../middlewares/verifyAdmin.js";

export const getResults = async (req, res) => {
  if (!verifyAdmin(req)) return res.status(401).json({ error: "Unauthorized" });

  try {
    await connectDB();
    const results = await TestResult.find().sort({ createdAt: -1 });
    return res.status(200).json({ results });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Failed to fetch results" });
  }
};