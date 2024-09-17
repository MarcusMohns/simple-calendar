import * as React from "react";
import Box from "@mui/material/Box";
import Month from "./Month";
import { MONTHS } from "./Utilities";
import { useState } from "react";
import { arrayOfDays } from "./Utilities";

const d = new Date();
const currMonth = d.getMonth();
const currDay = d.getDate();

const Calendar = () => {
  const [month, setMonth] = useState(MONTHS[currMonth]);

  const handleHighlited = (num) => {
    const newDays = month.days.map((day) =>
      day.num === num
        ? { ...day, highlighted: true }
        : { ...day, highlighted: false }
    );
    setMonth((oldMonth) => ({ ...oldMonth, days: newDays }));
  };

  const rightArrowClick = () => {
    if (month.id < 11) {
      const nextMonthNum = month.id + 1;
      setMonth(MONTHS[nextMonthNum]);
    } else {
      setMonth(MONTHS[0]);
    }
  };

  const leftArrowClick = () => {
    if (month.id > 0) {
      const nextMonthNum = month.id - 1;
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
        month={month}
        rightArrowClick={rightArrowClick}
        leftArrowClick={leftArrowClick}
        handleHighlited={handleHighlited}
      />
    </Box>
  );
};

export default Calendar;
