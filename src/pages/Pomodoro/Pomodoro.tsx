import './Pomodoro.css';
import CountDownClock from '../../components/Pomodoro/CountdownClock';
const Pomodoro = () => {
  return (
    <div className='PomodoroContainer'>
      <CountDownClock />
    </div>
  );
};

export default Pomodoro;
