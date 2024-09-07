import { Box } from "@mui/material";
import LinkedButton from "../../atom/Button/LinkedButton";
import { sizes } from "../../../styles/sizes";
import useThemeStore from "../../../store/store";
import { useNavigate } from "react-router-dom";

const NotLoginButton = () => {
  const { setIsLogin } = useThemeStore();
  const navigate = useNavigate();
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
      <LinkedButton text="로그인" onClick={() => navigate("/Login")} />
      <LinkedButton text="회원가입" onClick={() => navigate("/SignUp")} />
    </Box>
  );
};

export default NotLoginButton;
