import * as React from "react";
import Box from "@mui/material/Box";
import Month from "./Month";
import { months } from "./Utilities";
import { arrayOfDays } from "./Utilities";

const Calendar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        flexGrow: 1,
        backgroundColor: "black",
      }}
    >
      {months.map((month) => (
        <Month name={month.name} days={arrayOfDays(month)} key={month.name} />
      ))}
    </Box>
  );
};

export default Calendar;
