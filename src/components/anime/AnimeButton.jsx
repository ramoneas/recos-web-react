import animeService from "../../services/animeService";

function AnimeButton({ anime, setRecommendation }) {
  if (!anime.length) return;

  const handleClick = () => {
    const payload = anime.map((item) => {
      return { anime_id: item.MAL_ID, rating: item.newRating * 2 };
    });

    animeService.recommendAnime(payload).then((data) => {
      setRecommendation(data);
    });
  };

  return (
    <div>
      <button
        className="bg-indigo-700 text-white text-2xl px-3 py-2 rounded-lg block w-full font-bold"
        onClick={handleClick}
      >
        Recommend!
      </button>
    </div>
  );
}

export default AnimeButton;
