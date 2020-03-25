import * as actions from '../../../../store/actions';

export const STATES = {
  isLoading: state => state.INSERT_HOUSE_REDUCER.isLoading,
  isSuccess: state => state.INSERT_HOUSE_REDUCER.isSuccess,
  isFailure: state => state.INSERT_HOUSE_REDUCER.isFailure,
  isData: state => state.INSERT_HOUSE_REDUCER.data,
  isAgent: state => state.SELECT_AGENT_REDUCER.data,
  isImage: state => state.INSERT_IMAGE_REDUCER.data
};

export const ACTIONS = {
  ajaxInsertHouse: params => actions.ajaxRequestInsertHouse(params),
  removeImageReplace: () => actions.removeImageReplace()
};
