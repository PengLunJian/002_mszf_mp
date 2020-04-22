import * as actions from '../../store/actions';

export const STATES = {
  isLoading: state => state.SELECT_COUNT_REDUCER.isLoading,
  isSuccess: state => state.SELECT_COUNT_REDUCER.isSuccess,
  isFailure: state => state.SELECT_COUNT_REDUCER.isFailure,
  isCount: state => state.SELECT_COUNT_REDUCER.data,
  isLogin: state => state.SELECT_LOGIN_REDUCER.data
};

export const ACTIONS = {
  ajaxSelectBusiness: params => actions.ajaxRequestSelectBusiness(params),
  ajaxSelectCount: params => actions.ajaxRequestSelectCount(params),
  ajaxSelectAgent: params => actions.ajaxRequestSelectAgent(params)
};
