import React from "react";
import { Box } from "@mui/material";
import StyledTextField from "./Components/StyledTextField";
import dayjs, { Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers";
import { renderTimeViewClock } from "@mui/x-date-pickers/timeViewRenderers";

const TextSection = ({ selectedDay, saveText }) => {
  const [text, setText] = useState("");
  const [time, setTime] = useState(dayjs("2022-04-17T15:30"));

  const handleSubmit = (e) => {
    e.preventDefault();
    saveText(text);
    setText("");
  };

  return (
    <>
      <StyledTextField
        handleSubmit={handleSubmit}
        setText={setText}
        text={text}
        label={"Add an event or reminder"}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
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
        <StyledTextField
          handleSubmit={handleSubmit}
          setText={setText}
          text={text}
          label={"Add a location"}
        />
      </Box>
    </>
  );
};

export default TextSection;
