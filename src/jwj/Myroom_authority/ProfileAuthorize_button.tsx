import React, { useState } from "react";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/material";
import { sizes } from "../../styles/sizes";

type ProfileAuthorizeButtonProps = {
  selectedButton?: boolean | null;
  handleClick: (value: boolean) => void;
};

const ProfileAuthorize_button = ({
  selectedButton,
  handleClick,
}: ProfileAuthorizeButtonProps) => {
  // const [selectedButton, setSelectedButton] = useState<boolean>();
  const theme = useTheme();

  // const handleClick = (buttonType: boolean) => {
  //   setSelectedButton(buttonType);
  // };

  return (
    <Box sx={{ display: "flex", gap: "8px" }}>
      <Button
        sx={{
          fontSize: sizes.fontSize.large,
          width: "70px",
          height: "30px",
          padding: "4px",
          borderColor: theme.palette.grey[400],
          backgroundColor:
            selectedButton === true
              ? theme.palette.primary.main
              : "transparent",
          color: selectedButton === true ? "#fff" : "#000",
          "&:hover": {
            backgroundColor:
              selectedButton === true
                ? theme.palette.primary.main
                : theme.palette.grey[300],
          },
          borderRadius: "8px",
        }}
        variant="outlined"
        onClick={() => handleClick(true)}
      >
        공개
      </Button>

      <Button
        sx={{
          fontSize: sizes.fontSize.large,
          width: "80px",
          height: "30px",
          padding: "4px",
          borderColor: theme.palette.grey[400],
          backgroundColor:
            selectedButton === false
              ? theme.palette.primary.main
              : "transparent",
          color: selectedButton === false ? "#fff" : "#000",
          "&:hover": {
            backgroundColor:
              selectedButton === false
                ? theme.palette.primary.main
                : theme.palette.grey[300],
          },
          borderRadius: "8px",
        }}
        variant="outlined"
        onClick={() => handleClick(false)}
      >
        비공개
      </Button>
    </Box>
  );
};

export default ProfileAuthorize_button;
