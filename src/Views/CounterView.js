import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount, decrementByAmount } from '../redux/counter';

function CounterView() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="countMe">
      <h2>Count Me : {count}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(7))}>Increment by 7</button>
      <button onClick={() => dispatch(decrementByAmount(7))}>Decrement by 7</button>
    </div>
  );
}
export default CounterView;
