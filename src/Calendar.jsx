import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import { MONTHS } from "./Utilities";
import Month from "./Month";
import TextSection from "./TextSection";

const d = new Date();
const currMonth = d.getMonth();
const currDay = d.getDate();

const Calendar = () => {
  const [calendar, setCalendar] = useState(MONTHS);
  const [month, setMonth] = useState(calendar[currMonth]);
  const [selectedDay, setSelectedDay] = useState("");

  const handleHighlighted = (num) => {
    const newDays = month.days.map((day) => {
      if (day.num === num) {
        setSelectedDay(day);
        return { ...day, highlighted: true };
      } else return { ...day, highlighted: false };
    });
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
      }}
    >
      <Month
        month={month}
        rightArrowClick={rightArrowClick}
        leftArrowClick={leftArrowClick}
        handleHighlighted={handleHighlighted}
        currDay={currDay}
      />
      <TextSection currDay={currDay} selectedDay={selectedDay} />
    </Box>
  );
};

export default Calendar;
