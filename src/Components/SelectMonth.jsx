import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid2";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import { MONTHS } from "../Utilities";

const SelectMonth = ({
  month,
  nextMonth,
  previousMonth,
  selectedMonth,
  setSelectedDate,
  handleHighlighted,
  currDay,
  currMonth,
  currYear,
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
      }}
    >
      <ArrowLeftIcon
        onClick={previousMonth}
        fontSize="large"
        sx={{ cursor: "pointer" }}
      />
      <Box
        sx={{
          minWidth: "250px",
          textAlign: "center",
        }}
      >
        <FormControl fullWidth variant="filled">
          <InputLabel id="month-select-label">Month</InputLabel>
          <Select
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
      </Box>
      <ArrowRightIcon
        onClick={nextMonth}
        fontSize="large"
        sx={{ cursor: "pointer" }}
      />
    </Box>
  );
};

export default SelectMonth;
