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
    playerFilter: 'All',
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

  render() {
    return (
      <div className="the_matches_container">
        <div className="the_matches_wrapper">
          <div className="left">
            <div className="match_filters">

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