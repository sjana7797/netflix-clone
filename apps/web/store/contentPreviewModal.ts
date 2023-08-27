import type { TMDBContent } from "types";
import { StateCreator } from "zustand";

export interface ContentPreviewModalSlice {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  content: TMDBContent | null;
  setContent: (content: TMDBContent) => void;
}

export const createContentPreviewModalSlice: StateCreator<
  ContentPreviewModalSlice,
  [],
  [],
  ContentPreviewModalSlice
> = (set) => ({
  isOpen: false,
  setIsOpen: (isOpen) => set({ isOpen }),
  content: null,
  setContent: (content) => set({ content }),
});
