import MyProfileImg from "./ProfileIMG";
import LoginInput from "./Login_Input";
import LoginBtn from "./Login_Button";
import { Box } from "@mui/material";
import { FullPageBox, MyInfoInnerBox } from "../../styles/mui";
import { sizes } from "../../styles/sizes";
import { useState } from "react";

const Login = () => {
  const [idEmail, setIdEmail] = useState<string>(""); // 하위 컴포넌트로 전달
  const [password, setPassword] = useState<string>(""); // 하위 컴포넌트로 전달

  return (
    <FullPageBox>
      <Box
        sx={{
          width: sizes.width.half,
          height: sizes.height.full,
          padding: sizes.padding.xlarge,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: sizes.borderRadius.xs,
          gap: sizes.gap.medium,
        }}
      >
        <MyInfoInnerBox sx={{ width: "377px" }}>
          {/* <MyInfoProfileImage />/ */}
          <MyProfileImg />
        </MyInfoInnerBox>

        <LoginInput
          idEmail={idEmail}
          setIdEmail={setIdEmail}
          password={password}
          setPassword={setPassword}
        />
        <LoginBtn idEmail={idEmail} password={password} />
      </Box>
    </FullPageBox>
  );
};

export default Login;
