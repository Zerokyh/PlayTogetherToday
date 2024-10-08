import { Box, TextField, Typography } from "@mui/material";
import WidthHalfBox from "../../molecules/WidthHalfBox";
import ChatSendMsgBox from "../../molecules/Chat/ChatSendMsgBox";
import ChatReceiveMsgBox from "../../molecules/Chat/ChatReceiveMsgBox";
import { colors } from "../../../styles/colors";
import { useEffect, useRef, useState } from "react";
import useThemeStore from "../../../store/store";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import LoadingSpiner from "../../atom/Loading/LoadingSpinner";
import { sizes } from "../../../styles/sizes";

type ChattingProps = {
  friend_member_nickname?: string;
  message_detail?: string;
  message_time?: string;
};

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

const Chatting = ({
  friend_member_nickname,
  message_detail,
  message_time,
}: ChattingProps) => {
  const { isTheme } = useThemeStore();
  const [isLoading] = useState(false);

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
        component="form"
        sx={{
          width: "100%",

          backgroundColor:
            isTheme == "기본"
              ? colors.background.primary
              : colors.sub_background.primary,
          position: "sticky", // 입력란을 고정
          bottom: 4,
        }}
        noValidate
        autoComplete="off"
      >
        <Typography
          sx={{
            height: 60,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: sizes.fontSize.medium,
            backgroundColor:
              isTheme == "기본"
                ? colors.background.tertiary
                : colors.sub_background.tertiary,
          }}
        >
          {/* {friend_member_nickname} */}
          뒹굴뒹굴
        </Typography>
      </Box>
      <Box
        sx={{
          padding: 4,
          width: "100%",
          maxWidth: "625px", // 최대 너비 설정
          minWidth: "500px", // 최소 너비 설정
          overflowY: "scroll",
        }}
      >
        {isLoading ? (
          <LoadingSpiner loading={isLoading} boxHeight={"564px"} />
        ) : (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              position: "relative",
            }}
          >
            <ChatReceiveMsgBox chatMsg="점메추좀" msgTime="10:28" />
            <ChatReceiveMsgBox
              chatMsg="시간이 몇시인데 아직도 자냐??"
              msgTime="10:29"
            />
            <ChatReceiveMsgBox
              chatMsg="이거 정신 못차리네, 해가 중천이다! 어제 뭐했어"
              msgTime="10:30"
            />
            <ChatSendMsgBox chatMsg="나 잔다" msgTime="10:45" />
            <ChatReceiveMsgBox chatMsg="야" msgTime="10:52" />
            <ChatSendMsgBox chatMsg="닭가슴살이나 먹어" msgTime="10:57" />
            <ChatReceiveMsgBox chatMsg="니나 먹어라" msgTime="10:58" />
            <ChatSendMsgBox chatMsg="ㅇㅇ 완전 맛남" msgTime="11:30" />
            <ChatReceiveMsgBox
              chatMsg="집앞이다! 밥먹게 나와"
              msgTime="11:42"
            />
            <ChatSendMsgBox chatMsg="아 좀 쉬자" msgTime="11:43" />
            <ChatReceiveMsgBox chatMsg="밥사줌 당장 기어나와" msgTime="11:44" />
            <ChatSendMsgBox chatMsg="ㅇㅇ 모자쓰고 나감" msgTime="11:44" />
            <ChatReceiveMsgBox
              chatMsg={message_detail}
              msgTime={message_time}
            />
            <div ref={messagesEndRef} />
          </Box>
        )}
      </Box>
      <Box
        component="form"
        sx={{
          width: "100%",
          padding: 1,
          backgroundColor:
            isTheme == "기본"
              ? colors.background.primary
              : colors.sub_background.primary,
          position: "sticky", // 입력란을 고정
          bottom: 4,
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
    </WidthHalfBox>
  );
};

export default Chatting;
