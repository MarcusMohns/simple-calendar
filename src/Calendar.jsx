import * as React from "react";
import { useState, useEffect } from "react";
import { CalendarYear, verifyMonthAndYear } from "./Utilities";
import TextSection from "./TextSection";
import SelectMonth from "./Components/SelectMonth";
import SelectYear from "./Components/SelectYear";
import DayDateDisplay from "./Components/DayDateDisplay";
import { Stack, Typography } from "@mui/material";
import Month from "./Month";
import Appointments from "./Appointments";

const d = new Date();
const currDay = d.getDate();
const currMonth = d.getMonth();
const currYear = d.getFullYear();
const currCalendar = CalendarYear(currYear);

const Calendar = () => {
  const [calendar, setCalendar] = useState(currCalendar);

  // SelectedDate
  const [selectedDate, setSelectedDate] = useState({
    day: calendar[currMonth].days[currDay],
    month: currMonth,
    year: currYear,
  });

  // Make sure selectedDate is within 0-11 range for our DayDateDisplay
  const [verifiedMonth, verifiedYear] = verifyMonthAndYear(
    selectedDate.day.month,
    selectedDate.day.year
  );

  const handleSelected = (dayObj) => {
    setSelectedDate((oldDate) => ({ ...oldDate, day: dayObj }));
  };

  const saveAppointment = (newAppointment) => {
    setCalendar((oldCalendar) =>
      oldCalendar.map((oldMonth) =>
        // Check the selected day is part of the current month on screen or an adjacent one.
        oldMonth.id === verifyMonthAndYear(selectedDate.month + 1)[0] ||
        oldMonth.id === verifyMonthAndYear(selectedDate.month)[0] ||
        oldMonth.id === verifyMonthAndYear(selectedDate.month - 1)[0]
          ? {
              ...oldMonth,
              days: oldMonth.days.map((day) => {
                if (
                  // Find he correct day to modify
                  day.num === selectedDate.day.num &&
                  day.day === selectedDate.day.day &&
                  day.month === selectedDate.day.month // verified month? check
                ) {
                  // While we're here at the correct day update SelectDate state with the new day so we can show the new appointment without clicking again.
                  setSelectedDate({
                    ...selectedDate,
                    day: {
                      ...day,
                      appointments: [...day.appointments, newAppointment],
                    },
                  });

                  // Return the modified day to our oldMonth object with the new appointment
                  return {
                    ...day,
                    appointments: [...day.appointments, newAppointment],
                  };
                } else {
                  return day;
                }
              }),
            }
          : oldMonth
      )
    );

    // Save to localStorage
    const itemKey = `${selectedDate.day.num}/${verifiedMonth}/${verifiedYear}`;
    const oldMemory = JSON.parse(localStorage.getItem(itemKey));
    const newMemory =
      oldMemory !== null ? [...oldMemory, newAppointment] : [newAppointment];

    localStorage.setItem(itemKey, JSON.stringify(newMemory));
  };

  const deleteAppointment = (id) => {
    setCalendar((oldCalendar) =>
      oldCalendar.map((oldMonth) =>
        // Check the selected day is part of the current month on screen or an adjacent one.
        oldMonth.id === verifyMonthAndYear(selectedDate.month + 1)[0] ||
        oldMonth.id === verifyMonthAndYear(selectedDate.month)[0] ||
        oldMonth.id === verifyMonthAndYear(selectedDate.month - 1)[0]
          ? {
              ...oldMonth,
              days: oldMonth.days.map((day) => {
                if (
                  day.num === selectedDate.day.num &&
                  day.day === selectedDate.day.day &&
                  day.month === selectedDate.day.month
                ) {
                  const newAppointments = day.appointments.filter(
                    (appointment) => appointment.id !== id
                  );
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
              }),
            }
          : oldMonth
      )
    );

    // Update local storage
    const itemKey = `${selectedDate.day.num}/${verifiedMonth}/${verifiedYear}`;
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
      // If December add a year and set month to January
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
    // If selectedDate.day is part of one of the adjacent months and one of those months are selected, re-select that day in the new viewed month.
    selectedDate.month === verifiedMonth &&
      setSelectedDate((oldDate) => ({
        ...oldDate,
        days: calendar[verifiedMonth].days.map(
          (day) =>
            day.num === selectedDate.day.num &&
            day.day === selectedDate.day.day &&
            day.month === selectedDate.day.month &&
            day.year === selectedDate.day.year &&
            day
        ),
      }));
  }, [selectedDate.month]);

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
          mt: { xs: 4, lg: 2 },
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
      <Month
        month={calendar[selectedDate.month]}
        selectedDay={selectedDate.day}
        handleSelected={handleSelected}
        currDay={currDay}
        currMonth={currMonth}
        currYear={currYear}
      />
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
          month={verifiedMonth}
          year={verifiedYear}
        />
      </Typography>
      <Appointments
        appointments={selectedDate.day.appointments}
        deleteAppointment={deleteAppointment}
      />
    </>
  );
};

export default Calendar;
