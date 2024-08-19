import React from "react";
import { Box } from "@mui/material";
import Chatlist from "./Chatlist";
import Chatting from "./Chatting";

type ChatBoxProps = {
  type: "chatlist" | "chat";
};

const ChatBox = ({ type }: ChatBoxProps) => {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "800px",
        height: "100%",
        maxHeight: "900px",
        bgcolor: "#f3eafb",
        borderRadius: "15px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: "12px",
      }}
    >
      <Box
        sx={{
          width: "100%",
          borderRadius: "15px",
          display: type === "chatlist" ? "block" : "none",
        }}
      >
        <Chatlist />
      </Box>
      <Box
        sx={{
          width: "100%",
          borderRadius: "15px",
          display: type === "chat" ? "block" : "none",
        }}
      >
        <Chatting />
      </Box>
    </Box>
  );
};

export default ChatBox;
