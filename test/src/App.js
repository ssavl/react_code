import React from "react";
import './App.css';
import {connect, Provider} from "react-redux";

import {createStore, applyMiddleware} from "redux";
import rootReducer from './reducers'
import Counter from "./Counter";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";

const store = createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(thunk)))

function App(props) {
    return (
        <Provider store={store}>
            <Counter/>
        </Provider>

    )
}

const handleAdd = () => dispatch => dispatch({type: "ADD"})

export default App;
