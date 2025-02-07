import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import React from "react";

const WeatherSkeleton = () => {
  return (
    <Stack
      spacing={1}
      sx={{
        position: { lg: "absolute", xs: "static" },
        right: "20px",
        top: "110px",
        mb: { lg: 0, xs: 10 },
      }}
    >
      <Skeleton variant="rectangular" width={330} height={65} />
      <Skeleton variant="rectangular" width={330} height={209} />
    </Stack>
  );
};

export default WeatherSkeleton;
