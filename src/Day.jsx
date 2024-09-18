import React from "react";
import Button from "@mui/material/Button";

const Day = ({ day, handleHighlited }) => {
  return (
    <Button
      variant="contained"
      size="large"
      outline="red"
      onClick={() => handleHighlited(day.num)}
      sx={{
        background: "#36393e",
        border: day.highlighted ? "1px solid black" : "1px solid transparent",
        "&:hover": {
          background: "#36393e",
        },
        width: "100%",
      }}
    >
      {day.num}
    </Button>
  );
};

export default Day;
