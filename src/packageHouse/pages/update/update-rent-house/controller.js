import * as actions from '../../../../store/actions';

export const STATES = {
  isLoading: state => state.UPDATE_HOUSE_REDUCER.isLoading,
  isSuccess: state => state.UPDATE_HOUSE_REDUCER.isSuccess,
  isFailure: state => state.UPDATE_HOUSE_REDUCER.isFailure,
  isData: state => state.UPDATE_HOUSE_REDUCER.data
};

export const ACTIONS = {
  ajaxSelectHouseDetail: params => actions.ajaxRequestSelectHouseDetail(params),
  ajaxUpdateHouse: params => actions.ajaxRequestUpdateHouse(params),
  ajaxUploadImage: params => actions.ajaxRequestUploadImage(params)
};
