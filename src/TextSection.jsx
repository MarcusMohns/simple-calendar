import React from "react";
import TextField from "@mui/material/TextField";
import { FormControl } from "@mui/material";

// add own text input useState maybe so entire app doenst rerender 1k tiems

const TextSection = ({ currDay, selectedDay, handleTextChange, saveText }) => {
  return (
    <FormControl
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2em",
        width: "50%",
        color: "white",
      }}
    >
      <TextField
        id="outlined-basic"
        label="Add an event or reminder"
        variant="filled"
        onChange={(e) => handleTextChange(e, selectedDay)}
        value={selectedDay.text}
        margin="normal"
        fullWidth
        color="white"
        sx={{
          input: { color: "white" },
          label: { color: "#999" },
        }}
      />
      {selectedDay.text}
      <button onClick={() => saveText(selectedDay)}> SAVE </button>
    </FormControl>
  );
};

export default TextSection;
