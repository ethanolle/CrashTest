import { useState } from 'react';
import './Hamburger.css';

const Hamburger = () => {
  const [active, setActive] = useState(false);
  const handleBoxClicks = () => {
    active ? setActive(false) : setActive(true);
  };

  return (
    <div className='App'>
      <button
        className={active ? 'box b1 active' : 'box b1 '}
        onClick={handleBoxClicks}
      >
        <div className='container-lignes'>
          <div className='ligne'></div>
          <div className='ligne'></div>
          <div className='ligne'></div>
        </div>
      </button>
      <button
        className={active ? 'box b2 active' : 'box b2 '}
        onClick={handleBoxClicks}
      >
        <div className='container-lignes'>
          <div className='ligne'></div>
          <div className='ligne'></div>
          <div className='ligne'></div>
        </div>
      </button>
      <button
        className={active ? 'box b3 active' : 'box b3 '}
        onClick={handleBoxClicks}
      >
        <div className='container-lignes'>
          <div className='ligne'></div>
          <div className='ligne'></div>
          <div className='ligne'></div>
        </div>
      </button>
    </div>
  );
};

export default Hamburger;
