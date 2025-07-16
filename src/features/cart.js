import { createSlice } from "@reduxjs/toolkit";

// Safe initialState
let initialState = [];

try {
  const storedCart = localStorage.getItem("cart");
  if (storedCart && storedCart !== "undefined") {
    initialState = JSON.parse(storedCart);
  }
} catch (error) {
  console.error("Error parsing cart from localStorage:", error);
  initialState = [];
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addToCart(state, action) {
      const product = state.find((item) => item.id === action.payload.id);
      if (product) {
        product.quantity++;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
      localStorage.setItem("cart", JSON.stringify(state));
    },

    removeItemFromCart(state, action) {
      const updatedCart = state.filter((item) => item.id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    },

    modifyQuantityOfAnItem(state, action) {
      const product = state.find((item) => item.id === action.payload.id);
      if (product) {
        product.quantity = action.payload.quantity;
        localStorage.setItem("cart", JSON.stringify(state));
      }
    },

    clearCart() {
      localStorage.removeItem("cart");
      return [];
    },
  },
});

export const {
  addToCart,
  removeItemFromCart,
  modifyQuantityOfAnItem,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
