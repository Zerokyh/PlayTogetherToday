import * as React from "react";
import { Box, Typography } from "@mui/material";
import { sizes } from "../../styles/sizes";
import { IconTextButtonProps } from "../../utils/type";

const IconTextButton = ({
  icon,
  text = "내용",
  iconsize = sizes.fontSize.medium,
  fontsize = sizes.fontSize.medium,
}: IconTextButtonProps) => {
  return (
    <Box
      sx={{
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        px: "10px",
      }}
    >
      {React.cloneElement(icon, {
        sx: {
          fontSize: "1rem",
          width: iconsize,
          height: iconsize,
        },
      })}
      <Typography
        component="span"
        fontSize={fontsize}
        sx={{ fontFamily: '"Pretendard-Regular", Arial, sans-serif' }}
      >
        {text}
      </Typography>
    </Box>
  );
};

export default IconTextButton;
