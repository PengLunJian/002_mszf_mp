import {handleActions} from 'redux-actions';
import * as actionTypes from '../actionTypes';
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
  [actionTypes.INSERT_HOUSE_REPLACE](state, params) {
    const oldData = state.data;
    const newData = params.data;
    const {resNew, resSecond, resRent} = oldData;
    switch (newData.type) {
      case 1:
        resNew.data.rows.unshift(newData);
        resNew.data.totalCount++;
        break;
      case 2:
        resSecond.data.rows.unshift(newData);
        resSecond.data.totalCount++;
        break;
      case 3:
        resRent.data.rows.unshift(newData);
        resRent.data.totalCount++;
        break;
    }
    const data = {resNew, resSecond, resRent};
    return {
      ...state,
      data
    };
  },
  [actionTypes.DELETE_HOUSE_REPLACE](state, params) {
    const oldData = state.data;
    const {id, type} = params.data;
    let {resNew, resSecond, resRent} = oldData;
    switch (type) {
      case 1:
        const resNewRows = resNew.data.rows.filter((item) => {
          return item.id !== id;
        });
        resNew.data.totalCount--;
        resNew.data.rows = resNewRows;
        break;
      case 2:
        const resSecondRows = resSecond.data.rows.filter((item) => {
          return item.id !== id;
        });
        resSecond.data.totalCount--;
        resSecond.data.rows = resSecondRows;
        break;
      case 3:
        const resRentRows = resRent.data.rows.filter((item) => {
          return item.id !== id;
        });
        resRent.data.totalCount--;
        resRent.data.rows = resRentRows;
        break;
    }
    const data = {resNew, resSecond, resRent};
    return {
      ...state,
      data
    };
  }
};

const SELECT_INDEX_REDUCER = handleActions(actions, states.SELECT_INDEX_STATE);

export default SELECT_INDEX_REDUCER;
