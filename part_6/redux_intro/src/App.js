import React from 'react';
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import './App.css';

const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state -1 
        case 'ZERO':
            return 0
        default:
            return state;
    }
}

const store = createStore(counterReducer)

// store.subscribe(() => {
//   const storeNow = store.getState()
//   console.log(storeNow)
// })

const App = () => {
  return (
    <div>
      <div>{store.getState()}</div>
      <div>
        <button 
        onClick={e => store.dispatch({ type: 'INCREMENT'})}
        >Plus</button>
      </div>
      <div>
        <button 
        onClick={e => store.dispatch({ type: 'DECREMENT'})}
        >Minus</button>
      </div>
      <div>
        <button 
        onClick={e => store.dispatch({ type: 'ZERO'})}
        >Zero</button>
      </div>
    </div>
  );
}

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}

renderApp()
store.subscribe(renderApp)
export default App;
