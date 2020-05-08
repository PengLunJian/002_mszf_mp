import {handleActions} from 'redux-actions';
import * as actionTypes from '../actionTypes';
import * as states from '../states';

const actions = {
  [actionTypes.SELECT_HOUSE_REQUEST](state) {
    return {
      ...state,
      isLoading: true,
      isSuccess: false,
      isFailure: false
    };
  },
  [actionTypes.SELECT_HOUSE_SUCCESS](state, action) {
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
  [actionTypes.SELECT_HOUSE_FAILURE](state) {
    return {
      ...state,
      isLoading: false,
      isSuccess: false,
      isFailure: true
    };
  },
  [actionTypes.INSERT_HOUSE_REPLACE](state, params) {
    let {rows, totalCount} = state.data;
    const newData = params.data;
    rows.unshift(newData);
    totalCount++;
    const data = {rows, totalCount};
    return {
      ...state,
      data
    };
  },
  [actionTypes.DELETE_HOUSE_REPLACE](state, params) {
    let {rows, totalCount} = state.data;
    const {id} = params.data;
    rows = rows.filter((item) => {
      return item.id !== id;
    });
    totalCount--;
    const data = {rows, totalCount};
    return {
      ...state,
      data
    };
  },
  [actionTypes.UPDATE_HOUSE_REPLACE](state, params) {
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
  [actionTypes.REMOVE_HOUSE_REPLACE](state) {
    return {
      ...state,
      isLoading: false,
      isSuccess: false,
      isFailure: false,
      data: null
    };
  }
};

const SELECT_HOUSE_REDUCER = handleActions(actions, states.SELECT_HOUSE_STATE);

export default SELECT_HOUSE_REDUCER;
