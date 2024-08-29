import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { ContentsBoxProps } from "../../utils/type";
import { ContentsBoxImg } from "../../styles/mui";
import useThemeStore from "../../store/store";

const ContentsBox = ({
  img,
  subject,
  introduce,
  introduce_add,
  href,
}: ContentsBoxProps) => {
  const { isLogin } = useThemeStore();
  const navigate = useNavigate();
  return (
    <Card
      sx={{
        width: { xs: "80%", sm: "80%", md: "60%" }, // 반응형 width 조정
        height: { md: "80%" }, // 반응형 height 조정
        maxWidth: 400,
        minWidth: 200,
        minHeight: 380,
      }}
    >
      <CardMedia
        component="img"
        alt={subject}
        src={img}
        sx={{ ...ContentsBoxImg }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {subject}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {introduce}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {introduce_add}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={() => {
            {
              isLogin ? navigate(href) : navigate("/Login");
            }
          }}
        >
          Detail
        </Button>
      </CardActions>
    </Card>
  );
};

export default ContentsBox;
