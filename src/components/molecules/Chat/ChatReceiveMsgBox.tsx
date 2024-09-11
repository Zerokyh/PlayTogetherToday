import { Box, Typography } from "@mui/material";
import { ChatListBoxAvatar } from "../../../styles/mui";
import { colors } from "../../../styles/colors";
import { sizes } from "../../../styles/sizes";
import ImgAvatar from "../../atom/Avatar/ImgAvatar";

type ChatReceiveMsgBoxProps = {
  avatarSrc?: string;
  chatMsg: string;
  msgTime: string;
  onClick?: () => void;
};

const ChatReceiveMsgBox = ({
  avatarSrc,
  chatMsg,
  msgTime,
  onClick,
}: ChatReceiveMsgBoxProps) => {
  return (
    <Box
      width={"fit-content"}
      sx={{ display: "flex", alignItems: "flex-start" }}
    >
      <ImgAvatar src={avatarSrc} sx={{ ...ChatListBoxAvatar }} />
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          marginLeft: 2,
          position: "relative",
          height: sizes.avatar.chat,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            position: "relative",
            width: "100%",
          }}
        >
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              wordBreak: "break-word",
              display: "inline-block",
              maxWidth: "340px",
              marginRight: 6,
              bgcolor: colors.background.drawer,
              borderRadius: sizes.borderRadius.xs,
              p: 1,
            }}
          >
            {chatMsg}
          </Typography>
          <Typography
            sx={{
              position: "absolute",
              bottom: 0,
              right: 0,
              fontSize: 12,
              color: "text.secondary",
              whiteSpace: "nowrap",
            }}
            variant="body2"
          >
            {msgTime}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ChatReceiveMsgBox;
