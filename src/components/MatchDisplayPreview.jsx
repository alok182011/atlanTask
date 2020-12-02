import React from "react";
import MatchDisplayTile from "./MatchDisplayTile";

import "./MatchDisplayPreviewStyle.css";

const MatchDisplayPreview = ({ matches }) => (
  <div className="matchdisplaypreview-container">
    <div className="matchdisplaypreview-title">
      <span className="matchdisplaypreview-titleitem">Season</span>
      <span className="matchdisplaypreview-titleitem">Date</span>
      <span className="matchdisplaypreview-titleitem">Venue</span>
      <span className="matchdisplaypreview-titleitem">Team 1</span>
      <span className="matchdisplaypreview-titleitem">Team 2</span>
      <span className="matchdisplaypreview-titleitem">Winner</span>
    </div>
    {matches.map((match) => (
      <MatchDisplayTile
        season={match.Season}
        venue={match.venue}
        date={match.date}
        team1={match.team1}
        team2={match.team2}
        winner={match.winner}
      />
    ))}
  </div>
);

export default MatchDisplayPreview;
