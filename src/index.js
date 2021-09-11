import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga'
import './index.css';
import App from './App';
import {reducer} from './Redux/reducer'
import reportWebVitals from './reportWebVitals';
import { watchColor } from './Redux/saga';

const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducer,applyMiddleware(sagaMiddleware))
sagaMiddleware.run(watchColor);
ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
