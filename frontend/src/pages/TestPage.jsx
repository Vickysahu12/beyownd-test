import { useState, useEffect } from "react";
import InfoForm from "../components/InfoForm";
import ProgressBar from "../components/ProgressBar";
import QuestionMCQ from "../components/QuestionMCQ";
import QuestionYesNo from "../components/QuestionYesNo";
import QuestionDefinition from "../components/QuestionDefinition";
import ThankYou from "../components/ThankYou";
import { useTestProgress } from "../hooks/useTestProgress";
import { apiGet, apiPost } from "../utils/api";

export default function TestPage() {
  const { progress, updateAnswer, setInfo, markSubmitted } = useTestProgress();
  const [questions, setQuestions] = useState(null);
  const [step, setStep] = useState(0);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    apiGet("get-questions").then(setQuestions).catch(() => setError("Failed to load test. Please refresh."));
  }, []);

  if (progress.submitted) return <ThankYou name={progress.info?.name} />;
  if (!progress.info) return <InfoForm onSubmit={setInfo} />;
  if (!questions) return <div className="min-h-screen flex items-center justify-center text-muted">Loading test...</div>;

  const allQuestions = [
    ...questions.mcq.map((q) => ({ ...q, type: "mcq" })),
    ...questions.definitions.map((q) => ({ ...q, type: "definition" })),
    ...questions.yesNo.map((q) => ({ ...q, type: "yesNo" })),
  ];
  const total = allQuestions.length;
  const current = allQuestions[step];

  const answerMap = { mcq: "mcqAnswers", definition: "definitionAnswers", yesNo: "yesNoAnswers" };
  const keyMap = { mcq: "selected", definition: "answer", yesNo: "selected" };
  const currentAnswers = progress[answerMap[current.type]];
  const currentValue = currentAnswers.find((a) => a.questionId === current.id)?.[keyMap[current.type]];

  const handleAnswer = (value) => updateAnswer(answerMap[current.type], current.id, value, keyMap[current.type]);

  const handleNext = async () => {
    if (step < total - 1) {
      setStep(step + 1);
      return;
    }
    setSubmitting(true);
    setError("");
    try {
      await apiPost("submit-test", {
        ...progress.info,
        mcqAnswers: progress.mcqAnswers,
        yesNoAnswers: progress.yesNoAnswers,
        definitionAnswers: progress.definitionAnswers,
      });
      markSubmitted();
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-bg flex flex-col">
      <ProgressBar current={step + 1} total={total} />
      <div className="flex-1 flex items-center justify-center px-6">
        <div className="w-full max-w-lg py-10">
          <p className="font-mono text-xs text-muted mb-8">
            Q{String(step + 1).padStart(2, "0")} / {total}
          </p>

          {current.type === "mcq" && (
            <QuestionMCQ question={current} selected={currentValue} onSelect={handleAnswer} />
          )}
          {current.type === "yesNo" && (
            <QuestionYesNo question={current} selected={currentValue} onSelect={handleAnswer} />
          )}
          {current.type === "definition" && (
            <QuestionDefinition question={current} value={currentValue} onChange={handleAnswer} />
          )}

          {error && <p className="text-red text-sm mt-4">{error}</p>}

          <button
            onClick={handleNext}
            disabled={!currentValue || submitting}
            className="mt-8 bg-red hover:bg-red-dark disabled:bg-line disabled:text-muted text-white font-medium px-6 py-3 transition-colors"
          >
            {submitting ? "Submitting..." : step < total - 1 ? "Next" : "Submit test"}
          </button>
        </div>
      </div>
    </div>
  );
}