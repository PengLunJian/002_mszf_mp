import apis from '../apis';
import store from './index';
import axios from '../axios';
import * as actionTypes from './actionTypes';
import {createAction} from 'redux-actions';

/**
 *
 * @param type
 * @param data
 */
const commit = (type, data) => {
  store.dispatch({
    type,
    data
  });
};

export const ajaxRequestSelectLogin = createAction(
  'selectLogin', (params) => {
    commit(actionTypes.SELECT_LOGIN_REQUEST);
    return new Promise((resolve, reject) => {
      axios.post(apis.selectLogin, params)
        .then((res) => {
          res = res || {};
          const {data, success} = res;
          if (success) {
            commit(actionTypes.SELECT_LOGIN_SUCCESS, data);
          } else {
            commit(actionTypes.SELECT_LOGIN_FAILURE);
          }
          resolve(res);
        })
        .catch((err) => {
          commit(actionTypes.SELECT_LOGIN_FAILURE);
          reject(err);
        });
    });
  });

export const ajaxRequestInsertHouse = createAction(
  'insertHouse', (params) => {
    commit(actionTypes.INSERT_HOUSE_REQUEST);
    return new Promise((resolve, reject) => {
      axios.post(apis.insertHouse, params)
        .then((res) => {
          res = res || {};
          const {data, success} = res;
          if (success) {
            commit(actionTypes.INSERT_HOUSE_SUCCESS, data);
            commit(actionTypes.RESET_INSERT_HOUSE, data);
          } else {
            commit(actionTypes.INSERT_HOUSE_FAILURE);
          }
          resolve(res);
        })
        .catch((err) => {
          commit(actionTypes.INSERT_HOUSE_FAILURE);
          reject(err);
        });
    });
  });

export const ajaxRequestDeleteHouse = createAction(
  'deleteHouse', (params) => {
    commit(actionTypes.DELETE_HOUSE_REQUEST);
    return new Promise((resolve, reject) => {
      axios.post(apis.deleteHouse, params)
        .then((res) => {
          res = res || {};
          const {data, success} = res;
          if (success) {
            commit(actionTypes.DELETE_HOUSE_SUCCESS, data);
            commit(actionTypes.RESET_DELETE_HOUSE, params);
          } else {
            commit(actionTypes.DELETE_HOUSE_FAILURE);
          }
          resolve(res);
        })
        .catch((err) => {
          commit(actionTypes.DELETE_HOUSE_FAILURE);
          reject(err);
        });
    });
  });

export const ajaxRequestUploadImage = createAction(
  'uploadImage', (params) => {
    commit(actionTypes.UPLOAD_IMAGE_REQUEST);
    return new Promise((resolve, reject) => {
      const {count, filePath} = params;
      const url = apis.baseUrl + apis.uploadImage.url;
      const header = {'Content-Type': 'multipart/form-data'};
      wx.uploadFile({
        url: url,
        filePath: filePath,
        name: 'file' + count,
        header: header,
        success: (res) => {
          res = res || {};
          const resData = JSON.parse(res.data);
          const {success, data} = resData;
          if (success) {
            commit(actionTypes.UPLOAD_IMAGE_SUCCESS, data);
          } else {
            commit(actionTypes.UPLOAD_IMAGE_FAILURE);
          }
          resolve(resData);
        },
        fail: (err) => {
          commit(actionTypes.UPLOAD_IMAGE_FAILURE);
          reject(err);
        }
      });
    });
  });

export const ajaxRequestUpdateHouse = createAction(
  'updateHouse', (params) => {
    commit(actionTypes.UPDATE_HOUSE_REQUEST);
    return new Promise((resolve, reject) => {
      axios.put(apis.updateHouse, params)
        .then((res) => {
          res = res || {};
          const {data, success} = res;
          if (success) {
            commit(actionTypes.UPDATE_HOUSE_SUCCESS, data);
            commit(actionTypes.RESET_UPDATE_HOUSE, data);
          } else {
            commit(actionTypes.UPDATE_HOUSE_FAILURE);
          }
          resolve(res);
        })
        .catch((err) => {
          commit(actionTypes.UPDATE_HOUSE_FAILURE);
          reject(err);
        });
    });
  });

export const ajaxRequestSelectHouse = createAction(
  'selectHouse', (params) => {
    commit(actionTypes.SELECT_HOUSE_REQUEST);
    return new Promise((resolve, reject) => {
      axios.get(apis.selectHouse, {params})
        .then((res) => {
          res = res || {};
          const {data, success} = res;
          if (success) {
            commit(actionTypes.SELECT_HOUSE_SUCCESS, data);
          } else {
            commit(actionTypes.SELECT_HOUSE_FAILURE);
          }
          resolve(res);
        })
        .catch((err) => {
          commit(actionTypes.SELECT_HOUSE_FAILURE);
          reject(err);
        });
    });
  });

export const ajaxRequestSelectHouseDetail = createAction(
  'selectHouseDetail', (params) => {
    commit(actionTypes.SELECT_HOUSE_DETAIL_REQUEST);
    return new Promise((resolve, reject) => {
      axios.get(apis.selectHouseDetail, {params})
        .then((res) => {
          res = res || {};
          const {data, success} = res;
          if (success) {
            commit(actionTypes.SELECT_HOUSE_DETAIL_SUCCESS, data);
          } else {
            commit(actionTypes.SELECT_HOUSE_DETAIL_FAILURE);
          }
          resolve(res);
        })
        .catch((err) => {
          commit(actionTypes.SELECT_HOUSE_DETAIL_FAILURE);
          reject(err);
        });
    });
  });

export const ajaxRequestInsertAgent = createAction(
  'insertAgent', (params) => {
    commit(actionTypes.INSERT_AGENT_REQUEST);
    return new Promise((resolve, reject) => {
      axios.post(apis.insertAgent, params)
        .then((res) => {
          res = res || {};
          const {data, success} = res;
          if (success) {
            commit(actionTypes.INSERT_AGENT_SUCCESS, data);
          } else {
            commit(actionTypes.INSERT_AGENT_FAILURE);
          }
          resolve(res);
        })
        .catch((err) => {
          commit(actionTypes.INSERT_AGENT_FAILURE);
          reject(err);
        });
    });
  });

export const ajaxRequestDeleteAgent = createAction(
  'deleteAgent', (params) => {
    commit(actionTypes.DELETE_AGENT_REQUEST);
    return new Promise((resolve, reject) => {
      axios.post(apis.deleteAgent, {params})
        .then((res) => {
          res = res || {};
          const {data, success} = res;
          if (success) {
            commit(actionTypes.DELETE_AGENT_SUCCESS, data);
          } else {
            commit(actionTypes.DELETE_AGENT_FAILURE);
          }
          resolve(res);
        })
        .catch((err) => {
          commit(actionTypes.DELETE_AGENT_FAILURE);
          reject(err);
        });
    });
  });

export const ajaxRequestUpdateAgent = createAction(
  'updateAgent', (params) => {
    commit(actionTypes.UPDATE_AGENT_REQUEST);
    return new Promise((resolve, reject) => {
      axios.get(apis.updateAgent, {params})
        .then((res) => {
          res = res || {};
          const {data, success} = res;
          if (success) {
            commit(actionTypes.UPDATE_AGENT_SUCCESS, data);
          } else {
            commit(actionTypes.UPDATE_AGENT_FAILURE);
          }
          resolve(res);
        })
        .catch((err) => {
          commit(actionTypes.UPDATE_AGENT_FAILURE);
          reject(err);
        });
    });
  });

export const ajaxRequestSelectAgent = createAction(
  'selectAgent', () => {
    commit(actionTypes.SELECT_AGENT_REQUEST);
    return new Promise((resolve, reject) => {
      axios.get(apis.selectAgent)
        .then((res) => {
          res = res || {};
          const {data, success} = res;
          if (success) {
            commit(actionTypes.SELECT_AGENT_SUCCESS, data);
          } else {
            commit(actionTypes.SELECT_AGENT_FAILURE);
          }
          resolve(res);
        })
        .catch((err) => {
          commit(actionTypes.SELECT_AGENT_FAILURE);
          reject(err);
        });
    });
  });
