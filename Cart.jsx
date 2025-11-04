import React from "react";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, total } = useCart();
  return (
    <div className="p-4 border-t mt-4">
      <h2 className="text-lg font-bold mb-2">Cart Summary</h2>
      {cart.map((item) => (
        <div key={item._id} className="flex justify-between">
          <span>{item.name} x {item.qty}</span>
          <span>${item.price * item.qty}</span>
        </div>
      ))}
      <hr className="my-2" />
      <div className="font-semibold">Total: ${total}</div>
    </div>
  );
}
