import React from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import LoginForm from "./components/LoginForm";
import { CartProvider } from "./context/CartContext";

export default function App() {
  return (
    <CartProvider>
      <div className="max-w-5xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">🛍️ Simple eCommerce</h1>
        <LoginForm />
        <ProductList />
        <Cart />
      </div>
    </CartProvider>
  );
}
