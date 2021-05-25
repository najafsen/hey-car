import { Switch, Route } from "react-router-dom";
import { Details } from "../pages/details";
import { Home } from "../pages/home";
import { New } from "../pages/new";

export const Router = () => (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>

    <Route exact path="/details">
      <Details />
    </Route>

    <Route exact path="/new">
      <New />
    </Route>
  </Switch>
);
