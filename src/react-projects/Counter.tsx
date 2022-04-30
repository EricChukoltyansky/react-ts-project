import { useState } from "react";

function Counter() {
  const [value, setValue] = useState<number>(0);

  const increment = () => {
    setValue((prevState: number) => (prevState += 1));
  };

  console.log(value);

  const decrement = () => {
    setValue((prevState: number) => (prevState -= 1));
  };

  return (
    <div>
      <button onClick={increment}>+1</button>
      <div>Counter: {value}</div>
      <button onClick={decrement}>-1</button>
    </div>
  );
}

export default Counter;
