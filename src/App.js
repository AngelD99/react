
import {BrowserRouter, Route, Switch} from "react-router-dom";
import AnecdotesP from "./AnecdotesP";
import LoginP from "./LoginP";
import React from "react";

function App() {

  return (
    <div>
      <BrowserRouter>
        <React.Fragment>
        <Switch>
          <Route path="/" exact component={LoginP} />
          <Route path="/Anecdotes" component={AnecdotesP} />
        </Switch>
        </React.Fragment>
      </BrowserRouter>
    </div>
  );
}

export default App;
