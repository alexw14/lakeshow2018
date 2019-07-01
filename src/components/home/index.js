import React from 'react';
import Featured from './featured';
import Matches from './matches';
import Players from './players';
import Promotion from './promotion';

const Home = () => {
  return (
    <div className="background-black">
      <Featured />
      <Players />
      <Matches />
      {/* <Promotion /> */}
    </div>
  );
};

export default Home;
