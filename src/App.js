import React, { useState } from "react";
import "./App.css";
import SortButton from "./SortButton.js";
import HighScoreTable from "./HighScoreTable.js";
import PageHeading from "./PageHeading";
import scores from "./scores";
/*
 * 1. add a click handler to sort button (onClick)
 * 2. when clicked it should toggle the order (useState)
 */
function App() {
  // let order = "desc";
  const [isAscending, setIsAscending] = useState(true);
  const sortScores = () => {
    setIsAscending((ascending) => !ascending);
  };
  return (
    <div className="App">
      <PageHeading />
      <SortButton onClick={sortScores} />
      <HighScoreTable order={isAscending} result={scores} />
    </div>
  );
}

export default App;
