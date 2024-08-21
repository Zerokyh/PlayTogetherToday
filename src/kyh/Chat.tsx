import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Box } from "@mui/material";
import ChatBox from "../components/organism/ChatBox";
import Chatting from "../components/molecules/Chatting";
import ChatListBox from "../components/molecules/ChatListBox";

const Chat = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Box
        sx={{
          height: "90vh",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: 4,
        }}
      >
        <Box sx={{ flex: "1 0 0", maxWidth: "800px", height: "900px" }}>
          <ChatBox isSelect={<ChatListBox />} />
        </Box>
        <Box sx={{ flex: "1 0 0", maxWidth: "800px", height: "900px" }}>
          <ChatBox isSelect={<Chatting />} />
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Chat;
