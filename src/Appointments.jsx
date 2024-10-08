import React from "react";
import Appointment from "./Appointment";
import List from "@mui/material/List";

const Appointments = ({ appointments, deleteAppointment }) => {
  return (
    <List
      sx={{
        width: "50%",
        padding: 1,
        margin: 2,
      }}
    >
      {appointments.length ? (
        appointments.map((appointment) => (
          <Appointment
            text={appointment.text}
            fromTime={appointment.fromTime}
            toTime={appointment.toTime}
            location={appointment.location}
            deleteAppointment={deleteAppointment}
            id={appointment.id}
            key={appointment.id}
          />
        ))
      ) : (
        <div>No events or appointments</div>
      )}
    </List>
  );
};

export default Appointments;
