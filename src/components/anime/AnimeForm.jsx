import { useState } from "react";
import AnimeSelect from "./AnimeSelect";
import AnimeList from "./AnimeList";
import AnimeButton from "./AnimeButton";

function AnimeForm({ setRecommendation }) {
  const [anime, setAnime] = useState([]);

  return (
    <>
      <AnimeSelect anime={anime} setAnime={setAnime} />
      <AnimeList anime={anime} />
      <AnimeButton anime={anime} setRecommendation={setRecommendation} />
    </>
  );
}

export default AnimeForm;
