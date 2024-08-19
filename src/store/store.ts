import { create } from "zustand";

type SetState = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  isLogin: boolean;
  setIsLogin: (isLogin: boolean) => void;
};

const useThemeStore = create<SetState>((set) => ({
  isOpen: false,
  setIsOpen: (isOpen) => set({ isOpen }),
  isLogin: false,
  setIsLogin: (isLogin) => set({ isLogin }),
}));

export default useThemeStore;
