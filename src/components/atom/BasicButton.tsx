import * as React from "react";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";

type BasicButtonProps = {
  text: string;
  sx?: object;
  onClick?: () => void;
};

const BasicButton = ({ text, sx, onClick }: BasicButtonProps) => {
  const buttonName = Array.from(text);
  return (
    <Button
      variant="contained"
      sx={{ width: "160px", borderRadius: 0, ...sx }}
      onClick={onClick}
    >
      <Box
        sx={{
          width: "100px",
          display: "flex",
          justifyContent: "space-around",
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
