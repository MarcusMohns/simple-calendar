import React from "react";
import Button from "@mui/material/Button";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";

const StyledBadge = styled(Badge)(() => ({
  "& .MuiBadge-badge": {
    right: 10,
    top: 10,
  },
}));

const Day = ({ day, handleSelected, isSelected, isToday }) => {
  return (
    <StyledBadge
      color="secondary"
      badgeContent={day.appointments.length}
      sx={{ width: "100%" }}
    >
      <Button
        variant="contained"
        onClick={() => handleSelected(day)}
        sx={{
          minWidth: { xs: "40px", lg: "56px" },
          minHeight: { lg: "58px" },
          width: "100%",
          background: "#2b2b2b",
          backgroundColor: isToday ? "#212121" : null,
          color: day.currentMonth ? "#fff" : "#999999",
          border: isSelected ? "5px solid #494949" : "5px solid transparent",
        }}
      >
        {day.num}
      </Button>
    </StyledBadge>
  );
};
export default Day;
