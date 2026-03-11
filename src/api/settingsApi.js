const isProduction = import.meta.env.VITE_ENV === 'production';
const API_URL = (isProduction ? import.meta.env.VITE_API_URL_PRO : import.meta.env.VITE_API_URL)
  || "http://localhost:5000";

function authHeaders() {
  const token = localStorage.getItem("adminToken");
  return token ? { Authorization: `Bearer ${token}` } : {};
}

export async function getLogo() {
  const res = await fetch(`${API_URL}/api/settings/logo`);
  if (!res.ok) {
    const err = await res.text().catch(() => null);
    throw new Error(err || `Failed to fetch logo (${res.status})`);
  }
  return res.json();
}

export async function saveLogo(logoUrl) {
  const res = await fetch(`${API_URL}/api/settings/logo`, {
    method: 'POST',
    headers: Object.assign({ 'Content-Type': 'application/json' }, authHeaders()),
    body: JSON.stringify({ logoUrl }),
  });
  const data = await res.json().catch(() => null);
  if (res.status === 401) {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminUsername');
    window.location.href = '/admin';
    throw new Error('Invalid or expired token');
  }
  if (!res.ok) throw new Error((data && data.message) || `Save failed (${res.status})`);
  return data;
}
