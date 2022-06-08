import React, { useState } from "react";
import styles from "./counter.module.css";

const Counter = ({count}) => {
  // sample value to be replaced
   const [number,setNumber] = useState(count)
  // NOTE: do not delete `data-testid` key value pair
  const handleChange = (value) => {
         setNumber(number+value)
  }
  return (
    <div className={styles.counter}>
      <button data-testid="task-counter-increment-button" onClick={() => handleChange(1)}>+</button>
      <span data-testid="task-counter-value">{number}</span>
      <button data-testid="task-counter-decrement-button" onClick={() => handleChange(-1)}>-</button>
    </div>
  );
};

export default Counter;
