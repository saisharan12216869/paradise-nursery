import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
  },
  reducers: {
    addToCart(state, action) {
      const item = action.payload;
      state.items.push({ ...item, quantity: 1 });
      state.totalQuantity += 1;
      state.totalAmount += item.price;
    },
    increaseQty(state, action) {
      const item = state.items.find(i => i.id === action.payload);
      item.quantity++;
      state.totalQuantity++;
      state.totalAmount += item.price;
    },
    decreaseQty(state, action) {
      const item = state.items.find(i => i.id === action.payload);
      if (item.quantity > 1) {
        item.quantity--;
        state.totalQuantity--;
        state.totalAmount -= item.price;
      }
    },
    removeItem(state, action) {
      const item = state.items.find(i => i.id === action.payload);
      state.totalQuantity -= item.quantity;
      state.totalAmount -= item.price * item.quantity;
      state.items = state.items.filter(i => i.id !== action.payload);
    },
  },
});

export const { addToCart, increaseQty, decreaseQty, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
