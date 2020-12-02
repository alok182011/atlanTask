import React from "react";

import "./PlayerDisplayTileStyle.css";

const PlayerDisplayTile = ({ name, bat, ball, from }) => (
  <div className="playerdisplaytile-container">
    <div className="playerdisplaytile-text">
      <h3 className="playerdisplaytile-title">{name}</h3>
      <h4>{from}</h4>
      <div className="playerdisplaytile-info">
        <h5>Bat Style: {bat}</h5>
        <h5>Ball Style: {ball}</h5>
      </div>
    </div>
  </div>
);

export default PlayerDisplayTile;
