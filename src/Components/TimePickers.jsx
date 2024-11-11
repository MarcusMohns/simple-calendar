import React from "react";
import { Stack } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers";
import { renderTimeViewClock } from "@mui/x-date-pickers/timeViewRenderers";
import dayjs from "dayjs";
import { memo } from "react";

const TimePickers = memo(function TimePickers({
  fromTime,
  setFromTime,
  toTime,
  setToTime,
}) {
  return (
    <Stack
      spacing={{ xs: 1, md: 2 }}
      direction="row"
      sx={{ marginBottom: "23px", ml: { xs: 0, sm: 2 } }}
    >
      <LocalizationProvider dateAdapter={AdapterDayjs} name="time">
        <TimePicker
          label="From"
          value={fromTime}
          name="time"
          onChange={(e) => setFromTime(e)}
          referenceDate={dayjs("2022-04-17")}
          viewRenderers={{
            hours: renderTimeViewClock,
            minutes: renderTimeViewClock,
          }}
          ampm={false}
        />
        <TimePicker
          label="To"
          value={toTime}
          name="time"
          onChange={(e) => setToTime(e)}
          referenceDate={dayjs("2022-04-17")}
          viewRenderers={{
            hours: renderTimeViewClock,
            minutes: renderTimeViewClock,
          }}
          ampm={false}
        />
      </LocalizationProvider>
    </Stack>
  );
});

export default TimePickers;
