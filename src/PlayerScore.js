import React from "react";
import EachPlayerName from "./EachPlayerName";
import EachPlayerScore from "./EachPlayerScore";


const PlayerScore = (props) => {
  const { key, playerName, playerScore } = props;
  return (
    <tr key={key}>
      <EachPlayerName playerName={playerName} />
      <EachPlayerScore playerScore={playerScore} />
    </tr>
  );
};

export default PlayerScore;
