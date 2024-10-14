import { Middleware } from "@reduxjs/toolkit";
import { login, logout } from "../slice/SessionSlice";

export const sessionMiddleware: Middleware = (store) => (next) => (action) => {
  if (login.match(action)) {
    localStorage.setItem("token", action.payload.token);
  } else if (logout.match(action)) {
    localStorage.removeItem("token");
  }
  return next(action);
};
