import logo from './logo.svg';
import './App.css';
import CounterApp from "./CounterApp";
import { useState } from 'react';
import Api from './Api';

const useCounter = () => {
  const [counter, setCounter] = useState(0);
  const increase  = () => setCounter(counter + 1);
  const decrease = () => setCounter(counter - 1);
  const reset = () => setCounter(0)

  return{
    counter,
    increase,
    decrease,
    reset
  }
}

let aleatorio = Math.round(Math.random()*60);

function App() {
  const {data:character, loading, error} = Api(`https://rickandmortyapi.com/api/character/${aleatorio}`);
  const counterA = useCounter();
  const counterB = useCounter()

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    console.log(error)
  }

  return (
    <div className="App">
      {/* <div>{counterA.counter}</div>

     <button onClick={counterB.increase}>+</button>

     <div>{counterB.counter}</div>
     <button onClick={counterA.increase}> +</button> */}
      <br/>
      <img src={character?.image} alt="" />
     <h1>
       {character?.name}
     </h1>

     <h3>{character?.species}</h3>
     <h4>{character?.origin.name}</h4>
    </div>
  );
}

export default App;
