import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PublicRoutes = ({
  user, // get user 
  component: Comp, // renaming component as Comp so we can use <Comp /> on the bottom
  ...rest // get the rest of props
}) => {
  return (
    <Route {...rest} component={(props) => {  // props is from react-router-dom
      return (
        rest.restricted ?
          (
            user ?
              <Redirect to="/dashboard" />
              :
              <Comp {...props} user={user} />
          )
          :
          <Comp {...props} user={user} />
      )
    }} />
  );
};

export default PublicRoutes;