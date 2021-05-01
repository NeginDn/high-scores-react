import React from "react";


const SortButton = (props) => {
  return (
    <button onClick={props.onClick} className="btn btn-primary m-5">
      Sort scores
    </button>
  );
};

export default SortButton;
