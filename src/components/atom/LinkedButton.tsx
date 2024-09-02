import { Button } from "@mui/material";
import { LinkedButtonNormal } from "../../styles/mui";
import { colors } from "../../styles/colors";
import { useNavigate } from "react-router-dom";
import { fontFamily } from "../../styles/theme";

type inputVariantType = "text" | "contained" | "outlined";

type textColorType = keyof typeof colors.text;

type colorType = keyof typeof colors.background;

type LinkedButtonProps = {
  variantType?: inputVariantType;
  textcolor?: textColorType;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  href?: string;
  text: string;
  sx?: object;
  font?: object;
};

const LinkedButton = ({
  variantType = "text",
  textcolor = "primary",
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
      variant={variantType}
      sx={{ ...sx, ...font, color: textcolor }}
      onClick={handleClick}
    >
      {text}
    </Button>
  );
};

export default LinkedButton;
