import * as React from "react";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import { colors } from "../../styles/colors";

type inputVariantType = "text" | "contained" | "outlined";

type bgColorType = keyof typeof colors.background;

type textColorType = keyof typeof colors.text;

type BasicButtonProps = {
  variant?: inputVariantType;
  text: string;
  sx?: object;
  bgcolor?: bgColorType;
  textcolor?: textColorType;
  onClick?: () => void;
};

const BasicButton = ({
  variant = "contained",
  text,
  sx,
  bgcolor,
  textcolor,
  onClick,
}: BasicButtonProps) => {
  const buttonName = Array.from(text);
  return (
    <Button
      variant={variant}
      sx={{ width: "160px", borderRadius: 0, ...sx, bgcolor: bgcolor }}
      onClick={onClick}
    >
      <Box
        sx={{
          width: "100px",
          display: "flex",
          justifyContent: "space-around",
          color: textcolor,
        }}
      >
        {buttonName.map((v) => (
          <span>{v}</span>
        ))}
      </Box>
    </Button>
  );
};

export default BasicButton;
