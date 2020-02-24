const apis = {
  baseUrl: 'http://sersms.com:7000/',
  method: 'POST',
  timeout: 5000,
  dataType: 'json',
  headers: {
    'Content-Type': 'application/json; charset=UTF-8'
  },
  insertHouse: {},
  selectLogin: {
    url: 'auth/account/login',
    params: {
      account: '',
      pwd: ''
    }
  },
  deleteHouse: {
    url: 'house/v1/houser/house/list',
    params: {}
  },
  updateHouse: {
    url: 'house/v1/houser/house/list',
    params: {}
  },
  selectHouse: {
    url: 'house/v1/houser/house/list',
    params: {}
  },
  selectHouseDetail: {
    url: 'house/v1/houser/house/detail',
    params: {}
  }
};

export default apis;
