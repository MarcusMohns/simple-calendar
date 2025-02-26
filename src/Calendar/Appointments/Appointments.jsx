import React from "react";
import { TransitionGroup } from "react-transition-group";
import Appointment from "./Components/Appointment";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import Collapse from "@mui/material/Collapse";

const Appointments = ({ appointments, deleteAppointment }) => {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "300px",
        padding: 1,
        margin: 2,
      }}
    >
      {appointments.length ? (
        <TransitionGroup
          component="ul"
          style={{ listStyle: "none inside none", paddingInlineStart: 0 }}
        >
          {appointments.map((appointment) => (
            <Collapse key={appointment.id} component="li">
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
    </Box>
  );
};

export default Appointments;
