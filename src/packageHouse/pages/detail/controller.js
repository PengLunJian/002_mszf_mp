import * as actions from '../../../store/actions';
import * as actionTypes from '../../../store/actionTypes';

export const STATES = {
  isLoading: state => state.HOUSE_REDUCER.isLoading,
  isSuccess: state => state.HOUSE_REDUCER.isSuccess,
  isFailure: state => state.HOUSE_REDUCER.isFailure,
  isData: state => state.HOUSE_REDUCER.data
};

export const ACTIONS = {
  clearSelectHouse: actionTypes.CLEAR_HOUSE_STATE,
  ajaxSelectHouse: params => actions.ajaxRequestSelectHouse(params)
};
