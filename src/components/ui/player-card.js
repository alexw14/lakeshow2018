import React from 'react';

const PlayerCard = (props) => {
  return (
    <div className="player_card_wrapper">
      <div 
        className="player_card_thmb"
        style={{background:`#fedc93 url(${props.bck})`}}
      ></div>
      <div className="player_card_info">
        <div className="player_card_number">
          {props.number}
        </div>
        <div className="player_card_name">
          <span>{props.firstName}</span>
          <span>{props.lastName}</span>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;