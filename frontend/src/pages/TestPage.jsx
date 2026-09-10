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
  if (!questions) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-bg text-muted font-mono text-sm">
        <div className="w-8 h-8 border-2 border-red border-t-transparent rounded-full animate-spin mb-4" />
        Loading assessment...
      </div>
    );
  }

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
    <div className="min-h-screen bg-bg flex flex-col justify-between">
      <ProgressBar current={step + 1} total={total} />
      
      <main className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-xl bg-surface/30 border border-line/40 rounded-2xl p-6 sm:p-8 shadow-sm">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-line/40">
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-red">
              Question {String(step + 1).padStart(2, "0")} / {total}
            </span>
            <span className="text-xs font-mono text-muted capitalize bg-bg px-2.5 py-1 rounded-md border border-line/50">
              Type: {current.type}
            </span>
          </div>

          {current.type === "mcq" && (
            <QuestionMCQ question={current} selected={currentValue} onSelect={handleAnswer} />
          )}
          {current.type === "yesNo" && (
            <QuestionYesNo question={current} selected={currentValue} onSelect={handleAnswer} />
          )}
          {current.type === "definition" && (
            <QuestionDefinition question={current} value={currentValue} onChange={handleAnswer} />
          )}

          {error && <p className="text-red text-xs font-medium mt-4 bg-red/10 p-3 rounded-lg border border-red/20">{error}</p>}

          <div className="flex items-center justify-between gap-4 mt-8 pt-6 border-t border-line/40">
            <button
              type="button"
              onClick={() => setStep((prev) => Math.max(0, prev - 1))}
              disabled={step === 0 || submitting}
              className="px-5 py-2.5 rounded-xl border border-line/60 text-xs font-semibold text-muted hover:text-ink disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              Previous
            </button>

            <button
              onClick={handleNext}
              disabled={!currentValue || submitting}
              className="bg-red hover:bg-red-dark disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold text-sm px-6 py-2.5 rounded-xl transition-all shadow-md shadow-red/20 active:scale-[0.98]"
            >
              {submitting ? "Submitting..." : step < total - 1 ? "Next Question" : "Submit Assessment"}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}