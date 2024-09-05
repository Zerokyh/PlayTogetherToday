import { Box, Card, CardMedia, ThemeProvider } from "@mui/material";
import { colors } from "../styles/colors";
import GetBorderImg from "./GetBorderImg";

const BorderDetailInfoImg = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        borderRadius: 4,
        bgcolor: colors.background.secondary,
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
