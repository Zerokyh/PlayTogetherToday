import { ListItemButton, ListItemIcon } from "@mui/material";
import useThemeStore from "../../store/store";
import { ReactNode } from "react";

type IconButtonProps = {
  text?: string;
  icon?: ReactNode;
};

const IconButton = ({ text, icon }: IconButtonProps) => {
  const { isOpen } = useThemeStore();
  const listItemStyles = {
    minHeight: 48,
    justifyContent: isOpen ? "initial" : "center",
  };
  const listItemIconStyles = {
    height: "50px",
    minWidth: 0,
    mr: isOpen ? 3 : "auto",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    fontSize: "14px",
    fontWeight: 600,
  };
  return (
    <ListItemButton sx={listItemStyles}>
      <ListItemIcon sx={listItemIconStyles}>
        {icon}
        {text}
      </ListItemIcon>
    </ListItemButton>
  );
};

export default IconButton;
