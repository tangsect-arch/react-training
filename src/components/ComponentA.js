import { useState } from "react";

export const ComponentA = () => {
  const [count, setCount] = useState(0);
  const [otherCount, setOtherCount] = useState(0);

  //Complex calculation

  return (
    <div>
      <button onClick={() => incFn}>inc</button>
      <button onClick={() => decFn}>dec</button>
    </div>
  );
};
