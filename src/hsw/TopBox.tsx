import { Box, Card, CardActions, CardMedia, Typography } from "@mui/material";
import { colors } from "../styles/colors";
import useThemeStore from "../store/store";

type TopBoxProps = {
  rank?: string;
  alt?: string;
  src?: string;
};

const TopBox = ({ rank, alt, src }: TopBoxProps) => {
  const { isTheme } = useThemeStore();
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          borderRadius: 4,
          bgcolor:
            isTheme == "기본"
              ? colors.background.tertiary
              : colors.sub_background.tertiary,
          padding: "10px",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            gap: "5px",
            flexDirection: "column",
          }}
        >
          <Typography variant="h5">{rank}</Typography>
          <Box sx={{ width: "100%", height: "100%" }}>
            <Card sx={{ width: "100%", height: "100%" }}>
              <CardMedia
                sx={{ height: "100%" }}
                image={src}
                title="green iguana"
              />
              <CardActions></CardActions>
            </Card>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default TopBox;
