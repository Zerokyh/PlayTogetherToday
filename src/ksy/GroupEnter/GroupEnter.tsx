import GroupEnterText from "./GroupEnterText";
import GroupEnterButton from "./GroupEnterButton";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/system";
import MyProfileImg from "../LogInPage/ProfileIMG";
import { FullPageBox } from "../../styles/mui";
import { sizes } from "../../styles/sizes";

const GroupEnter = () => {
  const navigate = useNavigate();

  return (
    <FullPageBox>
      <Box
        sx={{
            width: "540px",
            height: "700px",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: sizes.borderRadius.xs,
            gap: sizes.gap.medium
        }}>
        <MyProfileImg />
        <GroupEnterText/>
        <GroupEnterButton/>
      </Box>
    </FullPageBox>
  );
};

export default GroupEnter;
