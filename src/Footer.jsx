import React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const Footer = () => {
  return (
    <div>
      <Stack
        direction="row"
        sx={{
          width: "100%",
          mb: 2,
        }}
      >
        <Stack
          direction="row"
          sx={{
            alignItems: "center",
            justifyContent: "flex-start",
            width: "100%",
          }}
        >
          <Avatar sx={{ ml: "20px", mr: "10px" }}>M</Avatar>
          <Typography color="primary" variant="subtitle2">
            Created by Marcus M using MUI & React
          </Typography>
        </Stack>
      </Stack>
    </div>
  );
};

export default Footer;
