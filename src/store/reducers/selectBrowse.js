import {handleActions} from 'redux-actions';
import * as actionTypes from '../actionTypes';
import * as states from '../states';

const actions = {
  [actionTypes.SELECT_BROWSE_REQUEST](state) {
    return {
      ...state,
      isLoading: true,
      isSuccess: false,
      isFailure: false
    };
  },
  [actionTypes.SELECT_BROWSE_SUCCESS](state, action) {
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
  [actionTypes.SELECT_BROWSE_FAILURE](state) {
    return {
      ...state,
      isLoading: false,
      isSuccess: false,
      isFailure: true
    };
  },
  [actionTypes.UPDATE_BROWSE_REPLACE](state, params) {
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
  [actionTypes.REMOVE_BROWSE_REPLACE](state) {
    return {
      ...state,
      isLoading: false,
      isSuccess: false,
      isFailure: false,
      data: null
    };
  }
};

const SELECT_BROWSE_REDUCER = handleActions(actions, states.SELECT_BROWSE_STATE);

export default SELECT_BROWSE_REDUCER;
