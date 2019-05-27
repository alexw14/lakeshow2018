import React from 'react';
import Zoom from 'react-reveal/Zoom';
import Prize from '../../../resources/images/undefeated4s.png';

const Animation = () => {
  return (
    <div className="promotion_animation">
      <div className="left">
        <Zoom>
          <div>
            <span>Win These</span>
            <span>Sneakers</span>
          </div>
        </Zoom>
      </div>
      <div className="right">
        <Zoom>
          <div style={{background:`url(${Prize}) no-repeat`}}></div>
        </Zoom>
      </div>
    </div>
  );
};

export default Animation;