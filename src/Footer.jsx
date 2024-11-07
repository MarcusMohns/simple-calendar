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
          <Avatar sx={{ mx: "20px" }}>M</Avatar>
          <Typography sx={{ color: "#666" }}>
            Created by Marcus Mohns
          </Typography>
        </Stack>
      </Stack>
    </div>
  );
};

export default Footer;
