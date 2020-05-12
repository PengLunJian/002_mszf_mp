import * as actions from '../../store/actions';

export const STATES = {
  isCount: state => state.SELECT_COUNT_REDUCER.data,
  isAgent: state => state.SELECT_AGENT_REDUCER.data,
  isLogin: state => state.SELECT_LOGIN_REDUCER.data
};

export const ACTIONS = {
  ajaxSelectCount: params => actions.ajaxRequestSelectCount(params),
  ajaxSelectAgent: params => actions.ajaxRequestSelectAgent(params)
};
