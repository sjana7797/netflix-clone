import { create } from "zustand";
import { UserRegistrationSlice } from "./userRegistration/typing";
import { createUserRegistrationSlice } from "./userRegistration";
import {
  ContentPreviewModalSlice,
  createContentPreviewModalSlice,
} from "./contentPreviewModal";

export const useUserRegistration = create<UserRegistrationSlice>((...a) =>
  createUserRegistrationSlice(...a),
);
export const useContentPreviewModal = create<ContentPreviewModalSlice>((...a) =>
  createContentPreviewModalSlice(...a),
);
