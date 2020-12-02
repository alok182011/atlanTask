import React from "react";

import "./FilterMatchDisplayTileStyle.css";

const FilterMatchDisplayTile = ({
  season,
  venue,
  date,
  team1,
  team2,
  winner,
}) => (
  <div className="filtermatchdisplaytile-container">
    <div className="filtermatchdisplaytile-info">
      <span className="filtermatchdisplaytile-infoitem">{season}</span>
      <span className="filtermatchdisplaytile-infoitem">{date}</span>
      <span className="filtermatchdisplaytile-infoitem">{venue}</span>
      <span className="filtermatchdisplaytile-infoitem">{team1}</span>
      <span className="filtermatchdisplaytile-infoitem">{team2}</span>
      <span className="filtermatchdisplaytile-infoitem">{winner}</span>
    </div>
  </div>
);

export default FilterMatchDisplayTile;
