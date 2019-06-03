import React from 'react';
import Layout from './hoc/Layout';
import { Switch, Route } from 'react-router-dom';

import PrivateRoute from './components/auth-routes/PrivateRoutes';
import PublicRoute from './components/auth-routes/PublicRoutes';

import Home from './components/home';
import SignIn from './components/signin';

import Dashboard from './components/admin/Dashboard';
import AdminMatches from './components/admin/matches';
import AddEditMatch from './components/admin/matches/AddEditMatch';

const Routes = (props) => {
  return (
    <Layout>
      <Switch>
        <PrivateRoute {...props} exact path="/admin-games/edit-game" component={AddEditMatch} />
        <PrivateRoute {...props} exact path="/admin-games/edit-game/:id" component={AddEditMatch} />
        <PrivateRoute {...props} exact path="/admin-games" component={AdminMatches} />
        <PrivateRoute {...props} exact path="/dashboard" component={Dashboard} />
        <PublicRoute {...props} exact path="/signin" component={SignIn} restricted={true}/>
        <PublicRoute {...props} exact path="/" component={Home} restricted={false}/>
      </Switch>
    </Layout>
  )
}

export default Routes;
