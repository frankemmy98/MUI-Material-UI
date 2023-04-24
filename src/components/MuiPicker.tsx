import { useState } from "react";
import { DatePicker, TimePicker, DateTimePicker } from "@mui/x-date-pickers";
// import DatePicker from "@mui/lab/DatePicker";
import { Stack } from "@mui/material";

const MuiPicker = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<Date | null>(null);
  const [selectedDateTime, setSelectedDateTime] = useState<Date | null>(null);
  console.log({
    selectedDateTime,
  });

  return (
    <Stack spacing={4} sx={{ width: "250px" }}>
      <DatePicker
        label="Date Picker"
        componentsProps={{ textField: {} }}
        value={selectedDate}
        onChange={(newValue) => {
          setSelectedDate(newValue);
        }}
      />
      <TimePicker
        label="Time Picker"
        componentsProps={{ textField: {} }}
        value={selectedTime}
        onChange={(newValue) => {
          setSelectedTime(newValue);
        }}
      />
      <DateTimePicker
        label="Date Time Picker"
        componentsProps={{ textField: {} }}
        value={selectedDateTime}
        onChange={(newValue) => {
          setSelectedDateTime(newValue);
        }}
      />
    </Stack>
  );
};

export default MuiPicker;
