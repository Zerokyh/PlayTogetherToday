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

const ContentsBox = ({
  index,
  img,
  subject,
  introduce,
  introduce_add,
}: ContentsBoxProps) => {
  const navigate = useNavigate();
  return (
    <Card sx={{ maxWidth: 400 }}>
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
            index == 1 ? navigate("/Chat") : navigate("/");
          }}
        >
          Detail
        </Button>
      </CardActions>
    </Card>
  );
};

export default ContentsBox;
