const initialResponse = {
  request: {
    type: "LatLon",
    query: "Lat 59.48 and Lon 17.90",
    language: "en",
    unit: "m",
  },
  location: {
    name: "Unknown",
    country: "Unknown",
    region: "Unknown",
    lat: "59.517",
    lon: "27.900",
    timezone_id: "Europe/Stockholm",
    localtime: "2025-02-04 16:40",
    localtime_epoch: 1738687200,
    utc_offset: "1.0",
  },
  current: {
    observation_time: "03:40 PM",
    temperature: 0,
    weather_code: 113,
    weather_icons: [
      "https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0004_black_low_cloud.png",
    ],
    weather_descriptions: ["Sunny"],
    wind_speed: 0,
    wind_degree: 192,
    wind_dir: "SSW",
    pressure: 1021,
    precip: 0,
    humidity: 0,
    cloudcover: 100,
    feelslike: 0,
    uv_index: 0,
    visibility: 9,
    is_day: "no",
  },
};

export default initialResponse;
