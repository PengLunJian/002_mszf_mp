import {combineReducers} from 'redux';
import LOGIN_REDUCER from './login';
import HOUSE_REDUCER from './house';
import INSERT_HOUSE_REDUCER from './insertHouse';

export default combineReducers({
  LOGIN_REDUCER,
  HOUSE_REDUCER,
  INSERT_HOUSE_REDUCER
});
