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
        onClick={() => handleHighlighted(day)}
        sx={{
          minWidth: { xs: "40px", lg: "56px" },
          minHeight: { lg: "58px" },
          width: "100%",
          background: day.highlighted ? "#212121" : "#2b2b2b",
          backgroundColor: isToday ? "#505050" : null,
          opacity: day.currentMonth ? 1 : 0.5,
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
