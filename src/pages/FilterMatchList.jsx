import React from "react";

import Matches from "./Matches";
import "./FilterMatchListStyle.css";
import FilterMatchDisplayPreview from "../components/FilterMatchDisplayPreview";

class FilterMatchList extends React.Component {
  render() {
    return (
      <div className="filtermatchlist-container">
        <div className="filtermatchlist-searchbar-container">
          <input
            type="text"
            placeholder=" Year - 2018 "
            disabled
            className="filtermatchlist-searchbar"
          ></input>
          <input
            type="text"
            onChange={this.handleChange}
            placeholder=" Team - Chennai Super Kings "
            disabled
            className="filtermatchlist-searchbar"
          ></input>
        </div>
        {Matches.map((matches) => (
          <FilterMatchDisplayPreview {...matches} />
        ))}
      </div>
    );
  }
}

export default FilterMatchList;
