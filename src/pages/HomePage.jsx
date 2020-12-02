import React from "react";
import { Link } from "react-router-dom";

import "./HomePageStyle.css";

class HomePage extends React.Component {
  render() {
    return (
      <div className="homepage-back">
        <div className="homepage-text">
          <h1 className="homepage-title">IPL-Info</h1>
          <p>Your one to go solution to find everything about IPL.</p>
        </div>
      </div>
    );
  }
}

export default HomePage;
