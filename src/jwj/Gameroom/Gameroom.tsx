import React from "react";
import { Grid, Box } from "@mui/material";
import Gameroom_button from "./Gameroom_button";
import { sizes } from "../../styles/sizes";
import useThemeStore, { ThemeType } from "../../store/store";
import { colors } from "../../styles/colors";

const Gameroom = () => {
  //zustand로 관리하는 테마 호출
  const { isTheme } = useThemeStore();

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        gridTemplateRows: "repeat(5, 1fr)",
        gap: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gridColumn: "span 5",
          backgroundColor:
            isTheme == ("기본" as ThemeType)
              ? colors.background.secondary
              : colors.sub_background.secondary,
          borderRadius: 2,
          gap: 3,
          padding: 2,
        }}
      >
        <Gameroom_button name="사다리타기" />
        <Gameroom_button name="룰렛" />
        <Gameroom_button />
        <Gameroom_button />
        <Gameroom_button />
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gridColumn: "span 5",
          gridRow: "span 4 / span 5",
          bgcolor:
            isTheme == ("기본" as ThemeType)
              ? colors.background.secondary
              : colors.sub_background.secondary,
          borderRadius: 2,
        }}
      >
        게임공간
      </Box>
    </Box>
  );
};

export default Gameroom;
