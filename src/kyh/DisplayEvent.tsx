import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabPanel from "@mui/lab/TabPanel";
import { Tabs, Typography } from "@mui/material";
import ScheduleList from "./ScheduleList";

type DisplayEventProps = {};

const DisplayEvent = ({}: DisplayEventProps) => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <Box
      sx={{
        maxWidth: { xs: 290, sm: 290 },
        height: 100,
        bgcolor: "background.paper",
      }}
    >
      <TabContext value={value}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          centered
          sx={{ width: 290 }}
        >
          <Tab label="오늘의 이벤트" value="1" sx={{ width: 210 }} />
          <Tab label="주간 이벤트" value="2" sx={{ width: 210 }} />
          <Tab label="월간 이벤트" value="3" sx={{ width: 210 }} />
        </Tabs>
        <TabPanel value="1" sx={{ height: 120, overflowY: "scroll" }}>
          <ScheduleList
            groupname="오늘은 축구왕"
            eventname="정모"
            eventtime="17:00"
          />
          <ScheduleList
            groupname="오늘은 축구왕"
            eventname="정모"
            eventtime="17:00"
          />
          <ScheduleList
            groupname="오늘은 축구왕"
            eventname="정모"
            eventtime="17:00"
          />
          <ScheduleList
            groupname="오늘은 축구왕"
            eventname="정모"
            eventtime="17:00"
          />
          <ScheduleList
            groupname="오늘은 축구왕"
            eventname="정모"
            eventtime="17:00"
          />
          <ScheduleList
            groupname="오늘은 축구왕"
            eventname="정모"
            eventtime="17:00"
          />
        </TabPanel>
        <TabPanel value="2" sx={{ height: 120, overflowY: "scroll" }}>
          <ScheduleList
            groupname="꼬꼬지"
            eventname="원데이 클래스"
            eventtime="13:00"
          />
        </TabPanel>
        <TabPanel value="3" sx={{ height: 120, overflowY: "scroll" }}>
          <ScheduleList
            groupname="내일은 내가 요리사"
            eventname="원데이 클래스"
            eventtime="10:00"
          />
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default DisplayEvent;
