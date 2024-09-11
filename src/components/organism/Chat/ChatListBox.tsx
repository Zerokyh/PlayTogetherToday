import { Box } from "@mui/material";
import WidthHalfBox from "../../molecules/WidthHalfBox";
import ChatListItem from "../../molecules/Chat/ChatListItem";
import { useEffect, useState } from "react";
import axios from "axios";
import LoadingSpiner from "../../atom/Loading/LoadingSpiner";

type ChatData = {
  chat_id: number;
  member_id: number;
  freind_member_nickname: string;
  last_message_date: string;
  last_message_time: string;
  message_confirmation: boolean;
};

const ChatListBox = () => {
  const [chat, setChat] = useState<ChatData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Spring Boot API 호출
    axios
      .get("http://localhost:8080/Chat")
      .then((response) => {
        setChat(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching chat data:", error);
        // setLoading(false);
      });
  }, []);

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
        {isLoading ? (
          <LoadingSpiner loading={isLoading} boxHeight={"652px"} />
        ) : (
          chat && (
            <ChatListItem
              avatarsrc="cat.jpg"
              nickname={chat.freind_member_nickname}
              lastchatmsg="뭐해?"
              lastchattime_day="YYYY년 MM월 DD일"
              lastchattime_time="hh시 mm분 ss초"
            />
          )
        )}
      </Box>
    </WidthHalfBox>
  );
};

export default ChatListBox;
