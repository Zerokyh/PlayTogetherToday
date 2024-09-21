import { Box, IconButton, Input, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { colors, theme } from "../../styles/colors";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import useThemeStore from "../../store/store";
import { sizes } from "../../styles/sizes";

type LoginInputProps = {
  idEmail: string;
  setIdEmail: (value: string) => void;
  password: string;
  setPassword: (value: string) => void;
};

const LoginInput = ({
  idEmail,
  setIdEmail,
  password,
  setPassword,
}: LoginInputProps) => {
  const { isTheme } = useThemeStore();
  // const [idEmail, setIdEmail] = useState<string>(""); // 상위 컴포넌트에서 전달 받음
  const [isIdEmailValid, setIdEmailValid] = useState<boolean>(true);
  const [idEmailBlurred, setIdEmailBlurred] = useState<boolean>(false);
  // const [password, setPassword] = useState<string>(""); // 상위 컴포넌트에서 전달 받음
  const [showPassword, setShowPassword] = useState<boolean>(false);

  // props로 받아온 값들 onChange 이벤트 잘적용되는지 확인
  // console.log(idEmail);
  // console.log(password);

  // ID Regex
  useEffect(() => {
    const idEmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIdEmailValid(idEmail === "" || idEmailRegex.test(idEmail));
  }, [idEmail]);

  // show icon
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    // InputBox Group
    <Box
      width={sizes.width.block}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      // marginY={"24px"}
    >
      {/* Input ID Box*/}
      <Box
        sx={{
          width: "100%",
          height: "124px",
          textAlign: "center",
          // gap: sizes.gap.xLarge,
          padding: "18px",
          marginBottom: "23px",
          bgcolor:
            isTheme == "기본"
              ? colors.background.secondary
              : colors.sub_background.secondary,
          color: colors.text.primary,
          borderRadius: sizes.borderRadius.normal,
        }}
      >
        {/* Login ID Title */}
        <Box display={"flex"}>
          <Typography
            textAlign={"start"}
            fontSize={sizes.fontSize.large}
            fontWeight={"bold"}
          >
            로그인 계정
          </Typography>
          <Typography
            sx={{
              marginTop: sizes.margin.large,
              marginLeft: sizes.margin.xlarge,
              fontSize: sizes.fontSize.xsmall,
              color: !isIdEmailValid
                ? theme.palette.error.main
                : theme.palette.text.secondary,
            }}
            className={`${
              !isIdEmailValid && idEmailBlurred
                ? "text-red-500"
                : "text-gray-500"
            }`}
          >
            {!isIdEmailValid && idEmailBlurred
              ? "올바른 이메일 형식이 아닙니다"
              : ""}
          </Typography>
        </Box>

        {/* Login ID Input */}
        <Input
          placeholder="이메일 계정을 입력하세요"
          type="email"
          value={idEmail}
          onChange={(e) => setIdEmail(e.target.value)}
          onBlur={() => setIdEmailBlurred(true)}
          onFocus={() => setIdEmailBlurred(false)}
          sx={{
            width: "382px",
            outline: "none",
            marginTop: "20px",
          }}
        />
      </Box>

      {/* Login Password Input Box */}
      <Box
        sx={{
          width: "100%",
          height: "124px",
          textAlign: "center",
          padding: "20px",
          bgcolor:
            isTheme == "기본"
              ? colors.background.secondary
              : colors.sub_background.secondary,
          color: colors.text.primary,
          borderRadius: sizes.borderRadius.normal,
        }}
      >
        {/* Login Password Title */}
        <Typography
          textAlign={"start"}
          fontSize={sizes.fontSize.large}
          fontWeight={"bold"}
        >
          로그인 비밀번호
        </Typography>

        {/* Login Password Input */}
        <Box position={"relative"}>
          <Input
            type={showPassword ? "text" : "password"}
            value={password} // password || tempPW
            placeholder="영문, 숫자, 특수기호 포함 8~20자"
            onChange={(e) => setPassword(e.target.value)}
            sx={{
              width: "382px",
              outline: "none",
              marginTop: "20px",
            }}
          />

          {/* Show password icon */}
          <IconButton
            type="button"
            onClick={togglePasswordVisibility}
            sx={{
              position: "absolute",
              right: "24px",
              bottom: sizes.margin.small,
              padding: sizes.padding.small,
              margin: sizes.margin.small,
              color: colors.text.primary,
            }}
          >
            {showPassword ? (
              <VisibilityIcon sx={{ fontSize: sizes.fontSize.medium }} />
            ) : (
              <VisibilityOffIcon sx={{ fontSize: sizes.fontSize.medium }} />
            )}
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginInput;
