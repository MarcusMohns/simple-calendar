import React from "react";
import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";

const TextSection = ({ currDay, selectedDay }) => {
  return (
    <Box>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      {selectedDay.text}
    </Box>
  );
};

export default TextSection;
