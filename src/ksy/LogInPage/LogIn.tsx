import MyProfileImg from "./ProfileIMG";
import LoginInput from "./Login_Input";
import LoginBtn from "./Login_Button";
import { Box } from "@mui/material";
import { FullPageBox, MyInfoInnerBox } from "../../styles/mui";
import { sizes } from "../../styles/sizes";

const Login = () => {
  return (
    <FullPageBox>
      <Box sx={{
        width: sizes.width.half,
        height: sizes.height.full,
        padding: sizes.padding.xlarge,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: sizes.borderRadius.xs,
        gap: sizes.gap.medium
      }}>
        <MyInfoInnerBox sx={{ width: "377px" }}>
          {/* <MyInfoProfileImage />/ */}
          <MyProfileImg/>
        </MyInfoInnerBox>
        
        <LoginInput />
        <LoginBtn/>
      </Box>
    </FullPageBox>
  );
};

export default Login;