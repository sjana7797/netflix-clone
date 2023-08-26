import type { StateCreator } from "zustand";
import { UserRegistrationSlice } from "./typing";

export const createUserRegistrationSlice: StateCreator<
  UserRegistrationSlice,
  [],
  [],
  UserRegistrationSlice
> = (set) => ({
  email: "",
  password: "",
  username: "",
  setEmail: (email) => set({ email }),
  setPassword: (password) => set({ password }),
  setUsername: (username) => set({ username }),
});
