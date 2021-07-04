import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
import rootReducer from "./redux/rootReducer";
import {createStore} from "redux";
import {Provider} from 'react-redux'

const store = createStore(rootReducer)

const application = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(application, document.getElementById('root'));


reportWebVitals();
