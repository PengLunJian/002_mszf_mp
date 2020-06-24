import * as actions from '../../../store/actions';

export const STATES = {
  isLogin: state => state.SELECT_LOGIN_REDUCER.data
};

export const ACTIONS = {
  ajaxUpdatePassword: params => actions.ajaxRequestUpdatePassword(params)
};
