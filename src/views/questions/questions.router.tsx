import { Switch, Route } from "react-router-dom";
import { QuestionDetails } from "./views/details/questionDetails";
import { QuestionsList } from "./views/list/questionsList";
import { QuestionNew } from "./views/new/questionNew";

const basePath = "questions";

export const QuestionsRouter = () => (
  <Switch>
    <Route exact path={`/${basePath}`} component={QuestionsList} />
    <Route path={`/${basePath}/new`} component={QuestionNew} />
    <Route path={`/${basePath}/details/:id`} component={QuestionDetails} />
  </Switch>
);
