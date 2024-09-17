import { Box, Card, CardMedia, ThemeProvider } from "@mui/material";
import { colors } from "../styles/colors";
import GetBorderImg from "./GetBorderImg";
import useThemeStore from "../store/store";

const BorderDetailInfoImg = () => {
  const { isTheme } = useThemeStore();
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        borderRadius: 4,
        bgcolor:
          isTheme === "기본"
            ? colors.background.secondary
            : colors.sub_background.secondary,
        display: "flex",
        gap: "30px",
        alignItems: "center",
        padding: "30px",
      }}
    >
      <GetBorderImg imageSrc="group.jpg"></GetBorderImg>
      <GetBorderImg imageSrc="game.jpg"></GetBorderImg>
    </Box>
  );
};
export default BorderDetailInfoImg;
