import './CountDownClock.css';
import { useState } from 'react';

const CountDownClock = () => {
  const [minutesLeft, setMinutesLeft] = useState(25);
  return (
    <div className='CountDownClockContainer'>
      <h1 className='this is the countDown'>{minutesLeft}</h1>
    </div>
  );
};

export default CountDownClock;
