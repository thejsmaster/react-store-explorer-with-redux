import React from 'react';
import { createStore } from 'redux';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { StoreExplorer } from 'react-store-explorer';

// Action Types
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

// Action Creators
const increment = () => ({ type: INCREMENT });
const decrement = () => ({ type: DECREMENT });

// Initial State
const initialState = {
  count: 0,
};

// Reducer
const counterReducer = (state = initialState, action: { type: string }) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

// Store
const store = createStore(counterReducer);

// Counter Component
const Counter = () => {
  const count = useSelector((state: { count: number }) => state.count);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', width: '100%' }}>
      <h3>Counter: {count}</h3>
      <button
        onClick={() => dispatch(increment())}
        style={{ fontSize: '20px', marginRight: '10px' }}
      >
        +
      </button>
      <button
        onClick={() => dispatch(decrement())}
        style={{ fontSize: '20px', marginLeft: '10px' }}
      >
        -
      </button>
    </div>
  );
};

// App Component
const App = () => {
  return (
    <Provider store={store}>
      <StoreExplorer stores={{ store }} from="redux">
        <Counter />
      </StoreExplorer>
    </Provider>
  );
};

export default App;
