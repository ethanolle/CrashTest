import "./Pomodoro.scss";
import { useState, useRef, useEffect } from "react";
import Countdown from "react-countdown";
// let clickIn = new Audio("/sounds/clickIn.mp3");
// let clickOut = new Audio("/sounds/clickOut.mp3");
let motivation = new Audio("/sounds/motivation.mp3");

const Pomodoro = () => {
  const [time, setTime] = useState(Date.now());
  const [status, setStatus] = useState("start");
  const ref = useRef();
  useEffect(() => {
    // if (status) motivation.play();
    console.log(status);
  }, [status]);

  function StartButton(props) {
    return (
      <a className='btn btn-5' onClick={handleStart}>
        start
      </a>
    );
  }

  const handleStart = (e) => {
    // clickIn.play();
    ref.current?.start();
    setStatus("inProgress");
  };

  function ResetButton(props) {
    return (
      <a className='btn btn-5' onClick={handleReset}>
        Reset
      </a>
    );
  }

  const handleReset = () => {
    // clickOut.play();
    setTime(Date.now());
    setStatus("start");
  };

  function Pause(props) {
    return (
      <a className='btn btn-5' onClick={handlePause}>
        Pause
      </a>
    );
  }

  const handlePause = (e) => {
    // clickIn.play();
    ref.current?.pause();
    setStatus("pause");
  };

  function CompletedButtons() {
    if (status === "pause" || status === "start") {
      return <StartButton />;
    } else if (status == "inProgress") {
      return <Pause />;
    }
    return <ResetButton />;
  }
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
                console.log(completed);
                return <div>You did it!</div>;
              } else {
                // Render a countdown
                return (
                  <h1 className='m-0 font-weight-bold'>
                    {minutes},{seconds}
                  </h1>
                );
              }
            }}
          />
        </div>
        <div className='buttonContainer'>
          <StartButton />
          <Pause />
          <ResetButton />
          <CompletedButtons />,
        </div>
      </div>
    </div>
  );
};

export default Pomodoro;
