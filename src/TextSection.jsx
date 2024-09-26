import React from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import { FormControl } from "@mui/material";
import { Box } from "@mui/material";

// Icons
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import SendIcon from "@mui/icons-material/Send";
import Zoom from "@mui/material/Zoom";

// Time
import dayjs, { Dayjs } from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimeClock } from "@mui/x-date-pickers/TimeClock";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DigitalClock } from "@mui/x-date-pickers";
import { MultiSectionDigitalClock } from "@mui/x-date-pickers";
import { TimePicker } from "@mui/x-date-pickers";
import { renderTimeViewClock } from "@mui/x-date-pickers/timeViewRenderers";
import { StaticTimePicker } from "@mui/x-date-pickers";

const TextSection = ({ selectedDay, saveText }) => {
  const [text, setText] = useState("");
  const [time, setTime] = useState(dayjs("2022-04-17T15:30"));

  const handleSubmit = (e) => {
    e.preventDefault();
    saveText(text);
    setText("");
  };

  const SendTooltipIcon = () => (
    <Tooltip
      title="Send"
      placement="right"
      TransitionComponent={Zoom}
      sx={{ height: "200px" }}
    >
      <IconButton
        sx={{ color: "white", cursor: "pointer" }}
        onClick={handleSubmit}
      >
        <SendIcon />
      </IconButton>
    </Tooltip>
  );

  return (
    <>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <FormControl
          sx={{
            padding: "2em",
            width: "50%",
            color: "white",
          }}
        >
          <TextField
            id="outlined-basic"
            label="Add an event or reminder"
            variant="filled"
            autoComplete="off"
            onChange={(e) => setText(e.target.value)}
            value={text}
            margin="normal"
            fullWidth
            color="white"
            sx={{
              input: { color: "white", paddingRight: "0px" },
              label: { color: "#999" },
              button: { paddingRight: "0px" },
            }}
            slotProps={{
              input: {
                endAdornment: <SendTooltipIcon />,
              },
            }}
          />
          {selectedDay.text}
        </FormControl>
      </Box>
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
    </>
  );
};

export default TextSection;
