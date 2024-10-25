import * as React from "react";
import { useState, useEffect, Suspense, lazy } from "react";
import Box from "@mui/material/Box";
import { CalendarYear } from "./Utilities";
import TextSection from "./TextSection";
import SelectMonth from "./Components/SelectMonth";
import SelectYear from "./Components/SelectYear";
import DayDateDisplay from "./Components/DayDateDisplay";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import Stack from "@mui/material/Stack";

const Month = lazy(() => import("./Month"));
const Appointments = lazy(() => import("./Appointments"));

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

  const currDaysOfMonth = [...calendar[selectedDate.month].days];

  const handleHighlighted = (dayObj) => {
    // Create new array where clicked dayObj has highlighted:true
    const newDaysOfMonth = currDaysOfMonth.map((day) =>
      day.num === dayObj.num && day.month === dayObj.month
        ? { ...day, highlighted: true }
        : { ...day, highlighted: false }
    );
    // Find month in state and set it to newDaysOfMonth
    setCalendar((oldCalendar) =>
      oldCalendar.map((month) =>
        month.id === selectedDate.month
          ? { ...month, days: newDaysOfMonth }
          : month
      )
    );
    // set selectedDate.day state to dayObj
    setSelectedDate((oldDate) => ({ ...oldDate, day: dayObj }));
  };

  const saveAppointment = (newAppointment) => {
    const newDaysOfMonth = currDaysOfMonth.map((day) => {
      // Create new array with the newAppointment added to the correct day
      if (
        // If the current day in interation corresponds with the selected(highlighted) day
        day.num === selectedDate.day.num &&
        day.month === selectedDate.month
      ) {
        // Update selectedDate.day state with newAppointment appended
        setSelectedDate({
          ...selectedDate,
          day: { ...day, appointments: [...day.appointments, newAppointment] },
        });
        return { ...day, appointments: [...day.appointments, newAppointment] };
      } else {
        return day;
      }
    });
    // Find month and update month.days to newDaysofMonth
    setCalendar((oldCalendar) =>
      oldCalendar.map((oldMonth) =>
        oldMonth.id === selectedDate.month
          ? { ...oldMonth, days: newDaysOfMonth }
          : oldMonth
      )
    );

    // Update localStorage
    const itemKey = `${selectedDate.day.num}/${selectedDate.month}/${selectedDate.year}`;
    const oldMemory = JSON.parse(localStorage.getItem(itemKey));
    const newMemory =
      oldMemory !== null ? [...oldMemory, newAppointment] : [newAppointment];

    localStorage.setItem(itemKey, JSON.stringify(newMemory));
  };

  const deleteAppointment = (id) => {
    // Create updated array without appointment with id.
    const newDaysOfMonth = currDaysOfMonth.map((day) => {
      const newAppointments = day.appointments.filter(
        (appointment) => appointment.id !== id
      );
      // set selectedDate.day.appointments state to newAppointments
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
    // Find month and update month.days to newDaysofMonth
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
    // If less than December add a month
    if (selectedDate.month < 11) {
      setSelectedDate({ ...selectedDate, month: selectedDate.month + 1 });
    } else {
      // If December add a year and set to January
      setSelectedDate({
        ...selectedDate,
        month: 0,
        year: selectedDate.year + 1,
      });
    }
  };

  const previousMonth = () => {
    // If more than January subtract a month
    if (selectedDate.month > 0) {
      setSelectedDate({ ...selectedDate, month: selectedDate.month - 1 });
    } else {
      // If January subtract a year and set to December
      setSelectedDate({
        ...selectedDate,
        month: 11,
        year: selectedDate.year - 1,
      });
    }
  };

  useEffect(() => {
    // Generate new CalendarYear when selectedDate.year is changed
    setCalendar(CalendarYear(selectedDate.year));
  }, [selectedDate.year]);

  return (
    <>
      <Stack
        direction="row"
        spacing={2}
        sx={{
          mb: 4,
          width: { xs: "100%", lg: "50%" },
          justifyContent: "space-between",
        }}
      >
        <SelectMonth
          selectedMonth={selectedDate.month}
          setSelectedDate={setSelectedDate}
          month={calendar[selectedDate.month]}
          nextMonth={nextMonth}
          previousMonth={previousMonth}
        />
        <SelectYear
          selectedYear={selectedDate.year}
          setSelectedDate={setSelectedDate}
        />
      </Stack>
      <Suspense fallback={<CircularProgress color="secondary" />}>
        <Month
          month={calendar[selectedDate.month]}
          selectedMonth={selectedDate.month}
          setSelectedDate={setSelectedDate}
          nextMonth={nextMonth}
          previousMonth={previousMonth}
          handleHighlighted={handleHighlighted}
          currDay={currDay}
          currMonth={currMonth}
          currYear={currYear}
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
      <Suspense fallback={<CircularProgress color="secondary" />}>
        <Appointments
          appointments={selectedDate.day.appointments}
          deleteAppointment={deleteAppointment}
        />
      </Suspense>
    </>
  );
};

export default Calendar;
