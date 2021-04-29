import React from "react";
import "./App.css";

import SortButton from "./SortButton.js";
import HighScoreTable from "./HighScoreTable.js";
import PageHeading from "./PageHeading";
import scores from "./scores";

function App() {
  return (
    <div className="App">
      <SortButton />
      <PageHeading />
      <HighScoreTable result={scores} />
    </div>
  );
}

export default App;
