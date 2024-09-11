import { Box, Typography } from "@mui/material";
import { sizes } from "../../styles/sizes";
import useThemeStore, { ThemeType } from "../../store/store";
import { colors } from "../../styles/colors";
import ImgAvatar from "../../components/atom/Avatar/ImgAvatar";

type FriendListProps = {
  name?: string;
  anni?: string;
  group?: string;
};

const Myroom_freindsList = ({ name, anni, group }: FriendListProps) => {
  //zustand로 관리하는 테마 호출
  const { isTheme } = useThemeStore();
  return (
    <Box
      sx={{
        width: "100%",
        height: "20%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor:
          isTheme == ("기본" as ThemeType)
            ? colors.background.tertiary
            : colors.sub_background.tertiary,
        borderRadius: "12px",
        paddingX: "8px",
        marginBottom: "4px",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <ImgAvatar
          src="cat.jpg"
          alt="프로필"
          sx={{
            width: sizes.avatar.logo,
            height: sizes.avatar.logo,
            mx: "auto",
          }}
        />
        <Typography variant="body2" sx={{ fontSize: sizes.fontSize.medium }}>
          {name}
        </Typography>
        <Typography variant="caption" sx={{ fontSize: sizes.fontSize.xsmall }}>
          {anni}
        </Typography>
      </Box>
      <Typography variant="body2" sx={{ fontSize: sizes.fontSize.medium }}>
        {group}
      </Typography>
    </Box>
  );
};

export default Myroom_freindsList;
