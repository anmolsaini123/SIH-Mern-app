import fetch from "node-fetch";

export const reverseGeocode = async (lat, lon) => {
  const url = `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lon}&key=${process.env.OPENCAGE_KEY}`;
  const res = await fetch(url);
  const data = await res.json();

  if (data?.results?.length > 0) {
    return data.results[0].components.city || data.results[0].components.town || data.results[0].components.state;
  }
  return "Unknown Location";
};
