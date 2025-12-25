import { useState } from "react";
import classNames from "./Counter.module.scss";

export  function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className={classNames.counter}>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <div>Count: {count}</div>
    </div>
  )
}
