import { useState } from "react";
import AdminLogin from "../components/AdminLogin";
import AdminDashboard from "../components/AdminDashboard";

export default function AdminPage() {
  const [token, setToken] = useState(() => sessionStorage.getItem("admin_token"));
  if (!token) return <AdminLogin onLogin={setToken} />;
  return <AdminDashboard token={token} />;
}