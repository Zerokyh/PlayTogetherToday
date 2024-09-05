import { Avatar } from "@mui/material";
import { GroupImgAvatar, MemberImgAvatar } from "../styles/mui";
import { GroupImgProps } from "../utils/type";

const MemberImg = ({
  alt = "대표 이미지",
  src = "profile_icon.jpg",
  sx = MemberImgAvatar,
}: GroupImgProps) => {
  return <Avatar alt={alt} src={src} sx={{ ...sx }} />;
};

export default MemberImg;
