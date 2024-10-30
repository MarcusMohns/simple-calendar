import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Day from "./Day";
import { DAYS } from "./Utilities";

const Month = ({
  month,
  selectedDay,
  handleSelected,
  currDay,
  currMonth,
  currYear,
}) => {
  return (
    <Box sx={{ flexGrow: 1, maxWidth: { xs: "100%", lg: "50%" } }}>
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
              handleSelected={handleSelected}
              isToday={
                day.num === currDay &&
                day.month === currMonth &&
                day.year === currYear
              }
              isSelected={
                day.num === selectedDay.num &&
                day.month === selectedDay.month &&
                day.year === selectedDay.year
              }
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Month;
