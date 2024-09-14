import { Box, Typography } from "@mui/material";
import WidthHalfBox from "../../molecules/WidthHalfBox";
import ChatListItem from "../../molecules/Chat/ChatListItem";
import { useEffect, useState } from "react";
import axios from "axios";
import LoadingSpiner from "../../atom/Loading/LoadingSpinner";
import { colors } from "../../../styles/colors";
import useThemeStore from "../../../store/store";
import { sizes } from "../../../styles/sizes";

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
  const { isTheme } = useThemeStore();
  const [chatList, setChatList] = useState<ChatListsData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   Spring Boot API 호출
  //   axios
  //     .get("http://localhost:8080/Chat")
  //     .then((response) => {
  //       setChatList(response.data);
  //       setIsLoading(false);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching chat data:", error);
  //       setIsLoading(false);
  //     });
  // }, []);

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
      <Box
        component="form"
        sx={{
          width: "100%",

          backgroundColor:
            isTheme == "기본"
              ? colors.background.primary
              : colors.sub_background.primary,
          position: "sticky", // 입력란을 고정
          bottom: 4,
        }}
        noValidate
        autoComplete="off"
      >
        <Typography
          sx={{
            height: 60,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: sizes.fontSize.medium,
          }}
        >
          {/* {friend_member_nickname} */}
          뒹굴뒹굴
        </Typography>
      </Box>
      <Box sx={{ padding: 3, width: "100%", overflowY: "scroll" }}>
        {isLoading ? (
          <LoadingSpiner
            loading={isLoading}
            boxHeight={"652px"}
            color={colors.text.primary}
          />
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
