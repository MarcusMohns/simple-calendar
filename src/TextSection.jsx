import React from "react";
import { useState } from "react";
import { Box } from "@mui/material";
import { Stack } from "@mui/material";
import StyledTextField from "./Components/StyledTextField";
import dayjs, { Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers";
import { renderTimeViewClock } from "@mui/x-date-pickers/timeViewRenderers";
import Button from "@mui/material/Button";
import { v4 as uuidv4 } from "uuid";

const TextSection = ({ saveAppointment }) => {
  const [text, setText] = useState("");
  const [fromTime, setFromTime] = useState(dayjs());
  const [toTime, setToTime] = useState(dayjs());
  const [location, setLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    saveAppointment({
      text: text,
      toTime: toTime.format("HH:MM"),
      fromTime: fromTime.format("HH:MM"),
      location: location,
      id: uuidv4(),
    });
    setText("");
    setLocation("");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "52%",
        m: 2,
        p: 2,
      }}
    >
      <StyledTextField
        handleSubmit={handleSubmit}
        setText={setText}
        text={text}
        icon=""
        label={"Add an event or reminder"}
      />
      <Stack spacing={5} direction="row" sx={{ width: "100%", my: 2 }}>
        <StyledTextField
          handleSubmit={handleSubmit}
          setText={setLocation}
          text={location}
          icon="location"
          label={"Add a location"}
        />
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
      <Button
        variant="contained"
        color="secondary"
        sx={{ width: "25%" }}
        onClick={handleSubmit}
      >
        add
      </Button>
    </Box>
  );
};

export default TextSection;
