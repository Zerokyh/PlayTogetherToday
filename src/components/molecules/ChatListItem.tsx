import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import LogoIcon from "../atom/ImgAvatar";
import { ChatListBoxAvatar } from "../../styles/mui";

type ChatListItemProps = {
  avatarname?: string;
  avatarsrc?: string;
  nickname: string;
  lastchatmsg: string;
  lastchattime: string;
};

const ChatListItem = ({
  avatarname,
  avatarsrc,
  nickname,
  lastchatmsg,
  lastchattime,
}: ChatListItemProps) => {
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
              alt={avatarname}
              src={avatarsrc}
              sx={{ ...ChatListBoxAvatar }}
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
                {nickname}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {lastchatmsg}
              </Typography>
              <Typography
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  fontSize: 12,
                }}
                variant="body2"
              >
                {lastchattime}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ChatListItem;
