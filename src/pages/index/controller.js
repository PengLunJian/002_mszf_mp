import * as actions from '../../store/actions';

export const STATES = {
  isLoading: state => state.SELECT_INDEX_REDUCER.isLoading,
  isSuccess: state => state.SELECT_INDEX_REDUCER.isSuccess,
  isFailure: state => state.SELECT_INDEX_REDUCER.isFailure,
  isData: state => state.SELECT_INDEX_REDUCER.data
};

export const ACTIONS = {
  ajaxSelectIndex: () => actions.ajaxRequestSelectIndex(),
  ajaxSelectAgent: () => actions.ajaxRequestSelectAgent()
};
