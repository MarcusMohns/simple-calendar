import * as React from "react";
import Box from "@mui/material/Box";
import Month from "./Month";
import { MONTHS } from "./Utilities";
import { arrayOfDays } from "./Utilities";
import { useState } from "react";

const d = new Date();
const currMonth = d.getMonth();
const currDay = d.getDate();

const Calendar = () => {
  const [month, setMonth] = useState(MONTHS[currMonth]);

  const rightArrowClick = () => {
    const monthNum = MONTHS.indexOf(month);
    if (monthNum < 11) {
      const nextMonthNum = monthNum + 1;
      setMonth(MONTHS[nextMonthNum]);
    } else {
      setMonth(MONTHS[0]);
    }
  };

  const leftArrowClick = () => {
    const monthNum = MONTHS.indexOf(month);
    if (monthNum > 0) {
      const nextMonthNum = monthNum - 1;
      setMonth(MONTHS[nextMonthNum]);
    } else {
      setMonth(MONTHS[11]);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        flexGrow: 1,
        // backgroundColor: "black",
      }}
    >
      <Month
        name={month.name}
        days={arrayOfDays(month)}
        key={month.name}
        rightArrowClick={rightArrowClick}
        leftArrowClick={leftArrowClick}
      />
    </Box>
  );
};

export default Calendar;
