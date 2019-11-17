import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import routes from '../routes';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className="App">
      <Router>
      <Header />
      <Switch>
        {routes.map(({path, Component}) => <Route exact path={path}><Component /></Route>)}
      </Switch>
      <Footer />
      </Router>
    </div>
  );
}

export default Layout;
