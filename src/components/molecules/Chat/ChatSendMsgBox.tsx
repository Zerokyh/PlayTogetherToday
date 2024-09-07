import { Box, Typography } from "@mui/material";
import { colors } from "../../../styles/colors";
import { sizes } from "../../../styles/sizes";

type ChatSendMsgBoxProps = {
  chatMsg: string;
  msgTime: string;
};

const ChatSendMsgBox = ({ chatMsg, msgTime }: ChatSendMsgBoxProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
        width: "100%",
        flexDirection: "row-reverse",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          width: "100%",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <Typography
            sx={{
              fontSize: 12,
              color: "text.secondary",
              whiteSpace: "nowrap",
              marginRight: 2, // 메시지와 시간 정보 사이의 간격 조정
            }}
            variant="body2"
          >
            {msgTime}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              wordBreak: "break-word",
              display: "inline-block",
              maxWidth: "340px",
              textAlign: "right",
              bgcolor: colors.background.drawer,
              borderRadius: sizes.borderRadius.xs,
              p: 1,
            }}
          >
            {chatMsg}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ChatSendMsgBox;
