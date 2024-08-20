import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import LogoIcon from "../atom/ImgAvatar";
import { ChatListBoxAvatarSize } from "../../styles/mui";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
  width: 100,
  height: 100,
  borderRadius: "50%",
});

const ChatListBox = () => {
  return (
    <Paper
      sx={{
        p: 2,
        margin: "auto",
        maxWidth: 770,
        width: "100%",
        maxHeight: 100,
        borderRadius: "12px",
      }}
    >
      <Grid container spacing={2} sx={{ maxHeight: 80 }}>
        <Grid item>
          <ButtonBase sx={{ width: 70, height: 70 }}>
            <LogoIcon
              alt="cat"
              src="/cat.jpg"
              sx={{ ...ChatListBoxAvatarSize }}
            />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={1}>
            <Grid item xs>
              <Typography
                gutterBottom
                variant="subtitle1"
                component="div"
                fontWeight={800}
              >
                닉네임
              </Typography>
              <Typography variant="body2" color="text.secondary">
                안녕! 뭐해?
              </Typography>
              <Typography
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  fontSize: 12,
                }}
                variant="body2"
              >
                YYYY년 MM월 DD일 hh시 mm분 ss초
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ChatListBox;
