import { Suspense, lazy } from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Footer from "./Footer";
import ThemeSelectWrapper from "./Components/ThemeSelectWrapper";
import TimeSkeleton from "./Time/Components/TimeSkeleton";
import CalendarSkeleton from "./Calendar/Components/CalendarSkeleton";
import WeatherSkeleton from "./Weather/API/Components/WeatherSkeleton";

const Weather = lazy(() => import("./Weather/Weather"));
const Time = lazy(() => import("./Time/Time"));
const Calendar = lazy(() => import("./Calendar/Calendar"));

const styles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  flexGrow: 1,
  m: { xs: 1, s: 2 },
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
        <Suspense fallback={<WeatherSkeleton />}>
          <Weather />
        </Suspense>
        <Footer />
      </Box>
    </ThemeSelectWrapper>
  );
}

export default App;
