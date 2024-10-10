import * as React from "react";
import { useState, Suspense, lazy } from "react";
import Box from "@mui/material/Box";
import { CalendarYear } from "./Utilities";
import TextSection from "./TextSection";

import DayDateDisplay from "./Components/DayDateDisplay";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";

const Appointments = lazy(() => import("./Appointments"));
const Month = lazy(() => import("./Month"));

const d = new Date();
const currDay = d.getDate();
const currMonth = d.getMonth();
const currYear = d.getFullYear();
const Calendar = () => {
  const [calendar, setCalendar] = useState(CalendarYear(currYear));
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

    const itemKey = `${selectedDay.num}/${selectedDay.month}/${selectedDay.year}`;
    const oldMemory = JSON.parse(localStorage.getItem(itemKey));
    const newMemory =
      oldMemory !== null ? [...oldMemory, newAppointment] : [newAppointment];

    localStorage.setItem(itemKey, JSON.stringify(newMemory));
  };

  const deleteAppointment = (id) => {
    // Create updated array without appointment with id.
    const newDaysOfMonth = oldDaysOfMonth.map((day) => {
      const newAppointments = day.appointments.filter(
        (appointment) => appointment.id !== id
      );
      // Update Selected Day
      if (day.num === selectedDay.num) {
        setSelectedDay({
          ...day,
          appointments: newAppointments,
        });
        return {
          ...day,
          appointments: newAppointments,
        };
      } else {
        return day;
      }
    });
    // Update Calendar
    setCalendar((oldCalendar) =>
      oldCalendar.map((oldMonth) =>
        oldMonth.id === selectedMonthIdx
          ? { ...oldMonth, days: newDaysOfMonth }
          : oldMonth
      )
    );

    // Update local storage
    const itemKey = `${selectedDay.num}/${selectedDay.month}/${selectedDay.year}`;
    const oldMemory = JSON.parse(localStorage.getItem(itemKey));
    const newMemory = oldMemory.filter((appointment) => appointment.id !== id);
    // Remove item from memory if newMemory is empty
    newMemory.length
      ? localStorage.setItem(itemKey, JSON.stringify(newMemory))
      : localStorage.removeItem(itemKey);
  };

  const nextMonth = () => {
    if (selectedMonthIdx < 11) {
      setSelectedMonthIdx((oldNum) => oldNum + 1);
      setCalendar(CalendarYear(2023));
    }
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
        m: 2,
      }}
    >
      <Suspense fallback={<CircularProgress color="success" />}>
        <Month
          month={calendar[selectedMonthIdx]}
          nextMonth={nextMonth}
          previousMonth={previousMonth}
          handleHighlighted={handleHighlighted}
          currDay={currDay}
          currMonth={currMonth}
        />
      </Suspense>
      <TextSection saveAppointment={saveAppointment} />
      <Typography
        variant="subtitle1"
        sx={{
          width: { xs: "100%", lg: "50%" },
          borderTop: "1px solid grey",
          pt: 3,
        }}
      >
        <DayDateDisplay
          day={selectedDay.day}
          date={selectedDay.num}
          month={selectedDay.month}
          year={selectedDay.year}
        />
      </Typography>
      <Suspense fallback={<CircularProgress color="success" />}>
        <Appointments
          appointments={selectedDay.appointments}
          deleteAppointment={deleteAppointment}
        />
      </Suspense>
    </Box>
  );
};

export default Calendar;
