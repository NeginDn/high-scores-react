import React from "react";

const PlayerScore = (props) => {
  const finalScores = props.player.sort((firstPlayer, secondPlayer) =>
      (firstPlayer.s < secondPlayer.s ? 1 : -1));
    return (<div>
        {finalScores.map((player, index) => {
            <tr key={index}>
                <td>{player.n}</td>
                <td>{player.s}</td>
            </tr>;
        })}
    </div>);
        };
export default PlayerScore;