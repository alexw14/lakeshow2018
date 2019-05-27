import React from 'react';

const MatchesBlock = ({ match }) => {
  
  let home = '';
  let away = '';
  let homeScore = 0;
  let awayScore = 0;
  if (match.FIELD6 === "@") {
    home = match.Opponent;
    away = 'Los Angeles Lakers';
    homeScore = match.Opp;
    awayScore = match.Tm;
  } else {
    home = 'Los Angeles Lakers';
    away = match.Opponent;
    homeScore = match.Tm;
    awayScore = match.Opp;
  }

  return (
    <div className="match_block">
      <div className="match_date">
        {match.Date}
      </div>
      <div className="match_wrapper">
        <div className="match_top">
          <div className="left">
            <div className="icon"></div>
            <div className="team_name" style={{ fontSize: '28px' }}>{away}</div>
          </div>
          <div className="right" style={{ fontSize: '34px' }}>
            {awayScore}
          </div>
        </div>
        <div className="match_bottom">
          <div className="left">
            <div className="icon"></div>
            <div className="team_name" style={{ fontSize: '28px' }}>{home}</div>
          </div>
          <div className="right" style={{ fontSize: '34px' }}>
            {homeScore}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchesBlock;