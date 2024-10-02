import React from "react";
import Appointment from "./Appointment";
import List from "@mui/material/List";

const Appointments = ({ appointments }) => {
  return (
    <List
      sx={{
        width: "50%",
        padding: 1,
        margin: 2,
        borderTop: "1px solid grey",
      }}
    >
      {appointments.map((appointment) => (
        <Appointment
          text={appointment.text}
          time={appointment.time}
          location={appointment.location}
        />
      ))}
    </List>
  );
};

export default Appointments;
