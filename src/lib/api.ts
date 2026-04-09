const API_URL = 'http://127.0.0.1:4000';

export async function apiFetch(
  endpoint: string,
  options: RequestInit = {},
) {
  const token = localStorage.getItem('token');

  const res = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
      ...options.headers,
    },
  });

  if (!res.ok) {
    throw new Error('API Error');
  }

  return res.json();
}

// ==== CMS Helpers ====

export async function getPageContent(slug: string) {
  try {
    const res = await fetch(`${API_URL}/pages/public/${slug}`);
    if (!res.ok) return null;
    return await res.json();
  } catch (error) {
    console.error("Error fetching page:", error);
    return null;
  }
}

export async function getAllPages() {
  return apiFetch('/pages');
}

export async function updatePageContent(id: string, payload: any) {
  return apiFetch(`/pages/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(payload),
  });
}

export async function getPageHistory(id: string) {
  return apiFetch(`/pages/${id}/history`);
}