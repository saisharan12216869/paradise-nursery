import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
  },
  reducers: {
    addItem(state, action) {
      const item = action.payload;
      const existingItem = state.items.find(i => i.id === item.id);

      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }

      state.totalQuantity++;
      state.totalAmount += item.price;
    },

    updateQuantity(state, action) {
      const { id, type } = action.payload;
      const item = state.items.find(i => i.id === id);

      if (!item) return;

      if (type === "increase") {
        item.quantity++;
        state.totalQuantity++;
        state.totalAmount += item.price;
      }

      if (type === "decrease" && item.quantity > 1) {
        item.quantity--;
        state.totalQuantity--;
        state.totalAmount -= item.price;
      }
    },

    removeItem(state, action) {
      const id = action.payload;
      const item = state.items.find(i => i.id === id);

      if (!item) return;

      state.totalQuantity -= item.quantity;
      state.totalAmount -= item.quantity * item.price;
      state.items = state.items.filter(i => i.id !== id);
    },
  },
});

export const { addItem, updateQuantity, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
