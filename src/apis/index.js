const apis = {
  baseUrl: 'http://sersms.com:7000/',
  method: 'POST',
  timeout: 5000,
  dataType: 'json',
  headers: {
    'Content-Type': 'application/json; charset=UTF-8'
  },
  insertHouse: {
    url: 'house/v1/agency/house/detail',
    params: {
      pic_url: [
        '/pic/a.jpg',
        '/pic/a.jpg'
      ],
      tags: '南北通透 精装修 随时看房',
      type: 1,
      status: 1,
      phone: '18130278679',
      title: '万象小区 南向两居式 精装 拎包入住',
      price: 10000,
      total_price: 1400000,
      huxing: '2室一厅1卫',
      mianji: 140,
      chaoxiang: '朝南',
      leixing: '小区',
      zhaungxiu: '精装修',
      louceng: '16/20',
      nianai: '2014年',
      xiaoqu: '金峰万象小区',
      addr: '广德路与万贵山路交叉口',
      addr_sheng: '江苏省',
      addr_shi: '苏州省',
      addr_qu: '徐汇区',
      agency_phone: '15011110001',
      agency_com_name: '中一房产',
      kaipan: '2019-05-11',
      jiaofang: '2021-05-11',
      kanfangshijian: '随时看房',
      zhifufangshi: '押一付三',
      chuzufangshi: '整租'
    }
  },
  selectLogin: {
    url: 'auth/account/login',
    params: {
      account: '',
      pwd: ''
    }
  },
  deleteHouse: {
    url: 'house/v1/agency/house/delete',
    params: {
      id: 0
    }
  },
  updateHouse: {
    url: 'house/v1/agency/house/detail',
    params: {
      pic_url: [
        '/pic/a.jpg',
        '/pic/a.jpg'
      ],
      tags: '南北通透 精装修 随时看房',
      type: 1,
      status: 1,
      phone: '18130278679',
      title: '万象小区 南向两居式 精装 拎包入住',
      price: 10000,
      total_price: 1400000,
      huxing: '2室一厅1卫',
      mianji: 140,
      chaoxiang: '朝南',
      leixing: '小区',
      zhaungxiu: '精装修',
      louceng: '16/20',
      nianai: '2014年',
      xiaoqu: '金峰万象小区',
      addr: '广德路与万贵山路交叉口',
      addr_sheng: '江苏省',
      addr_shi: '苏州省',
      addr_qu: '徐汇区',
      agency_phone: '15011110001',
      agency_com_name: '中一房产',
      kaipan: '2019-05-11',
      jiaofang: '2021-05-11',
      kanfangshijian: '随时看房',
      zhifufangshi: '押一付三',
      chuzufangshi: '整租'
    }
  },
  selectHouse: {
    url: 'house/v1/houser/house/list',
    params: {
      page: {
        pageSize: 10,
        pageIndex: 1
      },
      filter: [
        {
          field: 'type',
          opt: '=',
          value: 3
        }
      ],
      sort: [
        {
          field: 'id',
          asc: false
        }
      ]
    }
  },
  uploadImage: {
    url: 'house/v1/file/uploadfile',
    params: {}
  },
  insertAgent: {
    url: 'auth/company/agency/create',
    params: {
      id: 1,
      com_id: 1,
      name: '张三',
      tel: '15044446666',
      remarks: '好评经纪人，专业挑好房'
    }
  },
  deleteAgent: {
    url: 'auth/company/agency/delete',
    params: {
      id: 1
    }
  },
  updateAgent: {
    url: 'auth/company/agency/update',
    params: {
      id: 1
    }
  },
  selectAgent: {
    url: 'auth/company/agency/list',
    params: {}
  },
  selectHouseDetail: {
    url: 'house/v1/houser/house/detail',
    params: {
      house_id: 2
    }
  }
};

export default apis;
