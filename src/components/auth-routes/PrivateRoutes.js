import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoutes = ({
  user, // get user 
  component: Comp, // renaming component as Comp so we can use <Comp /> on the bottom
  ...rest // get the rest of props
}) => {
  return (
    <Route {...rest} component={(props) => {  // props is from react-router-dom
      return (
        user ?
          <Comp {...props} user={user} />
          :
          <Redirect to='/signin' />
      )
    }} />
  );
};

export default PrivateRoutes;