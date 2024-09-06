import { Box, IconButton, Input, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { theme } from "../../styles/colors";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const LoginInput = () => {
    const [idEmail, setIdEmail] = useState<string>("");
    const [isIdEmailValid, setIdEmailValid] = useState<boolean>(true);
    const [idEmailBlurred, setIdEmailBlurred] = useState<boolean>(false);

    const [password, setPassword] = useState<string>("");
    const [showPassword, setShowPassword] = useState<boolean>(false);

    // 아이디 입력
    useEffect(() => {
        const idEmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setIdEmailValid(idEmail === "" || idEmailRegex.test(idEmail));
    }, [idEmail]);

    // 비밀번호 입력
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
        
  return (
      // InputBox Group
      <Box
        width={"60%"}
        height={"25%"}
        padding={"5px"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        gap={"5px"}
      >
        
        {/* Input ID Box*/}
        <Box
          sx={{
            width: "100%",
            paddingX: 3,
            paddingY: 1.5,
            marginBottom: 1,
            bgcolor: "#E5E5E5",
            color: "#23374D",
            borderRadius: 6
          }}>
          
          {/* 로그인ID Title */}
            <Box display={"flex"}>
              <Typography fontWeight={"bold"}>로그인 계정</Typography>
              <Typography
                sx={{
                    margin: 0.3,
                    marginLeft: 0.7,
                    fontSize: 12,
                    color: !isIdEmailValid ? theme.palette.error.main : theme.palette.text.secondary
                  }}
                className={`${!isIdEmailValid && idEmailBlurred ? "text-red-500" : "text-gray-500"}`}>
                {!isIdEmailValid && idEmailBlurred ? "올바른 이메일 형식이 아닙니다" : ""}
              </Typography>
            </Box>
          
            {/* 로그인ID Input */}
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

        {/* 로그인PW Input Box */}
        <Box
          sx={{
            width: "100%",
            paddingX: 3,
            paddingY: 1.5,
            marginBottom: 1,
            bgcolor: "#E5E5E5",
            color: "#23374D",
            borderRadius: 6
          }}>
          
        {/* 로그인PW Title */}
        <Typography fontWeight={"bold"}>로그인 비밀번호</Typography>
        
        {/* 로그인PW Input */}
        <Box position={"relative"}>
          <Input
            type={showPassword ? "text" : "password"}
            value={password}
            placeholder="영문, 숫자, 특수기호 포함 8~20자"
            onChange={(e) => setPassword(e.target.value)}
            sx={{
              width: "100%",
              outline: "none",
            }}/>
          {/* 비밀번호 가시(on/off) 여부 */}
          <IconButton
            type="button"
            onClick={togglePasswordVisibility}
            sx={{ position: "absolute", right: 5, bottom: 1, padding: 0.5, margin: 0.5, color: "#23374D" }}>
            {showPassword ? (<VisibilityIcon sx={{ fontSize: 16 }} />) : (<VisibilityOffIcon sx={{ fontSize: 16 }}/>) }
          </IconButton>
        </Box>
      </Box>
    </Box>
  )
}

export default LoginInput;