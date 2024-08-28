import WidthHalfBox from "../atom/WidthHalfBox";
import ChatListItem from "../molecules/ChatListItem";

const ChatListBox = () => {
  return (
    <WidthHalfBox
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 0,
        padding: 0,
      }}
    >
      <ChatListItem
        nickname="닉네임"
        lastchatmsg="뭐해?"
        lastchattime="YYYY년 MM월 DD일 hh시 mm분 ss초"
      />
      <ChatListItem
        nickname="닉네임"
        lastchatmsg="뭐해?"
        lastchattime="YYYY년 MM월 DD일 hh시 mm분 ss초"
      />
    </WidthHalfBox>
  );
};

export default ChatListBox;
