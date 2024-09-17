import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Day from "./Day";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";

const Month = ({ month, rightArrowClick, leftArrowClick, handleHighlited }) => {
  return (
    <Box sx={{ flexGrow: 1, width: "30%", backgroundColor: "#31303060" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "2em",
        }}
      >
        <ArrowLeftIcon onClick={leftArrowClick} />
        {month.name} <ArrowRightIcon onClick={rightArrowClick} />
      </Box>
      <Grid container spacing={1} columns={7}>
        {month.days.map((day) => (
          <Grid size={1} key={`${month.name}-${day.num}`}>
            <Day day={day} handleHighlited={handleHighlited} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Month;
