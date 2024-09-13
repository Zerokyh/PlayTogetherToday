import React from "react";
import { Button } from "@mui/material";
import { sizes } from "../../styles/sizes";
import useThemeStore, { ThemeType } from "../../store/store";
import { colors } from "../../styles/colors";

type ButtonNameProps = {
  name?: string;
};

const Gameroom_button = ({ name = "game" }: ButtonNameProps) => {
  //zustand로 관리하는 테마 호출
  const { isTheme } = useThemeStore();
  return (
    <Button
      variant="contained"
      sx={{
        width: 112,
        height: 56,
        bgcolor:
          isTheme == ("기본" as ThemeType)
            ? colors.background.subbutton
            : colors.sub_background.subbutton,
        borderRadius: "12px",
        textTransform: "none",
        fontSize: sizes.fontSize.large,
        color: "black",
      }}
    >
      {name}
    </Button>
  );
};

export default Gameroom_button;
