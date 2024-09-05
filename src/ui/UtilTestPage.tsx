import * as React from "react";
import { FullPageBox } from "../styles/mui";
import BasicButton from "../components/atom/BasicButton";
import { colors } from "../styles/colors";
import { Box, Button, Card, CardMedia, Grid, Typography } from "@mui/material";
import BasicModal from "../components/organism/Modal/BasicModal";
import { dashBoardData } from "../constants/dashBoardData";
import useThemeStore from "../store/store";
import { useNavigate } from "react-router-dom";

const UtilTestPage = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { isTheme, isLogin } = useThemeStore();
  const navigate = useNavigate();
  return (
    <FullPageBox>
      {/* <Box>
        <Box>
          <BasicButton
            text="가입하기"
            onClick={handleOpen}
            sx={{ bgcolor: colors.background.tertiary }}
          /> */}
      {/* <RegisterModal
            registerformprops={{
              title: "회원 가입을 진행하겠습니까?",
              handleClose,
            }}
            open={open}
            handleClose={handleClose}
          /> */}
      {/* </Box>
        <Box>
          <BasicButton text="친구정보보기" onClick={handleOpen} />
          <BasicModal
            basicformprops={{
              title: "비공개 개인 공간 입니다.",
              subtitle: "방문을 원하시면 방문요청 해주세요!",
              handleClose,
            }}
            open={open}
            handleClose={handleClose}
          />
        </Box>
      </Box> */}
      <Box sx={{ padding: 0 }}>
        <Grid container spacing={2}>
          {dashBoardData.slice(0, 4).map((item, index) => (
            <Grid item xs={12} sm={6} md={6} lg={6} key={index}>
              <Card
                sx={{
                  position: "relative",
                  height: 435,
                  display: "flex",
                  flexDirection: "column",
                  overflow: "hidden",
                  backgroundColor:
                    isTheme === "기본"
                      ? colors.background.secondary
                      : colors.sub_background.secondary,
                }}
              >
                {/* 배경 이미지 */}
                <CardMedia
                  component="img"
                  src={item.img}
                  alt={item.subject}
                  sx={{
                    height: "100%",
                    objectFit: "cover",
                    width: "100%",
                    zIndex: 1, // 이미지의 z-index를 1로 설정
                  }}
                />

                {/* 오버레이 */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.5)", // 반투명 검은색 오버레이
                    color: "white",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: 2,
                    textAlign: "center",
                    zIndex: 2, // 오버레이의 z-index를 2로 설정하여 이미지 위에 표시되도록 설정
                    opacity: 1,
                    transition: "opacity 0.3s", // 오버레이의 투명도를 부드럽게 변경
                    "&:hover": {
                      opacity: 1, // 카드에 마우스를 올리면 오버레이가 나타나도록 설정
                    },
                  }}
                >
                  <Typography variant="h6" gutterBottom>
                    {item.subject}
                  </Typography>
                  <Typography variant="body2">{item.introduce}</Typography>
                  <Typography variant="body2">{item.introduce_add}</Typography>
                  <Button
                    variant="contained"
                    sx={{ mt: 2 }}
                    onClick={() => {
                      navigate(isLogin ? item.href : "/Login");
                    }}
                  >
                    Detail
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </FullPageBox>
  );
};

export default UtilTestPage;
