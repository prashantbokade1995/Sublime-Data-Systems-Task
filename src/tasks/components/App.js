import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import CustomerDetails from './CustomerDetails';
import CityList from './CityList';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/customer/:id" component={CustomerDetails} />
        <Route path="/cities" component={CityList} />
      </Switch>
    </Router>
  );
};

export default App;
