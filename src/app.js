import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
  <div>This is from my dashboard component.</div>
);

const AddExpensePage = () => <div>This is from my AddExpense component.</div>;

const EditExpensePage = () => <div>This is from my EditExpense component.</div>;

const HelpPage = () => <div>This is my help page.</div>;

const routes = (
  <Router>
    <div>
      <Route path='/' component={ExpenseDashboardPage} exact={true} />
      <Route path='/create' component={AddExpensePage} />
      <Route path='/edit' component={EditExpensePage} />
      <Route path='/help' component={HelpPage} />
    </div>
  </Router>
);

ReactDOM.render(routes, document.getElementById('app'));
