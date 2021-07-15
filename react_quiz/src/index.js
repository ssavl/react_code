import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
import combineReducers from './reducers'
import rootReducer from "./redux/rootReducer";
import {createStore, applyMiddleware} from "redux";
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension';
import store from './store'

// export const store = createStore(combineReducers, composeWithDevTools(applyMiddleware(thunk)))

const application = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(application, document.getElementById('root'));


reportWebVitals();
