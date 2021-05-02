import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./counterSlice";
import { add, addToArray } from "./stringSlice";

export function ReduxCounter() {
  const count = useSelector((state) => state.counter.value);
  const string = useSelector((state) => state.string.value);
  const array = useSelector((state) => state.string.arrayTest);
  const object = useSelector((state) => state.string.objectTest);
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleString = (stringName) => {
    dispatch(add(stringName));
  };

  const handleArray = () => {
    dispatch(addToArray("mdr"));
  };

  return (
    <div>
      <div>
        <button aria-label='Increment value' onClick={handleIncrease}>
          Increment
        </button>
        <span>{count}</span>
        <button aria-label='Decrement value' onClick={handleDecrement}>
          Decrement
        </button>
        <h1 onClick={() => handleString("je suis le")}>{string}</h1>
        <h1>{array}</h1>
        <button onClick={() => handleArray("mdr")}>Add Text to Array</button>
        <h1>{Object.values(object)}</h1>
      </div>
    </div>
  );
}

export default ReduxCounter;
