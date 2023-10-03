import RadioGroupRating from "../RatingIcon";

function AnimeList({ content }) {
  if (!content.length) return;

  return (
    <ul>
      {content.map((a) => (
        <li
          key={a.MAL_ID}
          className="bg-zinc-600 text-white px-3 py-1 rounded-lg mb-2 flex justify-between"
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
            <RadioGroupRating content={a} />
          </div>
        </li>
      ))}
    </ul>
  );
}

export default AnimeList;
