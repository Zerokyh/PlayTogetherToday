import * as React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { styled } from "@mui/material/styles";
import dayjs from "dayjs";
import "dayjs/locale/ko";

dayjs.locale("ko");

const StyledDateCalendar = styled(DateCalendar)(({ theme }) => ({
  "& .MuiPickersDay-root": {
    width: "37px",
    height: "37px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0",
    borderRadius: "50%",
  },
  "& .MuiDayCalendar-weekDayLabel": {
    // 요일 제목 스타일 조정
    fontSize: "0.875rem", // 폰트 크기를 조정
  },
  "& .Mui-selected": {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
}));

const Calendar = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StyledDateCalendar sx={{ width: 258, height: 300 }} />
    </LocalizationProvider>
  );
};

export default Calendar;
