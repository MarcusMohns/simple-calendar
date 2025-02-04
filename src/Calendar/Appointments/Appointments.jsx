import React from "react";
import { TransitionGroup } from "react-transition-group";
import { List, ListItem, Collapse } from "@mui/material";
import Appointment from "./Components/Appointment";

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
      {appointments.length ? (
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
      ) : (
        <ListItem>No appointments or events</ListItem>
      )}
    </List>
  );
};

export default Appointments;
