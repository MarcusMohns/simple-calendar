import React, { useEffect, useState } from "react";
import getLocation from "./API/GetLocation";
import getWeather from "./API/getWeather";
import weatherCodeGifs from "./API/weatherCodeGifs";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

const Weather = () => {
  const [location, setLocation] = useState(null);
  const [weather, setWeather] = useState({
    request: {
      type: "LatLon",
      query: "Lat 59.48 and Lon 17.90",
      language: "en",
      unit: "m",
    },
    location: {
      name: "Upplands-Vasby",
      country: "Sweden",
      region: "Stockholms Lan",
      lat: "59.517",
      lon: "17.900",
      timezone_id: "Europe/Stockholm",
      localtime: "2025-02-04 16:40",
      localtime_epoch: 1738687200,
      utc_offset: "1.0",
    },
    current: {
      observation_time: "03:40 PM",
      temperature: 2,
      weather_code: 122,
      weather_icons: [
        "https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0004_black_low_cloud.png",
      ],
      weather_descriptions: ["Overcast"],
      wind_speed: 12,
      wind_degree: 192,
      wind_dir: "SSW",
      pressure: 1021,
      precip: 0,
      humidity: 87,
      cloudcover: 100,
      feelslike: -1,
      uv_index: 0,
      visibility: 9,
      is_day: "no",
    },
  });

  const getAndSetLocation = () => {
    getLocation(setLocation);
  };

  useEffect(() => {
    if (location) {
      // getWeather(setWeather,location);
      console.log("getWeather is run!");
    }
  }, [location]);

  return (
    <Accordion
      defaultExpanded
      sx={{
        position: { lg: "absolute", xs: "static" },
        right: "20px",
        top: "110px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "greenSuccess.dark",
        boxShadow: 10,
        width: "330px",
        mb: { lg: 0, xs: 10 },
        p: 2,
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
      <AccordionDetails sx={{ display: "flex", flexDirection: "column" }}>
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
            direction={"column"}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography variant="caption" sx={{ fontSize: 33 }}>
              {weather.current.temperature}°C
            </Typography>
            <img
              src={weatherCodeGifs[weather.current.weather_code]}
              alt={weather.current.weather_descriptions[0]}
              loading="lazy"
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
        {/* <Typography variant="caption">https://icons8.com/icons</Typography> */}
      </AccordionDetails>
    </Accordion>
  );
};

export default Weather;
