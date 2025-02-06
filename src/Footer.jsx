import React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        mb: 2,
        justifyContent: "flex-start",
      }}
    >
      <Stack
        direction="row"
        sx={{
          alignItems: "center",
        }}
      >
        <Avatar sx={{ ml: "20px", mr: "10px" }}>M</Avatar>
        <Typography color="primary" variant="subtitle2">
          Created by Marcus M using MUI & React
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
