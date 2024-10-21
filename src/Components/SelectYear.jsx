import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid2";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import { MONTHS } from "../Utilities";

const SelectYear = ({
  month,
  nextMonth,
  previousMonth,
  selectedYear,
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
        minWidth: "250px",
        textAlign: "center",
      }}
    >
      <FormControl fullWidth>
        <TextField
          id="outlined-read-only-input"
          label="Year"
          defaultValue={selectedYear}
          value={selectedYear}
          type="number"
          slotProps={{
            input: {
              readOnly: true,
            },
          }}
        />
      </FormControl>
    </Box>
  );
};

export default SelectYear;
