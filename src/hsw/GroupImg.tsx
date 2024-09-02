import { Avatar } from "@mui/material";
import { GroupImgAvatar } from "../styles/mui";
import { GroupImgProps } from "../utils/type";

const GroupImg = ({
  alt = "대표 이미지",
  src = "group.jpg",
  sx = GroupImgAvatar,
}: GroupImgProps) => {
  return <Avatar alt={alt} src={src} sx={{ ...sx }} />;
};

export default GroupImg;
