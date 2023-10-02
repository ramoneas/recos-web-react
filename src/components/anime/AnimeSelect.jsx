import AsyncSelect from "react-select/async";
import makeAnimated from "react-select/animated";
import { useGlobalState } from "../../context/GlobalState";

const animatedComponents = makeAnimated();

function AnimeSelect({ setAnime, anime }) {
  const { getAnimeByName } = useGlobalState();

  const loadOptions = (params) => {
    return getAnimeByName(params);
  };

  const handleChange = (value) => {
    setAnime(value);
  };

  return (
    <>
      <AsyncSelect
        className="text-black pb-2"
        cacheOptions
        value={anime}
        placeholder="Insert your favorite anime"
        getOptionLabel={(e) => e.Name}
        loadOptions={loadOptions}
        onChange={handleChange}
        components={animatedComponents}
        isMulti
      />
    </>
  );
}

export default AnimeSelect;
