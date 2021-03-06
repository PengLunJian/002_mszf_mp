import * as actions from '../../../store/actions';

export const STATES = {
  isLoading: state => state.INSERT_AGENT_REDUCER.isLoading,
  isSuccess: state => state.INSERT_AGENT_REDUCER.isSuccess,
  isFailure: state => state.INSERT_AGENT_REDUCER.isFailure,
  isAgent: state => state.INSERT_AGENT_REDUCER.data,
  isLogin: state => state.SELECT_LOGIN_REDUCER.data,
  isImage: state => state.INSERT_IMAGE_REDUCER.data
};

export const ACTIONS = {
  ajaxInsertAgent: params => actions.ajaxRequestInsertAgent(params),
  removeImageReplace: actions.removeImageReplace
};
