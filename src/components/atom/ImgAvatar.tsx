import { Avatar } from "@mui/material";
import { ImgAvatarProps } from "../../utils/type";

const ImgAvatar = ({ alt, src, sx }: ImgAvatarProps) => {
  return <Avatar alt={alt} src={src} sx={sx} />;
};

export default ImgAvatar;
