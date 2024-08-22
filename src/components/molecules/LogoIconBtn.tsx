import * as React from "react";
import { ListItemButton, ListItemIcon } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ImgAvatar from "../atom/ImgAvatar";
import useThemeStore from "../../store/store";
import { ImgAvatarProps } from "../../utils/type";

const LogoIconBtn = ({ alt, src, sx }: ImgAvatarProps) => {
  const navigate = useNavigate();
  const { isOpen } = useThemeStore();
  return (
    <ListItemButton
      onClick={() => {
        navigate("/");
      }}
      sx={{
        display: isOpen ? "none" : "block",

        justifyContent: isOpen ? "initial" : "center",
      }}
    >
      <ListItemIcon
        sx={{
          height: "50px",
          minWidth: 0,
          mr: isOpen ? 3 : "auto",
          display: "flex",
          alignItems: "center",
        }}
      >
        <ImgAvatar alt={alt} src={src} sx={sx} />
      </ListItemIcon>
    </ListItemButton>
  );
};

export default LogoIconBtn;
