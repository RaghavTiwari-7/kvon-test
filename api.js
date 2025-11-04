const API_URL = import.meta.env.VITE_API_URL;

export async function fetchProducts(page = 1) {
  const res = await fetch(`${API_URL}/api/products?page=${page}`);
  return res.json();
}

export async function loginUser(email, password) {
  const res = await fetch(`${API_URL}/api/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  return res.json();
}
