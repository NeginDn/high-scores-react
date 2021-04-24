import React from "react";
import allCountryScores from "./scores.js";

const TableHeading = () => {
  let finalScores = scores.sort((countryOne, countryTwo) =>
    countryOne.name > countryTwo.name ? 1 : -1);
  return (
    <div>
      {finalScores.map((eachCountry, index) => {
        <h3 key={index} scope="col">
          High Scores: {eachCountry.name}
        </h3>;
      })}
    </div>
  );
}

export default TableHeading;
