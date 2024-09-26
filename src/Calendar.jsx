import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import { MONTHS } from "./Utilities";
import Month from "./Month";
import TextSection from "./TextSection";

const d = new Date();
const currDay = d.getDate();
const currMonth = d.getMonth();

const Calendar = () => {
  const [calendar, setCalendar] = useState(MONTHS);
  const [selectedMonthIdx, setSelectedMonthIdx] = useState(d.getMonth());
  const [selectedDay, setSelectedDay] = useState(
    calendar[selectedMonthIdx].days[currDay]
  );

  const handleHighlighted = (dayObj) => {
    const oldDays = [...calendar[selectedMonthIdx].days];
    const newDays = oldDays.map((day) =>
      day.num === dayObj.num && day.month === dayObj.month
        ? { ...day, highlighted: true }
        : { ...day, highlighted: false }
    );

    setCalendar((oldCalendar) =>
      oldCalendar.map((month) =>
        month.id === selectedMonthIdx ? { ...month, days: newDays } : month
      )
    );
    setSelectedDay(dayObj);
  };

  const saveText = (newText) => {
    const oldDaysOfMonth = [...calendar[selectedMonthIdx].days];
    const newDaysOfMonth = oldDaysOfMonth.map((day) => {
      if (day.num === selectedDay.num && day.month === selectedDay.month) {
        setSelectedDay({ ...day, text: newText });
        return { ...day, text: newText };
      } else {
        return day;
      }
    });

    setCalendar((oldCalendar) =>
      oldCalendar.map((oldMonth) =>
        oldMonth.id === selectedMonthIdx
          ? { ...oldMonth, days: newDaysOfMonth }
          : oldMonth
      )
    );

    localStorage.setItem(
      `${selectedDay.num}/${selectedDay.month}/${selectedDay.year}`,
      newText
    );
  };

  const nextMonth = () => {
    selectedMonthIdx < 11
      ? setSelectedMonthIdx((oldNum) => oldNum + 1)
      : // Generate new year using localStorage...
        setSelectedMonthIdx(0);
  };

  const previousMonth = () => {
    selectedMonthIdx > 0
      ? setSelectedMonthIdx((oldNum) => oldNum - 1)
      : setSelectedMonthIdx(11);
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
        month={calendar[selectedMonthIdx]}
        nextMonth={nextMonth}
        previousMonth={previousMonth}
        handleHighlighted={handleHighlighted}
        currDay={currDay}
        currMonth={currMonth}
      />
      <TextSection selectedDay={selectedDay} saveText={saveText} />
    </Box>
  );
};

export default Calendar;
