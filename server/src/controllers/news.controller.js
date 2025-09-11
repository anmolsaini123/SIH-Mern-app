import { APIresp } from "../utils/APIresp.js";
import { Apierror } from "../utils/APIerror.js";
import { reverseGeocode } from "../utils/geoCode.js";
import { fetchCityNews } from "../utils/newsFetch.js";
const getNewsByLocation = async (req, res) => {
  try {
    const { lat, lon } = req.query;

        if (!lat || !lon) {
        throw new Apierror(400, "error in getting lat long  ");
    }
    const city = await reverseGeocode(lat, lon);

    const newsList = await fetchCityNews(city);

    return res
      .status(200)
      .json(
        new APIresp(200, { city, news: newsList }, "News fetched successfully")
      );
  } catch (err) {
    console.error(err);
    throw new Apierror(400, "error in news controllers  ");
  }
};
export { getNewsByLocation };
