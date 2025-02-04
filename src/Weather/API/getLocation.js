export const getLocation = async (setLocation) => {
  // TODO make this function only run after a user has given permission  to access their location
  const getLatLon = (position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    setLocation({ latitude: lat, longitude: lon });
  };
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  }).then(getLatLon);
};

export default getLocation;
