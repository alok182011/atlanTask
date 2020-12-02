import React from "react";

import Players from "./Players";
import "./PlayerListStyle.css";
import PlayerDisplayPreview from "../components/PlayerDisplayPreview";

class PlayerList extends React.Component {
  constructor() {
    super();
    this.state = {
      players: Players,
      searchterm: "",
    };
  }

  handleChange = (e) => {
    this.setState({ searchterm: e.target.value });
  };

  render() {
    return (
      <div className="playerlist-container">
        <input
          type="text"
          onChange={this.handleChange}
          placeholder=" Search by name"
          className="playerlist-searchbar"
        ></input>

        {!this.state.searchterm
          ? Players.map((player) => <PlayerDisplayPreview {...player} />)
          : Players.map((player) => (
              <PlayerDisplayPreview
                searchterm={this.state.searchterm}
                {...player}
              />
            ))}
      </div>
    );
  }
}

export default PlayerList;
