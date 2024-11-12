import React from "react";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import { MONTHS } from "../Utilities";
import { Box, InputLabel, MenuItem, FormControl, Select } from "@mui/material";

const SelectMonth = ({
  nextMonth,
  previousMonth,
  selectedMonth,
  setSelectedDate,
}) => {
  const handleChange = (event) => {
    setSelectedDate((oldDate) => ({ ...oldDate, month: event.target.value }));
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "2em",
        textAlign: "center",
      }}
    >
      <ArrowLeftIcon
        onClick={previousMonth}
        fontSize="large"
        sx={{ cursor: "pointer", marginTop: "15px" }}
      />
      <FormControl
        fullWidth
        variant="standard"
        sx={{
          textAlign: "center",
          width: { xs: "150px", md: "200px" },
        }}
      >
        <InputLabel id="month-select-label">Month</InputLabel>
        <Select
          sx={{ fontSize: "1em" }}
          labelId="month-select-label"
          value={selectedMonth}
          label="Month"
          onChange={handleChange}
        >
          {MONTHS.map((month, idx) => (
            <MenuItem key={month} value={idx}>
              {month}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <ArrowRightIcon
        onClick={nextMonth}
        fontSize="large"
        sx={{ cursor: "pointer", marginTop: "15px" }}
      />
    </Box>
  );
};

export default SelectMonth;
