import React from 'react';

import { createBrowserHistory } from 'history';
import { Switch, Redirect, Route, Router } from 'react-router-dom';

import TodoListPage from 'pages/TodoListPage';

const history = createBrowserHistory();

const AppRouter: React.FC = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/todo" component={TodoListPage} />
        <Route path="*">
          <Redirect to="/todo" />
        </Route>
      </Switch>
    </Router>
  );
};

export default AppRouter;
