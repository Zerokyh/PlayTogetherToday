import * as React from "react";
import { Box, ThemeProvider, Typography } from "@mui/material";
import {
  FullPageBox,
  InputMuiStyle,
  MyInfoInnerBox,
  MySettingOutterBox,
} from "../styles/mui";
import { theme } from "../styles/colors";
import ChipTextBox from "../components/atom/ChipTextBox";
import { sizes } from "../styles/sizes";
import ImgAvatar from "../components/atom/ImgAvatar";
import { infoData } from "../constants/myInfoModifyMenuData";
import InputModifyBox from "../components/atom/InputModifyBox";
import EditIcon from "@mui/icons-material/Edit";

const MyInfoModify = () => {
  return (
    <ThemeProvider theme={theme}>
      <FullPageBox>
        <Box sx={{ maxWidth: "1280px" }}>
          <Box
            sx={{
              height: 80,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingBottom: 9,
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
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              gap={2}
            >
              <MyInfoInnerBox sx={{ width: "377px" }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                    paddingBottom: 6,
                  }}
                >
                  <Box sx={{ position: "relative" }}>
                    <ImgAvatar
                      src="cat.jpg"
                      alt="프로필"
                      sx={{
                        width: sizes.avatar.info,
                        height: sizes.avatar.info,
                        mx: "auto",
                      }}
                    />
                    <Box
                      sx={{
                        position: "absolute",
                        top: 80,
                        right: 20,
                        color: "white",
                        ":hover": {
                          cursor: "pointer",
                          color: theme.palette.primary.main,
                        },
                      }}
                      onClick={() => {}}
                    >
                      <EditIcon />
                    </Box>
                  </Box>
                </Box>
                {Object.entries(infoData).map(([key, item]) => (
                  <Box>
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
