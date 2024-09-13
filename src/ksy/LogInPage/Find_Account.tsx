import * as React from "react";
import { Box, Button, ThemeProvider, Typography } from "@mui/material";
import { FullPageBox } from "../../styles/mui";
import { colors } from "../../styles/colors";
import { sizes } from "../../styles/sizes";
import useThemeStore from "../../store/store";
import InputContents from "../SignUpPage/InputContents";
import { theme } from "../../styles/theme";
import { useSignUpForm } from "../SignUpPage/InputFunction/UseForm";
import { useNavigate } from "react-router-dom";

interface FindAccountProps {
  idEmail: string;
}

const FindAccount = ({idEmail} : FindAccountProps) => {
  const {
    formState,
    setFormState,
    validity,
    blurred,
    setBlurred,
  } = useSignUpForm();

  const { isTheme } = useThemeStore();
  const navigate = useNavigate();
  
  const handleEmailLink = async () => {
    try {
      const response = await fetch('/api/password-reset', { // 백엔드 API 경로 설정
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ email: formState.idEmail }), // 입력된 이메일을 서버로 전송
      });

      if (response.ok) {
        alert("입력하신 이메일로 링크를 보냈습니다!");
      } else {
        alert("이메일 전송에 실패했습니다. 다시 시도해 주세요.");
      }
    } catch (error) {
      console.error("Error sending password reset email:", error);
      alert("이메일 전송 중 오류가 발생했습니다. 다시 시도해 주세요.");
    }
  };

  const pageBack = () => {
    setTimeout(() => {
      navigate("/LogIn");
    }, 0);
  };

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
              아이디 / 비밀번호 찾기
            </Typography>
          </Box>
                  
        <Box sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "540px",
            height: "700px",
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
                width: sizes.width.block,
                padding: sizes.padding.xlarge,
                gap: "2",
              }}>
              
              {/* 데이터 받아와서 나타내게 하기 */}
              <Typography
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "15px",
                  fontWeight: "bold",
                  width: "500px",
                  height: "80px",
                  margin: "50px",
                  fontSize: sizes.fontSize.large,
                  bgcolor:
                  isTheme == "기본"
                  ? colors.background.tertiary
                  : colors.sub_background.tertiary,
                }}>
                아이디 : { idEmail || "ptt0922@gmail.com"}
              </Typography>

              <Box>
                <InputContents
                label={"이메일 입력*"}
                value={formState.idEmail}
                setValue={(val) => setFormState((prev) => ({ ...prev, idEmail: val }))}
                isValid={validity.isIdEmailValid || !blurred.idEmailBlurred}
                validationMessage="올바른 이메일 형식이 아닙니다"
                onBlur={() => setBlurred((prev) => ({ ...prev, idEmailBlurred: true }))}
                onFocus={() => setBlurred((prev) => ({ ...prev, idEmailBlurred: false }))}/>
                          
                <InputContents
                label={"연락처 (숫자만 입력)*"}
                value={formState.phoneNumber}
                setValue={(val) => setFormState((prev) => ({ ...prev, phoneNumber: val }))}/>   
              </Box>
                
              <Box
                sx={{
                  display: "flex",
                  gap: 3
              }}>
                <Button
                onClick={handleEmailLink}
                sx={{
                width: "150px",
                height: 45,
                marginY: "50px",
                bgcolor:
                  isTheme == "기본"
                  ? colors.background.button
                  : colors.sub_background.button,
                fontSize: sizes.fontSize.normal,
                color: colors.text.secondary,
                borderRadius: sizes.borderRadius.normal,
                }}>
                비밀번호 초기화하기
              </Button>
                <Button
                onClick={pageBack}
                sx={{
                width: "150px",
                height: 45,
                marginY: "50px",
                bgcolor:
                  isTheme == "기본"
                  ? colors.background.primary
                  : colors.sub_background.primary,
                fontSize: sizes.fontSize.normal,
                color: colors.text.primary,
                borderRadius: sizes.borderRadius.normal,
              }}>
                뒤로가기
              </Button>
            </Box>
            </Box>
          </Box>
        </Box>
      </FullPageBox>
    </ThemeProvider>
  );
}

export default FindAccount;