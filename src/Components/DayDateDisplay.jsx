import React from "react";
import { Typography } from "@mui/material";
import { MONTHS } from "../Utilities";

const DayDateDisplay = ({ day = 1, date = 1, month = 1, year = 2000 }) => {
  return (
    <Typography
      component="div"
      variant="subtitle1"
      sx={{
        width: "100%",
        borderTop: "1px solid grey",
        pt: 3,
      }}
    >
      {day}, {MONTHS[month]} {date}, {year}
    </Typography>
  );
};

export default DayDateDisplay;
