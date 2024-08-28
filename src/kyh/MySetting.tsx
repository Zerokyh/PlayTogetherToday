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
import useThemeStore from "../store/store";
import {
  FullPageBox,
  MySettingInnerBox,
  MySettingInnerStyle,
  MySettingOutterBox,
  MySettingTitleStyle,
} from "../styles/mui";
import IosSwitchButton from "../components/atom/IosSwitchButton";

const MySetting = () => {
  const { isTheme, setIsTheme } = useThemeStore();

  const handleThemeChange =
    (theme: "메인" | "퍼플" | "블루") => (event: SelectChangeEvent) => {
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
              <Box
                bgcolor={colors.background.secondary}
                sx={{ ...MySettingInnerStyle }}
              >
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
                    text: "메인",
                  }}
                  component={
                    <IosSwitchButton
                      color="success"
                      checked={isTheme === "메인"}
                      onChange={handleThemeChange("메인")}
                    />
                  }
                />
                <IconTextMuiBox
                  icontextboxprops={{
                    icon: <ContrastIcon />,
                    text: "퍼플",
                  }}
                  component={
                    <>
                      <IosSwitchButton
                        color="primary"
                        checked={isTheme === "퍼플"}
                        onChange={handleThemeChange("퍼플")}
                      />
                    </>
                  }
                />
                <IconTextMuiBox
                  icontextboxprops={{
                    icon: <ContrastIcon />,
                    text: "블루",
                  }}
                  component={
                    <IosSwitchButton
                      color="secondary"
                      checked={isTheme === "블루"}
                      onChange={handleThemeChange("블루")}
                    />
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
