import * as React from "react";
import useThemeStore from "../../store/store";
import { Box, List } from "@mui/material";
import Divider from "@mui/material/Divider";
import Skeleton from "@mui/material/Skeleton";
import Calendar from "../../components/organism/Calendar";
import { SkeletonMini } from "../../styles/mui";
import TextCard from "../../components/atom/TextCard";
import OpenedBarTopLogoutBar from "./OpenedBarTopLogoutBar";
import OpenedBarTopIsLogin from "./OpenedBarTopIsLogin";
import OpenedBarMiddle from "./OpenedBarMiddle";

const OpenedBar = () => {
  const { isLogin, isOpen } = useThemeStore();
  return (
    <>
      <List sx={{ ...(isOpen == false && { display: "none" }) }}>
        <>
          <OpenedBarTopLogoutBar />
          <Divider variant="middle" component="li" sx={{ paddingY: "2px" }} />
          <OpenedBarTopIsLogin />
          <OpenedBarMiddle />
          <Box>
            <Calendar />
          </Box>
          <Box>
            {isLogin ? (
              <Skeleton variant="rounded" sx={{ ...SkeletonMini }} />
            ) : (
              <TextCard text="소모임은 여러분들의 갓생살기의 도우미입니다." />
            )}
          </Box>
        </>
      </List>
    </>
  );
};

export default OpenedBar;
