import { Box, IconButton, Input, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { colors, theme } from "../../styles/colors";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import useThemeStore from "../../store/store";
import { sizes } from "../../styles/sizes";

const LoginInput = () => {
  const { isTheme } = useThemeStore();
    const [idEmail, setIdEmail] = useState<string>("");
    const [isIdEmailValid, setIdEmailValid] = useState<boolean>(true);
    const [idEmailBlurred, setIdEmailBlurred] = useState<boolean>(false);
    const [password, setPassword] = useState<string>("");
    const [showPassword, setShowPassword] = useState<boolean>(false);

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
        width={ sizes.width.block }
        height={ sizes.height.sidebarnormal }
        padding={ sizes.padding.small }
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
      >
        
        {/* Input ID Box*/}
        <Box
          sx={{
            width: "100%",
            padding: sizes.padding.xlarge,
            marginBottom: 2,
            bgcolor:
              isTheme == "기본"
              ? colors.background.secondary
              : colors.sub_background.secondary,
            color: colors.text.primary,
            borderRadius: sizes.borderRadius.normal
          }}>
          
          {/* Login ID Title */}
            <Box display={"flex"}>
              <Typography fontWeight={"bold"}>로그인 계정</Typography>
              <Typography
                sx={{
                    marginTop: sizes.margin.small,
                    marginLeft: sizes.margin.xlarge,
                    fontSize: sizes.fontSize.xsmall,
                    color: !isIdEmailValid
                      ? theme.palette.error.main
                      : theme.palette.text.secondary
                  }}
                className={`${!isIdEmailValid && idEmailBlurred
                  ? "text-red-500" : "text-gray-500"}`}>
                {!isIdEmailValid && idEmailBlurred
                  ? "올바른 이메일 형식이 아닙니다" : ""}
              </Typography>
            </Box>
          
            {/* Login ID Input */}
            <Input
              type="email"
              value={idEmail}
              placeholder="이메일 계정을 입력하세요"
              onChange={(e) => setIdEmail(e.target.value)}
              onBlur={() => setIdEmailBlurred(true)}
              onFocus={() => setIdEmailBlurred(false)}
              sx={{
                width: "100%",
                outline: "none",
              }}/>
        </Box>

        {/* Login Password Input Box */}
        <Box
          sx={{
            width: "100%",
            padding: sizes.padding.xlarge,
            bgcolor:
              isTheme == "기본"
              ? colors.background.secondary
              : colors.sub_background.secondary,
            color: colors.text.primary,
            borderRadius: sizes.borderRadius.normal
          }}>
          
        {/* Login Password Title */}
        <Typography fontWeight={"bold"}>로그인 비밀번호</Typography>
        
        {/* Login Password Input */}
        <Box position={"relative"}>
          <Input
            type={showPassword ? "text" : "password"}
            value={password}
            placeholder="영문, 숫자, 특수기호 포함 8~20자"
            onChange={(e) => setPassword(e.target.value)}
            sx={{
              width: "100%",
              outline: "none",
            }} />
          
          {/* Show password icon */}
          <IconButton
            type="button"
            onClick={togglePasswordVisibility}
            sx={{
              position: "absolute",
              right: sizes.margin.small,
              bottom: sizes.margin.small,
              padding: sizes.padding.small,
              margin: sizes.margin.small,
              color: colors.text.primary
            }}>
            {showPassword
              ? (<VisibilityIcon sx={{ fontSize: sizes.fontSize.medium }} />) : (<VisibilityOffIcon sx={{ fontSize: sizes.fontSize.medium }} />)}
          </IconButton>
        </Box>
      </Box>
    </Box>
  )
}

export default LoginInput;