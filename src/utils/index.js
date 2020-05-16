import * as storage from './storage';

/**
 *
 * @param key
 * @returns {string}
 */
export const getToken = (key) => {
  const accessToken = storage.getItem(key) || '';
  const token = 'Bearer ' + accessToken;
  return token;
};
/**
 *
 * @returns {any}
 */
export const getUser = () => {
  const user = storage.getItem('user');
  return user;
};
/**
 *
 * @returns {boolean}
 */
export const success = () => {
  const nums = parseInt(Math.random() * 100);
  return nums % 10 !== 0;
};
/**
 *
 * @param data
 * @returns {boolean}
 */
export const isExist = (data) => {
  return (
    (
      (!data) ||
      (data instanceof Array && !data.length) ||
      (JSON.stringify(data) === '{}')
    )
  );
};
/**
 *
 * @param params
 * @returns {*}
 */
export const stringify = (params) => {
  for (let key in params) {
    if (params[key] instanceof Array) {
      params[key] = JSON.stringify(params[key]);
    }
  }
  return params;
};
/**
 *
 * @returns {Array}
 */
export const buildArea = () => {
  let result = [];
  for (let i = 1; i <= 1000; i++) {
    result.push(i);
  }
  return result;
};
/**
 *
 * @param data
 * @returns {*}
 */
export const dataFormat = (data) => {
  const {
    openTime, handTime
  } = data;
  data.openTime = dateFormat(openTime, 'zh-cn');
  data.handTime = dateFormat(handTime, 'zh-cn');
  return data;
};
/**
 *
 * @param date
 * @param format
 * @returns {string}
 */
export const dateFormat = (date, format) => {
  let dateStr = '';
  if (!date) return dateStr;
  let newDate = new Date(date.replace(/-/g, '/'));
  let year = newDate.getFullYear();
  let month = newDate.getMonth() + 1;
  let day = newDate.getDate();
  let hour = newDate.getHours();
  let minute = newDate.getMinutes();
  let second = newDate.getSeconds();
  const monthStr = month > 9 ? '' + month : '0' + month;
  const dayStr = day > 9 ? '' + day : '0' + day;
  const hourStr = hour > 9 ? '' + hour : '0' + hour;
  const minuteStr = minute > 9 ? '' + minute : '0' + minute;
  const secondStr = second > 9 ? '' + second : '0' + second;
  switch (format) {
    case 'yyyy/mm/dd':
      dateStr = year + '/' + monthStr + '/' + dayStr;
      break;
    case 'yyyy/mm/dd hh':
      dateStr = year + '/' + monthStr + '/' + dayStr + ' ' + hourStr;
      break;
    case 'yyyy/mm/dd hh:mm':
      dateStr = year + '/' + monthStr + '/' + dayStr + ' ' + hourStr + ':' + minuteStr;
      break;
    case 'yyyy/mm/dd hh:mm:ss':
      dateStr = year + '/' + monthStr + '/' + dayStr + ' ' + hourStr + ':' + minuteStr + ':' + secondStr;
      break;
    case 'yyyy-mm-dd':
      dateStr = year + '-' + monthStr + '-' + dayStr;
      break;
    case 'zh-cn':
      dateStr = year + '年' + monthStr + '月' + dayStr + '日';
      break;
  }
  newDate = null;
  return dateStr;
};
