import { useState } from 'react';
// import "./UseStateComp.css";

const UseStateComp = () => {
  const [object, setObject] = useState({ ethan: 'TheKing', coders: 'Boss!' });
  const [counter, setCounter] = useState(0);
  const handleObject = () => {
    //This is very bad
    //setObject({  ethan: 'the crazy KING' })
    setObject({ ...object, ethan: 'the crazy KING' });
  };

  const handleCounter = () => {
    //This is very bad
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    setCounter((prevCounter) => prevCounter + 1);
  };
  return (
    <div className='App'>
      <button onClick={handleObject}>Change</button>
      <h5>{object.ethan}</h5>
      <h5>{object.coders}</h5>
      <h3>{counter}</h3>
      <button onClick={handleCounter}>+</button>
    </div>
  );
};

export default UseStateComp;
