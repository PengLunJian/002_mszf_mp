export const LOGIN = {
  name: '登录',
  path: '/pages/login/index'
};

export const INDEX = {
  name: '首页',
  path: '/pages/index/index'
};

export const HOUSE = {
  INSERT: {
    NEW_HOUSE: {
      name: '新房添加',
      path: '/packageHouse/pages/insert/insert-new-house/index'
    },
    SECOND_HOUSE: {
      name: '二手房添加',
      path: '/packageHouse/pages/insert/insert-second-house/index'
    },
    RENT_HOUSE: {
      name: '租房添加',
      path: '/packageHouse/pages/insert/insert-rent-house/index'
    }
  },
  UPDATE: {
    NEW_HOUSE: {
      name: '新房修改',
      path: '/packageHouse/pages/update/update-new-house/index'
    },
    SECOND_HOUSE: {
      name: '二手房修改',
      path: '/packageHouse/pages/update/update-second-house/index'
    },
    RENT_HOUSE: {
      name: '租房修改',
      path: '/packageHouse/pages/update/update-rent-house/index'
    }
  },
  SELECT: {
    name: '房源查询',
    path: '/packageHouse/pages/select/index'
  },
  DETAIL: {
    name: '房源详情',
    path: '/packageHouse/pages/detail/index'
  },
  LAYOUT: {
    name: '主力户型',
    path: '/packageHouse/pages/layout/index'
  },
  UPLOAD: {
    name: '图片上传',
    path: '/packageHouse/pages/upload/index'
  }
};

export const AGENT = {
  INSERT: {
    name: '经纪人添加',
    path: '/packageAgent/pages/insert/index'
  },
  UPDATE: {
    name: '经纪人修改',
    path: '/packageAgent/pages/update/index'
  },
  SELECT: {
    name: '经纪人查询',
    path: '/packageAgent/pages/select/index'
  },
  DETAIL: {
    name: '经纪人详情',
    path: '/packageAgent/pages/detail/index'
  },
  UPLOAD: {
    name: '图片上传',
    path: '/packageAgent/pages/upload/index'
  }
};

export const CUSTOMER = {
  SELECT: {
    name: '用户查询',
    path: '/packageCustomer/pages/select/index'
  },
  RECORD: {
    name: '记录查询',
    path: '/packageCustomer/pages/record/index'
  }
};

export const BUSINESS = {
  SELECT: {
    name: '商户查询',
    path: '/packageBusiness/pages/select/index'
  },
  UPLOAD: {
    name: '图片上传',
    path: '/packageBusiness/pages/upload/index'
  }
};
