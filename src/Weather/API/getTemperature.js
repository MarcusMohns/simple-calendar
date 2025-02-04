const getTemperature = async ({ setWeather }) => {
  const apiKey = "367d3745bcdf94c15724c9356956d5f3";
  const url = `https://api.weatherstack.com/current?access_key=${apiKey}&query=${location.latitude},${location.longitude}`;
  const options = {
    method: "GET",
  };
  try {
    const response = await fetch(url, options);
    const result = await response.text();
    setWeather(result);
  } catch (error) {
    console.error(error);
  }
};

export default getTemperature;
