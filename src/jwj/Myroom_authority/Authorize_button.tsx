import React, { useState } from "react";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/material";
import { sizes } from "../../styles/sizes";
import useThemeStore, { ThemeType } from "../../store/store";
import { colors } from "../../styles/colors";

const Authorize_button = () => {
  //zustand로 관리하는 테마 호출
  const { isTheme } = useThemeStore();

  const [selectedButton, setSelectedButton] = useState<boolean>();
  const theme = useTheme();

  const handleClick = (buttonType: boolean) => {
    setSelectedButton(buttonType);
  };

  // 현재 테마에 맞는 버튼 색상을 반환하는 함수
  const getButtonColor = () => {
    return isTheme === ("기본" as ThemeType)
      ? colors.background.button
      : colors.sub_background.button;
  };

  return (
    <Box sx={{ display: "flex", gap: "8px" }}>
      <Button
        sx={{
          fontSize: sizes.fontSize.large,
          width: "70px",
          height: "30px",
          padding: "4px",
          borderColor: theme.palette.grey[400],
          backgroundColor:
            selectedButton === true ? getButtonColor() : "transparent",
          color: selectedButton === true ? "#fff" : "#000",
          "&:hover": {
            borderColor:
              selectedButton === true
                ? getButtonColor()
                : theme.palette.grey[300],
            backgroundColor:
              selectedButton === true
                ? getButtonColor()
                : theme.palette.grey[300],
          },
          borderRadius: "8px",
        }}
        variant="outlined"
        onClick={() => handleClick(true)}
      >
        공개
      </Button>

      <Button
        sx={{
          fontSize: sizes.fontSize.large,
          width: "80px",
          height: "30px",
          padding: "4px",
          borderColor: theme.palette.grey[400],
          backgroundColor:
            selectedButton === false ? getButtonColor() : "transparent",
          color: selectedButton === false ? "#fff" : "#000",
          "&:hover": {
            borderColor:
              selectedButton === false
                ? getButtonColor()
                : theme.palette.grey[300],
            backgroundColor:
              selectedButton === false
                ? getButtonColor()
                : theme.palette.grey[300],
          },
          borderRadius: "8px",
        }}
        variant="outlined"
        onClick={() => handleClick(false)}
      >
        비공개
      </Button>
    </Box>
  );
};

export default Authorize_button;
