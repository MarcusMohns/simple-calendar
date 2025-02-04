import React from "react";
import { Badge, Button } from "@mui/material";
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
      color="primary"
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
          color: day.currentMonth ? "primary" : "primary.faded",
          borderWidth: "5px",
          borderStyle: "solid",
          borderColor: isSelected ? "secondary.highlight" : "transparent",
        }}
        color={isToday ? "success" : day.currentMonth ? "secondary" : "info"}
      >
        {day.num}
      </Button>
    </StyledBadge>
  );
};
export default Day;

// af9e9e86
// 9c9c9ca0
