import * as actions from '../../../../store/actions';

export const STATES = {
  isLoading: state => state.INSERT_HOUSE_REDUCER.isLoading,
  isSuccess: state => state.INSERT_HOUSE_REDUCER.isSuccess,
  isFailure: state => state.INSERT_HOUSE_REDUCER.isFailure,
  isData: state => state.INSERT_HOUSE_REDUCER.data
};

export const ACTIONS = {
  ajaxInsertHouse: params => actions.ajaxRequestInsertHouse(params),
  ajaxUploadImage: params => actions.ajaxRequestUploadImage(params)
};
