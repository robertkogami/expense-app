import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddExpense from '../components/AddExpense';
import Dashboard from '../components/Dashboard';
import EditExpense from '../components/EditExpense';
import Error from '../components/Error';
import Header from '../components/Header';
import Help from '../components/Help';

const AppRouter = () => (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route path='/' component={Dashboard} exact={true} />
        <Route path='/create' component={AddExpense} />
        <Route path='/edit/:id' component={EditExpense} />
        <Route path='/help' component={Help} />
        <Route component={Error} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
