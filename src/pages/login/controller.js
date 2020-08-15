import * as actions from '../../store/actions';

export const STATES = {
  isLoading: state => state.SELECT_LOGIN_REDUCER.isLoading,
  isSuccess: state => state.SELECT_LOGIN_REDUCER.isSuccess,
  isFailure: state => state.SELECT_LOGIN_REDUCER.isFailure,
  isBusiness: state => state.INSERT_BUSINESS_REDUCER.data,
  isLogin: state => state.SELECT_LOGIN_REDUCER.data,
  isVcode: state => state.SELECT_VCODE_REDUCER.data
};

export const ACTIONS = {
  ajaxSelectLogin: params => actions.ajaxRequestSelectLogin(params),
  ajaxSelectVcode: params => actions.ajaxRequestSelectVcode(params),
  ajaxInsertBusiness: params => actions.ajaxRequestInsertBusiness(params)
};
