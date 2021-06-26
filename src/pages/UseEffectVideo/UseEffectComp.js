import { useState, useEffect } from 'react';
// import "./UseStateComp.css";

const UseEffectComp = () => {
  const [name, setName] = useState('Ethan');

  useEffect(() => {
    console.log(`Changed to ${name} `);
    return () => {
      console.log('unMounted');
    };
  }, [name]);
  return (
    <div className='App'>
      <h1>The Name is : {name}</h1>
      <button onClick={() => setName('Yossi')}>Yossi</button>
      <button onClick={() => setName('David')}>David</button>
      <button onClick={() => setName('Ethan')}>Ethan</button>
    </div>
  );
};

export default UseEffectComp;
