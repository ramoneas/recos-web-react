import AsyncSelect from "react-select/async";
import makeAnimated from "react-select/animated";
import animeService from "../../services/animeService";
import moviesService from "../../services/moviesService";

const animatedComponents = makeAnimated();

function ContentSelect({ setContent, content, alignment }) {
  const loadOptions = (params) => {
    if (alignment === "anime") {
      return animeService.fetchAnimeByName(params);
    } else {
      return moviesService.fetchMoviesByName(params);
    }
  };

  const handleChange = (value) => {
    setContent(value);
  };

  return (
    <>
      <AsyncSelect
        className="text-black pb-2"
        cacheOptions
        value={content}
        placeholder={
          alignment == "anime"
            ? "Insert your favorite anime"
            : "Insert your favorite movie"
        }
        getOptionLabel={(e) => (alignment == "anime" ? e.Name : e.title)}
        getOptionValue={(e) => (alignment == "anime" ? e.MAL_ID : e.movieId)}
        loadOptions={loadOptions}
        onChange={handleChange}
        components={animatedComponents}
        isMulti
      />
    </>
  );
}

export default ContentSelect;
