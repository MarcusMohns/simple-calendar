import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Day from "./Day";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import { DAYS } from "./Utilities";
import SelectMonth from "./Components/SelectMonth";

const Month = ({
  month,
  nextMonth,
  previousMonth,
  selectedMonth,
  setSelectedDate,
  handleHighlighted,
  currDay,
  currMonth,
  currYear,
}) => {
  return (
    <Box sx={{ flexGrow: 1, maxWidth: { xs: "100%", lg: "50%" } }}>
      <SelectMonth
        selectedMonth={selectedMonth}
        setSelectedDate={setSelectedDate}
        month={month}
        nextMonth={nextMonth}
        previousMonth={previousMonth}
      />
      <Grid container spacing={1} columns={7}>
        {DAYS.map((day) => (
          <Grid size={1} key={day} sx={{ textAlign: "center" }}>
            {day.slice(0, 3)}
          </Grid>
        ))}

        {month.days.map((day) => (
          <Grid
            size={1}
            key={`${day.month}-${day.num}-${day.day}`}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Day
              day={day}
              handleHighlighted={handleHighlighted}
              isToday={
                day.num === currDay &&
                day.month === currMonth &&
                day.year === currYear
              }
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Month;
