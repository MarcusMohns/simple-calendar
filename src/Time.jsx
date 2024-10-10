import React from "react";
import Typography from "@mui/material/Typography";
import { DAYS } from "./Utilities";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import DayDateDisplay from "./Components/DayDateDisplay";

const Time = () => {
  const [time, setTime] = useState(new Date());

  const year = time.getFullYear();
  const month = time.getMonth();
  const date = time.getDate();
  const day = DAYS[time.getDay() - 1];
  const hours = time.getHours();
  const minutes = () =>
    time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
  const seconds = () =>
    time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds();

  useEffect(() => {
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
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Typography variant="h2">
        {hours}:{minutes()}:{seconds()}
      </Typography>
      <Typography variant="subtitle1">
        <DayDateDisplay day={day} date={date} month={month} year={year} />
      </Typography>
    </Box>
  );
};

export default Time;
