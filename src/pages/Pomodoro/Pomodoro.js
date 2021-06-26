import './Pomodoro.scss';
import { useState, useRef, useEffect } from 'react';
import Countdown from 'react-countdown';
// import StartButton from "./Start";
let clickIn = new Audio('/sounds/clickIn.mp3');
let motivation = new Audio('/sounds/motivation.mp3');

const Pomodoro = () => {
  const [time, setTime] = useState(Date.now());
  const [buttonStatus, setButtonStatus] = useState('start');
  const [counterStatus, setCounterStatus] = useState('');
  const ref = useRef();

  useEffect(() => {
    if (counterStatus === true) {
      setButtonStatus('reset');
      motivation.play();
    }
  }, [counterStatus]);

  // Handling with Actions
  const handleStart = (e) => {
    clickIn.play();
    ref.current?.start();
    setButtonStatus('inProgress');
  };

  const handleReset = () => {
    clickIn.play();
    setTime(Date.now());
    setButtonStatus('start');
  };

  const handlePause = (e) => {
    clickIn.play();
    ref.current?.pause();
    setButtonStatus('pause');
  };

  // Button Components
  function StartButton(props) {
    return (
      <a className='btn btn-5' onClick={handleStart}>
        start
      </a>
    );
  }

  function ResetButton(props) {
    return (
      <a className='btn btn-5' onClick={handleReset}>
        Reset
      </a>
    );
  }

  function Pause(props) {
    return (
      <a className='btn btn-5' onClick={handlePause}>
        Pause
      </a>
    );
  }

  //Choosing the good button

  function CompletedButtons() {
    if (buttonStatus === 'pause' || buttonStatus === 'start') {
      return <StartButton />;
    } else if (buttonStatus === 'inProgress') {
      return <Pause />;
    }
    return <ResetButton />;
  }
  return (
    <div className='pomodoroContainer'>
      <div className='pomodoroCounter'>
        <div className='counterContainer'>
          <Countdown
            date={time + 1500000}
            ref={ref}
            autoStart={false}
            renderer={({ hours, minutes, seconds, completed }) => {
              setCounterStatus(completed);
              if (completed) {
                // Render a completed state
                return <div>You did it!</div>;
              } else {
                // Render a countdown
                return <h1 className='m-0 font-weight-bold'>{minutes}</h1>;
              }
            }}
          />
        </div>
        <div className='buttonContainer'>
          <CompletedButtons />
        </div>
      </div>
    </div>
  );
};

export default Pomodoro;
