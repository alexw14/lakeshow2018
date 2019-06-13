import React from 'react';
import Layout from './hoc/Layout';
import { Switch, Route } from 'react-router-dom';

import PrivateRoute from './components/auth-routes/PrivateRoutes';
import PublicRoute from './components/auth-routes/PublicRoutes';
import ScrollToTop from './components/ui/scroll-to-top';

import Home from './components/home';
import SignIn from './components/signin';
import Team from './components/team';
import Games from './components/games';

import Dashboard from './components/admin/Dashboard';
import AdminMatches from './components/admin/matches';
import AddEditMatch from './components/admin/matches/AddEditMatch';
import AdminPlayers from './components/admin/players';
import AddEditPlayer from './components/admin/players/AddEditPlayer';

const Routes = (props) => {
  return (
    <ScrollToTop>
      <Layout>
        <Switch>
          <PrivateRoute {...props} exact path="/admin-players/edit-player/:id" component={AddEditPlayer} />
          <PrivateRoute {...props} exact path="/admin-players/edit-player" component={AddEditPlayer} />
          <PrivateRoute {...props} exact path="/admin-players" component={AdminPlayers} />
          <PrivateRoute {...props} exact path="/admin-games/edit-game/:id" component={AddEditMatch} />
          <PrivateRoute {...props} exact path="/admin-games/edit-game" component={AddEditMatch} />
          <PrivateRoute {...props} exact path="/admin-games" component={AdminMatches} />
          <PrivateRoute {...props} exact path="/dashboard" component={Dashboard} />
          <PublicRoute {...props} exact path="/signin" component={SignIn} restricted={true} />
          <PublicRoute {...props} exact path="/team" component={Team} restricted={false} />
          <PublicRoute {...props} exact path="/games" component={Games} restricted={false} />
          <PublicRoute {...props} exact path="/" component={Home} restricted={false} />
        </Switch>
      </Layout>
    </ScrollToTop>
  )
}

export default Routes;
