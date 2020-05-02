import * as actions from '../../../store/actions';

export const STATES = {
  isLoading: state => state.SELECT_RECORD_REDUCER.isLoading,
  isSuccess: state => state.SELECT_RECORD_REDUCER.isSuccess,
  isFailure: state => state.SELECT_RECORD_REDUCER.isFailure,
  isRecord: state => state.SELECT_RECORD_REDUCER.data,
  isLogin: state => state.SELECT_LOGIN_REDUCER.data
};

export const ACTIONS = {
  removeRecordReplace: actions.removeRecordReplace,
  ajaxSelectBrowse: params => actions.ajaxRequestSelectBrowse(params),
  ajaxSelectFollow: params => actions.ajaxRequestSelectFollow(params)
};
