import { create } from "zustand";

type ThemeType = "메인" | "퍼플" | "블루";

type SetState = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  isLogin: boolean;
  setIsLogin: (isLogin: boolean) => void;
  isTheme: ThemeType;
  setIsTheme: (isTheme: ThemeType) => void;
};

const useThemeStore = create<SetState>((set) => ({
  isOpen: false,
  setIsOpen: (isOpen) => set({ isOpen }),
  isLogin: false,
  setIsLogin: (isLogin) => set({ isLogin }),
  isTheme: "메인",
  setIsTheme: (isTheme) => set({ isTheme }),
}));

export default useThemeStore;
