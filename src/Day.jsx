import React from "react";
import Button from "@mui/material/Button";

const Day = ({ day, handleHighlited, isToday }) => {
  return (
    <Button
      variant="contained"
      size="large"
      outline="red"
      onClick={() => handleHighlited(day.num)}
      sx={{
        background: day.highlighted ? "#434446" : "#36393e",
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

export default Day;
