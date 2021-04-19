import './Pomodoro.scss';
import { useState, useRef } from 'react';
import Countdown from 'react-countdown';
import ResetButton from '../../components/Pomodoro/ResetButton';

const Pomodoro = () => {
  const [time, setTime] = useState(Date.now());
  const [completed, setCompleted] = useState(false);
  const ref = useRef();

  function ResetButton(props) {
    return (
      <a className='btn btn-5' onClick={handleReset}>
        Reset
      </a>
    );
  }

  function StartButton(props) {
    return (
      <a className='btn btn-5' onClick={handleStart}>
        start
      </a>
    );
  }

  function CompletedButtons(props) {
    const isCompleted = props.isCompleted;
    if (isCompleted) {
      return <ResetButton />;
    }
    return <StartButton />;
  }

  const handleStart = (e) => {
    ref.current?.start();
    console.log('start');
  };

  const handleReset = () => {
    setTime(Date.now());
    console.log('reset');
  };

  return (
    <div className='pomodoroContainer'>
      <div className='containerCounter'>
        <div className='counterContainer'>
          <Countdown
            date={time + 3000}
            ref={ref}
            autoStart={false}
            renderer={({ hours, minutes, seconds, completed }) => {
              if (completed) {
                // Render a completed state
                setCompleted(true);
                return <div>You did it!</div>;
              } else {
                setCompleted(false);
                // Render a countdown
                return (
                  <h1 className='m-0 font-weight-bold'>
                    {minutes}:{seconds}
                  </h1>
                );
              }
            }}
          />
        </div>
        <div className='buttonContainer'>
          <CompletedButtons isCompleted={completed} />,
        </div>
      </div>
    </div>
  );
};

export default Pomodoro;
