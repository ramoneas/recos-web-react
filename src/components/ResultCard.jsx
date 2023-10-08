import AnimeCard from "./anime/AnimeCard";
import MovieCard from "./movies/MovieCard";

function ResultCard({ recommendation, alignment }) {
  if (!recommendation.length) return;

  return (
    <div className="pt-2">
      <h4 className="text-1xl font-bold pb-2">Must Watch:</h4>
      {recommendation.map((re) =>
        alignment === "anime" ? (
          <AnimeCard anime={re} key={re.MAL_ID} />
        ) : (
          <MovieCard movie={re} key={re.movieId} />
        )
      )}
    </div>
  );
}

export default ResultCard;
