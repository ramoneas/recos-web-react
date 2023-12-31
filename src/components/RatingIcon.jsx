import Rating from "@mui/material/Rating";
import { useEffect } from "react";

const DEFAULT_VALUE = 5;
export default function RadioGroupRating({ content }) {
  useEffect(() => {
    content.newRating = DEFAULT_VALUE;
  }, []);

  return (
    <div className="px-3 py-2">
      <Rating
        name="size-large"
        defaultValue={DEFAULT_VALUE}
        precision={0.5}
        size="large"
        onChange={(_event, newValue) => {
          if (newValue > 1) {
            content.newRating = newValue * 2;
          } else {
            content.newRating = 1;
          }
        }}
      />
    </div>
  );
}
