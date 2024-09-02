import React from "react";
import { Box } from "@mui/material";
import Authorize_button from "./Authorize_button";
import { sizes } from "../../styles/sizes";

type profile_props = {
  info_name?: string;
};

const Authorize_profile = ({ info_name }: profile_props) => {
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "#E5E5E5",
        color: "#000",
        fontSize: sizes.fontSize.medium,
        borderRadius: "4px",
        paddingX: "8px",
        display: "flex",
        alignItems: "center",
        gap: "8px",
        flex: 1,
        minHeight: 0,
        maxHeight: "16.66%",
      }}
    >
      <span>{info_name}: </span>
      <Authorize_button />
    </Box>
  );
};

export default Authorize_profile;
