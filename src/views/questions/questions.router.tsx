import { Switch, Route } from "react-router-dom";
import { QuestionDetails } from "./views/details/questionDetails";
import { QuestionsList } from "./views/list/questionsList";
import { QuestionNew } from "./views/new/questionNew";

export const questionsPageBasePath = "questions";

export const QuestionsRouter = () => (
  <Switch>
    <Route exact path={`/${questionsPageBasePath}`} component={QuestionsList} />
    <Route path={`/${questionsPageBasePath}/new`} component={QuestionNew} />
    <Route path={`/${questionsPageBasePath}/:id`} component={QuestionDetails} />
  </Switch>
);
