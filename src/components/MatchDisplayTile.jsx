import React from "react";

import "./MatchDisplayTileStyle.css";

const MatchDisplayTile = ({ season, venue, date, team1, team2, winner }) => (
  <div className="matchdisplaytile-container">
    <div className="matchdisplaytile-info">
      <span className="matchdisplaytile-infoitem">{season}</span>
      <span className="matchdisplaytile-infoitem">{date}</span>
      <span className="matchdisplaytile-infoitem">{venue}</span>
      <span className="matchdisplaytile-infoitem">{team1}</span>
      <span className="matchdisplaytile-infoitem">{team2}</span>
      <span className="matchdisplaytile-infoitem">{winner}</span>
    </div>
  </div>
);

export default MatchDisplayTile;
