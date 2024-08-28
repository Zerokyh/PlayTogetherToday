import { Box } from "@mui/material";
import LinkedButton from "../atom/LinkedButton";
import { sizes } from "../../styles/sizes";
import useThemeStore from "../../store/store";

const NotLoginButton = () => {
  const { setIsLogin } = useThemeStore();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        py: 2,
        gap: sizes.gap.medium,
      }}
    >
      <LinkedButton text="로그인" onClick={() => setIsLogin(true)} />
      <LinkedButton text="회원가입" />

    </Box>
  );
};

export default NotLoginButton;
