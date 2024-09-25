import React from "react";
import TextField from "@mui/material/TextField";
import { FormControl } from "@mui/material";
import { useState } from "react";

const TextSection = ({ selectedDay, saveText }) => {
  const [text, setText] = useState("");

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
        onChange={(e) => setText(e.target.value)}
        value={text}
        margin="normal"
        fullWidth
        color="white"
        sx={{
          input: { color: "white" },
          label: { color: "#999" },
        }}
      />
      {selectedDay.text}
      <button onClick={() => saveText(text)}> SAVE </button>
    </FormControl>
  );
};

export default TextSection;
