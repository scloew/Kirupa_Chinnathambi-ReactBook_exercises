import React from 'react';
import StateDisplay from './displayState'
import { useSelector, useDispatch } from "react-redux";

import { increment, decrement } from './actions/index';

//tutorial found at: https://www.youtube.com/results?search_query=react+redux+tutorial

function App() {

  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>
        hello project, test test
      </h1>
      <h1>
        count: {count}
      </h1>
      <h2>
        <button onClick={() => dispatch(increment(5))}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </h2>
      {
        //<StateDisplay />
        //read https://itnext.io/dispatching-actions-from-child-components-bd292a51f176 for ideas on how to get this working
      }
    </div>
  );
}

export default App;
