import {combineReducers} from 'redux';
import LOGIN_REDUCER from './login';
import HOUSE_REDUCER from './house';
import INSERT_HOUSE_REDUCER from './insertHouse';
import UPLOAD_IMAGE_REDUCER from './uploadImage';

export default combineReducers({
  LOGIN_REDUCER,
  HOUSE_REDUCER,
  INSERT_HOUSE_REDUCER,
  UPLOAD_IMAGE_REDUCER
});
