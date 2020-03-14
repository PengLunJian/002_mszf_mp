import * as actions from '../../../../store/actions';

export const STATES = {
  isLoading: state => state.SELECT_HOUSE_DETAIL_REDUCER.isLoading,
  isSuccess: state => state.SELECT_HOUSE_DETAIL_REDUCER.isSuccess,
  isFailure: state => state.SELECT_HOUSE_DETAIL_REDUCER.isFailure,
  isData: state => state.SELECT_HOUSE_DETAIL_REDUCER.data
};

export const ACTIONS = {
  ajaxUpdateHouse: params => actions.ajaxRequestUpdateHouse(params),
  ajaxUploadImage: params => actions.ajaxRequestUploadImage(params),
  ajaxSelectHouseDetail: params => actions.ajaxRequestSelectHouseDetail(params)
};
