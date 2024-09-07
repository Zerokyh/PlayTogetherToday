import { Avatar } from "@mui/material";
import { ChatListBoxAvatar } from "../../../styles/mui";
import { ImgAvatarProps } from "../../../utils/type";

const ImgAvatar = ({
  alt = "이미지",
  src = "profile_icon.png",
  sx = ChatListBoxAvatar,
}: ImgAvatarProps) => {
  return <Avatar alt={alt} src={src} sx={{ ...sx }} />;
};

export default ImgAvatar;
