import React from "react";

const TableHeading = (props) => {

  return (
          <div>
            <h3  className="cell p-3 my-3  mx-auto">
              High Scores:
              {props.country.name}
            </h3>
          </div>
        );
};
export default TableHeading;
