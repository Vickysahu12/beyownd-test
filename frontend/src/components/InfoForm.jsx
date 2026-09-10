import { useState } from "react";
import { FiArrowRight, FiShield } from "react-icons/fi";
import { validateInfoForm } from "../utils/validator";

export default function InfoForm({ onSubmit }) {
  const [form, setForm] = useState({ name: "", college: "", email: "" });
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateInfoForm(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    onSubmit(form);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg px-4 py-8 relative overflow-hidden">
      {/* Background Accent Glow */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="w-full max-w-md bg-surface/40 backdrop-blur-md border border-line/50 p-6 sm:p-8 rounded-2xl shadow-xl relative z-10">
        <div className="border-l-4 border-red pl-4 mb-8">
          <div className="flex items-center gap-2 mb-1">
            <FiShield className="text-red text-xs" />
            <span className="font-mono text-xs uppercase tracking-widest text-muted">Beyownd Platform</span>
          </div>
          <h1 className="font-display font-extrabold text-2xl text-ink tracking-tight">
            C Language Assessment
          </h1>
          <p className="text-xs text-muted mt-1 font-medium">30 Questions · ~20 Minutes</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {[
            { key: "name", label: "Full Name", placeholder: "e.g. Peter Parker" },
            { key: "college", label: "College / University", placeholder: "e.g. Empire State University" },
            { key: "email", label: "Email Address", placeholder: "you@example.com" }
          ].map(({ key, label, placeholder }) => (
            <div key={key}>
              <label className="block text-xs font-semibold uppercase tracking-wider text-muted mb-2">
                {label}
              </label>
              <input
                type={key === "email" ? "email" : "text"}
                value={form[key]}
                onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                className={`w-full bg-bg/80 border rounded-xl px-4 py-3 text-sm text-ink outline-none transition-all duration-200
                  ${errors[key] ? "border-red focus:ring-2 focus:ring-red/20" : "border-line/70 focus:border-red focus:ring-2 focus:ring-red/10"}`}
                placeholder={placeholder}
              />
              {errors[key] && <p className="text-red text-xs font-medium mt-1.5">{errors[key]}</p>}
            </div>
          ))}

          <button
            type="submit"
            className="w-full mt-6 bg-red hover:bg-red-dark text-white font-semibold py-3.5 px-6 rounded-xl shadow-lg shadow-red/20 flex items-center justify-center gap-2 active:scale-[0.99] transition-all duration-200 cursor-pointer"
          >
            Start Assessment <FiArrowRight className="text-lg" />
          </button>
        </form>
      </div>
    </div>
  );
}