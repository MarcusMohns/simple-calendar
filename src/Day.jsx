import React from "react";
import Button from "@mui/material/Button";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: 10,
    top: 10,
  },
}));

const Day = ({ day, handleHighlighted, isToday }) => {
  return (
    <StyledBadge
      color="secondary"
      badgeContent={day.appointments.length}
      sx={{ width: "100%" }}
    >
      <Button
        variant="contained"
        size="large"
        outline="red"
        onClick={() => handleHighlighted(day)}
        sx={{
          background: day.highlighted ? "#212121" : "#2b2b2b",
          backgroundColor: isToday ? "#505050" : null,
          opacity: day.currentMonth ? 1 : 0.5,
          width: "100%",
          color: day.currentMonth ? "#fff" : "#999999",
          border: day.highlighted
            ? "5px solid #494949"
            : "5px solid transparent",
        }}
      >
        {day.num}
      </Button>
    </StyledBadge>
  );
};
export default Day;
