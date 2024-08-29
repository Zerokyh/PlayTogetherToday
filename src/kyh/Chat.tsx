import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Chatting from "../components/organism/Chatting";
import ChatListBox from "../components/organism/ChatListBox";
import {
  FullPageBox,
  WidthHalfInnerBox,
  WidthHalfOutterBox,
} from "../styles/mui";

const Chat = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <WidthHalfOutterBox>
        {/* 왼쪽 절반 */}
        <WidthHalfInnerBox>
          <ChatListBox />
        </WidthHalfInnerBox>
        {/* 오른쪽 절반 */}
        <WidthHalfInnerBox>
          <Chatting />
        </WidthHalfInnerBox>
      </WidthHalfOutterBox>
    </React.Fragment>
  );
};

export default Chat;
