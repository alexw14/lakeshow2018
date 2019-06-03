import React from 'react';
import { Link } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import { firebase } from '../../../firebase';

const AdminNav = () => {

  const links = [
    {
      title: 'Games',
      linkTo: '/admin-games'
    },
    {
      title: 'Add Game',
      linkTo: '/admin-games/edit-game'
    },
    {
      title: 'Players',
      linkTo: '/admin-players'
    },
    {
      title: 'Add Player',
      linkTo: '/admin-players/edit-player'
    }
  ]

  const style = {
    color: '#ffffff',
    fontWeight: '300',
    borderBottom: '1px solid #353535'
  };

  const renderItems = () => (
    links.map((link) => (
      <Link to={link.linkTo} key={link.title}>
        <ListItem button style={style}>
          {link.title}
        </ListItem>
      </Link>
    ))
  );

  const handleLogOut = () => {
    firebase.auth().signOut().then(() => {
      console.log('Logged out');
    }, (error) => {
      console.log('Error logging out');
    });
  }

  return (
    <div>
      {renderItems()}
      <ListItem button style={style} onClick={() => handleLogOut()}>
        Log Out
      </ListItem>
    </div>
  );
};

export default AdminNav;