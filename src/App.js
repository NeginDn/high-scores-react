import React from "react";
import "./App.css";
import scores from "./scores";

import SortButton from "./SortButton.js";
import HighScoreTable from "./HighScoreTable.js";
import PageHeading from "./PageHeading";



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
