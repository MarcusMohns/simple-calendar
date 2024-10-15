import React from "react";
import TextField from "@mui/material/TextField";
import { FormControl } from "@mui/material";
import { Box } from "@mui/material";
import Zoom from "@mui/material/Zoom";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

import SendIcon from "@mui/icons-material/Send";
import PlaceIcon from "@mui/icons-material/Place";
import EventIcon from "@mui/icons-material/Event";

const StyledTextField = ({
  setText,
  text,
  textImage,
  setTextImage,
  label,
  icon,
  error,
  setError,
}) => {
  const handleChange = (event) => {
    setTextImage(event.target.value);
  };

  const SendTooltipIcon = () =>
    icon === "location" ? (
      <Tooltip title="Location" placement="right" TransitionComponent={Zoom}>
        <IconButton sx={{ cursor: "pointer" }}>
          <PlaceIcon />
        </IconButton>
      </Tooltip>
    ) : (
      <>
        <FormControl>
          <Select
            id="simple-select"
            value={textImage}
            onChange={handleChange}
            variant="standard"
            sx={{ display: "block" }}
          >
            <MenuItem value={0}>
              <SendIcon />
            </MenuItem>
            <MenuItem value={1}>
              <PlaceIcon />
            </MenuItem>
            <MenuItem value={2}>
              <EventIcon />
            </MenuItem>
          </Select>
        </FormControl>
      </>
    );
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <FormControl sx={{ width: "100%" }}>
        <TextField
          error={error}
          id={`${label}`}
          label={label}
          variant="outlined"
          autoComplete="off"
          onChange={(e) => (setText(e.target.value), error && setError(false))}
          value={text}
          sx={{
            button: { paddingRight: "0px" },
            width: "100%",
            marginLeft: "5px",
          }}
          slotProps={{
            input: {
              endAdornment: <SendTooltipIcon />,
            },
          }}
          helperText={error ? "Required" : " "}
          noValidate
        />
      </FormControl>
    </Box>
  );
};

export default StyledTextField;
