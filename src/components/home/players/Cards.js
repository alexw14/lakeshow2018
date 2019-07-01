import React, { Component } from 'react';
import { easePolyOut } from 'd3-ease';
import Animate from 'react-move/Animate';
import Lebron from '../../../resources/images/players/lebron.png';
import Lonzo from '../../../resources/images/players/Ball.png';
import Ingram from '../../../resources/images/players/Ingram.png';
import Kuzma from '../../../resources/images/players/Kuzma.png';
import McGee from '../../../resources/images/players/McGee.png';
import PlayerCard from '../../ui/player-card';

class HomeCards extends Component {

  state = {
    cards: [
      {
        bottom: 400,
        left: 0,
        number: "2",
        firstName: "Lonzo",
        lastName: "Ball",
        bck: Lonzo
      },
      {
        bottom: 400,
        left: 300,
        number: "14",
        firstName: "Brandon",
        lastName: "Ingram",
        bck: Ingram
      },
      {
        bottom: 400,
        left: 600,
        number: "23",
        firstName: "LeBron",
        lastName: "James",
        bck: Lebron
      },
      {
        bottom: 0,
        left: 0,
        number: "0",
        firstName: "Kyle",
        lastName: "Kuzma",
        bck: Kuzma
      },
      {
        bottom: 0,
        left: 300,
        number: "7",
        firstName: "JaVale",
        lastName: "McGee",
        bck: McGee
      }
    ]
  }

  showAnimateCards = () => (
    this.state.cards.map((card, i) => (
      <Animate
        key={i}
        show={this.props.show}
        start={{
          left: 0,
          bottom: 0
        }}
        enter={{
          left: [card.left],
          bottom: [card.bottom],
          timing: { duration: 5000, ease: easePolyOut }
        }}
      >
        {({ left, bottom }) => {
          return (
            <div
              style={{
                position: 'absolute',
                left,
                bottom
              }}
            >
              <PlayerCard
                number={card.number}
                firstName={card.firstName}
                lastName={card.lastName}
                bck={card.bck}
              />
            </div>
          )
        }}
      </Animate>
    ))
  )

  render() {
    return (
      <div>
        {this.showAnimateCards()}
      </div>
    );
  }
}

export default HomeCards;