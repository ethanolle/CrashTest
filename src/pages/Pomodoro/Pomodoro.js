import './Pomodoro.scss';
import { useState, useRef } from 'react';
import Countdown from 'react-countdown';

const Pomodoro = () => {
  const [start, setStart] = useState(false);
  const ref = useRef();
  const handleStart = (e: any) => {
    ref.current?.start();
  };

  const handlePause = (e: any) => {
    ref.current?.pause();
  };
  const handler = () => {
    setStart(true);
    // start();
    console.log('test');
  };
  return (
    <div className='pomodoroContainer'>
      <div className='containerCounter'>
        <div className='counterContainer'>
          <Countdown
            className='counterNum'
            date={Date.now() + 1500001}
            intervalDelay={0}
            precision={3}
            autoStart={start}
            renderer={(props) => (
              // <div>{props.total}</div> To Put it in ms
              <div>{Math.floor(props.total / 60000)}</div>
            )}
          />
        </div>
        <div className='buttonContainer'>
          <a onClick={() => handler()} className='btn btn-5'>
            Start
          </a>
        </div>
      </div>
    </div>
  );
};

export default Pomodoro;
