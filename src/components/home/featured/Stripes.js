import React, { Component } from 'react';
import { easePolyOut } from 'd3-ease';
import Animate from 'react-move/Animate';

class Stripes extends Component {

  state = {
    stripes: [
      {
        background: '#552583',
        left: 300,
        rotate: 0,
        top: 80,
        delay: 100
      },
      {
        background: '#fdb927',
        left: 300,
        rotate: 0,
        top: 120,
        delay: 200
      },
      {
        background: '#552583',
        left: 300,
        rotate: 0,
        top: 160,
        delay: 300
      },
      {
        background: '#fdb927',
        left: 300,
        rotate: 0,
        top: 200,
        delay: 400
      },
      {
        background: '#552583',
        left: 0,
        rotate: 0,
        top: 240,
        delay: 500
      },
      {
        background: '#fdb927',
        left: 0,
        rotate: 0,
        top: 280,
        delay: 600
      },
      {
        background: '#552583',
        left: 0,
        rotate: 0,
        top: 320,
        delay: 700
      },
      {
        background: '#fdb927',
        left: 0,
        rotate: 0,
        top: 360,
        delay: 800
      },
      {
        background: '#552583',
        left: 0,
        rotate: 0,
        top: 400,
        delay: 900
      },
      {
        background: '#fdb927',
        left: 0,
        rotate: 0,
        top: 440,
        delay: 1000
      },
      {
        background: '#552583',
        left: 0,
        rotate: 0,
        top: 480,
        delay: 1100
      },
      {
        background: '#fdb927',
        left: 0,
        rotate: 0,
        top: 520,
        delay: 1200
      },
      {
        background: '#552583',
        left: 0,
        rotate: 0,
        top: 560,
        delay: 1300
      }
    ]
  }

  showStripes = () => (
    this.state.stripes.map((stripe, i) => (
      <Animate
        key={i}
        show={true}
        start={{
          background: '#ffffff',
          opacity: 0,
          left: 0,
          rotate: 0,
          top: 0
        }}
        enter={{
          background: `${[stripe.background]}`,
          opacity: [1],
          left: [stripe.left],
          rotate: [stripe.rotate],
          top: [stripe.top],
          timing: { delay: stripe.delay, duration: 600, ease: easePolyOut }
        }}
      >
        {({ background, opacity, left, rotate, top }) => {
          return (
            <div
              className={`stripe stripe-${i}`}
              style={{
                background,
                opacity,
                transform: `rotate(${rotate}deg) translate(${left}px,${top}px)`
              }}
            ></div>
          );
        }}
      </Animate>
    ))
  )

  render() {
    return (
      <div className="featured-stripes">
        {this.showStripes()}
      </div>
    );
  }
}

export default Stripes;