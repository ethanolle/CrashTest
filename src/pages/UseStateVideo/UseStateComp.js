import { useState } from "react";
// import "./UseStateComp.css";

const UseStateComp = () => {
  const [number, setNumber] = useState({ ethan: "TheKing", coders: "Boss!" });
  const handleIncrement = () => {
    setNumber({ ...number, ethan: "the crazy KING" });
  };

  return (
    <div className='App'>
      <button onClick={handleIncrement}>Change</button>
      <h5>{number.ethan}</h5>
      <h5>{number.coders}</h5>
    </div>
  );
};

export default UseStateComp;
