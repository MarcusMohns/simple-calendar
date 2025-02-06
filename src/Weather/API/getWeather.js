const getWeather = async (setWeather, location, setError, setLoading) => {
  console.log("shouldnt be running");
  const apiKey = "367d3745bcdf94c15724c9356956d5f3";
  const url = `https://api.weatherstack.com/current?access_key=${apiKey}&query=${location.latitude},${location.longitude}`;
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
