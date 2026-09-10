import { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
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
    <div className="min-h-screen flex items-center justify-center bg-bg px-6">
      <div className="w-full max-w-md">
        <div className="border-l-2 border-red pl-4 mb-10">
          <p className="font-mono text-xs text-muted mb-1">Beyownd</p>
          <h1 className="font-display font-bold text-2xl text-ink">C Language Assessment</h1>
          <p className="text-sm text-muted mt-1">30 questions · roughly 20 minutes</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {["name", "college", "email"].map((field) => (
            <div key={field}>
              <label className="block text-sm text-ink mb-1.5 capitalize">
                {field === "email" ? "Email address" : field}
              </label>
              <input
                type={field === "email" ? "email" : "text"}
                value={form[field]}
                onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                className={`w-full bg-transparent border-b py-2 text-ink outline-none transition-colors
                  ${errors[field] ? "border-red" : "border-line focus:border-ink"}`}
                placeholder={field === "college" ? "Your college name" : field === "email" ? "you@college.edu" : "Your full name"}
              />
              {errors[field] && <p className="text-red text-xs mt-1">{errors[field]}</p>}
            </div>
          ))}

          <button
            type="submit"
            className="w-full mt-4 bg-red hover:bg-red-dark text-white font-medium py-3 flex items-center justify-center gap-2 transition-colors"
          >
            Start test <FiArrowRight />
          </button>
        </form>
      </div>
    </div>
  );
}