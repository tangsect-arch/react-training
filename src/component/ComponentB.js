import { useState } from "react";

export const ComponentB = () => {
    
  const [count, setCount] = useState(0);

  return (
    <>
      <div>ComponentB{count}</div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </>
  );
};
