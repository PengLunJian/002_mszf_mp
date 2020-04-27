import {handleActions} from 'redux-actions';
import * as actionTypes from '../actionTypes';
import * as states from '../states';

const actions = {
  [actionTypes.SELECT_COUNT_REQUEST](state) {
    return {
      ...state,
      isLoading: true,
      isSuccess: false,
      isFailure: false
    };
  },
  [actionTypes.SELECT_COUNT_SUCCESS](state, action) {
    return {
      ...state,
      isLoading: false,
      isSuccess: true,
      isFailure: false,
      data: action.data
    };
  },
  [actionTypes.SELECT_COUNT_FAILURE](state) {
    return {
      ...state,
      isLoading: false,
      isSuccess: false,
      isFailure: true
    };
  },
  [actionTypes.INSERT_HOUSE_REPLACE](state, params) {
    const data = state.data;
    const newData = params.data;
    const {type} = newData;
    data[type - 1].totalCount++;
    return {
      ...state,
      data
    };
  },
  [actionTypes.DELETE_HOUSE_REPLACE](state, params) {
    const data = state.data;
    const {type} = params.data;
    data[type - 1].totalCount--;
    return {
      ...state,
      data
    };
  }
};

const SELECT_COUNT_REDUCER = handleActions(actions, states.SELECT_COUNT_STATE);

export default SELECT_COUNT_REDUCER;
