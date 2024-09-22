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
  backupEmail: string;
}

const FindAccount = ({ idEmail, backupEmail }: FindAccountProps) => {
  const { formState, setFormState, validity, blurred, setBlurred } =
    useSignUpForm();

  const { isTheme } = useThemeStore();
  const navigate = useNavigate();

  const [tempPassword, setTempPassword] = React.useState<string>("");
  const [openfindbyIdModal, setOpenFindbyIdModal] = React.useState(false);
  const [openResetModal, setOpenResetModal] = React.useState(false);

  const handleOpenfindbyIdModal = () => setOpenFindbyIdModal(true);
  const handleClosefindbyIdModal = () => setOpenFindbyIdModal(false);

  // FindByID - Null & OpenModal
  const findByIDInputNull = () => {
    if (!formState.idEmail && !formState.phoneNumber) {
      alert("정보를 입력해주세요!");
      return false;
    } else {
      handleOpenfindbyIdModal();
    }
  };

  // FindByID - Modal IdEmail
  const findByIdEmail = () => {
    // if (idEmail == backupEmail){
    //   return idEmail;
    // }
    // else {
    //   return "가입 정보가 없는 아이디";
    // }
    return "hong@naver.com";
  };

  // Reset PW Modal
  const handleOpenResetModal = () => {
    const tempPW = formState.idEmail.split("@")[0]; // @ 앞부분 추출
    setTempPassword(tempPW);
    localStorage.setItem("tempPassword", tempPW);
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

          {/* Container Box */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "540px",
              height: "700px",
              bgcolor:
                isTheme === "기본"
                  ? colors.background.secondary
                  : colors.sub_background.secondary,
              margin: sizes.margin.xlarge,
              borderRadius: sizes.borderRadius.normal,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: sizes.width.half,
                padding: "20%",
                gap: "30px",
              }}
            >
              {/* ID Box */}
              <Box width={"100%"}>
                <Typography
                  sx={{
                    width: "100%",
                    padding: sizes.padding.large,
                    fontSize: "22px",
                    fontWeight: "bold",
                    // textAlign: "center",
                  }}
                >
                  아이디 찾기
                </Typography>

                {/* Input Box */}
                <Box>
                  <InputContents
                    label={"백업 이메일 입력*"}
                    value={formState.backupEmail}
                    setValue={(val) =>
                      setFormState((prev) => ({ ...prev, backupEmail: val }))
                    }
                    isValid={validity.isIdEmailValid || !blurred.idEmailBlurred}
                    validationMessage="올바른 이메일 형식이 아닙니다"
                    onBlur={() =>
                      setBlurred((prev) => ({ ...prev, idEmailBlurred: true }))
                    }
                    onFocus={() =>
                      setBlurred((prev) => ({ ...prev, idEmailBlurred: false }))
                    }
                  />
                  <InputContents
                    label={"연락처 (숫자만 입력)*"}
                    value={formState.phoneNumber}
                    setValue={(val) =>
                      setFormState((prev) => ({ ...prev, phoneNumber: val }))
                    }
                  />
                </Box>

                {/* find by ID Button */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    gap: 3,
                  }}
                >
                  {/* find by ID */}
                  <Button
                    onClick={findByIDInputNull}
                    sx={{
                      width: "150px",
                      height: 45,
                      marginY: sizes.padding.small,
                      bgcolor:
                        isTheme === "기본"
                          ? colors.background.button
                          : colors.sub_background.button,
                      fontSize: sizes.fontSize.normal,
                      color: colors.text.secondary,
                      borderRadius: sizes.borderRadius.normal,
                    }}
                  >
                    아이디 찾기
                  </Button>
                  {/* page back (Login) */}
                  <Button
                    onClick={pageBack}
                    sx={{
                      width: "150px",
                      height: 45,
                      marginY: sizes.padding.small,
                      bgcolor:
                        isTheme === "기본"
                          ? colors.background.primary
                          : colors.sub_background.primary,
                      fontSize: sizes.fontSize.normal,
                      color: colors.text.primary,
                      borderRadius: sizes.borderRadius.normal,
                    }}
                  >
                    로그인하기
                  </Button>
                </Box>
              </Box>

              {/* PW Box */}
              <Box width={"100%"}>
                <Typography
                  sx={{
                    width: "100%",
                    padding: sizes.padding.large,
                    fontSize: "22px",
                    fontWeight: "bold",
                    // textAlign: "center",
                  }}
                >
                  비밀번호 찾기
                </Typography>

                <InputContents
                  label={"이메일 입력*"}
                  value={formState.idEmail}
                  setValue={(val) =>
                    setFormState((prev) => ({ ...prev, idEmail: val }))
                  }
                  isValid={validity.isIdEmailValid || !blurred.idEmailBlurred}
                  validationMessage="올바른 이메일 형식이 아닙니다"
                  onBlur={() =>
                    setBlurred((prev) => ({ ...prev, idEmailBlurred: true }))
                  }
                  onFocus={() =>
                    setBlurred((prev) => ({ ...prev, idEmailBlurred: false }))
                  }
                />
                <InputContents
                  label={"연락처 (숫자만 입력)*"}
                  value={formState.phoneNumber}
                  setValue={(val) =>
                    setFormState((prev) => ({ ...prev, phoneNumber: val }))
                  }
                />

                {/* Reset Password Button */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    gap: 3,
                  }}
                >
                  {/* Reset PW */}
                  <Button
                    onClick={handleOpenResetModal}
                    sx={{
                      width: "150px",
                      height: 45,
                      marginY: sizes.padding.small,
                      bgcolor:
                        isTheme === "기본"
                          ? colors.background.button
                          : colors.sub_background.button,
                      fontSize: sizes.fontSize.normal,
                      color: colors.text.secondary,
                      borderRadius: sizes.borderRadius.normal,
                    }}
                  >
                    비밀번호 초기화하기
                  </Button>
                  {/* page back */}
                  <Button
                    onClick={pageBack}
                    sx={{
                      width: "150px",
                      height: 45,
                      marginY: sizes.padding.small,
                      bgcolor:
                        isTheme === "기본"
                          ? colors.background.primary
                          : colors.sub_background.primary,
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
        </Box>

        {/* Find By ID Modal */}
        <Modal
          open={openfindbyIdModal}
          onClose={handleCloseResetModal}
          aria-labelledby="modal-title-reset"
          aria-describedby="modal-description-reset"
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 300,
              bgcolor: "background.paper",
              border: "2px solid #000",
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
              아이디 찾기
            </Typography>
            <Typography
              id="modal-description-reset"
              sx={{
                mt: 2,
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
                color: colors.text.primary,
              }}
            >
              가입된 아이디는
              <br />"{findByIdEmail()}"<br />
              입니다.
            </Typography>
            <Box mt={2} display={"flex"} justifyContent={"center"}>
              <Button
                onClick={pageBack}
                variant="contained"
                sx={{
                  mr: 1,
                  bgcolor:
                    isTheme === "기본"
                      ? colors.background.button
                      : colors.sub_background.button,
                  color: colors.text.secondary,
                }}
              >
                확인
              </Button>
            </Box>
          </Box>
        </Modal>

        {/* Reset Password Modal */}
        <Modal
          open={openResetModal}
          onClose={handleCloseResetModal}
          aria-labelledby="modal-title-reset"
          aria-describedby="modal-description-reset"
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 300,
              bgcolor: "background.paper",
              border: "2px solid #000",
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
                  bgcolor:
                    isTheme === "기본"
                      ? colors.background.button
                      : colors.sub_background.button,
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
