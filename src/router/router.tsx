import { Switch, Route, Redirect } from "react-router-dom";
import { QuestionsRouter } from "../views/questions/questions.router";

export const Router = () => (
  <Switch>
    <Route exact path="/">
      <Redirect to="/questions" />
    </Route>

    <QuestionsRouter />
  </Switch>
);
