// lib/api.js

const API_BASE =
  process.env.NEXT_PUBLIC_CMS_API_BASE ||
  process.env.NEXT_PUBLIC_API_BASE_URL ||
  "http://localhost:5000";

/**
 * Internal helper to parse server errors nicely
 */
async function parseErrorResponse(res) {
  const contentType = res.headers.get("content-type") || "";

  if (contentType.includes("application/json")) {
    try {
      return await res.json();
    } catch {
      return null;
    }
  }

  try {
    const text = await res.text();
    return text ? { message: text } : null;
  } catch {
    return null;
  }
}

/**
 * Simple GET helper for public endpoints
 * Usage: apiGet("/api/public/exhibitions?page=1&limit=12")
 */
export async function apiGet(path, options = {}) {
  const res = await fetch(`${API_BASE}${path}`, {
    // disable static caching for dynamic content
    cache: "no-store",
    ...options,
  });

  if (!res.ok) {
    const body = await parseErrorResponse(res);
    throw new Error(body?.message || `Failed to fetch ${path}`);
  }

  return res.json();
}

/**
 * Generic JSON helper if you need POST/PUT later
 * Usage: apiJson("/api/public/xyz", "POST", { ...payload })
 */
export async function apiJson(path, method = "POST", body) {
  const res = await fetch(`${API_BASE}${path}`, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!res.ok) {
    const errorBody = await parseErrorResponse(res);
    throw new Error(errorBody?.message || "Request failed");
  }

  return res.json();
}
