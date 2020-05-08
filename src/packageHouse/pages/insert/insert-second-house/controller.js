import * as actions from '../../../../store/actions';

export const STATES = {
  isLoading: state => state.INSERT_HOUSE_REDUCER.isLoading,
  isSuccess: state => state.INSERT_HOUSE_REDUCER.isSuccess,
  isFailure: state => state.INSERT_HOUSE_REDUCER.isFailure,
  isHouse: state => state.INSERT_HOUSE_REDUCER.data,
  isAgent: state => state.SELECT_AGENT_REDUCER.data,
  isImage: state => state.INSERT_IMAGE_REDUCER.data,
  isLogin: state => state.SELECT_LOGIN_REDUCER.data
};

export const ACTIONS = {
  ajaxDeleteAgent: params => actions.ajaxRequestDeleteAgent(params),
  ajaxInsertHouse: params => actions.ajaxRequestInsertHouse(params),
  updateAgentReplace: params => actions.updateAgentReplace(params),
  removeImageReplace: actions.removeImageReplace,
  removeAgentReplace: actions.removeAgentReplace
};
