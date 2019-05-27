import React, { Component } from 'react';
import { easePolyOut } from 'd3-ease';
import Animate from 'react-move/Animate';

import FeaturedPlayer from '../../../resources/images/lakers_featured_player.png';

class Text extends Component {

  animateFirst = () => (
    <Animate
      show={true}
      start={{
        opacity: 0,
        x: 503,
        y: 150
      }}
      enter={{
        opacity: [1],
        x: [273],
        y: [150],
        timing: { duration: 500, ease: easePolyOut }
      }}
    >
      {({ opacity, x, y }) => {
        return (
          <div className="featured_second"
            style={{
              opacity,
              transform: `translate(${x}px,${y}px)`
            }}
          >
            LA Lakers
        </div>
        )
      }}
    </Animate>
  )

  animateSecond = () => (
    <Animate
      show={true}
      start={{
        opacity: 0,
        x: 503,
        y: 300
      }}
      enter={{
        opacity: [1],
        x: [273],
        y: [300],
        timing: { delay: 300, duration: 500, ease: easePolyOut }
      }}
    >
      {({ opacity, x, y }) => {
        return (
          <div className="featured_first"
            style={{
              opacity,
              transform: `translate(${x}px,${y}px)`
            }}
          >
            2018-19
          </div>
        )
      }}
    </Animate>
  )

  animateThird = () => (
    <Animate
      show={true}
      start={{
        opacity: 0,
        x: 503,
        y: 450
      }}
      enter={{
        opacity: [1],
        x: [273],
        y: [450],
        timing: { delay: 600, duration: 500, ease: easePolyOut }
      }}
    >
      {({ opacity, x, y }) => {
        return (
          <div className="featured_second"
            style={{
              opacity,
              transform: `translate(${x}px,${y}px)`
            }}
          >
            Season
        </div>
        )
      }}
    </Animate>
  )

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
          <div className="featured_player"
            style={{
              opacity,
              background: `url(${FeaturedPlayer})`,
              transform: `translate(820px,125px)`
            }}
          >
          </div>
        )
      }}
    </Animate>
  )

  render() {
    return (
      <div className="featured_text">
        {/* {this.animateNumber()} */}
        {this.animateFirst()}
        {this.animateSecond()}
        {this.animatePlayer()}
        {this.animateThird()}
      </div>
    );
  }
}

export default Text;