import * as React from "react";
import { FullPageBox } from "../styles/mui";
import BasicButton from "../components/atom/Button/BasicButton";
import { colors } from "../styles/colors";
import { Box, Button, Card, CardMedia, Grid, Typography } from "@mui/material";
import BasicModal from "../components/organism/Modal/BasicModal";
import { dashBoardData } from "../constants/dashBoardData";
import useThemeStore from "../store/store";
import { useNavigate } from "react-router-dom";
import TestInputModifyBox from "./TestInputModifyBox";

const UtilTestPage = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { isTheme, isLogin } = useThemeStore();
  const navigate = useNavigate();
  return (
    <FullPageBox>
      <Box>
        <Box>
          <BasicButton
            text="가입하기"
            onClick={handleOpen}
            sx={{ bgcolor: colors.background.tertiary }}
          />
          {/* <RegisterModal
            registerformprops={{
              title: "회원 가입을 진행하겠습니까?",
              handleClose,
            }}
            open={open}
            handleClose={handleClose}
          /> */}
        </Box>
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
        <Box>
          <TestInputModifyBox />
        </Box>
      </Box>
    </FullPageBox>
  );
};

export default UtilTestPage;
