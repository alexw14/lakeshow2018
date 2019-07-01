import React from 'react';
import Stripes from './Stripes';
import Text from './Text';
import Player from './Player';

const Featured = () => {
  return (
    <div className="featured-wrapper container">
      <Text />
      <Stripes />
      <Player />
    </div>
  )
}

export default Featured;