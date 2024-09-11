import * as React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import dayjs, { Dayjs } from "dayjs";
import "dayjs/locale/ko";
import { styled } from "@mui/material/styles";

dayjs.locale("ko");

type CalendarProps = {
  onDateChange: (date: Date | null) => void;
};

const CustomDatePicker = styled(StaticDatePicker)(() => ({
  "& .MuiPickersToolbar-root": {
    display: "none",
  },
}));

const Calendar = ({ onDateChange }: CalendarProps) => {
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(null);
  const handleDateChange = (newValue: Dayjs | null) => {
    const date = newValue ? newValue.toDate() : null;
    setSelectedDate(date);
    onDateChange(date);
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ko">
      <CustomDatePicker
        defaultValue={selectedDate ? dayjs(selectedDate) : null}
        onChange={handleDateChange}
        sx={{
          width: 258,
          height: 300,
        }}
      />
    </LocalizationProvider>
  );
};

export default Calendar;
