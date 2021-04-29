import React from "react";
import PlayerScore from "./PlayerScore";
import TableHeading from "./TableHeading";

const HighScoreTable = (props) => {
  let finalScores = props.result.sort((countryOne, countryTwo) => {
    return countryOne.name > countryTwo.name ? 1 : -1;
  });
  return (
    <div>
      {finalScores.map((eachCountry) => {
        return (
          <div>
            <TableHeading country={eachCountry} />
            <PlayerScore player={eachCountry.scores} />
          </div>
        );
      })}
    </div>
  );
};

export default HighScoreTable;
