import mongoose from "mongoose";

const testResultSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    college: { type: String, required: true },
    email: { type: String, required: true, lowercase: true },
    mcqAnswers: [{ questionId: Number, selected: String }],
    yesNoAnswers: [{ questionId: Number, selected: String }],
    definitionAnswers: [{ questionId: Number, answer: String }],
    autoScore: { type: Number, default: 0 },       // MCQ + Yes/No, out of 25
    maxAutoScore: { type: Number},
    definitionReviewed: { type: Boolean, default: false },
    manualScore: { type: Number, default: null },   // tum definitions padh ke manually doge
  },
  { timestamps: true }
);

testResultSchema.index({ email: 1 }, { unique: true }); // duplicate submission blocker

export default mongoose.models.TestResult || mongoose.model("TestResult", testResultSchema);