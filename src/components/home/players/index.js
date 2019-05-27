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
        fraction={0.7}
        onReveal={() => {
          this.setState({
            show: true
          })
        }}
      >

        <div className="home_meetplayers"
          style={{ background: '#ffffff' }}
        >
          <div className="container">
            <div className="home_meetplayers_wrapper">
              <div className="home_card_wrapper">
                <HomeCards
                  show={this.state.show}
                />
              </div>
              <div className="home_text_wrapper">
                <div>
                  <Tag bck="#552583" size="100px" color="#ffffff"
                    add={{
                      display: 'inline-block',
                      marginBottom: '20px'
                    }}
                  >
                    Meet
                </Tag>
                </div>
                <div>
                  <Tag bck="#552583" size="100px" color="#ffffff"
                    add={{
                      display: 'inline-block',
                      marginBottom: '20px'
                    }}
                  >
                    The
                </Tag>
                </div>
                <div>
                  <Tag bck="#552583" size="100px" color="#ffffff"
                    add={{
                      display: 'inline-block',
                      marginBottom: '20px'
                    }}
                  >
                    Players
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
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    );
  }
}

export default Players;