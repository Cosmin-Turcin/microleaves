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
      <div className="MainContent flex flex-justify-content-center p-t-md">
        <Switch>
          {routes.map(({path, Component}) => <Route exact path={path}><Component /></Route>)}
        </Switch>
      </div>
      <Footer />
      </Router>
    </div>
  );
}

export default Layout;
