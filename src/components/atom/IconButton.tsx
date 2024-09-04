import * as React from "react";
import { Box, ListItemButton, Typography } from "@mui/material";
import { sizes } from "../../styles/sizes";

type iconSize = keyof typeof sizes.fontSize;

type IconButtonProps = {
  icon: React.ReactElement;
  iconsize?: iconSize;
  onClick?: () => void;
};

const IconButton = ({ icon, iconsize = "small", onClick }: IconButtonProps) => {
  return (
    <Box onClick={onClick}>
      <ListItemButton sx={{ p: 1, borderRadius: sizes.borderRadius.circle }}>
        {React.cloneElement(icon, {
          sx: {
            fontSize: "1rem",
            width: iconsize,
            height: iconsize,
          },
        })}
      </ListItemButton>
    </Box>
  );
};

export default IconButton;
