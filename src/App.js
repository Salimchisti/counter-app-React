import React, { useState } from 'react';
import './App.css';

function App() {
  // useState hook to track the count value
  const [count, setCount] = useState(0);

  // Increment the counter
  const handleIncrement = () => {
    setCount(count + 1);
  };

  // Decrement the counter
  const handleDecrement = () => {
    setCount(count - 1);
  };

  // Reset the counter to 0
  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <h1>Counter App Using REACT</h1>
      <div className="counter">
        <h2>{count}</h2>
        <div className="buttons">
          <button onClick={handleIncrement}>Increment</button>
          <button onClick={handleDecrement}>Decrement</button>
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;
