import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import useThemeStore from "../../store/store";
import { colors } from "../../styles/colors";
import { sizes } from "../../styles/sizes";

const LoginBtn = () => {
  const { isTheme } = useThemeStore();
  const navigate = useNavigate();

  const handleLogIn = () => {
    navigate("/");
    // 로그인 되는 것 물어보기
  }

  const handleFindAccount = () => {
    navigate("/FindAccount");
  }

  return (
    <Box width={ sizes.width.block }>
      <Box display={"flex"} justifyContent={"end"} marginTop={"6px"}>
        <Button
          onClick={handleFindAccount}
          sx={{
            width: "100px",
            height: "22px",
            fontWeight: "bold",
            fontSize: sizes.fontSize.small,
            color: colors.text.primary,
          }}>
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
          }}>
          회원가입
        </Button>
      </Box>

      {/* LogIn button */}
      <Box display={"flex"} justifyContent={"center"}>
        <Button
          onClick={handleLogIn}
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
          }}>
          로그인
        </Button>
      </Box>
    </Box>
  );
};

export default LoginBtn;
