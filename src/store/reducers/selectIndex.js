import {handleActions} from 'redux-actions';
import * as actionTypes from '../actionTypes';
import * as utils from '../../utils';
import * as states from '../states';

const actions = {
  [actionTypes.SELECT_INDEX_REQUEST](state) {
    return {
      ...state,
      isLoading: true,
      isSuccess: false,
      isFailure: false
    };
  },
  [actionTypes.SELECT_INDEX_SUCCESS](state, action) {
    return {
      ...state,
      isLoading: false,
      isSuccess: true,
      isFailure: false,
      data: action.data
    };
  },
  [actionTypes.SELECT_INDEX_FAILURE](state) {
    return {
      ...state,
      isLoading: false,
      isSuccess: false,
      isFailure: true
    };
  },
  [actionTypes.UPDATE_INDEX_REPLACE](state) {
    return {
      ...state
    };
  }
};

const SELECT_INDEX_REDUCER = handleActions(actions, states.SELECT_INDEX_STATE);

export default SELECT_INDEX_REDUCER;
