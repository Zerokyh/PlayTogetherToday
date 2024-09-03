import { create } from "zustand";

export type ThemeType = "클래식" | "선셋";

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
  isTheme: "클래식",
  setIsTheme: (isTheme) => set({ isTheme }),
}));

export default useThemeStore;
