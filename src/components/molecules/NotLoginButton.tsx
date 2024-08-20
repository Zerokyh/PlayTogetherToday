import { Box } from "@mui/material";
import LinkedButton from "../atom/LinkedButton";
import { sizes } from "../../styles/sizes";

const NotLoginButton = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        py: 4,
        gap: sizes.gap.medium,
      }}
    >
      <LinkedButton text="로그인" />
      <LinkedButton text="회원가입" />
    </Box>
  );
};

export default NotLoginButton;
