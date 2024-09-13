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
  }

  const handleFindAccount = () => {
    navigate("/FindAccount");
  }

  return (
    <Box width={ sizes.width.block }>
      <Box display={"flex"}
        justifyContent={"end"}
        marginRight={sizes.margin.small}
        gap={sizes.gap.small}>
        <Button
          onClick={() => navigate("/SignUp")}
          sx={{
            padding: sizes.padding.small,
            fontWeight: "bold",
            fontSize: sizes.fontSize.xsmall,
            color: colors.text.primary,
          }}>
          회원가입
        </Button>
        <Button
          onClick={handleFindAccount}
          sx={{
            paddingX: sizes.padding.small,
            fontWeight: "bold",
            fontSize:  sizes.fontSize.xsmall,
            color: colors.text.primary,
          }}>
          아이디/비번 찾기
        </Button>
      </Box>

      {/* LogIn button */}
      <Box display={"flex"} justifyContent={"center"}>
        <Button
          onClick={handleLogIn}
          sx={{
            width: sizes.width.block,
            height: 45,
            bgcolor:
              isTheme == "기본"
              ? colors.background.button
              : colors.sub_background.button,
            fontSize: sizes.fontSize.normal,
            color: colors.text.secondary,
            borderRadius: sizes.borderRadius.normal,
          }}>
          로그인
        </Button>
      </Box>
    </Box>
  );
};

export default LoginBtn;
