import React from 'react';
import { LakersLogo } from '../ui/icons';

const Footer = () => {
  return (
    <footer style={{ background: '#000' }}>
      <div className="footer_logo">
        <LakersLogo
          link={true}
          linkTo='/'
          width='70px'
          height='70px'
        />
      </div>
      <div>
        Lakers 2018
      </div>
    </footer>
  );
};

export default Footer;