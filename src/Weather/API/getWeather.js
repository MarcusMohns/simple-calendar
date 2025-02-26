const getWeather = async (setWeather, location, setError, setLoading) => {
  const weatherstackApiKey = import.meta.env
    .VITE_REACT_APP_WEATHERSTACK_API_KEY;

  const url = `https://api.weatherstack.com/current?access_key=${weatherstackApiKey}&query=${location.latitude},${location.longitude}`;
  const options = {
    method: "GET",
  };
  try {
    const response = await fetch(url, options);
    const result = await response.text();
    setWeather(JSON.parse(result));
  } catch (error) {
    // Example API Error https://weatherstack.com/documentation
    //   code: 104,
    //   type: "usage_limit_reached",
    //   info: "Your monthly API request volume has been reached. Please upgrade your plan.",
    console.error("Error getting weather:", error);
    setError({ bool: true, message: error.type, code: error.code });
    setLoading(false);
  }
};

export default getWeather;
