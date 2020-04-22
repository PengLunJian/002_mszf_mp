import * as actions from '../../../store/actions';

export const STATES = {
  isLoading: state => state.UPDATE_BUSINESS_REDUCER.isLoading,
  isSuccess: state => state.UPDATE_BUSINESS_REDUCER.isSuccess,
  isFailure: state => state.UPDATE_BUSINESS_REDUCER.isFailure,
  isBusiness: state => state.SELECT_BUSINESS_REDUCER.data,
  isLogin: state => state.SELECT_LOGIN_REDUCER.data,
  isImage: state => state.INSERT_IMAGE_REDUCER.data
};

export const ACTIONS = {
  ajaxUpdateBusiness: params => actions.ajaxRequestUpdateBusiness(params),
  removeImageReplace: actions.removeImageReplace
};
