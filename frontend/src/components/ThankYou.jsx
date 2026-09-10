import { FiCheckCircle } from "react-icons/fi";

export default function ThankYou({ name }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-bg px-6">
      <div className="text-center max-w-sm">
        <FiCheckCircle className="text-red mx-auto mb-4" size={36} />
        <h1 className="font-display font-bold text-2xl text-ink mb-2">Test submitted{name ? `, ${name}` : ""}</h1>
        <p className="text-muted text-sm">
          Your responses have been recorded. Results will be emailed to you once reviewed.
        </p>
      </div>
    </div>
  );
}