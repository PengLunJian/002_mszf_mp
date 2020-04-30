const apis = {
  baseUrl: 'http://118.190.202.38:8181/api',
  fileUrl: 'http://47.103.197.178:8080',
  method: 'POST',
  timeout: 5000,
  dataType: 'json',
  headers: {
    'Authorization': '',
    'Content-Type': 'application/json; charset=UTF-8'
  },
  selectLogin: {
    url: '/login',
    params: {
      userName: '',
      passWord: ''
    }
  },
  selectCount: {
    url: '/house/total',
    params: {
      id: ''
    }
  },
  insertHouse: {
    url: '/house/insert',
    params: {
      xiaoqu: '',
      type: '',
      state: '',
      sheng: '',
      shi: '',
      area: '',
      address: '',
      maxmianji: '',
      minmianji: '',
      mianji: '',
      lianxiren: '',
      phoneNo: '',
      kaipanTime: '',
      jiaofangTime: '',
      huxing: '',
      remark: '',
      tags: '',
      zhulihuxing: '',
      totalPrice: '',
      chaoxiang: '',
      nianfen: '',
      kanfang: '',
      zonglouceng: '',
      shijilouceng: '',
      zhuangxiu: '',
      fangyuanpeizhi: '',
      url: '',
      zhifufangshi: '',
      chuzufangshi: '',
      leixing: ''
    }
  },
  deleteHouse: {
    url: '/house/delete',
    params: {
      id: 0
    }
  },
  updateHouse: {
    url: '/house/update',
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
    url: '/house/select',
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
      ],
      only_my: true
    }
  },
  insertImage: {
    url: '/image/upload',
    params: {}
  },
  insertAgent: {
    url: '/agent/insert',
    params: {
      busCode: '',
      jingjirenName: '',
      picUrl: '',
      telNo: '',
      remark: ''
    }
  },
  deleteAgent: {
    url: '/agent/delete',
    params: {
      id: 1
    }
  },
  updateAgent: {
    url: '/agent/update',
    params: {
      id: 1
    }
  },
  selectAgent: {
    url: '/agent/select',
    params: {
      busCode: ''
    }
  },
  selectBusiness: {
    url: '/business/select',
    params: {
      id: 1
    }
  },
  updateBusiness: {
    url: '/business/update',
    params: {
      id: 1
    }
  },
  selectCustomer: {
    url: '/history/browse',
    params: {
      busId: 0,
      pageIndex: 1,
      pageSize: 10
    }
  },
  selectHouseDetail: {
    url: '/house/v1/houser/house/detail',
    params: {
      house_id: 2
    }
  }
};

export default apis;
