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
      <ChatListBox />
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
    // <Box
    //   sx={{
    //     ...WidthHalfBoxSize,
    //   }}
    // >
    //   <Box
    //     sx={{
    //       width: "100%",
    //       borderRadius: "15px",
    //       display: "flex",
    //       flexDirection: "column",
    //     }}
    //   >
    //     <ChatListBox />
    //   </Box>
    // </Box>

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
      </Box>
    </WidthHalfBox>
  );
};

export default ChatBox;
