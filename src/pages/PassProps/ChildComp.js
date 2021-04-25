import "./ChildComp.css";
import react from "react";

const ChildComp = ({ changeState }) => {
  return (
    <div className='childContainer'>
      <h3>ChildComp</h3>
      <button onClick={() => changeState("Click")}>Click</button>
      <button onClick={() => changeState("Button")}>Button</button>
    </div>
  );
};

export default ChildComp;
