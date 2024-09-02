import React from "react";
import { Button, Box } from "@mui/material";
import { sizes } from "../../styles/sizes";

const Profile_TotalButton = () => {
  return (
    <Box sx={{ display: "flex", gap: 1 }}>
      <Button
        sx={{
          fontSize: sizes.fontSize.large,
          width: "auto",
          height: "30px",
          padding: "4px",
        }}
        variant="outlined"
      >
        전체공개/비공개
      </Button>
    </Box>
  );
};

export default Profile_TotalButton;
