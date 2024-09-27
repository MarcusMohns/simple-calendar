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

const TextSection = ({ selectedDay, saveText }) => {
  const [text, setText] = useState("");
  const [time, setTime] = useState(dayjs("2022-04-17T12:00"));
  const [location, setLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    saveText(text);
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
      <Box>
        DISPLAY! {text} - {time.hour()} : {time.minute()}
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
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <TimePicker
            sx={{
              input: { color: "white" },
              svg: { color: "white" },
            }}
            value={time}
            onChange={setTime}
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
