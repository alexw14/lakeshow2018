import React, { Component } from 'react';
import Reveal from 'react-reveal/Reveal';
import HomeCards from './Cards';

class Players extends Component {

  state = {
    show: false
  }

  render() {
    return (
      <div className="home-players-section"
        style={{ background: '#ffffff' }}
      >
        <div className="container">
          <div className="row">
            <div className="col s12 starting-lineup">Starting Lineup</div>
          </div>
          <div className="home-players-wrapper">
            <div className="home-card-wrapper">
              <HomeCards
              />
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Comment out due to bug in React-Reveal not rendering in Mobile

  // render() {
  //   return (
  //     <Reveal
  //       fraction={0.4}
  //       onReveal={() => {
  //         this.setState({
  //           show: true
  //         })
  //       }}
  //     >
  //       <div className="home-players-section"
  //         style={{ background: '#ffffff' }}
  //       >
  //         <div className="container">
  //           <div className="row">
  //             <div className="col s12 starting-lineup">Starting Lineup</div>
  //           </div>
  //           <div className="home-players-wrapper">
  //             <div className="home-card-wrapper">
  //               <HomeCards
  //                 show={this.state.show}
  //               />
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </Reveal>
  //   );
  // }
}

export default Players;