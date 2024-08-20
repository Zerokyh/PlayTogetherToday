import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Box } from "@mui/material";
import ChatBox from "../components/organism/ChatBox";

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
          <ChatBox />
        </Box>
        {/* <Box sx={{ flex: "1 0 0", maxWidth: "800px", height: "900px" }}>
          <ChatBox />
        </Box> */}
      </Box>
    </React.Fragment>
  );
};

export default Chat;
