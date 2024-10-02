import React from "react";
import Button from "@mui/material/Button";
import Badge from "@mui/material/Badge";

const Day = ({ day, handleHighlighted, isToday }) => {
  return (
    <Badge
      color="primary"
      badgeContent={day.appointments.length}
      overlap="circular"
    >
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
    </Badge>
  );
};
434446;
export default Day;
