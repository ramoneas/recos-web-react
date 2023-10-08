import animeService from "../../services/animeService";
import moviesService from "../../services/moviesService";

function ContentButton({ content, setRecommendation, alignment }) {
  if (!content.length) return;

  const handleClick = () => {
    if (alignment === "anime") {
      const payload = content.map((item) => {
        return { anime_id: item.MAL_ID, rating: item.newRating * 2 };
      });
      animeService.recommendAnime(payload).then((data) => {
        setRecommendation(data);
      });
    } else {
      const payload = content.map((item) => {
        return { movieId: item.movieId, rating: item.newRating * 2 };
      });

      moviesService.recommendMovies(payload).then((data) => {
        setRecommendation(data);
      });
    }
  };

  return (
    <div>
      <button
        className="bg-blue-800 text-white text-2xl px-3 py-2 rounded-lg block w-full font-bold"
        onClick={handleClick}
      >
        Recommend!
      </button>
    </div>
  );
}

export default ContentButton;
