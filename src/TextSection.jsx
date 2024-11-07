import React from "react";
import { useState } from "react";
import { Box } from "@mui/material";
import { Stack } from "@mui/material";
import StyledTextField from "./Components/StyledTextField";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers";
import { renderTimeViewClock } from "@mui/x-date-pickers/timeViewRenderers";
import Button from "@mui/material/Button";
import { v4 as uuidv4 } from "uuid";

const TextSection = ({ saveAppointment }) => {
  const [text, setText] = useState("");
  const [textImage, setTextImage] = useState(1);
  const [fromTime, setFromTime] = useState(dayjs());
  const [toTime, setToTime] = useState(dayjs());
  const [location, setLocation] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = () => {
    if (text.length) {
      saveAppointment({
        text: text,
        textImage: textImage,
        toTime: toTime.format("HH:mm"),
        fromTime: fromTime.format("HH:mm"),
        location: location,
        id: uuidv4(),
      });
      setText("");
      setLocation("");
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <Box
      sx={{
        component: "form",
        display: "flex",
        flexDirection: "column",
        width: { xs: "100%", lg: "50%" },
        m: 2,
        p: 2,
      }}
    >
      <StyledTextField
        text={text}
        setText={setText}
        textImage={textImage}
        setTextImage={setTextImage}
        icon=""
        label={"Add an event or reminder"}
        error={error}
        setError={setError}
      />
      <Stack
        spacing={{ xs: 1, md: 5 }}
        direction="row"
        sx={{ width: "100%", my: 1 }}
      >
        <StyledTextField
          text={location}
          setText={setLocation}
          icon="location"
          label={"Add a location"}
          error={false}
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
        sx={{ width: { xs: "100%", md: "50%", lg: "25%" } }}
        onClick={handleSubmit}
      >
        add
      </Button>
    </Box>
  );
};

export default TextSection;
