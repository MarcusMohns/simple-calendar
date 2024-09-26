import React from "react";
import TextField from "@mui/material/TextField";
import { FormControl } from "@mui/material";
import { Box } from "@mui/material";

// Icons
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import SendIcon from "@mui/icons-material/Send";
import Zoom from "@mui/material/Zoom";

const StyledTextField = ({ handleSubmit, setText, text, label }) => {
  const SendTooltipIcon = () => (
    <Tooltip title="Send" placement="right" TransitionComponent={Zoom}>
      <IconButton
        sx={{ color: "white", cursor: "pointer" }}
        onClick={handleSubmit}
      >
        <SendIcon />
      </IconButton>
    </Tooltip>
  );
  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
      }}
    >
      <FormControl>
        <TextField
          id="outlined-basic"
          label={label}
          variant="filled"
          autoComplete="off"
          onChange={(e) => setText(e.target.value)}
          value={text}
          margin="normal"
          fullWidth
          color="white"
          sx={{
            margin: "0px",
            input: { color: "white" },
            label: { color: "#999" },
            button: { paddingRight: "0px" },
          }}
          slotProps={{
            input: {
              endAdornment: <SendTooltipIcon />,
            },
          }}
        />
      </FormControl>
    </Box>
  );
};

export default StyledTextField;
