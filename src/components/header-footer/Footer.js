import React from 'react';
import { LakersLogo } from '../ui/icons';

const Footer = () => {
  return (
    <footer className="bck_black">
      <div className="footer_logo">
        <LakersLogo 
          link={true}
          linkTo='/'
          width='70px'
          height='70px'
        />
      </div>
      <div className="footer_discl">
        Lakers 2018
      </div>
    </footer>
  );
};

export default Footer;