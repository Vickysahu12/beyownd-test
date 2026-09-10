export default function QuestionDefinition({ question, value, onChange }) {
  return (
    <div>
      <p className="font-display text-lg text-ink mb-6 leading-snug">{question.question}</p>
      <textarea
        value={value || ""}
        onChange={(e) => onChange(e.target.value)}
        rows={5}
        placeholder="Write your answer here..."
        className="w-full border border-line focus:border-ink outline-none p-4 text-ink resize-none transition-colors"
      />
    </div>
  );
}