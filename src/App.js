import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/HomePage";
import PlayerList from "./pages/PlayerList";
import MatchList from "./pages/MatchList";
import FilterMatchList from "./pages/FilterMatchList";
import Header from "./components/Header";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/playerlist" component={PlayerList} />
          <Route path="/matchlist" component={MatchList} />
          <Route path="/filtermatchlist" component={FilterMatchList} />
        </Switch>
      </div>
    );
  }
}

export default App;
