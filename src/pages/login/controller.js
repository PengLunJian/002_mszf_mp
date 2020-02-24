import * as actions from '../../store/actions';

export const STATES = {
  isLoading: state => state.LOGIN_REDUCER.isLoading,
  isSuccess: state => state.LOGIN_REDUCER.isSuccess,
  isFailure: state => state.LOGIN_REDUCER.isFailure,
  isData: state => state.LOGIN_REDUCER.data
};

export const ACTIONS = {
  ajaxSelectLogin: params => actions.ajaxRequestSelectLogin(params)
};
