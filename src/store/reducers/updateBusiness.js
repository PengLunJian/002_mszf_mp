import {handleActions} from 'redux-actions';
import * as actionTypes from '../actionTypes';
import * as states from '../states';

const actions = {
  [actionTypes.UPDATE_BUSINESS_REQUEST](state) {
    return {
      ...state,
      isLoading: true,
      isSuccess: false,
      isFailure: false,
      data: null
    };
  },
  [actionTypes.UPDATE_BUSINESS_SUCCESS](state, action) {
    return {
      ...state,
      isLoading: false,
      isSuccess: true,
      isFailure: false,
      data: action.data
    };
  },
  [actionTypes.UPDATE_BUSINESS_FAILURE](state) {
    return {
      ...state,
      isLoading: false,
      isSuccess: false,
      isFailure: true
    };
  }
};

const UPDATE_BUSINESS_REDUCER = handleActions(actions, states.UPDATE_BUSINESS_STATE);

export default UPDATE_BUSINESS_REDUCER;
