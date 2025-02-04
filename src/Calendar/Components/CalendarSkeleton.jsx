import React from "react";
import { Skeleton, Box, Stack } from "@mui/material";

export const CalendarSkeleton = () => (
  <Box sx={{ width: { xs: "100%", lg: "50%" }, mb: 5 }}>
    <Stack
      direction="row"
      spacing={2}
      sx={{
        mb: 4,
        mt: { xs: 4, lg: 2 },
        justifyContent: "space-between",
      }}
    >
      <Skeleton variant="rounded" animation="wave" height={55} width={270} />
      <Skeleton variant="rounded" animation="wave" height={55} width={200} />
    </Stack>
    <Skeleton variant="text" animation="wave" height={24} width={"100%"} />
    <Skeleton variant="rounded" animation="wave" height={354} width={"100%"} />
    <Stack spacing={2} sx={{ my: 4 }}>
      <Skeleton
        variant="rectangle"
        animation="wave"
        height={70}
        width={"100%"}
      />
      <Skeleton
        variant="rectangle"
        animation="wave"
        height={70}
        width={"100%"}
      />
    </Stack>
    <Skeleton
      variant="rounded"
      animation="wave"
      height={35}
      sx={{ width: { xs: "100%", md: "50%", lg: "25%" } }}
    />
    <Stack
      sx={{
        width: "100%",
        borderTop: "1px solid grey",
        mt: 3,
        direction: "col",
      }}
    >
      <Skeleton
        variant="rectangle"
        animation="wave"
        height={30}
        width={"20%"}
        sx={{ mt: "2%" }}
      />
      <Skeleton
        variant="rectangle"
        animation="wave"
        height={20}
        width={"20%"}
        sx={{ ml: "3%", mt: "2%" }}
      />
    </Stack>
  </Box>
);

export default CalendarSkeleton;
