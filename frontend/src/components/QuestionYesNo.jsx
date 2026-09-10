export default function QuestionYesNo({ question, selected, onSelect }) {
  return (
    <div>
      <p className="font-display text-lg text-ink mb-6 leading-snug">{question.question}</p>
      <div className="flex gap-3">
        {["Yes", "No"].map((opt) => (
          <button
            key={opt}
            onClick={() => onSelect(opt)}
            className={`flex-1 py-3 border transition-colors
              ${selected === opt
                ? "border-red bg-red text-white"
                : "border-line text-ink hover:border-ink"}`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}