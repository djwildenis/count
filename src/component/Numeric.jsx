import { useState, useEffect } from 'react';
import './index.css';
function Numeric() {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    return () => {
      setNumber(0);
    };
  }, []);

  function increment() {
    setNumber(prevNumber => prevNumber + 1);
  }

  function decrement() {
    setNumber(prevNumber => prevNumber - 1);
  }

  return (
    <>
      <h1>Counter</h1>
      <button onClick={increment}>+</button>
      <div>{number}</div>
      <button onClick={decrement}>-</button>
    </>
  );
}

export default Numeric;
