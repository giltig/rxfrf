import React from 'react';

const Counter =
  ({count, increaseCount, decreaseCount}) =>
    <div>
      <button onClick={increaseCount}>+</button>
      <div>{count}</div>
      <button onClick={decreaseCount}>-</button>
    </div>

export default Counter;
