import React from "react";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/">
            {/* Home(the one with the search on) */}
            <Home />

            {/* Search Page (The result page) */}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
