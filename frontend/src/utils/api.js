const BASE = "/api";

export async function apiPost(path, body) {
  // Strips leading slash from path if provided, avoiding double slashes
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  
  const res = await fetch(`${BASE}/${cleanPath}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.error || "Something went wrong");
  return data;
}

export async function apiGet(path, token) {
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;

  const headers = {};
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const res = await fetch(`${BASE}/${cleanPath}`, { headers });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || "Something went wrong");
  return data;
}