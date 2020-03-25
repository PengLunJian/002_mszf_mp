import {handleActions} from 'redux-actions';
import * as actionTypes from '../actionTypes';
import * as states from '../states';

const actions = {
  [actionTypes.INSERT_IMAGE_REQUEST](state) {
    return {
      ...state,
      isLoading: true,
      isSuccess: false,
      isFailure: false
    };
  },
  [actionTypes.INSERT_IMAGE_SUCCESS](state, action) {
    return {
      ...state,
      isLoading: false,
      isSuccess: true,
      isFailure: false,
      data: action.data
    };
  },
  [actionTypes.INSERT_IMAGE_FAILURE](state) {
    return {
      ...state,
      isLoading: false,
      isSuccess: false,
      isFailure: true
    };
  },
  [actionTypes.REMOVE_IMAGE_REPLACE](state) {
    return {
      ...state,
      data: null
    };
  }
};

const INSERT_IMAGE_REDUCER = handleActions(actions, states.INSERT_IMAGE_STATE);

export default INSERT_IMAGE_REDUCER;
