import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useRef } from "react";
import { counterActions } from "../store/counter";

const Counter = () => {
  const customIncrease = useRef();
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const toggle = useSelector((state) => state.counter.showCounter);

  const increment = () => {
    dispatch(counterActions.increment());
  };

  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  const increase = () => {
    const amount = parseInt(customIncrease.current.value.trim());
    if (amount > 0) {
      dispatch(counterActions.increase(amount));
    } else {
      return;
    }
    customIncrease.current.value = null;
  };

  const reset = () => {
    dispatch(counterActions.reset());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{toggle && counter}</div>
      <div>
        <button onClick={reset}>Reset</button>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
        <button onClick={increase}>Custom</button>
        <input ref={customIncrease} type="number" />
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
