import React, { Component } from 'react';
import { firebaseMatches } from '../../../firebase';
import { firebaseLooper, reverseArray } from '../../ui/misc';
import GamesBlock from '../../ui/games-block';
import Slide from 'react-reveal/Slide';

class Blocks extends Component {

  state = {
    matches: []
  }

  componentDidMount() {
    firebaseMatches.limitToLast(8).once('value').then((snapshot) => {
      const matches = firebaseLooper(snapshot);
      this.setState({
        matches: reverseArray(matches)
      });
    })
  }

  showMatches = (matches) => (
    matches ?
      matches.map((match) => (
        <Slide bottom key={match.id}>
          <div className="item">
            <div className="wrapper">
              <GamesBlock
                match={match}
              />
            </div>
          </div>
        </Slide>
      ))
      : null
  )

  render() {
    return (
      <div className="home-games">
        {this.showMatches(this.state.matches)}
      </div>
    );
  }
}

export default Blocks;