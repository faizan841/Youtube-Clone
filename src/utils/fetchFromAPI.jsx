import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  url: BASE_URL,
  params: {
    part: "snippet",
    videoId: "M7FIvfx5J10",
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": "59025e94d3mshd49e1dd34dfcf52p1fc215jsn8c92313378f9",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
