import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Container } from "@mui/material";
import ContentsBox from "../components/atom/ContentsBox";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";

const data = [
  {
    img: "/private.jpg",
    subject: "마이룸",
    introduce: "개인 정보 설정 및 나의 모임,",
    introduce_add: "친구 리스트, 쪽지함을 열람",
  },
  {
    img: "/chat.jpg",
    subject: "채팅룸",
    introduce: "채팅 목록 및 주고 받은 채팅",
    introduce_add: "메시지 페이지",
  },
  {
    img: "/group.jpg",
    subject: "모임들",
    introduce: "모임 생성, 가입, 리스트, 내가 속한",
    introduce_add: "모임등, 모임에 관련된 페이지",
  },
  {
    img: "/game.jpg",
    subject: "게임룸",
    introduce: "사다리 게임, 룰렛 등 다양한 게임들",
    introduce_add: "인원 선발을 위한 미니 게임 페이지",
  },
];

const Dashboard = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        maxWidth="md"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "95vh",
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 4, md: 6 }}
            columns={{ xs: 12, sm: 12, md: 12 }}
          >
            {data.map((item, index) => (
              <Grid xs={6} sm={6} md={6} key={index}>
                <ContentsBox
                  index={index}
                  img={item.img}
                  subject={item.subject}
                  introduce={item.introduce}
                  introduce_add={item.introduce_add}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default Dashboard;
