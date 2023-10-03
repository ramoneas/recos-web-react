import RadioGroupRating from "../RatingIcon";

function MovieList({ content }) {
  if (!content.length) return;

  return (
    <ul>
      {content.map((m) => (
        <li
          className="bg-zinc-600 text-white px-3 py-1 rounded-lg mb-2 flex justify-between"
          key={m.movieId}
        >
          <div className="text-sm font-bold">
            <h4 className="text-2xl pb-5">{m.title}</h4>
            <p>Genres: {m.genres}</p>
          </div>
          <div>
            <RadioGroupRating content={m} />
          </div>
        </li>
      ))}
    </ul>
  );
}

export default MovieList;
