import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import { MONTHS } from "./Utilities";
import Month from "./Month";
import TextSection from "./TextSection";

const d = new Date();
const currDay = d.getDate();

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
      oldCalendar.map((month) => {
        return month.id === selectedMonthIdx
          ? { ...month, days: newDays }
          : month;
      })
    );

    setSelectedDay(dayObj);
  };

  const saveText = (newText) => {
    const oldDay = { ...calendar[selectedMonthIdx].days[selectedDay.num - 1] };
    const newDay = { ...oldDay, text: newText };
    setCalendar((oldCalendar) => [
      ...oldCalendar,
      (oldCalendar[selectedMonthIdx].days[selectedDay.num - 1].text =
        newDay.text),
    ]);
  };

  const nextMonth = () => {
    selectedMonthIdx < 11
      ? setSelectedMonthIdx((oldNum) => oldNum + 1)
      : setSelectedMonthIdx(0);
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
      />
      <TextSection selectedDay={selectedDay} saveText={saveText} />
    </Box>
  );
};

export default Calendar;
