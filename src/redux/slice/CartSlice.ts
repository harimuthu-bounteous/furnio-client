import { CartItem } from "@/src/types/CartItem";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartState {
  isCartOpen: boolean;
  items: CartItem[];
  totalPrice: number;
}

const initialState: CartState = {
  isCartOpen: false,
  items: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(
        (item) =>
          item.ProductId === action.payload.ProductId &&
          item.Size === action.payload.Size &&
          item.Color.Name === action.payload.Color.Name
      );
      if (existingItem) {
        existingItem.Quantity += action.payload.Quantity;
      } else {
        state.items.push({ ...action.payload });
      }

      // Recalculate totalPrice after adding an item
      state.totalPrice = state.items.reduce((total, item) => {
        const itemTotal = item.Product.Price * item.Quantity;
        const discount = item.Product.Discount
          ? (item.Product.Discount / 100) * itemTotal
          : 0;
        return total + (itemTotal - discount);
      }, 0);
    },
    removeItem: (
      state,
      action: PayloadAction<{
        ProductId: string;
        Size: string;
        ColorName: string;
      }>
    ) => {
      const { ProductId, Size, ColorName } = action.payload;
      const index = state.items.findIndex(
        (item) =>
          item.ProductId === ProductId &&
          item.Size === Size &&
          item.Color.Name === ColorName
      );
      if (index >= 0) {
        state.items.splice(index, 1);
      }
      // Recalculate totalPrice after removing an item
      state.totalPrice = state.items.reduce((total, item) => {
        const itemTotal = item.Product.Price * item.Quantity;
        const discount = item.Product.Discount
          ? (item.Product.Discount / 100) * itemTotal
          : 0;
        return total + (itemTotal - discount);
      }, 0);
    },
    clearCart: (state) => {
      state.items = [];
      state.totalPrice = 0;
    },
    openCart: (state) => {
      state.isCartOpen = true;
    },
    closeCart: (state) => {
      state.isCartOpen = false;
    },
  },
});

export const { addItem, removeItem, clearCart, openCart, closeCart } =
  cartSlice.actions;
export default cartSlice.reducer;
