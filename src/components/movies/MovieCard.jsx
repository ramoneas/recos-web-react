function MovieCard({ movie }) {
  return (
    <div
      className="bg-slate-200 text-yellow-500 px-3 py-2 rounded-lg mb-2 text-sm font-bold"
      key={movie.movieId}
    >
      <h3 className="text-2xl pb-5">{movie.title}</h3>
      <p>Genre: {movie.genres}</p>
    </div>
  );
}

export default MovieCard;
