import { Button, Box, Typography } from "@mui/material";
import { sizes } from "../../styles/sizes";
import useThemeStore, { ThemeType } from "../../store/store";
import { colors } from "../../styles/colors";
import ImgAvatar from "../../components/atom/Avatar/ImgAvatar";

type MessageProps = {
  contents?: string;
  time?: string;
};

const Myroom_message = ({ contents, time }: MessageProps) => {
  //zustand로 관리하는 테마 호출
  const { isTheme } = useThemeStore();

  return (
    <Button
      sx={{
        width: "100%",
        height: "auto",
        minHeight: "70px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor:
          isTheme == ("기본" as ThemeType)
            ? colors.background.tertiary
            : colors.sub_background.tertiary,
        borderRadius: "12px",
        paddingX: "8px",
        textTransform: "none",
        color: "black",
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
        <Typography
          variant="body2"
          fontWeight="bold"
          sx={{ fontSize: sizes.fontSize.medium }}
        >
          {contents}
        </Typography>
      </Box>
      <Typography
        variant="body2"
        fontWeight="bold"
        sx={{ fontSize: sizes.fontSize.medium }}
      >
        {time}
      </Typography>
    </Button>
  );
};

export default Myroom_message;
