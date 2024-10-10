import React from "react";
import { Box } from "@mui/material";
import { MONTHS } from "../Utilities";

const DayDateDisplay = ({ day = 1, date = 1, month = 1, year = 2000 }) => {
  return (
    <Box>
      {day}, {MONTHS[month]} {date}, {year}
    </Box>
  );
};

export default DayDateDisplay;
