import React from 'react';
import Stripes from './Stripes';
import Text from './Text';
import Player from './Player';
import Logo from './Logo';

const Featured = () => {
  return (
    <div className="featured-wrapper container" style={{ height: `${window.innerHeight}px`, overflow: 'hidden' }}>
      <Text />
      <Stripes />
      <Player />
      <Logo />
    </div>
  )
}

export default Featured;