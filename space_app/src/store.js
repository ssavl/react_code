import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension'

import RootReducer from './reducer'

const store = createStore(RootReducer, {}, composeWithDevTools(applyMiddleware(thunk)))

export default store;