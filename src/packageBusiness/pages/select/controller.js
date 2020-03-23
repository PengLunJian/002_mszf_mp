import * as actions from '../../../store/actions';

export const STATES = {
  isLoading: state => state.SELECT_BUSINESS_REDUCER.isLoading,
  isSuccess: state => state.SELECT_BUSINESS_REDUCER.isSuccess,
  isFailure: state => state.SELECT_BUSINESS_REDUCER.isFailure,
  isData: state => state.SELECT_BUSINESS_REDUCER.data
};

export const ACTIONS = {
  ajaxSelectBusiness: params => actions.ajaxRequestSelectBusiness(params)
};
