import React from "react";
import { Link } from "react-router-dom";

import "./HeaderStyle.css";

const Header = () => (
  <div className="header-container">
    <div className="header-title">
      <Link className="header-title-link" to="/">
        <h1>IPL-Info</h1>
      </Link>
    </div>
    <div className="header-items">
      <Link className="header-link" to="/playerlist">
        Players
      </Link>
      <Link className="header-link" to="/matchlist">
        Matches
      </Link>
      <Link className="header-link" to="/filtermatchlist">
        Filter-views
      </Link>
    </div>
  </div>
);

export default Header;
