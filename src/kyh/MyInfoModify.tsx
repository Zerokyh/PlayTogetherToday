import * as React from "react";
import { Box, ThemeProvider, Typography } from "@mui/material";
import {
  FullPageBox,
  InputMuiStyle,
  MyInfoInnerBox,
  MySettingOutterBox,
} from "../styles/mui";
import { theme } from "../styles/colors";
import TextFieldBasic from "../components/atom/TextFieldBasic";
import ChipTextBox from "../components/atom/ChipTextBox";
import { sizes } from "../styles/sizes";
import ImgAvatar from "../components/atom/ImgAvatar";
import { infoData } from "../constants/myInfoModifyMenuData";
import InputModifyBox from "../components/atom/InputModifyBox";

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
            gap={1}
          >
            {Object.entries(infoData).map(([key, item]) => (
              <MyInfoInnerBox key={key} isProfileImage={key === "profileImage"}>
                <ChipTextBox titlename={item.titlename} />
                {key === "profileImage" ? (
                  <ImgAvatar src="cat.jpg" alt="프로필" />
                ) : (
                  <InputModifyBox
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
