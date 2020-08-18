import {combineReducers} from 'redux';
import SELECT_LOGIN_REDUCER from './selectLogin';
import SELECT_VCODE_REDUCER from './selectVcode';
import INSERT_IMAGE_REDUCER from './insertImage';
import INSERT_HOUSE_REDUCER from './insertHouse';
import DELETE_HOUSE_REDUCER from './deleteHouse';
import UPDATE_HOUSE_REDUCER from './updateHouse';
import SELECT_HOUSE_REDUCER from './selectHouse';
import INSERT_AGENT_REDUCER from './insertAgent';
import DELETE_AGENT_REDUCER from './deleteAgent';
import UPDATE_AGENT_REDUCER from './updateAgent';
import SELECT_AGENT_REDUCER from './selectAgent';
import SELECT_COUNT_REDUCER from './selectCount';
import SELECT_LAYOUT_REDUCER from './selectLayout';
import SELECT_BROWSE_REDUCER from './selectBrowse';
import SELECT_FOLLOW_REDUCER from './selectFollow';
import INSERT_BUSINESS_REDUCER from './insertBusiness';
import UPDATE_BUSINESS_REDUCER from './updateBusiness';
import SELECT_BUSINESS_REDUCER from './selectBusiness';
import SELECT_CUSTOMER_REDUCER from './selectCustomer';
import SELECT_HOUSE_DETAIL_REDUCER from './selectHouseDetail';
import SELECT_AGENT_DETAIL_REDUCER from './selectAgentDetail';

export default combineReducers({
  SELECT_LOGIN_REDUCER,
  SELECT_VCODE_REDUCER,
  INSERT_IMAGE_REDUCER,
  INSERT_HOUSE_REDUCER,
  DELETE_HOUSE_REDUCER,
  UPDATE_HOUSE_REDUCER,
  SELECT_HOUSE_REDUCER,
  INSERT_AGENT_REDUCER,
  DELETE_AGENT_REDUCER,
  UPDATE_AGENT_REDUCER,
  SELECT_AGENT_REDUCER,
  SELECT_COUNT_REDUCER,
  SELECT_BROWSE_REDUCER,
  SELECT_FOLLOW_REDUCER,
  SELECT_LAYOUT_REDUCER,
  INSERT_BUSINESS_REDUCER,
  UPDATE_BUSINESS_REDUCER,
  SELECT_BUSINESS_REDUCER,
  SELECT_CUSTOMER_REDUCER,
  SELECT_HOUSE_DETAIL_REDUCER,
  SELECT_AGENT_DETAIL_REDUCER
});
