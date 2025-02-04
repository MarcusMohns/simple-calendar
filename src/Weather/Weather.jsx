import React, { useEffect, useState } from "react";
import getLocation from "./API/GetLocation";
import getTemperature from "./API/getTemperature";

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

  useEffect(() => {
    getLocation(setLocation);
  }, []);

  // useEffect(() => {
  //   getTemperature(setWeather);
  // }, [location]);

  return (
    <div>
      {weather.current.temperature} cold!
      {weather.current.weather_descriptions[0]} yees....
      <img
        // srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
        src={weather.current.weather_icons[0]}
        alt={weather.current.weather_descriptions[0]}
        loading="lazy"
      />
      {/* <button onClick={fetchTemperature}>Fetch Weather</button> */}
      {/* <button onClick={getLocation}>Location</button> */}
    </div>
  );
};

export default Weather;
