import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import useThemeStore from "../../store/store";
import { colors } from "../../styles/colors";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { sizes } from "../../styles/sizes";

export type ContentsBoxProps = {
  img: string;
  subject: string;
  introduce: string;
  introduce_add: string;
  href: string;
};

const ContentsBox = ({
  img,
  subject,
  introduce,
  introduce_add,
  href,
}: ContentsBoxProps) => {
  const { isTheme, isLogin } = useThemeStore();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Card
      sx={{
        flexGrow: 1,
        position: "relative",
        width: { xs: 300, sm: 400, md: 500, lg: 632 },
        height: { xs: 200, sm: 200, md: 350, lg: 450 },
        minHeight: { xs: 200, sm: 200 },
        maxHeight: { xs: 300, sm: "none" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        borderRadius: sizes.borderRadius.medium,
        backgroundColor:
          isTheme === "기본"
            ? colors.background.secondary
            : colors.sub_background.secondary,
      }}
    >
      <CardMedia
        component="img"
        src={img}
        alt={subject}
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 1,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.2)",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: isMobile ? 1.5 : 2,
          textAlign: "center",
          zIndex: 2,
          transition: "opacity 0.3s",
          "&:hover": {
            opacity: 1,
          },
        }}
      >
        <Typography variant={isMobile ? "body1" : "h6"} gutterBottom>
          {subject}
        </Typography>
        <Typography
          variant={isMobile ? "body2" : "body1"}
          sx={{
            mb: 1,
            display: "-webkit-box",
            WebkitLineClamp: isMobile ? 3 : 4,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {introduce}
        </Typography>
        {!isMobile && (
          <Typography
            variant="body2"
            sx={{
              mb: 1,
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {introduce_add}
          </Typography>
        )}
        <Typography
          sx={{
            color: colors.background.button,
            fontSize: sizes.fontSize.medium,
            fontWeight: 800,
            ":hover": { cursor: "pointer" },
          }}
          onClick={() => {
            navigate(isLogin ? href : "/Login");
          }}
        >
          자세히보기
        </Typography>

        {/* <Button
          variant="contained"
          size={isMobile ? "small" : "medium"}
          sx={{
            mt: isMobile ? 1 : 2,
            bgcolor: colors.background.button,
            fontWeight: 600,
            fontSize: sizes.fontSize.medium,
          }}
          onClick={() => {
            navigate(isLogin ? href : "/Login");
          }}
        >
          자세히 보기
        </Button> */}
      </Box>
    </Card>
  );
};

export default ContentsBox;
