const url = `${import.meta.env.VITE_API_URL}/movies`;

const fetchMovies = (name) => {
  return fetchByName(url, name);
};

const recommendMovies = (payload) => {
  return checkRecommendation(`${url}/rate`, payload);
};

export default {
  fetchMovies,
  recommendMovies,
};
