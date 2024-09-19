import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Day from "./Day";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import { Divider } from "@mui/material";

const Month = ({
  month,
  nextMonth,
  previousMonth,
  handleHighlighted,
  currDay,
}) => {
  return (
    <Box sx={{ flexGrow: 1, maxWidth: "50%" }}>
      <Divider sx={{ borderColor: "#8f8f8f" }} />

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "2em",
        }}
      >
        <ArrowLeftIcon
          onClick={previousMonth}
          fontSize="large"
          sx={{ cursor: "pointer" }}
        />
        <Box sx={{ width: "200px", textAlign: "center" }}>{month.name}</Box>
        <ArrowRightIcon
          onClick={nextMonth}
          fontSize="large"
          sx={{ cursor: "pointer" }}
        />
      </Box>
      <Grid container spacing={1} columns={7}>
        {month.days.map((day) => (
          <Grid size={1} key={`${month.name}-${day.num}`}>
            <Day
              day={day}
              handleHighlighted={handleHighlighted}
              isToday={day.num === currDay}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Month;
