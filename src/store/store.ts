import { create } from "zustand";

type SetState = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  isLogin: boolean;
  setIsLogin: (isLogin: boolean) => void;
  isTheme: "퍼플" | "블루";
  setIsTheme: (isTheme: "퍼플" | "블루") => void;
};

const useThemeStore = create<SetState>((set) => ({
  isOpen: false,
  setIsOpen: (isOpen) => set({ isOpen }),
  isLogin: false,
  setIsLogin: (isLogin) => set({ isLogin }),
  isTheme: "퍼플",
  setIsTheme: (isTheme) => set({ isTheme }),
}));

export default useThemeStore;
