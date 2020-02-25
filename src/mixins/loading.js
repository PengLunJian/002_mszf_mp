export default {
  data: {
    mixin: 'MixinText'
  },
  methods: {
    showLoading(title) {
      wx.showLoading({
        title: title || '正在加载',
        mask: true
      });
    },
    hideLoading() {
      wx.hideLoading();
    }
  },
  created() {
    console.log('created in mixin');
  }
};
