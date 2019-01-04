import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Header from '../components/Header';
import ExpensifyDashboardPage from '../components/ExpensifyDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpsensePage';
import HelpPage from '../components/HelpPage';
import PageNotFound from '../components/PageNotFound';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
        <Switch>
          <Route path="/" component={ExpensifyDashboardPage} exact={true}/>
          <Route path="/create" component={AddExpensePage} />
          <Route path="/edit/:id" component={EditExpensePage} />
          <Route path="/help" component={HelpPage} />
          <Route component={PageNotFound} />
        </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter;