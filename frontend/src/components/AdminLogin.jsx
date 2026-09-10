import { useState } from "react";
import { apiPost } from "../utils/api";

export default function AdminLogin({ onLogin }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { token } = await apiPost("admin-login", { password });
      sessionStorage.setItem("admin_token", token);
      onLogin(token);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg px-6">
      <form onSubmit={handleSubmit} className="w-full max-w-xs">
        <div className="border-l-2 border-red pl-4 mb-8">
          <h1 className="font-display font-bold text-xl text-ink">Admin</h1>
        </div>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full bg-transparent border-b border-line focus:border-ink outline-none py-2 mb-4"
        />
        {error && <p className="text-red text-xs mb-3">{error}</p>}
        <button className="w-full bg-red hover:bg-red-dark text-white font-medium py-3 transition-colors">
          Login
        </button>
      </form>
    </div>
  );
}