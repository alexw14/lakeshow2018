import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import { firebaseMatches } from '../../firebase';
import { firebaseLooper, reverseArray } from '../ui/misc';

import GamesList from './GamesList';

class Games extends Component {

  state = {
    isLoading: true,
    games: [],
    filteredGames: [],
    gamesFilter: 'All',
    resultFilter: 'All'
  }

  componentDidMount() {
    firebaseMatches.once('value').then(snapshot => {
      const games = firebaseLooper(snapshot);
      this.setState({
        isLoading: false,
        games: reverseArray(games),
        filteredGames: reverseArray(games)
      })
    })
  }

  showGames = (condition) => {
    const list = this.state.games.filter((game) => {
      if (condition === "Away") {
        return game.at === '@'
      } else {
        return game.at === ''
      }
    });
    this.setState({
      filteredGames: condition === "All" ? this.state.games : list,
      gamesFilter: condition,
      resultFilter: 'All'
    })
  }

  render() {
    return (
      <div className="the_matches_container">
        <div className="the_matches_wrapper">
          <div className="left">
            <div className="match_filters">
              <div className="match_filters_box">
                <div className="tag">
                  Show Games:
                </div>
                <div className="cont">
                  <div className={`option`}
                    onClick={() => this.showGames('All')}
                  >
                    All
                  </div>
                  <div className={`option`}
                    onClick={() => this.showGames('Home')}
                  >
                    Home
                  </div>
                  <div className={`option`}
                    onClick={() => this.showGames('Away')}
                  >
                    Away
                  </div>
                </div>
              </div>
            </div>
            <GamesList games={this.state.filteredGames} />
          </div>
          <div className="right">

          </div>
        </div>
      </div>
    );
  }
}

export default Games;