import React, { useEffect, useState } from "react";
import { fetchProducts } from "../api/api";
import { useCart } from "../context/CartContext";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const { addToCart } = useCart();

  useEffect(() => {
    fetchProducts(page).then((data) => setProducts(data.products || data));
  }, [page]);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Products</h2>
      <div className="grid grid-cols-3 gap-4">
        {products.map((p) => (
          <div key={p._id} className="border p-3 rounded-md shadow">
            <h3 className="font-semibold">{p.name}</h3>
            <p>${p.price}</p>
            <button
              onClick={() => addToCart(p)}
              className="bg-blue-500 text-white px-3 py-1 rounded mt-2"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-4 gap-2">
        <button
          disabled={page === 1}
          onClick={() => setPage((p) => p - 1)}
          className="px-3 py-1 bg-gray-200 rounded"
        >
          Prev
        </button>
        <button
          onClick={() => setPage((p) => p + 1)}
          className="px-3 py-1 bg-gray-200 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
}
