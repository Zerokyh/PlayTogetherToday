import { Box } from "@mui/material";
import WidthHalfBox from "../../molecules/WidthHalfBox";
import ChatListItem from "../../molecules/Chat/ChatListItem";
import { useEffect, useState } from "react";
import axios from "axios";
import LoadingSpiner from "../../atom/Loading/LoadingSpiner";

type ChatListsData = {
  chat_id: number;
  friend_member_id: number;
  friend_member_profile: string;
  friend_member_nickname: string;
  last_message_detail: string;
  last_message_date: string;
  last_message_time: string;
  message_confirmation: boolean;
};

const ChatListBox = () => {
  const [chatList, setChatList] = useState<ChatListsData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Spring Boot API 호출
    axios
      .get("http://localhost:8080/Chat")
      .then((response) => {
        setChatList(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching chat data:", error);
        setIsLoading(false);
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
          chatList && (
            <ChatListItem
              avatarsrc={chatList.friend_member_profile}
              nickname={chatList.friend_member_nickname}
              lastchatmsg={chatList.last_message_detail}
              lastchattime_day={chatList.last_message_date}
              lastchattime_time={chatList.last_message_time}
            />
          )
        )}
      </Box>
    </WidthHalfBox>
  );
};

export default ChatListBox;
