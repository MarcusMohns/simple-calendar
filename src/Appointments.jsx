import React from "react";
import Appointment from "./Appointment";
import List from "@mui/material/List";

const Appointments = ({ appointments, deleteAppointment }) => {
  return (
    <List
      sx={{
        width: { xs: "100%", lg: "50%" },
        padding: 1,
        margin: 2,
      }}
    >
      {appointments.length ? (
        appointments.map((appointment) => (
          <Appointment
            text={appointment.text}
            textImage={appointment.textImage}
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
