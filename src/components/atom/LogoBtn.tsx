import * as React from "react";
import { ListItemButton, ListItemIcon } from "@mui/material";
import { useNavigate } from "react-router-dom";
import LogoIcon from "../../LogoIcon";
import useThemeStore from "../../store/store";

const LogoBtn = () => {
  const navigate = useNavigate();
  const { isOpen } = useThemeStore();
  return (
    <ListItemButton
      onClick={() => {
        navigate("/");
      }}
      sx={{
        display: isOpen ? "none" : "block",
        minHeight: 48,
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
        <LogoIcon />
      </ListItemIcon>
    </ListItemButton>
  );
};

export default LogoBtn;
