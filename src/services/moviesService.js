import apiService from "../services/apiServices";

const url = `${import.meta.env.VITE_API_URL}/movies`;

const fetchMoviesByName = (name) => {
  return apiService.fetchByName(url, name);
};

const recommendMovies = (payload) => {
  return apiService.checkRecommendation(`${url}/rate`, payload);
};

export default {
  fetchMoviesByName,
  recommendMovies,
};
