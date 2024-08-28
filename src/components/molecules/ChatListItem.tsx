import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import { ChatListBoxAvatar } from "../../styles/mui";
import { Box } from "@mui/material";
import ImgAvatar from "../atom/ImgAvatar";

type ChatListItemProps = {
  avatarname?: string;
  avatarsrc?: string;
  nickname: string;
  lastchatmsg: string;
  lastchattime: string;
  onClick?: () => void;
};

const ChatListItem = ({
  avatarname,
  avatarsrc,
  nickname,
  lastchatmsg,
  lastchattime,
  onClick,
}: ChatListItemProps) => {
  return (
    <Box onClick={onClick}>
      <Paper
        sx={{
          p: 2,
          width: "100%",
          borderRadius: "12px",
          display: "flex",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Grid container spacing={2} sx={{ height: "100%" }}>
          <Grid item>
            <ButtonBase sx={{ width: 70, height: 70 }}>
              <ImgAvatar
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
    </Box>
  );
};

export default ChatListItem;
