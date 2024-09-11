import { Box, Button, Typography } from "@mui/material";
import { FullPageBox } from "../../styles/mui";
import InputContents from "./InputContents";
import { useSignUpForm } from "./InputFunction/UseForm";
import { useNavigate } from "react-router-dom";
import useThemeStore from "../../store/store";
import { colors } from "../../styles/colors";
import { sizes } from "../../styles/sizes";

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
      groupName: "",
      groupPassword: "",
    });
    setBlurred({
      idEmailBlurred: false,
      passwordBlurred: false,
      passwordCheckBlurred: false,
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

  return (
    <FullPageBox>

      {/* Container */}
      <Box
        sx={{
          width: sizes.width.half,
          height: sizes.height.full,
          padding: "8%",
          bgcolor:
            isTheme == "기본"
            ? colors.background.secondary
            : colors.sub_background.secondary,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: sizes.borderRadius.normal,
        }}>
        
        {/* Title Box */}
        <Typography
          sx={{
            width: "100%",
            padding: sizes.padding.xlarge,
            marginBottom: 1,
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

        {/* Input Group */}
          <Box
          sx={{
            width: "100%",
            }}>

            {/* ID*/}
            <InputContents
              label="아이디(이메일주소)*"
              value={formState.idEmail}
              setValue={(val) => setFormState((prev) => ({ ...prev, idEmail: val }))}
              isValid={validity.isIdEmailValid || !blurred.idEmailBlurred}
              validationMessage="올바른 이메일 형식이 아닙니다"
              onBlur={() => setBlurred((prev) => ({ ...prev, idEmailBlurred: true }))}
              onFocus={() => setBlurred((prev) => ({ ...prev, idEmailBlurred: false }))}
            />
            {/* Password */}
            <InputContents
              label="비밀번호*"
              value={formState.password}
              setValue={(val) => setFormState((prev) => ({ ...prev, password: val }))}
              type="password"
              isValid={validity.isPasswordValid || !blurred.passwordBlurred}
              validationMessage={`올바른 비밀번호가 아닙니다 (영문, 숫자, 특수문자 포함)`}
              showPasswordToggle
              showPassword={showPassword}
              togglePasswordVisibility={() => setShowPassword(!showPassword)}
              onBlur={() => setBlurred((prev) => ({ ...prev, passwordBlurred: true }))}
              onFocus={() => setBlurred((prev) => ({ ...prev, passwordBlurred: false }))}
            />
            {/* Password Check */}
            <InputContents
              label="비밀번호 확인*"
              value={formState.passwordCheck}
              setValue={(val) => setFormState((prev) => ({ ...prev, passwordCheck: val }))}
              type="password"
              isValid={validity.isPasswordMatch || !blurred.passwordCheckBlurred}
              validationMessage="비밀번호가 일치하지 않습니다"
              showPasswordToggle
              showPassword={showPasswordCheck}
              togglePasswordVisibility={() => setShowPasswordCheck(!showPasswordCheck)}
              onBlur={() => setBlurred((prev) => ({ ...prev, passwordCheckBlurred: true }))}
              onFocus={() => setBlurred((prev) => ({ ...prev, passwordCheckBlurred: false }))}
            />
            {/* Backup Email */}
            <InputContents
              label="백업 이메일"
              value={formState.backupEmail}
              setValue={(val) => setFormState((prev) => ({ ...prev, backupEmail: val }))}
              optional
            />
            {/* GroupMake */}
            <InputContents
              label="그룹 만들기"
              value={formState.groupName}
              setValue={(val) => setFormState((prev) => ({ ...prev, groupName: val }))}
              optional
            />
            {/* Group Join Password */}
            <InputContents
              label="그룹 가입 암호"
              value={formState.groupPassword}
              setValue={(val) => setFormState((prev) => ({ ...prev, groupPassword: val }))}
              optional
            />

            {/* Button Group */}          
            <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                padding: sizes.padding.xlarge,
                gap: 3
            }}>
            
            {/* EnterBtn / CancleBtn */}
            <Button
              onClick={handelJoin}
              sx={{
                width: "20%",
                height: 45,
                bgcolor:
                  isTheme == "기본"
                  ? colors.background.button
                  : colors.sub_background.button,
                color: colors.text.secondary,
                fontSize: sizes.fontSize.normal,
                borderRadius: sizes.borderRadius.normal,
              }}>
              가입하기
            </Button>
            <Button
              onClick={handleCancel}
              sx={{
                width: "20%",
                height: 45,
                bgcolor:
                  isTheme == "기본"
                  ? colors.background.drawer
                  : colors.sub_background.drawer,
                color: colors.text.primary,
                fontSize: sizes.fontSize.normal,
                borderRadius: sizes.borderRadius.normal,
              }}>
              취소
            </Button>
          </Box>
            
        </Box>
      </Box>
    </FullPageBox>
  );
};

export default SignUp;