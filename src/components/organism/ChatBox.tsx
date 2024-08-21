import { Box } from "@mui/material";
import ChatListBox from "../molecules/ChatListBox";
import WidthHalfBox from "../atom/WidthHalfBox";
import { ReactNode } from "react";
import Chatting from "../molecules/Chatting";

type ChatBoxProps = {
  isSelect?: ReactNode;
};

const componentMap = {
  ChatListBox: (
    <>
      <ChatListBox />
    </>
  ),
  Chatting: <Chatting />,
};

const ChatBox = ({ isSelect }: ChatBoxProps) => {
  const Component =
    isSelect === <ChatListBox />
      ? componentMap.ChatListBox
      : isSelect === <Chatting />
      ? componentMap.Chatting
      : null;
  return (
    <WidthHalfBox>
      <Box
        sx={{
          width: "100%",
          borderRadius: "15px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {Component}
        <ChatListBox />
      </Box>
    </WidthHalfBox>
  );
};

export default ChatBox;
