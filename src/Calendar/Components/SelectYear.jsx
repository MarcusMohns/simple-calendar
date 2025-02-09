import { React, memo } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const SelectYear = memo(function Greeting({ selectedYear, setSelectedDate }) {
  const handleChange = (event) => {
    setSelectedDate((oldDate) => ({ ...oldDate, year: event.target.value }));
  };

  const menuItems = [];
  for (let i = selectedYear - 20; i <= selectedYear + 20; i++) {
    // Populate menuItems with select menu options, 20 years in the future and 20 years in the past from selectedYear
    menuItems.push(
      <MenuItem value={i} key={i}>
        {i}
      </MenuItem>
    );
  }

  return (
    <FormControl
      fullWidth
      variant="standard"
      sx={{ width: { xs: "150px", md: "200px" } }}
    >
      <InputLabel id="year-select-label">Year</InputLabel>
      <Select
        sx={{ fontSize: "2em" }}
        labelId="year-select-label"
        id="year-select"
        name="year-select"
        className="year-select"
        label="Year"
        value={selectedYear}
        onChange={handleChange}
        MenuProps={{
          disableScrollLock: true,
          sx: {
            "& .MuiMenu-paper": {
              maxHeight: 500,
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
