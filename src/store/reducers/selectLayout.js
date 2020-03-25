import {handleActions} from 'redux-actions';
import * as actionTypes from '../actionTypes';
import * as states from '../states';

const actions = {
  [actionTypes.INSERT_LAYOUT_REPLACE](state, params) {
    const {data} = state;
    data.push(params.data);
    return {
      ...state,
      data
    };
  },
  [actionTypes.DELETE_LAYOUT_REPLACE](state, params) {
    const {data} = state;
    const index = params.data;
    data.splice(index, 1);
    return {
      ...state,
      data
    };
  },
  [actionTypes.UPDATE_LAYOUT_REPLACE](state, params) {
    const {data} = state;
    const newData = params.data.data;
    const index = params.data.index;
    data[index] = newData;
    return {
      ...state,
      data
    };
  },
  [actionTypes.SELECT_LAYOUT_REPLACE](state, params) {
    const {data} = params;
    return {
      ...state,
      data
    };
  },
  [actionTypes.REMOVE_LAYOUT_REPLACE](state) {
    return {
      ...state,
      data: []
    };
  }
};

const SELECT_LAYOUT_REDUCER = handleActions(actions, states.SELECT_LAYOUT_STATE);

export default SELECT_LAYOUT_REDUCER;
