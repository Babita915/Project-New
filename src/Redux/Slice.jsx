import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: localStorage.getItem('cart')?JSON.parse(localStorage.getItem('cart')):[]
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      localStorage.setItem('cart', JSON.stringify(state.items))
      const existing = state.items.find((i) => i.id === item.id);

      if (existing) {
        existing.qty += 1;
      } else {
        state.items.push({ ...item, qty: 1 });
      }
    },

    incrementQty: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (item) item.qty += 1;
    },

    decrementQty: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (item && item.qty > 1) {
        item.qty -= 1;
      }
    },

    removeItem: (state, action) => {
      state.items = state.items.filter((i) => i.id !== action.payload);
      localStorage.setItem('cart', JSON.stringify(state.items))
    },

    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const {
  addItem,
  incrementQty,
  decrementQty,
  removeItem,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
