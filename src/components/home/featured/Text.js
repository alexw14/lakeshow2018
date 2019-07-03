import React, { Component } from 'react';
import { easePolyOut } from 'd3-ease';
import Animate from 'react-move/Animate';

class Text extends Component {

  animateText = () => (
    <Animate
      show={true}
      start={{
        opacity: 0,
        x: 503,
        y: 0
      }}
      enter={{
        opacity: [1],
        x: [20],
        y: [0],
        timing: { duration: 1500, ease: easePolyOut }
      }}
    >
      {({ opacity, x, y }) => {
        return (
          <div className="featured-text"
            style={{
              opacity,
              transform: `translate(${x}px,${y}px)`
            }}
          >
            LakeShow 2018-19
          </div>
        )
      }}
    </Animate>
  )

  render() {
    return (
      <div className="row">
        {this.animateText()}
      </div>
    );
  }
}

export default Text;