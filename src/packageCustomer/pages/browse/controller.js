import * as actions from '../../../store/actions';

export const STATES = {
  isLoading: state => state.SELECT_BROWSE_REDUCER.isLoading,
  isSuccess: state => state.SELECT_BROWSE_REDUCER.isSuccess,
  isFailure: state => state.SELECT_BROWSE_REDUCER.isFailure,
  isRecord: state => state.SELECT_BROWSE_REDUCER.data,
  isLogin: state => state.SELECT_LOGIN_REDUCER.data
};

export const ACTIONS = {
  removeBrowseReplace: actions.removeBrowseReplace,
  ajaxSelectBrowse: params => actions.ajaxRequestSelectBrowse(params)
};
