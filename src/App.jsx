import "./App.css";
import Calendar from "./Calendar";
import CssBaseline from "@mui/material/CssBaseline";
import Time from "./Time";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

function App() {
  return (
    <>
      <CssBaseline />
      <Time />
      <Calendar />
    </>
  );
}

export default App;
