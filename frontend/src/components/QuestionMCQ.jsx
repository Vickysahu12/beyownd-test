export default function QuestionMCQ({ question, selected, onSelect }) {
  return (
    <div className="space-y-6">
      <h2 className="font-display font-semibold text-lg sm:text-xl text-ink leading-relaxed">
        {question.question}
      </h2>
      <div className="space-y-3">
        {question.options.map((opt, idx) => {
          const isSelected = selected === opt;
          return (
            <button
              key={opt}
              onClick={() => onSelect(opt)}
              className={`w-full text-left px-5 py-4 rounded-xl border transition-all duration-200 flex items-center gap-4 cursor-pointer
                ${isSelected 
                  ? "border-red bg-red/10 text-ink font-medium shadow-sm ring-1 ring-red" 
                  : "border-line/60 bg-surface/30 hover:bg-surface hover:border-line text-ink/90"}`}
            >
              <span className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-mono font-bold transition-colors
                ${isSelected ? "bg-red text-white" : "bg-bg border border-line text-muted"}`}>
                {String.fromCharCode(65 + idx)}
              </span>
              <span className="text-sm sm:text-base flex-1">{opt}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}