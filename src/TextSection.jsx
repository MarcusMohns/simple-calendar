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

const TextSection = ({ selectedDay, saveAppointment }) => {
  const [text, setText] = useState("");
  const [time, setTime] = useState(dayjs());
  const [location, setLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    saveAppointment({ text: text, time: time, location: location });
    setText("");
    setLocation("");
  };

  const handleSetTime = (e) => {
    setTime(e);
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
      {/* Generate form state instead not selectedDay */}
      <Box>
        DISPLAY!{" "}
        {selectedDay.appointments.map((appointment) => (
          <div>
            {appointment.text} - {appointment.location}
          </div>
        ))}
      </Box>
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
            sx={{
              input: { color: "white" },
              svg: { color: "white" },
            }}
            value={time}
            name="time"
            onChange={handleSetTime}
            referenceDate={dayjs("2022-04-17")}
            viewRenderers={{
              hours: renderTimeViewClock,
              minutes: renderTimeViewClock,
            }}
          />
        </LocalizationProvider>
      </Stack>
      <Button variant="contained" sx={{ width: "25%" }} onClick={handleSubmit}>
        add
      </Button>
    </Box>
  );
};

export default TextSection;
