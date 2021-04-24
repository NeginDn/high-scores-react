import React from "react";
import scores from "./scores";
import PlayerScore from "./PlayerScore";

const HighScoreTable = () => {
  let finalScores = scores.sort((countryOne, countryTwo) =>
    countryOne.name > countryTwo.name ? 1 : -1);
  return (
    <div>
      {finalScores.map((eachCountry, index) => {
        <h3 key={index} scope="col">
          High Scores: {eachCountry.name}
        </h3>;
        <PlayerScore player={scores.score} />;
      })}
    </div>
  );
};

export default HighScoreTable;
