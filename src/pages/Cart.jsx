import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, modifyQuantityOfAnItem, removeItemFromCart } from "../features/cart";
import CartComponent from "../components/cartComponent/CartComponent";

// const cartItems = [
//   {
//     id: 1,
//     title: "Wireless Headphones",
//     price: 129.99,
//     quantity: 1,
//     image: "https://source.unsplash.com/100x100/?headphones,black",
//   },
//   {
//     id: 2,
//     title: "Smart Watch",
//     price: 99.99,
//     quantity: 3,
//     image: "https://source.unsplash.com/100x100/?smartwatch,white",
//   },
// ];

const Cart = () => {
  const cartItems= useSelector((state)=>state.cart)
  let total = 0;
  cartItems.forEach((item) => (total += item.price * item.quantity));

  return (
    <div className="min-h-screen bg-white text-black px-6 py-10 font-[var(--font-secondary)]">
      <h1
        className="text-center mb-10 uppercase tracking-wide"
        style={{
          fontSize: "var(--text-title)",
          fontFamily: "var(--font-primary)",
        }}
      >
        Cart
      </h1>

<CartComponent cartItems={cartItems} total={total}/>
    </div>
  );
};

export default Cart;
