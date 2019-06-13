import React, { Component } from 'react';
import { easePolyOut } from 'd3-ease';
import NodeGroup from 'react-move/NodeGroup';

class GamesList extends Component {

  state = {
    gamesList: []
  }

  static getDerivedStateFromProps(props, state) {
    return state = {
      gamesList: props.games
    }
  }

  getTeamName = (name) => {
    let arr = name.toLowerCase().split(" ");
    return arr[arr.length - 1];
  }

  getGameBlocks = (data) => {
    let awayTeam = '';
    let homeTeam = '';
    if (data.at) {
      awayTeam = data.homeTeam;
      homeTeam = data.awayTeam;
    } else {
      awayTeam = data.awayTeam;
      homeTeam = data.homeTeam;
    }
    return (
      <div>
        <div className="block_wraper">
          <div className="block">
            <div
              className="icon"
              style={{ background: `url(/images/team_icons/${this.getTeamName(awayTeam)}.png)` }}
            />
            <div className="team">{data.awayTeam}</div>
            <div className="result">{data.awayTeamScore}</div>
          </div>
          <div className="block">
            <div
              className="icon"
              style={{ background: `url(/images/team_icons/${this.getTeamName(homeTeam)}.png)` }}
            />
            <div className="team">{data.homeTeam}</div>
            <div className="result">{data.homeTeamScore}</div>
          </div>
        </div>
        <div className="block_wraper nfo">
          <div><strong>Date:</strong> {data.date}</div>
          <div><strong>Record:</strong> {data.W}-{data.L}</div>
        </div>
      </div>
    )
  }

  showGames = () => {
    console.log(this.state.gamesList)
    return (
      this.state.gamesList ?
        <div>
          <NodeGroup
            data={this.state.gamesList}
            keyAccessor={(d) => d.id}
            start={() => ({
              opacity: 0,
              x: -200
            })}
            enter={(d, i) => ({
              opacity: [1],
              x: [0],
              timing: { duration: 500, delay: i * 50, ease: easePolyOut }
            })}
            update={(d, i) => ({
              opacity: [1],
              x: [0],
              timing: { duration: 500, delay: i * 50, ease: easePolyOut }
            })}
            leave={(d, i) => ({
              opacity: [0],
              x: [-200],
              timing: { duration: 500, delay: i * 50, ease: easePolyOut }
            })}
          >
            {(nodes) => (
              <div>
                {nodes.map(({ key, data, state: { x, opacity } }) => (
                  <div
                    key={key}
                    className="match_box_big"
                    style={{
                      opacity,
                      transform: `translate(${x}px)`
                    }}
                  >
                    {this.getGameBlocks(data)}
                  </div>
                ))}
              </div>
            )}
          </NodeGroup>
        </div>
        : null
    )
  }

  render() {
    return (
      <div>
        {this.showGames()}
      </div>
    );
  }
}

export default GamesList;