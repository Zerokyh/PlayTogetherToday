import React from "react";
import { Button } from "@mui/material";
import { sizes } from "../../styles/sizes";

type ButtonNameProps = {
  name?: string;
};

const Gameroom_button = ({ name = "game" }: ButtonNameProps) => {
  return (
    <Button
      variant="contained"
      sx={{
        width: 112,
        height: 56,
        bgcolor: "#E5E5E5",
        borderRadius: "12px",
        textTransform: "none",
        fontSize: sizes.fontSize.large,
        color: "black",
      }}
    >
      {name}
    </Button>
  );
};

export default Gameroom_button;
