import apiService from "../services/apiServices";

const url = `${import.meta.env.VITE_API_URL}/anime`;

const fetchAnimeByName = (name) => {
  return apiService.fetchByName(url, name);
};

const recommendAnime = (payload) => {
  return apiService.checkRecommendation(`${url}/rate`, payload);
};

export default {
  fetchAnimeByName,
  recommendAnime,
};
