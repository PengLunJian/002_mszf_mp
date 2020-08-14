import * as actions from '../../store/actions';

export const STATES = {
  isLoading: state => state.SELECT_LOGIN_REDUCER.isLoading,
  isSuccess: state => state.SELECT_LOGIN_REDUCER.isSuccess,
  isFailure: state => state.SELECT_LOGIN_REDUCER.isFailure,
  isRegister: state => state.INSERT_REGISTER_REDUCER.data,
  isLogin: state => state.SELECT_LOGIN_REDUCER.data,
  isVcode: state => state.SELECT_VCODE_REDUCER.data
};

export const ACTIONS = {
  ajaxSelectLogin: params => actions.ajaxRequestSelectLogin(params),
  ajaxSelectVcode: params => actions.ajaxRequestSelectVcode(params),
  ajaxInsertRegister: params => actions.ajaxRequestInsertRegister(params)
};
