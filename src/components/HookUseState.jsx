import { useState } from "react";
import '../App.css';

const useCounter = () => {
  const [counter, setCounter] = useState(0);
  const increase = () => setCounter(counter + 1);
  const decrease = () => setCounter(counter - 1);
  const reset = () => setCounter(0);

  return {
    counter,
    increase,
    decrease,
    reset,
  };
};

const HookUseState = () => {
    const counterA = useCounter();
    const counterB = useCounter()
  return (
    <div className="App">
      <div>{counterA.counter}</div>

      <button onClick={counterA.increase}>+</button>
      <button onClick={counterA.decrease}> -</button>

      <div>{counterB.counter}</div>
      <button onClick={counterB.increase}> +</button>
      <button onClick={counterB.decrease}> -</button>
    </div>
  );
};

export default HookUseState;
