import CssBaseline from "@mui/material/CssBaseline";
import { Suspense, lazy } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Footer from "./Footer";

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
        <Suspense fallback={<CircularProgress color="secondary" />}>
          <Time />
        </Suspense>
        <Suspense fallback={<CircularProgress color="secondary" />}>
          <Calendar />
        </Suspense>
      </Box>
      <Footer />
    </ThemeSelectWrapper>
  );
}

export default App;
