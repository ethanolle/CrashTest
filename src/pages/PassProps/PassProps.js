import { useState, useEffect } from "react";
import "./PassProps.css";
import ChildComp from "./ChildComp";

const PassProps = () => {
  const [name, setName] = useState("CHANGE ME");

  return (
    <div className='PassPropsContainer'>
      <h3>ParrentName : {name}</h3>
      <ChildComp changeState={(props) => setName(props)} />
    </div>
  );
};

export default PassProps;
