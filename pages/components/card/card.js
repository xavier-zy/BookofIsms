// pages/components/card/card.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    showCard: Boolean,
    searchResult: Object
  },

  /**
   * 组件的初始数据
   */
  data: {
    show: false,
    maxHeight: 0,
    result: [],
    zh: false
  },

  lifetimes: {
    attached: function () {
      var mh = 0;
      wx.getSystemInfo({
        success(res) {
          mh = res.windowHeight * 0.9
        }
      });
      this.setData({
        maxHeight: mh
      });
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onClose() {
      this.setData({
        show: false
      });
    },

    switchLang: function () {
      this.setData({
        zh: !this.data.zh
      })
    }
  },

  observers:{
    'searchResult': function () {
      this.setData({
        show: this.data.showCard,
        result: this.data.searchResult
      });
    }
  }
})