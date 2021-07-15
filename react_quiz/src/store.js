import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk'
// import rootReducer from './reducers'
import combineReducers from "./reducers";

const initialState = {};

// const middleware = [thunk];

const store = createStore(
    combineReducers,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;