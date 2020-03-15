import * as actions from '../../../store/actions';

export const STATES = {
  isLoading: state => state.UPDATE_AGENT_REDUCER.isLoading,
  isSuccess: state => state.UPDATE_AGENT_REDUCER.isSuccess,
  isFailure: state => state.UPDATE_AGENT_REDUCER.isFailure,
  isData: state => state.UPDATE_AGENT_REDUCER.data
};

export const ACTIONS = {
  ajaxUpdateAgent: params => actions.ajaxRequestUpdateAgent(params),
  ajaxInsertImage: params => actions.ajaxRequestInsertImage(params)
};
