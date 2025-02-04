import { Skeleton, Stack } from "@mui/material";

export const TimeSkeleton = () => (
  <Stack
    spacing={2}
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "100%",
    }}
  >
    <Skeleton variant="rectangular" animation="wave" width={220} height={60} />
    <Skeleton variant="rectangular" animation="wave" width={250} height={25} />
  </Stack>
);

export default TimeSkeleton;
