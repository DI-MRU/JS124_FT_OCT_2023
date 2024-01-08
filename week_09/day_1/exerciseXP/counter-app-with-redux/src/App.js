import React from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import './App.css'

import Counter from './components/counter'
import counterReducer from './reducers/index'

const store = createStore(counterReducer)

function App() {
  return (
    <Provider store={store}>
    <div className='counter'><Counter /></div>    
      
    </Provider>
  );
}

export default App;
