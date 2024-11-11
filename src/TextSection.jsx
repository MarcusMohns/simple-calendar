import React from "react";
import { useState } from "react";
import { Box, Stack } from "@mui/material";
import StyledTextField from "./Components/StyledTextField";
import dayjs from "dayjs";
import Button from "@mui/material/Button";
import { v4 as uuidv4 } from "uuid";
import TimePickers from "./Components/TimePickers";

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
        sx={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: { xs: "col", sm: "row" },
        }}
      >
        <StyledTextField
          text={location}
          setText={setLocation}
          icon="location"
          label={"Add a location"}
          error={false}
        />
        <TimePickers
          fromTime={fromTime}
          setFromTime={setFromTime}
          toTime={toTime}
          setToTime={setToTime}
        />
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
