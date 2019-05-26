import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { LakersLogo } from '../ui/icons';


class Header extends Component {
  render() {
    return (
      <AppBar
        position="fixed"
        style={{
          backgroundColor: '#552583',
          boxShadow: 'none',
          padding: '10px 0px',
          borderBottom: '2px solid #000000'
        }}
      >
        <Toolbar style={{ display: 'flex' }}>
          <div style={{ flexGrow: 1 }}>
            <div className="header_logo">
              <LakersLogo
                link={true}
                linkTo='/'
                width='70px'
                height='70px'
              />
            </div>
          </div>
          <Link to='/team'>
            <Button color="inherit">Team</Button>
          </Link>
          <Link to='/matches'>
            <Button color="inherit">Matches</Button>
          </Link>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;