import React, { Component } from 'react';
import { easePolyOut } from 'd3-ease';
import Animate from 'react-move/Animate';

import FeaturedPlayer from '../../../resources/images/lakers_featured_player.png';

class Player extends Component {

  animatePlayer = () => (
    <Animate
      show={true}
      start={{
        opacity: 0,
      }}
      enter={{
        opacity: [1],
        timing: { delay: 250, duration: 500, ease: easePolyOut }
      }}
    >
      {({ opacity }) => {
        return (
          <div className="featured-player"
            style={{
              opacity,
              background: `url(${FeaturedPlayer})`,
              transform: `translate(500px,100px)`
            }}
          >
          </div>
        )
      }}
    </Animate>
  )

  render() {
    return (
      <div className="">
        {this.animatePlayer()}
      </div>
    );
  }
}

export default Player;