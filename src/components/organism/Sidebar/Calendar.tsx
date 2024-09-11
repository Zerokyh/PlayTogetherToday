import * as React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";

import dayjs, { Dayjs } from "dayjs";
import "dayjs/locale/ko";

dayjs.locale("ko");

const Calendar = () => {
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(null);
  const handleDateChange = (newValue: Dayjs | null) => {
    setSelectedDate(newValue ? newValue.toDate() : null);
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ko">
      <StaticDatePicker
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
