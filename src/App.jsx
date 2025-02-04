import { Suspense, lazy } from "react";
import { CssBaseline, Box } from "@mui/material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Footer from "./Footer";
import ThemeSelectWrapper from "./Components/ThemeSelectWrapper";
import TimeSkeleton from "./Time/Components/TimeSkeleton";
import CalendarSkeleton from "./Calendar/Components/CalendarSkeleton";
import Weather from "./Weather/Weather";

const Time = lazy(() => import("./Time/Time"));
const Calendar = lazy(() => import("./Calendar/Calendar"));

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
        <Weather />
        <Footer />
      </Box>
    </ThemeSelectWrapper>
  );
}

export default App;
