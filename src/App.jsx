import { Suspense, lazy } from "react";
import { CssBaseline, Box } from "@mui/material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Footer from "./Footer";
import { TimeSkeleton, CalendarSkeleton } from "./Components/Skeletons";

const Time = lazy(() => import("./Time"));
const Calendar = lazy(() => import("./Calendar"));
const ThemeSelectWrapper = lazy(() =>
  import("./Components/ThemeSelectWrapper")
);

const styles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  flexGrow: 1,
  m: 2,
};

function App() {
  return (
    <ThemeSelectWrapper>
      <CssBaseline />
      <Box sx={styles}>
        <Suspense fallback={<TimeSkeleton />}>
          <Time />
        </Suspense>
        <Suspense fallback={<CalendarSkeleton />}>
          <Calendar />
        </Suspense>
        <Footer />
      </Box>
    </ThemeSelectWrapper>
  );
}

export default App;
