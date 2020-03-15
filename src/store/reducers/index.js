import {combineReducers} from 'redux';
import SELECT_LOGIN_REDUCER from './selectLogin';
import INSERT_IMAGE_REDUCER from './insertImage';
import INSERT_HOUSE_REDUCER from './insertHouse';
import DELETE_HOUSE_REDUCER from './deleteHouse';
import UPDATE_HOUSE_REDUCER from './updateHouse';
import SELECT_HOUSE_REDUCER from './selectHouse';
import INSERT_AGENT_REDUCER from './insertAgent';
import DELETE_AGENT_REDUCER from './deleteAgent';
import UPDATE_AGENT_REDUCER from './updateAgent';
import SELECT_AGENT_REDUCER from './selectAgent';
import SELECT_HOUSE_DETAIL_REDUCER from './houseDetail';
import SELECT_AGENT_DETAIL_REDUCER from './agentDetail';

export default combineReducers({
  SELECT_LOGIN_REDUCER,
  INSERT_IMAGE_REDUCER,
  INSERT_HOUSE_REDUCER,
  DELETE_HOUSE_REDUCER,
  UPDATE_HOUSE_REDUCER,
  SELECT_HOUSE_REDUCER,
  INSERT_AGENT_REDUCER,
  DELETE_AGENT_REDUCER,
  UPDATE_AGENT_REDUCER,
  SELECT_AGENT_REDUCER,
  SELECT_HOUSE_DETAIL_REDUCER,
  SELECT_AGENT_DETAIL_REDUCER
});
