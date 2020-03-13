import {combineReducers} from 'redux';
import LOGIN_REDUCER from './login';
import SELECT_HOUSE_REDUCER from './house';
import INSERT_HOUSE_REDUCER from './insertHouse';
import DELETE_HOUSE_REDUCER from './deleteHouse';
import UPDATE_HOUSE_REDUCER from './updateHouse';
import UPLOAD_IMAGE_REDUCER from './uploadImage';
import SELECT_HOUSE_DETAIL_REDUCER from './houseDetail';

export default combineReducers({
  LOGIN_REDUCER,
  INSERT_HOUSE_REDUCER,
  DELETE_HOUSE_REDUCER,
  UPDATE_HOUSE_REDUCER,
  SELECT_HOUSE_REDUCER,
  UPLOAD_IMAGE_REDUCER,
  SELECT_HOUSE_DETAIL_REDUCER
});
