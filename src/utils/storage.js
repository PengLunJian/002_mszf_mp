/**
 *
 * @param key
 * @param value
 */
export const setItem = (key, value) => {
  try {
    wx.setStorageSync(key, value);
  } catch (e) {
    console.log(e);
  }
};
/**
 *
 * @param key
 * @returns {any}
 */
export const getItem = (key) => {
  try {
    const value = wx.getStorageSync(key);
    if (value) {
      return value;
    }
  } catch (e) {
    console.log(e);
  }
};
/**
 *
 * @param key
 */
export const removeItem = (key) => {
  try {
    wx.removeStorageSync(key);
  } catch (e) {
    console.log(e);
  }
};
