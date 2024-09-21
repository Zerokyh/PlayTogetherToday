import * as React from "react";
import { Box, Button, Modal, ThemeProvider, Typography } from "@mui/material";
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

const FindAccount = ({ idEmail }: FindAccountProps) => {
  const {
    formState,
    setFormState,
    validity,
    blurred,
    setBlurred,
  } = useSignUpForm();

  const { isTheme } = useThemeStore();
  const navigate = useNavigate();

  const [tempPassword, setTempPassword] = React.useState<string>("");
  const [openResetModal, setOpenResetModal] = React.useState(false);

  const handleOpenResetModal = () => {
    const tempPW = formState.idEmail.split('@')[0]; // @ 앞부분 추출
    setTempPassword(tempPW);
    localStorage.setItem('tempPassword', tempPW);
    setOpenResetModal(true);
  };

  const handleCloseResetModal = () => setOpenResetModal(false);

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
            }}
          >
            <Typography
              sx={{
                fontSize: sizes.fontSize.xlarge,
                fontWeight: 600,
              }}
            >
              아이디 / 비밀번호 찾기
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "540px",
              height: "700px",
              bgcolor: isTheme === "기본" ? colors.background.secondary : colors.sub_background.secondary,
              margin: sizes.margin.xlarge,
              borderRadius: sizes.borderRadius.normal,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: sizes.width.block,
                padding: sizes.padding.xlarge,
                gap: "2",
              }}
            >
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
                  bgcolor: isTheme === "기본" ? colors.background.tertiary : colors.sub_background.tertiary,
                }}
              >
                아이디 : {idEmail || "ptt0922@gmail.com"}
              </Typography>

              <Box>
                <InputContents
                  label={"이메일 입력*"}
                  value={formState.idEmail}
                  setValue={(val) => setFormState((prev) => ({ ...prev, idEmail: val }))}
                  isValid={validity.isIdEmailValid || !blurred.idEmailBlurred}
                  validationMessage="올바른 이메일 형식이 아닙니다"
                  onBlur={() => setBlurred((prev) => ({ ...prev, idEmailBlurred: true }))}
                  onFocus={() => setBlurred((prev) => ({ ...prev, idEmailBlurred: false }))}
                />
                <InputContents
                  label={"연락처 (숫자만 입력)*"}
                  value={formState.phoneNumber}
                  setValue={(val) => setFormState((prev) => ({ ...prev, phoneNumber: val }))}
                />
              </Box>

              <Box
                sx={{
                  display: "flex",
                  gap: 3,
                }}
              >
                <Button
                  onClick={handleOpenResetModal}
                  sx={{
                    width: "150px",
                    height: 45,
                    marginY: "50px",
                    bgcolor: isTheme === "기본" ? colors.background.button : colors.sub_background.button,
                    fontSize: sizes.fontSize.normal,
                    color: colors.text.secondary,
                    borderRadius: sizes.borderRadius.normal,
                  }}
                >
                  비밀번호 초기화하기
                </Button>
                <Button
                  onClick={pageBack}
                  sx={{
                    width: "150px",
                    height: 45,
                    marginY: "50px",
                    bgcolor: isTheme === "기본" ? colors.background.primary : colors.sub_background.primary,
                    fontSize: sizes.fontSize.normal,
                    color: colors.text.primary,
                    borderRadius: sizes.borderRadius.normal,
                  }}
                >
                  뒤로가기
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Reset Password Modal */}
        <Modal
          open={openResetModal}
          onClose={handleCloseResetModal}
          aria-labelledby="modal-title-reset"
          aria-describedby="modal-description-reset"
        >
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 300,
              bgcolor: 'background.paper',
              border: '2px solid #000',
              boxShadow: 24,
              p: 4,
            }}
          >
            <Typography
              id="modal-title-reset"
              variant="h6"
              component="h2"
              sx={{
                display: "flex",
                justifyContent: "center",
                fontWeight: "bold",
                color: colors.text.primary,
              }}
            >
            비밀번호 초기화
            </Typography>
            <Typography
              id="modal-description-reset"
              sx={{
                mt: 2,
                display: "flex",
                justifyContent: "center",
                color: colors.text.primary,
              }}
            >
              초기 비밀번호는 "{tempPassword}" 입니다.
            </Typography>
            <Box mt={2} display={"flex"} justifyContent={"center"}>
              <Button
                onClick={pageBack}
                variant="contained"
                sx={{
                  mr: 1,
                  bgcolor: isTheme === "기본" ? colors.background.button : colors.sub_background.button,
                  color: colors.text.secondary,
                }}
              >
                확인
              </Button>
            </Box>
          </Box>
        </Modal>
      </FullPageBox>
    </ThemeProvider>
  );
};

export default FindAccount;
