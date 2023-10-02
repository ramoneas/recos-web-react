import { createContext, useContext, useMemo } from "react";

export const Context = createContext();

export const useGlobalState = () => {
  return useContext(Context);
};

export const GlobalProvider = ({ children }) => {
  const getAnimeByName = async (name) => {
    return fetch(`${import.meta.env.VITE_API_URL}/anime/${name}`).then((res) =>
      res.json()
    );
  };
  const postAnimeRating = async (payload) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/rate/anime`, {
      method: "POST",
      body: JSON.stringify(payload),
    });

    return await response.json();
  };

  const getMoviesByName = async (name) => {
    return fetch(`${import.meta.env.VITE_API_URL}/movies/${name}`).then((res) =>
      res.json()
    );
  };
  const postMoviesRating = async (payload) => {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/rate/movies`,
      {
        method: "POST",
        body: JSON.stringify(payload),
      }
    );

    return await response.json();
  };

  const obj = useMemo(
    () => ({
      postAnimeRating,
      getAnimeByName,
      getMoviesByName,
      postMoviesRating,
    }),
    []
  );

  return <Context.Provider value={obj}>{children}</Context.Provider>;
};
