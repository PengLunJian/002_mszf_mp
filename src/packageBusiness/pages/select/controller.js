import * as actions from '../../../store/actions';

export const STATES = {
  isLoading: state => state.SELECT_BUSINESS_REDUCER.isLoading,
  isSuccess: state => state.SELECT_BUSINESS_REDUCER.isSuccess,
  isFailure: state => state.SELECT_BUSINESS_REDUCER.isFailure,
  isBusiness: state => state.SELECT_BUSINESS_REDUCER.data,
  isLogin: state => state.SELECT_LOGIN_REDUCER.data,
  isImage: state => state.INSERT_IMAGE_REDUCER.data
};

export const ACTIONS = {
  ajaxSelectBusiness: params => actions.ajaxRequestSelectBusiness(params),
  removeImageReplace: actions.removeImageReplace
};
