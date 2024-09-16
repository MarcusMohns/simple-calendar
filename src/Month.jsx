import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Day from "./Day";

const Month = ({ name, days }) => {
  return (
    <Box sx={{ flexGrow: 1, width: "30%", backgroundColor: "#31303060" }}>
      <h1>{name}</h1>
      <Grid container spacing={1} columns={7}>
        {days.map((day) => (
          <Grid size={1} key={`${name}-${day.num}`}>
            <Day day={day} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Month;
