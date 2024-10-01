import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";

const Appointment = ({ text, time, location }) => {
  console.log(time);
  return (
    <ListItem
      sx={{
        color: "white",
        padding: 1,
        margin: "10px 0",
        borderRadius: "2px",
        backgroundColor: "#00000021",
      }}
    >
      <ListItemText primary={time} secondary={time} />
      <ListItemText primary={text} secondary={location} />
      <ListItemAvatar>
        <Avatar>
          <ImageIcon />
        </Avatar>
      </ListItemAvatar>
    </ListItem>
  );
};

export default Appointment;
