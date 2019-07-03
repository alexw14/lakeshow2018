import React, { Component } from 'react';
import { easePolyOut } from 'd3-ease';
import Animate from 'react-move/Animate';

import FeaturedLogo from '../../../resources/images/logos/lakers_logo_featured.jpg';

class Logo extends Component {

  animateLogo = () => (
    <Animate
      show={true}
      start={{
        opacity: 0,
      }}
      enter={{
        opacity: [1],
        timing: { delay: 0, duration: 1, ease: easePolyOut }
      }}
    >
      {({ opacity }) => {
        return (
          <div className="featured-Logo"
            style={{
              opacity,
              background: `url(${FeaturedLogo})`,
              transform: `translate(0px,80px)`
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
        {this.animateLogo()}
      </div>
    );
  }
}

export default Logo;