import React from "react";
import PlayerDisplayTile from "./PlayerDisplayTile";

import "./PlayerDisplayPreviewStyle.css";

const PlayerDisplayPreview = ({ searchterm, players }) => (
  <div className="playerdisplaypreview-container">
    {!searchterm
      ? players.map((player) => (
          <PlayerDisplayTile
            name={player.Player_Name}
            bat={player.Batting_Hand}
            ball={player.Bowling_Skill}
            from={player.Country}
          />
        ))
      : players.map((player) =>
          searchterm.toLowerCase() === player.Player_Name.toLowerCase() ? (
            <PlayerDisplayTile
              name={player.Player_Name}
              bat={player.Batting_Hand}
              ball={player.Bowling_Skill}
              from={player.Country}
            />
          ) : null
        )}
  </div>
);

export default PlayerDisplayPreview;
