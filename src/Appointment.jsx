import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import SendIcon from "@mui/icons-material/Send";
import PlaceIcon from "@mui/icons-material/Place";
import EventIcon from "@mui/icons-material/Event";

const ICONS = [<SendIcon />, <PlaceIcon />, <EventIcon />];

const Appointment = ({
  text,
  textImage,
  fromTime,
  toTime,
  location,
  id,
  deleteAppointment,
}) => {
  // Icons
  const StyledDeleteIcon = (
    <Tooltip title="Delete" placement="right">
      <IconButton
        edge="end"
        aria-label="delete"
        onClick={() => deleteAppointment(id)}
      >
        <DeleteIcon color="error" />
      </IconButton>
    </Tooltip>
  );
  const StyledListItemAvatar = (
    <ListItemAvatar>
      <Avatar>{ICONS[textImage]}</Avatar>
    </ListItemAvatar>
  );

  return (
    <ListItem
      sx={{
        padding: 1,
        mt: 1,
        borderRadius: "2px",
        backgroundColor: "#00000021",
      }}
      secondaryAction={StyledDeleteIcon}
    >
      {StyledListItemAvatar}
      <ListItemText primary={fromTime} secondary={toTime} />
      <ListItemText primary={text} secondary={location} />
    </ListItem>
  );
};

export default Appointment;
