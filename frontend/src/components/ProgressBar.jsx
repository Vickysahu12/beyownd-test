export default function ProgressBar({ current, total }) {
  const pct = Math.round((current / total) * 100);
  return (
    <div className="w-full h-[3px] bg-line">
      <div className="h-full bg-red transition-all duration-300" style={{ width: `${pct}%` }} />
    </div>
  );
}