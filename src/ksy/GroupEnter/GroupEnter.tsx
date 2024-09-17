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
        <MyProfileImg />
        <GroupEnterText/>
        <GroupEnterButton/>
      </Box>
    </FullPageBox>
  );
};

export default GroupEnter;
