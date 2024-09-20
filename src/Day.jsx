import React from "react";
import Button from "@mui/material/Button";

const Day = ({ day, handleHighlighted, isToday }) => {
  return (
    <Button
      variant="contained"
      size="large"
      outline="red"
      onClick={() => handleHighlighted(day)}
      sx={{
        color: day.currentMonth ? "#fff" : "#bbbbbb",
        background: day.highlighted
          ? "#505153"
          : day.currentMonth
          ? "#36393e"
          : "#353636",
        backgroundColor: isToday ? "#202020" : null,

        "&:hover": {
          backgroundColor: isToday ? null : "#434446",
        },
        width: "100%",
      }}
    >
      {day.num}
    </Button>
  );
};
434446;
export default Day;
