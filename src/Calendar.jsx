import * as React from "react";
import { useState, useEffect, Suspense, lazy } from "react";
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
const currCalendar = CalendarYear(currYear);

const Calendar = () => {
  const [calendar, setCalendar] = useState(currCalendar);
  const [selectedDate, setSelectedDate] = useState({
    day: calendar[currMonth].days[currDay],
    month: currMonth,
    year: currYear,
  });

  const oldDaysOfMonth = [...calendar[selectedDate.month].days];

  const handleHighlighted = (dayObj) => {
    const newDaysOfMonth = oldDaysOfMonth.map((day) =>
      day.num === dayObj.num && day.month === dayObj.month
        ? { ...day, highlighted: true }
        : { ...day, highlighted: false }
    );

    setCalendar((oldCalendar) =>
      oldCalendar.map((month) =>
        month.id === selectedDate.month
          ? { ...month, days: newDaysOfMonth }
          : month
      )
    );
    setSelectedDate({
      ...selectedDate,
      day: dayObj,
    });
  };

  const saveAppointment = (newAppointment) => {
    const newDaysOfMonth = oldDaysOfMonth.map((day) => {
      if (
        day.num === selectedDate.day.num &&
        day.month === selectedDate.month
      ) {
        setSelectedDate({
          ...selectedDate,
          day: { ...day, appointments: [...day.appointments, newAppointment] },
        });
        return { ...day, appointments: [...day.appointments, newAppointment] };
      } else {
        return day;
      }
    });
    setCalendar((oldCalendar) =>
      oldCalendar.map((oldMonth) =>
        oldMonth.id === selectedDate.month
          ? { ...oldMonth, days: newDaysOfMonth }
          : oldMonth
      )
    );

    const itemKey = `${selectedDate.day.num}/${selectedDate.month}/${selectedDate.year}`;
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
      if (day.num === selectedDate.day.num) {
        setSelectedDate({
          ...selectedDate,
          day: { ...day, appointments: newAppointments },
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
        oldMonth.id === selectedDate.month
          ? { ...oldMonth, days: newDaysOfMonth }
          : oldMonth
      )
    );

    // Update local storage
    const itemKey = `${selectedDate.day.num}/${selectedDate.month}/${selectedDate.year}`;
    const oldMemory = JSON.parse(localStorage.getItem(itemKey));
    const newMemory = oldMemory.filter((appointment) => appointment.id !== id);
    // Remove item from memory if newMemory is empty
    newMemory.length
      ? localStorage.setItem(itemKey, JSON.stringify(newMemory))
      : localStorage.removeItem(itemKey);
  };

  const nextMonth = () => {
    if (selectedDate.month < 11) {
      setSelectedDate({ ...selectedDate, month: selectedDate.month + 1 });
    } else {
      setSelectedDate({
        ...selectedDate,
        month: 0,
        year: selectedDate.year + 1,
      });
    }
  };

  const previousMonth = () => {
    if (selectedDate.month > 0) {
      setSelectedDate({ ...selectedDate, month: selectedDate.month - 1 });
    } else {
      setSelectedDate({
        ...selectedDate,
        month: 11,
        year: selectedDate.year - 1,
      });
    }
  };

  useEffect(() => {
    setCalendar(CalendarYear(selectedDate.year));
  }, [selectedDate.year]);

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
          month={calendar[selectedDate.month]}
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
          day={selectedDate.day.day}
          date={selectedDate.day.num}
          month={selectedDate.day.month}
          year={selectedDate.day.year}
        />
      </Typography>
      <Suspense fallback={<CircularProgress color="success" />}>
        <Appointments
          appointments={selectedDate.day.appointments}
          deleteAppointment={deleteAppointment}
        />
      </Suspense>
    </Box>
  );
};

export default Calendar;
