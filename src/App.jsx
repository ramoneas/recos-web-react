import { useEffect, useState } from "react";
import ResultCard from "./components/ResultCard";
import ColorToggleButton from "./components/SelectorButton";
import AnimeForm from "./components/anime/AnimeForm";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  const [recommendation, setRecommendation] = useState([]);
  const [alignment, setAlignment] = useState("anime");

  useEffect(() => {
    setRecommendation([]);
  }, [alignment]);

  return (
    <GlobalProvider>
      <main className="bg-zinc-950 text-white min-h-screen p-10">
        <div className=" bg-zinc-800 container mx-auto p-2 rounded-lg">
          <div className="flex justify-between">
            <h1 className="text-2xl font-bold pb-2">Recommendation System</h1>
            <ColorToggleButton
              setAlignment={setAlignment}
              alignment={alignment}
            />
          </div>
          <div>
            {alignment === "anime" ? (
              <AnimeForm setRecommendation={setRecommendation} />
            ) : (
              "OK"
            )}
          </div>
          <div>
            <ResultCard recommendation={recommendation} />
          </div>
        </div>
      </main>
    </GlobalProvider>
  );
}

export default App;
