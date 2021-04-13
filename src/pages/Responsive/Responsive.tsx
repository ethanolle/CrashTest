import './Responsive.css';
import Cinematics from '../../assets/video/Cinematics.mp4';

const Responsive = () => {
  return (
    <div className='ResponsiveContainer'>
      <div className='banner'></div>
      <div className='textResponsive'>
        <h1>thats the responsive page</h1>
        <p className='main'>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, This is a non
          sence video just to see how we add Video with css
        </p>
      </div>
      <video autoPlay loop muted className='backgroundVideo'>
        <source src={Cinematics} type='video/mp4' />
      </video>
    </div>
  );
};

export default Responsive;
