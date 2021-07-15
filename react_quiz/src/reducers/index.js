import { combineReducers } from 'redux'
import  newsReducer  from './news'
import authReducer from './auth'

export default combineReducers({
    newsReducer,
    authReducer,

})