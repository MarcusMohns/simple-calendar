import React from "react";
import { TransitionGroup } from "react-transition-group";
import Appointment from "./Components/Appointment";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Collapse from "@mui/material/Collapse";

const Appointments = ({ appointments, deleteAppointment }) => {
  return (
    <List
      sx={{
        width: "100%",
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
