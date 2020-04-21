import * as actions from '../../../store/actions';

export const STATES = {
  isLoading: state => state.SELECT_AGENT_REDUCER.isLoading,
  isSuccess: state => state.SELECT_AGENT_REDUCER.isSuccess,
  isFailure: state => state.SELECT_AGENT_REDUCER.isFailure,
  isAgent: state => state.SELECT_AGENT_REDUCER.data,
  isLogin: state => state.SELECT_LOGIN_REDUCER.data
};

export const ACTIONS = {
  ajaxSelectAgent: params => actions.ajaxRequestSelectAgent(params),
  ajaxDeleteAgent: params => actions.ajaxRequestDeleteAgent(params)
};
