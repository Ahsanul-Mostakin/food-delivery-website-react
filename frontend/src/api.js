
const API_URL = import.meta.env.VITE_API;

export async function fetchOrders() {
  try {
    const res = await fetch(`${API_URL}/api/order`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.error("API Fetch Error:", err);
    return [];
  }
}

export async function loginUser(credentials) {
  try {
    const res = await fetch(`${API_URL}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });
    return await res.json();
  } catch (err) {
    console.error("Login Error:", err);
  }
}