import React, { Component } from 'react';
import { Tag } from '../../ui/misc';
import Reveal from 'react-reveal/Reveal';
import HomeCards from './Cards';

class Players extends Component {

  state = {
    show: false
  }

  render() {
    return (
      <Reveal
        fraction={0.4}
        onReveal={() => {
          this.setState({
            show: true
          })
        }}
      >
        <div className="home-players-section"
          style={{ background: '#ffffff' }}
        >
          <div className="container">
            <div className="row">
              <div className="col s6 starting-lineup">Starting Lineup</div>
            </div>
            <div className="home-players-wrapper">
              <div className="home-card-wrapper">
                <HomeCards
                  show={this.state.show}
                />
              </div>
              {/* <div className="home-text-wrapper">
                <div>
                  <Tag bck="#552583" size="81px" color="#ffffff"
                    add={{
                      display: 'inline-block',
                      marginBottom: '20px'
                    }}
                  >
                    Meet
                </Tag>
                </div>
                <div>
                  <Tag bck="#552583" size="81px" color="#ffffff"
                    add={{
                      display: 'inline-block',
                      marginBottom: '20px'
                    }}
                  >
                    The
                </Tag>
                </div>
                <div>
                  <Tag bck="#552583" size="81px" color="#ffffff"
                    add={{
                      display: 'inline-block',
                      marginBottom: '20px'
                    }}
                  >
                    Squad
                </Tag>
                </div>
                <div>
                  <Tag bck="#ffffff" size="27px" color="#552583"
                    link={true}
                    linkTo="/team"
                    add={{
                      display: 'inline-block',
                      marginBottom: '20px',
                      border: '1px solid #000000'
                    }}
                  >
                    Meet them here
                </Tag>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </Reveal>
    );
  }
}

export default Players;