import * as React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import dayjs, { Dayjs } from "dayjs";
import "dayjs/locale/ko";
import { styled } from "@mui/material/styles";
import { margin, width } from "@mui/system";

dayjs.locale("ko");

type CalendarProps = {
  onDateChange: (date: Date | null) => void;
};

const CustomDatePicker = styled(StaticDatePicker)(() => ({
  "& .MuiPickersToolbar-root": {
    display: "none",
  },
  "& .MuiDateCalendar-root": {
    width: 300,
    margin: 0,
  },
}));

const Calendar = ({ onDateChange }: CalendarProps) => {
  const today = dayjs().toDate();
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(null);

  const handleDateChange = (newValue: Dayjs | null) => {
    const date = newValue ? newValue.toDate() : null;
    setSelectedDate(date);
    onDateChange(date);
  };

  // 컴포넌트가 처음 렌더링될 때 오늘 날짜를 설정
  React.useEffect(() => {
    if (!selectedDate) {
      setSelectedDate(today);
      onDateChange(today);
    }
  }, [onDateChange, selectedDate, today]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ko">
      <CustomDatePicker
        value={selectedDate ? dayjs(selectedDate) : null} // 선택된 날짜를 표시
        onChange={handleDateChange}
        sx={{
          width: 300,
          height: 300,
        }}
      />
    </LocalizationProvider>
  );
};

export default Calendar;
