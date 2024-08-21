import { ListItemButton } from "@mui/material";
import { TextButtonNormal } from "../../styles/mui";
import { TextButtonProps } from "../../utils/type";

const TextButton = ({
  text,
  sx = { ...TextButtonNormal },
}: TextButtonProps) => {
  return <ListItemButton sx={sx}>{text}</ListItemButton>;
};

export default TextButton;
