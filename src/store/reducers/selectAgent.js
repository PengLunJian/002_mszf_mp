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
    const items = action.data || [];
    const data = items.map((item) => {
      return {
        ...item,
        checked: false
      };
    });
    return {
      ...state,
      isLoading: false,
      isSuccess: true,
      isFailure: false,
      data
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
    const newData = {
      ...params.data,
      checked: false
    };
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
    const data = oldData.map((item) => {
      const {checked} = item;
      const flag = newData.checked === undefined;
      const result = flag ? {...newData, checked} : newData;
      return item.id === newData.id ? result : item;
    });
    return {
      ...state,
      data
    };
  },
  [actionTypes.REMOVE_AGENT_REPLACE](state) {
    const oldData = state.data || [];
    const data = oldData.map((item) => {
      return {...item, checked: false};
    });
    return {
      ...state,
      data
    };
  }
};

const SELECT_AGENT_REDUCER = handleActions(actions, states.SELECT_AGENT_STATE);

export default SELECT_AGENT_REDUCER;
