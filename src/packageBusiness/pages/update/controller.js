import * as actions from '../../../store/actions';

export const STATES = {
  isLoading: state => state.UPDATE_BUSINESS_REDUCER.isLoading,
  isSuccess: state => state.UPDATE_BUSINESS_REDUCER.isSuccess,
  isFailure: state => state.UPDATE_BUSINESS_REDUCER.isFailure,
  isData: state => state.UPDATE_BUSINESS_REDUCER.data
};

export const ACTIONS = {
  ajaxUpdateBusiness: params => actions.ajaxRequestUpdateBusiness(params)
};
