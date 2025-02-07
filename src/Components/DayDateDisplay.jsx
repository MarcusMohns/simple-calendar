import React from "react";
import Box from "@mui/material/Box";
import { MONTHS } from "../Utilities";

const DayDateDisplay = ({ day = 1, date = 1, month = 1, year = 2000 }) => {
  return (
    <Box
      sx={{
        width: "100%",
        borderTop: "1px solid grey",
        pt: 3,
      }}
    >
      {day}, {MONTHS[month]} {date}, {year}
    </Box>
  );
};

export default DayDateDisplay;
