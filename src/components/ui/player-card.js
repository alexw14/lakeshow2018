import React from 'react';

const PlayerCard = (props) => {
  return (
    <div className="player-card-wrapper">
      <div 
        className="player-card-thmb"
        style={{background:`#fedc93 url(${props.bck})`}}
      ></div>
      <div className="player-card-info">
        <div className="player-card-number">
          {props.number}
        </div>
        <div className="player-card-name">
          <span>{props.firstName}</span>
          <span>{props.lastName}</span>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;