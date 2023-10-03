import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function ColorToggleButton({ setAlignment, alignment }) {
  const handleChange = (_event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
      // sx={{
      //   ".MuiButtonBase-root": { color: "#979797" },
      //   ".Mui-selected": { color: "red" },
      // }}
    >
      <ToggleButton value="movies">Movies</ToggleButton>
      <ToggleButton value="anime">Anime</ToggleButton>
    </ToggleButtonGroup>
  );
}
