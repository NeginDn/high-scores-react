import React, { useState } from "react";
import scores from "./scores";

const SortButton = () => {
  const [isAscending, setIsAscending] = useState(true);
  const sortScores = () => {
    setIsAscending(isAscending ? !isAscending : isAscending);
  };
  return (
    <button onClick={sortScores} className="btn btn-primary">
      Sort scores
    </button>
  );
};

export default SortButton;
