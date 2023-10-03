import { useState } from "react";
import AnimeList from "../anime/AnimeList";
import ContentSelect from "./ContentSelect";
import MovieList from "../movies/MovieList";
import ContentButton from "./ContentButton";

function ContentForm({ setRecommendation, alignment }) {
  const [content, setContent] = useState([]);

  return (
    <>
      <ContentSelect
        content={content}
        setContent={setContent}
        alignment={alignment}
      />
      <div>
        {alignment === "anime" ? (
          <AnimeList content={content} />
        ) : (
          <MovieList content={content} />
        )}
      </div>

      <ContentButton
        content={content}
        setRecommendation={setRecommendation}
        alignment={alignment}
      />
    </>
  );
}

export default ContentForm;
