import * as React from "react";
import { Box, Button, ThemeProvider, Typography } from "@mui/material";
import { FullPageBox } from "../../styles/mui";
import { colors, theme } from "../../styles/colors";
import { sizes } from "../../styles/sizes";
import styled from "@emotion/styled";
import useThemeStore from "../../store/store";
import InputContents from "../SignUpPage/InputContents";

const FindAccount = () => {
    const { isTheme } = useThemeStore();

    const handleEmailLink = () => {
        alert("입력하신 이메일로 링크를 보냈습니다!");
    }

  return (
    <ThemeProvider theme={theme}>
      <FullPageBox>
        <Box sx={{ maxWidth: "1280px" }}>
          <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                margin: sizes.margin.xlarge,
            }}>
            <Typography
                sx={{
                    fontSize: sizes.fontSize.xlarge,
                    fontWeight: 600
                }}>
              아이디/비밀번호 찾기
            </Typography>
          </Box>
                  

        <Box sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: sizes.width.half,
            height: sizes.height.full,
            bgcolor:
            isTheme == "기본"
            ? colors.background.secondary
            : colors.sub_background.secondary,
            margin: sizes.margin.xlarge,
            borderRadius: sizes.borderRadius.normal,
        }}>
            <Box
              sx={{
                display: "flex",
                              flexDirection: "column",
                alignItems: "center",
                width: "80%",
                padding: sizes.padding.xlarge,
                gap: "2",
                }}>
                <Typography fontWeight={"bold"} margin={ "50px" }>
                    아이디 : 입력받기
                </Typography>

                <InputContents
                    label={"이메일 입력*"}
                    value={""}
                    setValue={function (value: string): void {
                    throw new Error("Function not implemented.");
                              }} />
                          
                          <InputContents
                    label={"연락처 입력*"}
                    value={""}
                    setValue={function (value: string): void {
                    throw new Error("Function not implemented.");
                } }/>   
                
            <Button
                onClick={handleEmailLink}
                sx={{
            width: sizes.width.block,
            height: 45,
            margin: "50px",
            bgcolor:
              isTheme == "기본"
              ? colors.background.button
              : colors.sub_background.button,
            fontSize: sizes.fontSize.normal,
            color: colors.text.secondary,
            borderRadius: sizes.borderRadius.normal,
            }}>
                비밀번호 초기화 링크 혹은 마스터암호 보내기
            </Button>
            </Box>
          </Box>
        </Box>
      </FullPageBox>
    </ThemeProvider>
  );
}

export default FindAccount;