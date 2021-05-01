import React from "react";
import PlayerScore from "./PlayerScore";

const PlayerScores = (props) => {
  const { player, order } = props;
  const finalScores = player.sort((firstPlayer, secondPlayer) => {
    if (order === false) {
      return firstPlayer.s < secondPlayer.s ? 1 : -1;
    }
    return firstPlayer.s < secondPlayer.s ? -1 : 1;
  });

  return (
    <div className="table-responsive w-100 border border-dark mx-auto">
      <table className="table p-2 mx-auto">
        <tbody>
          {finalScores.map((eachPlayer, index) => {
            return (
              <PlayerScore key={index} playerName={eachPlayer.n} playerScore={eachPlayer.s}></PlayerScore>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default PlayerScores;
