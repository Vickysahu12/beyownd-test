export default function QuestionMCQ({ question, selected, onSelect }) {
  return (
    <div>
      <p className="font-display text-lg text-ink mb-6 leading-snug">{question.question}</p>
      <div className="space-y-2">
        {question.options.map((opt) => (
          <button
            key={opt}
            onClick={() => onSelect(opt)}
            className={`w-full text-left px-4 py-3 border-l-2 transition-colors
              ${selected === opt
                ? "border-red bg-surface text-ink"
                : "border-transparent hover:bg-surface text-ink"}`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}