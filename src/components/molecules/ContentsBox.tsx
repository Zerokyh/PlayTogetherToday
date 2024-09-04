import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { ContentsBoxProps } from "../../utils/type";
import useThemeStore from "../../store/store";
import { colors } from "../../styles/colors";
import { Box } from "@mui/material";

const ContentsBox = ({
  img,
  subject,
  introduce,
  introduce_add,
  href,
}: ContentsBoxProps) => {
  const { isTheme, isLogin } = useThemeStore();
  const navigate = useNavigate();
  return (
    <Card
      sx={{
        display: "flex",
        width: 620,
        height: 445,
        margin: "10px",
        backgroundColor:
          isTheme === "기본"
            ? colors.background.secondary
            : colors.sub_background.secondary,
      }}
    >
      {/* 왼쪽 절반 - 이미지 */}
      <Box sx={{ flex: 1 }}>
        <CardMedia
          component="img"
          alt={subject}
          src={img}
          sx={{ height: "100%", objectFit: "cover" }}
        />
      </Box>

      {/* 오른쪽 절반 - 텍스트 */}
      <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: 2,
          }}
        >
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            color={colors.text.primary}
          >
            {subject}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {introduce}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {introduce_add}
          </Typography>
        </CardContent>
        <CardActions sx={{ mt: "auto", padding: 2 }}>
          <Button
            sx={{
              width: "100%",
              justifyContent: "end",
            }}
            size="small"
            onClick={() => {
              navigate(isLogin ? href : "/Login");
            }}
          >
            Detail
          </Button>
        </CardActions>
      </Box>
    </Card>
  );
};

export default ContentsBox;
