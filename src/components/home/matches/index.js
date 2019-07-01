import React from 'react';
import { Tag } from '../../ui/misc';
import Blocks from './Blocks';

const MatchesHome = () => {
  return (
    <div className="home-games-wrapper">
      <div className="container">
        <Tag
          bck="transparent"
          size="50px"
          color="#ffffff"
        >
          Games
        </Tag>
        <Blocks />
        <div className="more-games-btn">
          <Tag
            bck="#fff"
            size="22px"
            color="#552583"
            link={true}
            linkTo="/games"
          >
            More Games
        </Tag>
        </div>
      </div>
    </div>
  );
};

export default MatchesHome;