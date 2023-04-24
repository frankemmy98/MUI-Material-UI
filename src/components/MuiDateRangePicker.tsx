import { useState } from "react";
import { Box } from "@mui/material";
import { DateRange, DateRangePicker } from "@mui/x-date-pickers-pro";

const MuiDateRangePicker = () => {
  const [value, setValue] = useState<DateRange<Date>>([null, null]);
  console.log({ value });

  return (
    <Box width="500px">
      <DateRangePicker
        localeText={{
          start: "Check-in",
          end: "Check-out",
        }}
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        componentsProps={{ textField: {}, fieldSeparator: { children: "to" } }}
      />
    </Box>
  );
};

export default MuiDateRangePicker;
