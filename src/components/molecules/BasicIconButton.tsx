import { ListItemButton, ListItemIcon } from "@mui/material";
import useThemeStore from "../../store/store";
import { geListItemStyles, getListItemIconStyles } from "../../utils/func";
import { BasicIconButtonProps } from "../../utils/type";

const BasicIconButton = ({ text, icon, onClick }: BasicIconButtonProps) => {
  const { isOpen } = useThemeStore();
  const listItemStyles = geListItemStyles(isOpen);
  const listItemIconStyles = getListItemIconStyles(isOpen);
  return (
    <ListItemButton sx={listItemStyles}>
      <ListItemIcon sx={listItemIconStyles} onClick={onClick}>
        {icon}
        {text}
      </ListItemIcon>
    </ListItemButton>
  );
};

export default BasicIconButton;
