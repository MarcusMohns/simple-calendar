import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { memo } from "react";

const SelectYear = memo(function SelectYear({ selectedYear, setSelectedDate }) {
  const handleChange = (event) => {
    setSelectedDate((oldDate) => ({ ...oldDate, year: event.target.value }));
  };

  const menuItems = [];

  for (let i = selectedYear - 20; i <= selectedYear + 20; i++) {
    // Populate menuItems with options, 20 years in the future and 20 years in the past eg 2004->2044
    menuItems.push(
      <MenuItem value={i} key={i}>
        {i}
      </MenuItem>
    );
  }

  return (
    <FormControl fullWidth variant="standard" sx={{ width: "150px" }}>
      <InputLabel id="year-select-label">Year</InputLabel>
      <Select
        sx={{ fontSize: "2em" }}
        id="year-select"
        label="Year"
        type="number"
        value={selectedYear}
        onChange={handleChange}
        MenuProps={{
          sx: {
            "& .MuiMenu-paper": {
              maxHeight: 500,
              border: "1px solid grey",
            },
          },
        }}
      >
        {menuItems}
      </Select>
    </FormControl>
  );
});
export default SelectYear;
