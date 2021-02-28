import React from 'react';
import { Home } from './containers/Home';
import { About } from './containers/About';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';
import { Route, Switch, Redirect } from 'react-router-dom';

export const Routes = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={About} />
      </Switch>
      <Footer />
    </div>
  );
};