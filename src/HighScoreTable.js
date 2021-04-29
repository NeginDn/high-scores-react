import React from "react";
import PlayerScore from "./PlayerScore";

const HighScoreTable = (props) => {
  let finalScores = props.result.sort((countryOne, countryTwo) => {
    return countryOne.name > countryTwo.name ? 1 : -1;
  });
  return (
    <div>
      {finalScores.map((eachCountry, index) => {
        return (
          <div>
            <h3 key={index}  className="cell p-3 my-3  mx-auto">
              High Scores:
              {eachCountry.name}
            </h3>
            <PlayerScore player={eachCountry.scores} />
          </div>
        );
      })}
    </div>
  );
};

export default HighScoreTable;
