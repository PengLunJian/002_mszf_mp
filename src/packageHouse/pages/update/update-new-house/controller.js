import * as actions from '../../../../store/actions';

export const STATES = {
  isLoading: state => state.UPDATE_HOUSE_REDUCER.isLoading,
  isSuccess: state => state.UPDATE_HOUSE_REDUCER.isSuccess,
  isFailure: state => state.UPDATE_HOUSE_REDUCER.isFailure,
  isData: state => state.UPDATE_HOUSE_REDUCER.data,
  isAgent: state => state.SELECT_AGENT_REDUCER.data,
  isLayout: state => state.SELECT_LAYOUT_REDUCER.data
};

export const ACTIONS = {
  ajaxUpdateHouse: params => actions.ajaxRequestUpdateHouse(params),
  ajaxInsertImage: params => actions.ajaxRequestInsertImage(params),
  deleteLayoutReplace: params => actions.deleteLayoutReplace(params),
  selectLayoutReplace: params => actions.selectLayoutReplace(params)
};