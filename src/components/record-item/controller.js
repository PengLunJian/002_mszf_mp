import * as actions from '../../store/actions';

export const STATES = {
  isLoading: state => state.UPDATE_HOUSE_REDUCER.isLoading,
  isSuccess: state => state.UPDATE_HOUSE_REDUCER.isSuccess,
  isFailure: state => state.UPDATE_HOUSE_REDUCER.isFailure,
  isHouse: state => state.UPDATE_HOUSE_REDUCER.data,
  isLogin: state => state.SELECT_LOGIN_REDUCER.data
};

export const ACTIONS = {
  ajaxUpdateHouse: params => actions.ajaxRequestUpdateHouse(params)
};
