import { Box } from "@mui/material";
import WidthHalfBox from "../atom/WidthHalfBox";
import ChatSendMsgBox from "../molecules/ChatSendMsgBox";
import ChatReceiveMsgBox from "../molecules/ChatReceiveMsgBox";

const Chatting = () => {
  return (
    <WidthHalfBox
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 0,
        padding: 0,
      }}
    >
      <Box sx={{ padding: 3, width: "100%", overflowY: "scroll" }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <ChatReceiveMsgBox
            nickName="엄마쟤흙머겅"
            chatMsg="점메추좀"
            msgTime="10:28"
          />
          <ChatReceiveMsgBox
            nickName="엄마쟤흙머겅"
            chatMsg="시간이 몇시인데 아직도 자냐??"
            msgTime="10:29"
          />
          <ChatReceiveMsgBox
            nickName="엄마쟤흙머겅"
            chatMsg="이거 정신 못차리네, 해가 중천이다! 어제 뭐했어"
            msgTime="10:30"
          />
          <ChatSendMsgBox chatMsg="꺼져" msgTime="10:45" />
          <ChatReceiveMsgBox
            nickName="엄마쟤흙머겅"
            chatMsg="야"
            msgTime="10:52"
          />
          <ChatSendMsgBox chatMsg="닭가슴살이나 먹어" msgTime="10:57" />
          <ChatReceiveMsgBox
            nickName="엄마쟤흙머겅"
            chatMsg="니나 먹어라"
            msgTime="10:58"
          />
          <ChatSendMsgBox chatMsg="ㅇㅇ 존맛" msgTime="11:30" />
          <ChatReceiveMsgBox
            nickName="엄마쟤흙머겅"
            chatMsg="집앞이다! 밥먹게 나와"
            msgTime="11:42"
          />
          <ChatSendMsgBox chatMsg="아 꺼져 좀 쉬자" msgTime="11:43" />
          <ChatReceiveMsgBox
            nickName="엄마쟤흙머겅"
            chatMsg="밥사줌 당장 기어나와"
            msgTime="11:44"
          />
          <ChatSendMsgBox chatMsg="ㅇㅇ 모자쓰고 나감" msgTime="11:44" />
          <ChatReceiveMsgBox
            nickName="엄마쟤흙머겅"
            chatMsg="편의점 앞으로와"
            msgTime="11:44"
          />
        </Box>
      </Box>
    </WidthHalfBox>
  );
};

export default Chatting;
