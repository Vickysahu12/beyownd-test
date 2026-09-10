import { useEffect, useState } from "react";
import { apiGet } from "../utils/api";

export default function AdminDashboard({ token }) {
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiGet("get-results", token).then((d) => setResults(d.results)).catch((e) => setError(e.message));
  }, [token]);

  return (
    <div className="min-h-screen bg-bg px-6 py-10">
      <div className="max-w-5xl mx-auto">
        <div className="border-l-2 border-red pl-4 mb-8">
          <h1 className="font-display font-bold text-xl text-ink">Results</h1>
          <p className="text-sm text-muted">{results.length} submissions</p>
        </div>
        {error && <p className="text-red text-sm">{error}</p>}
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-line text-left text-muted font-mono text-xs">
                <th className="py-2 pr-4">Name</th>
                <th className="py-2 pr-4">College</th>
                <th className="py-2 pr-4">Email</th>
                <th className="py-2 pr-4">Auto score</th>
                <th className="py-2 pr-4">Manual score</th>
              </tr>
            </thead>
            <tbody>
              {results.map((r) => (
                <tr key={r._id} className="border-b border-line">
                  <td className="py-3 pr-4">{r.name}</td>
                  <td className="py-3 pr-4">{r.college}</td>
                  <td className="py-3 pr-4">{r.email}</td>
                  <td className="py-3 pr-4 font-mono">{r.autoScore}/{r.maxAutoScore}</td>
                  <td className="py-3 pr-4 font-mono">{r.manualScore ?? "—"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}