import React from 'react';
import Layout from './hoc/Layout';
import { Switch, Route } from 'react-router-dom';

import PrivateRoute from './components/auth-routes/PrivateRoutes';

import Home from './components/home';
import SignIn from './components/signin';

import Dashboard from './components/admin/Dashboard';

const Routes = (props) => {
  return (
    <Layout>
      <Switch>
        <PrivateRoute {...props} exact component={Dashboard} path="/dashboard" />
        <Route exact component={SignIn} path="/signin" />
        <Route exact component={Home} path="/" />
      </Switch>
    </Layout>
  )
}

export default Routes;
