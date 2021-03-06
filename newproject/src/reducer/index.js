import {combineReducers} from 'redux';
import userReducer from './userReducer';
import errorReducer from './errorReducer';
import loading from './loading'

export default combineReducers({
  auth: userReducer,
  error: errorReducer,
  loading
})