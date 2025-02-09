import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Zoom from "@mui/material/Zoom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
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
  const handleTextChange = (e) => {
    setText(e.target.value);
    error && setError(false);
  };

  const handleSelectChange = (e) => {
    setTextImage(e.target.value);
  };

  const SendTooltipIcon = () =>
    icon === "location" ? (
      <Tooltip title="Location" placement="right">
        <IconButton sx={{ cursor: "pointer" }}>
          <PlaceIcon />
        </IconButton>
      </Tooltip>
    ) : (
      <>
        <FormControl>
          <InputLabel id="event-icon-select-label" sx={{ mt: "2px" }}>
            Icon
          </InputLabel>
          <Select
            MenuProps={{
              disableScrollLock: true,
            }}
            label="Icon"
            margin="none"
            id="event-icon-select"
            labelId="event-icon-select-label"
            value={textImage}
            onChange={handleSelectChange}
            name="event-icon-select"
            variant="outlined"
            size="small"
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
          onChange={handleTextChange}
          value={text}
          sx={{
            button: { paddingRight: "0px" },
            width: "100%",
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
