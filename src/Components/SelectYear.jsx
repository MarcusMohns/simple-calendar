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

const SelectYear = ({ selectedYear, setSelectedDate }) => {
  const handleChange = (event) => {
    setSelectedDate((oldDate) => ({ ...oldDate, year: event.target.value }));
  };

  const menuItems = [];

  for (let i = selectedYear - 100; i < selectedYear + 100; i++) {
    menuItems.push(
      <MenuItem value={i} key={i}>
        {i}
      </MenuItem>
    );
  }

  return (
    <FormControl fullWidth variant="filled">
      <InputLabel id="year-select-label">Year</InputLabel>
      <Select
        sx={{ maxHeight: "200px" }}
        id="year-select-label"
        label="Year"
        type="number"
        value={selectedYear}
        onChange={handleChange}
        MenuProps={{
          sx: {
            "& .MuiMenu-paper": {
              maxHeight: 500,
              backgroundColor: "dark.primary",
              color: "text.light",
            },
          },
        }}
      >
        {menuItems}
      </Select>
    </FormControl>
  );
};

export default SelectYear;
