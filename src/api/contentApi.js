// src/api/contentApi.js
// Small API wrapper for content-related frontend actions.

const isProduction = import.meta.env.VITE_ENV === 'production';
const API_URL = (isProduction ? import.meta.env.VITE_API_URL_PRO : import.meta.env.VITE_API_URL)
  || "http://localhost:5000";

function authHeaders() {
  const token = localStorage.getItem("adminToken");
  return token ? { Authorization: `Bearer ${token}` } : {};
}

export async function fetchContent() {
  const res = await fetch(`${API_URL}/api/content`, { headers: authHeaders() });
  if (res.status === 401) {
    // session expired or invalid token — clear and redirect to login
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminUsername');
  window.location.href = '/admin';
    throw new Error('Invalid or expired token');
  }
  if (!res.ok) {
    const err = await res.text();
    throw new Error(err || `Failed to fetch content (${res.status})`);
  }
  return res.json();
}

export async function uploadFile(file, section) {
  const fd = new FormData();
  fd.append("file", file);
  // include optional section so backend can pick the right resize preset
  if (section) fd.append('section', section);
  const res = await fetch(`${API_URL}/api/upload`, {
    method: "POST",
    headers: authHeaders(),
    body: fd,
  });
  const data = await res.json().catch(() => null);
  if (res.status === 401) {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminUsername');
  window.location.href = '/admin';
    throw new Error('Invalid or expired token');
  }
  if (!res.ok) {
    throw new Error((data && data.message) || `Upload failed (${res.status})`);
  }
  return data;
}

export async function listMedia() {
  const res = await fetch(`${API_URL}/api/upload/list`, { headers: authHeaders() });
  if (res.status === 401) {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminUsername');
  window.location.href = '/admin';
    throw new Error('Invalid or expired token');
  }
  if (!res.ok) {
    const err = await res.text().catch(() => null);
    throw new Error(err || `Failed to list media (${res.status})`);
  }
  return res.json();
}

export async function saveContent(payload) {
  // payload: { id?, section, title, body, mediaUrl, order }
  const res = await fetch(`${API_URL}/api/content`, {
    method: "POST",
    headers: Object.assign({ "Content-Type": "application/json" }, authHeaders()),
    body: JSON.stringify(payload),
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

export async function deleteContent(id) {
  const res = await fetch(`${API_URL}/api/content/${id}`, {
    method: "DELETE",
    headers: authHeaders(),
  });
  if (res.status === 401) {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminUsername');
  window.location.href = '/admin';
    throw new Error('Invalid or expired token');
  }
  if (!res.ok) {
    const data = await res.json().catch(() => null);
    throw new Error((data && data.message) || `Delete failed (${res.status})`);
  }
  return true;
}

export async function getOne(id) {
  // server doesn't expose GET /api/content/:id, so fetch all and find one
  const all = await fetchContent();
  return all.find((c) => c._id === id) || null;
}

export function getSections() {
  return [
    { key: "home", label: "Home", sections: ["home-hero","home-about","home-projects","home-partners","home-contact"] },
    { key: "about", label: "About", sections: ["about-hero","about-story"] },
    { key: "solutions", label: "Solutions", sections: ["solutions-hero","solutions-list"] },
    { key: "projects", label: "Projects", sections: ["projects-hero","projects-list"] },
    { key: "pricing", label: "Pricing", sections: ["pricing-hero","pricing-plans"] },
    { key: "partners", label: "Partners", sections: ["partners-hero","partners-list"] },
    { key: "stats", label: "Stats", sections: ["stats-main"] },
    { key: "contact", label: "Contact", sections: ["contact-main"] },
  ];
}
