// MySetting.tsx

import * as React from "react";
import { Box, SelectChangeEvent, ThemeProvider } from "@mui/material";
import { colors, theme } from "../styles/colors";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ContrastIcon from "@mui/icons-material/Contrast";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { sizes } from "../styles/sizes";
import IconTextTextBox from "../components/molecules/IconTextTextBox";
import IconTextMuiBox from "../components/molecules/IconTextMuiBox";
import {
  FullPageBox,
  MySettingInnerStyle,
  MySettingTitleStyle,
} from "../styles/mui";
import { styled } from "@mui/material/styles";
import IosSwitchButton from "../components/atom/IosSwitchButton";

// zustand 설정 파일 호출
import useThemeStore from "../store/store";

const MySetting = () => {
  // 테마 호출
  const { isTheme, setIsTheme } = useThemeStore();

  const MySettingOutterBox = styled(Box)({
    // 테마에 따라 색이 바뀔 영역에다 삼항식으로 설정
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
  });

  const MySettingInnerBox = styled(Box)({
    // 테마에 따라 색이 바뀔 영역에다 삼항식으로 설정
    backgroundColor:
      isTheme == "기본"
        ? colors.background.secondary
        : colors.sub_background.secondary,
    width: 400,
    height: 500,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: sizes.borderRadius.medium,
    gap: 30,
  });

  // 테마 설정 영역에서 유저가 스위치를 조작할 경우 테마가 바뀌도록 설정
  const handleThemeChange =
    (theme: "기본" | "선셋") => (event: SelectChangeEvent) => {
      setIsTheme(theme);
    };

  return (
    <ThemeProvider theme={theme}>
      <FullPageBox>
        <Box sx={{ maxWidth: "1280px" }}>
          <MySettingOutterBox>
            <MySettingInnerBox>
              <Box minWidth={400}>
                <IconTextTextBox
                  icontextboxprops={{
                    icon: <SettingsIcon />,
                    text: "설정",
                    iconsize: sizes.fontSize.xlarge,
                    fontsize: sizes.fontSize.xlarge,
                  }}
                  sx={{
                    ...MySettingTitleStyle,
                  }}
                />
              </Box>
              <IconTextTextBox
                icontextboxprops={{
                  icon: <AccountCircleIcon />,
                  text: "개인정보관리",
                }}
                textbutton="편집"
                href="/MyInfoModify"
                hover={{ ":hover": { cursor: "pointer" } }}
              />

              {/* 테마 변경 UI를 스위치로 유저가 변경할 수 있게 구현 */}
              <Box sx={{ ...MySettingInnerStyle }}>
                <IconTextTextBox
                  icontextboxprops={{
                    icon: <ContrastIcon />,
                    text: "테마 설정",
                  }}
                  textbutton={isTheme}
                />
                <IconTextMuiBox
                  icontextboxprops={{
                    icon: <ContrastIcon />,
                    text: "클래식",
                  }}
                  component={
                    <IosSwitchButton
                      color="primary"
                      checked={isTheme === "기본"}
                      onChange={handleThemeChange("기본")}
                    />
                  }
                />
                <IconTextMuiBox
                  icontextboxprops={{
                    icon: <ContrastIcon />,
                    text: "선셋",
                  }}
                  component={
                    <>
                      <IosSwitchButton
                        color="secondary"
                        checked={isTheme === "선셋"}
                        onChange={handleThemeChange("선셋")}
                      />
                    </>
                  }
                />
              </Box>

              <IconTextTextBox
                icontextboxprops={{
                  icon: <PersonOutlineIcon />,
                  text: "마이룸 방문권한",
                }}
                textbutton="편집"
                hover={{ ":hover": { cursor: "pointer" } }}
                href="/MyroomAuthority"
              />
            </MySettingInnerBox>
          </MySettingOutterBox>
        </Box>
      </FullPageBox>
    </ThemeProvider>
  );
};

export default MySetting;
