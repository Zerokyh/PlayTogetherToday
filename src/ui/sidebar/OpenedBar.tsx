import * as React from "react";
import useThemeStore from "../../store/store";
import { Box, List } from "@mui/material";
import Divider from "@mui/material/Divider";
import Calendar from "../../components/organism/Sidebar/Calendar";
import TextCard from "../../components/atom/Text/TextCard";
import OpenedBarTopLogoutBar from "./OpenedBarTopLogoutBar";
import OpenedBarTopIsLogin from "./OpenedBarTopIsLogin";
import OpenedBarMiddle from "./OpenedBarMiddle";
import DisplayEvent from "../../kyh/DisplayEvent";

const OpenedBar = () => {
  const { isLogin, isOpen } = useThemeStore();
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(null);
  return (
    <>
      <List sx={{ ...(isOpen == false && { display: "none" }) }}>
        <>
          <OpenedBarTopLogoutBar />
          <Divider variant="middle" component="li" sx={{ paddingY: "2px" }} />
          <OpenedBarTopIsLogin />
          <OpenedBarMiddle />
          <Box>
            <Calendar onDateChange={setSelectedDate} />
          </Box>
          <Box>
            {isLogin ? (
              // <Skeleton variant="rounded" sx={{ ...SkeletonMini }} />
              <Box sx={{ mx: "auto", width: 290, height: 140 }}>
                <DisplayEvent selectedDate={selectedDate} />
              </Box>
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
