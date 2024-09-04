import { create } from "zustand";

export type ThemeType = "기본" | "선셋";

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

  // 기존 방식의 테마 변경 코드 - 새로고침하면 초기화됨
  // isTheme: "클래식",
  // setIsTheme: (isTheme) => set({ isTheme }),

  // 로컬 스토리지에 저장한 테마명을 Zustand로 불러와서
  // 사용자가 선택한 현재 테마를 isTheme로 적용시킴
  // 새로고침을 하더라도 유저가 선택한 테마가 초기화되는 현상을 막음
  isTheme: (localStorage.getItem("app-theme") as ThemeType) || "기본",
  setIsTheme: (isTheme) => {
    set({ isTheme });

    // 테마 변경 시 로컬 스토리지에 저장
    localStorage.setItem("app-theme", isTheme);
  },
}));

export default useThemeStore;
