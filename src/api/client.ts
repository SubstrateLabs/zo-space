// API Client Configuration
const API_BASE_URL = `https://${import.meta.env.VITE_ZO_USER}.api.zo.space`;

// Base fetch wrapper with common configuration
async function apiFetch(endpoint: string, options: RequestInit = {}) {
  const url = `${API_BASE_URL}${endpoint}`;
  const defaultHeaders = {
    "Content-Type": "application/json",
    ...options.headers,
  };

  const response = await fetch(url, {
    ...options,
    headers: defaultHeaders,
  });

  if (!response.ok) {
    throw new Error(`API Error: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

// API Endpoint Functions
// These functions correspond to the @/api FastAPI endpoints

// Example structure for future endpoints:
// export async function getUsers() {
//   return apiFetch('/users');
// }

export { API_BASE_URL, apiFetch };
