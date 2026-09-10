import { mcqQuestions, definitionQuestions, yesNoQuestions } from "../config/questions.js";

export const getQuestions = async (req, res) => {
  const safeMcq = mcqQuestions.map(({ id, question, options }) => ({ id, question, options }));
  const safeYesNo = yesNoQuestions.map(({ id, question }) => ({ id, question }));
  return res.status(200).json({ mcq: safeMcq, definitions: definitionQuestions, yesNo: safeYesNo });
};