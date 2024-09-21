// DisplayEvent.js
import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabPanel from "@mui/lab/TabPanel";
import { Tabs, Typography } from "@mui/material";
import ScheduleList from "./ScheduleList";
import dayjs, { Dayjs } from "dayjs";
import "dayjs/locale/ko";

dayjs.locale("ko");

type Event = {
  groupname: string;
  eventname: string;
  eventtime: string;
  date: string; // Format: YYYY-MM-DD
};

// 이벤트
const eventsData: Event[] = [
  {
    groupname: "꼬꼬지",
    eventname: "원데이 클래스",
    eventtime: "10:00",
    date: "2024-09-10",
  },
  {
    groupname: "꼬꼬지",
    eventname: "원데이 클래스",
    eventtime: "13:00",
    date: "2024-09-11",
  },
  {
    groupname: "내일은 내가 요리사",
    eventname: "원데이 클래스",
    eventtime: "10:00",
    date: "2024-09-12",
  },
  {
    groupname: "내일은 내가 요리사",
    eventname: "원데이 클래스",
    eventtime: "12:00",
    date: "2024-09-13",
  },
  {
    groupname: "꼬꼬지",
    eventname: "원데이 클래스",
    eventtime: "13:00",
    date: "2024-09-14",
  },
  {
    groupname: "오늘은 축구왕",
    eventname: "정모",
    eventtime: "18:00",
    date: "2024-09-15",
  },
  {
    groupname: "꼬꼬지",
    eventname: "원데이 클래스",
    eventtime: "10:00",
    date: "2024-09-30",
  },
];

type DisplayEventProps = {
  selectedDate: Date | null;
};

const DisplayEvent = ({ selectedDate }: DisplayEventProps) => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const formatDate = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const getStartOfWeek = (date: Dayjs) =>
    date.startOf("week").format("YYYY-MM-DD");
  const getEndOfWeek = (date: Dayjs) => date.endOf("week").format("YYYY-MM-DD");
  const getStartOfMonth = (date: Dayjs) =>
    date.startOf("month").format("YYYY-MM-DD");
  const getEndOfMonth = (date: Dayjs) =>
    date.endOf("month").format("YYYY-MM-DD");

  const fetchEventsForDate = (date: Date | null) => {
    if (!date) return [];
    const selectedDateString = formatDate(date);
    return eventsData.filter((event) => event.date === selectedDateString);
  };

  const fetchWeeklyEvents = (date: Date | null) => {
    if (!date) return [];
    const startOfWeek = getStartOfWeek(dayjs(date));
    const endOfWeek = getEndOfWeek(dayjs(date));
    return eventsData.filter(
      (event) => event.date >= startOfWeek && event.date <= endOfWeek
    );
  };

  const fetchMonthlyEvents = (date: Date | null) => {
    if (!date) return [];
    const startOfMonth = getStartOfMonth(dayjs(date));
    const endOfMonth = getEndOfMonth(dayjs(date));
    return eventsData.filter(
      (event) => event.date >= startOfMonth && event.date <= endOfMonth
    );
  };

  const events = fetchEventsForDate(selectedDate);
  const weeklyEvents = fetchWeeklyEvents(selectedDate);
  const monthlyEvents = fetchMonthlyEvents(selectedDate);

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
          sx={{ width: 290 }}
        >
          <Tab label="오늘의 이벤트" value="1" sx={{ width: 210 }} />
          <Tab label="주간 이벤트" value="2" sx={{ width: 210 }} />
          <Tab label="월간 이벤트" value="3" sx={{ width: 210 }} />
        </Tabs>
        <TabPanel
          value="1"
          sx={{ height: 120, overflowY: "scroll", padding: "10px" }}
        >
          {events.length > 0 ? (
            events.map((event, index) => (
              <ScheduleList
                key={index}
                groupname={event.groupname}
                eventname={event.eventname}
                eventtime={event.eventtime}
              />
            ))
          ) : (
            <Typography>선택된 날짜의 이벤트가 없습니다.</Typography>
          )}
        </TabPanel>
        <TabPanel value="2" sx={{ height: 120, overflowY: "scroll" }}>
          {weeklyEvents.length > 0 ? (
            weeklyEvents.map((event, index) => (
              <ScheduleList
                key={index}
                groupname={event.groupname}
                eventname={event.eventname}
                eventdate={event.date}
              />
            ))
          ) : (
            <Typography>주간 이벤트가 없습니다.</Typography>
          )}
        </TabPanel>
        <TabPanel value="3" sx={{ height: 120, overflowY: "scroll" }}>
          {monthlyEvents.length > 0 ? (
            monthlyEvents.map((event, index) => (
              <ScheduleList
                key={index}
                groupname={event.groupname}
                eventname={event.eventname}
                eventdate={event.date}
              />
            ))
          ) : (
            <Typography>월간 이벤트가 없습니다.</Typography>
          )}
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default DisplayEvent;
