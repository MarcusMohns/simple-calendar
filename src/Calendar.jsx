import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import { MONTHS } from "./Utilities";
import Month from "./Month";
import TextSection from "./TextSection";
import Appointments from "./Appointments";

const d = new Date();
const currDay = d.getDate();
const currMonth = d.getMonth();

const Calendar = () => {
  const [calendar, setCalendar] = useState(MONTHS);
  const [selectedMonthIdx, setSelectedMonthIdx] = useState(d.getMonth());
  const [selectedDay, setSelectedDay] = useState(
    calendar[selectedMonthIdx].days[currDay]
  );

  const oldDaysOfMonth = [...calendar[selectedMonthIdx].days];

  const handleHighlighted = (dayObj) => {
    const newDaysOfMonth = oldDaysOfMonth.map((day) =>
      day.num === dayObj.num && day.month === dayObj.month
        ? { ...day, highlighted: true }
        : { ...day, highlighted: false }
    );

    setCalendar((oldCalendar) =>
      oldCalendar.map((month) =>
        month.id === selectedMonthIdx
          ? { ...month, days: newDaysOfMonth }
          : month
      )
    );
    setSelectedDay(dayObj);
  };

  const saveAppointment = (newAppointment) => {
    const newDaysOfMonth = oldDaysOfMonth.map((day) => {
      if (day.num === selectedDay.num && day.month === selectedDay.month) {
        setSelectedDay({
          ...day,
          appointments: [...day.appointments, newAppointment],
        });
        return { ...day, appointments: [...day.appointments, newAppointment] };
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

    const storageKey = `${selectedDay.num}/${selectedDay.month}/${selectedDay.year}`;

    const localMemory = [JSON.parse(localStorage.getItem(storageKey))]; // needs to be array
    console.log(localMemory);
    const updatedMemory = [...localMemory, newAppointment]; // for this to work

    localStorage.setItem(storageKey, JSON.stringify(updatedMemory));
  };

  const deleteAppointment = (id) => {
    const newDaysOfMonth = oldDaysOfMonth.map((day) => {
      if (day.num === selectedDay.num) {
        setSelectedDay({
          ...day,
          appointments: day.appointments.filter(
            (appointment) => appointment.id !== id
          ),
        });
        return {
          ...day,
          appointments: day.appointments.filter(
            (appointment) => appointment.id !== id
          ),
        };
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
      <TextSection saveAppointment={saveAppointment} />
      <Appointments
        appointments={selectedDay.appointments}
        deleteAppointment={deleteAppointment}
      />
    </Box>
  );
};

export default Calendar;
