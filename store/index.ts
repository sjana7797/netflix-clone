import { create } from "zustand";
import { UserRegistrationSlice } from "./userRegistration/typing";
import { createUserRegistrationSlice } from "./userRegistration";

export const useUserRegistration = create<UserRegistrationSlice>((...a) =>
  createUserRegistrationSlice(...a),
);
