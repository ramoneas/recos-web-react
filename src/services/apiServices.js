const fetchByName = async (url, name) => {
  return fetch(`${url}/${name}`).then((res) => res.json());
};

const checkRecommendation = async (url, payload) => {
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(payload),
  });

  return await response.json();
};

export default {
  fetchByName,
  checkRecommendation,
};
