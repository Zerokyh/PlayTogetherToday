import { Avatar } from "@mui/material";
import { ImgAvatarProps } from "../../utils/type";

const ImgAvatar = ({
  alt = "이미지",
  src = "profile_icon.jpg",
  sx,
}: ImgAvatarProps) => {
  return <Avatar alt={alt} src={src} sx={sx} />;
};

export default ImgAvatar;
