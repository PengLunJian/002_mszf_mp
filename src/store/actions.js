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

export const ajaxRequestSelectCount = createAction(
  'selectCount', (params) => {
    commit(actionTypes.SELECT_COUNT_REQUEST);
    return new Promise((resolve, reject) => {
      axios.post(apis.selectCount, params)
        .then((res) => {
          res = res || {};
          const {data, success} = res;
          if (success) {
            commit(actionTypes.SELECT_COUNT_SUCCESS, data);
          } else {
            commit(actionTypes.SELECT_COUNT_FAILURE);
          }
          resolve(res);
        })
        .catch((err) => {
          commit(actionTypes.SELECT_COUNT_FAILURE);
          reject(err);
        });
    });
  });

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
            commit(actionTypes.INSERT_HOUSE_REPLACE, data);
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
            commit(actionTypes.DELETE_HOUSE_REPLACE, params);
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

export const ajaxRequestInsertImage = createAction(
  'insertImage', (params) => {
    commit(actionTypes.INSERT_IMAGE_REQUEST);
    return new Promise((resolve, reject) => {
      const {filePath} = params;
      const url = apis.baseUrl + apis.insertImage.url;
      const header = {'Content-Type': 'multipart/form-data;'};
      wx.uploadFile({
        url: url,
        name: 'file',
        header: header,
        filePath: filePath,
        success: (res) => {
          res = res || {};
          const resData = JSON.parse(res.data);
          const {success, data} = resData;
          if (success) {
            commit(actionTypes.INSERT_IMAGE_SUCCESS, data);
          } else {
            commit(actionTypes.INSERT_IMAGE_FAILURE);
          }
          resolve(resData);
        },
        fail: (err) => {
          commit(actionTypes.INSERT_IMAGE_FAILURE);
          reject(err);
        }
      });
    });
  });

export const ajaxRequestUpdateHouse = createAction(
  'updateHouse', (params) => {
    commit(actionTypes.UPDATE_HOUSE_REQUEST);
    return new Promise((resolve, reject) => {
      axios.post(apis.updateHouse, params)
        .then((res) => {
          res = res || {};
          const {data, success} = res;
          if (success) {
            commit(actionTypes.UPDATE_HOUSE_SUCCESS, data);
            commit(actionTypes.UPDATE_HOUSE_REPLACE, data);
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
      axios.post(apis.selectHouse, params)
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
            commit(actionTypes.INSERT_AGENT_REPLACE, data);
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
      axios.post(apis.deleteAgent, params)
        .then((res) => {
          res = res || {};
          const {data, success} = res;
          if (success) {
            commit(actionTypes.DELETE_AGENT_SUCCESS, data);
            commit(actionTypes.DELETE_AGENT_REPLACE, params);
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
      axios.post(apis.updateAgent, params)
        .then((res) => {
          res = res || {};
          const {data, success} = res;
          if (success) {
            commit(actionTypes.UPDATE_AGENT_SUCCESS, data);
            commit(actionTypes.UPDATE_AGENT_REPLACE, data);
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
  'selectAgent', (params) => {
    commit(actionTypes.SELECT_AGENT_REQUEST);
    return new Promise((resolve, reject) => {
      axios.post(apis.selectAgent, params)
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

export const ajaxRequestSelectBusiness = createAction(
  'selectBusiness', (params) => {
    commit(actionTypes.SELECT_BUSINESS_REQUEST);
    return new Promise((resolve, reject) => {
      axios.post(apis.selectBusiness, params)
        .then((res) => {
          res = res || {};
          const {data, success} = res;
          if (success) {
            commit(actionTypes.SELECT_BUSINESS_SUCCESS, data);
          } else {
            commit(actionTypes.SELECT_BUSINESS_FAILURE);
          }
          resolve(res);
        })
        .catch((err) => {
          commit(actionTypes.SELECT_BUSINESS_FAILURE);
          reject(err);
        });
    });
  });

export const ajaxRequestUpdateBusiness = createAction(
  'selectBusiness', (params) => {
    commit(actionTypes.UPDATE_BUSINESS_REQUEST);
    return new Promise((resolve, reject) => {
      axios.post(apis.updateBusiness, params)
        .then((res) => {
          res = res || {};
          const {data, success} = res;
          if (success) {
            commit(actionTypes.UPDATE_BUSINESS_REPLACE, data);
            commit(actionTypes.UPDATE_BUSINESS_SUCCESS, data);
          } else {
            commit(actionTypes.UPDATE_BUSINESS_FAILURE);
          }
          resolve(res);
        })
        .catch((err) => {
          commit(actionTypes.UPDATE_BUSINESS_FAILURE);
          reject(err);
        });
    });
  });

export const ajaxRequestSelectHouseDetail = createAction(
  'selectHouseDetail', (params) => {
    commit(actionTypes.SELECT_HOUSE_DETAIL_REQUEST);
    return new Promise((resolve, reject) => {
      axios.post(apis.selectHouseDetail, {params})
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

export const ajaxRequestSelectAgentDetail = createAction(
  'selectAgentDetail', (params) => {
    commit(actionTypes.SELECT_AGENT_DETAIL_REQUEST);
    return new Promise((resolve, reject) => {
      axios.post(apis.selectAgentDetail, {params})
        .then((res) => {
          res = res || {};
          const {data, success} = res;
          if (success) {
            commit(actionTypes.SELECT_AGENT_DETAIL_SUCCESS, data);
          } else {
            commit(actionTypes.SELECT_AGENT_DETAIL_FAILURE);
          }
          resolve(res);
        })
        .catch((err) => {
          commit(actionTypes.SELECT_AGENT_DETAIL_FAILURE);
          reject(err);
        });
    });
  });

export const insertLayoutReplace = createAction(
  'insertLayoutReplace', (params) => {
    commit(actionTypes.INSERT_LAYOUT_REPLACE, params);
  });

export const deleteLayoutReplace = createAction(
  'deleteLayoutReplace', (params) => {
    commit(actionTypes.DELETE_LAYOUT_REPLACE, params);
  });

export const updateLayoutReplace = createAction(
  'updateLayoutReplace', (params) => {
    commit(actionTypes.UPDATE_LAYOUT_REPLACE, params);
  });

export const selectLayoutReplace = createAction(
  'selectLayoutReplace', (params) => {
    commit(actionTypes.SELECT_LAYOUT_REPLACE, params);
  });

export const removeLayoutReplace = createAction(
  'removeLayoutReplace', () => {
    commit(actionTypes.REMOVE_LAYOUT_REPLACE);
  });

export const removeHouseReplace = createAction(
  'removeHouseReplace', () => {
    commit(actionTypes.REMOVE_HOUSE_REPLACE);
  });

export const removeImageReplace = createAction(
  'removeImageReplace', () => {
    commit(actionTypes.REMOVE_IMAGE_REPLACE);
  });
