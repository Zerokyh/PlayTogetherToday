import { Box } from "@mui/material";
import ChatListBox from "./ChatListBox";
import WidthHalfBox from "../../molecules/WidthHalfBox";
import { ReactNode } from "react";
import Chatting from "./Chatting";
import { sizes } from "../../../styles/sizes";

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
          borderRadius: sizes.borderRadius.normal,
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
