import MyProfileImg from "./ProfileIMG";
import LoginInput from "./Login_Input";
import LoginBtn from "./Login_Button";
import { Box } from "@mui/material";
import { FullPageBox } from "../../styles/mui";

const Login = () => {
  return (
    <FullPageBox>
      <Box sx={{
          width: "100%",
          height: "95.8vh",
          padding: "70px",
          // bgcolor: "#EEEEEE",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 6,
          gap: 3
        }}>
        {/* 이미지 */}
        <MyProfileImg />
        {/* 로그인 입력창 (계정이메일 및 비밀번호 입력) */}
        <LoginInput />
        {/* 회원가입 및 아이디/비번 찾기 버튼 */}
        <LoginBtn/>
      </Box>
    </FullPageBox>
  );
};

export default Login;