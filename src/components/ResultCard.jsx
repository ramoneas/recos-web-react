import AnimeCard from "./anime/AnimeCard";

function ResultCard({ recommendation }) {
  if (!recommendation.length) return;

  return (
    <div className="pt-2">
      <h4 className="text-1xl font-bold pb-2">Must Watch:</h4>
      {recommendation.map((re) => (
        <AnimeCard anime={re} key={re.MAL_ID} />
      ))}
    </div>
  );
}

export default ResultCard;
