import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Jump from 'react-reveal/Jump';
import { Tag } from '../../ui/misc';
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
        number: "2",
        firstName: "Lonzo",
        lastName: "Ball",
        bck: Lonzo
      },
      {
        number: "14",
        firstName: "Brandon",
        lastName: "Ingram",
        bck: Ingram
      },
      {
        number: "23",
        firstName: "LeBron",
        lastName: "James",
        bck: Lebron
      },
      {
        number: "0",
        firstName: "Kyle",
        lastName: "Kuzma",
        bck: Kuzma
      },
      {
        number: "7",
        firstName: "JaVale",
        lastName: "McGee",
        bck: McGee
      }
    ]
  }

  showAnimateCards = () => (
    this.state.cards.map((card, i) => {
      return (
        <Fade left delay={24} key={i}>
          <div className="item">
            <PlayerCard
              number={card.number}
              firstName={card.firstName}
              lastName={card.lastName}
              bck={card.bck}
            />
          </div>
        </Fade>
      )
    })
  )

  showMeetSquadButton = () => (
    <Jump>
      <div className="meet-squad-btn">
        <Tag bck="#ffffff" size="24px" color="#552583"
          link={true}
          linkTo="/team"
          add={{
            display: 'block',
            marginBottom: '20px',
            border: '1px solid #000000'
          }}
        >
          Meet The Squad
        </Tag>
      </div>
    </Jump>
  )



  render() {
    return (
      <div className="home-card-container">
        {this.showAnimateCards()}
        {this.showMeetSquadButton()}
      </div>
    );
  }
}

export default HomeCards;