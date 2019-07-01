import React from 'react';

const GamesBlock = ({ match }) => {

  const getTeamName = (name) => {
    let arr = name.toLowerCase().split(" ");
    return arr[arr.length - 1];
  }

  let home = '';
  let away = '';
  let homeScore = 0;
  let awayScore = 0;
  let homeIcon = '';
  let awayIcon = '';
  if (match.at === "@") {
    home = match.awayTeam;
    away = 'Los Angeles Lakers';
    homeScore = match.awayTeamScore;
    awayScore = match.homeTeamScore;
    homeIcon = getTeamName(match.awayTeam);
    awayIcon = 'lakers';
  } else {
    home = 'Los Angeles Lakers';
    away = match.awayTeam;
    homeScore = match.homeTeamScore;
    awayScore = match.awayTeamScore;
    homeIcon = 'lakers';
    awayIcon = getTeamName(match.awayTeam);
  }

  return (
    <div className="match-block">
      <div className="match-date">
        {match.date}
      </div>
      <div className="match-wrapper">
        <div className="match-top">
          <div className="left">
            <div className="icon" style={{ background: `url(/images/team_icons/${awayIcon}.png)` }}></div>
            <div className="team-name" style={{ fontSize: '24px' }}>{away}</div>
          </div>
          <div className="right" style={{ fontSize: '24px', paddingTop: '15px' }}>
            {awayScore}
          </div>
        </div>
        <div className="match-bottom">
          <div className="left">
            <div className="icon" style={{ background: `url(/images/team_icons/${homeIcon}.png)` }}></div>
            <div className="team-name" style={{ fontSize: '24px' }}>{home}</div>
          </div>
          <div className="right" style={{ fontSize: '24px', paddingTop: '15px' }}>
            {homeScore}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamesBlock;