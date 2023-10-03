import { useEffect, useState } from "react";
import ResultCard from "./components/ResultCard";
import ColorToggleButton from "./components/SelectorButton";
import ContentForm from "./components/content/ContentForm";

function App() {
  const [recommendation, setRecommendation] = useState([]);
  const [alignment, setAlignment] = useState("anime");

  useEffect(() => {
    setRecommendation([]);
  }, [alignment]);

  return (
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
          <ContentForm
            setRecommendation={setRecommendation}
            alignment={alignment}
          />
        </div>
        <div>
          <ResultCard recommendation={recommendation} alignment={alignment} />
        </div>
      </div>
    </main>
  );
}

export default App;
