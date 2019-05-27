import React from 'react';

const MatchesBlock = ({ match }) => {
  
  const getTeamName = (name) => {
    let arr = name.toLowerCase().split(" ");
    return arr[arr.length-1];
  }

  let home = '';
  let away = '';
  let homeScore = 0;
  let awayScore = 0;
  let homeIcon = '';
  let awayIcon = '';
  if (match.FIELD6 === "@") {
    home = match.Opponent;
    away = 'Los Angeles Lakers';
    homeScore = match.Opp;
    awayScore = match.Tm;
    homeIcon = getTeamName(match.Opponent);
    awayIcon = 'lakers';
  } else {
    home = 'Los Angeles Lakers';
    away = match.Opponent;
    homeScore = match.Tm;
    awayScore = match.Opp;
    homeIcon = 'lakers';
    awayIcon = getTeamName(match.Opponent);
  }

  return (
    <div className="match_block">
      <div className="match_date">
        {match.Date}
      </div>
      <div className="match_wrapper">
        <div className="match_top">
          <div className="left">
            <div className="icon" style={{background:`url(/images/team_icons/${awayIcon}.png)`}}></div>
            <div className="team_name" style={{ fontSize: '28px' }}>{away}</div>
          </div>
          <div className="right" style={{ fontSize: '34px' }}>
            {awayScore}
          </div>
        </div>
        <div className="match_bottom">
          <div className="left">
            <div className="icon" style={{background:`url(/images/team_icons/${homeIcon}.png)`}}></div>
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