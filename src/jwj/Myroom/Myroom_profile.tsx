import { Box, Typography } from "@mui/material";
import { sizes } from "../../styles/sizes";
import useThemeStore, { ThemeType } from "../../store/store";
import { colors } from "../../styles/colors";

type profile_props = {
  info_name?: string;
  info?: string;
  profileIsPublic: boolean;
  //   email?: string;
  //   address?: string;
  //   position?: string;
  //   own_anni ?: string;
  //   group_anni ?: string;
};

const Myroom_profile = ({
  info_name,
  info,
  profileIsPublic,
}: profile_props) => {
  //zustand로 관리하는 테마 호출
  const { isTheme } = useThemeStore();

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        backgroundColor:
          isTheme == ("기본" as ThemeType)
            ? colors.background.tertiary
            : colors.sub_background.tertiary,
        borderRadius: "8px",
        paddingX: "8px",
        flex: 1,
        minHeight: 0,
        maxHeight: "16.66%",
        gap: 0.5,
      }}
    >
      {profileIsPublic ? (
        <>
          <Typography variant="body2" sx={{ fontSize: sizes.fontSize.medium }}>
            {info_name}:
          </Typography>
          <Typography variant="body2" sx={{ fontSize: sizes.fontSize.medium }}>
            {info}
          </Typography>
        </>
      ) : (
        <>
          <Typography variant="body2" sx={{ fontSize: sizes.fontSize.medium }}>
            {info_name}:
          </Typography>
          <Typography variant="body2" sx={{ fontSize: sizes.fontSize.medium }}>
            공개되지않습니다
          </Typography>
        </>
      )}
    </Box>
  );
};

export default Myroom_profile;
