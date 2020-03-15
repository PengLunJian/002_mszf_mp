import {handleActions} from 'redux-actions';
import * as actionTypes from '../actionTypes';
import * as states from '../states';

const actions = {
  [actionTypes.SELECT_AGENT_REQUEST](state) {
    return {
      ...state,
      isLoading: true,
      isSuccess: false,
      isFailure: false,
      data: null
    };
  },
  [actionTypes.SELECT_AGENT_SUCCESS](state, action) {
    return {
      ...state,
      isLoading: false,
      isSuccess: true,
      isFailure: false,
      data: action.data
    };
  },
  [actionTypes.SELECT_AGENT_FAILURE](state) {
    return {
      ...state,
      isLoading: false,
      isSuccess: false,
      isFailure: true
    };
  },
  [actionTypes.INSERT_AGENT_REPLACE](state, params) {
    const oldData = state.data || [];
    const newData = params.data;
    const data = oldData.concat(newData);
    return {
      ...state,
      data
    };
  },
  [actionTypes.DELETE_AGENT_REPLACE](state, params) {
    const oldData = state.data || [];
    const newData = params.data;
    const data = oldData.filter((item) => {
      return item.id !== newData.id;
    });
    return {
      ...state,
      data
    };
  },
  [actionTypes.UPDATE_AGENT_REPLACE](state, params) {
    const oldData = state.data || [];
    const newData = params.data;
    console.log(state);
    console.log(params);
    return {
      ...state
    };
  }
};

const SELECT_AGENT_REDUCER = handleActions(actions, states.SELECT_AGENT_STATE);

export default SELECT_AGENT_REDUCER;
