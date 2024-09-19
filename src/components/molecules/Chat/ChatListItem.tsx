import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { ChatListBoxAvatar } from "../../../styles/mui";
import { Box } from "@mui/material";
import { sizes } from "../../../styles/sizes";
import { colors } from "../../../styles/colors";
import ImgAvatar from "../../atom/Avatar/ImgAvatar";

type ChatListItemProps = {
  avatarname?: string;
  avatarsrc?: string;
  nickname: string;
  lastchatmsg?: string;
  lastchattime_day?: string;
  lastchattime_time?: string;
  onClick?: () => void;
};

const ChatListItem = ({
  avatarname,
  avatarsrc,
  nickname,
  lastchatmsg,
  lastchattime_day,
  lastchattime_time,
  onClick,
}: ChatListItemProps) => {
  return (
    <Box onClick={onClick} sx={{ position: "relative" }}>
      <Paper
        sx={{
          p: 1,
          width: "100%",
          borderRadius: "12px",
          display: "flex",
          alignItems: "center",
          mb: 2,
          position: "relative",
        }}
      >
        <Grid container spacing={2} sx={{ height: "100%" }}>
          <Grid item>
            <ImgAvatar
              alt={avatarname}
              src={avatarsrc}
              sx={{ ...ChatListBoxAvatar }}
            />
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
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    fontSize: sizes.fontSize.small,
                    color: colors.text.primary,
                  }}
                >
                  {lastchatmsg}
                </Typography>
                <Box
                  sx={{
                    position: "absolute",
                    top: 30,
                    right: -4,
                    zIndex: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                    paddingRight: 2,
                    paddingTop: 1,
                  }}
                >
                  <Typography
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end",
                      fontSize: 12,
                    }}
                    variant="body2"
                  >
                    {lastchattime_day}
                  </Typography>
                  <Typography
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end",
                      fontSize: 12,
                    }}
                    variant="body2"
                  >
                    {lastchattime_time}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default ChatListItem;
