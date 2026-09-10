import { connectDB } from "../db/connectDB.js";
import TestResult from "../models/TestResult.js";
import { mcqQuestions, yesNoQuestions } from "../config/questions.js";

export const submitTest = async (req, res) => {
  try {
    await connectDB();
    const { name, college, email, mcqAnswers, yesNoAnswers, definitionAnswers } = req.body;

    if (!name || !college || !email) {
      return res.status(400).json({ error: "Name, college and email are required" });
    }
    if (!mcqAnswers || !yesNoAnswers || !definitionAnswers) {
      return res.status(400).json({ error: "Incomplete submission" });
    }

    const existing = await TestResult.findOne({ email: email.toLowerCase() });
    if (existing) {
      return res.status(409).json({ error: "A submission with this email already exists" });
    }

    let autoScore = 0;
    mcqAnswers.forEach((ans) => {
      const q = mcqQuestions.find((q) => q.id === ans.questionId);
      if (q && q.correctAnswer === ans.selected) autoScore++;
    });
    yesNoAnswers.forEach((ans) => {
      const q = yesNoQuestions.find((q) => q.id === ans.questionId);
      if (q && q.correctAnswer === ans.selected) autoScore++;
    });

    const maxAutoScore = mcqQuestions.length + yesNoQuestions.length; // ✅ ab dynamic hai (40)

    const result = await TestResult.create({
      name, college, email: email.toLowerCase(),
      mcqAnswers, yesNoAnswers, definitionAnswers,
      autoScore, maxAutoScore,
    });

    return res.status(201).json({ success: true, id: result._id });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Something went wrong, please try again" });
  }
};