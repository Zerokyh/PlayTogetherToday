import React from "react";
import { Button, Box } from "@mui/material";
import { sizes } from "../../styles/sizes";
import { colors, theme } from "../../styles/colors";
import useThemeStore, { ThemeType } from "../../store/store";

type ProfileTotalButtonProps = {
  toggleAllProfiles: () => void;
};

const Profile_TotalButton = ({
  toggleAllProfiles,
}: ProfileTotalButtonProps) => {
  //zustand로 관리하는 테마 호출
  const { isTheme } = useThemeStore();

  const getButtonColor = () => {
    return isTheme === ("기본" as ThemeType)
      ? colors.background.button
      : colors.sub_background.button;
  };
  return (
    <Box sx={{ display: "flex", gap: 1 }}>
      <Button
        sx={{
          fontSize: sizes.fontSize.large,
          width: "auto",
          height: "30px",
          padding: "4px",
          borderColor: theme.palette.grey[400],
          color: "black",
          "&:hover": {
            borderColor: getButtonColor(),
          },
        }}
        variant="outlined"
        onClick={toggleAllProfiles}
      >
        전체공개/비공개
      </Button>
    </Box>
  );
};

export default Profile_TotalButton;
