import RadioGroupRating from "../RatingIcon";

function AnimeList({ anime }) {
  if (!anime.length) return;

  return (
    <ul>
      {anime.map((a) => (
        <li
          className="bg-zinc-600 text-white px-3 py-1 rounded-lg mb-2 flex justify-between"
          key={a.MAL_ID}
        >
          <div className="text-sm font-bold">
            <h4 className="text-2xl pb-5">{a.Name}</h4>
            <p>Genres: {a.Genres}</p>
            <p>Score: {a.Score}</p>
            <p>Classification: {a.Rating}</p>
            <p>Type: {a.Type}</p>
            <p>Studios: {a.Studios}</p>
          </div>
          <div>
            <RadioGroupRating anime={a} />
          </div>
        </li>
      ))}
    </ul>
  );
}

export default AnimeList;
