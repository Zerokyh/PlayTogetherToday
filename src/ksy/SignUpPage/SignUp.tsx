import { Box, Button, Modal, Typography } from "@mui/material";
import { FullPageBox } from "../../styles/mui";
import InputGroups from "./InputGroups";
import { useSignUpForm } from "./InputFunction/UseForm";
import { useNavigate } from "react-router-dom";
import useThemeStore from "../../store/store";
import { colors } from "../../styles/colors";
import { sizes } from "../../styles/sizes";
import ButtonGroups from "./ButtonGroups";
import FindAccount from "../LogInPage/Find_Account";
import { useState } from "react";
import { isEmailValid, isPasswordValid } from "./InputFunction/validation";

const SignUp = () => {
  const {
    formState,
    setFormState,
    validity,
    blurred,
    setBlurred,
    showPassword,
    setShowPassword,
    showPasswordCheck,
    setShowPasswordCheck,
  } = useSignUpForm();

  const { isTheme } = useThemeStore();
  const navigate = useNavigate();

  // Modal
  const [openSignUpModal, setOpenSignUpModal] = useState(false);
  const [openCancelModal, setOpenCancelModal] = useState(false);

  // Cancel Btn Modal Open logic
  const handleOpenCancelModal = () => setOpenCancelModal(true);
  const handleCloseCancelModal = () => setOpenCancelModal(false);
  // Cancel Btn Modal Open
  const handleCancel = () => {
    handleOpenCancelModal();
  };
  // Cancel Btn Navigate
  const handleCancelBtn = () => {
    setFormState({
      idEmail: "",
      password: "",
      passwordCheck: "",
      backupEmail: "",
      phoneNumber: "",
      groupName: "",
      groupPassword: "",
    });
    setBlurred({
      idEmailBlurred: false,
      passwordBlurred: false,
      passwordCheckBlurred: false,
      phoneNumberBlurred: false,
    });

    navigate("/");
  };

  // SignUp Join Btn Modal Open logic
  const handleOpenSignUpModal = () => setOpenSignUpModal(true);
  const handleCloseSignUpModal = () => setOpenSignUpModal(false);
  // SignUp Btn Modal Null & Open
  const handleJoin = () => {
    if (!formState.idEmail || !formState.password || !formState.passwordCheck) {
      alert("입력하지 않은 정보가 있습니다. 필수입력란*을 확인해주세요!");
      return false;
    } else {
      handleOpenSignUpModal();
    }
  };
  // SignUp Btn Navigate
  const handelJoinBtn = () => {
    setTimeout(() => {
      navigate("/");
      // after : Save Data Code
    });
  };

  const validatePhoneNumber = (phoneNumber: string) => {
    if (phoneNumber === "") {
      return "";
    }
    if (!/^\d+$/.test(phoneNumber)) {
      return "숫자만 입력하세요";
    }
    if (phoneNumber.length < 7) {
      return "숫자는 7자 이상이어야 합니다";
    }
    return "";
  };

  return (
    <FullPageBox>
      {/* Container */}
      <Box
        sx={{
          width: "540px",
          height: "700px",
          padding: "20px",
          bgcolor:
            isTheme === "기본"
              ? colors.background.secondary
              : colors.sub_background.secondary,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: sizes.borderRadius.normal,
        }}
      >
        {/* Title Box */}
        <Typography
          sx={{
            width: "500px",
            height: "40px",
            padding: sizes.padding.xlarge,
            marginBottom: "12px",
            bgcolor:
              isTheme == "기본"
                ? colors.background.tertiary
                : colors.sub_background.tertiary,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: sizes.fontSize.large,
            color: colors.text.primary,
            borderRadius: sizes.borderRadius.normal,
          }}
        >
          소모임의 소중한 회원으로 모시겠습니다
        </Typography>

        <Typography
          onClick={() => navigate("/LogIn")}
          sx={{
            cursor: "pointer",
            "&:hover": { textDecoration: "underline" },
            width: "500px",
            height: "40px",
            paddingX: sizes.padding.xlarge,
            paddingY: sizes.padding.large,
            marginBottom: "25px",
            bgcolor:
              isTheme == "기본"
                ? colors.background.tertiary
                : colors.sub_background.tertiary,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: sizes.fontSize.large,
            color: colors.text.primary,
            borderRadius: sizes.borderRadius.normal,
          }}
        >
          계정이 있어요! 로그인 하러 갈게요
        </Typography>

        {/* 아이디 정보 표시 */}
        {/* idEmail 전달 */}
        {/* <FindAccount idEmail={formState.idEmail} />  */}

        {/* Input Groups */}
        <InputGroups
          formState={formState}
          setFormState={setFormState}
          validity={validity}
          blurred={blurred}
          setBlurred={setBlurred}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
          showPasswordCheck={showPasswordCheck}
          setShowPasswordCheck={setShowPasswordCheck}
          validatePhoneNumber={validatePhoneNumber}
        />

        {/* Button Group */}
        <ButtonGroups
          isTheme={isTheme}
          onJoin={handleJoin}
          onCancel={handleOpenCancelModal}
        />
      </Box>

      {/* SignUp Button Modal */}
      <Modal
        open={openSignUpModal}
        onClose={handleCloseSignUpModal}
        aria-labelledby="modal-title-delete"
        aria-describedby="modal-description-delete"
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
            id="modal-title-delete"
            variant="h6"
            component="h2"
            sx={{
              display: "flex",
              justifyContent: "center",
              fontWeight: "bold",
              color: colors.text.primary,
            }}
          >
            모임 가입
          </Typography>
          <Typography
            id="modal-description-delete"
            sx={{
              mt: 2,
              display: "flex",
              justifyContent: "center",
              color: colors.text.primary,
            }}
          >
            정말 가입하시겠습니까?
          </Typography>
          <Box mt={2} display={"flex"} justifyContent={"center"}>
            <Button
              onClick={handelJoinBtn}
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
              가입하기
            </Button>
            <Button
              onClick={handleCloseSignUpModal}
              variant="outlined"
              sx={{
                bgcolor:
                  isTheme === "기본"
                    ? colors.background.subbutton
                    : colors.sub_background.subbutton,
                color: colors.text.primary,
                borderColor: colors.border.primary,
              }}
            >
              취소
            </Button>
          </Box>
        </Box>
      </Modal>

      {/* Cancle Button Modal */}
      <Modal
        open={openCancelModal}
        onClose={handleCancelBtn}
        aria-labelledby="modal-title-join"
        aria-describedby="modal-description-join"
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
            id="modal-title-join"
            variant="h6"
            component="h2"
            sx={{
              display: "flex",
              justifyContent: "center",
              fontWeight: "bold",
              color: colors.text.primary,
            }}
          >
            모임 가입
          </Typography>
          <Typography
            id="modal-description-join"
            sx={{
              mt: 2,
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
              color: colors.text.primary,
            }}
          >
            처음 화면으로 돌아갑니다
            <br />
            (내용은 저장되지 않습니다)
          </Typography>
          <Box mt={2} display={"flex"} justifyContent={"center"}>
            <Button
              onClick={handleCancelBtn}
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
  );
};

export default SignUp;
