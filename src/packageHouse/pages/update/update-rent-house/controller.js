import * as actions from '../../../../store/actions';

export const STATES = {
  isLoading: state => state.UPDATE_HOUSE_REDUCER.isLoading,
  isSuccess: state => state.UPDATE_HOUSE_REDUCER.isSuccess,
  isFailure: state => state.UPDATE_HOUSE_REDUCER.isFailure,
  isData: state => state.UPDATE_HOUSE_REDUCER.data
};

export const ACTIONS = {
  ajaxUpdateHouse: params => actions.ajaxRequestUpdateHouse(params),
  ajaxInsertImage: params => actions.ajaxRequestInsertImage(params)
};
