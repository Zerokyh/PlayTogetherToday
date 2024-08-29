import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Chatting from "../components/organism/Chatting";
import ChatListBox from "../components/organism/ChatListBox";
import { WidthHalfInnerBox, WidthHalfOutterBox } from "../styles/mui";

const Chat = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <WidthHalfOutterBox>
        <WidthHalfInnerBox>
          <ChatListBox />
          {/* 왼쪽 절반 */}
        </WidthHalfInnerBox>
        <WidthHalfInnerBox>
          <Chatting />
          {/* 오른쪽 절반 */}
        </WidthHalfInnerBox>
      </WidthHalfOutterBox>
    </React.Fragment>
  );
};

export default Chat;
