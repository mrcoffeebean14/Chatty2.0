import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("Chatty-theme") || "night",
  setTheme: (theme) => {
    localStorage.setItem("Chatty-theme", theme);
    set({ theme });
  },
}));