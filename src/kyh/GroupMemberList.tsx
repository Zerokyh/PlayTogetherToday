import { Box, Typography } from "@mui/material";
import { sizes } from "../styles/sizes";
import ImgAvatar from "../components/atom/Avatar/ImgAvatar";

type GroupMemberListProps = {
  imgsrc: string;
  nickname: string;
  position: string;
};

const GroupMemberList = ({
  imgsrc = "profile_icon.png",
  nickname,
  position,
}: GroupMemberListProps) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Box sx={{ display: "flex", gap: sizes.gap.normal }}>
        <ImgAvatar
          src={imgsrc}
          alt="img"
          sx={{
            width: sizes.avatar.profileLogo,
            height: sizes.avatar.profileLogo,
          }}
        />
        <Typography onClick={() => {}} sx={{ ":hover": { cursor: "pointer" } }}>
          {nickname}
        </Typography>
      </Box>
      <Typography>{position}</Typography>
    </Box>
  );
};

export default GroupMemberList;
