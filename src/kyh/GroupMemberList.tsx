import { Box, Typography } from "@mui/material";
import ImgAvatar from "../components/atom/ImgAvatar";
import { sizes } from "../styles/sizes";

type GroupMemberListProps = {
  nickname: string;
  position: string;
};

const GroupMemberList = ({ nickname, position }: GroupMemberListProps) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Box sx={{ display: "flex", gap: sizes.gap.normal }}>
        <ImgAvatar
          src="cat.jpg"
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
