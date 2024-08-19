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
    width: "29px",
    height: "29px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0",
    borderRadius: "50%",
  },
  "& .Mui-selected": {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
}));

const Calendar = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StyledDateCalendar sx={{ width: 208, height: 270 }} />
    </LocalizationProvider>
  );
};

export default Calendar;
