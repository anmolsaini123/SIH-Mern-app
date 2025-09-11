import fetch from "node-fetch";

export const fetchCityNews = async (city) => {
  const url = `https://newsdata.io/api/1/news?apikey=${process.env.NEWSDATA_KEY}&q=${city}&language=en`;
  const res = await fetch(url);
  const data = await res.json();

  // Filter relevant disaster/safety keywords
  const keywords = ["landslide", "flood", "earthquake", "accident", "storm"];
  return data?.results?.filter(n =>
    keywords.some(k => n.title.toLowerCase().includes(k))
  ) || [];
};
