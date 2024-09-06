import { Box, Card, CardMedia, ThemeProvider } from "@mui/material";
import { colors } from "../styles/colors";

type BorderImgProps = {
  imageSrc?: string;
};

const GetBorderImg = ({ imageSrc }: BorderImgProps) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        borderRadius: 4,
        bgcolor: colors.background.tertiary,
      }}
    >
      <Card sx={{ width: "!00%", height: "100%" }}>
        <CardMedia sx={{ height: "100%" }} image={imageSrc}></CardMedia>
      </Card>
    </Box>
  );
};

export default GetBorderImg;
