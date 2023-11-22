import React, { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const handleClick1 = () => {
    setCounter(counter + 1);
  }; 
  const handleClick2 = () => {
    setCounter(counter - 1);
  };
  const handleClick3 = () => {
    setCounter(0);
  };
  return (
    <div className="App"></div>
    <h1>Counter App</h1>
    <div className="counter">{counter}</div>
    <button onClick={handleClick1}>Increase</button>
      <button onClick={handleClick2}>Decrease</button>
      <button onClick={handleClick3}>Reset</button>
      </div>
      );
    }
    
    export default App;