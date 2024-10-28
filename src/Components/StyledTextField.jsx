import React from "react";
import TextField from "@mui/material/TextField";
import { FormControl } from "@mui/material";
import { Box } from "@mui/material";
import Zoom from "@mui/material/Zoom";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import PlaceIcon from "@mui/icons-material/Place";

import EventIcon from "@mui/icons-material/Event";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";

const ICONS = [
  <EventIcon />,
  <AirplanemodeActiveIcon />,
  <AccessAlarmIcon />,
  <FitnessCenterIcon />,
  <ShoppingCartIcon />,
  <BeachAccessIcon />,
];

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
          <InputLabel id="event-icon-select-label" sx={{ top: "12px" }}>
            Icon
          </InputLabel>
          <Select
            margin="none"
            id="event-icon-select"
            labelId="event-icon-select-label"
            value={textImage}
            onChange={handleChange}
            name="event-icon-select"
            variant="filled"
            size="small"
            sx={{
              display: "block",
            }}
          >
            {ICONS.map((icon, idx) => (
              <MenuItem value={idx} key={`${idx + icon}`}>
                {icon}
              </MenuItem>
            ))}
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
