import {handleActions} from 'redux-actions';
import * as actionTypes from '../actionTypes';
import * as states from '../states';

const actions = {
  [actionTypes.SELECT_BUSINESS_REQUEST](state) {
    return {
      ...state,
      isLoading: true,
      isSuccess: false,
      isFailure: false,
      data: null
    };
  },
  [actionTypes.SELECT_BUSINESS_SUCCESS](state, action) {
    return {
      ...state,
      isLoading: false,
      isSuccess: true,
      isFailure: false,
      data: action.data
    };
  },
  [actionTypes.SELECT_BUSINESS_FAILURE](state) {
    return {
      ...state,
      isLoading: false,
      isSuccess: false,
      isFailure: true
    };
  }
};

const SELECT_BUSINESS_REDUCER = handleActions(actions, states.SELECT_BUSINESS_STATE);

export default SELECT_BUSINESS_REDUCER;
