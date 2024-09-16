import React from "react";
import Button from "@mui/material/Button";

const Day = ({ day }) => {
  return (
    <Button variant="contained" color="success" size="large">
      {day.num}
    </Button>
  );
};

export default Day;
