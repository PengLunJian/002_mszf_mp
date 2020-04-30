import * as actions from '../../../store/actions';

export const STATES = {
  isLoading: state => state.SELECT_CUSTOMER_REDUCER.isLoading,
  isSuccess: state => state.SELECT_CUSTOMER_REDUCER.isSuccess,
  isFailure: state => state.SELECT_CUSTOMER_REDUCER.isFailure,
  isCustomer: state => state.SELECT_CUSTOMER_REDUCER.data,
  isLogin: state => state.SELECT_LOGIN_REDUCER.data
};

export const ACTIONS = {
  ajaxSelectCustomer: params => actions.ajaxRequestSelectCustomer(params)
};
