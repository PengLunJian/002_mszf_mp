import {handleActions} from 'redux-actions';
import * as actionTypes from '../actionTypes';
import * as states from '../states';

const actions = {
  [actionTypes.UPDATE_HOUSE_REQUEST](state) {
    return {
      ...state,
      isLoading: true,
      isSuccess: false,
      isFailure: false
    };
  },
  [actionTypes.UPDATE_HOUSE_SUCCESS](state, action) {
    return {
      ...state,
      isLoading: false,
      isSuccess: true,
      isFailure: false,
      data: action.data
    };
  },
  [actionTypes.UPDATE_HOUSE_FAILURE](state) {
    return {
      ...state,
      isLoading: false,
      isSuccess: false,
      isFailure: true
    };
  }
};

const UPDATE_HOUSE_REDUCER = handleActions(actions, states.UPDATE_HOUSE_STATE);

export default UPDATE_HOUSE_REDUCER;
