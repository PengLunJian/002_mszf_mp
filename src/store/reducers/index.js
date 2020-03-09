import {combineReducers} from 'redux';
import LOGIN_REDUCER from './login';
import SELECT_HOUSE_REDUCER from './house';
import INSERT_HOUSE_REDUCER from './insertHouse';
import DELETE_HOUSE_REDUCER from './deleteHouse';
import UPLOAD_IMAGE_REDUCER from './uploadImage';

export default combineReducers({
  LOGIN_REDUCER,
  SELECT_HOUSE_REDUCER,
  INSERT_HOUSE_REDUCER,
  DELETE_HOUSE_REDUCER,
  UPLOAD_IMAGE_REDUCER
});
