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
        background: day.highlighted ? "#505153" : "inherit",
        backgroundColor: isToday ? "#212121" : null,
        opacity: day.currentMonth ? 1 : 0.5,
        width: "100%",
      }}
    >
      {day.num}
    </Button>
  );
};
434446;
export default Day;
