import AsyncSelect from "react-select/async";
import makeAnimated from "react-select/animated";
import animeService from "../../services/animeService";

const animatedComponents = makeAnimated();

function AnimeSelect({ setAnime, anime }) {
  const loadOptions = (params) => {
    console.log(params);
    return animeService.fetchAnimeByName(params);
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
        getOptionValue={(e) => e.MAL_ID}
        loadOptions={loadOptions}
        onChange={handleChange}
        components={animatedComponents}
        isMulti
      />
    </>
  );
}

export default AnimeSelect;
