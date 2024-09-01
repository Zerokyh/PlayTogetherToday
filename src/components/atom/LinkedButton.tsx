import { Button, ThemeProvider } from "@mui/material";
import { LinkedButtonNormal } from "../../styles/mui";
import { LinkedButtonProps } from "../../utils/type";
import { theme } from "../../styles/colors";
import { useNavigate } from "react-router-dom";
import { fontFamily } from "../../styles/theme";

const LinkedButton = ({
  type = "text",
  color,
  onClick,
  href,
  text,
  sx = {
    ...LinkedButtonNormal,
  },
  font = { fontFamily: fontFamily },
}: LinkedButtonProps) => {
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick && onClick(e);
    href && !onClick && navigate(href);
  };

  return (
    <Button
      variant={type}
      color={color}
      sx={{ ...sx, ...font }}
      onClick={handleClick}
    >
      {text}
    </Button>
  );
};

export default LinkedButton;
