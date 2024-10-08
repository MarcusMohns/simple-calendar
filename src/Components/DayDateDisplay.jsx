import React from "react";
import { Box } from "@mui/material";
import { MONTHS } from "../Utilities";

const DayDateDisplay = ({ day, date, month, year }) => {
  return (
    <Box>
      {day}, {MONTHS[month].name} {date}, {year}
    </Box>
  );
};

export default DayDateDisplay;
