import * as actions from '../../store/actions';
import * as actionTypes from '../../store/actionTypes';

export const STATES = {
  isLoading: state => state.SELECT_HOUSE_REDUCER.isLoading,
  isSuccess: state => state.SELECT_HOUSE_REDUCER.isSuccess,
  isFailure: state => state.SELECT_HOUSE_REDUCER.isFailure,
  isData: state => state.SELECT_HOUSE_REDUCER.data
};

export const ACTIONS = {
  resetSelectHouse: actionTypes.RESET_SELECT_HOUSE,
  ajaxSelectHouse: params => actions.ajaxRequestSelectHouse(params)
};
