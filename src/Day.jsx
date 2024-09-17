import React from "react";
import Button from "@mui/material/Button";

const Day = ({ day, handleHighlited }) => {
  return (
    <Button
      variant="contained"
      color="success"
      size="large"
      outline="red"
      onClick={() => handleHighlited(day.num)}
      sx={{ border: day.highlighted ? "1px solid black" : "1px solid white" }}
    >
      {day.num}
    </Button>
  );
};

export default Day;
