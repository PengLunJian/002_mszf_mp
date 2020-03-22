import * as actions from '../../../store/actions';

export const STATES = {
  isLoading: state => state.INSERT_IMAGE_REDUCER.isLoading,
  isSuccess: state => state.INSERT_IMAGE_REDUCER.isSuccess,
  isFailure: state => state.INSERT_IMAGE_REDUCER.isFailure,
  isData: state => state.INSERT_IMAGE_REDUCER.data,
  isLayout: state => state.SELECT_LAYOUT_REDUCER.data
};

export const ACTIONS = {
  ajaxInsertImage: params => actions.ajaxRequestInsertImage(params),
  insertLayoutReplace: params => actions.insertLayoutReplace(params),
  updateLayoutReplace: params => actions.updateLayoutReplace(params)
};
