import { React, useEffect, useState, Suspense } from "react";
import { WEEK } from "../Utilities";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import DayDateDisplay from "../Components/DayDateDisplay";

const Time = () => {
  const [time, setTime] = useState(new Date());

  // format minutes & seconds "01->09" instead of "1-9"
  const minutes = () =>
    time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
  const seconds = () =>
    time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds();

  useEffect(() => {
    // Every second update state with new Date();
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Typography variant="h2">
        {time.getHours()}:{minutes()}:{seconds()}
      </Typography>
      <Typography variant="subtitle1" component="div">
        <DayDateDisplay
          day={WEEK[time.getDay()]}
          date={time.getDate()}
          month={time.getMonth()}
          year={time.getFullYear()}
        />
      </Typography>
    </Box>
  );
};

export default Time;
