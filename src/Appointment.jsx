import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import { Stack } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";

const Appointment = ({
  text,
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
      <Avatar>
        <ImageIcon />
      </Avatar>
    </ListItemAvatar>
  );

  return (
    <ListItem
      sx={{
        padding: 1,
        margin: "10px 0",
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
