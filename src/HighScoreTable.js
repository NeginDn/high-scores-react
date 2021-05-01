import React from "react";
import PlayerScores from "./PlayerScores";
import CountryName from "./CountryName";

const HighScoreTable = (props) => {
  let finalScores = props.result.sort((countryOne, countryTwo) => {
    return countryOne.name > countryTwo.name ? 1 : -1;
  });
  return (
    <div className="container w-50 border border-info ">
      {finalScores.map((eachCountry, index) => {
        return (
          <div key={index} className="cell  p-3 my-3  mx-auto">
            <CountryName country={eachCountry} />
            <PlayerScores order={props.order} player={eachCountry.scores} />
          </div>
        );
      })}
    </div>
  );
};

export default HighScoreTable;
