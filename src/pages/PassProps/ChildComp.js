import "./ChildComp.css";

const ChildComp = (props) => {
  return (
    <div className='childContainer'>
      <h3>ChildComp</h3>
      <button onClick={() => props.changeState("Changed2")}>TheChanger</button>
      <button onClick={() => props.changeState("Changed1")}>TheChanger2</button>
    </div>
  );
};

export default ChildComp;
