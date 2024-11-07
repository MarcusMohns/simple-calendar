import React from "react";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const Footer = () => {
  return (
    <div>
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        sx={{
          justifyContent: "space-evenly",
          alignItems: "center",
          width: "100%",
          pb: 2,
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
          <Typography color="info">
            Created by Marcus M using MUI & React
          </Typography>
        </Stack>
      </Stack>
    </div>
  );
};

export default Footer;
