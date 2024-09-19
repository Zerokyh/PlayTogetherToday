import { Box, Button, Typography } from "@mui/material";
import { FullPageBox } from "../../styles/mui";
import InputGroups from "./InputGroups";
import { useSignUpForm } from "./InputFunction/UseForm";
import { useNavigate } from "react-router-dom";
import useThemeStore from "../../store/store";
import { colors } from "../../styles/colors";
import { sizes } from "../../styles/sizes";
import ButtonGroups from "./ButtonGroups";
import FindAccount from "../LogInPage/Find_Account";

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

  const handleCancel = () => {
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

    setTimeout(() => {
      alert("처음 화면으로 돌아갑니다. 내용은 저장되지 않습니다.");
      navigate("/");
    }, 0);
  };

  const handelJoin = () => {
    setTimeout(() => {
      alert("이대로 가입하시겠습니까?");
      navigate("/");
      // after : Save Data Code
    })
  }

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
          }}>
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
        }}>
        계정이 있어요! 로그인 하러 갈게요
      </Typography>

         {/* 아이디 정보 표시 */}{/* idEmail 전달 */}
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
          onJoin={handelJoin}
          onCancel={handleCancel}
        />
      </Box>
    </FullPageBox>
  );
};

export default SignUp;