import { Box } from "@mui/material";
import WidthHalfBox from "../../atom/WidthHalfBox";
import ChatListItem from "../../molecules/ChatListItem";

const ChatListBox = () => {
  return (
    <WidthHalfBox
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 0,
        padding: 0,
      }}
    >
      <Box sx={{ padding: 3, width: "100%", overflowY: "scroll" }}>
        <ChatListItem
          avatarsrc="cat.jpg"
          nickname="닉네임"
          lastchatmsg="뭐해?"
          lastchattime_day="YYYY년 MM월 DD일"
          lastchattime_time="hh시 mm분 ss초"
        />
      </Box>
    </WidthHalfBox>
  );
};

export default ChatListBox;
