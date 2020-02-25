import {combineReducers} from 'redux';
import LOGIN_REDUCER from './login';
import HOUSE_REDUCER from './house';

export default combineReducers({
  LOGIN_REDUCER,
  HOUSE_REDUCER
});
