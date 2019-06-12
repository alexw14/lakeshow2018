import React, { Component } from 'react';
import Fade from 'react-reveal/Fade'

import PlayerCard from '../ui/player-card';
import { firebasePlayers, firebase } from '../../firebase';
import { firebaseLooper } from '../ui/misc';
import { Promise } from 'core-js';

class Team extends Component {

  state = {
    isLoading: true,
    players: []
  }

  componentDidMount() {
    firebasePlayers.once('value').then((snapshot) => {
      const players = firebaseLooper(snapshot);
      let promises = [];
      for (let key in players) {
        players[key].firstName = players[key].Player.split(' ')[0];
        players[key].lastName = players[key].Player.split(' ')[1];
        promises.push(
          new Promise((resolve, reject) => {
            firebase.storage().ref('players').child(players[key].image).getDownloadURL()
              .then(url => {
                players[key].url = url;
                resolve();
              })
          })
        );
      }
      Promise.all(promises).then(() => {
        this.setState({
          isLoading: false,
          players
        })
      })
    })
  }

  showPlayersByCategory = (category) => (
    this.state.players ?
      this.state.players.map((player, index) => {
        let position = player.Pos.charAt(player.Pos.length-1);
        return position === category ?
          <Fade left delay={24} key={index}>
            <div className="item">
              <PlayerCard 
                number={player.number}
                firstName={player.firstName}
                lastName={player.lastName}
                bck={player.url}
              />
            </div>
          </Fade>
          : null
      })
      : null
  )

  render() {
    return (
      <div className="the_team_container">
        {
          !this.state.isLoading ?
            <div>
              <div className="team_category_wrapper">
                <div className="title">Guards</div>
                <div className="team_cards">
                  {this.showPlayersByCategory('G')}
                </div>
              </div>
              <div className="team_category_wrapper">
                <div className="title">Forwards</div>
                <div className="team_cards">
                  {this.showPlayersByCategory('F')}
                </div>
              </div>
              <div className="team_category_wrapper">
                <div className="title">Centers</div>
                <div className="team_cards">
                  {this.showPlayersByCategory('C')}
                </div>
              </div>
            </div>
            : null
        }
      </div>
    );
  }
}

export default Team;