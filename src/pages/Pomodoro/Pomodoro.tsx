import './Pomodoro.scss';
// import { useState, useEffect } from 'react';
import Countdown from 'react-countdown';

const Pomodoro = () => {
  return (
    <div className='pomodoroContainer'>
      <div className='containerCounter'>
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
        </div>
        <div className='buttonContainer'>
          <a href='https://portfolioreactive.web.app/' className='btn btn-5'>
            Start
          </a>
        </div>
      </div>
    </div>
  );
};

export default Pomodoro;
