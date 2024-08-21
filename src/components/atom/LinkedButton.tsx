import { Button } from "@mui/material";
import { LinkedButtonNormal } from "../../styles/mui";
import { LinkedButtonProps } from "../../utils/type";
import { useNavigate } from "react-router-dom";

const LinkedButton = ({
  href = "#",
  text,
  sx = { ...LinkedButtonNormal },
}: LinkedButtonProps) => {
  const navigate = useNavigate();
  return (
    <Button
      sx={sx}
      onClick={() => {
        navigate(href);
      }}
    >
      {text}
    </Button>
  );
};

export default LinkedButton;
