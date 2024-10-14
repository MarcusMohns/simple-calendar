import React from "react";
import Appointment from "./Appointment";
import List from "@mui/material/List";
import Collapse from "@mui/material/Collapse";
import { TransitionGroup } from "react-transition-group";

const Appointments = ({ appointments, deleteAppointment }) => {
  return (
    <List
      sx={{
        width: { xs: "100%", lg: "50%" },
        minHeight: "300px",
        padding: 1,
        margin: 2,
      }}
    >
      <TransitionGroup>
        {appointments.map((appointment) => (
          <Collapse key={appointment.id}>
            <Appointment
              text={appointment.text}
              textImage={appointment.textImage}
              fromTime={appointment.fromTime}
              toTime={appointment.toTime}
              location={appointment.location}
              deleteAppointment={deleteAppointment}
              id={appointment.id}
            />
          </Collapse>
        ))}
      </TransitionGroup>
    </List>
  );
};

export default Appointments;
