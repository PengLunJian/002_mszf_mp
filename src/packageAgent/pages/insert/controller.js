import * as actions from '../../../store/actions';

export const STATES = {
  isLoading: state => state.INSERT_AGENT_REDUCER.isLoading,
  isSuccess: state => state.INSERT_AGENT_REDUCER.isSuccess,
  isFailure: state => state.INSERT_AGENT_REDUCER.isFailure,
  isData: state => state.INSERT_AGENT_REDUCER.data
};

export const ACTIONS = {
  ajaxInsertAgent: params => actions.ajaxRequestInsertAgent(params)
};
