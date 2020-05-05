import * as actions from '../../../store/actions';

export const STATES = {
  isLoading: state => state.SELECT_FOLLOW_REDUCER.isLoading,
  isSuccess: state => state.SELECT_FOLLOW_REDUCER.isSuccess,
  isFailure: state => state.SELECT_FOLLOW_REDUCER.isFailure,
  isRecord: state => state.SELECT_FOLLOW_REDUCER.data,
  isLogin: state => state.SELECT_LOGIN_REDUCER.data
};

export const ACTIONS = {
  removeFollowReplace: actions.removeFollowReplace,
  ajaxSelectFollow: params => actions.ajaxRequestSelectFollow(params)
};
