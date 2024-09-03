import { Box, TextField } from "@mui/material";
import WidthHalfBox from "../atom/WidthHalfBox";
import ChatSendMsgBox from "../molecules/ChatSendMsgBox";
import ChatReceiveMsgBox from "../molecules/ChatReceiveMsgBox";
import { colors } from "../../styles/colors";
import { sizes } from "../../styles/sizes";
import { useEffect, useRef } from "react";
import useThemeStore from "../../store/store";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#006DFF",
    },
    secondary: {
      main: "#FA9884",
    },
  },
});

const Chatting = () => {
  const { isTheme } = useThemeStore();

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const inputColor = isTheme === "기본" ? "primary" : "secondary";

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({
        behavior: "auto",
        block: "end",
      });
    }
  }, []);
  return (
    <WidthHalfBox
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 0,
        padding: 0,
      }}
    >
      <Box
        sx={{
          padding: 4,
          width: "100%",
          maxWidth: "625px", // 최대 너비 설정
          minWidth: "500px", // 최소 너비 설정
          overflowY: "scroll",
        }}
      >
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
        <Box
          component="form"
          sx={{
            width: "100%",
            padding: 1,
            borderRadius: sizes.borderRadius.xs,
            backgroundColor:
              isTheme == "기본"
                ? colors.background.primary
                : colors.sub_background.primary,
            position: "sticky", // 입력란을 고정
            bottom: -1,
            marginTop: 5,
          }}
          noValidate
          autoComplete="off"
        >
          <ThemeProvider theme={theme}>
            <TextField
              label="채팅을 입력해주세요"
              color={inputColor}
              focused
              sx={{ width: "100%" }}
            />
          </ThemeProvider>
        </Box>
        <div ref={messagesEndRef} />
      </Box>
    </WidthHalfBox>
  );
};

export default Chatting;
