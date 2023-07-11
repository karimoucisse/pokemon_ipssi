import axios from 'axios';
export const getWeatherDatas = async (city, selectValue) => {
  try {
    const apiKey = '30eb99de3bb0dcf9430e1776bb6fcc98';
    let url =
      selectValue === 'celsius'
        ? `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        : `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
