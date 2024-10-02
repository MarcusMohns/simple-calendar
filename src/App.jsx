import "./App.css";
import Calendar from "./Calendar";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Box } from "@mui/material";
import Time from "./Time";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const themeOptions = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#616161",
    },
    secondary: {
      main: "#f50057",
    },
    background: {
      default: "#333333",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={themeOptions}>
      <CssBaseline />
      <Time />
      <Calendar />
    </ThemeProvider>
  );
}

export default App;
