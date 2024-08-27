import { Button, ThemeProvider } from "@mui/material";
import { LinkedButtonNormal } from "../../styles/mui";
import { LinkedButtonProps } from "../../utils/type";
import { theme } from "../../styles/colors";
import { useNavigate } from "react-router-dom";

const LinkedButton = ({
  type = "text",
  color,
  onClick,
  href,
  text,
  sx = {
    ...LinkedButtonNormal,
  },
  font = { fontFamily: '"Pretendard-Regular", Arial, sans-serif' },
}: LinkedButtonProps) => {
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick && onClick(e);
    href && !onClick && navigate(href);
  };

  return (
    <ThemeProvider theme={theme}>
      <Button
        variant={type}
        color={color}
        sx={{ ...sx, ...font }}
        onClick={handleClick}
      >
        {text}
      </Button>
    </ThemeProvider>
  );
};

export default LinkedButton;
