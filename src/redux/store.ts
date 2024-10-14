import { configureStore } from "@reduxjs/toolkit";
import sessionReducer from "./slice/SessionSlice";
import cartReducer from "./slice/CartSlice";

const store = configureStore({
  reducer: {
    session: sessionReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
