import React from "react";

import Matches from "./Matches";
import "./MatchListStyle.css";
import MatchDisplayPreview from "../components/MatchDisplayPreview";

class MatchList extends React.Component {
  render() {
    return (
      <div className="matchlist-container">
        {Matches.map((matches) => (
          <MatchDisplayPreview {...matches} />
        ))}
      </div>
    );
  }
}

export default MatchList;
