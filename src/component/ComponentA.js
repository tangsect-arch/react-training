import { useState } from "react";

export const ComponentA = () => {
  const [count, setCount] = useState(0);

  function handleInc() {
    setCount(count + 1);
  }

  function handleDec() {
    setCount(count - 1);
  }

  return (
    <>
      <div>ComponentA{count}</div>
      <button onClick={handleInc}>Increment</button>
      <button onClick={handleDec}>Decrement</button>
    </>
  );
};
