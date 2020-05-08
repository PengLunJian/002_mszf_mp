import {handleActions} from 'redux-actions';
import * as actionTypes from '../actionTypes';
import * as states from '../states';

const actions = {
  [actionTypes.SELECT_FOLLOW_REQUEST](state) {
    return {
      ...state,
      isLoading: true,
      isSuccess: false,
      isFailure: false
    };
  },
  [actionTypes.SELECT_FOLLOW_SUCCESS](state, action) {
    const oldData = state.data || {};
    const oldRows = oldData.rows || [];
    const newData = action.data || {};
    const newRows = newData.rows || [];
    action.data.rows = oldRows.concat(newRows);
    return {
      ...state,
      isLoading: false,
      isSuccess: true,
      isFailure: false,
      data: action.data
    };
  },
  [actionTypes.SELECT_FOLLOW_FAILURE](state) {
    return {
      ...state,
      isLoading: false,
      isSuccess: false,
      isFailure: true
    };
  },
  [actionTypes.UPDATE_FOLLOW_REPLACE](state, params) {
    if (!state.data) return {state, data: null};
    let {rows, totalCount} = state.data;
    const newData = params.data;
    const {id} = newData;
    rows.map((item, index) => {
      if (item.id === id) {
        rows[index] = newData;
      }
    });
    const data = {rows, totalCount};
    return {
      ...state,
      data
    };
  },
  [actionTypes.REMOVE_FOLLOW_REPLACE](state) {
    return {
      ...state,
      isLoading: false,
      isSuccess: false,
      isFailure: false,
      data: null
    };
  }
};

const SELECT_FOLLOW_REDUCER = handleActions(actions, states.SELECT_FOLLOW_STATE);

export default SELECT_FOLLOW_REDUCER;
