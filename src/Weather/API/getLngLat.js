const getLngLat = async (setError, setLoading) => {
  setLoading(true);

  const options = {
    enableHighAccuracy: false,
    timeout: 5000,
    maximumAge: 0,
  };

  await new Promise((resolve) => setTimeout(resolve, 3000));
  const position = await new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      resolve,
      (error) => {
        console.error("Error getting location:", error);
        setError({ bool: true, message: error.message, code: error.code });
        setLoading(false);
      },
      options
    );
  });

  setError({ bool: false, message: "", code: 0 });
  setLoading(false);

  return {
    latitude: position.coords.latitude,
    longitude: position.coords.longitude,
  };
};

export default getLngLat;
