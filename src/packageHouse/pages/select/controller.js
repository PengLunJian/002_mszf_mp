import * as actions from '../../../store/actions';

export const STATES = {
  isLoading: state => state.SELECT_HOUSE_REDUCER.isLoading,
  isSuccess: state => state.SELECT_HOUSE_REDUCER.isSuccess,
  isFailure: state => state.SELECT_HOUSE_REDUCER.isFailure,
  isHouse: state => state.SELECT_HOUSE_REDUCER.data,
  isLogin: state => state.SELECT_LOGIN_REDUCER.data
};

export const ACTIONS = {
  removeHouseReplace: actions.removeHouseReplace,
  ajaxSelectHouse: params => actions.ajaxRequestSelectHouse(params),
  ajaxDeleteHouse: params => actions.ajaxRequestDeleteHouse(params)
};
