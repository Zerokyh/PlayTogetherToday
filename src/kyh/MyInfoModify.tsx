import * as React from "react";
import { Box, ThemeProvider, Typography } from "@mui/material";
import {
  FullPageBox,
  InputMuiStyle,
  ModifyLinkedButtonStyle,
  MyInfoInnerBox,
  MySettingOutterBox,
} from "../styles/mui";
import { theme } from "../styles/colors";
import ChipTextBox from "../components/atom/ChipTextBox";
import { sizes } from "../styles/sizes";
import ImgAvatar from "../components/atom/ImgAvatar";
import { infoData } from "../constants/myInfoModifyMenuData";
import InputModifyBox from "../components/atom/InputModifyBox";
import LinkedButton from "../components/atom/LinkedButton";

const MyInfoModify = () => {
  return (
    <ThemeProvider theme={theme}>
      <FullPageBox>
        <MySettingOutterBox>
          <Typography sx={{ fontSize: sizes.fontSize.xlarge, fontWeight: 600 }}>
            개인정보 편집
          </Typography>
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            gap={2}
          >
            {Object.entries(infoData).map(([key, item]) => (
              <MyInfoInnerBox
                key={key}
                isProfileImage={key === "profileImage"}
                sx={key === "profileImage" ? { width: "377px" } : {}}
              >
                <ChipTextBox titlename={item.titlename} />
                {key === "profileImage" ? (
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8, // 아이템 사이에 간격 추가 (필요에 따라 조정)
                    }}
                  >
                    <Box
                      sx={{
                        width: "80px",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <ImgAvatar src="cat.jpg" alt="프로필" />
                    </Box>
                    <LinkedButton
                      type="contained"
                      text="편집"
                      sx={{
                        ...ModifyLinkedButtonStyle,
                      }}
                      href="/MySetting"
                    />
                  </Box>
                ) : (
                  <InputModifyBox
                    width="240px"
                    sx={InputMuiStyle}
                    placeholder={item.inputsubject}
                  />
                )}
              </MyInfoInnerBox>
            ))}
          </Box>
        </MySettingOutterBox>
      </FullPageBox>
    </ThemeProvider>
  );
};

export default MyInfoModify;
