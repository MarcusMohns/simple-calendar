import React from "react";
import Badge from "@mui/material/Badge";
import Button from "@mui/material/Button";

const Day = ({ day, handleSelected, isSelected, isToday }) => {
  return (
    <Badge
      color="primary"
      badgeContent={day.appointments.length}
      sx={{
        width: "100%",
        "& .MuiBadge-badge": {
          right: 10,
          top: { xs: 5, sm: 10 },
        },
      }}
    >
      <Button
        variant="contained"
        onClick={() => handleSelected(day)}
        sx={{
          minWidth: { xs: "40px", lg: "56px" },
          minHeight: { lg: "58px" },
          width: "100%",
          color: day.currentMonth ? "primary" : "primary.faded",
          borderWidth: "5px",
          borderStyle: "solid",
          borderColor: isSelected ? "secondary.highlight" : "transparent",
          borderRadius: "0px",
        }}
        color={isToday ? "success" : day.currentMonth ? "secondary" : "info"}
      >
        {day.num}
      </Button>
    </Badge>
  );
};
export default Day;

// af9e9e86
// 9c9c9ca0
