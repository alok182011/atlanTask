import React from "react";
import FilterMatchDisplayTile from "./FilterMatchDisplayTile";

import "./FilterMatchDisplayPreviewStyle.css";

const FilterMatchDisplayPreview = ({ matches }) => (
  <div className="filtermatchdisplaypreview-container">
    <div className="filtermatchdisplaypreview-title">
      <span className="filtermatchdisplaypreview-titleitem">Season</span>
      <span className="filtermatchdisplaypreview-titleitem">Date</span>
      <span className="filtermatchdisplaypreview-titleitem">Venue</span>
      <span className="filtermatchdisplaypreview-titleitem">Team 1</span>
      <span className="filtermatchdisplaypreview-titleitem">Team 2</span>
      <span className="filtermatchdisplaypreview-titleitem">Winner</span>
    </div>
    {matches.map((match) =>
      match.Season === "IPL-2018" ? (
        match.team1 === "Chennai Super Kings" ||
        match.team2 === "Chennai Super Kings" ? (
          <FilterMatchDisplayTile
            season={match.Season}
            venue={match.venue}
            date={match.date}
            team1={match.team1}
            team2={match.team2}
            winner={match.winner}
          />
        ) : null
      ) : null
    )}
  </div>
);

export default FilterMatchDisplayPreview;
