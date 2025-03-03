import React, { useState } from "react";
import getLngLat from "./API/getLngLat";
import getWeather from "./API/fetchWeather";
import weatherCodeImages from "./API/weatherCodeImages";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import initialResponse from "./API/initialResponse";
import Accordion from "@mui/material/Accordion";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";

const Weather = () => {
  const [weather, setWeather] = useState(initialResponse);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ bool: false, message: "", code: 0 });

  const getWeatherByLocation = async () => {
    try {
      const lngLat = await getLngLat(setError, setLoading);
      getWeather(setWeather, lngLat, setError, setLoading);
    } catch (error) {
      console.error("Error retrieving location and weather data:", error);
      setError({ bool: true, message: error.message, code: error.code });
    }
  };
  return (
    <Accordion
      defaultExpanded
      disableGutters
      sx={{
        display: "flex",
        position: { lg: "absolute", xs: "static" },
        right: "20px",
        top: "110px",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "altSuccess.dark",
        width: "330px",
        mb: { lg: 0, xs: 10 },
        "& .MuiCollapse-root": {
          width: "100%",
        },
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="weather-panel-content"
        id="weather-panel-header"
        sx={{ width: "100%" }}
      >
        <Typography
          component="span"
          sx={{ width: "100px", textAlign: "center" }}
        >
          Weather 🌦️
        </Typography>
      </AccordionSummary>
      {error.bool ? (
        <Alert severity="error" variant="filled" sx={{ borderRadius: 0 }}>
          <Stack direction="column">
            {error.code
              ? `Error Code ${error.code}: ${error.message}`
              : `There was a problem getting the weather`}
            <Button
              onClick={getWeatherByLocation}
              loading={loading}
              color="altError"
              variant="contained"
              sx={{ mt: 2 }}
            >
              Retry
            </Button>
          </Stack>
        </Alert>
      ) : (
        <AccordionDetails
          sx={{
            display: "flex",
            flexDirection: "column",
            position: "relative",
            p: 2,
            px: 4,
            width: "100%",
          }}
        >
          <Typography variant="caption" sx={{ textAlign: "center" }}>
            {weather.location.name}, {weather.location.region},{" "}
            {weather.location.country} 🚩
          </Typography>
          <Box
            direction="row"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              p: 2,
              width: "100%",
            }}
          >
            <Stack
              direction="column"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography variant="caption" sx={{ fontSize: 33 }}>
                {weather.current.temperature}°C
              </Typography>
              <Box
                component="img"
                src={
                  weather.current.is_day === "yes"
                    ? weatherCodeImages[weather.current.weather_code].day
                    : weatherCodeImages[weather.current.weather_code].night
                }
                alt={weather.current.weather_descriptions[0]}
                loading="lazy"
                sx={{ height: "48px", width: "48px" }}
              />
              {weather.current.weather_descriptions[0]}
            </Stack>

            <Stack spacing={2}>
              <Typography sx={{ fontSize: "16px" }}>
                🙋‍♀️ Feels like: {weather.current.feelslike}°C
              </Typography>
              <Typography sx={{ fontSize: "16px" }}>
                💦 Humidity: {weather.current.humidity}%
              </Typography>
              <Typography sx={{ fontSize: "16px" }}>
                💨 Wind: {weather.current.wind_speed} km/h
              </Typography>
            </Stack>
          </Box>
          {weather.is_placeholder_data && (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                position: "absolute",
                top: 0,
                left: 0,
                height: "100%",
                width: "100%",
                backgroundColor: "#000000b6",
                zIndex: 1,
              }}
            >
              {loading ? (
                <CircularProgress color="inherit" fontSize={32} />
              ) : (
                <Button
                  onClick={getWeatherByLocation}
                  variant="contained"
                  color="success"
                >
                  Set location 🚩
                </Button>
              )}
            </Box>
          )}
        </AccordionDetails>
      )}
    </Accordion>
  );
};

export default Weather;
