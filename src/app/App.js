import './App.css';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
/* import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; */

import Home from '../components/main/Home';
import About from '../components/main/About';
import Header from '../components/header/Header';
import { Users } from '../components/main/Users';

function Main() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/users" component={Users} />
      <Route component={NoMathch} />
    </Switch>
  );
}

function NoMathch({ location }) {
  return <h3>Sorry, the requested url is invalid</h3>;
}

function App() {
  return (
    <>
      <Header />
      <Main />
    </>
  );
}

export default App;
