import './CountDownClock.css';
// import { useState, useEffect } from 'react';
import Countdown from 'react-countdown';

const CountDownClock = () => {
  return (
    <div className='CountDownClockContainer'>
      <div className='counterContainer'>
        <Countdown
          className='counterNum'
          date={Date.now() + 1500000}
          intervalDelay={0}
          precision={3}
          renderer={(props) => (
            // <div>{props.total}</div> To Put it in ms
            <div>{Math.floor(props.total / 60000)}</div>
          )}
        />
        <button></button>
      </div>
    </div>
  );
};

export default CountDownClock;
