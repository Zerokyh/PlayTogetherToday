import * as React from "react";
import { Box, ThemeProvider, Typography } from "@mui/material";
import { FullPageBox, InputMuiStyle, MyInfoInnerBox } from "../styles/mui";
import { colors, theme } from "../styles/colors";
import ChipTextBox from "../components/atom/ChipTextBox";
import { sizes } from "../styles/sizes";
import { infoData } from "../constants/myInfoModifyMenuData";
import InputModifyBox from "../components/atom/InputModifyBox";
import { styled } from "@mui/material/styles";
import useThemeStore from "../store/store";
import MyInfoProfileImage from "./MyInfoProfileImage";

const MyInfoModify = () => {
  const { isTheme } = useThemeStore();

  const MySettingOutterBox = styled(Box)({
    backgroundColor:
      isTheme == "기본"
        ? colors.background.secondary
        : colors.sub_background.secondary,
    minWidth: 500,
    minHeight: 640,
    borderRadius: sizes.borderRadius.medium,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    padding: 0,
    position: "relative",
    top: -18,
  });

  return (
    <ThemeProvider theme={theme}>
      <FullPageBox>
        <Box sx={{ maxWidth: "1280px" }}>
          <Box
            sx={{
              position: "relative",
              top: -40,
              left: 180,
            }}
          >
            <Typography
              sx={{ fontSize: sizes.fontSize.xlarge, fontWeight: 600 }}
            >
              개인정보 편집
            </Typography>
          </Box>
          <MySettingOutterBox>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "2",
              }}
            >
              <MyInfoInnerBox sx={{ width: "377px" }}>
                <MyInfoProfileImage />
                {Object.entries(infoData).map(([key, item]) => (
                  <Box sx={{ height: 60 }}>
                    <ChipTextBox titlename={item.titlename} />
                    <InputModifyBox
                      width="240px"
                      sx={InputMuiStyle}
                      placeholder={item.inputsubject}
                    />
                  </Box>
                ))}
              </MyInfoInnerBox>
            </Box>
          </MySettingOutterBox>
        </Box>
      </FullPageBox>
    </ThemeProvider>
  );
};

export default MyInfoModify;
