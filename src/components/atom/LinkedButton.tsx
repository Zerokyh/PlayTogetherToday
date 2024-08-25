import { Button, createTheme, ThemeProvider } from "@mui/material";
import { LinkedButtonNormal } from "../../styles/mui";
import { LinkedButtonProps } from "../../utils/type";
import { useNavigate } from "react-router-dom";
import { theme } from "../../styles/colors";

const LinkedButton = ({
  type = "text",
  color,
  href = "#",
  text,
  sx = { ...LinkedButtonNormal },
}: LinkedButtonProps) => {
  const navigate = useNavigate();
  return (
    <ThemeProvider theme={theme}>
      <Button
        variant={type}
        color={color}
        sx={sx}
        onClick={() => {
          navigate(href);
        }}
      >
        {text}
      </Button>
    </ThemeProvider>
  );
};

export default LinkedButton;
