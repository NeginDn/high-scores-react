import React from "react";

const PlayerScore = (props) => {
  const { player } = props;
  const finalScores = player.sort((firstPlayer, secondPlayer) => {
    return firstPlayer.s < secondPlayer.s ? 1 : -1;
  });

  return (
    <div className="table-responsive w-100 border border-dark mx-auto">
      <table className="table p-2 mx-auto">
        <tbody>
          {finalScores.map((eachPlayer, index) => {
            return (
              <tr key={index}>
                <td>{eachPlayer.n}</td>
                <td className="playerScore-score">{eachPlayer.s}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default PlayerScore;
