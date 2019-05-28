import React from 'react';
import { Tag } from '../../ui/misc';
import Blocks from './Blocks';

const MatchesHome = () => {
  return (
    <div className="home_matches_wrapper">
      <div className="container">
        <Tag 
          bck="transparent"
          size="50px"
          color="#ffffff"
        >
          Games
        </Tag>

        <Blocks />

        <Tag 
          bck="#ffffff"
          size="22px"
          color="#000000"
          link={true}
          linkTo="/games"
        >
          See More Games
        </Tag>
      </div>
    </div>
  );
};

export default MatchesHome;