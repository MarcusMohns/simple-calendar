import React from "react";
import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";

const TextSection = ({ currDay, selectedDay, handleTextChange, saveText }) => {
  return (
    <Box>
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        onChange={(e) => handleTextChange(e, selectedDay)}
        value={selectedDay.text}
      />
      {selectedDay.text}
      <button onClick={() => saveText(selectedDay)}> SAVE </button>
    </Box>
  );
};

export default TextSection;
