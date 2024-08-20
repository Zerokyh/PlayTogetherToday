import React from "react";
import { Box } from "@mui/material";
import { WidthHalfBoxSize } from "../../styles/mui";
import ChatListBox from "../molecules/ChatListBox";

const ChatBox = () => {
  return (
    <Box
      sx={{
        ...WidthHalfBoxSize,
      }}
    >
      <Box
        sx={{
          width: "100%",
          borderRadius: "15px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <ChatListBox />
      </Box>
    </Box>
  );
};

export default ChatBox;
