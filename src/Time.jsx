import React from "react";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { MONTHS, DAYS } from "./Utilities";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";

const Time = () => {
  const [time, setTime] = useState(new Date());

  const year = time.getFullYear();
  const month = time.getMonth();
  const day = time.getDate();
  const weekDay = time.getDay();
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Box>
      <Typography variant="h2">
        {hours}:{minutes}:{seconds}
        <Divider variant="outset" />
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        {DAYS[weekDay]} the {day} of {MONTHS[month].name}
      </Typography>
    </Box>
  );
};

export default Time;
