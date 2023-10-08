function AnimeCard({ anime }) {
  return (
    <div
      className="bg-slate-200 text-yellow-500 px-3 py-2 rounded-lg mb-2 text-sm font-bold"
      key={anime.MAL_ID}
    >
      <h3 className="text-2xl pb-5">{anime.Name}</h3>
      <p>Genre: {anime.Genres}</p>
      <p>Classification: {anime.Rating}</p>
      <p>Type: {anime.Type}</p>
      <p>Aired: {anime.Aired}</p>
      <p>Studios: {anime.Studios}</p>
    </div>
  );
}

export default AnimeCard;
