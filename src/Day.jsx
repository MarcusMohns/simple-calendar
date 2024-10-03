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
      color="primary"
      badgeContent={day.appointments.length}
      sx={{ width: "90%" }}
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
    </StyledBadge>
  );
};
export default Day;
