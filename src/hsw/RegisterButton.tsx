import * as React from "react";
import { Button as BaseButton } from "@mui/base/Button";
import { styled } from "@mui/system";
import Stack from "@mui/material/Stack";
import { colors } from "../styles/colors";
import { useTheme } from "@mui/material/styles"; // MUI 테마 훅을 사용
import useThemeStore from "../store/store";

export default function UnstyledButtonsSimple() {
  return (
    <Stack spacing={1} direction="row">
      <Button>모임생성</Button>
    </Stack>
  );
}

const pink = {
  40: "#e4cffa",
  50: "#ddc6f5",
  60: "#d0aef5",
};

const blue = {
  200: "#99CCFF",
  300: "#66B2FF",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  700: "#0066CC",
};

const grey = {
  50: "#F3F6F9",
  100: "#E5EAF2",
  200: "#DAE2ED",
  300: "#C7D0DD",
  400: "#B0B8C4",
  500: "#9DA8B7",
  600: "#6B7A90",
  700: "#434D5B",
  800: "#303740",
  900: "#1C2025",
};

const Button = styled(BaseButton)(({ theme }) => {
  const { isTheme } = useThemeStore(); // MUI의 useTheme 훅 사용

  const backgroundColor =
    isTheme === "기본"
      ? colors.background.tertiary
      : colors.sub_background.tertiary;

  const borderColor =
    isTheme === "기본"
      ? colors.background.tertiary
      : colors.sub_background.tertiary;

  const shadowColor =
    theme.palette.mode === "dark"
      ? "rgba(0, 0, 0, 0.5)"
      : "rgba(45, 45, 60, 0.2)";

  const insetShadowColor =
    isTheme === "기본"
      ? colors.background.tertiary
      : colors.sub_background.tertiary;

  return `
    font-family: 'IBM Plex Sans', sans-serif;
    width: fit-content;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.5;
    background-color: ${backgroundColor};
    padding: 8px 16px;
    border-radius: 30px;
    color: black;
    transition: all 150ms ease;
    cursor: pointer;
    border: 1px solid ${borderColor};
    box-shadow: 0 2px 1px ${shadowColor}, inset 0 1.5px 1px ${insetShadowColor}, inset 0 -2px 1px ${insetShadowColor};

    &:active {
      background-color: ${blue[200]};
      box-shadow: none;
      transform: scale(0.99);
    }

    &:focus-visible {
      box-shadow: 0 0 0 4px ${
        theme.palette.mode === "dark" ? blue[300] : blue[200]
      };
      outline: none;
    }

    &.base--disabled {
      background-color: ${
        theme.palette.mode === "dark" ? grey[700] : grey[200]
      };
      color: ${theme.palette.mode === "dark" ? grey[200] : grey[700]};
      border: 0;
      cursor: default;
      box-shadow: none;
      transform: scale(1);
    }
  `;
});
