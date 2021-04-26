import "./Pomodoro.scss";
import { useState, useRef, useEffect } from "react";
import Countdown from "react-countdown";
// let clickIn = new Audio("/sounds/clickIn.mp3");
// let clickOut = new Audio("/sounds/clickOut.mp3");
let motivation = new Audio("/sounds/motivation.mp3");

const Pomodoro = () => {
  const [time, setTime] = useState(Date.now());
  const [completed, setCompleted] = useState("false");
  const ref = useRef();
  useEffect(() => {
    // if (completed) motivation.play();
    // console.log(completed);
  }, [completed]);

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

  function Pause(props) {
    return (
      <a className='btn btn-5' onClick={handlePause}>
        Pause
      </a>
    );
  }

  function CompletedButtons({ isCompleted }) {
    console.log(isCompleted);
    if (isCompleted == "true") {
      return <ResetButton />;
    } else if (isCompleted == "start") {
      console.log("Pause");
      return <Pause />;
    }
    return <StartButton />;
  }

  const handleStart = (e) => {
    // clickIn.play();
    ref.current?.start();
    setCompleted("start");
  };

  const handlePause = (e) => {
    // clickIn.play();
    ref.current?.pause();
    setCompleted("pause");
  };

  const handleReset = () => {
    // clickOut.play();
    setTime(Date.now());
    setCompleted("false");
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
                console.log(completed);
                console.log("here");
                setCompleted("true");
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
          <CompletedButtons isCompleted={completed} />,
        </div>
      </div>
    </div>
  );
};

export default Pomodoro;
