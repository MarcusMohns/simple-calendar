import { createTheme } from "@mui/material/styles";

const dark = createTheme({
  fontSize: "16px",
  palette: {
    mode: "dark",
    background: {
      default: "#333333",
    },
    primary: {
      main: "#ffffff",
      faded: "#ffffff81",
    },
    secondary: {
      main: "#444444",
      light: "#6e6e6e",
      dark: "#2e2e2e",
      highlight: "#9c9c9ca0",
      faded1: "#ff4747",
    },
    success: {
      main: "#2e7d32",
      light: "#4caf50",
      dark: "#1c5334",
    },
    altSuccess: {
      main: "#2e7d32",
      light: "#4caf50",
      dark: "#1c5334",
    },
    error: {
      main: "#ca3634",
      light: "#e26d6b",
      dark: "#a12725",
    },
    altError: {
      main: "#e64949",
      light: "#d37f7d",
      dark: "#b63939",
    },

    info: {
      main: "#2b2b2b",
      light: "#8b8b8b",
      dark: "#1b1b1b",
      grey: "#2b2b2b",
    },
  },
});

const light = createTheme({
  fontSize: "16px",
  palette: {
    mode: "light",
    background: {
      default: "#f7f5ff",
    },
    primary: {
      default: "#000",
      main: "#000",
      faded: "#636363",
    },
    secondary: {
      main: "#ffc670",
      light: "#ffdaa2",
      dark: "#ffae35",
      highlight: "#fd8700",
    },
    success: {
      main: "#3B7AB0",
      light: "#5495ce",
      dark: "#2064a0",
    },
    altSuccess: {
      main: "#b5ff70",
      light: "#ffc670",
      dark: "#d69e49",
    },
    error: {
      main: "#c44c4a",
      light: "#e26d6b",
      dark: "#a12725",
    },
    altError: {
      main: "#c44c4a",
      light: "#e26d6b",
      dark: "#a12725",
    },

    info: {
      main: "#faddb2",
      light: "#ffebcd",
      dark: "#f7cc8b",
      grey: "#ffc670",
    },
  },
});

const themes = { dark, light };

export default themes;
