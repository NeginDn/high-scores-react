import React from "react";

const CountryName = (props) => {
  return (
    <div>
      <h3 className="text-info">
        High Scores:
        {props.country.name}
      </h3>
    </div>
  );
};
export default CountryName;
