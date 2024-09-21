import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import useThemeStore from "../../store/store";
import { colors } from "../../styles/colors";
import { sizes } from "../../styles/sizes";
import axios from "axios";
import { useState } from "react";

type LoginBtnProps = {
  idEmail: string;
  password: string;
};

const LoginBtn = ({ idEmail, password }: LoginBtnProps) => {
  const { isTheme, setIsLogin } = useThemeStore();
  const [login, setLogin] = useState<LoginBtnProps | null>(null);
  const navigate = useNavigate();

  const handleLogIn = async () => {
    console.log("로그인 요청 데이터:", {
      member_email: idEmail,
      member_pw: password,
    });
    try {
      const response = await axios.post("http://localhost:8080/login", {
        member_email: idEmail,
        member_pw: password,
      });
      console.log(response.data);
      if (response.status === 200 && response.data.status === "OK") {
        const message = response.data.message || "로그인 성공";
        alert(message);
        const user = response.data.data;
        const memberId = user.member_id;
        console.log(user);
        console.log(memberId);
        localStorage.setItem("member_id", response.data.data.member_id);
        setIsLogin(true);
        navigate("/");
      } else {
        alert("로그인 실패: 잘못된 이메일 또는 비밀번호입니다.");
      }
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          alert(error.response.data.message || "로그인 실패");
        } else if (error.request) {
          alert("서버 응답이 없습니다. 네트워크 연결을 확인해주세요.");
        } else {
          alert("로그인 중 오류가 발생했습니다.");
        }
      } else {
        alert("알 수 없는 오류가 발생했습니다.");
      }
      console.error("Error", error);
    }
  };

  const handleFindAccount = () => {
    navigate("/FindAccount");
  };

  return (
    <Box width={sizes.width.block}>
      <Box display={"flex"} justifyContent={"end"} marginTop={"10px"}>
        <Button
          onClick={handleFindAccount}
          sx={{
            width: "100px",
            height: "22px",
            fontWeight: "bold",
            fontSize: sizes.fontSize.small,
            color: colors.text.primary,
          }}
        >
          아이디/비번 찾기
        </Button>
        <Button
          onClick={() => navigate("/SignUp")}
          sx={{
            width: "65px",
            height: "22px",
            fontWeight: "bold",
            fontSize: sizes.fontSize.small,
            color: colors.text.primary,
          }}
        >
          회원가입
        </Button>
      </Box>

      {/* LogIn button */}
      <Box display={"flex"} justifyContent={"center"}>
        <Button
          onClick={handleLogIn} // 상위 컴포넌트에서 전달 받음
          sx={{
            width: "450px",
            height: "44px",
            marginTop: 3,
            bgcolor:
              isTheme == "기본"
                ? colors.background.button
                : colors.sub_background.button,
            color: colors.text.secondary,
            fontSize: sizes.fontSize.large,
            borderRadius: sizes.borderRadius.medium,
          }}
        >
          로그인
        </Button>
      </Box>
    </Box>
  );
};

export default LoginBtn;
