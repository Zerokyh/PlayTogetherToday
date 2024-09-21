import { Box } from "@mui/material";
import InputContents from "./InputContents";
import { sizes } from "../../styles/sizes";

interface FormState {
  idEmail: string;
  password: string;
  passwordCheck: string;
  backupEmail: string;
  phoneNumber: string;
  groupName: string;
  groupPassword: string;
}

interface InputGroupsProps {
  formState: FormState;
  setFormState: React.Dispatch<React.SetStateAction<FormState>>;
  validity: {
    isIdEmailValid: boolean;
    isPasswordValid: boolean;
    isPasswordMatch: boolean;
  };
  blurred: {
    idEmailBlurred: boolean;
    passwordBlurred: boolean;
    passwordCheckBlurred: boolean;
    phoneNumberBlurred: boolean;
  };
  setBlurred: React.Dispatch<React.SetStateAction<{
    idEmailBlurred: boolean;
    passwordBlurred: boolean;
    passwordCheckBlurred: boolean;
    phoneNumberBlurred: boolean;
  }>>;
  showPassword: boolean;
  setShowPassword: React.Dispatch<React.SetStateAction<boolean>>;
  showPasswordCheck: boolean;
  setShowPasswordCheck: React.Dispatch<React.SetStateAction<boolean>>;
  validatePhoneNumber: (phoneNumber: string) => string;
}

const InputGroups = ({
  formState,
  setFormState,
  validity,
  blurred,
  setBlurred,
  showPassword,
  setShowPassword,
  showPasswordCheck,
  setShowPasswordCheck,
  validatePhoneNumber
}: InputGroupsProps) => {
  const handleValueChange = (key: keyof FormState) => (val: string) => {
    setFormState((prev) => ({ ...prev, [key]: val }));
  };

  const handleBlur = (key: keyof FormState) => () => {
    setBlurred((prev) => ({ ...prev, [`${key}Blurred`]: true }));
  };

  const handleFocus = (key: keyof FormState) => () => {
    setBlurred((prev) => ({ ...prev, [`${key}Blurred`]: false }));
  };

  return (
    <Box
      sx={{
        width: "500px",
        fontSize: sizes.fontSize.normal
      }}>
      <InputContents
        label="아이디(이메일주소)*"
        value={formState.idEmail}
        setValue={handleValueChange("idEmail")}
        isValid={validity.isIdEmailValid || !blurred.idEmailBlurred}
        validationMessage="올바른 이메일 형식이 아닙니다"
        onBlur={handleBlur("idEmail")}
        onFocus={handleFocus("idEmail")}
      />
      <InputContents
        label="비밀번호*"
        value={formState.password}
        setValue={handleValueChange("password")}
        type="password"
        isValid={validity.isPasswordValid || !blurred.passwordBlurred}
        validationMessage="올바른 비밀번호가 아닙니다 (영문, 숫자, 특수문자 포함)"
        showPasswordToggle
        showPassword={showPassword}
        togglePasswordVisibility={() => setShowPassword(!showPassword)}
        onBlur={handleBlur("password")}
        onFocus={handleFocus("password")}
      />
      <InputContents
        label="비밀번호 확인*"
        value={formState.passwordCheck}
        setValue={handleValueChange("passwordCheck")}
        type="password"
        isValid={validity.isPasswordMatch || !blurred.passwordCheckBlurred}
        validationMessage="비밀번호가 일치하지 않습니다"
        showPasswordToggle
        showPassword={showPasswordCheck}
        togglePasswordVisibility={() => setShowPasswordCheck(!showPasswordCheck)}
        onBlur={handleBlur("passwordCheck")}
        onFocus={handleFocus("passwordCheck")}
      />
      <InputContents
        label="백업 이메일"
        value={formState.backupEmail}
        setValue={handleValueChange("backupEmail")}
        optional
      />
      <InputContents
        label="연락처 (전화번호)"
        value={formState.phoneNumber}
        setValue={handleValueChange("phoneNumber")}
        isValid={validatePhoneNumber(formState.phoneNumber) === "" || !blurred.phoneNumberBlurred}
        validationMessage={validatePhoneNumber(formState.phoneNumber)}
        onBlur={handleBlur("phoneNumber")}
        onFocus={handleFocus("phoneNumber")}
        optional
      />
      {/* <InputContents
        label="그룹 만들기"
        value={formState.groupName}
        setValue={handleValueChange("groupName")}
        optional
      /> */}
      <InputContents
        label="그룹 가입 암호"
        value={formState.groupPassword}
        setValue={handleValueChange("groupPassword")}
        optional
      />
    </Box>
  );
};

export default InputGroups;
