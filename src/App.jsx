import "./App.css";
import Calendar from "./Calendar";
import CssBaseline from "@mui/material/CssBaseline";
import { Box } from "@mui/material";
import Time from "./Time";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const GlobalStyles = {
  backgroundColor: "#36393e",
  color: "#fff",
  minHeight: "100vh",
};

function App() {
  return (
    <Box sx={GlobalStyles}>
      <CssBaseline />
      <Time />
      <Calendar />
    </Box>
  );
}

export default App;
