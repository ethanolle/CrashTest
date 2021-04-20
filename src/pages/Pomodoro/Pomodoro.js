import "./Pomodoro.scss";
import { useState, useRef } from "react";
import Countdown from "react-countdown";

const Pomodoro = () => {
  const [time, setTime] = useState(Date.now());
  const [completed, setCompleted] = useState(false);
  const ref = useRef();
  let clickIn = new Audio("/sounds/clickIn.mp3");
  let clickOut = new Audio("/sounds/clickOut.mp3");

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
    clickIn.play();
    ref.current?.start();
    console.log("start");
  };

  const handleReset = () => {
    clickOut.play();
    setTime(Date.now());
    console.log("reset");
  };

  return (
    <div className='pomodoroContainer'>
      <div className='pomodoroCounter'>
        <div className='counterContainer'>
          <Countdown
            date={time + 1500}
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
                    {minutes}
                    {/*:{seconds} */}
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
