import { Button } from "@mui/material";
import { LinkedButtonNormal } from "../../styles/mui";

type LinkedButtonProps = {
  text?: string;
  sx?: object;
};

const LinkedButton = ({
  text,
  sx = { ...LinkedButtonNormal },
}: LinkedButtonProps) => {
  return <Button sx={sx}>{text}</Button>;
};

export default LinkedButton;
